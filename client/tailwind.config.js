/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      height: {
        header: '60px',
        'header-offset': 'calc(100vh-60px)'
      },
      width: {
        sidebar: '230px'
      },
      colors: {
        charcoal: '#36454F',
        lemonYellow: '#decc43'
      }
    }
  },
  plugins: []
};
