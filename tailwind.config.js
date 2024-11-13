/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'blue-hsl': 'hsl(223, 87%, 63%)',
        'pale-blue': 'hsl(223, 100%, 88%)',
        'light-red': 'hsl(354, 100%, 66%)',
        'gray-hsl': 'hsl(0, 0%, 59%)',
        'very-dark-blue': 'hsl(209, 33%, 12%)',
        'pale-blue-gray': '#CAD1F3',
      },
      fontFamily: {
        'libre-franklin': ['Libre Franklinlin', 'sans-serif']
      }
    },
  },
  plugins: [],
}