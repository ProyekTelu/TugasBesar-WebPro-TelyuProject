/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#FEFBF6",
        black: "#3D3C42",
        grey: "#ECEAE9",
        primary: "#D31C1C",
        secondary: "#77D31C",
        tertiary: "#1CD3D3",
        quarternary: "#771CD3",
        whiteAlternative: "#fff",
        blackAlternative: "#252422",
        greyAlternative: "#C5C3C4",
        primaryAlternative: "#E53D3D",
        secondaryAlternative: "#91E53D",
        tertiaryAlternative: "#3DE5E5",
        quarternaryAlternative: "#913DE5",
      },
      keyframes: {
        minimizeSideBar: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(90deg)" },
        },
        fadeAway: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        fadeAppears: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        rotateLeft: {
          "0%": { transform: "rotate(180deg)" },
          "70%": { transform: "rotate(-40deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        rotateRight: {
          "0%": { transform: "rotate(0deg)" },
          "70%": { transform: "rotate(220deg)" },
          "100%": { transform: "rotate(180deg)" },
        },
      },
      animation: {
        minimizeSideBar: "minimizeSideBar 1s ease-in ",
        fadeAway: "fadeAway 0.2s ease-out normal forwards",
        fadeAppears: "fadeAppears 0.2s ease-out normal forwards",
        rotateLeft: "rotatLeft 0.3s ease-out",
        rotateRight: "rotateRight 0.3s ease-out forwards",
      },
      modalOverlay: {
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        background: " rgba(0, 0, 0, 0.5)",
        zindex: "49",
      },
    },
    screens: {
      xss: "10px",
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
});
