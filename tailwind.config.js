/** @type {import('tailwindcss').Config} */
export default {
  content: [  "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        'model-y': "url('./assets/ModelY.avif')",
      }
    },
  },
  plugins: [],
}

