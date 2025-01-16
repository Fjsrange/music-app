<template>
  <header>
    <view class="navbar">
      <view @click="$router.back()">
        <img src="/static/tabs/back.png" style="width: 48rpx" />
      </view>
      <view class="title">页面标题</view>
      <view>
        <img
          src="/static/tabs/menu.png"
          class="menu"
          @click="onRightButtonClick"
        />
      </view>
    </view>
  </header>

  <!-- 排序 -->
  <view class="" v-for="item in audioList" :key="item.id">
    <view class=""> 歌曲名：{{ item.title }} </view>
    <br />
    <view class=""> 歌手名：{{ item.artist }} </view>
    <br />
    <view class=""> 路径：{{ item.path }} </view>
  </view>
  <view
    class=""
    style="
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20rpx 40rpx;
      margin-top: 32rpx;
    "
  >
    <view class="" style="display: flex">
      <view class=""> > </view>
      <view class=""> 全部播放(50) </view>
    </view>
    <view
      class=""
      style="
        display: flex;
        width: 120rpx;
        justify-content: space-between;
        align-items: center;
      "
    >
      <img src="/static/tabs/view.png" style="width: 28rpx; height: 28rpx" />
      <img src="/static/tabs/sort.png" style="width: 38rpx; height: 40rpx" />
      <img
        src="/static/tabs/multiple.png"
        style="width: 28rpx; height: 28rpx"
      />
    </view>
  </view>

  <!-- 列表 -->
  <view
    style="
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20rpx 40rpx;
    "
    v-for="item in 14"
  >
    <view class="">
      <view class=""> 歌名 </view>
      <view
        class=""
        style="
          font-size: 24rpx;
          color: rgb(102, 102, 102, 0.9);
          display: flex;
          align-items: center;
        "
      >
        <span>歌手名</span>
        <view style="padding: 2px; background: #eee; margin-left: 2px">6</view>
      </view>
    </view>
    <view
      class=""
      style="display: flex; width: 120rpx; justify-content: space-between"
    >
      <view class=""> > </view>
      <view class=""> > </view>
      <view class=""> > </view>
    </view>
  </view>

  <!-- 模块 -->
  <view
    class="setting-popup"
    :style="{ display: isPopupVisible ? 'block' : 'none' }"
  >
    <view class="setting-popup-content">
      <!-- <view class="setting-popup-item">设置</view> -->
      <view class="setting-popup-item" @click="goScan">扫描歌曲</view>
      <!-- <navigator url="/pages/my/local/scan/scan">
        <view>扫描歌曲</view>
      </navigator> -->
    </view>
  </view>

  <!-- 设置 -->

  <!-- 	 底部弹窗  @click="toggle('bottom')"
	 
	<uni-popup ref="popup" background-color="#fff" @change="change">
				<view class="popup-content" :class="{ 'popup-height': type === 'left' || type === 'right' }"><text
						class="text">popup 内容</text></view>
			</uni-popup> -->
</template>

<script setup>
import { ref, onMounted } from "vue";

const isPopupVisible = ref(false); // 控制弹窗显示与隐藏
const audioList = ref([]); // 本地音频列表

onMounted(() => {
  // 获取本地音频列表
  // uni.getStorageSync({
  //   key: "audioList",
  //   success: function (res) {
  //     console.log(res);

  //     audioList.value = res.data;
  //     console.log("audioList.value", audioList.value);
  //   },
  // });
  console.log("666", JSON.parse(uni.getStorageSync("audio-list")));

  audioList.value = JSON.parse(uni.getStorageSync("audio-list"));
  console.log("audioList.value", audioList.value);
});

// 点击设置按钮
function onRightButtonClick() {
  // 按钮点击事件处理逻辑
  // 直接修改DOM元素的style属性
  isPopupVisible.value = !isPopupVisible.value;
}
// 去扫描歌曲页面
function goScan() {
  uni.navigateTo({
    url: "/pages/my/local/scan/scan",
  });
  isPopupVisible.value = false;
}
</script>

<style lang="scss" scoped>
header {
  position: fixed;
  top: 0;
  z-index: 9999999999;
  width: 100vw;
}
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20rpx;
  background-color: #f8f8f8;
}

.title {
  font-size: 18px;
}

.menu {
  margin-right: 6rpx;
  width: 48rpx;
}

.setting-popup {
  position: fixed;
  top: 50px;
  right: 10px;
  background: #eee;
  padding: 17px;
  line-height: 28px;
}
</style>
