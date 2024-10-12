import { defaultTheme } from '@vuepress/theme-default'
// 部署执行命令，切换到git命令行工具：./deploy.sh
module.exports = {
  // locales站点配置,所有在 Locale 配置 章节内的配置项都可以在 locales 中使用。
  title: '小白Coding日志',
  lang: 'zh-CN',
  description: '这里是小白Coding日志,会以轻松简单的方式,通过分享编程学习日常,帮助大家一步步掌握编程技能!',
  head: [
    ['link', { rel: 'icon', href: '/images/logo1.png' }], 
    ["meta", { name:"referrer", content:"no-referrer"}]
  ],
  theme: defaultTheme({
    // 在这里进行配置    
    logo: '/images/logo1.png',
    // 导航栏
    navbar: [
      {text: '掘金', link: 'https://juejin.cn/user/515006730085735'},
      {text: 'Github', link: 'https://github.com/xiaobai-Coding'},
    ],
    // 侧边栏
    sidebar: [
      {
        text: '学习',
        collapsible: true,
        children: [
          /* JavaScript */
          {
            text: 'JavaScript',
            collapsible: false,
            children: [
              {
                text: '你不知道的JavaScript',
                collapsible: true,
                children: [
                  {
                    text: '对象',
                    link: '/study/javascript/object.md',
                    key: 'JavaScriptobject'
                  },
                  {
                    text: '对象操作方法',
                    link: '/study/javascript/objectOperMehods.md',
                    key: 'objectOperMehods'
                  },
                  {
                    text: '探索JavaScript数组的奥秘：从入门到精通',
                    link: '/study/javascript/arrayToMethods.md',
                    key: 'arrayToMethods'
                  },
                  {
                    text: '深入理解JavaScript作用域',
                    link: '/study/javascript/scoped.md',
                    key: 'scoped'
                  },
                  {
                    text: '作用域与闭包深入解析与实践指南',
                    link: '/study/javascript/closure.md',
                    key: 'closure'
                  },
                  {
                    text: '深入理解 JavaScript 中的 this 关键字',
                    link: '/study/javascript/javascript-this.md',
                    key: 'javascript-this'
                  },
                  {
                    text: '深入理解JavaScript类型和语法',
                    link: '/study/javascript/type&syntax.md',
                    key: 'javascript-this'
                  },
                  {
                    text: '探索JavaScript对象与原型',
                    link: '/study/javascript/object&prototype.md',
                    key: 'object&prototype'
                  },
                  {
                    text: '强制类型转换',
                    link: '/study/javascript/typeConversion.md',
                    key: 'typeConversion'
                  },
                ]
              },
              {
                text: 'ES6',
                collapsible: true,
                children: [
                  {
                    text: '详解let 与 const 用法',
                    link: '/study/javascript/es6/let&const.md',
                    key: 'let&const'
                  },
                  {
                    text: '变量的解构赋值',
                    link: '/study/javascript/es6/deconstructiveAssignment.md',
                    key: 'deconstructiveAssignment'
                  },
                  {
                    text: '深入浅出ES6 Class：从基础到进阶',
                    link: '/study/javascript/es6/es6-class.md',
                    key: 'deconstructiveAssignment'
                  },
                ]
              }
            ] 
          },
          /* Vue */
          {
            text: 'Vue',
            collapsible: true,
            children: [
              {
                text: '使用Vue纯前端实现发送短信验证码并实现倒计时',
                link: '/study/vue/sendMessage.md',
                key: 'sendMessage'
              },
              {
                text: '在Vue中将DOM导出为图片',
                link: '/study/vue/domExportImg.md',
                key: 'domExportImg'
              },
              {
                text: 'Vue纯前端实现链接生成二维码并支持下载',
                link: '/study/vue/linkToQRCode.md',
                key: 'linkToQRCode'
              },
              {
                text: 'Vue 组件通信：探索 provide/inject 替代 Vuex 的妙用',
                link: '/study/vue/provide-inject.md',
                key: 'provide-inject'
              },
              {
                text: "Vue3中的 emit('update:modelValue')：更灵活的双向绑定",
                link: '/study/vue/Vue3update_modelValue.md',
                key: 'Vue3update_modelValuet'
              },
              {
                text: "如何在 Vue 3 中使用 vue3-print-nb 实现灵活的前端打印",
                link: '/study/vue/vue3-print-nb.md',
                key: 'vue3-print-nb'
              },
            ]
          },
          /* CSS */
          {
            text: 'CSS',
            collapsible: true,
            children: [
              {
                text: 'CSS布局——Flexbox基础使用',
                link: '/study/css/flex/flex-basis.md',
                key: 'flex-basis'
              },
              {
              text: 'CSS布局——Flexbox布局中的对齐方式',
              link: '/study/css/flex/flex-align.md',
              key: 'flex-align'
              },
              {
                text: 'CSS 元素尺寸单位——像素、百分比、em、rem 和 viewport 单位',
                link: '/study/css/flex/element-size.md',
                key: 'element-size'
                },
            ]
          },
          /* React */
          {
            text: 'React',
            collapsible: true,
            children: [
              {
                text: 'React基础知识入门',
                link: '/study/react/foundation.md',
                key: 'React001'
               },
               {
                text: '打造超酷的React迷你日历组件，只需几步！',
                link: '/study/react/calendar-mini.md',
                key: 'React001'
               },
            ]
          },
           /* NestJs */
           {
            text: 'NestJs',
            collapsible: true,
            children: []
          },
            /* ThreeJs */
            {
              text: 'ThreeJs',
              collapsible: true,
              children: []
            }
        ]
      },
      {
        text: '源码',
        collapsible: true,
        children: []
      },
      {
        text: '前端技能',
        collapsible: true,
        children: []
      },
      {
        text: '工具',
        collapsible: true,
        children: [
          {
            text: 'Git拉取/推送代码报错连接超时：Failed to connect to github.com port 443: Timed out解决方法',
            link: '/devtool/gitErrorTimeout443.md',
            key: 'gitErrorTimeout443'
          },
          {
          text: '更新npm镜像源：淘宝镜像已过期，及时切换',
          link: '/devtool/npmRegistry.md',
          key: 'npmRegistry'
          }
        ]
      },
      {
        text: '生活',
        collapsible: true,
        children: [
          {
            text: '陕西油泼面',
            link: '/life/youpomian.md',
            key: 'youpomian'
          },
           {
            text: '婚礼时光记忆',
            link: '/life/weddingMemories.md',
            key: 'weddingMemories'
           }
        ]
      },
      {
        text: '博客',
        collapsible: true,
        children: [
          {
            text: 'VuePress和Vercel打造个人博客',
            link: '/blogs/create-blog.md',
            key: 'create-blog'
           },
           {
            text: 'VuePress渲染网络图片',
            link: '/blogs/VuePressToMarkdownImg.md',
            key: 'VuePressToMarkdownImg'
           }
        ]
      },
      {
        text: '年度总结',
        collapsible: true,
        children: [
          {
            text: '2023年度总结',
            link: '/summarize/2023-summary.md',
            key: '2023-summary'
          }
        ]
      }
    ],
    lastUpdatedText: '上次更新',
    contributorsText: '贡献者'
  }),
}