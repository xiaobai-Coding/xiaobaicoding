你好，我是小白Coding日志，一个热爱技术的程序员。在这里，我分享自己在编程和技术世界中的学习心得和体会。希望我的文章能够给你带来一些灵感和帮助。欢迎来到我的博客，一起在技术的世界里探索前行吧！
在日常的工作中，我们时常会碰到需要将前端页面中精美的设计或重要内容保存为图片的情况。这种需求可能来自于用户希望将页面快照分享给他人，或者是为了备份重要信息以供后续参考。面对这样的需求，传统的做法通常是依赖后端服务器生成图片，并提供下载链接。然而，随着前端技术的发展，我们也可以通过纯前端的方式实现这一功能，而无需依赖后端的帮助。在本文中，我们将深入探讨如何利用 Vue.js 中的强大功能，将前端页面上的元素无缝导出为高质量的图片，为我们的工作带来更大的灵活性和效率提升。
> 本项目基于Vite+Vue3，这里假设你已经搭建好项目了😀

为了实现将 DOM 对象导出为图片的功能，我们需要依赖一个非常有用的 npm 包，它就是 html2canvas。这个包提供了一个简单而强大的方法，可以将任何 DOM 元素转换为位图图像，使得我们能够在前端环境中轻松地生成并下载网页截图，为用户提供了更多灵活性和便利性。
```javascript
npm i html2canvas
```
###### 主要核心代码实现：

1. 通过按钮点击事件`exportImg`获取到要导出的DOM对象，
2. 调用`exportToImage`函数传入参数
```javascript
import html2canvas from 'html2canvas';
const exportImg = () =>{
  const dom = document.getElementById('exportContainer')
  exportToImage(dom, 'vue3+vite')
}
/**
 * @description 将dom对象导出为图片
 * @param {Object} exportContent 要导出的内容
 * @param {String} title 导出的图片名称
 */
 const exportToImage = (exportContent, title)=> {
  html2canvas(exportContent).then((canvas) => {
    const imageDataUrl = canvas.toDataURL('image/png');
    const downloadLink = document.createElement('a');
    downloadLink.href = imageDataUrl;
    downloadLink.download = `${title}.png`;
    downloadLink.click();
  });
}
```
![要导出的Dom对象](https://cdn.nlark.com/yuque/0/2024/png/36013995/1708438035540-593de0c6-1c8e-43df-8ebf-b9eb21c1a7ad.png#averageHue=%23fefefc&clientId=udccc962b-fd3e-4&from=paste&height=379&id=u26aeb84f&originHeight=379&originWidth=577&originalType=binary&ratio=1&rotation=0&showTitle=true&size=17374&status=done&style=none&taskId=u5e7e77f1-c8a4-4255-9a3f-c1a3d68d4f3&title=%E8%A6%81%E5%AF%BC%E5%87%BA%E7%9A%84Dom%E5%AF%B9%E8%B1%A1&width=577 "要导出的Dom对象")
###### 导出的效果👇
![image.png](https://cdn.nlark.com/yuque/0/2024/png/36013995/1708438167445-86bc2065-700b-4831-82b6-63d158613c39.png#averageHue=%23353535&clientId=udccc962b-fd3e-4&from=paste&height=580&id=uad274d05&originHeight=580&originWidth=1106&originalType=binary&ratio=1&rotation=0&showTitle=false&size=16733&status=done&style=none&taskId=uff53bf3b-ae49-49a7-a381-7fd1b8c449e&title=&width=1106)
###### 全部代码
```vue
<script setup>
import html2canvas from 'html2canvas';
import HelloWorld from './components/HelloWorld.vue'
const exportImg = () =>{
  const dom = document.getElementById('exportContainer')
  exportToImage(dom, 'vue3+vite')
}
/**
 * @description 将dom对象导出为图片
 * @param {Object} exportContent 要导出的内容
 * @param {String} title 导出的图片名称
 */
 const exportToImage = (exportContent, title)=> {
  html2canvas(exportContent).then((canvas) => {
    const imageDataUrl = canvas.toDataURL('image/png');
    const downloadLink = document.createElement('a');
    downloadLink.href = imageDataUrl;
    downloadLink.download = `${title}.png`;
    downloadLink.click();
  });
}
</script>

<template>
  <div style="padding: 20px" id="exportContainer">
    <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="将html导出为图片" />
  </div>
  <div class="card">
    <button type="button" class="btn" @click="exportImg">导出为图片</button>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.card .btn {
  background-color: #409eff;
  border-color: #409eff;
  color: #fff;
}
</style>
```
即使代码逻辑很简单，也值得记录下来。我的编程目标是避免重复造轮子！😊
如果觉得有用，就给我点个赞吧😁
探索更多有趣知识，欢迎关注我的微信公众号！每天分享精彩内容，与你一同探寻知识的边界。扫码即可订阅，一起开启知识新旅程！🚀📚
![qrcode_for_gh_bd5bafbcdd40_258.jpg](https://cdn.nlark.com/yuque/0/2024/jpeg/36013995/1705556124681-b339e93e-c46c-41e7-9922-b49c58aeff21.jpeg#averageHue=%23a09f9f&clientId=u38add42d-4de3-4&from=ui&id=A3aMy&originHeight=258&originWidth=258&originalType=binary&ratio=1&rotation=0&showTitle=false&size=26790&status=done&style=none&taskId=u7f558f04-96e1-43f7-8d4c-70f1b40b037&title=)
关注我的技术博客，探索前沿科技与实用开发技巧。一起携手走向代码的精彩世界！🚀💻 不错过每一篇精彩！
> [https://www.xiaobaicoding.com](https://www.xiaobaicoding.com/)

