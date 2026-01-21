/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Urbanist', 'sans-serif'],
      },

      /* ================= ANIMATIONS ================= */
      animation: {
        "spin-slow": "spinSlow 20s linear infinite",
        shine: "shine 3s infinite",
        gradientSlow: "gradientSlow 6s linear infinite",
      },

      keyframes: {
        spinSlow: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        shine: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        gradientSlow: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" },
        },
      },
    },
  },

  plugins: [require("daisyui")],
};
