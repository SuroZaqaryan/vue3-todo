// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./index.html', './src/**/*.vue', './src/**/*.ts'],
  theme: {
    extend: {
      // шрифты
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },

      // макимальная ширина
      maxWidth: {
        '1xl': '968px',
      },

      // брекпоинты
      screens: {
        mobile: '576px',
        // => @media (min-width: 576px) { ... }
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
