/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",

		//root index files add this
    "./*.{html,js}",

    "./pages/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        Jom: ["Jom"],
        MetalMania: ["MetalMania"]
      },
     },
     fontSize: {
      sm: '18rem',
      md: '5rem',
      base: '19rem',
      xl: '6rem',
      '2xl': '2rem',
      '3xl': '20rem',
      '4xl': '2.0rem',
      '5xl': '9rem',
  },
  plugins: [],
}
}
