<template>
<<<<<<< HEAD
  <!-- <searchVue></searchVue> -->
  <!-- <uni-nav-bar>
    <view>标题栏</view>
    <template v-slot:left><view>left</view></template>
    <template v-slot:right><view>right</view></template>
  </uni-nav-bar>
  <view class="container">
    <uni-section
      title="带返回箭头+右侧图标"
      subTitle="使用 left-icon/right-icon 设置左右图标"
      type="line"
      style="margin-bottom: 3px"
    >
      <view class="box-bg">
        <uni-nav-bar shadow left-icon="left" right-icon="cart" title="标题" />
      </view>
    </uni-section>
  </view> -->
  <view class="top-tab">
    <view class="tab-left"></view>
    <view class="tab-right">
      <!-- <view class="msg">msg</view>
      <view class="setting" @click="toSetting">设置</view> -->
      <uni-icons type="email" size="28" class="msg"></uni-icons>
      <uni-icons type="settings" size="28" @click="toSetting"></uni-icons>
    </view>
  </view>
=======
  <searchVue></searchVue>
>>>>>>> 16f964c8dd4cd236b118a9c1ab389a4aaca9621e

  <view class="my-card">
    <view class="card-msg">
      <image src="../../static/logo.png" mode="" class="msg-img"></image>
      <view class="msg-name">风九四</view>
    </view>
  </view>

  <view class="card-tab">
<<<<<<< HEAD
    <view class="tab" v-for="item in 4">
      <image
        src="../../static/logo.png"
        mode=""
        style="width: 40px; height: 40px"
      ></image>
      <span>喜欢</span>
      <span>188</span>
=======
    <view class="tab" v-for="item in cardTabList" @click="goTab(item.url)">
      <image :src="item.icon" mode="" style="width: 40px; height: 40px"></image>
      <span>{{ item.title }}</span>
      <span>{{ item.sum }}</span>
>>>>>>> 16f964c8dd4cd236b118a9c1ab389a4aaca9621e
    </view>
  </view>

  <view class="my-song">
    <view class="song-title"> 我的歌单 </view>
    <view class="song-list">
      <view class="song-item" v-for="item in 4">
        <image src="../../static/logo.png" mode="" class="msg-img"></image>
        <view class="item-left">
          <view class="top"> 名称 </view>
          <view class="bottom"> 125首 </view>
        </view>
      </view>
    </view>
  </view>

  <!-- <view class="music-time-machine">
		<view class="music-title">
			<view class="left">音乐时光机</view>
			<view class="content">{{date.toLocaleDateString()}}</view>
			<view class="right">
				<uni-icons type="forward" size="18" color="#777"></uni-icons>
			</view>
		</view>
		<view class="music-card">
			
		</view>
	</view> -->
</template>

<script setup>
import { ref } from "vue";
import searchVue from "@/components/searchVue/searchVue.vue";
<<<<<<< HEAD
=======
import { tabList } from "./tabList.js";

console.log("tabList", tabList);
>>>>>>> 16f964c8dd4cd236b118a9c1ab389a4aaca9621e

const songList = ref([]); // 歌单
let cardTabList = ref(tabList); // tab

let timestamp = Date.now();
let date = new Date(timestamp);
// console.log(date.toLocaleDateString()); // 输出类似于 "12/8/2024"

// let year = date.getFullYear();
// let month = String(date.getMonth() + 1).padStart(2, '0'); // 月份是从0开始的
// let day = String(date.getDate()).padStart(2, '0');
// let hours = String(date.getHours()).padStart(2, '0');
// let minutes = String(date.getMinutes()).padStart(2, '0');
// let seconds = String(date.getSeconds()).padStart(2, '0');

<<<<<<< HEAD
let timestamp = Date.now();
let date = new Date(timestamp);
// console.log(date.toLocaleDateString()); // 输出类似于 "12/8/2024"

// let year = date.getFullYear();
// let month = String(date.getMonth() + 1).padStart(2, '0'); // 月份是从0开始的
// let day = String(date.getDate()).padStart(2, '0');
// let hours = String(date.getHours()).padStart(2, '0');
// let minutes = String(date.getMinutes()).padStart(2, '0');
// let seconds = String(date.getSeconds()).padStart(2, '0');

// console.log(`${year}-${month}-${day} ${hours}:${minutes}:${seconds}`); // 输出类似于 "2024-12-08 12:00:00"

// 设置
function toSetting() {
  uni.navigateTo({
    url: "/pages/setting/setting",
=======
// console.log(`${year}-${month}-${day} ${hours}:${minutes}:${seconds}`); // 输出类似于 "2024-12-08 12:00:00"

/**
 * 跳转
 * @params url
 */
function goTab(url) {
  uni.navigateTo({
    url: url,
>>>>>>> 16f964c8dd4cd236b118a9c1ab389a4aaca9621e
  });
}
</script>

<style lang="scss">
<<<<<<< HEAD
.top-tab {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .tab-right {
    display: flex;
  }
  .msg {
    margin: 0 10rpx;
  }
  .setting {
    // margin: 0 10rpx;
  }
}
.my-card {
  padding: 20rpx;
=======
.my-card {
  padding: 20rpx;
  margin: 40rpx;
>>>>>>> 16f964c8dd4cd236b118a9c1ab389a4aaca9621e
  height: 200rpx;
  border: 2rpx solid #333;
  border-radius: 20rpx;
  .card-msg {
    display: flex;
    align-items: center;
    // .msg-img {
    // 	width: 100rpx;
    // 	height: 100rpx;
    // }
    .msg-name {
      margin-left: 28rpx;
    }
  }
}
.msg-img {
  width: 100rpx;
  height: 100rpx;
}
.card-tab {
<<<<<<< HEAD
  margin: 40rpx 0;
=======
  margin: 40rpx;
>>>>>>> 16f964c8dd4cd236b118a9c1ab389a4aaca9621e
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  .tab {
    width: 20%;
    background-color: #ccc;
    padding: 10rpx 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
.my-song {
<<<<<<< HEAD
=======
  margin: 40rpx;
>>>>>>> 16f964c8dd4cd236b118a9c1ab389a4aaca9621e
  .song-title {
    padding: 20rpx 0;
  }
  .song-list {
    .song-item {
      padding: 10rpx 0;
      display: flex;
      justify-content: flex-start;
      align-items: center;

      .item-left {
        margin-left: 20rpx;
        line-height: 50rpx;
        .top {
          font-size: 30rpx;
        }
        .bottom {
          font-size: 28rpx;
          color: #777;
        }
      }
    }
  }
}
.music-time-machine {
  margin: 40rpx;
  .music-title {
    display: flex;
    align-items: center;
    .left {
      font-weight: 600;
    }
    .content {
      margin-left: 30rpx;
      font-size: 26rpx;
      color: #777;
    }
    .right {
      flex: 1;
      text-align: right;
      color: #777;
    }
  }
  .music-card {
  }
}
</style>
