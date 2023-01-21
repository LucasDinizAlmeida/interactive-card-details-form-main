/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Space Grotesk', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        'card-front': "url('/images/bg-card-front.png')",
        'card-back': "url('/images/bg-card-back.png')",
        'violet-desktop': "url('/images/bg-main-desktop.png')",
        'violet-mobile': "url('/images/bg-main-mobile.png')",
      },
      colors: {
        'white': '#ffffff',
        'greyCustom': {
          300: '#dedddf',
          400: '#8e8593',
          800: '#21092f'
        },
        'redCustom': {
          500: '#ff5252'
        },
        'linearGradient': {
          600: '#6448fe',
          700: '#600594'
        }
      }
    },
  },
  plugins: [],
}