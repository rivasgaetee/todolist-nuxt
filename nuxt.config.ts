// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
  ],
  runtimeConfig: {
    public: {
      auth0Domain: process.env.AUTH0_DOMAIN,
      auth0ClientId: process.env.AUTH0_CLIENT_ID,
      auth0CallbackUrl: process.env.AUTH0_CALLBACK_URL
    }
  },
  plugins: [
    '~/plugins/auth0.client.ts'
  ],
  typescript: {
    strict: true
  }
})
