/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'first-color': 'hsla(257, 100%, 67%, 1)',
        'title-color':'hsla(240, 11%, 12%, 1)',
        'text-color':'hsla(249, 4%, 36%, 1)',
        'input-color':'hsla(249, 17%, 92%, 1)',
        'glass':'hsla(249, 17%, 92%, .6)'
      }
    },
  },
  plugins: [],
}

