/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#f2bffc",

          "secondary": "#dcf492",

          "accent": "#d16f60",

          "neutral": "#212031",

          "base-100": "#ffff",

          "info": "#6680E5",

          "success": "#10563C",

          "warning": "#F0BD24",

          "error": "#E6376C",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
