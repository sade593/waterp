export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },


  modules: [
    '@nuxtjs/tailwindcss'
  ],

  components: [{ path: '~/components', pathPrefix: false }],

  plugins: ['~/plugins/global.js'],

  css: [
    '~/assets/css/main.css',
    '@fortawesome/fontawesome-free/css/all.css',
    '~/assets/css/main.css',

  ],
})