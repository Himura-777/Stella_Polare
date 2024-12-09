/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'people-count': 'linear-gradient(45deg, #1E74F9, #A9CBFF, #1E74F9)',
      },
    },
  },
  plugins: [],
}
