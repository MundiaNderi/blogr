/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens : {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        lightRed: 'hsl(356, 100%, 66%)',
        veryLightRed: 'hsl(355, 100%, 74%)',
        veryDarkBlue: 'hsl(208, 49%, 24%)',
        white: 'hsl(0, 0%, 100%)',
        grayishBlue: 'hsl(240, 2%, 79%)',
        veryDarkGrayishBlue: 'hsl(207, 13%, 34%)',
        veryDarkBlackBlue: 'hsl(240, 10%, 16%)',
        veryLightRedGradient: 'hsl(13, 100%, 72%)',
        lightRedGradient: 'hsl(353, 100%, 62%)',
        redCTA: 'hsla(356, 100%, 66%, 1)',
        washedWhite: 'hsla(0, 0%, 100%, 1)',
        headingBlue: 'hsla(209, 48%, 24%, 1)',
        bodyGray: 'hsla(209, 12%, 34%, 1)',
        hoverPink: 'hsla(355, 100%, 74%, 1)',
        darkPhone: '#2D2E40',
        lightPhone: '#3F4164',
        footerDark: 'hsla(237, 10%, 16%, 1)'
      },
      textColor: ['responsive', 'hover', 'focus', 'group-hover'],
      fontFamily: {
        overpass: ['Overpass SemiBold', 'sans-serif'],
      }, 
    },
  },
  plugins: [],
}