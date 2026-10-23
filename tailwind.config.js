/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          crimson: '#B91C1C',
          darkRed: '#7F1D1D',
          warmBg: '#FDFBF7',
        }
      },
      fontFamily: {
        telugu: ['Noto Serif Telugu', 'Georgia', 'serif'],
      }
    },
  },
  plugins: [],
}