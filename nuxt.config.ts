// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  runtimeConfig: {
    openAIKey: process.env.NUXT_OPENAI_KEY,
    assistantKey: process.env.NUXT_ASSISTANT_KEY,
  }
})
