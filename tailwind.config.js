module.exports = {
  content: ["./app/**/*.{html,ejs}"],
  theme: {
    container: {
      center: true,
      padding: '12px',
      screens: {
        sm: '640px',
        md: '740px',
        lg: '980px',
        xl: '1320px',
      },
    },
    extend: {
      fontFamily: {
        'azeret': '"Azeret Mono" , monospace',
        'noto': '"Noto Sans TC" , sans-serif',
      },
      colors:{
        primary:'#62DB54',
        secondary:'#09ACF5',
        'dark': {
          DEFAULT: '#000000',
          '100': '#2D2D2D',
          '200': '#2A1E17',
          '300': '#202020',
          '400': '#1C1C1C',
          '500': '#1A1A1A'
        },
        'gray': {
          DEFAULT: '#C1C1C1',
          '100': '#49475514',
          '200': '#00000019',
          '300': '#00000012',
          '400': '#CDD0C4',
          '500': '#00000034',
          '600': '#C1C1C1',
          '700': '#00000058',
          '800': '#909090',
          '900': '#7C7E77'
        },
      },
      // fontSize: {
      //   xs: ['12px', '1.5'],
      //   sm: ['14px', '1.5'],
      //   base: ['16px', '1.5'],
      //   lg: ['18px', '1.5'],
      //   xl: ['20px', '1.5'],
      //   '2xl': ['24px', '1.5'],
      //   '3xl': ['30px', '1.5'],
      //   '4xl': ['36px', '1.5'],
      //   '5xl': ['48px', '1.5'],
      //   '6xl': ['64px', '1.5'],
      // },
      listStyleType: {
        square: 'square'
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}