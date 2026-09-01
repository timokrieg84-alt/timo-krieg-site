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
    // Base backgrounds
    'bg-[#123D2A]','bg-[#C8501E]','bg-[#E58AA0]','bg-[#F5F1E9]','bg-[#1A1A1A]','bg-[#6B7280]','bg-[#C8A24B]',
    // Backgrounds with opacity
    'bg-[#E58AA0]/10','bg-[#F5F1E9]/60','bg-[#C8A24B]/10',
    // Text colors (base and with opacity)
    'text-[#123D2A]','text-[#C8501E]','text-[#E58AA0]','text-[#F5F1E9]','text-[#1A1A1A]','text-[#6B7280]','text-[#C8A24B]',
    'text-[#1A1A1A]/80','text-[#1A1A1A]/70','text-[#1A1A1A]/60','text-[#1A1A1A]/40',
    // Borders (base + opacity)
    'border-[#123D2A]','border-[#C8501E]','border-[#E58AA0]','border-[#F5F1E9]','border-[#1A1A1A]','border-[#6B7280]','border-[#C8A24B]',
    'border-[#6B7280]/20','border-[#6B7280]/30','border-[#123D2A]/30',
    // Rings (base + opacity)
    'ring-[#123D2A]','ring-[#C8501E]','ring-[#E58AA0]','ring-[#F5F1E9]','ring-[#1A1A1A]','ring-[#6B7280]','ring-[#C8A24B]',
    'ring-[#C8A24B]/10','ring-[#C8A24B]/30','ring-[#C8A24B]/40','ring-[#C8A24B]/0',
    // Variant: supports backdrop-filter background used in header
    'supports-[backdrop-filter]:bg-[#F5F1E9]/60',
  ],
  plugins: [],
};
