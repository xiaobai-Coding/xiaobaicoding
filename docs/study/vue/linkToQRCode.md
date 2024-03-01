你好，我是小白Coding日志，一个热爱技术的程序员。在这里，我分享自己在编程和技术世界中的学习心得和体会。希望我的文章能够给你带来一些灵感和帮助。欢迎来到我的博客，一起在技术的世界里探索前行吧！
在现代 Web 应用中，快速分享链接是一项常见需求。二维码作为一种简洁的分享方式，受到了广泛欢迎。如何在 Vue.js 中实现前端生成链接二维码的功能，成为了许多开发者关注的焦点。本文将介绍如何使用 Vue 纯前端技术实现动态生成链接二维码的方法，无需后端参与。
> 本项目基于Vite+Vue3，这里假设你已经搭建好项目了😀前端页面使用el-input+el-popover来实现

为了在应用程序中实现链接生成二维码的功能，我们需要依赖一个npm 包qrcode.vue。这个包提供了一个简单而强大的方法，让我们能够轻松地在 Vue.js 应用程序中生成二维码，无需编写冗长复杂的代码，极大地简化了开发流程，提高了开发效率。
> 具体属性配置可以查看qrcode.vue官方文档：[https://github.com/scopewu/qrcode.vue](https://github.com/scopewu/qrcode.vue)

##### 安装
```javascript
npm install --save qrcode.vue
```
##### 在需要使用的文件中引入qrcode
```vue
<script setup>
import QrcodeVue from 'qrcode.vue'
const level = ref('M')
const renderAs = ref('svg')
import { ref } from 'vue'
const link = ref('https://www.mi.com/')
const onQRCode = () =>{}
</script>

<template>
  <h1>前端实现链接生成二维码</h1>
  <el-input v-model="link" placeholder="Please input" style="width: 400px;">
      <template #append>
        <el-popover
        placement="bottom"
        :width="160"
        trigger="click"
      >
        <template #reference>
          <div class="qrcode">二维码</div>
        </template>
        <template #default>
          <div class="code-container">
            <div class="title">扫描二维码，分享此链接</div>
            <qrcode-vue id="svgRef" :value="link" :size="120" :level="level" :render-as="renderAs" />
            <el-button icon="sc-icon-ImportsIcon" style="width: 120px;margin-top: 10px;" class="m-t10" size="small" @click="downloadQrCode">下载</el-button>
          </div>
        </template>
      </el-popover>
      </template>
  </el-input>
</template>

<style scoped>
.code-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.qrcode {
  cursor: pointer;
}
.title {
  font-size: 12px;
  color: #8e939c;
  margin-bottom: 5px;
}
</style>

```
效果如下👇
![image.png](https://cdn.nlark.com/yuque/0/2024/png/36013995/1709208879442-ff4ff36a-84ba-4122-af6b-0b0942e7d3d3.png#averageHue=%23f6f6f6&clientId=u4140b505-bcaa-4&from=paste&height=422&id=u4367275c&originHeight=422&originWidth=612&originalType=binary&ratio=1&rotation=0&showTitle=false&size=24887&status=done&style=none&taskId=u462e515d-4f6f-4570-8fe0-72f24195ec6&title=&width=612)

##### 下载二维码代码实现
```javascript
/* 下载二维码 */
const downloadQrCode = () =>{
    const node = document.getElementById('svgRef')
    covertSVG2Image(node, '扫描二维码，分享此链接', 120, 120)
};
/**
 * 将svg导出成图片
 * @param node svg节点 => document.querySelector('svg')
 * @param name 生成的图片名称
 * @param width 生成的图片宽度
 * @param height 生成的图片高度
 * @param type 生成的图片类型
 */
const covertSVG2Image = (node, name, width, height, type = 'png') => {
  let serializer = new XMLSerializer()
  let source = '<?xml version="1.0" standalone="no"?>\r\n' + serializer.serializeToString(node)
  let image = new Image()
  image.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(source)
  let canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height
  let context = canvas.getContext('2d')
  context.fillStyle = '#fff'
  context.fillRect(0, 0, 10000, 10000)
  image.onload = function () {
    context.drawImage(image, 0, 0)
    let a = document.createElement('a')
    a.download = `${name}.${type}`
    a.href = canvas.toDataURL(`image/${type}`)
    a.click()
  }
}
```
下载的二维码
![image.png](https://cdn.nlark.com/yuque/0/2024/png/36013995/1709208934179-fb2d47ff-05fc-4f82-a5cd-216545ef2585.png#averageHue=%23f9fbfe&clientId=u4140b505-bcaa-4&from=paste&height=245&id=ua462c72a&originHeight=245&originWidth=317&originalType=binary&ratio=1&rotation=0&showTitle=false&size=1824&status=done&style=none&taskId=ub89e8bd7-9f8c-48da-9f1d-ffad32aada4&title=&width=317)
以上所述即是如何在前端实现二维码生成以及支持下载的完整方案。 ✔️
最后还是那句话：即使代码逻辑很简单，也值得记录下来。我的编程目标是避免重复造轮子！😊
如果觉得有用，就给我点个赞吧😁
探索更多有趣知识，欢迎关注我的微信公众号！每天分享精彩内容，与你一同探寻知识的边界。扫码即可订阅，一起开启知识新旅程！🚀📚
关注我的技术博客，探索前沿科技与实用开发技巧。一起携手走向代码的精彩世界！🚀💻 不错过每一篇精彩！
> [https://www.xiaobaicoding.com](https://www.xiaobaicoding.com/)

