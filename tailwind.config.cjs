/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        green: {
          DEFAULT: "#4D946E",
          50: "#BCDCCB",
          100: "#AFD5C1",
          200: "#94C7AC",
          300: "#79B997",
          400: "#5EAB82",
          500: "#4D946E",
          600: "#3A6F53",
          700: "#274A37",
          800: "#13251C",
          900: "#000000",
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
  ],
};
