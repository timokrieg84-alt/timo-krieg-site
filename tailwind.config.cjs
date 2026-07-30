module.exports = {
  content: ['./src/**/*.{astro,html,js,ts,md,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#22c55e',
          50:'#f0fdf4',100:'#dcfce7',200:'#bbf7d0',300:'#86efac',400:'#4ade80',
          500:'#22c55e',600:'#16a34a',700:'#15803d',800:'#166534',900:'#14532d'
        }
      },
      boxShadow: {
        card: '0 1px 2px rgba(2,6,23,0.06), 0 8px 24px rgba(2,6,23,0.08)',
        cardHover: '0 2px 6px rgba(2,6,23,0.08), 0 16px 40px rgba(2,6,23,0.10)'
      },
      transitionTimingFunction: {
        brand: 'cubic-bezier(.22,.61,.36,1)'
      }
    }
  },
  plugins: [],
};