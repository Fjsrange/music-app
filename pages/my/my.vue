<template>
  <searchVue></searchVue>

  <view class="my-card">
    <view class="card-msg">
      <image src="../../static/logo.png" mode="" class="msg-img"></image>
      <view class="msg-name">风九四</view>
    </view>
  </view>

  <view class="card-tab">
    <view class="tab" v-for="item in cardTabList" @click="goTab(item.url)">
      <image :src="item.icon" mode="" style="width: 40px; height: 40px"></image>
      <span>{{ item.title }}</span>
      <span>{{ item.sum }}</span>
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
import { tabList } from "./tabList.js";

console.log("tabList", tabList);

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

// console.log(`${year}-${month}-${day} ${hours}:${minutes}:${seconds}`); // 输出类似于 "2024-12-08 12:00:00"

/**
 * 跳转
 * @params url
 */
function goTab(url) {
  uni.navigateTo({
    url: url,
  });
}
</script>

<style lang="scss">
.my-card {
  padding: 20rpx;
  margin: 40rpx;
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
  margin: 40rpx;
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
  margin: 40rpx;
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
