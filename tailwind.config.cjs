/**** Minimal Tailwind config (no custom tokens) ****/
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,md,mdx,js,jsx,ts,tsx}',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      container: { center: true, padding: '1rem' },
    },
  },
  plugins: [],
};
