module.exports = {
  purge: [
    './**/*.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: { 
      sans: ['Noto Sans'],
      avant: ['AvantGarde']
    },
    extend: {
      fontSize: { // https://type-scale.com/ using major third type scale
        'lg': '1.25rem',
        'xl': '1.563rem',
        '2xl': '1.953rem',
        '3xl': '2.441rem',
        '4xl': '3.052rem',
        '5xl': '3.815rem',
        '6xl': '4.768rem',
        '7xl': '5.96rem',
        '8xl': '7.451rem',
        '9xl': '9.313rem',
      },
      colors: {
        gray: {
          DEFAULT: '#575F65',
        },
        blue: {
          dark: '#292C52',
        },
        red: '#ff0000',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
