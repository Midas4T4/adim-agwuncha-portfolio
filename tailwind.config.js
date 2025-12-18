/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    container: {
        center: true,
        padding: {
          Default: '1rem' ,
          md:'1.5rem',
          lg:'4rem'
        } 

    }
  },
  plugins: [],
}
