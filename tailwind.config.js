/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      width: '85%',
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif']
    },
    extend: {
      colors: {
        primary: "#171717",
        secondary: "#E58411",
        card: "#FFFEF9",
      },
      backgroundImage: {
        'CTA-pattern': "url('/img/Rectangle 19.svg')",
      }
    },
  },
  plugins: [],
}