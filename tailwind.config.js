/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'main': '#E5E4E0',
      'white': '#F3F3F3',
      'black': '#2D2D2D',
    },
    extend: {
      fontFamily: {
        cinzel: ['cinzel', 'serif'],
        montserrat: ['Montserrat', 'sans-serif']
      },
      backgroundImage: {
        'img-1': "url('https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')",
        'img-2': "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')",
        'img-3': "url('https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1892&q=80')",
      }
    },
    screens: {
      '3xl': {'max': '2561px'},
      '2.5xl': {'max': '1650px'},
      '2xl': {'max': '1535px'},
      '1.5xl': {'max': '1450px'},
      'xl': {'max': '1279px'},
      'lg': {'max': '1023px'},
      'md': {'max': '768px'},
      'sm': {'max': '639px'},
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
