<template>
  <view class="player-page">
    <!-- Tab 导航 -->
    <view class="tabs">...</view>
    <!-- 固定头部（仅歌词 Tab） -->
    <view v-if="currentTab === 2" class="fixed-header">
      {{ currentSong.title || "未知歌曲" }} -
      {{ currentSong.artist || "未知歌手" }}
    </view>

    <!-- 内容 -->
    <swiper :current="currentTab" @change="onTabChange" class="tab-content">
      <swiper-item>
        <SongInfoTab :song="currentSong" />
      </swiper-item>
      <swiper-item>
        <PlayControlTab
          :song="currentSong"
          :is-playing="isPlaying"
          :current-lyric="currentLyricLine"
          @toggle-play="togglePlay"
          @prev="playPrev"
          @next="playNext"
        />
      </swiper-item>
      <swiper-item>
        <LyricScrollTab
          :lyrics="lyricLines"
          :title="currentSong.title || '未知歌曲'"
          :artist="currentSong.artist || '未知歌手'"
        />
      </swiper-item>
    </swiper>
  </view>
</template>

<script setup>
import { ref, computed } from "vue";
import SongInfoTab from "@/components/player/SongInfoTab.vue";
import PlayControlTab from "@/components/player/PlayControlTab.vue";
import LyricScrollTab from "@/components/player/LyricScrollTab.vue";

// ...其他逻辑
const currentTab = ref(1);
// const currentSong = computed(() => {
//   // return store.state.currentSong;
//   const currentSong = uni.getStorageSync("currentSong");
//   return JSON.parse(currentSong);
// });
const isPlaying = computed(() => {
  // return store.state.isPlaying;
  return uni.getStorageSync("isPlaying");
});
const currentLyricLine = computed(() => {
  // return store.state.currentLyricLine;
  return uni.getStorageSync("currentLyricLine");
});
const lyricLines = computed(() => {
  // return store.state.lyricLines;
  return uni.getStorageSync("lyricLines");
});
// function togglePlay() {
//   store.dispatch("togglePlay");
// }

// function playPrev() {
//   store.dispatch("playPrev");
// }

// function playNext() {
//   store.dispatch("playNext");
// }

// function onTabChange(event) {
//   currentTab.value = event.detail.current;
// }
</script>

<style scoped>
/* 确保歌词 Tab 的滚动区不被 fixed header 遮挡 */
.tab-content {
  height: calc(100vh - 120rpx); /* 根据你的 header 高度调整 */
}
.fixed-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.9);
  padding: 20rpx;
  text-align: center;
  z-index: 999;
}
</style>
