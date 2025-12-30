<!-- Tab 2：完整歌词（带 fixed header） -->
<!-- components/player/LyricScrollTab.vue -->
<template>
  <scroll-view scroll-y class="lyric-scroll">
    <!-- 固定头部（仅歌词 Tab） -->
    <view class="fixed-header">
      <text class="song">{{ currentSong.title || "未知歌曲" }}</text>
      <text class="sing">{{ currentSong.artist || "未知歌手" }} ></text>
    </view>
    <!-- 可选：在滚动区域顶部也显示一次（非固定） -->
    <!-- <view class="header-placeholder">
      <text class="title">{{ title }}</text>
      <text class="artist">{{ artist }}</text>
    </view> -->
    <view style="height: 120rpx;"></view>

    <view v-if="lyrics.length === 0" class="empty">暂无歌词</view>
    <view v-else class="lyric-list">
      <view v-for="(line, index) in lyrics" :key="index" class="lyric-line">
        {{ line }}
      </view>
    </view>
  </scroll-view>
</template>

<script setup>
import { ref, computed } from "vue";
defineProps({
  lyrics: {
    type: Array,
    default: () => [],
  },
  title: {
    type: String,
    default: "",
  },
  artist: {
    type: String,
    default: "",
  },
});
const currentSong = ref({
  title: "",
  artist: "",
});
</script>

<style scoped lang="less">
.lyric-scroll {
  height: 100%;
  padding: 20rpx 0;
  box-sizing: border-box;
}
.fixed-header {
  height: 120rpx;
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 99%;
  top: 0;
  left: 0;
  background: #f0f5f8;
  line-height: 60rpx;
  .song {
    font-size: 48rpx;
    color: #333;
  }
  .sing {
    color: #666;
  }
}
.header-placeholder {
  text-align: center;
  margin-bottom: 40rpx;
}
.title {
  font-size: 32rpx;
  font-weight: bold;
}
.artist {
  color: #666;
  margin-top: 10rpx;
}
.empty {
  text-align: center;
  color: #999;
  margin-top: 100rpx;
}
.lyric-list {
  line-height: 1.8;
}
.lyric-line {
  text-align: center;
  color: #333;
  padding: 10rpx 0;
}
</style>
