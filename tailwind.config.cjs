/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "coffee",
    ],
  },
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
