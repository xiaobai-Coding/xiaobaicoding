import { defaultTheme } from '@vuepress/theme-default'
// 部署执行命令，切换到git命令行工具：./deploy.sh
module.exports = {
  // locales站点配置,所有在 Locale 配置 章节内的配置项都可以在 locales 中使用。
  title: '小白Coding日志',
  lang: 'zh-CN',
  description: '这里是小白Coding日志,会以轻松简单的方式,通过分享编程学习日常,帮助大家一步步掌握编程技能!',
  head: [['link', { rel: 'icon', href: '/images/logo1.png' }]],
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
            collapsible: true,
            children: [
              {
                text: '01.md',
                link: '/study/01.md',
                key: 'JavaScript'
               },
            ]
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
          /* React */
          {
            text: 'React',
            collapsible: true,
            children: [
              {
                text: 'React基础知识入门',
                link: '/study/react/React基础知识入门.md',
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
            },
         {
          text: '02.md',
          link: '/study/02.md',
         },
         {
          text: '03.md',
          link: '/study/03.md',
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
        children: []
      },
      {
        text: '生活',
        collapsible: true,
        children: []
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
        ]
      }
    ],
    lastUpdatedText: '上次更新',
    contributorsText: '贡献者'
  }),
}