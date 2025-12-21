import { defineStore } from "pinia";
import { themeMap, THEME_KEY } from "@/utils/themeConfig";

export const useThemeStore = defineStore("theme", {
  state: () => ({
    currentTheme: "default",
  }),
  actions: {
    // 初始化主题
    initTheme() {
      const saved = uni.getStorageSync(THEME_KEY); // 从本地存储获取主题
      this.currentTheme = saved || "default";
      this.applyTheme(this.currentTheme);
    },
    // 切换主题
    setTheme(themeName) {
      if (!themeMap[themeName]) return;
      this.currentTheme = themeName;
      uni.getStorageSync(THEME_KEY, themeName);
      this.applyTheme(themeName);
    },
    // 应用主题到全局
    applyTheme(themeName) {
      const vars = themeMap[themeName];
      const root = document.documentElement;
      // 兼容: 在小程序中document可能受限，但 Uniapp 会polyfill
      Object.keys(vars).forEach((key) => {
        root.style.setProperty(key, vars[key]);
      });
    },
  },
});
