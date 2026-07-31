/**** Tailwind Config ****/
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#f97316', // orange CTA
          accent: '#22c55e',  // green phone
        }
      }
    }
  },
  plugins: [],
};
