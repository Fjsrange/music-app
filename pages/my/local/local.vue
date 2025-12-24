<template>
  
  <Header
    title="本地歌曲"
    :fixed="true"
    :defaultMenuWidth="50"
  >
    <template #left>
      <view @click="$router.back()">
        <image
          src="/static/tabs/back.png"
          style="width: 48rpx; height: 48rpx"
        />
      </view>
    </template>
    <template #right>
      <image
          src="/static/tabs/menu.png"
          class="menu"
          @click="onRightButtonClick"
        />
    </template>
  </Header>
  <searchVue></searchVue>

  <!-- 排序 -->
  <view
    class=""
    style="
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20rpx;
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
      <image src="/static/tabs/view.png" style="width: 28rpx; height: 28rpx" />
      <image src="/static/tabs/sort.png" style="width: 38rpx; height: 40rpx" />
      <image
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
    v-for="item in audioList"
    :key="item.id"
  >
    <view class="">
      <view class=""> {{ item.sing }} </view>
      <view
        class=""
        style="
          font-size: 24rpx;
          color: rgb(102, 102, 102, 0.9);
          display: flex;
          align-items: center;
        "
      >
        <span>{{ item.song }}</span>
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

  <playerVue></playerVue>
</template>

<script setup>
import { ref, onMounted } from "vue";
import playerVue from "../../../components/playerVue/playerVue";
import Header from "@/components/Header/Header.vue";
import searchVue from "@/components/searchVue/searchVue.vue";

const isPopupVisible = ref(false); // 控制弹窗显示与隐藏
const audioList = ref([]); // 本地音频列表
const context = ref(null); // 音频上下文

onMounted(() => {
  // getLocalAudioList();
});

// 获取音频列表
// getLocalAudioList();
// 获取本地存储的音频列表
function getLocalAudioList(){
  try {
    const storedList = uni.getStorageSync("localAudioList");
    console.log('storedList', storedList);
    if (storedList) {
      audioList.value = JSON.parse(storedList).map((item) => {
        return {
          id: item.id,
          sing: item.title,
          song: item.artist,
          url: item.path,
          autoplay: false,
          currentTime: 0,
          paused: false,
        };
      });
      
      // 检查是否已有音频上下文，如果有则销毁
      // if (context.value) {
      //   context.value.destroy(); // 或者先暂停
      // }
      
      // 创建新的音频上下文
      context.value = uni.createInnerAudioContext();
      console.log('audioList.value', audioList.value);
      console.log('context.value', context.value);
      
      if (audioList.value.length > 0) {
        context.value.src = audioList.value[0].url;
      }
    }
  } catch (error) {
    console.error("获取本地音频列表失败:", error);
  }
}


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
// header {
//   position: fixed;
//   top: 0;
//   z-index: 9999999999;
//   width: 100vw;
// }
// .navbar {
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 20rpx;
//   background-color: #f8f8f8;
// }

.title {
  font-size: 18px;
}

.menu {
  margin-right: 6rpx;
  width: 48rpx;
  height: 48rpx;
}

.setting-popup {
  position: fixed;
  top: 50px;
  right: 10px;
  background: #fff;
  padding: 17px;
  line-height: 28px;
  border-radius: 20rpx;
}
</style>
