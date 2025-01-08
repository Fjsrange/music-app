// 网易云音乐排行榜接口
export function getMovies(data) {
  return uni.request({
    url: `https://api.52vmy.cn/api/music/wy/top?t=${data}`,
    method: "GET",
  });
}
