/**** Tailwind Config ****/
/** Dark theme by default via .dark on html */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#f97316',
          accent: '#22c55e',
        }
      },
      boxShadow: {
        card: '0 8px 24px rgba(0,0,0,0.25)'
      }
    }
  },
  plugins: [],
};
