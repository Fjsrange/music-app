<template>
  <Header title="扫描歌曲" :fixed="true">
    <template #left>
      <view @click="$router.back()">
        <image
          src="/static/tabs/back.png"
          style="width: 48rpx; height: 48rpx"
        />
      </view>
    </template>
  </Header>

  <view class="logo">
    <image src="/static/logo.png" alt="" />
  </view>
  <!-- 如果没有开始扫描，则显示扫描说明 -->
  <view v-if="!isStart" class="much-select">
    <view>一键扫描手机内的歌曲文件</view>
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
import Header from "@/components/Header/Header.vue";

const isStart = ref(false); // 是否开始扫描
const audioList = ref([]); // 扫描到的音频列表
const infoArr = ref([]); // 扫描到的音频信息
// ------------------------------------------------
// 检查是否在 App 环境中
// function isAppEnvironment() {
//   console.log("window", window);
//   console.log("plus", plus);

//   return typeof window !== "undefined" && typeof plus !== "undefined";
// }
function isAppEnvironment() {
  const systemInfo = uni.getSystemInfoSync();
  return systemInfo.platform === "android" || systemInfo.platform === "ios";
}
// 开始或取消扫描
function startScan() {
  // 检查是否在 App 环境中
  if (!isAppEnvironment()) {
    uni.showToast({
      title: "仅在App中可用",
      icon: "none",
    });
    return;
  }
  if (isStart.value) {
    console.log("取消扫描");
    uni.navigateBack();
  } else {
    console.log("开始扫描");
    isStart.value = true;

    // 导入android相关类
    console.log("111");
    const Context = plus.android.importClass("android.content.Context");
    console.log("Context", Context);

    const ContentResolver = plus.android.importClass(
      "android.content.ContentResolver"
    );
    const Uri = plus.android.importClass("android.net.Uri");
    const MediaStore = plus.android.importClass("android.provider.MediaStore");
    const MediaMetadataRetriever = plus.android.importClass(
      "android.media.MediaMetadataRetriever"
    );

    // 获取主Activity和ContentResolver对象
    const main = plus.android.runtimeMainActivity();
    const contentResolver = main.getContentResolver();

    // 查询手机中的音频文件
    const uri = MediaStore.Audio.Media.EXTERNAL_CONTENT_URI;
    const projection = [
      MediaStore.Audio.Media._ID,
      MediaStore.Audio.Media.TITLE,
      MediaStore.Audio.Media.ARTIST,
      MediaStore.Audio.Media.DATA,
      MediaStore.Audio.Media.DURATION, // 添加时长字段
      MediaStore.Audio.Media.SIZE, // 添加大小字段
    ];

    try {
      const cursor = contentResolver.query(uri, projection, null, null, null);

      // 添加详细检查
      console.log("cursor类型:", typeof cursor);
      console.log("cursor方法:", Object.keys(cursor));
      // 查询音频数据
      // const cursor = contentResolver.query(uri, projection, null, null, null);

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
          // 获取音频时长（毫秒）
          const duration = cursor.getLong(
            cursor.getColumnIndexOrThrow(MediaStore.Audio.Media.DURATION)
          );
          // 获取音频大小（字节）
          const size = cursor.getLong(
            cursor.getColumnIndexOrThrow(MediaStore.Audio.Media.SIZE)
          );

          // 过滤条件：不扫描60秒以下或100KB以下的文件
          const durationInSeconds = duration / 1000; // 转换为秒
          const sizeInKB = size / 1024; // 转换为KB

          if (durationInSeconds >= 60 && sizeInKB >= 100) {
            // 将音频信息添加到音频列表中
            audioList.value.push({
              id,
              title,
              artist,
              path,
              duration: durationInSeconds,
              size: sizeInKB,
            });
          }
        } while (cursor.moveToNext());
      }

      // 关闭查询结果
      cursor.close();

      // 保存到本地存储
      uni.setStorageSync("audio-list", JSON.stringify(audioList.value));
      console.log("扫描完成，找到", audioList.value.length, "个音频文件");

      // 返回上一页
      uni.navigateBack();
    } catch (error) {
      console.error("扫描音频文件失败:", error);
      uni.showToast({
        title: "扫描失败",
        icon: "none",
        message: error.message,
      });
    }
  }
}

// // 开始或取消扫描
// function startScan() {
//   if (isStart.value) {
//     console.log("取消扫描");
//     uni.navigateBack();
//   } else {
//     console.log("开始扫描");
//     isStart.value = true;

//     // 如果查询结果不为空
//     if (cursor.moveToFirst()) {
//       // 遍历查询结果
//       do {
//         // 获取音频ID
//         const id = cursor.getString(
//           cursor.getColumnIndexOrThrow(MediaStore.Audio.Media._ID)
//         );
//         // 获取音频标题
//         const title = cursor.getString(
//           cursor.getColumnIndexOrThrow(MediaStore.Audio.Media.TITLE)
//         );
//         // 获取音频艺术家
//         const artist = cursor.getString(
//           cursor.getColumnIndexOrThrow(MediaStore.Audio.Media.ARTIST)
//         );
//         // 获取音频路径
//         const path = cursor.getString(
//           cursor.getColumnIndexOrThrow(MediaStore.Audio.Media.DATA)
//         );
//         // 创建MediaMetadataRetriever实例
//         const retriever = new MediaMetadataRetriever();
//         // 设置数据源
//         retriever.setDataSource(path);
//         // 获取时长（单位为毫秒）
//         const duration = retriever.extractMetadata(
//           MediaMetadataRetriever.METADATA_KEY_DURATION
//         );
//         // 转换时长为秒
//         const durationInSeconds = parseInt(duration, 10) / 1000;

//         let info = cursor.getString(
//           cursor.getColumnIndexOrThrow(MediaStore.Audio.Media.DATA)
//         );

//         // 将音频信息添加到音频列表中
//         audioList.value.push({
//           id,
//           title,
//           artist,
//           path,
//           duration: durationInSeconds,
//         });
//         infoArr.value.push(info);
//       } while (cursor.moveToNext());
//     }
//     // 关闭查询结果
//     cursor.close();

//     // audioList 包含了手机中所有音频文件的信息
//     uni.setStorageSync("localAudioList", JSON.stringify(audioList.value));
//     uni.setStorageSync("info-arr", JSON.stringify(infoArr.value));
//   }
// }

// // 导入android.content.Context类
// const Context = plus.android.importClass("android.content.Context");
// // 导入android.content.ContentResolver类
// const ContentResolver = plus.android.importClass(
//   "android.content.ContentResolver"
// );
// // 导入android.net.Uri类
// const Uri = plus.android.importClass("android.net.Uri");
// // 导入android.provider.MediaStore类
// const MediaStore = plus.android.importClass("android.provider.MediaStore");
// // 导入android.database.Cursor类
// const Cursor = plus.android.importClass("android.database.Cursor");
// // 导入android.media.MediaMetadataRetriever类
// const MediaMetadataRetriever = plus.android.importClass(
//   "android.media.MediaMetadataRetriever"
// );
// // 获取主Activity
// const main = plus.android.runtimeMainActivity();
// // 获取ContentResolver对象
// const contentResolver = main.getContentResolver();

// // 查询手机中的音频文件
// const uri = MediaStore.Audio.Media.EXTERNAL_CONTENT_URI;
// const projection = [
//   MediaStore.Audio.Media._ID,
//   MediaStore.Audio.Media.TITLE,
//   MediaStore.Audio.Media.ARTIST,
//   MediaStore.Audio.Media.DATA,
// ];
// // 查询音频数据
// const cursor = contentResolver.query(uri, projection, null, null, null);
</script>

<style lang="scss" scoped>
.logo {
  text-align: center;
  margin-top: 200rpx;

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
