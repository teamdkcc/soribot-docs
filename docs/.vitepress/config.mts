import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "솔이봇 도움말",
  description: "솔이봇을 통해 효율적으로 서버를 200% 안전하게 보호하세요!",
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.png',
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: '소개',
        items: [
          { text: '솔이봇이란?', link: '/markdown-examples' },
          { text: '시작하기', link: '/getting-started' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg/BeA3HVYtx5' }
    ],

    footer: {
      copyright: 'Copyright © 2025 DARKCIRCLE. All Rights Reserved.'
    }
  }
})