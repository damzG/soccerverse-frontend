/** @type {import('tailwindcss').Config} */
export default {
  content: [
     "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
       colors: {
        'sv-dark': '#002D62',
        'sv-green': '#013220',
        'sv-gold': '#FFD700',
        'sv-neon': '#39FF14'
      },

      keyframes: {
      fadeIn: {
        "0%": { opacity: "0", transform: "translateY(30px)" },
        "100%": { opacity: "1", transform: "translateY(0)" },
      },
    },
    animation: {
      "fade-in": "fadeIn 1s ease-out",
    },
    },
  },
  plugins: [],
}

