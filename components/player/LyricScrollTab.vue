<!-- Tab 2：完整歌词（带 fixed header） -->
<!-- components/player/LyricScrollTab.vue -->
<template>
  {{ "2：完整歌词（带" }}
  <scroll-view scroll-y class="lyric-scroll">
    <!-- 可选：在滚动区域顶部也显示一次（非固定） -->
    <!-- <view class="header-placeholder">
      <text class="title">{{ title }}</text>
      <text class="artist">{{ artist }}</text>
    </view> -->

    <view v-if="lyrics.length === 0" class="empty">暂无歌词</view>
    <view v-else class="lyric-list">
      <view v-for="(line, index) in lyrics" :key="index" class="lyric-line">
        {{ line }}
      </view>
    </view>
  </scroll-view>
</template>

<script setup>
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
</script>

<style scoped>
.lyric-scroll {
  height: 100%;
  padding: 20rpx 40rpx;
  box-sizing: border-box;
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
