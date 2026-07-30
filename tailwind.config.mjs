import colors from 'tailwindcss/colors'

// Brand scales
const brandOrange = {
  50:  '#FFF4EC',
  100: '#FFE7D6',
  200: '#FFCFAD',
  300: '#FFB784',
  400: '#FF9F5B',
  500: '#FF6A00',
  600: '#E55F00',
  700: '#B84C00',
  800: '#8A3900',
  900: '#5C2600',
  950: '#321606',
}

const brandGreen = {
  50:  '#E9FFF3',
  100: '#D2FFE7',
  200: '#A6FCD0',
  300: '#7AF7B9',
  400: '#4EEFA2',
  500: '#00C853',
  600: '#00B34B',
  700: '#008F3B',
  800: '#006B2B',
  900: '#00471C',
  950: '#032913',
}

const brandPink = {
  50:  '#FFE6F2',
  100: '#FFCFE7',
  200: '#FFA0CF',
  300: '#FF71B8',
  400: '#FF43A0',
  500: '#FF2D9A',
  600: '#E6288B',
  700: '#B71F6F',
  800: '#881853',
  900: '#5A1037',
  950: '#340A20',
}

export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      // Override selected Tailwind color tokens used in components
      colors: {
        // Map old primary usages to Orange
        blue: brandOrange,
        sky: brandOrange,
        // Map secondary usages to Green
        teal: brandGreen,
        // Map link/highlight usages to Pink
        cyan: brandPink,

        // Optional brand shortcuts
        brand: {
          primary: '#FF6A00',
          secondary: '#00C853',
          accent: '#FF2D9A',
        },
      },
    },
  },
  plugins: [],
}
