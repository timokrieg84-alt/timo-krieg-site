/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte,md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF6A00",
        secondary: "#00C853",
        accent: "#FF2D9A",
      },
    },
  },
  plugins: [],
};
