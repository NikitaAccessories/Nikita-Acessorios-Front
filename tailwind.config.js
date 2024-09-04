module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        'initial': 'initialAnimation 10s linear forwards', // Animação inicial (do meio da página)
        'marquee-continuous': 'marqueeContinuous 30s linear infinite', // Animação contínua padrão
        'marquee-delayed': 'marqueeDelayed 30s linear infinite', // Segunda animação com atraso
      },
      keyframes: {
        initialAnimation: {
          '0%': { transform: 'translateX(50%)' }, // Começa no meio da página
          '100%': { transform: 'translateX(-100%)' }, // Sai da tela pela esquerda
        },
        marqueeContinuous: {
          '0%': { transform: 'translateX(100%)' }, // Começa fora da tela à direita
          '100%': { transform: 'translateX(-100%)' }, // Sai completamente à esquerda
        },
        marqueeDelayed: {
          '0%': { transform: 'translateX(110%)' }, // Começa mais à direita com um gap
          '100%': { transform: 'translateX(-100%)' }, // Sai da tela, atrás do primeiro carrossel
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
