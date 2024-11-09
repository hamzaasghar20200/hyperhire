/** @type {import('tailwindcss').Config} */  
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Adjust this according to your file structure
  ],
  theme: {
    extend: {
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeInUp: "fadeInUp 500ms ease-out forwards",
        fadeIn: "fadeIn 500ms ease-out forwards",
        slideUp: "slideUp 500ms ease-out forwards",
      },
      transitionProperty: {
        height: "height",
        // Add other properties if needed
      },
    },
  },
  plugins: [],
};