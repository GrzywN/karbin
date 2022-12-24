const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      primary: colors.indigo,
      secondary: colors.orange,
      neutral: colors.neutral,
    },
    fontFamily: {
      sans: 'var(--font-inter)',
      cursive: 'var(--font-pacifico)',
    },
  },
  plugins: [],
};
