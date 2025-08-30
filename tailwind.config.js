/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app.vue",
    "./components/**/*.{vue,js,ts}",
    "./pages/**/*.{vue,js,ts}",
    "./layouts/**/*.{vue,js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4caf50",
        secondary: "#4cbf65",
        accent: "#F5F5F5",
        background: "#FFFF",
        surface: "#000",
      },
      fontFamily: {
        sans: ["Inter", "Roboto", "Arial", "sans-serif"],
        heading: ["Montserrat", "Inter", "sans-serif"],
      },
      fontSize: {
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
      },
      borderRadius: {
        DEFAULT: "0.5rem",
        md: "0.75rem",
      },
      boxShadow: {
        minimal: "0 2px 8px 0 rgba(45, 49, 66, 0.05)",
      },
    },
  },
  plugins: [],
};
