/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'lg':'890px',
      },
      keyframes :{
        zoom :{
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation :{
        'zoom' :  'zoom 5s infinte',
      },
    },
  },
  plugins: [],
}