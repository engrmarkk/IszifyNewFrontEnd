// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  target: "static", // Important for static site generation

  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt"],
  css: ["~/assets/css/tailwind.css"],
  nitro: {
    preset: "static", // Tells Nuxt to generate a static output
  },
  postcss: {
    plugins: {
      "postcss-import": {},
      "postcss-nested": {}, // Enables nested rules like Sass
      "postcss-preset-env": { stage: 1 }, // Enables modern CSS features
      autoprefixer: {},
    },
  },
  router: {
    middleware: ["auth.route"],
  },
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => tag.startsWith("ion-"), // Ignore Ionicons
      warnWhenNoHydrationMatch: false,
    },
  },
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.NUXT_API_BASE_URL, // Public variable
      apiBase: process.env.NUXT_PUBLIC_API_BASE || "https://api.example.com",
    },
  },
  app: {
    baseURL: "/", // Make sure this is correct

    layoutTransition: false, // Disable layout transition loader
    pageTransition: false, // Disable page transition loader
    head: {
      link: [],
      title: "Iszify | Create QR Codes, Short URL & Bio Link Pages",
      meta: [
        {
          name: "title",
          content: "Iszify | Create QR Codes, Short URL & Bio Link Pages",
        },
        {
          name: "description",
          content:
            "Iszify, the World's most Secured QR Codes maker, URL & Link shortener, Bio Link Pages Platform with Advanced analytics for free. Use Iszify to create, customise and track the traffic of your QR codes, Short Links and Bio Link Pages.",
        },
        {
          name: "keywords",
          content:
            "URL shortener, free qr code, create qr code, design qr code, custom qr code, qr code customization, link shortener, branded links, short links, QR codes, link analytics, short URL, custom URL shortener, link management, link in bio, bio links, surveys, short link, tiny link, tinyurl, shorturl, bitly, shortenworld, branded short link, custom short link, URL tracking, URL shortening, link branding, short URL service, link customization",
        },
      ],
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/ionicons@5.5.2/dist/ionicons/ionicons.esm.js",
          type: "module",
        },
        {
          src: "https://cdn.jsdelivr.net/npm/ionicons@5.5.2/dist/ionicons/ionicons.js",
          nomodule: true,
        },
      ],
    },
  },
});
