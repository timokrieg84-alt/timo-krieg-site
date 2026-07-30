module.exports = {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx,md,mdx}'],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: { sm:'640px', md:'768px', lg:'1024px', xl:'1280px', '2xl':'1440px' },
    },
    extend: {
      colors: {
        brand: {
          bg: '#0b1220',
          surface: '#0f172a',
          navy: { 300:'#335c96', 500:'#214371', 700:'#152a49', 900:'#0b162b' },
          indigo: { 300:'#818cf8', 400:'#6366f1', 500:'#4f46e5' },
          accent: '#6366f1',
          muted: '#94a3b8'
        }
      },
      fontFamily: {
        sans: ['InterVariable','Inter','system-ui','Segoe UI','Roboto','Helvetica Neue','Arial','Noto Sans','Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol'],
        mono: ['ui-monospace','SFMono-Regular','Menlo','Monaco','Consolas','Liberation Mono','Courier New','monospace']
      },
      boxShadow: {
        card: '0 1px 0 0 rgba(255,255,255,0.04) inset, 0 12px 32px rgba(0,0,0,0.45)'
      },
      borderRadius: {
        xl: '1.25rem'
      },
      keyframes: {
        shimmer: { '0%': { backgroundPosition: '0% 50%' }, '100%': { backgroundPosition: '100% 50%' } }
      },
      animation: {
        shimmer: 'shimmer 24s ease-in-out infinite'
      }
    }
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography'), require('@tailwindcss/line-clamp')]
};
