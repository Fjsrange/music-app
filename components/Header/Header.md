## API

### NavBar Props

|       属性名        |  类型   |       默认值        |                             说明                             |
| :-----------------: | :-----: | :-----------------: | :----------------------------------------------------------: |
|        title        | String  |          -          |                           标题文字                           |
|       homeUrl       | String  | /pages/index/index  |                     左侧点击返回主页地址                     |
|      homeIcon       | String  |          -          |                         左侧主页图标                         |
|       backUrl       | String  |          -          |                       左侧点击返回地址                       |
|      backIcon       | String  |          -          |                         左侧返回图标                         |
|        fixed        | Boolean |        false        |                         是否固定顶部                         |
|       zIndex        | Number  |         99          |                           显示层级                           |
|   backgroundColor   | String  |        #fff         |                        导航栏背景颜色                        |
|   backgroundImage   | String  |        #000         |                        导航栏背景图片                        |
|      fontColor      | String  |          -          |                        图标和文字颜色                        |
|     isShowBack      | Boolean |        true         |        是否显示返回图标，isShowLeft为false时设置无效         |
|     isShowLeft      | Boolean |        true         |                       是否显示左侧区域                       |
|     isShowRight     | Boolean |        true         |                       是否显示右侧区域                       |
| defaultNavBarheight | Number  |         40          |            默认导航栏高度，只有在app或者h5时有效             |
|  defaultMenuWidth   | Number  |         40          |                        默认左右的宽度                        |
|       jumpMap       | Object  | {home: '',back: ''} | 不配置时，默认navigateTo,出错switchTab，可自定义左侧跳转方法映射 |

**Tips**

- 左右宽度设置defaultMenuWidth即可，左右宽度默认一致

### NavBar Slots

支持向 NavBar 里插入不同内容，以达到自定义的目的。

| slot名  |       说明       |
| :-----: | :--------------: |
| default | 向导航栏中间插入 |
|  left   | 向导航栏左侧插入 |
|  right  | 向导航栏右侧插入 |

```vue
<cos-header>
    <view>标题栏</view>
    <view v-slot:left>left</view>
    <view v-slot:right>right</view>
</cos-header>
```





作者：一诺滚雪球
链接：https://juejin.cn/post/7457758555173896227
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。