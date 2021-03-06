const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
    colors: {
      black: '#0B0C10',
      slate: '#1F2833',
      gray: '#C5C6C7',
      aqua: '#66FCF1',
      teal: '#45A29E',
      white: '#FFFFFF',
    },
  },
  plugins: [],
};
