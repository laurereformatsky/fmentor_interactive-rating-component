const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        "orange": "#FC7614",
        "white": "#FFF",
        "black": "#232A34",
        "blue": {
          100: "#262E38",
          200: "#131518",
        },
        "grey": {
          100: "#969FAD",
          200: "#7C8798",
        }
      },
      fontFamily: {
        "sans": ["Overpass", "sans-serif"],
      },
      fontSize: {
        "base": "62.5%",
        "xs": ["1.4rem", "2.2rem"],
        "sm": ["1.5rem", "2.4rem"],
        "2xl": "2.4rem",
        "3xl": "2.8rem",
      }
    }
  },
  plugins: [
    plugin(function({ addUtilities }) {
      addUtilities({
        ".hidden": {
          "display": "none",
        }
      })
    })
  ]
}
