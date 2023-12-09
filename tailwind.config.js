/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}",
    "./src/global.css",
  ],
  theme: {
    screens: {
      sm: '375px',
      lg: '800px',
    },
    colors: {
      'White':" hsl(0, 0%, 100%)",
      'Pink': "hsl(275, 100%, 97%)",
      'Purple': "hsl(292, 16%, 49%)",
      'DarkPurple': "hsl(292, 42%, 14%)",
    },
    extend: {
      fontFamily: {
        'WorkSans': ["Work Sans"],
      },
      fontSize: {
        'xs': "10px",
        'sm': "13px",
        'base': "15px"
      }
    },
  },
  plugins: [],
}

