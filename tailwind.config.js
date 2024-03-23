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
        // Colors 1
        // text: "#fbfaff",
        // background: "#06031c",
        // primary: "#a939ea",
        // secondary: "#313706",
        // accent: "#6ae821",
        // black: "#000000",
        // Colors 2
        // text: "#07030a",
        // background: "#f8f3fc",
        // primary: "#8a2fd4",
        // secondary: "#c086ee",
        // accent: "#a951f1",
        text: "#0c0812",
        background: "#f5f1fa",
        primary: "#6600ff",
        secondary: "#b493e7",
        accent: "#945fe5",
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
