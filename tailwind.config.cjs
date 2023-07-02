/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#1C2932",
        primaryBorderColor: "#eaeef4",
        iconPassive: "#92a8b9",
        "login1-header": "#003049",
        inputBorder1: "#ebebeb",
      },
      backgroundColor: {
        primaryDark: "#1C2932",
        primaryLight: "#f7f7f7",
      },
      backgroundImage: {
        loginDemo2Bg: "url('/src/assets/images/login_demo2_bg.jpg')",
      },
      fontFamily: {
        "roboto-mono": ['"Roboto Mono"', "monospace"],
        "titillium-web": ['"Titillium Web"', "sans-serif"],
        "open-sans": ['"Open Sans"', "sans-serif"],
      },
      height: {
        mainScreen: "calc(100vh - 4rem)",
        100: "28rem",
        120: "30rem",
      },
      width: {
        88: "22rem",
        160: "40rem",
      },
      boxShadow: {
        login1: "0 0 4px 0 rgba(0, 0, 0, 0.25)",
      },
      fontSize: {
        xxs: "10px",
        32: "2rem",
      },
      lineHeight: {
        2.5: "0.625rem",
      },
      padding: {
        1.25: "0.3125rem",
      },
    },
  },
  plugins: [],
};
