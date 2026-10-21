/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./politique-de-confidentialite.html"],
  theme: {
    extend: {
      colors: {
        navy: "#071630",
        snow: "#FFFAFA",
        accent: "#3b82f6",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
