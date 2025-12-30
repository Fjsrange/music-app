<template>
  <Header
    :background-color="backgroundColor"
    :font-color="fontColor"
    :fixed="fixed"
  >
  <template #left>
      <view @click="toHome">
        <image
          src="/static/tabs/back.png"
          style="width: 48rpx; height: 48rpx"
        />
      </view>
    </template>
  </Header>
  <view style="margin: 52rpx;"></view>
  <view class="player-page">
    <!-- Tab 导航 -->
    <view class="tabs" style="margin: 20rpx;">
      <view class="tab-header">
        <view 
          v-for="(tab, index) in tabs" 
          :key="index"
          :class="['tab-item', { 'active': currentTab === index }]"
          @click="switchTab(index)"
        >
          <text class="tab-text">{{ tab.name }}</text>
          <view v-if="currentTab === index" class="active-indicator"></view>
        </view>
      </view>
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


const backgroundColor = ref("#f0f5f8");
const fontColor = ref("#333");
const fixed = ref(true);
// 添加tabs配置
const tabs = ref([
  { index: 0 },
  { index: 1 },
  { index: 2 }
]);
// ...其他逻辑
const currentTab = ref(1);
const currentSong = ref({});

// 添加tab切换方法
function switchTab(index) {
  currentTab.value = index;
}
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

function onTabChange(e) {
  console.log('e', e);
  
  currentTab.value = e.detail.current;
}
function toHome() {
  uni.reLaunch({
    url: '/pages/index/index'
  });
}
</script>

<style scoped>
/* 确保歌词 Tab 的滚动区不被 fixed header 遮挡 */
.tab-content {
  height: calc(100vh - 120rpx); /* 根据你的 header 高度调整 */
}

.tab-header {
  display: flex;
  background-color: transparent;
  position: relative;
}

.tab-item {
  flex: 1;
  padding: 20rpx 0;
  text-align: center;
  position: relative;
  cursor: pointer;
}

.tab-text {
  font-size: 28rpx;
  color: #999;
  transition: color 0.3s;
}

.tab-item.active .tab-text {
  color: #fff;
  font-weight: 500;
  font-size: 32rpx;
}

.active-indicator {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 60rpx;
  height: 6rpx;
  background-color: #fff;
  border-radius: 3rpx;
  transition: all 0.3s;
}
</style>
