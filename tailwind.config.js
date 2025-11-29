/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // TaskOnBoard Brand Colors
        'brand': {
          'dark-blue': '#1D2C3C',
          'main-green': '#32A49D',
          'dark-green-2': '#56D49A',
          'dark-green-3': '#1D9475',
          'light-green': '#DAF5EF',
          'medium-green': '#AAE2DF',
          'yellow': '#DDC33E',
        },
        'text': {
          'primary': '#212121',
          'secondary': '#576580',
          'dark-grey': '#606676',
        },
        'bg': {
          'main': '#F6F7F9',
          'input': '#F1F5F9',
          'white': '#F7F7F7',
          'card': '#FFFFFF',
        },
        'ui': {
          'tab-grey': '#B3B6C6',
          'border': '#EAEEF4',
          'button': '#32A49D',
        }
      },
    },
  },
  plugins: [],
} 