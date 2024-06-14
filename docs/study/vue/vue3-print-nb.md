你好，我是小白Coding日志，一个热爱技术的程序员。在这里，我分享自己在编程和技术世界中的学习心得和体会。希望我的文章能够给你带来一些灵感和帮助。欢迎来到我的博客，一起在技术的世界里探索前行吧！
### 前言
 在前端开发中，经常需要打印页面的特定部分，比如客户列表或商品详情页。要快速实现这些功能，可以使用 vue3-print-nb 插件。它通过对 DOM 元素的操作和 CSS 样式的处理，轻松实现页面内容的打印功能。  
#### 安装
当前示例以Vue3+ElementPlus为例，如果要使用vue2版本的就安装`npm install vue-print-nb --save`。
```javascript
npm install vue3-print-nb --save
```
```javascript
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import print from 'vue3-print-nb'
import './style.css'
import App from './App.vue'
const app = createApp(App)

app.use(ElementPlus)
app.use(print)
app.mount('#app')
```
#### 使用
```vue
<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)

const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]

</script>

<template>
  <h1>{{ msg }}</h1>
  <div class="btn">
    <el-button type="primary" v-print="'#printTable'">打印</el-button>
  </div>
  <el-table id="printTable" :data="tableData" border style="width: 100%">
    <el-table-column prop="date" label="Date" width="180" />
    <el-table-column prop="name" label="Name" width="180" />
    <el-table-column prop="address" label="Address" />
  </el-table>
</template>
```
![image.png](https://cdn.nlark.com/yuque/0/2024/png/36013995/1718349761116-d7f0e8a4-3233-4df6-8c9f-c3acd335eb44.png#averageHue=%23fefefe&clientId=u491a3a1c-3159-4&from=paste&height=704&id=u988a377c&originHeight=704&originWidth=1362&originalType=binary&ratio=1&rotation=0&showTitle=false&size=33032&status=done&style=none&taskId=u5f7de3be-dd9d-4475-8c47-bcbed34f34b&title=&width=1362)
只需要在要打印的元素上通过`v-print`属性即可实现打印的效果，可以选择打印全部或者打印指定页面，比如我只想要打印`el-table`表格部分，只需要在`el-button`按钮上面绑定`v-print="'#printTable'"`，我已经提前在el-table上定义好了`id="printTable"`，`v-print`的属性值对应的就是`el-table`。
打印效果预览👇
![image.png](https://cdn.nlark.com/yuque/0/2024/png/36013995/1718349787033-3f728a30-9992-43b8-ad45-848a09028d3c.png#averageHue=%23eecf95&clientId=u491a3a1c-3159-4&from=paste&height=858&id=ud7ce851b&originHeight=858&originWidth=1309&originalType=binary&ratio=1&rotation=0&showTitle=false&size=44166&status=done&style=none&taskId=uedfe7261-6beb-489d-ac78-0e5031fee2b&title=&width=1309)
以上实现了一个最基本的打印效果，`v-print`还支持更多的属性呢!它的属性值可以是一个对象以此来实现更加定制化的打印效果，一起来看看吧💖
HTML
```vue
  <div class="btn">
    <el-button type="primary" v-print="printObj">打印</el-button>
  </div>
  <el-table id="printTable" :data="tableData" border style="width: 100%">
    <el-table-column prop="date" label="Date" width="180" />
    <el-table-column prop="name" label="Name" width="180" />
    <el-table-column prop="address" label="Address" />
  </el-table>
```
JavaScript
```javascript
const printObj = {
  id: 'printTable',
  popTitle: 'print nb',
  extraCss: "https://cdn.bootcdn.net/ajax/libs/animate.css/4.1.1/animate.compat.css, https://cdn.bootcdn.net/ajax/libs/hover.css/2.3.1/css/hover-min.css",
  extraHead: '<meta http-equiv="Content-Language"content="zh-cn"/>',
  beforeOpenCallback (vue) {
    console.log('打开之前')
  },
  openCallback (vue) {
    console.log('执行了打印')
  },
  closeCallback (vue) {
    console.log('关闭了打印工具')
  }
}
```
我们可以给要打印的页面指定额外的样式、额外的样式、额外头，甚至是添加回调函数！
##### 打印网址
为`printObj`对象添加一个url属性即可实现打印当前网址对应的整个页面。但是如何设置了`url`数据就不能再同时设置`id`属性了。还有一点需要的注意的是设置url属性需要确保同源策略相同！
```javascript
const printObj = {
  url: 'http://localhost:5173/',
  popTitle: 'good print',
  extraCss: "https://cdn.bootcdn.net/ajax/libs/animate.css/4.1.1/animate.compat.css, https://cdn.bootcdn.net/ajax/libs/hover.css/2.3.1/css/hover-min.css",
  extraHead: '<meta http-equiv="Content-Language"content="zh-cn"/>',
  beforeOpenCallback (vue) {
    console.log('打开之前')
  },
  openCallback (vue) {
    console.log('执行了打印')
  },
  closeCallback (vue) {
    console.log('关闭了打印工具')
  }
}
```
##### 2.2. 打印预览
设置了preview属性将在打印时候显示打印预览。
```javascript
const printObj = {
  id: 'printTable',
  preview:true, // 打印预览
  previewTitle: '打印预览',
  popTitle: 'good print',
  extraCss: "https://cdn.bootcdn.net/ajax/libs/animate.css/4.1.1/animate.compat.css, https://cdn.bootcdn.net/ajax/libs/hover.css/2.3.1/css/hover-min.css",
  extraHead: '<meta http-equiv="Content-Language"content="zh-cn"/>',
  beforeOpenCallback (vue) {
    console.log('打开之前')
  },
  openCallback (vue) {
    console.log('执行了打印')
  },
  closeCallback (vue) {
    console.log('关闭了打印工具')
  }
}
```
打印预览效果
![image.png](https://cdn.nlark.com/yuque/0/2024/png/36013995/1718351455956-2333c58a-af5c-4b4f-aa7a-1cccf80cf464.png#averageHue=%23f5f5f5&clientId=u491a3a1c-3159-4&from=paste&height=656&id=uf2bb24ff&originHeight=656&originWidth=1911&originalType=binary&ratio=1&rotation=0&showTitle=false&size=22133&status=done&style=none&taskId=u961f959c-ed18-4f0d-bc66-fd46a26aaa0&title=&width=1911)
### v-print API
| 参数 | 说明 | 类型 | 可选项 | 默认值 |
| --- | --- | --- | --- | --- |
| id | 范围打印ID，必填值 | String | — | — |
| standard | 文档类型（仅打印本地范围） | String | html5/loose/strict | html5 |
| extraHead | <head></head>在节点中添加 DOM 节点，多个节点用 分隔,（仅打印局部范围） | String | — | — |
| extraCss | <link>新的 CSS 样式表，并使用 分隔多个节点,（仅打印局部范围） | String | — | - |
| popTitle | <title></title>标签内容（仅打印本地范围） | String | — | - |
| openCallback | 调用打印工具成功回调函数 | Function | Returns the instance of Vue called at that time | - |
| closeCallback | 关闭打印工具成功回调函数 | Function | Returns the instance of Vue called at that time | - |
| beforeOpenCallback | 调用打印工具前的回调函数 | Function | Returns the instance of Vue called at that time | - |
| url | 打印指定URL。（不可同时设置ID） | string | - | - |
| asyncUrl | 通过 'resolve()' 返回 URL | Function | - | - |
| preview | 预览工具 | Boolean | - | false |
| previewTitle | 预览工具标题 | String | - | '打印预览' |
| previewPrintBtnLabel | 预览工具按钮的名称 | String | - | '打印' |
| zIndex | 预览工具的 CSS：z-index | String,Number | - | 20002 |
| previewBeforeOpenCallback | 启动预览工具前的回调函数 | Function | Returns the instance of Vue | - |
| previewOpenCallback | 预览工具完全打开后的回调函数 | Function | Returns the instance of Vue | - |

> 官方文档：[https://github.com/Power-kxLee/vue3-print-nb?tab=readme-ov-file#v-print-api](https://github.com/Power-kxLee/vue3-print-nb?tab=readme-ov-file#v-print-api)

最后还是那句话：即使代码逻辑很简单，也值得记录下来。我的编程目标是避免重复造轮子！😊
如果觉得有用，就给我点个赞吧😁
探索更多有趣知识，欢迎关注我的微信公众号！每天分享精彩内容，与你一同探寻知识的边界。扫码即可订阅，一起开启知识新旅程！🚀📚
关注我的技术博客，探索前沿科技与实用开发技巧。一起携手走向代码的精彩世界！🚀💻 不错过每一篇精彩！
> [https://www.xiaobaicoding.com](https://www.xiaobaicoding.com/)

