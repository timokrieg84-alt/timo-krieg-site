module.exports = {
  content: ["./src/**/*.{astro,html,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bg: {
          1: "rgb(var(--bg-1) / <alpha-value>)",
          2: "rgb(var(--bg-2) / <alpha-value>)",
        },
        txt: {
          1: "rgb(var(--txt-1) / <alpha-value>)",
          2: "rgb(var(--txt-2) / <alpha-value>)",
        },
        brand: {
          cyan: "rgb(var(--brand-cyan) / <alpha-value>)",
          cyan600: "rgb(var(--brand-cyan-600) / <alpha-value>)",
          cyan700: "rgb(var(--brand-cyan-700) / <alpha-value>)",
          iris: "rgb(var(--brand-iris) / <alpha-value>)",
        },
        border: "rgb(var(--border) / <alpha-value>)",
        success: "rgb(var(--success) / <alpha-value>)",
        warning: "rgb(var(--warning) / <alpha-value>)",
        error: "rgb(var(--error) / <alpha-value>)",
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
      },
      boxShadow: {
        brand1: "var(--shadow-1)",
        brand2: "var(--shadow-2)",
      },
      fontFamily: {
        heading: ["Inter", "system-ui", "-apple-system", "Segoe UI", "Roboto", "Helvetica Neue", "Arial"],
        sans: ["Inter", "system-ui", "-apple-system", "Segoe UI", "Roboto", "Helvetica Neue", "Arial"],
      },
      maxWidth: {
        container: "var(--container)",
      },
      spacing: {
        3.5: "14px",
      },
    },
  },
  plugins: [],
};
