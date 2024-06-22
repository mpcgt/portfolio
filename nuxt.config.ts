export default defineNuxtConfig({
  extends: 'content-wind',

  routeRules: {
    '/': { prerender: true }
  },

  modules: ["@nuxt/image", "@nuxtjs/tailwindcss"]
})