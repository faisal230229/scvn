/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {},
    fontFamily: {
      "fatura-heavy": ["fatura-heavy"],
    },
    animation: {
      "buy-move": "buymove 1s ease-in-out infinite",
    },
  },
  plugins: [],
};
