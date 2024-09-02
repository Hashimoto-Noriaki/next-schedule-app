/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "react-blue": "#61DAFB", // Reactの水色に設定
      },
    },
  },
  plugins: [],
};
