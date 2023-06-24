/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      cursor: {
        'fancy': 'url(./src/img/nextyprev.png), pointer',
      }
    },
  },
  plugins: [],
};

