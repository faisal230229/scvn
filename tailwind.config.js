/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {},
    container: {
      padding: "1rem",
    },
    fontFamily: {
      fatura: ["fatura"],
      "fatura-heavy": ["fatura-heavy"],
    },
    animation: {
      "buy-move": "buymove 1s ease-in-out infinite",
    },
  },
  plugins: [],
};
