/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./Screens/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "840px",
      lg: "1048px",
      xl: "1245px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        text: "#fbfaff",
        background: "#06031c",
        primary: "#a939ea",
        secondary: "#313706",
        accent: "#6ae821",
        black: "#000000",
      },
      fontSize: {
        "body-lg": "1.125rem",
        "body-sm": "0.875rem",
        "body-xl": "3rem",
      },
    },
  },
  plugins: [],
};
