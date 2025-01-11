/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        honk: ["Honk", "serif"],
      },
      animation: {
        float: 'float 3s ease-in-out infinite', // Custom animation name and duration
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' }, // Start and end position
          '50%': { transform: 'translateY(-20px)' }, // Middle position (floating up)
        },
      },
    },
  },
  plugins: [],
};

