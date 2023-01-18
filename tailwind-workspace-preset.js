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
      secondary: colors.amber,
      tertiary: colors.teal,
      neutral: colors.zinc,
      success: colors.green,
      warning: colors.orange,
      danger: colors.red,
    },
    fontFamily: {
      sans: 'var(--font-plus-jakarta-sans)',
      cursive: 'var(--font-pacifico)',
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
