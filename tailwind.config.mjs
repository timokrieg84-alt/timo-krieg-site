/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,md,mdx,js,jsx,ts,tsx,vue,svelte}",
  ],
  theme: {
    extend: {
      colors: {
        // Map legacy palettes to brand colors
        // Sky & Blue -> Primary (Orange)
        sky: {
          50:  "#fff2e8",
          100: "#ffddcc",
          200: "#ffc7ad",
          300: "#ffae8a",
          400: "#ff955f",
          500: "#FF6A00",
          600: "#E55F00",
          700: "#C24F00",
          800: "#9C4100",
          900: "#7A3600",
          950: "#4D2200",
        },
        blue: {
          50:  "#fff2e8",
          100: "#ffddcc",
          200: "#ffc7ad",
          300: "#ffae8a",
          400: "#ff955f",
          500: "#FF6A00",
          600: "#E55F00",
          700: "#C24F00",
          800: "#9C4100",
          900: "#7A3600",
          950: "#4D2200",
        },
        // Teal -> Secondary (Green)
        teal: {
          50:  "#E7FFF3",
          100: "#C0FFE0",
          200: "#98FFD0",
          300: "#6DF8BC",
          400: "#3AEBA3",
          500: "#00C853",
          600: "#00B14A",
          700: "#009A41",
          800: "#007E35",
          900: "#005F28",
          950: "#003B18",
        },
        // Cyan -> Accent (Pink)
        cyan: {
          50:  "#FFEEF7",
          100: "#FFD4EA",
          200: "#FFB9DE",
          300: "#FF97CD",
          400: "#FF6BB6",
          500: "#FF2D9A",
          600: "#E0258A",
          700: "#BF1F76",
          800: "#99195F",
          900: "#6F1246",
          950: "#470B2E",
        },
      },
    },
  },
  plugins: [],
};