<template>
  <Header
    :title="showTitle ? '我的歌单' : ''"
    :background-color="headerBgColor"
		:defaultMenuWidth="68"
    :fixed="fixed"
  >
    <template #left>
      <view @click="$router.back()">
        <image
          src="/static/tabs/back.png"
					class="wh"
        />
      </view>
    </template>
    <template #right>
      <image
          src="/static/tabs/menu.png"
          class="wh menu"
        />
    </template>
  </Header>
	<view class="page-content" scroll-y="true">
		<view class="bgcimg">
			<image
								src="https://picsum.photos/seed/p13/400/500"
								mode="aspectFill"
								class="backage-image"
							></image>
			<!-- https://picsum.photos/seed/p9/400/500 -->

		</view>
			<view
			class=""
			style="
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-top: 80rpx;
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
				<image src="/static/tabs/sort.png" style="width: 48rpx; height: 48rpx" />
				<image
					src="/static/tabs/multiple.png"
					style="width: 38rpx; height: 38rpx"
				/>
			</view>
		</view>
		<view class="song-list">
			<view class="song-item" v-for="(item, index) in 10" :key="item">
					<!-- <image src="https://picsum.photos/seed/p13/400/500" mode="" class="msg-img"></image> -->
					<view class="item-index">{{ index + 1 }}</view>
					<view class="item-left">
						<text class="song-name"> 歌曲名称 </text>
						<text class="sing-name"> 歌手名称 </text>
					</view>
					<view class="item-right">
						<view class="top">喜欢</view>
						<view class="bottom">下一</view>
						<view class="bottom">删除</view>
					</view>
				</view>
		</view>
	</view>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import Header from "@/components/Header/Header.vue";
	
const backgroundColor = ref("transparent");
// const backgroundColor = ref("#f0f5f8");
const fontColor = ref("#333");
const fixed = ref(true);
const scrollTop = ref(0);
const scrollThreshold = 100; // 滚动阈值
const showTitle = ref(false);  // 控制标题显示
const headerOpacity = ref(0);  // 导航栏透明度

// 根据透明度计算背景色
const headerBgColor = computed(() => {
  return `rgba(255, 255, 255, ${headerOpacity.value})`;
});

// 滚动事件处理
const onPageScroll = (e) => {
  const scrollTop = e.scrollTop || e.detail.scrollTop || 0;
  
  // 设置滚动阈值，超过此值显示标题和背景
  const threshold = 100;
  
  if (scrollTop > threshold) {
    showTitle.value = true;
    // 计算透明度，从0到1
    const opacity = Math.min(1, (scrollTop - threshold) / 100);
    headerOpacity.value = Math.min(1, opacity);
  } else {
    showTitle.value = false;
    headerOpacity.value = scrollTop / threshold;
  }
};

// 监听页面滚动事件
onMounted(() => {
  // 如果是页面组件，需要在页面上监听滚动
  // const page = getCurrentPages().pop();
  // if (page) {
  //   page.onPageScroll = (e) => onPageScroll({ detail: { scrollTop: e.scrollTop } });
  // }
	console.log('uni',uni);
	console.log('uni.onPageScroll',uni.onPageScroll);
	
  // 在页面上监听滚动事件
  if (typeof uni !== 'undefined' && uni.onPageScroll) {
    uni.onPageScroll(onPageScroll);
  }
});
</script>

<style lang="less">

.wh {
	width: 48rpx;
	height: 48rpx;
}
.bgcimg {
	width: 100vw;
	height: 50vh;
	margin: -40rpx;
	.backage-image {
		width: 100%;
		height: 100%;
	}
}
.song-list {
	padding: 40rpx 0;
	.song-item {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 10rpx 0;
		height: 120rpx;
		.item-index {
			width: 10%;
			padding: 10rpx 0;
			font-size: 56rpx;
			color: #333;
		}
		.item-left{
			height: 100%;
			flex: 1;
			display: flex;
			flex-direction: column;
			justify-content: space-evenly;
			padding: 10rpx 0;
			.song-name {
				font-size: 36rpx;
			}
			.sing-name{
				font-size: 28rpx;
				color: rgb(102, 102, 102, 0.9);
			}
		}
		.item-right{
			width: 34%;
			display: flex;
			justify-content: space-evenly;
		}
	}
}
</style>
