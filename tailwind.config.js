/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        primary: '#5A67D8',
        secondary: '#12CCAB'
      },

      // fontFamily: {
      //   'manrope': ["Manrope", "sans-serif"]
      // },
    },
  },
  plugins: [daisyui],
}

