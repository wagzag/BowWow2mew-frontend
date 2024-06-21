/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        main: '#FEDF78',
        point: '#846144',
        font: '#39442D',
        text: '#FFF0D4',
        button: '#FFCB4F',
      },
      fontFamily: {
        Regular: ['NanumGothic', 'sans-serif'],
        Point: ['Jua', 'sans-serif'],
      },
      spacing: {
        90: '90px',
      },
      minHeight: {
        1: '1px',
      },
    },
  },
  plugins: [],
}