<template>
  <view class="logo">
    <image src="/static/logo.png" alt="" />
  </view>
  <!-- 如果没有开始扫描，则显示扫描说明 -->
  <view v-if="!isStart" class="much-select">
    <view>一件扫描手机内的歌曲文件</view>
    <view>
      <view>不扫描 60s 以下的文件</view>
      <view>不扫描 100k 以下的歌曲</view>
    </view>
  </view>
  <!-- 如果已经开始扫描，则显示开始扫描 -->
  <view v-else class="much-select">开始扫描</view>

  <!-- 点击按钮开始或取消扫描 -->
  <view class="btn" @click="startScan">{{
    !isStart ? "开始扫描" : "取消"
  }}</view>
</template>

<script setup>
import { ref } from "vue";

const isStart = ref(false); // 是否开始扫描
const audioList = ref([]); // 扫描到的音频列表
const infoArr = ref([]); // 扫描到的音频信息

// 开始或取消扫描
function startScan() {
  if (isStart.value) {
    console.log("取消扫描");
    uni.navigateBack();
  } else {
    console.log("开始扫描");
    isStart.value = true;

    // 如果查询结果不为空
    if (cursor.moveToFirst()) {
      // 遍历查询结果
      do {
        // 获取音频ID
        const id = cursor.getString(
          cursor.getColumnIndexOrThrow(MediaStore.Audio.Media._ID)
        );
        // 获取音频标题
        const title = cursor.getString(
          cursor.getColumnIndexOrThrow(MediaStore.Audio.Media.TITLE)
        );
        // 获取音频艺术家
        const artist = cursor.getString(
          cursor.getColumnIndexOrThrow(MediaStore.Audio.Media.ARTIST)
        );
        // 获取音频路径
        const path = cursor.getString(
          cursor.getColumnIndexOrThrow(MediaStore.Audio.Media.DATA)
        );

        let info = cursor.getString(
          cursor.getColumnIndexOrThrow(MediaStore.Audio.Media.DATA)
        );
        console.log("id, title, artist, path", id, title, artist, path);

        // 将音频信息添加到音频列表中
        audioList.value.push({ id, title, artist, path });
        infoArr.value.push(info);
      } while (cursor.moveToNext());
    }
    // 关闭查询结果
    cursor.close();

    // audioList 包含了手机中所有音频文件的信息
    console.log("audioList", audioList.value);
    console.log("infoArr", infoArr.value);
    uni.setStorageSync("audio-list", JSON.stringify(audioList.value));
    uni.setStorageSync("audio-list", JSON.stringify(infoArr.value));
  }
}

// 导入android.content.Context类
const Context = plus.android.importClass("android.content.Context");
// 导入android.content.ContentResolver类
const ContentResolver = plus.android.importClass(
  "android.content.ContentResolver"
);
// 导入android.net.Uri类
const Uri = plus.android.importClass("android.net.Uri");
// 导入android.provider.MediaStore类
const MediaStore = plus.android.importClass("android.provider.MediaStore");
// 导入android.database.Cursor类
const Cursor = plus.android.importClass("android.database.Cursor");
// 获取主Activity
const main = plus.android.runtimeMainActivity();
// 获取ContentResolver对象
const contentResolver = main.getContentResolver();

// 查询手机中的音频文件
const uri = MediaStore.Audio.Media.EXTERNAL_CONTENT_URI;
const projection = [
  MediaStore.Audio.Media._ID,
  MediaStore.Audio.Media.TITLE,
  MediaStore.Audio.Media.ARTIST,
  MediaStore.Audio.Media.DATA,
];
// 查询音频数据
const cursor = contentResolver.query(uri, projection, null, null, null);
</script>

<style lang="scss" scoped>
.logo {
  text-align: center;
  margin-top: 100rpx;

  image {
    width: 380rpx;
    height: 380rpx;
  }
}
.much-select {
  margin-top: 100rpx;
  text-align: center;
  height: 220rpx;
  view {
    margin-top: 20rpx;
  }
}

.btn {
  width: fit-content;
  margin: auto;
  position: relative;
  top: 340rpx;
  background-color: #4dcc71;
  padding: 20rpx 60rpx;
  color: #fff;
  border-radius: 10rpx;
  box-shadow: 0px 2px 5px -2px rgba(0, 0, 0, 0.5);
}
</style>
