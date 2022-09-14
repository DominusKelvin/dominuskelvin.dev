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
        purple: {
          DEFAULT: '#302B3D',
          '50': '#877DA3',
          '100': '#7C719B',
          '200': '#685E85',
          '300': '#564D6D',
          '400': '#433C55',
          '500': '#302B3D',
          '600': '#16141C',
          '700': '#000000',
          '800': '#000000',
          '900': '#000000'
        },
        pink: {
          DEFAULT: '#E4737A',
          '50': '#FFFFFF',
          '100': '#FEFCFC',
          '200': '#F8DADB',
          '300': '#F1B7BB',
          '400': '#EB959A',
          '500': '#E4737A',
          '600': '#DB444D',
          '700': '#C1252F',
          '800': '#921C24',
          '900': '#631318'
        },
        brown: {
          DEFAULT: '#BA9D9D',
          '50': '#FFFFFF',
          '100': '#FDFDFD',
          '200': '#EDE5E5',
          '300': '#DCCDCD',
          '400': '#CBB5B5',
          '500': '#BA9D9D',
          '600': '#A37C7C',
          '700': '#875F5F',
          '800': '#674848',
          '900': '#463131'
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
  ],
};
