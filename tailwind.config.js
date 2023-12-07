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
      },
      borderRadius: {
        'myRound': '0.625rem'
      },
      boxShadow: {
        'innerLight': 'inset 0 2px 0 0 rgba(255,2555,255,0.15)'
      }
    },
  },
  plugins: [],
}

