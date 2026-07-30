/**** Tailwind Config ****/
/** JIT class scan across src + astro components **/
module.exports = {
  content: [
    './src/**/*.{astro,html,js,ts,vue,svelte,mdx,md}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-bg': '#0b1220',
        'brand-surface': '#0f172a',
        'brand-muted': '#94a3b8',
        'brand-accent': '#22d3ee',
        'brand-indigo-500': '#6366f1',
        'brand-indigo-400': '#818cf8',
        'brand-navy-900': '#0b1220',
      },
      boxShadow: {
        card: '0 10px 30px -12px rgba(2,6,23,0.5)',
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '640px', md: '768px', lg: '1024px', xl: '1200px',
        }
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
