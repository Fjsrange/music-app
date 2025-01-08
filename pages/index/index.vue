<template>
  <searchVue></searchVue>
  <view class="content">
    <image class="logo" src="/static/logo.png"></image>
    <view class="text-area">
      <text class="title">{{ title }} asd</text>
    </view>
  </view>
</template>

<script setup>
import searchVue from "@/components/searchVue/searchVue.vue";
import getMovies from "../../api/movies.json";

const title = "hello";
uni.setStorageSync("movies", JSON.stringify(getMovies.data));
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
