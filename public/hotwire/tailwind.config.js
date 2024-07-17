/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/hotwire/**/*.{html,js}",
    "./templates/**/*.{html,js,ejs}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
