/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      xxl: "1400px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2.25rem",
        md: "3rem",
        lg: "2rem",
        xl: "3.75rem",
        xxl: "5rem",
      },
    },
    extend: {},
  },
  plugins: [],
  safelist: [
    {
      pattern: /__alert-(error)/,
    },
  ],
};
