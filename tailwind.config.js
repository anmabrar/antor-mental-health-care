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

          "primary": "#60a5fa",

          "secondary": "#9ca3af",

          "accent": "#37CDBE",

          "neutral": "#3D4451",

          "base-100": "#FFFFFF",

          "info": "#22d3ee",

          "success": "#22c55e",

          "warning": "#FBBD23",

          "error": "#f43f5e",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
