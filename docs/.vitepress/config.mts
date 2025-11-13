import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "솔이봇 도움말",
  description: "솔이봇을 통해 효율적으로 서버를 200% 안전하게 보호하세요!",
  lastUpdated: true,
  cleanUrls: true,
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.png',
    search: {
      provider: 'local'
    },

    nav: [
      { text: '도움말', link: '/guide/introduction' },
      { text: '악성유저 규정', link: '/policy/' }
    ],

    sidebar: {
      '/guide/': [
        {
          text: '소개',
          items: [
            { text: '솔이봇이란?', link: '/guide/introduction' },
            { text: '시작하기', link: '/guide/setup' },
          ]
        }
      ],

      '/policy/': [
        {
          text: '소개',
          items: [
            { text: '규정의 정의', link: '/guide/introduction' },
            { text: '시작하기', link: '/guide/setup' },
          ]
        }
      ],
    },

    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg/BeA3HVYtx5' }
    ],

    footer: {
      copyright: 'Copyright © 2025 DARKCIRCLE. All Rights Reserved.'
    }
  }
})