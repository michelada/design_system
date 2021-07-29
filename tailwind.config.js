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
        'sm': '.8rem',
        'md': '.875rem',
        'btn': '1.125rem',
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
          light: '#828F96',
          lighter: '#A5B1B8',
          lightest: '#E6EDF0',
        },
        blue: {
          dark: '#292C52',
          DEFAULT: '#3264FA',
          picton: '#43B7E9',
          wind: '#9CAFC8',
        },
        white: {
          DEFAULT: '#FFFFFF',
          ish: '#F5F8FA',
          antiflash: "#EAF1F9",
        },
        dark: {
          DEFAULT: '#15162F',
          charcoal: '#333333',
        },
        red: '#EA3434',
        yellow: '#F9D026',
        green: '#00B5AF',

      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
