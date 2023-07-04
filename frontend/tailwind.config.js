/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'loginBG': "url('/src/images/LoginBG.png')",
      }
    },
    colors: {
      ...colors,
      'first': '#FFC501',
      'second': '#F4F4F4'
    },
    fontSize: {
      '1818': ['18px', '18px'],
      '1621': ['16px','21px'],
      '1852': ['18px','52px'],
      '1419': ['14px','19px'],
    },
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
      '10': '10px',
      '12': '12px',
      '14': '14px',
      '16': '16px',
      '18': '18px',
      '20': '20px',
      '22': '22px',
      '24': '24px',
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
      poppins: ["Poppins", "sans-serif"]
    },
  },
  plugins: [],
}

