<template>
  <!-- #ifndef MP-ALIPAY -->
  <view
    class="cos-header"
    :class="{ 'is_fixed': fixed }"
    :style="{ height: height + 'px', backgroundColor: backgroundColor, zIndex: zIndex, color: fontColor }"
  >
    <image
      :src="backgroundImage"
      class="nav-bg"
      mode="scaleToFill"
      :style="{ height: height + 'px' }"
    ></image>

    <!-- 状态栏占位 -->
    <div :style="{ height: statusBarHeight + 'px' }"></div>

    <!-- 导航栏 -->
    <view class="nav-wrapper" :style="{ height: navBarHeight + 'px' }">
      <!-- 返回按钮 -->
      <view
        class="nav-back"
        v-if="isShowLeft"
        :style="{ width: menuButtonRect.width + 'px' }"
        @click="handleBack"
      >
        <slot name="left">
          <!-- 支付宝自定义还是有返回按钮 -->
          <template v-if="isShowBack">
            <image
              v-if="isFirstPage"
              :src="homeIcon || '../../assets/icons/home.png'"
              class="img"
            ></image>
            <image
              v-else
              :src="backIcon || '../../assets/icons/prev.png'"
              class="img"
            ></image>
          </template>
        </slot>
      </view>

      <view class="nav-title">
        <slot>{{ title }}</slot>
      </view>

      <!-- 胶囊位置 -->
      <view
        class="nav-menu"
        v-if="isShowRight"
        :style="{ width: menuButtonRect.width + 'px' }"
      >
        <slot name="right"></slot>
      </view>
    </view>
  </view>
  <!-- #endif -->
</template>

<script setup>
// Props 定义
const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  homeUrl: {
    type: String,
    default: '/pages/index/index'
  },
  homeIcon: {
    type: String,
    default: ''
  },
  backUrl: {
    type: String,
    default: ''
  },
  backIcon: {
    type: String,
    default: ''
  },
  fixed: {
    type: Boolean,
    default: false
  },
  zIndex: {
    type: Number,
    default: 99
  },
  backgroundColor: {
    type: String,
    default: '#fff'
  },
  backgroundImage: {
    type: String,
    default: ''
  },
  fontColor: {
    type: String,
    default: '#000'
  },
  isShowBack: {
    type: Boolean,
    default: true
  },
  isShowLeft: {
    type: Boolean,
    default: true
  },
  isShowRight: {
    type: Boolean,
    default: true
  },
  defaultNavBarheight: {
    type: Number,
    default: 60
  },
  defaultMenuWidth: {
    type: Number,
    default: 60
  },
  jumpMap: {
    type: Object,
    default: () => ({ home: '', back: '' })
  }
})

// 响应式数据
import { ref, onMounted } from 'vue'

const statusBarHeight = ref(0)
const navBarHeight = ref(props.defaultNavBarheight)
const menuButtonRect = ref({ width: props.defaultMenuWidth })
const height = ref(props.defaultNavBarheight)
const isFirstPage = ref(true)

// 方法
const setTitle = () => {
  // #ifdef MP-ALIPAY
  uni.setNavigationBarTitle({ title: props.title })
  // #endif

  // #ifdef H5
  document.title = props.title
  // #endif
}
// 获取胶囊和状态栏信息
const getRectInfo = () => {
  const sysInfo = uni.getSystemInfoSync()
  statusBarHeight.value = sysInfo.statusBarHeight
  height.value = statusBarHeight.value + props.defaultNavBarheight

  // #ifndef APP-PLUS || H5
  if (uni.canIUse('getMenuButtonBoundingClientRect')) {
    const rect = uni.getMenuButtonBoundingClientRect()
    menuButtonRect.value = rect
    navBarHeight.value = (rect.top - sysInfo.statusBarHeight) * 2 + rect.height
    height.value = statusBarHeight.value + navBarHeight.value
  }
  // #endif
}
// 获取页面信息，判断是否为首页
const getPageInfo = () => {
  const pages = getCurrentPages()
  isFirstPage.value = pages.length === 1
}
// 处理返回逻辑
const handleBack = () => {
  if (!props.isShowBack) return

  let url = ''
  let type = ''

  if (!isFirstPage.value) {
    url = props.backUrl || ''
    type = props.jumpMap.back || ''
  } else {
    url = props.homeUrl || ''
    type = props.jumpMap.home || ''
  }

  if (!url) {
    if (!isFirstPage.value) {
      uni.navigateBack({ delta: 1 })
    }
    return
  }

  if (type) {
    uni[type]({ url })
    return
  }

  try {
    uni.navigateTo({ url })
  } catch (error) {
    uni.switchTab({ url })
  }
}
onMounted(() => {
  getRectInfo()
  getPageInfo()
  setTitle()
})
</script>

<style>
.cos-header {
  position: relative;
  width: 100vw;
}
.nav-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100vw;
}
.is_fixed {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 99;
}
.nav-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 8px;
  height: 100%; /* 666666 */
}
.img {
  width: 20px;
  height: 20px;
  color: #fff;
}
.nav-back {
  flex-shrink: 0;
}
.nav-title {
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  word-break: break-all;
  text-overflow: ellipsis;
}
.nav-menu {
  flex-shrink: 0;
}
</style>