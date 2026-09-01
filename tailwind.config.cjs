/**** Tailwind Config with strict safelist for brand arbitrary hex classes ****/
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,ts,jsx,tsx,md,mdx}',
  ],
  theme: {
    extend: {},
  },
  safelist: [
    // Backgrounds
    'bg-[#123D2A]','bg-[#C8501E]','bg-[#E58AA0]','bg-[#F5F1E9]','bg-[#1A1A1A]','bg-[#6B7280]','bg-[#C8A24B]',
    // Text colors
    'text-[#123D2A]','text-[#C8501E]','text-[#E58AA0]','text-[#F5F1E9]','text-[#1A1A1A]','text-[#6B7280]','text-[#C8A24B]',
    // Borders
    'border-[#123D2A]','border-[#C8501E]','border-[#E58AA0]','border-[#F5F1E9]','border-[#1A1A1A]','border-[#6B7280]','border-[#C8A24B]',
    // Rings
    'ring-[#123D2A]','ring-[#C8501E]','ring-[#E58AA0]','ring-[#F5F1E9]','ring-[#1A1A1A]','ring-[#6B7280]','ring-[#C8A24B]',
  ],
  plugins: [require('@tailwindcss/typography')],
};
