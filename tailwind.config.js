/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        bg: '#020916',
        accent: '#DD7EFF',
      },
      fontFamily:{
        'dmsans': ['DM Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}

