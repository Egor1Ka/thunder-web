// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  modules: ["@nuxt/image", "usebootstrap", "nuxt-icons"],
  css: ["bootstrap/dist/css/bootstrap.min.css", "~/assets/css/main.css"],
  image: {
    domains: ["drive.google.com", "lh3.googleusercontent.com"],
  },
});
