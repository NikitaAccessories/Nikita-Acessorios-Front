module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
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
          rose: "rgb(246, 217, 222)",
          graphite: "rgb(44, 39, 40)",
        },
      },
    },
  },
  plugins: [],
};
