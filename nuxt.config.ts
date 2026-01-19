// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4
  },

  modules: ['@nuxt/ui', '@nuxt/image'],
  
  devtools: { enabled: true },
  
  compatibilityDate: '2024-11-01',

  image: {
    quality: 80,
    format: ['webp']
  },

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Emerald Ease',
      meta: [
        { name: 'description', content: 'Andrea Craft, Licensed Massage Practitioner in Dublin, GA, specializes in relaxing and therapeutic massage modalities including Swedish, maternity, Myofascial Release, sports/orthopedic, hot stone, chair massage, and bodywork. Book your appointment today!' },
        { name: 'robots', content: 'index, follow' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' }
      ]
    }
  }
})
