/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        base: {
          950: '#0b0c10',
        },
      },
      boxShadow: {
        'card': '0 8px 24px rgba(0,0,0,0.35)'
      }
    }
  },
  plugins: [],
};
