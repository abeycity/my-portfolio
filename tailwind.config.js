/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily:{
         "roboto":[ "Roboto Condensed", "serif"],
         "inter":["Inter", "serif"],
         "ojuju-mi":["Ojuju", "serif"]
    },
    extend: {},

  },
  plugins: [],
}

