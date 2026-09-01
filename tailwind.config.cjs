/** Tailwind Theme for Trattoria Bella Vista */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte,md,mdx}'
  ],
  theme: {
    container: {
      center: true,
      padding: '24px',
      screens: {
        sm: '480px',
        md: '768px',
        lg: '1024px',
        xl: '1200px'
      }
    },
    screens: {
      xs: '0px',
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1280px'
    },
    extend: {
      colors: {
        brand: '#9E2A2B',
        brandSecondary: '#D27D60',
        accent: '#C8A96A',
        bg: '#FAF4E8',
        surface: '#FFFFFF',
        text: '#2B1E1A',
        textSecondary: '#5C4B43',
        divider: '#E7DDD3',
        success: '#2E7D32',
        warning: '#B26A00',
        error: '#C62828',
        link: '#9E2A2B',
        linkHover: '#7F1F20'
      },
      fontFamily: {
        heading: [
          'Playfair Display',
          'Georgia',
          "Times New Roman",
          'serif'
        ],
        body: [
          'Source Sans 3',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'Ubuntu',
          'Cantarell',
          'Helvetica Neue',
          'Arial',
          'sans-serif'
        ],
        accent: ['Great Vibes', 'cursive']
      },
      borderRadius: {
        sm: '6px',
        md: '10px',
        lg: '16px',
        xl: '24px'
      },
      boxShadow: {
        brandSm: '0 2px 8px rgba(0,0,0,0.06)',
        brandMd: '0 6px 18px rgba(0,0,0,0.10)',
        brandLg: '0 12px 28px rgba(0,0,0,0.14)'
      }
    }
  },
  plugins: []
};
