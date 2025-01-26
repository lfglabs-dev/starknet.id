/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{html,tsx}", "./components/**/*.{html,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#19AA6E",
        secondary: "#402D28",
        tertiary: "#BF9E7B",
        background: "#ffffff",
      },
    },
    animation: {
      marquee: "scroll 30s linear infinite",
    },

    keyframes: {
      scroll: {
        "0%": { transform: "translateX(0)" },
        "100%": { transform: "translateX(-25%)" },
      },
      keyframes: {
        slideIn: {
          "0%": {
            opacity: 0,
            transform: "translateY(24px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "slide-in": "slideIn 0.7s ease-out forwards",
      },
    },
  },
  plugins: [],
};
