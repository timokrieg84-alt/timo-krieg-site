/**** Tailwind Config ****/
/** Keep content paths strict so purge works correctly **/
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}',
  ],
  theme: {
    extend: {
      container: { center: true, padding: '1rem' },
    },
  },
  plugins: [],
};
