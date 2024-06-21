/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Regular: ['NanumGothic', 'sans-serif'],
        Point: ['Jua', 'sans-serif'],
      },
      colors: {
        main: '#FEDF78',
        point: '#846144',
        font: '#39442D',
        text: '#FFF0D4',
        button: '#FFCB4F',
      },
    },
  },
  plugins: [],
}
