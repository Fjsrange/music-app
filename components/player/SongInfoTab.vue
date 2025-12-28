<!-- Tab 0：歌曲信息 -->
<!-- components/player/SongInfoTab.vue -->
<template>
  <view class="song-info-tab">
    <view class="info-item">
      <text class="label">发行时间：</text>
      <text class="value">{{ song.releaseDate || "未知" }}</text>
    </view>
    <view class="info-item">
      <text class="label">歌手：</text>
      <text class="value">{{ song.artist || "未知" }}</text>
    </view>
    <view class="info-item">
      <text class="label">专辑：</text>
      <text class="value">{{ song.album || "未知" }}</text>
    </view>
    <view class="info-item">
      <text class="label">作词：</text>
      <text class="value">{{ song.lyricist || "未知" }}</text>
    </view>
    <view class="info-item">
      <text class="label">作曲：</text>
      <text class="value">{{ song.composer || "未知" }}</text>
    </view>
    <view class="info-item">
      <text class="label">制作人：</text>
      <text class="value">{{ song.producer || "未知" }}</text>
    </view>
  </view>
</template>

<script setup>
defineProps({
  song: {
    type: Object,
    required: true,
    default: () => ({}),
  },
});
</script>

<style scoped>
.song-info-tab {
  padding: 40rpx;
}
.info-item {
  display: flex;
  margin-bottom: 20rpx;
}
.label {
  font-weight: bold;
  min-width: 160rpx;
  color: #666;
}
.value {
  flex: 1;
  color: #333;
}
</style>
