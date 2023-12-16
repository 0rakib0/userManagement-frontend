/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primaryColor':'#007a6b',
        'secondaryColor':'#06554c'
      }
    },
  },
  plugins: [require("daisyui")],
}

