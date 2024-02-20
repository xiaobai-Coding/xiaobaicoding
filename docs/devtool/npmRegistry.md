你好，我是小白Coding日志，一个热爱技术的程序员。在这里，我分享自己在编程和技术世界中的学习心得和体会。希望我的文章能够给你带来一些灵感和帮助。欢迎来到我的博客，一起在技术的世界里探索前行吧！
#### 前言
就在昨天我创建新项目的时候总是给我报错，最开始我以为是网络问题但是在多次尝试之后还是报同样的错误，当我我查看了报错信息后联想到前几天看到一篇文章说淘宝镜像`registry.npm.taobao.org`域名的HTTPS证书将于2024年1月22日到期，如果想要继续使用淘宝镜像源需要切换新的源地址。
#### 切换新的镜像源
```javascript
// 1. 如果不确定可以先检测一下自己使用了那个镜像源
npm config get registry

// 2. 清理一下缓存
npm cache clean --force

// 3. 切换新的源地址
npm config set registry https://registry.npmmirror.com
```
然后再尝试新建自己的项目就不报那个错误了✔️
#### cnpm使用
```javascript
//安装cnpm
npm install -g cnpm --registry=https://registry.npmmirror.com
//检测是否安装成功
cnpm -v
```
#### 选择适合个人需求的国内镜像，不仅限于淘宝，灵活切换
腾讯: [http://mirrors.cloud.tencent.com/npm/](http://mirrors.cloud.tencent.com/npm/)
华为：[https://mirrors.huaweicloud.com/repository/npm/](https://mirrors.huaweicloud.com/repository/npm/)
中科大镜像: [https://registry.npmjs.org/](https://registry.npmjs.org/)

如果觉得有用，就给我点个赞吧😁
探索更多有趣知识，欢迎关注我的微信公众号！每天分享精彩内容，与你一同探寻知识的边界。扫码即可订阅，一起开启知识新旅程！🚀📚
![qrcode_for_gh_bd5bafbcdd40_258.jpg](https://cdn.nlark.com/yuque/0/2024/jpeg/36013995/1705556124681-b339e93e-c46c-41e7-9922-b49c58aeff21.jpeg#averageHue=%23a09f9f&clientId=u38add42d-4de3-4&from=ui&id=A3aMy&originHeight=258&originWidth=258&originalType=binary&ratio=1&rotation=0&showTitle=false&size=26790&status=done&style=none&taskId=u7f558f04-96e1-43f7-8d4c-70f1b40b037&title=)
关注我的技术博客，探索前沿科技与实用开发技巧。一起携手走向代码的精彩世界！🚀💻 不错过每一篇精彩！
> [https://www.xiaobaicoding.com](https://www.xiaobaicoding.com/)

