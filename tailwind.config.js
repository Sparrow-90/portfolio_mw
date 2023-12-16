/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      listStyleImage:{
        checkmark: 'url("./assets/check.svg")',
      },
    
      keyframes:{
        gradient:{
          '0%': {backgroundPosition: '0% 50%'},
          '100%': {backgroundPosition: '100% 50%'}
        },
      },
      animation: {
        gradient: 'gradient 6s linear infinite',
        slowSpin: 'spin 15s infinite linear',
      },
      colors: {
        bg: '#020916',
        accent: '#33EFB7',
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

