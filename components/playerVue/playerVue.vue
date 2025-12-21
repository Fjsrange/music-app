<template>
  <view class="player">
    <view class="player-left">
      <image src="/static/logo.png" style="width: 80rpx; height: 80rpx" />
      <view class="player-left-content">
        你 - 薛之谦
        <!-- <view class="player-left-content-title">你</view>
        <view class="player-left-content-song">薛之谦</view> -->
      </view>
    </view>
    <view class="player-right">
      <image
        src="/static/images/play/play-icon.png"
        style="width: 50rpx; height: 50rpx"
      />
      <image
        src="/static/images/play/list-icon.png"
        style="width: 50rpx; height: 50rpx; margin-left: 20rpx"
      />
    </view>
  </view>
</template>

<script setup></script>
<style scoped lang="scss">
/* 底部播放器 */
.player {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 100rpx;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20rpx;
}

.player-left {
  display: flex;
  align-items: center;
  width: 74%;
}

.player-left-content {
  margin-left: 20rpx;
  font-size: 30rpx;
}

.player-left-content-title {
  font-size: 28rpx;
  font-weight: bold;
}

.player-left-content-song {
  font-size: 12px;
  color: #999;
}

.player-right {
  display: flex;
  align-items: center;
  flex: 1;
  margin-left: 20rpx;
}
</style>
