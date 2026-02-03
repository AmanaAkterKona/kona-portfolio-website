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
        "spin-slow": "spin-slow 8s linear infinite", // Updated to 8s as per your requirement
        "spin-extra-slow": "spinSlow 20s linear infinite", // Keeping your original 20s version too
        shine: "shine 3s infinite",
        gradientSlow: "gradientSlow 6s linear infinite",
      },

      keyframes: {
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
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