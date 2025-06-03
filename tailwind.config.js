/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // React files ke liye
  ],
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 1.5s ease-out forwards",
        slideIn: "slideIn 1s ease-out forwards",
        bounceIn: "bounceIn 1s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        slideIn: {
          "0%": { transform: "translateX(-100%)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        bounceIn: {
          "0%, 20%, 40%, 60%, 80%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-10px)",
          },
        },
      },
    },
  },
  plugins: [],
};
