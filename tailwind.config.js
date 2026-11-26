/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          950: "#06110e",
          900: "#0b1d18",
        },
        accent: {
          primary: "#10b981",
          secondary: "#34d399",
        },
      },
    },
  },
  plugins: [],
};