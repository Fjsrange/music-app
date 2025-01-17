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

<style lang="scss">
/*每个页面公共css */
body {
  padding: 0;
  margin: 0;
  /* background: -var($bgColor); */
  background: $bgColor;
}
</style>
