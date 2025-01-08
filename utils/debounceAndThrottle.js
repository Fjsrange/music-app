import { customRef } from 'vue';

/**
 * 创建一个防抖响应式引用（ref），该引用在连续的更新之间至少等待指定的时间间隔。
 * @param {any} value - 初始值。
 * @param {number} duration - 防抖时间间隔，默认为500毫秒。
 * @returns {object} - 返回一个具有get和set方法的对象，用于创建防抖响应式引用。
 */
// 防抖Ref
export function debounceRef(value, duration = 500) {
  let timer; // 用于存储防抖定时器的变量

  // 使用Vue的customRef创建一个自定义的响应式引用
  return customRef((track, trigger) => {
    return {
      // 获取当前防抖引用的值
      get() {
        // 告诉Vue追踪这个值的依赖，以便在值变化时能够更新视图
        track();
        return value; // 返回当前值
      },
      // 设置新的值，但受防抖逻辑控制
      set(newValue) {
        // 清除之前的定时器，如果在duration时间内再次设置值，之前的定时器将被取消
        clearTimeout(timer);
        // 设置一个新的定时器，在duration后触发更新
        timer = setTimeout(() => {
          value = newValue; // 更新当前值
          // 通知Vue触发更新，此时视图将根据新的值进行渲染
          trigger();
        }, duration);
      }
    };
  });
}



// 节流
/**
 * 创建一个节流响应式引用（ref），该引用在指定的时间间隔内只更新一次。
 * @param {any} value - 初始值。
 * @param {number} duration - 节流时间间隔，默认为500毫秒。
 * @returns {object} - 返回一个具有get和set方法的对象，用于创建节流响应式引用。
 */
export function throttleRef(value, duration = 500) {
  let lastTime = 0; // 记录上次触发更新的时间戳

  // 使用Vue的customRef创建一个自定义的响应式引用
  return customRef((track, trigger) => {
    return {
      // 获取当前节流引用的值
      get() {
        track(); // 告诉Vue追踪这个值的依赖
        return value; // 返回当前值
      },
      // 设置新的值，但受节流逻辑控制
      set(newValue) {
        const now = Date.now(); // 获取当前时间戳
        // 如果当前时间与上次触发时间的差值大于等于节流时间间隔
        if (now - lastTime >= duration) {
          value = newValue; // 更新当前值
          trigger(); // 触发更新，通知Vue重新渲染
          lastTime = now; // 更新上次触发时间
        }
      }
    };
  });
}