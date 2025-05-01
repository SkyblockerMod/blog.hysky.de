/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,mjs}"],
  darkMode: "class", // allows toggling dark mode manually
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif", ...defaultTheme.fontFamily.sans],
      },
      screens: {
        'landscape-touch': {
          'raw': '(orientation: landscape) and (pointer: coarse)'
        },
        'sm-landscape-touch': {
          raw: '(min-width: 640px) and (max-width: 767px) and (orientation: landscape) and (pointer: coarse)',
        },
        'md-landscape-touch': {
          raw: '(min-width: 768px) and (max-width: 1023px) and (orientation: landscape) and (pointer: coarse)',
        },
        'lg-landscape-touch': {
          raw: '(min-width: 1024px) and (orientation: landscape) and (pointer: coarse)',
        },
        ...defaultTheme.screens,
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
