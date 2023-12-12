/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        slowSpin: 'spin 15s infinite linear'
      },
      colors: {
        bg: '#020916',
        accent: '#FA7237',
        lightGray: '#1F2937',
        accentHover: '#fdab8b',
        bgHover: '#262b35',
      },
      fontFamily:{
        'dmsans': ['DM Sans', 'sans-serif']
      },
      maxWidth: {
        'myW' : '82rem'
      },
      borderRadius: {
        'myRound': '0.625rem',
        'myRound-xl': '1.25rem'
      },
      boxShadow: {
        'innerLight': 'inset 0 2px 0 0 rgba(255,255,255,0.15)',
        'innerLightMini': 'inset 0 1px 0 0 rgba(w55,255,255,0.15)'
      }
    },
  },
  plugins: [],
}

