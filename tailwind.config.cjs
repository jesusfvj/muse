/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'la-rosalia': "url('src/assets/images/headerPicture.jpeg')",
      }
      
    },
  },
  plugins: [],
}
