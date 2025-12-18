/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'koku-orange': '#FF8C00',
        'koku-orange-light': '#FF7F00', 
        'koku-dark': '#2D2D2D',
        'koku-black': '#1A1A1A',
        'solar-blue': '#2D2D2D',
        'solar-yellow': '#FF8C00',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
