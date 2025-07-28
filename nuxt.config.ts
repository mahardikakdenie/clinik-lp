// https://nuxt.com/docs/api/configuration/nuxt-config
// import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  ssr: true,
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      // tailwindcss(),
    ],
  },
})
