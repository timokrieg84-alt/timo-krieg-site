/**** Tailwind Config ****/
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,md,mdx,svelte,vue,js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      container: { center: true, padding: '1rem' },
      colors: {
        'brand-bg': '#0b1220',
        'brand-surface': '#0f172a',
        'brand-muted': '#94a3b8',
        'brand-navy-900': '#0b1220',
        'brand-indigo-300': '#a5b4fc',
        'brand-indigo-400': '#818cf8',
        'brand-indigo-500': '#6366f1',
        'brand-accent': '#22d3ee'
      },
      boxShadow: {
        card: '0 10px 30px -10px rgba(2,8,23,0.5)'
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
