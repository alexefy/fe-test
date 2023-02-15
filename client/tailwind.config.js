/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Gotham', 'helvetica', 'arial', 'sans-serif'] 
      },
      colors: {
        hemocyanin: {
          DEFAULT: '#180048'
        },
        ice: {
          DEFAULT: '#f0ffff'
        },
        lightGrey: {
          DEFAULT: '#f2f2f2'
        },
        plum: {
          DEFAULT: '#600e6b'
        },
        purpleHaze: {
          DEFAULT: '#a49fc8'
        },
        siphon: {
          DEFAULT: '#100030'
        },
        sohoLights: { 
          DEFAULT: '#f050f8'
        }
      }
    },
  },
  plugins: [],
}
