// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  components: [
    { path: '~/components', extensions: ['vue'] }
  ],
  alias: {
    "~styles": "/styles",
    "~images": "/images",
  },
  css: [
    '@/assets/styles/main.sass'
  ],
})

