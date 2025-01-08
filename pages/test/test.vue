<template>
  <view style="width: 80%;
      height: 80%;
      margin: auto;
      padding: 10% 0;">
    <view>
      <img style="width: 100%;border-radius: 6%;"
        :src="songList[songIndex].pic"
      ></img>
    </view>
    <view style="padding-top: 40rpx;line-height: 2;">
      <view style="font-size: 40rpx;font-weight: bold;">{{songList[songIndex].sing}}</view>
      <view>{{songList[songIndex].song}}</view>
      <view>歌词</view>
    </view>
  </view>

  <view class="music">
    <view class="music-box">
      <view>
        <slider
          :max="duration"
          :value="currentTime"
          @change="sliderChange"
          activeColor="#FFCC33"
          backgroundColor="#ccc"
          block-color="#8A6DE9"
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
        <view v-for="(song, index) in songList" :key="index" @click="openPopup(song)">
          <!-- {{ song }} -->
          <view @click="changeSong(_, index)" style="display: flex;justify-content: space-between;align-items: center;
          padding: 10rpx 0;width: 90vw;">
              <view :class="{'currentIndex': index === songIndex}" style="display: flex;
             align-items: center;width: 80%;white-space: nowrap;">
                <view >{{ song.song}}</view>
                <view :class="{'currentIndex': index === songIndex}" class="popup-content-sing">{{ ' - ' + song.sing }}</view>
              </view>
            <view style="color: rgba(51, 51, 51,0.8);display: flex;align-items: center;">
              <view :class="{'currentIndex': index === songIndex}" style="margin:20rpx">xxx</view>
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
import { ref, onMounted, onUnmounted, watch } from "vue";

let playMode = ref("list"); // 听歌模式 顺序播放，单曲循环，随机播放
let context = ref({}); // 当前音频
// 音频信息
let duration = ref(-1); // 当前音频总时常
let currentTime = ref(0); // 当前音频播放的位置
const songList = ref(JSON.parse(uni.getStorageSync("movies"))); // 获取音乐列表
let songIndex = ref(0); // 当前播放歌曲的索引
let playStatus = ref(false); // 播放状态 true 暂停 false 播放
let playStatusMode = ref('stop'); // 播放状态icon
let isPopupShow = ref(true); // 是否显示播放列表

/**
 * 从本地存储中获取当前歌曲索引
 * @returns 当前歌曲索引 || 0
 */
function getSongIndex() {
  const index = uni.getStorageSync('songIndex');
  return index !== null ? parseInt(index) : 0;
}
// 初始化 songIndex 的值
songIndex.value = getSongIndex();
// 监听 songIndex 的变化，并保存到本地存储
watch(songIndex, (newIndex)=>{
  uni.setStorageSync("songIndex", newIndex);
}, { immediate: true }); // 立即执行一次，以便初始化时也保存索引

onMounted(() => {
  // 获取音乐列表
  console.log('songList',songList.value);
  songIndex.value = JSON.parse(uni.getStorageSync("songIndex")) || 0;

  // 获取音频播放状态
  playMode.value = JSON.parse(uni.getStorageSync("playMode")) || "list";
  // 创建音频上下文
  context.value = uni.createInnerAudioContext();
  // context.value.autoplay = true; // 进入页面播放
  setAndSrc(songIndex.value); // 设置音频地址
  playStatus.value = context.value.paused;
  console.log('当前歌曲',context.value);

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

  setupAudioListeners();
});

/**
 * 根据索引获取音频地址
 * @param index 当前播放歌曲的索引
 */
function setAndSrc(index){
  context.value.src = songList.value[index].url;
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
  uni.setStorageSync("playMode", JSON.stringify(playMode.value));
};
/**
 * 切换播放模式
 */
function setupAudioListeners() {
  context.value.onEnded(() => {
    if (playMode.value === 'single') {
      // 单曲循环
      context.value.seek(0);
      context.value.play();
    } else if(playMode.value === "random"){
      // 随机播放
      songIndex.value = Math.floor(Math.random() * songList.value.length);
      setAndSrc(songIndex.value);
      context.value.seek(0);
      context.value.play();
    } else {
      // 顺序播放
      changeSong('next')
    }
  });
}
/**
 * 播放/暂停 音频
 */
function onPlay(){
  if(!context.value.paused){
    context.value.pause();
    playStatusMode.value = 'stop';
  } else {
    context.value.play();
    playStatusMode.value = 'play';
  }
}
/**
 * 上一首、下一首
 * @params type 上一首，下一首
 */
 const changeSong = (type, index) => {
  console.log('index', index);
  
  // 上一首
  if (type === "prev") {
    if (songIndex.value === 0) {
      songIndex.value = songList.value.length - 1;// 如果是第一首歌曲，则跳到列表的最后一首
    } else {
      songIndex.value--;
    }
    setAndSrc(songIndex.value);
    onPlay();
  } else if( type === "next") {
    // 下一首
    if(songIndex.value === songList.value.length - 1){
      songIndex.value = 0;// 如果是最后一首歌曲，则跳到列表的第一首
    } else {
      songIndex.value++;
    }
    setAndSrc(songIndex.value);
    onPlay();
  } else {
    setAndSrc(index);
    onPlay();
  }
}
// 歌曲列表
function openPopup(){
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


// 滑块
const sliderChange = (e) => {
  const value = e.detail.value;
  context.value.seek(value);
};





onUnmounted(() => {
  // 销毁当前实例
  context.value.destroy();
});
</script>

<style lang="scss">
.music {
  margin: 40rpx;
  width: 672rpx;
  position: fixed;
  bottom: 9%;
  left: 0;
  .music-box {
    .music-time {
      display: flex;
      justify-content: space-between;
      color: #666;
    }
  }

  .play-btn {
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
