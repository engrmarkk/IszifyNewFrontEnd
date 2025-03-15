/** @type {import('tailwindcss').Config} */
export default {
  content: {
    files: [
      // all directories and extensions will correspond to your Nuxt config
      "srcDir/components/**/*.{vue,js,jsx,mjs,ts,tsx}",
      "srcDir/components/**/*.{vue,js,jsx,mjs,ts,tsx}",
      "srcDir/layouts/**/*.{vue,js,jsx,mjs,ts,tsx}",
      "srcDir/pages/**/*.{vue,js,jsx,mjs,ts,tsx}",
      "srcDir/plugins/**/*.{js,ts,mjs}",
      "srcDir/composables/**/*.{js,ts,mjs}",
      "srcDir/utils/**/*.{js,ts,mjs}",
      "srcDir/{A,a}pp.{vue,js,jsx,mjs,ts,tsx}",
      "srcDir/{E,e}rror.{vue,js,jsx,mjs,ts,tsx}",
      "srcDir/app.config.{js,ts,mjs}",
      "srcDir/app/spa-loading-template.html",
    ],
  },
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primary: {
          shades: "#62fd75",
          DEFAULT: "#019933", //
          tint: "#79d38585",
        },
        secondary: {
          shades: "#eef9e5",
          DEFAULT: "#e6f8d7", //
          tint: "#f9fbfc",
        },

        info: {
          shades: "#0e6ffd",
          DEFAULT: "#170253", //
          tint: "#d5d9ef",
        },

        warning: {
          shades: "#F6E05E",
          DEFAULT: "#D69E2E", //
          tint: "#fdf3e0",
        },

        success: {
          shades: "#6ee7b7",
          DEFAULT: "#10b981 ", //
          tint: "#ecfdf5",
        },
        teal: {
          shades: "#2dd4bf",
          DEFAULT: "#0d9488 ", //
          tint: "#ccfbf1",
        },
        error: {
          shades: "#F56565",
          DEFAULT: "#E53E3E", //
          tint: "#fdeaef",
        },

        accent: {
          shades: "#dbe0eb",
          DEFAULT: "#728297", //
          tint: "#f4f6fa",
        },

        white: {
          shades: "#FAFAFA",
          DEFAULT: "#FFFFFF", //
          tint: "#f6f7fb",
        },
        black: {
          shades: "#333333",
          DEFAULT: "#000000", //
          tint: "#000000b2",
        },
      },
    },
  },
};
