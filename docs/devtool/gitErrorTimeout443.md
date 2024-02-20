在使用git拉取或推送代码的时候提示443超时的错误，造成这个问题的原因通常是你的电脑使用了VPN网络代理，比如使用了clash
#### 解决方法是需要配置http代理
以windows电脑为例

1. 打开设置>网络>代理 选择代理

![image.png](https://cdn.nlark.com/yuque/0/2024/png/36013995/1705639431536-62146865-b340-4568-8ebe-89192e481ab3.png#averageHue=%23f3f3f3&clientId=u2aa85eac-45af-4&from=paste&height=670&id=u88ef44a1&originHeight=670&originWidth=812&originalType=binary&ratio=1&rotation=0&showTitle=false&size=157305&status=done&style=none&taskId=u0e46af0b-8566-406d-951f-efdcce295c1&title=&width=812)
#### 打开命令行工具输入下面的命令配置http代理，IP地址和端口号就是在设置中看到的那个
```javascript
git config --global http.proxy 127.0.0.1:7890
git config --global https.proxy 127.0.0.1:7890
```
配置了代理之后再次尝试一下拉取/推送代码如果还咩有生效的话，建议重启一下自己的电脑，因为我当时配置了之后就没有生效，使用了重启大法才生效的😁
##### 查看代理命令
```javascript
git config --global --get http.proxy
git config --global --get https.proxy
```
##### 取消代理命令
```javascript
git config --global --unset http.proxy
git config --global --unset https.proxy
```
> 参考文章：[https://blog.csdn.net/zpf1813763637/article/details/128340109](https://blog.csdn.net/zpf1813763637/article/details/128340109)

如果觉得有用，就给我点个赞吧😁
探索更多有趣知识，欢迎关注我的微信公众号！每天分享精彩内容，与你一同探寻知识的边界。扫码即可订阅，一起开启知识新旅程！🚀📚
![qrcode_for_gh_bd5bafbcdd40_258.jpg](https://cdn.nlark.com/yuque/0/2024/jpeg/36013995/1705556124681-b339e93e-c46c-41e7-9922-b49c58aeff21.jpeg#averageHue=%23a09f9f&clientId=u38add42d-4de3-4&from=ui&id=ufd2b1fe9&originHeight=258&originWidth=258&originalType=binary&ratio=1&rotation=0&showTitle=false&size=26790&status=done&style=none&taskId=u7f558f04-96e1-43f7-8d4c-70f1b40b037&title=)
关注我的技术博客，探索前沿科技与实用开发技巧。一起携手走向代码的精彩世界！🚀💻 不错过每一篇精彩！
> [https://www.xiaobaicoding.com](https://www.xiaobaicoding.com/)

