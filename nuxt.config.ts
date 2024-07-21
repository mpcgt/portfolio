export default defineNuxtConfig({
  extends: 'content-wind',

  routeRules: {
    '/': { prerender: true }
  },
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],
  
  modules: ["@nuxt/image", "@nuxtjs/tailwindcss"],  
})