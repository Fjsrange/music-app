<script>
export default {
  onLaunch: function () {
    console.log("App Launch");
  },
  onShow: function () {
    console.log("App Show");
  },
  onHide: function () {
    console.log("App Hide");
  },
};
</script>

<style lang="less">
:root {
  --bg-color: #f0f5f8;
  --primary-color: #e84141;
  --secondary-color: #ff6b6b;
  --text-color: #222;
  --text-color-secondary: #777;
  --border-color: #eee;
  --card-bg: #fff;
  --mask-bg: rgba(0, 0, 0, 0.4);
}
#app {
  // background-color: var(--bg-color);
  min-height: 100vh;
  padding: 40rpx;
  height: 100%;
}
/*每个页面公共css */
body {
  padding: 0;
  margin: 0;
  background-color: var(--bg-color);
}
</style>
