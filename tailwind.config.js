/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'] 
      },
      spacing: {
        '128': '28rem',
        '132':'32rem'
      },
      animation:{
        opa0:"opa0 500ms ease-in-out",

      },
      keyframes:{
        opa0:{
          "0%":{opacity:0},
          "50%":{opacity:0.2},
          "75%":{opacity:0.5},
          "100":{opacity:1}
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
