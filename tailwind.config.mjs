/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'media',
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#FF6A00", // Orange – CTA / Primary
          secondary: "#00C853", // Grün – Sekundär / Badges
          accent: "#FF2D9A", // Pink – Links / Highlights
        },
        surface: {
          DEFAULT: "#0B0E11",
          raised: "#12161B",
        },
        textc: {
          base: "#E6EAF0",
          muted: "#A7B0BE"
        }
      },
      boxShadow: {
        focus: "0 0 0 3px rgba(255,45,154,0.4)"
      },
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui', 'Inter', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol']
      }
    }
  },
  plugins: [],
};
