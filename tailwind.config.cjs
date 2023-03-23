/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '450px',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
//   plugins: [require('@tailwindcss/line-clamp')],
}
