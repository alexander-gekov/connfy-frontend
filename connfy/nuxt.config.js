export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'connfy',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/formulate.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~plugins/v-calendar', ssr: false },
    { src: '~plugins/vue-formulate', ssr: false },
    { src: '~plugins/vue-tour', ssr: false },
    { src: '~plugins/vue-geolocation', ssr: false },
    { src: '~plugins/vue-tooltip', ssr: false },
    { src: '~plugins/vue-draggable', ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/dotenv',
    '@nuxtjs/fontawesome',
  ],

  fontawesome: {
    icons: {
      solid: true,
      brands: true,
      regular: true,
    },
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/onesignal',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    'nuxt-leaflet',
    'vue-geolocation-api/nuxt',
  ],

  geolocation: {
    watch: true,
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  server: {
    port: 8080, // default: 3000
    host: '0.0.0.0', // default: localhost
  },

  env: {
    weatherApi: process.env.WEATHER_API_KEY,
  },

  oneSignal: {
    init: {
      appId: 'YOUR_APP_ID',
      allowLocalhostAsSecureOrigin: true,
      welcomeNotification: {
        disable: true,
      },
    },
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      name: 'Connfy',
      short_name: 'Connfy',
      lang: 'en',
      display: 'standalone',
    },
    workbox: {},
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
