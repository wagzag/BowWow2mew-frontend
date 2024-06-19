/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'nanum-gothic': ['Nanum Gothic', 'sans-serif'],
        'nanum-gothic-coding': ['Nanum Gothic Coding', 'monospace'],
      },
      colors: {
        'custom-yellow': '#FEDF78',
        'custom-brown': '#846144',
        'custom-light-yellow': '#FFF0D4',
        'custom-dark-yellow': '#FFCB4F',
        'custom-green': '#39442D'
      },
    },
  },
  plugins: [],
}
