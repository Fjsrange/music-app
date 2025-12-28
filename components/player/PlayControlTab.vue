<!-- Tab 1：播放界面（含封面、控件、当前歌词） -->
<!-- components/player/PlayControlTab.vue -->
<template>
  {{ "1：播放界面（含封面、控件、当前歌词）" }}
  <view class="play-control-tab">
    <image
      :src="song.cover || '/static/default-cover.png'"
      class="cover"
      mode="aspectFit"
    />
    <text class="title">{{ song.title || "未知歌曲" }}</text>
    <text class="artist"
      >{{ song.artist }} · 听过 {{ song.playCount || 0 }} 次</text
    >
    <text class="current-lyric">{{ currentLyric || "暂无歌词" }}</text>

    <view class="controls">
      <button class="btn" @click="emit('prev')">上一首</button>
      <button class="btn primary" @click="emit('togglePlay')">
        {{ isPlaying ? "暂停" : "播放" }}
      </button>
      <button class="btn" @click="emit('next')">下一首</button>
    </view>
  </view>
</template>

<script setup>
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
</script>

<style scoped>
.play-control-tab {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 40rpx;
  box-sizing: border-box;
}
.cover {
  width: 480rpx;
  height: 480rpx;
  border-radius: 24rpx;
  margin-bottom: 40rpx;
}
.title {
  font-size: 36rpx;
  font-weight: bold;
  margin-bottom: 16rpx;
  text-align: center;
}
.artist {
  color: #666;
  margin-bottom: 40rpx;
  text-align: center;
}
.current-lyric {
  color: #999;
  margin-bottom: 60rpx;
  text-align: center;
  max-width: 80%;
  line-height: 1.6;
}
.controls {
  display: flex;
  gap: 30rpx;
}
.btn {
  padding: 16rpx 32rpx;
  font-size: 28rpx;
  border-radius: 50rpx;
}
.primary {
  background-color: #007aff;
  color: white;
}
</style>
