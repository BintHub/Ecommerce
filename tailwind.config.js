/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { 
      fontFamily:{
      poppins: "Poppins"
    },
    colors: {
     primary:'#B88E2F',
     secondary:'#FCF8F3',
     tertiary:'#3A3A3A'
    }
   },
  },
  plugins: [],
}
