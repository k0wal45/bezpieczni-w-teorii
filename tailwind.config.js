/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#22d3ee",
          "secondary": "#34d399",
          "accent": "#d946ef",
          "neutral": "#6b7280",
          "base-100": "#1f2937",
          "info": "#3abff8",
          "success": "#84cc16",
          "warning": "#fbbd23",
          "error": "#dc2626",
        },
      },
    ],
  },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'codec': ['codec', 'sans-serif'],
        'codec-light': ['codec-light', 'sans-serif'],
        'codec-bold': ['codec-bold', 'sans-serif'],
      },
      
    },
  },
  plugins: [require("daisyui")],
}