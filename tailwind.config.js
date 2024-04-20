/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#faf7ef',
          100: '#f5f0e2',
          300: '#ddcac4',
          500: '#b4887f',
          600: '#996861',
          700: '#81544f',
          900: '#5e3e3d',
        },
        accent: '#f274a7'
      },
      neutral: {
        50: '#f7f7f7',
        100: '#ededed',
        500: '#a1a1a1',
        700: '#7b7b7b',
        950: '#363636'
      },
      shades: {
        blk: '#0b0b0b',
        white: '#f8f8f8'
      }
    },
    fontFamily: {
      body: ['"Noto Sans", sans-serif']
    }
  },
  plugins: [],
};

