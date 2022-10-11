/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        baloo: "'Baloo 2', cursive",
        ubuntu: "'Ubuntu', sans-serif",
        ubuntuCode: "'Ubuntu Mono', monospace",
      },
    },
  },
  plugins: [require("daisyui")],
};
