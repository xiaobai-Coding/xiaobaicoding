我平时写文章使用的语雀，写好之后再导出为MarkDown文档，再把MarkDown文档放入自己项目目录中VuePress就会帮我渲染为静态html页面。我一直在想一个问题如何才能渲染网络图片呢，也就是通过一个网络链接🔗就能加载这张图片，经过在网上查阅资料找到了解决方法：
#### 解决方法
:::tips
在config.js中的head属性中配置如下
:::
```javascript
head: [
    ['link', { rel: 'icon', href: '/images/logo1.png' }], 
    ["meta", { name:"referrer", content:"no-referrer"}]
  ]
```
#### head
> 结合官方文档 [https://v2.vuepress.vuejs.org/zh/reference/config.html#description](https://v2.vuepress.vuejs.org/zh/reference/config.html#description)

> `head`配置的作用是在最终渲染出的HTML的head标签内加入的额外标签

例如
```javascript
head: [['link', { rel: 'icon', href: '/images/logo.png' }]],
```
将渲染为
```html
<head>
  <link rel="icon" href="/images/logo.png" />
</head>
```
meta将渲染为
```html
<head>
  <meta name="referrer" content="no-referrer">
</head>
```
#### meta
meta标签用来描述HTML文档的属性，通常用于指定字符集、页面描述、关键词、文档作者和视口设置，设置的属性不会显示在页面上，但可以被浏览器解析。
:::warning
每个meta标签只能用于一种用途，如果想要设置多个属性那就在head标签中设置多个meta标签
:::
###### 属性
| 属性 | 值 | 作用 |
| --- | --- | --- |
| charset | 字符集 例如UTF-8 | 规定 HTML 文档的字符编码 |
| name | name="value" | 用来描述HTML文档的属性 |
| content | content="value" | 给出与name/http-equiv 给定的key相对应的属性值 |
| http-equiv | http-equiv="value" | 为content指定的值提供 HTTP 标头,http-equiv属性可用于模拟 HTTP 响应标头 |

```html
<head>
  <meta name="description" content="xiaobaiCoding日志">
  <meta name="keywords" content="HTML,CSS,JavaScript">
  <meta name="author" content="xiaobai">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
```
###### name的属性
| 属性 | 值 | 作用 |
| --- | --- | --- |
| keywords | name="keywords" | 指定网页的关键词，多个关键词以逗号分割 |
| description | name="description" | 网页描述，搜索引擎将依据此来显示搜索结果 |
| author | name="author" | 网页作者 |
| viewport | name="viewport" | 控制视口 |
| application-name  | name="application-name" | 规定页面代表的 Web 应用程序的名称 |
| generator | name="generator" | 规定用于生成文档的软件包之一 |

###### http-equiv的属性
| 属性 | 描述 |
| --- | --- |
| content-security-policy | 规定文档的内容政策 |
| content-type | 规定文档的字符编码 |
| default-style | 规定要使用的首选样式表 |
| refresh | 定义文档刷新自身的时间间隔，以秒为单位。 |

> 文档来源：[https://www.w3school.com.cn/tags/att_meta_http_equiv.asp](https://www.w3school.com.cn/tags/att_meta_http_equiv.asp)

##### referrer
现在我们又回到meta标签中的referrer属性值中来，referrer与HTTP请求有关，是HTTP头中的一部分，包含了一个 URL，表示当前请求是从哪个页面链接过来的，referrer主要在 HTTP 请求头中使用，用于指示引用来源。当用户从一个页面跳转到另一个页面时，浏览器会在请求头中包含 referrer信息，告诉服务器用户是从哪个页面链接跳转而来的。服务器可以利用这个信息进行统计、分析和优化。
###### referrer属性
| 属性 | 描述 |
| --- | --- |
| no-referrer | 在所有情况下都不发送referrer |
| no-referrer-when-downgrade | 默认值。当从 HTTPS 链接到 HTTP不会发送 referrer，其他情况都发送。 |
| same-origin | 链接到同源的地址会发送referrer，其他情况的不会发送referrer。 |
| origin | 一律发送，不管是否跨域 |
| strict-origin | 当从 HTTPS 链接到 HTTP不会发送 referrer，其他情况只发送源信息 |
| origin-when-cross-origin | 同源时发送完整的referrer,不同源时候发送源信息 |
| strict-origin-when-cross-origin | 同源时发送完整的referrer，不同源时如果从 HTTPS 链接到 HTTP不会发送 referrer，只发送源信息 |
| unsafe-url | referrer字段包含源信息、路径、和查询字段，不包含用户名和密码 |

> 参考文章：[https://imququ.com/post/referrer-policy.html](https://imququ.com/post/referrer-policy.html)
> 参考文章：[https://segmentfault.com/a/1190000017896469](https://segmentfault.com/a/1190000017896469)
> 参考文章：[https://www.ruanyifeng.com/blog/2019/06/http-referer.html](https://www.ruanyifeng.com/blog/2019/06/http-referer.html)

就是利用这个`no-referrer`属性解决了上面的问题
如果觉得有用，就给我点个赞吧😁
探索更多有趣知识，欢迎关注我的微信公众号！每天分享精彩内容，与你一同探寻知识的边界。扫码即可订阅，一起开启知识新旅程！🚀📚
![qrcode_for_gh_bd5bafbcdd40_258.jpg](https://cdn.nlark.com/yuque/0/2024/jpeg/36013995/1705556124681-b339e93e-c46c-41e7-9922-b49c58aeff21.jpeg#averageHue=%23a09f9f&clientId=u38add42d-4de3-4&from=ui&id=ufd2b1fe9&originHeight=258&originWidth=258&originalType=binary&ratio=1&rotation=0&showTitle=false&size=26790&status=done&style=none&taskId=u7f558f04-96e1-43f7-8d4c-70f1b40b037&title=)
关注我的技术博客，探索前沿科技与实用开发技巧。一起携手走向代码的精彩世界！🚀💻 不错过每一篇精彩！
> [https://www.xiaobaicoding.com/](https://www.xiaobaicoding.com/)

