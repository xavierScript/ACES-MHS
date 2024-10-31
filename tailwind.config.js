/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".custom-correct": {
          position: "relative",
          "&::after": {
            content: '"✓"',
            color: "white",
            "font-size": "18px",
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          },
        },
        ".custom-incorrect": {
          position: "relative",
          "&::after": {
            content: '"X"',
            color: "white",
            "font-size": "18px",
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          },
        },
      });
    },
  ],
};
