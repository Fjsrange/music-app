<template>
	<view class="search">
		<input v-model="songName" type="text" placeholder="搜索你想找的音乐" cursor-color="#3cc51f"
		 confirm-type="done" />
	</view>
</template>

<script setup>
import {ref} from 'vue';
import { debounceRef } from '@/utils/debounceAndThrottle.js'

const songName = debounceRef('', 500); // 搜索的内容 防抖的时间
 

</script>

<style>
.search {
	border: 2rpx solid #ccc;
	margin: 20rpx 40rpx;
	border-radius: 40rpx;
	padding: 10rpx 20rpx;
}
</style>
