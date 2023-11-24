/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html, js}"],
  theme: {
    extend: {
      colors: {
        'primary': '#F5F4F4',
        'secondary': '#E5E5E5',
        'accent': '#00303F',
        'narrow': '#D9D9D9'
      }
    },
  },
  plugins: [],
}

