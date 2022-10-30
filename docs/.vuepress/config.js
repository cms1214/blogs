import { defineUserConfig } from 'vuepress'
import { defaultTheme } from 'vuepress'

export default defineUserConfig({
  lang: 'zh-CN',
  logo: '/images/logo.png',
  title: 'Cms1214',
  description: '这是cms1214的博客站点',
  head: [['link', { rel: 'icon', href: '/images/logo.png' }]],
  theme: defaultTheme({
    // 默认主题配置
    navbar: [
      {
        text: 'HTML',
        link: '/web/',
      },
      {
        text: 'Unity',
        link: '/unity/',
      },
      {
        text: 'Python',
        link: '/python/',
      },
      {
        text: 'GitHub',
        link: 'https://github.com/cms1214/blogs',
      },
    ],

    sidebar: {
      '/web/': [
        {
          text: '前端设计模式与框架应用',
          children: ['/web/README.md','/web/modalbox/README.md'],
        },
      ],
    },
  }),
})
