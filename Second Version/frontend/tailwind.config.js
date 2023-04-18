/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#C44FEB",
      },
    },
    animation: {
      "spin-slow": "spin 5s linear infinite",
    },
  },
  plugins: [],
};
