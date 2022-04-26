module.exports = {
  mode: 'jit',
  content: [
    './site/*.html',
  ],
  darkMode: 'media',
  theme: {
    fontFamily: {
      poppins: ['Poppins'],
      raleway: ['Raleway']
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000',
      gray: {
        DEFAULT: '#575F65',
        light: '#828F96',
        lighter: '#A5B1B8',
        silver: '#D2D5DA',
        lightest: '#E6EDF0',
        ish: '#808C93',
      },
      blue: {
        dark: '#292C52',
        DEFAULT: '#3264FA',
        crayola: '#245AF9',
        picton: '#43B7E9',
        wind: '#9CAFC8',
        lavender: '#C1DBFC'
      },
      white: {
        DEFAULT: '#FFFFFF',
        ish: '#F5F8FA',
        antiflash: "#EAF1F9",
        mystic: '#E6EDF0'
      },
      dark: {
        DEFAULT: '#15162F',
        charcoal: '#333333',
      },
      yellow: {
        DEFAULT: '#F9D026',
        darker: '#FFC800'
      },
      red: '#EA3434',
      green: '#00B5AF',
      fullcalendar: {
        "event-1": 'var(--fullcalendar-event-1)',
        "event-2": 'var(--fullcalendar-event-2)',
        "event-3": 'var(--fullcalendar-event-3)',
        "event-4": 'var(--fullcalendar-event-4)',
      }
    },
    extend: {
      boxShadow: {
        'card': '4px 4px 8px rgba(0, 0, 0, 0.08)',
      },
      spacing: {
        '120': '30rem',
      },
      fontSize: { // https://type-scale.com/ using major third type scale
        'sm': '.8125rem',
        'md': '.875rem',
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
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
