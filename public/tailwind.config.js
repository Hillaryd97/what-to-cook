/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        lightPurple: "#893168",
        darkPurple: "#4A1942",
        almostGrey: "#EAEAEA",
        almostBlack: "#050404",
        overlay: "rgba(0,0,0,0.5)",
      },
    },
  },
  plugins: [],
};
