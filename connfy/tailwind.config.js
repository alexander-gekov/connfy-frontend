module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          light: '#96D1E2',
          DEFAULT: '#63AED9',
          dark: '#3792AC',
        },
        orange: {
          light: '#F3C484',
          DEFAULT: '#E79F37',
          dark: '#D5871C',
        },
        gray: {
          dark: '#2A2A2A',
          DEFAULT: '#414042',
          light: '#7A7A7A',
        },
      },
    },
    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif'],
    },
    variants: {
      extend: {},
    },
    plugins: [],
  },
}
