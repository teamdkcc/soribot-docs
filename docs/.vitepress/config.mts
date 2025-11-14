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
          text: '시작하기 전',
          items: [
            { text: '블랙리스트의 운영목적', link: '/policy/purpose' },
          ],
        },
        {
          text: '블랙리스트 운영절차',
          items: [
            { text: '악성유저 신고 절차', link: '/policy/report-procedure' },
            { text: '이의제기 절차', link: '/policy/appeal-procedure' }
          ]
        },
        {
          text: '악성유저의 기준',
          items: [
            { text: '악성유저를 정의하는 기준', link: '/policy/standard' },
            { text: '악성유저로 판단되지 않는 경우', link: '/policy/non-malicious' },
          ]
        },
          {
            items: [
              {
              text: 'S. 단체의 특별지정 기준',
              items: [
                { text: 'S-1. 이성관계 문제', link: '/policy/S-1' },
                { text: 'S-2. 서버 분탕', link: '/policy/S-2' },
                { text: 'S-3. 뒷메', link: '/policy/S-3' },
                { text: 'S-4. 무단 홍보', link: '/policy/S-4' },
                { text: 'S-5. 서버 테러', link: '/policy/S-5' },
                { text: 'S-6. 단체 괴롭힘', link: '/policy/S-6' },
              ]
            },
            {
              text: 'D. 디스코드 지침에 따른 기준',
              items: [
                { text: 'D-1-1. 따돌림 및 괴롭힘', link: '/policy/D-1-1' },
                { text: 'D-1-2. 위협', link: '/policy/D-1-2' },
                { text: 'D-2-1. 신상 털기', link: '/policy/D-2-1' },
                { text: 'D-3-1. 비정상 미디어', link: '/policy/D-3-1' },
                { text: 'D-3-2. 폭력 미화 및 선동', link: '/policy/D-3-2' },
                { text: 'D-4-1. 아동 성적 대상화', link: '/policy/D-4-1' },
                { text: 'D-4-2. 청소년과의 성적 행위', link: '/policy/D-4-2' },
                { text: 'D-5-1. 자살 및 자해 위험', link: '/policy/D-5-1' },
                { text: 'D-5-2. 자해 장려 및 조장', link: '/policy/D-5-2' },
                { text: 'D-6-1. 허위 신원 사용', link: '/policy/D-6-1' },
                { text: 'D-6-2. 허위 정보 유포', link: '/policy/D-6-1' },
                { text: 'D-7-1. 금융 사기', link: '/policy/D-7-1' },
                { text: 'D-7-2. 악의적인 행위', link: '/policy/D-7-2' },
                { text: 'D-8-1. 저작권 침해', link: '/policy/D-8-1' },
              ]
            }
          ] 
        }
      ],

      '/terms/': [
        {
          items: [
            { text: '솔이봇 이용약관', link: '/terms/user-protocol' },
            { text: '솔이봇 개인정보처리방침', link: '/terms/privacy' },
            { text: '간편신고 이용약관', link: '/terms/report-user-protocol' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg/BeA3HVYtx5' }
    ],

    footer: {
      copyright: 'Copyright © 2025 DARKCIRCLE. All Rights Reserved.'
    },

    notFound: {
      title: '길을 잘못 들었나요?',
      quote: '요청하신 페이지가 존재하지 않습니다.',
      linkText: '홈으로 돌아가기'
    }
  }
})