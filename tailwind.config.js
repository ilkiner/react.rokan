module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        colors: {
          customBlue: '#2d3e50',
          customRed: '#eb4d4b',
          customGreen: '#34c38f',
        }
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
    safelist: [{
      pattern: /(bg|text|border)-s2cond(Blue|Red|Green)/
  }

]
  };