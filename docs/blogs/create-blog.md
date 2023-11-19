<a name="UyF8Z"></a>
### 什么是VuePress?
**以下是VuePress官方文档的介绍：**<br />VuePress 是一个以 Markdown 为中心的静态网站生成器。你可以使用 [Markdown](https://zh.wikipedia.org/wiki/Markdown) 来书写内容（如文档、博客等），然后 VuePress 会帮助你生成一个静态网站来展示它们。<br />VuePress 诞生的初衷是为了支持 Vue.js 及其子项目的文档需求，但是现在它已经在帮助大量用户构建他们的文档、博客和其他静态网站。
<a name="UpeVW"></a>
### 什么时Vercel？
**以下是Vercel官方文档的介绍：**<br />Vercel 是一个面向开发人员的平台，可提供更快地构建和部署 Web 应用程序所需的工具、工作流程和基础设施，而无需额外配置。<br />Vercel 开箱即用地支持[流行的前端框架](https://vercel.com/docs/frameworks)，其可扩展、安全的基础设施分布在全球范围内，可以从用户附近的数据中心提供内容，以实现最佳速度。<br />在开发过程中，Vercel 提供了用于项目实时协作的工具，例如自动预览和生产环境以及预览部署的评论。
> **以上就是关于VuePress和Vercel的定义**


---

<a name="XJJan"></a>
### 如何使用VuePress?
格外注意：
> 我们的vuepress版本是2.0，首先得保证你的node版本在18.16.0以上

<a name="u5EcL"></a>
#### 搭建一个基础的博客目录
<a name="iVGm7"></a>
#### 创建一个新目录并进入
```javascript
mkdir vuepress-starter
cd vuepress-starter
```
<a name="n7jPz"></a>
#### 初始化项目
```javascript
git init
npm init
```
:::warning
注意：在`npm init`这一步你只需要一直按回车就行了
:::
<a name="IIPFH"></a>
#### 将 VuePress 安装为本地依赖
```javascript
npm install -D vuepress@next
```
<a name="jHQ92"></a>
#### 在 package.json 中添加scripts
```javascript
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
      "docs:build": "vuepress build docs"
  }
}
```
添加之后你的package.json长这样儿
```javascript
{
  "name": "vuepress-demo",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
      "docs:dev": "vuepress dev docs",
      "docs:build": "vuepress build docs"
  },
  "author": "",
    "license": "ISC",
    "devDependencies": {
    "vuepress": "^2.0.0-rc.0"
  }
}
```
<a name="YwaqI"></a>
#### 将node_modules、.temp、.cache目录添加到 .gitignore 文件中
```javascript
echo 'node_modules' >> .gitignore
echo '.temp' >> .gitignore
echo '.cache' >> .gitignore
```
<a name="GpoVr"></a>
#### 在你的项目根目录下创建`docs`文件夹以及在`docs`文件夹下面创建`README.md`文件。docs文件夹是你以后主要工作的目录，用来存放md文档、静态资源、配置信息等
<a name="lyEnZ"></a>
#### 运行命令`npm run docs:dev`启动开发服务就会启动一个[http://localhost:8080/](http://localhost:8080/) 的本地服务，然后让我们在README.md中写点东西来看看效果，直接写 Markdown 语法即可，比如我们写上一个
<a name="r8z0f"></a>
#### `# vuepress-demo`打开浏览器就会看到效果
> <a name="ZxykN"></a>
##### 以上就是对vuepress最基础的上手操作，我们搭建了一个vuepress项目并启动了一个开发服务并为它设置了一个h1的标题


---

<a name="XqDBh"></a>
### vuepress基础配置
**在**`**docs/.vuepress**`**文件夹下创建一个**`**config.js**`**(如果没有.vuepress那就在docs目录下面手动创建一个)config.js主要是用来存放项目的一些配置，所以这个文件显得及其重要。**
> 以下的配置均写在config.js中

<a name="l282j"></a>
#### 主题
我们先使用默认主题，默认主题是内置了的不需要再单独安装，如果需要安装其他的主题具体的操作可以查看官方文档 👉[主题](https://vuepress.vuejs.org/zh/theme/blog-theme.html)
```javascript
import { defaultTheme } from 'vuepress' // 默认主题

export default {
  theme: defaultTheme({
    // 默认主题配置
    navbar: [
       {text: '掘金', link: 'https://juejin.cn/user/515006730085735'},
       {text: 'Github', link: 'https://github.com/xiaobai-Coding'},
    ],
  }),
}
```
<a name="sWF1d"></a>
#### navbar导航栏
navbar属性为一个数组text为标题link为需要导航的链接，例如像下面这样
```javascript
navbar: [
      {text: '掘金', link: 'https://juejin.cn/user/515006730085735'},
      {text: 'Github', link: 'https://github.com/xiaobai-Coding'},
    ],
```
<a name="hJOrz"></a>
#### sidebar侧栏目录
sidebar属性接收一个数组， text标题、collapsible是否可折叠、children子项目，children中可以嵌套继续子项目
```javascript
sidebar: [
  {
        text: '学习',
        collapsible: true,
        children: [
          /* JavaScript */
          {
            text: 'JavaScript',
            collapsible: true,
            children: []
          },
          /* Vue */
          {
            text: 'Vue',
            collapsible: true,
            children: []
          },
          /* CSS */
          {
            text: 'CSS',
            collapsible: true,
            children: []
          },
         {
          text: '03.md',
          link: '/study/03.md',
         }
        ]
      },
]
```
<a name="q3gJU"></a>
#### 标题和语言
title属性为一个字符串作为博客的标题展示<br />lang博客的语言默认为英文，我们可以将它改为中文`zh-CN`
```javascript
import { defaultTheme } from '@vuepress/theme-default'
module.exports = {
  title: '小白Coding日志',
  lang: 'zh-CN',
  description: '这里是小白Coding日志,会以轻松简单的方式,通过分享编程学习日常,帮助大家一步步掌握编程技能!',
  theme: defaultTheme({
    navbar: [
      {text: '掘金', link: 'https://juejin.cn/user/515006730085735'},
      {text: 'Github', link: 'https://github.com/xiaobai-Coding'},
    ],
  })
}
```
<a name="aJn1N"></a>
#### 描述
description属性为一个字符串作为博客的描述信息
<a name="JwdcL"></a>
#### logo
展示在左上角的logo为一张图片，建议图片不要太大最好压缩一下再使用
<a name="Y13SF"></a>
#### 静态资源
我们将静态资源放在public目录下，在.vuepress目录下面创建一个public文件夹用来存放静态资源，比如我们要使用logo直接这样`'/images/logo1.png'`它会被复制到最终生成的网站的根目录下。具体的你可以看官方文档 [public](https://v2.vuepress.vuejs.org/zh/guide/assets.html#public-%E6%96%87%E4%BB%B6)
<a name="JcvhF"></a>
#### home页配置
home页也就是读者访问你的博客第一眼看到的内容，在这里你可以对自己的博客做一些简要介绍和声明以让读者快速的了解你的博客。还记得我们最开始的时候在docs目录下创建的README.md文件嘛？这个文件就是配置首页内容的地方
> 注意：语法是这样子的

```markdown
---
home: true
heroImage: /images/logo2.png
heroAlt: 小白Coding日志
heroText: 小白Coding日志
tagline: 低头做事无问西东，种下一棵树的最佳时间是十年前和现在
actions:
  - text: 开始阅读
    link: /study/02.md
    type: primary
footer: 这里是小白Coding日志,会以轻松简单的方式,通过分享编程学习日常,帮助大家一步步掌握编程技能!
---
```
详细配置您可以看[home配置](https://v2.vuepress.vuejs.org/zh/reference/default-theme/frontmatter.html#%E9%A6%96%E9%A1%B5)
<a name="EgIEI"></a>
#### lastUpdatedText最近更新时间戳 标签的文字、contributorsText贡献者列表 标签的文字
```javascript
lastUpdatedText: '上次更新',
contributorsText: '贡献者'
```
> 经过以上步骤你就可以搭建出一个属于自己的博客了


---

<a name="FBJZl"></a>
### 将代码提交到Github并且与Vercel关联实现自动部署
**在Github中新建一个仓库，然后将自己的博客系统代码提交到仓库中，这一步相信大家都会操作我就不重复了吧。在这一步将代码提交到Github的目的就是与Vercel关联，项目在Vercel中部署之后以后更新你的博客内容只需要将代码提交到Github中,然后Vercel就能实现自动部署**

1. 首先需要使用你自己的Github账号来登录Vercel。
2. 点击新建项目来添加Github中的项目，选择对应的项目。
3. 点击导入按钮来导入要部署的项目。
4. 部署的配置一般使用默认的就行，输出的目录要改一下`docs/.vuepress/dist`
5. 点击部署按钮开始部署等一会儿就部署好了，只要你在本地运行`vuepress build docs`命令能够打包成功那么部署也基本上没有问题的
6. 部署成功之后Vercel会给你分配一个默认的域名，通过这个域名就能访问到自己的博客网站
> 你以为到这里就大功告成结束了？其实还差最后一步请接着继续往下看

<a name="igDeq"></a>
### Vercel部署的网站国内无法访问的问题
**博客部署成功之后会发现在外网中是可以正常访问的，但国内是无法访问的可是我们部署的个人博客网站主要面向对象还得是国内的小伙伴们啊，这个问题得解决啊！不然这个事情就等于白忙活一场。**
> 遇到这个问题我的想法是能不花钱就不花钱，我用了两个方案去解决这个问题：

1. 试着使用 [GithubPages](https://pages.github.com/) 的方式去免费部署自己的网站，折腾了两晚上(因为我都是利用下班后的时间在弄这个事情)发现GithubPages部署后达到的效果并不理想不是我想要的，所以这个方案最终被抛弃。
2. 注册一个自己的域名，在Vercel中设置自定义域名去解决这个问题，然后国内就可以正常访问了。我是在阿里云注册了一个域名通过[www.xiaobaicoding.com](https://www.xiaobaicoding.com/)重定向到vercel。
   1. 在阿里云购买注册域名，完成相关实名认证等操作
   2. 进入vercel点击已经部署成功的项目进入详情，
   3. 点击设置后选择域名在输入框中输入你刚刚在阿里云注册的那个域名，
   4. 点击添加按钮后根据vercel的提示再去到阿里云[域名管理控制台](https://dns.console.aliyun.com/#/dns/domainList)对域名进行解析
   5. 在阿里云输入相关配置保存后耐心等待一段时间就好了，这个可能每个人的情况不同，然后在浏览器地址栏中直接输入自己注册的那个域名就能访问自己的博客网站了
> 看来还是得花钱啊，花钱能免去很多麻烦

搭建个人博客网站并实现自动化部署是一个重要的里程碑。通过 VuePress 和 Vercel，我们成功创建了一个功能强大且稳定的博客平台，并解决了国内访问的问题。这个过程可能有挑战，但我们的不懈努力让我们取得了成功。<br />谢谢您的阅读和耐心！希望这篇文章能帮助您搭建自己的个人博客，并且解决在部署过程中可能遇到的问题。祝愿您的博客之旅愉快，不断取得进步与成就！有任何问题欢迎小伙伴们评论区留言。
