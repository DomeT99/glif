export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Glif",
    },
  },
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@pinia/nuxt", "@nuxtjs/tailwindcss", "@vite-pwa/nuxt"],
  pwa: {
    registerType: "autoUpdate", 
    strategies: "generateSW",
    manifest: {
      name: "Glif",
      short_name: "Glif",
      theme_color: "#4caf50",
      icons: [
        {
          src: "pwa-192x192.png",
          sizes: "120x120",
          type: "image/png",
        },
        {
          src: "pwa-192x192.png",
          sizes: "144x144",
          type: "image/png",
        },
        {
          src: "pwa-192x192.png",
          sizes: "152x152",
          type: "image/png",
        },
        {
          src: "pwa-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "pwa-512x512.png",
          sizes: "384x384",
          type: "image/png",
        },
        {
          src: "pwa-512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
        {
          src: "pwa-512x512.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "maskable",
        },
      ],
    },
  },
});
