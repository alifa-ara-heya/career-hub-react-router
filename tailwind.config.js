/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        primary: '#5A67D8',
        secondary: '#12CCAB',
        // primaryGradient: 'bg-gradient-to-r from-indigo-300 to-purple-500',
      },

      // fontFamily: {
      //   'manrope': ["Manrope", "sans-serif"]
      // },
    },
  },
  plugins: [daisyui],
}

