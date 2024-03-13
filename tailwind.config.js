/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        night: {
          DEFAULT: '#0d1120',
          50: '#171e2c',
          500: '#0d1120',
        },
      },
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
          "0%, 100%": { transform: "translateX(-10px)" },
          "50%": { transform: "translateX(50px)" },
        },
        float: {
          "0%, 100%": { transform: "translateX(-10px) translateY(0)" },
          "50%": { transform: "translateX(50px) translateY(-10px)" },
        },
        fadeIn: {
          "0%": { opacity: "0"},
          "100%": { opacity: "1"},
        },
        fadeIn2: {
          "0%": { opacity: "0"},
          "100%": { opacity: "1"},
        },
        fadeIn3: {
          "0%": { opacity: "0"},
          "100%": { opacity: "1"},
        },
        fadeIn4: {
          "0%": { opacity: "0"},
          "100%": { opacity: "1"},
        }
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
        float: "float 4s ease-in-out infinite",
        floatX: "floatX 4s ease-in-out infinite",
        floatY: "floatY 4s ease-in-out infinite",
        fadeIn: "fadeIn 1s ease-in-out",
        fadeIn2: "fadeIn 2s ease-in-out",
        fadeIn3: "fadeIn 3s ease-in-out",
        fadeIn4: "fadeIn4 4s ease-in-out",
      }
    },
  },
  plugins: [],
}

