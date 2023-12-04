/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        bg: '#020916',
        accent: '#DD7EFF',
        lightGray: '#1F2937',
      },
      fontFamily:{
        'dmsans': ['DM Sans', 'sans-serif']
      },
      maxWidth: {
        'myW' : '82rem'
      }
    },
  },
  plugins: [],
}

