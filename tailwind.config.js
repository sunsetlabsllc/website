/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'text-darkBlue',
    'text-lightBlue',
    'text-pink',
    'text-orange',
    'text-yellow',
  ],
  theme: {
    extend: {
      colors: {
        lightBlue: '#68cbf5',
        darkBlue: '#111958',
        pink: '#f642a0',
        orange: '#fc8053',
        yellow: '#f8ed51',
        white: '#FFFFFF',
        black: '#1a1a1a',
        gray: '#d6d6d6',
      },
      fontFamily: {
        sans: ['Karla', 'sans-serif'],       
      },
      fontWeight: {
        thin: '200',
        hairline: '200',
        extralight: '200',
        light: '200',
        normal: '400',
        medium: '500',
        semibold: '500',
        bold: '800',
        extrabold: '800',
        'extra-bold': '800',
        black: '900',
      },          
    },
  },
  plugins: [],
}

