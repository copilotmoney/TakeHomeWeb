/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1E3A8A",
        secondary: "#4D76A714",
        accent: "#4F7A96",
        background: "#FBFCFF",
        text: "#0D171C",
        muted: "#D5DADF",
      },
    },
  },
  plugins: [],
};
