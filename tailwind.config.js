/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {  
    extend: {
      colors: {
        dark: '#161616',
        title: "#f3f9f8",
        highlight: "#3dcfb6",
        soft: "#999D9D",
      },
      padding: {
        body: '2.2rem'
      },
      fontFamily: {
        'body': "Raleway, serif",
        'heading':  "Prosto One, serif",
      }
    },
  },
  plugins: [],
}