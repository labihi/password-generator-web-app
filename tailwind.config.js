/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts}"],
  theme: {
    extend: {
      colors: {
        almost_white: '#e6e5ea',
        light_grey: '#817d92',
        dark_grey: '#24232c',
        very_dark_grey: '#18171f',
        neon_green_strong: '#a4ffaf',
        yellow_medium: '#f8cd65',
        orange_weak: '#fb7c58',
        red_too_weak: '#f64a4a',
      },
    },
  },
  plugins: [],
}
