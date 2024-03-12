/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%, 100%": { transform : "rotate(-3deg)"},
          "50%": { transform : "rotate(3deg)" },
        },
        floatY: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        floatX: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(50px)" },
        },
        float: {
          "0%, 100%": { transform: "translateX(0) translateY(0)" },
          "50%": { transform: "translateX(50px) translateY(-10px)" },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
        float: "float 4s ease-in-out infinite",
        floatX: "floatX 4s ease-in-out infinite",
        floatY: "floatY 4s ease-in-out infinite",
      }
    },
  },
  plugins: [],
}

