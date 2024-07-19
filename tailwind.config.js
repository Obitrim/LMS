/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        charcoal: '#36454F',
        lemonYellow: '#decc43'
      }
    }
  },
  plugins: []
}
