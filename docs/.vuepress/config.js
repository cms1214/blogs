import { defineUserConfig } from 'vuepress'
import { defaultTheme } from 'vuepress'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'cms1214的博客',
  description: '这是我的一个博客站点',
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
  }),
})
