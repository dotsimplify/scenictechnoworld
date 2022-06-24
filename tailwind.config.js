// tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./usefulData/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        segoe: ["Segoe", "Arial", "sans-serif"],
      },
      lineHeight: {
        "extra-loose": "4rem",
      },
      backgroundColor: {
        "dark-bg": "#000",
        "dark-bg-2": "#22343D",
        "dark-bg-3": "#f3f4f6",
        "theme-orange": "#F2994A",
      },
      colors: {
        primary: "#2580b5",
      },
      backgroundImage: {
        BgShape:
          "url('https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        conttactUs:
          "url('https://img.freepik.com/free-psd/3d-cartoon-character-man-about-send-letter_1150-56209.jpg?w=900')",
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
        floating: {
          "0%": { transform: "translate(0,  0px)" },
          " 50%": { transform: "translate(0, 5px)" },
          "100%": { transform: "translate(0, -0px)" },
        },
        animation: {
          floating: "floating 3s linear infinite ease-in-out",

          "fade-in-down": "fade-in-down 1s ease-out",
        },
      },
    },
  },
  variants: {
    extend: {
      fontFamily: ["hover", "focus"],
    },
  },
  plugins: [],
  corePlugins: {
    fontFamily: true,
  },
};
