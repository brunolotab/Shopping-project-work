/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary':'pink',
        'color2':'#1B59F8',

      }
    },
  },
  plugins: [],
}

