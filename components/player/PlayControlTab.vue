<!-- Tab 1：播放界面（含封面、控件、当前歌词） -->
<!-- components/player/PlayControlTab.vue -->
<template>
  <view style="width: 90%;
      height: 80%;
      margin: auto;
      padding: 0 0 10% 0;">
    <view>
      <img style="width: 100%;border-radius: 6%;"
        :src="songList[songIndex]?.pic"
      ></img>
      
    </view>
    <view style="padding-top: 40rpx;line-height: 2;">
      <view style="font-size: 40rpx;font-weight: bold;">{{songList[songIndex]?.sing}}</view>
      <view>{{songList[songIndex]?.song}}</view>
      <view class="lyrics-container" ref="lyricsContainerRef" :style="{ height: lyricsContainerHeight + 'rpx' }" style="margin-top: 20rpx">
        <view v-for="(line, index) in formatLyrics(context.lyrics)" :key="index" :class="{ 'current-line': index === currentLyricIndex }">
          {{ line }}
        </view>
      </view>
    </view>
  </view>
  <view class="music">
    <view class="music-box">
      <view>
        <slider
          :max="duration"
          :value="currentTime"
          @change="sliderChange"
          activeColor="#000"
          backgroundColor="#ccc"
          block-color="#000"
          block-size="12"
          style="margin: 0"
        />
      </view>
      <view class="music-time">
        <view class="time-left">
          {{ formatTime(currentTime) }}
        </view>
        <view class="time-right">
          {{ formatTime(duration) }}
        </view>
      </view>
    </view>
    <view class="play-btn">
      <view class="no-play">
        <image
          :src="`../../static/images/play/${playMode}-loop-icon.png`"
          mode=""
          @click="changeMode"
        ></image>
      </view>
      <view class="no-play" @click="changeSong('prev')">
        <image src="../../static/images/play/prev-icon.png" mode=""></image>
      </view>
      <view class="play" @click="onPlay">
        <image
          :src="`../../static/images/play/${playStatusMode}-icon.png`"
          mode=""
        ></image>
      </view>

      <view class="no-play" @click="changeSong('next')">
        <image src="../../static/images/play/next-icon.png" mode=""></image>
      </view>

      <view class="no-play" @click="openPopup">
        <image src="../../static/images/play/list-icon.png" mode=""></image>
      </view>
    </view>
  </view>
  <view>
    <!-- 歌曲列表 -->

    <!-- 弹出层 -->
    <view class="popup" :class="{ 'popup-show': isPopupShow }">
      <view class="popup-content">
        <!-- 弹出层内容 -->
        <view class="popup-header">歌曲名称：xxx</view>
        <!-- <view>歌曲名称：{{ currentSong.name }}</view> -->
        <view
          v-for="(song, index) in songList"
          :key="index"
          @click="openPopup(song)"
        >
          <!-- {{ song }} -->
          <view
            @click="changeSong(_, index)"
            style="
              display: flex;
              justify-content: space-between;
              align-items: center;
              padding: 10rpx 0;
              width: 90vw;
            "
          >
            <view
              :class="{ currentIndex: index === songIndex }"
              style="
                display: flex;
                align-items: center;
                width: 80%;
                white-space: nowrap;
              "
            >
              <view>{{ song.song }}</view>
              <view
                :class="{ currentIndex: index === songIndex }"
                class="popup-content-sing"
                >{{ " - " + song.sing }}</view
              >
            </view>
            <view
              style="
                color: rgba(51, 51, 51, 0.8);
                display: flex;
                align-items: center;
              "
            >
              <view
                :class="{ currentIndex: index === songIndex }"
                style="margin: 20rpx"
                >xxx</view
              >
              <view>X</view>
            </view>
          </view>
        </view>
      </view>
    </view>

    <!-- 遮罩层 -->
    <view class="mask" v-if="isPopupShow" @click="closePopup"></view>
  </view>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch, computed } from "vue";
import { usePlayerStore } from "@/stores/usePlayerStore";
import Header from "@/components/Header/Header.vue";
import lyrics from '@/assets/lyrics/lyrics.js'
console.log('lyrics', lyrics);

const props = defineProps({
  song: {
    type: Object,
    required: true,
  },
  isPlaying: {
    type: Boolean,
    default: false,
  },
  currentLyric: {
    type: String,
    default: "",
  },
});

const emit = defineEmits(["togglePlay", "prev", "next"]);

const playerStore = usePlayerStore();
// 歌词相关
const lyricsContainerHeight = ref(300); // 歌词容器高度，默认300rpx
const currentLyricIndex = ref(0); // 当前高亮的歌词行
const displayedLyrics = ref([]); // 实际显示的歌词
// 音频相关
let playMode = ref("list"); // 听歌模式 顺序播放，单曲循环，随机播放
let context = ref({}); // 当前音频
// 音频信息
let duration = ref(-1); // 当前音频总时常
let currentTime = ref(0); // 当前音频播放的位置
// const songList = ref(JSON.parse(uni.getStorageSync("music-player"))); // 获取音乐列表
// const songList = ref(playerStore.playList); // 获取当前播放的音乐列表
// 歌曲列表和当前索引来自 store
const songList = computed(() => playerStore.playList || JSON.parse(uni.getStorageSync("music-player")));
console.log('songList', songList.value);

const songIndex = computed(() => playerStore.currentIndex);
const isPlaying = computed(() => playerStore.isPlaying);
// 播放模式映射（store 用 0/1/2，UI 用字符串）
const playModeStr = computed(() => {
  return ['list', 'single', 'random'][playerStore.playMode] || 'list';
});


let playStatusMode = ref('pause'); // 播放状态icon
let isPopupShow = ref(false); // 是否显示播放列表
// 可以根据歌词行数动态调整高度
const updateLyricsContainerHeight = () => {
  const lyricsLines = formatLyrics(context.value.lyrics).length;
  // 每行约40rpx，最多显示8行
  const calculatedHeight = Math.min(lyricsLines * 40, 320);
  lyricsContainerHeight.value = calculatedHeight;
};

const scrollToCurrentLyric = () => {
  // 滚动到当前歌词行
  const lyricsContainer = document.querySelector('.lyrics-container');
  const lineHeight = 40; // 每行歌词的高度，单位为rpx
  const scrollTop = currentLyricIndex.value * lineHeight;
  lyricsContainer.scrollTop = scrollTop;
  updateLyricsContainerHeight();
};
/**
 * 从本地存储中获取当前歌曲索引
 * @returns 当前歌曲索引 || 0
 */
function getSongIndex() {
  const index = uni.getStorageSync('songIndex');
  const parsedIndex = parseInt(index);
  return isNaN(parsedIndex) ? 0 : parsedIndex;
}
// 初始化 songIndex 的值
songIndex.value = getSongIndex();
// 监听 songIndex 的变化，并保存到本地存储
watch(songIndex, (newIndex)=>{
  uni.setStorageSync("songIndex", newIndex);
});

onMounted(() => {
  console.log('进入页面');
  // 获取当前歌曲索引
  songIndex.value = getSongIndex();
  // 获取音频播放状态
  playMode.value = uni.getStorageSync("playMode") || "list";
  // 创建音频上下文
  context.value = uni.createInnerAudioContext();
  setAndSrc(songIndex.value); // 设置音频地址
  isPlaying.value = context.value.paused;
  console.log("当前歌曲", context.value);

  // 获取音频的总时长，并将其设置为slider组件的max属性
  context.value.onCanplay(() => {
    // 获取音频总时长
    duration.value = context.value.duration;
  });
  // 音频播放错误事件
  context.value.onError((res) => {
    console.log(res.errMsg);
    console.log(res.errCode);
  });
  // 更新当前播放时间
  context.value.onTimeUpdate(() => {
    // 更新slider的值
    currentTime.value = context.value.currentTime;
  });
  setupAudioListeners(); // 获取播放模式
});

/**
 * 根据索引获取音频地址
 * @param index 当前播放歌曲的索引
 */
function setAndSrc(index){
  if (!context.value) {
    context.value = uni.createInnerAudioContext();
  }
  songIndex.value = index;
  context.value.src = songList.value[songIndex.value].url;
  // 查找匹配的歌词
  const currentLyrics = lyrics.find(item => item.pid == songList.value[songIndex.value].id);
  context.value.lyrics = currentLyrics ? currentLyrics.lyrics : '无歌词';
}
// 格式化歌词
function formatLyrics(lyricsText) {
  if (!lyricsText || lyricsText === '无歌词') {
    return ['暂无歌词'];
  }
  // 根据逗号分割歌词
  return lyricsText.split(',');
}
/**
 * @params 播放模式
 * 顺序播放，单曲循环，随机播放
 * list，single，random
 */
const changeMode = () => {
  if (playMode.value === "list") {
    playMode.value = "single";
    uni.showToast({
      title: "单曲循环",
      icon: "success",
    });
    // 单曲循环
  } else if (playMode.value === "single") {
    playMode.value = "random";
    uni.showToast({
      title: "随机播放",
      icon: "success",
    });
  } else {
    playMode.value = "list";
    uni.showToast({
      title: "顺序播放",
      icon: "success",
    });
  }
  uni.setStorageSync("playMode", playMode.value);
};
/**
 * 切换播放模式
 */
function setupAudioListeners() {
  if (!context.value) {
    console.error('音频上下文未初始化');
    return;
  }
  context.value.onEnded(() => {
    if (playMode.value === "single") {
      // 单曲循环
      context.value.seek(0);
      playMusic();
    } else if (playMode.value === "random") {
      // 随机播放
      songIndex.value = Math.floor(Math.random() * songList.value.length);
      setAndSrc(songIndex.value);
      context.value.seek(0);
      playMusic();
    } else {
      // 顺序播放
      changeSong("next");
    }
  });
}
/**
 * 播放/暂停 音频
 */
function onPlay() {
  // 检查 context.value 是否存在且为有效对象
  if (!context.value) {
    console.error('音频上下文未初始化');
    return;
  }
  if (!context.value.paused) {
    context.value.pause();
    playStatusMode.value = "pause";
    playerStore.isPlaying = false;
  } else {
    playMusic();
    // context.value.play();
    playStatusMode.value = "play";
    playerStore.isPlaying = true;
  }
}
/**
 * 上一首、下一首
 * @params type 上一首，下一首
 * @params index 当前播放歌曲的索引
 */
function changeSong(type, index = songIndex.value) {
  console.log("type", type);
  console.log("index", index);
  // 上一首
  if (type === "prev") {
    playerStore.prev();
  } else if (type === "next") {
    // 下一首
    playerStore.next();
  } else if (typeof index === "number") {
    // 点击列表播放对应的歌曲
    // playerStore.playIndex(index);
    playerStore.playSong(index);
  }

  // 更新 audio sec（因为store变了）
  const newSong = playerStore.currentSong;
  if(newSong) {
    context.value.src = newSong.url; // 设置音频地址
    context.value.seek(0); // 重置播放位置
    playMusic(); // 播放新歌曲
  }
};
// 歌曲列表
function openPopup() {
  isPopupShow.value = true;
}
function closePopup() {
  isPopupShow.value = false;
}

/**
 * 时间转换
 * @params 总时长s number
 * @returns 分:秒
 */
function formatTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes < 10 ? "0" + minutes : minutes}:${
    seconds < 10 ? "0" + seconds : seconds
  }`;
}

// 音频播放进度滑块
const sliderChange = (e) => {
  const value = e.detail.value;
  context.value.seek(value);
};

// 播放音频
function playMusic() {
  // 检查音频是否已经加载完成
  if (isNaN(context.value.duration) || context.value.duration <= 0) {
    // 设置 canplay 事件监听器，等待音频加载完成
    context.value.onCanplay(() => {
      console.log('音频加载完成，duration:', context.value.duration);
      
      if (isNaN(context.value.duration) || context.value.duration <= 0) {
        uni.showToast({
          title: "该歌曲暂不支持播放",
          icon: "none",
        });
        changeSong("next");
      } else {
        context.value.play();
      }
    });
    // 设置错误处理
    context.value.onError((error) => {
      console.error('音频播放错误:', error);
      uni.showToast({
        title: "歌曲加载失败",
        icon: "none",
      });
      changeSong("next");
    });
  } else {
    context.value.play();
  }
}

onUnmounted(() => {
  // 销毁当前实例
  context.value.destroy();
});
</script>

<style scoped lang="scss">
.music {
  margin: 40rpx;
  // width: 672rpx; // 25.12.24
  width: 90%; // 25.12.24
  position: fixed;
  bottom: 8%;
  left: 0;
  .music-box {
    width: 100%; // 25.12.24
    margin: 20rpx 0;
    .music-time {
      display: flex;
      justify-content: space-between;
      color: #666;
    }
  }

  .play-btn {
    width: 100%; // 25.12.24
    display: flex;
    justify-content: space-between;
    align-items: center;
    .play {
      width: 60rpx;
      height: 60rpx;
    }
    .no-play {
      width: 40rpx;
      height: 40rpx;
    }
  }
}

image {
  width: 100%;
  height: 100%;
}
// 遮罩层
.popup {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 0;
  background-color: #ffffff;
  transition: height 0.3s;
  overflow: hidden;
  z-index: 1001;
}
.lyrics-container {
  overflow-y: auto;
  scroll-behavior: smooth;
}

.current-line {
  color: #31c27c;
  font-weight: bold;
  // transform: scale(1.05);
  font-size: 36rpx;
}

.popup-show {
  height: 50%; /* 根据实际需要调整高度 */
  overflow: auto;
  border-radius: 6% 6% 0 0;
}

.popup-content {
  padding: 40rpx;
}

.popup-header {
  position: sticky;
  top: 0;
  left: 0;
  background: #fff;
  margin: -40rpx -40rpx 20rpx -40rpx;
  padding: 40rpx;
  border-bottom: 1px solid #eee;
}

.mask {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
}

.currentIndex {
  color: #31c27c !important;
}
.popup-content-sing {
  color: #999;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
