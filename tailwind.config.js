/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0A0F0D',
          card: '#121A16',
          orange: '#FF6B00',
          green: '#00E676',
          pink: '#FF007F',
          muted: '#A0AAB0'
        }
      },
      boxShadow: {
        card: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      }
    },
  },
  plugins: [],
}
