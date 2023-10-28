/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#D31C1C",
        secondary: "#EF233C",
        white: "#FEFBF6",
        black: "#3D3C42",
        grey: "#ECEAE9",
      },
      keyframes: {
        minimizeSideBar: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(90deg)' },
        },
        fadeAway: {
          '0%': { opacity : '1'},
          '100%': { opacity : '0'}
        }, 
        fadeAppears:{
          '0%': { opacity : '0'},
          '100%': { opacity : '1'}
        },
        rotateLeft:{
          '0%': { transform: 'rotate(180deg)'},
          '70%': { transform: 'rotate(-40deg)'},
          '100%': {transform: 'rotate(0deg)'}
        },
        rotateRight:{
          '0%': { transform: 'rotate(0deg)'},
          '70%': { transform: 'rotate(220deg)'},
          '100%': {transform: 'rotate(180deg)'}
        }
      },
      animation: {
        minimizeSideBar : 'minimizeSideBar 1s ease-in ',
        fadeAway : 'fadeAway 0.2s ease-out normal forwards',
        fadeAppears : 'fadeAppears 0.2s ease-out normal forwards',
        rotateLeft : 'rotatLeft 0.3s ease-out',
        rotateRight : 'rotateRight 0.3s ease-out forwards'
      }
    },
    screens: {
      'xs': '480px',
      'ss': '620px',
      'sm': '768px',
      'md': '1060px',
      'lg': '1200px',
      'xl': '1700px',
    }
  },
  plugins: [],
};