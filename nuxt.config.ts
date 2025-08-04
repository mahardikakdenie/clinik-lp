// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  ssr: true,
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  devServer: {
    port: 3001, // 👈 Atur port di sini
  },
  vite: {
    // plugins: [tailwindcss()], // opsional, biasanya tidak perlu manual
  },
})
