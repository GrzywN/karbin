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
      tertiary: colors.teal,
      neutral: colors.neutral,
      success: colors.green,
      warning: colors.orange,
      danger: colors.red,
    },
    fontFamily: {
      sans: 'var(--font-plus-jakarta-sans)',
      cursive: 'var(--font-pacifico)',
    },
  },
  plugins: [],
};
