/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
       backgroundImage: {
        'custom-gradient': "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))",
      },
      boxShadow: {
        'buttonshadow': '0px 5px 5px rgba(255, 186, 138, 0.7)',
        'cardshadow': '0 4px 17px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);',

      },
      colors: {
        'navbar-bg': 'rgba(104, 102, 102, 0.8)',
      },
    },
  },
  plugins: [],
}