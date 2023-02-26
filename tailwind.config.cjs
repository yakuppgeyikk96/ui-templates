/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primaryColor": "#1C2932",
        "primaryBorderColor": "#eaeef4",
        "iconPassive": "#92a8b9",
      },
      backgroundColor: {
        "primaryDark": "#1C2932",
        "primaryLight": "#f7f7f7"
      },
      fontFamily: {
        'roboto-mono': ['"Roboto Mono"', 'monospace']
      }
    },
  },
  plugins: [
    
  ],
}
