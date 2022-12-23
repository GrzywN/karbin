const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: colors.indigo,
        secondary: colors.orange,
      },
      fontFamily: {
        sans: 'var(--font-inter)',
        cursive: 'var(--font-pacifico)',
      },
    },
  },
  plugins: [],
};
