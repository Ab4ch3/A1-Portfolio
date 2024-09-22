/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-dark': '#0b0a10',
        'brand-gray': '#F5F5F7',
        'brand-gray2': '#1C1E23'
      }
    }
  },
  plugins: []
};
