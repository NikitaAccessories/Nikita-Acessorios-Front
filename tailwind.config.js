module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        marquee: "marquee 25s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      fontFamily: {
        baskervville: ["Baskervville", "serif"],
        italiana: ["Italiana", "serif"],
        libreBaskerville: ["Libre Baskerville", "serif"],
        playfairDisplay: ["Playfair Display", "serif"],
      },
      colors: {
        primary: {
          beige100: "rgb(255, 242, 236)",
          beige50: "rgb(255, 250, 247)",
          red100: "rgb(222, 21, 55)",
        },
      },
    },
  },
  plugins: [],
};
