<!-- Tab 0：歌曲信息 -->
<!-- components/player/SongInfoTab.vue -->
<template>
  <view class="song-info-tab">
    <view class="info-song-name">
      <text class="song-name">{{ song.name || "未知歌曲" }}</text>
      <view class="release-date-detail">
        <text class="release-date">{{ song.releaseDate || "未知" }}</text>
        <text class="detail">歌曲详情 ></text>
      </view>
    </view>
    <view class="info-item">
      <image 
        src="https://picsum.photos/seed/p1/400/400" 
        mode="aspectFill"
        style="width: 60rpx; height: 60rpx; border-radius: 50%; margin-right: 20rpx;"
      ></image>
      <text class="label">歌手：</text>
      <text class="value">{{ song.artist || "未知" }}</text>
    </view>
    <view class="info-item">
      <image 
        src="https://picsum.photos/seed/p2/400/400" 
        mode="aspectFill"
        style="width: 60rpx; height: 60rpx; border-radius: 20rpx; margin-right: 20rpx;"
      ></image>
      <text class="label">专辑：</text>
      <text class="value">{{ song.album || "未知" }}</text>
    </view>
    <view class="info-item">
      <view>
        <image 
          src="https://picsum.photos/seed/p3/400/400" 
          mode="aspectFill"
          style="width: 60rpx; height: 60rpx; border-radius: 50%; margin-right: 20rpx;"
        ></image>
      </view>
      <text class="single-line-ellipsis">制作：{{ song.producer || 'asdasddddddddddddddddddddddddddddddddd' }} 作词：{{ song.lyricist }} 作曲：{{ song.composer }} 编曲： {{ song.arranger }}</text>
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

<style scoped lang="less">
.info-song-name {
  margin-bottom: 20rpx;
  border-bottom: 2rpx solid #ccc;
  color: #333;
  .song-name {
    font-size: 46rpx;
    font-weight: 500;
  }
  .release-date-detail {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 28rpx;
    margin: 32rpx 0;
  }
}
.song-info-tab {
  padding: 40rpx;
  background-color: #e4e4e4;
  border-radius: 20rpx;
  color: #666;
}
.info-item {
  display: flex;
  align-items: center;
  margin-bottom: 20rpx;
}
.single-line-ellipsis {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
