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
      black: '#000000',
      primary: '#712384',
      secondary: '#F1CF5A',
      red: '#CA2438',
      aqua: '#6DD6C4',
      orange: '#ECAA32',
      violet: {
        DEFAULT: '#571F7C',
        russian: '#38164E'
      },
      gray: {
        DEFAULT: '#413E47',
        old: '#666170',
        cool: '#8B8599',
        manatee: '#AAA5B8',
        magnolia: '#EBE6F0',
        ghost: '#F8F5FA'
      },
      white: {
        DEFAULT: '#FFFFFF',
        ghost: '#FAFAFA'
      },
      fullcalendar: {
        "event-1": 'var(--fullcalendar-event-1)',
        "event-2": 'var(--fullcalendar-event-2)',
        "event-3": 'var(--fullcalendar-event-3)'
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
        'base': '1rem',
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
