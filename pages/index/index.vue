<template>
  <Header
    title=""
    :background-color="backgroundColor"
    :font-color="fontColor"
    :fixed="fixed"
  >
  </Header>
  <!-- 本周精选 -->
  <view class="week-recommend">
    <!-- 背景图 -->
    <image
      src="https://images.unsplash.com/photo-1493225255756-d9584f8606e9?auto=format&fit=crop&q=80&w=1000"
      mode="aspectFill"
      class="bg-image"
    />
    <!-- 渐变遮罩层（从下往上） -->
    <view class="overlay"></view>
    <!-- 文字内容区 -->
    <view class="text-content">
      <span class="tag">本周精选</span>
      <h2 class="title">赛博之声 2024</h2>
      <p class="subtitle">感受跨越维度的数字律动</p>
    </view>
  </view>

  <!-- 为你定制 -->
  <view class="custom-made">
    <view class="custom-made-title">
      <text class="title">为你定制</text>
      <text class="more">全部</text>
    </view>
    <view class="custom-made-list">
      <view
        class="custom-made-item"
        :class="{ active: isCustomActive }"
        @touchstart="handleTouchStart('isCustomActive')"
        @touchend="handleTouchEnd('isCustomActive')"
        @touchcancel="handleTouchEnd('isCustomActive')"
        @click="onPlaySong"
      >
        <view class="custom-made-item-container">
          <image
            src="https://picsum.photos/seed/p1/400/400"
            mode="aspectFill"
            class="custom-made-item-image"
          ></image>
          <view class="play-icon"></view>
        </view>

        <text class="title">2024 年度热门</text>
        <text class="msg">为您精选的年度最热歌曲。</text>
      </view>
      <view class="custom-made-item">
        <view class="custom-made-item-container">
          <image
            src="https://picsum.photos/seed/p2/400/400"
            mode="aspectFill"
            class="custom-made-item-image"
          ></image>
          <view class="play-icon"></view>
        </view>
        <text class="title">放松时光</text>
        <text class="msg">在忙碌的午后享受片刻宁静。</text>
      </view>
    </view>
  </view>

  <!-- 活动歌单推荐 -->
  <view class="activity-song-list">
    <text class="title">活动歌单推荐</text>
    <view class="song-list">
      <view class="song-item" @click="toSongList">
        <image
          src="https://picsum.photos/200/300"
          mode="aspectFill"
          class="song-item-image"
        ></image>

        <text class="tag">歌单</text>
        <text class="msg">为您精选的年度最热歌曲。</text>
      </view>
      <view class="song-item">
        <image
          src="https://picsum.photos/200/300"
          mode="aspectFill"
          class="song-item-image"
        ></image>
        <text class="tag">歌单</text>
        <text class="msg">在忙碌的午后享受片刻宁静。</text>
      </view>
      <view class="song-item">
        <image
          src="https://picsum.photos/200/300"
          mode="aspectFill"
          class="song-item-image"
        ></image>
        <text class="tag">歌单</text>
        <text class="msg">在忙碌的午后享受片刻宁静。</text>
      </view>
      <view class="song-item">
        <image
          src="https://picsum.photos/200/300"
          mode="aspectFill"
          class="song-item-image"
        ></image>
        <text class="tag">歌单</text>
        <text class="msg">在忙碌的午后享受片刻宁静。</text>
      </view>
    </view>
  </view>
  <view style="height: 120rpx"></view>
  <!-- 播放栏 -->
  <view class="music-player">
    <image
      src="https://picsum.photos/200/200"
      mode="aspectFill"
      class="player-cover"
    ></image>

    <view class="player-info">
      <text class="song-name">霓虹灰色</text>
      <text class="artist">周深</text>
      <view>
        <!-- @change="sliderChange" -->
        <slider
          :max="duration"
          :value="currentTime"
          activeColor="#8A6DE9"
          backgroundColor="#ccc"
          block-size="12"
          style="margin: 0"
        />
      </view>
    </view>

    <view class="player-controls">
      <!-- <text class="control-btn">⏮</text> -->
      <!-- <text class="play-btn" @click="togglePlay">
        {{ isPlaying ? "⏸" : "▶" }}
      </text> -->
      <image
        :src="
          !isPlaying
            ? '../../static/images/play/pause-icon.png'
            : '../../static/images/play/play-icon.png'
        "
        mode="aspectFill"
        style="width: 20px; height: 20px"
        @click="togglePlay"
      ></image>
      <!-- <text class="control-btn">⏭</text> -->
      <image
        src="../../static/images/play/next-icon.png"
        mode="aspectFill"
        style="width: 20px; height: 20px"
      ></image>
    </view>
  </view>
</template>

<script setup>
import { ref } from "vue";
import searchVue from "@/components/searchVue/searchVue.vue";
import getMovies from "../../api/movies.json";
import Header from "@/components/Header/Header.vue";

const backgroundColor = ref("#f0f5f8");
const fontColor = ref("#333");
const fixed = ref(true);
const title = "hello";
const currentTime = ref(0);
const duration = ref(100); // 歌曲时长
const isPlaying = ref(false);
const isCustomActive = ref(false);
const isActivityActive = ref(false); // 活动

uni.setStorageSync("movies", JSON.stringify(getMovies.data));

// 页面滚动监听函数（uni-app 自动调用）
const onPageScroll = (e) => {
  if (e.scrollTop < 5) {
    // 顶部附近 - 白色字体，透明背景
    fontColor.value = "#fff";
    backgroundColor.value = "transparent";
  } else if (e.scrollTop < 50) {
    // 滚动中间过程 - 渐变效果
    const rate = e.scrollTop / 50;
    backgroundColor.value = `rgba(248, 248, 248, ${rate})`;
    fontColor.value = `rgba(51, 51, 51, ${rate})`;
  } else {
    // 滚动较多 - 完全不透明背景，黑色字体
    backgroundColor.value = "rgba(248, 248, 248, 1)";
    fontColor.value = "rgba(51, 51, 51, 1)";
  }
};
function handleTouchStart(type) {
  console.log("开始触摸");
  if (type === "isCustomActive") {
    isCustomActive.value = true; // 为你定制
  }
}
function handleTouchEnd(type) {
  console.log("结束触摸");
  if (type === "isCustomActive") {
    setTimeout(() => {
      isCustomActive.value = false;
    }, 120);
  }
}
/**
 * 播放歌曲
 * @remarks 打开当前歌曲
 */ function onPlaySong() {
  console.log("播放歌曲");
}
/**
 * 跳转到歌单
 * @remarks 跳转到歌单页面
 */
function toSongList() {
  uni.navigateTo({
    url: "/pages/songList/songList",
  });
}
// 播放 & 暂停
const togglePlay = () => {
  isPlaying.value = !isPlaying.value;
};
</script>

<style lang="less">
.week-recommend {
  position: relative;
  width: 100%;
  height: 469rpx;
  border-radius: 32rpx;
  overflow: hidden;
  box-shadow: 0 10rpx 30rpx rgba(0, 0, 0, 0.1);
  // margin-bottom: 60rpx;
  margin: 120rpx 0 60rpx 0;

  .bg-image {
    width: 100%;
    object-fit: cover;
    filter: brightness(0.9) contrast(1.1);
  }

  // 渐变遮罩：从底部向上渐变，深蓝色半透明
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to top,
      rgba(56, 47, 116, 0.9),
      rgba(30, 41, 97, 0.5),
      transparent
    );
    border-radius: 32rpx;
    z-index: 1;
  }

  .text-content {
    position: absolute;
    bottom: 32rpx;
    left: 32rpx;
    color: white;
    text-align: left;
    z-index: 2;
    font-family: "PingFang SC", sans-serif;
  }

  .tag {
    display: inline-block;
    background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(8rpx); /* 模拟 backdrop-blur-md */
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: white;
    padding: 4rpx 12rpx;
    border-radius: 20rpx;
    font-size: 20rpx;
    letter-spacing: 1px;
    margin-bottom: 20rpx;
    text-transform: uppercase;
  }

  .title {
    font-size: 58rpx;
    font-weight: bold;
    margin: 0;
    line-height: 1.2;
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  }

  .subtitle {
    font-size: 32rpx;
    color: rgba(255, 255, 255, 0.8);
    margin: 16rpx 0 32rpx 0;
    font-weight: normal;
  }
}

.custom-made {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 60rpx;

  .custom-made-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 32rpx;

    .title {
      font-size: 42rpx;
      font-weight: bold;
      color: #000;
    }

    .more {
      font-size: 24rpx;
      color: #666;
    }
  }
  .custom-made-list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    .custom-made-item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 48%;
      transition: transform 0.1s ease-in-out;
      &.active {
        transform: scale(0.95);
      }
      .custom-made-item-container {
        position: relative;
        width: 100%;
        height: 300rpx;
        border-radius: 40rpx;
        overflow: hidden;
        margin-bottom: 20rpx;
        .custom-made-item-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .play-icon {
          position: absolute;
          top: 82%;
          left: 86%;
          transform: translate(-50%, -50%);
          width: 60rpx;
          height: 60rpx;
          background-color: rgba(255, 255, 255, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 10;
          box-shadow: 0 2rpx 8rpx rgba(0, 0, 0, 0.2);
          backdrop-filter: blur(8rpx);
          -webkit-backdrop-filter: blur(8rpx);
        }

        .play-icon::after {
          content: "▶";
          font-size: 28rpx;
          color: #e7e7e7;
          font-weight: bold;
        }
      }
      .title {
        font-size: 28rpx;
        font-weight: bold;
        color: #000;
        margin-bottom: 8rpx;
      }
      .msg {
        font-size: 20rpx;
        color: #666;
      }
    }
  }
}
.activity-song-list {
  margin-bottom: 120rpx;
  .title {
    font-size: 42rpx;
    font-weight: bold;
    color: #000;
  }
  .song-list {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    .song-item {
      max-width: 200rpx;
      border-radius: 20rpx;
      margin-top: 20rpx;
      margin-right: 20rpx;
      transition: transform 0.1s ease-in-out;
      &.active {
        transform: scale(0.95);
      }
      .song-item-image {
        width: 200rpx;
        height: 200rpx;
        border-radius: 16rpx;
        object-fit: cover;
      }
      .tag {
        font-size: 24rpx;
        color: #333;
        line-height: 1.4;
        border: 1px solid #b2bad6;
        padding: 4rpx;
        border-radius: 10rpx;
        margin-right: 8rpx;
      }
    }
    .song-item:last-child {
      margin-right: 0;
    }
  }
}

.music-player {
  position: fixed;
  bottom: 6.5%;
  left: 0;
  right: 0;
  height: 100rpx;
  margin: 0 40rpx;
  background-color: #f8f8f8;
  display: flex;
  align-items: center;
  padding: 28rpx;
  box-shadow: 0 -2rpx 10rpx rgba(0, 0, 0, 0.3);
  z-index: 999;
  border-radius: 32rpx;
  .player-cover {
    width: 100rpx;
    height: 100rpx;
    border-radius: 50%;
  }
  .player-info {
    flex: 1;
    overflow: hidden;
    margin: 0 20rpx;
    display: flex;
    flex-direction: column;
    .song-name {
      font-size: 28rpx;
      color: #000;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    .artist {
      font-size: 20rpx;
      color: #000;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      margin: 4rpx 0;
    }
  }

  .player-controls {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 32rpx;
    min-width: 100rpx;

    .control-btn {
      font-size: 32rpx;
      color: #000;
      cursor: pointer;
    }

    .play-btn {
      font-size: 40rpx;
      color: #000;
    }
  }
}
</style>
