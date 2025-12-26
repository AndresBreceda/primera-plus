/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        verdePrimera: "rgb(var(--verde-primera) / <alpha-value>)",
        rojoPrimera: "rgb(var(--rojo-primera1) / <alpha-value>)",
        grisPrimera: "rgb(var(--gris-primera) / <alpha-value>)",
        negroPrimera: "rgb(var(--negro-primera) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};
