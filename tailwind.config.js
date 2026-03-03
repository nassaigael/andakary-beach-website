/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        beach: {
          sand: '#F5E6D3',
          light: '#FFF9E6',
          dark: '#D4B08C',
        },
        ocean: {
          light: '#7EC8E3',
          medium: '#3A8FE0',
          deep: '#1B4B8C',
          wave: '#2C9AC9',
        },
        forest: {
          light: '#90B77D',
          medium: '#4A7043',
          deep: '#2D4A29',
          palm: '#5A8F4C',
        },
      },
    },
  },
  plugins: [],
}