<template>
  <!-- 组件 -->
  <view class="account">
    <span class="title">账号</span>
    <view
      v-for="(value, index) in 5"
      :key="index"
      @click="toAccount(index)"
      class="account-item"
    >
      <view>个人资料</view>
      <uni-icons type="right" size="16"></uni-icons>
    </view>
  </view>
  <view @click="toTheme" class="account-item">
    <view>主题设置</view>
    <uni-icons type="right" size="16"></uni-icons >
  </view>
</template>

<script setup>
import { ref } from "vue";

function toAccount(index) {
  console.log(index);
}

// 跳转主题页面
function toTheme() {
  uni.navigateTo({
    url: "/pages/setting/theme/theme",
  });
}
</script>

<style lang="less">
.title {
  display: block;
  font-size: 26rpx;
  margin: 10rpx 0;
}
.account {
  .account-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20rpx;
    background: #fff;
    border-radius: 10rpx;
    font-size: 28rpx;
  }
}
.account-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20rpx;
  background: #fff;
  border-radius: 10rpx;
  font-size: 28rpx;
}
</style>
