/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width:{
        76:"18.5rem",
        78:"19rem",
        79:"19.5rem",
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        'xxs1': '8px',  
        'xxs2': '10px',  
      },
    },
  },
  plugins: [],
}