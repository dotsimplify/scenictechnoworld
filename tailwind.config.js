module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Sans: ["OpenSans", "sans-serif"],
      },
      colors: {
        primary: "#2580b5",
      },
      backgroundImage: {
        BgShape: "url('./app/assets/images/map.jpg')",
      },
      dropShadow: {
        CardShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)",

        contactShadow: "54px 23px 129px 7px rgba(0,0,0,0.54)",
        camparisonShadow: " -7px -39px 57px -42px rgba(0,0,0,0.1)",
      },

      boxShadow: {
        pricingShadow: "-3px 2px 27px -13px rgba(0,0,0,0.1)",
      },

      keyframes: {
        "fade-in-down": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
      },
      animation: {
        "fade-in-down": "fade-in-down 1s ease-out",
      },
    },
  },
  plugins: [],
};
