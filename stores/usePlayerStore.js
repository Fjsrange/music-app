import { defineStore } from 'pinia';

export const usePlayerStore = defineStore('player', {
  state: ()=>({
    currentSong: null, // 当前播放歌曲
    playList: [], // 当前播放列表
    currentIndex: -1, // 当前播放歌曲索引
    isPlaying: false, // 播放状态
    playMode: 0, // 播放模式 0 顺序播放 1 单曲循环 2 随机播放
    currentLyricLine: '', // 当前播放歌词行
    lyricLines: [] // 歌词行列表
  }),
  actions: {
    // 设置播放列表
    setPlayList(list) {
      this.playList = list;
      if (list.length > 0 && this.currentIndex === -1) {
        this.currentIndex = 0;
        this.currentSong = list[0];
      }
    },
    // 添加歌曲到播放列表
    addSongToPlayList(song) {
      this.playList.push(song);
    },
    // 切换到某首歌
    playSong(index){
      if (index >= 0 && index < this.playList.length) {
        this.currentIndex = index;
        this.currentSong = this.playList[index];
        this.isPlaying = true;
      }
    },
    // 下一首
    next(){
      // 如果播放列表为空，直接返回
      if (this.playList.length < 1) return; // 播放列表为空时不切换
      if (this.playMode === 1) { // 单曲循环
        this.currentIndex = this.currentIndex;
      }
      if(this.playMode === 2){ // 随机播放
        let randomIndex = this.currentIndex;
        // 确保不会重复播放同一首（除非列表只有一首歌）
        do {
          randomIndex = Math.floor(Math.random() * this.playList.length);
        } while (randomIndex === this.currentIndex && this.playList.length > 1);
        
        this.currentIndex = randomIndex;
      } else {
        this.currentIndex = (this.currentIndex + 1) % this.playList.length;
      }
      this.currentSong = this.playList[this.currentIndex];
      this.isPlaying = true;
    },
    // 上一首
    prev(){
      // 如果播放列表为空，直接返回
      if (this.playList.length < 1) return; // 播放列表为空时不切换
      if (this.playMode === 1) { // 单曲循环
        this.currentIndex = this.currentIndex;
      }
      this.currentIndex = (this.currentIndex - 1 + this.playList.length) % this.playList.length;
      this.currentSong = this.playList[this.currentIndex];
      this.isPlaying = true;
    },
    // 切换播放状态
    togglePlay(){
      this.playMode = (this.playMode + 1) % 3; // 播放模式切换 0->1->2->0
    },
    // 清空播放列表
    clearPlayList(){
      this.playList = [];
      this.currentSong = null;
      this.currentIndex = -1;
      this.isPlaying = false;
      this.playMode = 0;
    },
    // 更新当前播放歌词行
    updateLyric(line) {
      this.currentLyricLine = line;
    },
    // 设置歌词行列表
    setLyrics(lines) {
      this.lyricLines = lines;
    }
  },
  persist: {
    key: 'music-player',
    storage: {
      getItem(key) {
        try {
          const value = JSON.parse(uni.getStorageSync(key));
          console.log('[Pinia Persist] 获取存储成功:', key, value);
          // 如果值不存在，返回 null
          if (value === '') {
            return null;
          }
          // 尝试解析 JSON，如果失败则返回原值
          try {
            return typeof value === 'string' ? JSON.parse(value) : value;
          } catch (parseError) {
            console.warn('[Pinia Persist] JSON 解析失败，返回原始值:', parseError);
            return value;
          }
        } catch (e) {
          console.log('[Pinia Persist] 获取存储失败:', key, e.message);
          return null;
        }
      },
      setItem(key, value) {
        try {
          const serializedValue = JSON.stringify(value);
          uni.setStorageSync(key, serializedValue);
        } catch (e) {
          console.log('[Pinia Persist] 设置存储失败:', key, e.message);
        }
      },
      removeItem(key) {
        try {
          uni.removeStorageSync(key);
        } catch (e) {
          console.log('[Pinia Persist] 移除存储失败:', key, e.message);
        }
      }
    }
  }
})