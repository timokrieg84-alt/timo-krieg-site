/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      colors: {},
      borderRadius: {
        '2xl': '1rem',
      },
    },
  },
  plugins: [],
}
