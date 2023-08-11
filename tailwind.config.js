/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    fontFamily:{
      LibreFranklin: 'LibreFranklin'
    },
    extend: {
      colors:{
        PaleBlue: 'hsl(223, 100%, 88%)',
        LightRed: 'hsl(354, 100%, 66%)',
        Blue: 'hsl(223, 87%, 63%)',
        Gray: 'hsl(0, 0%, 59%)',
        VeryDarkBlue: 'hsl(209, 33%, 12%)'
      }
    },
  },
  plugins: [],
}

