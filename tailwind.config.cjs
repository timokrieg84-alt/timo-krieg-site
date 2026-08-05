/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#F2B705',
          primaryDark: '#C28E04',
          secondary: '#6B8E23',
          accent: '#E07A5F',
          text: '#3B3B3B',
          mutedText: '#666666',
          background: '#FFF9EC',
          surface: '#FFFFFF',
          border: '#E9E2D0',
        }
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.25rem',
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ]
}
