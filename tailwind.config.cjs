/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      /* fontSize: {
        '6xl': '5rem'
      } */
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
