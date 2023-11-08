import { defaultTheme } from '@vuepress/theme-default'

export default {
  theme: defaultTheme({
    // 在这里进行配置
    base: '/xiaobaicoding-blogs/',
    title: '小白Coding日志',
    description: '这里是小白Coding日志,会以轻松简单的方式,通过分享编程学习日常,帮助大家一步步掌握编程技能!',
    logo: 'https://vuejs.org/images/logo.png',
    navbar: [
      {text: '掘金', link: 'https://juejin.cn/user/515006730085735'},
      {text: 'Github', link: 'https://github.com/it1998-web'},
    ],
    sidebar: [
      {
        text: '学习',
        link: '/introduce/',
        children: [
         {
          text: '01.md',
          link: '/introduce/01.md',
         }
         
        ]
      },
    ]
  }),
}