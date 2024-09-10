/** @type {import('tailwindcss').Config} */
export default {
  content: [  "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        'model-y': "url('./assets/ModelY.avif')",
        'modelThree': "url('./assets/Model-3.avif')",
        'modelX': "url('./assets/Model-x.avif')",
        'modelS': "url('./assets/Model-2.avif')",
        'CyberTruck': "url('./assets/CyberTruck.avif')",
      }
    },
  },
  plugins: [],
}

