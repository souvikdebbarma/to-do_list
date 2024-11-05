/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        blue: '#272030',
        cloud: '#E3EBF2',
        mauve: '#C79A99',
        maroon: '#3B0A0A',
      }
    },
  },
  plugins: [],
} 