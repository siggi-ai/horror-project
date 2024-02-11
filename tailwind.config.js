/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik_glitch: ['Rubik Glitch'],
        rubik_burned: ['Rubik Burned'],
        rubik_scribble: ['Rubik Scribble'],
        rubik_paint: ['Rubik Wet Paint'],
      }
    },
  },
  plugins: [],
}

