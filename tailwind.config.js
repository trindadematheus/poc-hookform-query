/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["dark"],
  },
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
  },
};
