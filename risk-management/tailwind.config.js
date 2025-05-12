/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        headerbg: "#231F1F",
        siderbarbg: "#FCFCFC",
      },
    },
  },
  plugins: [],
};

