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
        }
      },
      animation: {
        minimizeSideBar : 'minimizeSideBar 1s ease-in alternate'
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