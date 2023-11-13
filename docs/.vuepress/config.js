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
    navbar: [
      {text: '掘金', link: 'https://juejin.cn/user/515006730085735'},
      {text: 'Github', link: 'https://github.com/xiaobai-Coding'},
    ],
    sidebar: [
      {
        text: '学习',
        children: [
         {
          text: '01.md',
          link: '/study/01.md',
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
        text: '生活',
        children: [
         {
          text: '01.md',
          link: '/life/01.md',
         },
         {
          text: '02.md',
          link: '/life/02.md',
         },
         {
          text: '03.md',
          link: '/life/03.md',
         }
         
        ]
      },
    ]
  }),
}