/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        main: '#FEDF78',
        point: '#846144',
        font: '#39442D',
      },
      minHeight: {
        1: '1px',
      },
    },
    fontFamily: {
      Regular: ['NanumGothic', 'sans-serif'],
      Point: ['Jua', 'sans-serif'],
    },
  },
  plugins: [],
}
