/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable-next-line no-undef
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    fontSize: {
      "3xs": ".65rem",
      xxs: ".70rem",
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
    },
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: {
        100: "#ffffff",
        200: "#E0E0E0",
        300: "#CECECE",
        400: "#E6E6E6",
      },
      gray: {
        100: "#424242",
        200: "#C7C7C7",
        300: "#9B9B9B",
      },
      black: {
        100: "#000000",
      },
      blue: {
        100: "#2C6DC1",
        200: "#116CC7",
      },
      red: {
        100: "#E25141",
      },
      purple: "#3f3cbb",
      midnight: "#121063",
      metal: "#565584",
      tahiti: "#3ab7bf",
      silver: "#ecebff",
      bermuda: "#78dcca",
    },
    extend: {
      spacing: {
        128: "28.5rem",
        120: "24rem",
        84: "22rem",
      },
      margin: {
        "20px": "50px",
      },
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require("tailwind-scrollbar"),
    require("@tailwindcss/line-clamp"),
    // require("flowbite/plugin"),
  ],
};
