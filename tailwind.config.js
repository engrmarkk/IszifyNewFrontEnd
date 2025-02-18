/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      // fontSize: {
      //   sm: "0.8rem",
      //   base: "1rem",
      //   xl: "1.25rem",
      //   "2xl": "1.25rem",
      //   "3xl": "1.953rem",
      //   "4xl": "1.953rem",
      //   "5xl": "2.441rem",
      // },
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
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "light", // Enable light theme
    ],
    darkTheme: false, // Disable dark mode
  },
};
