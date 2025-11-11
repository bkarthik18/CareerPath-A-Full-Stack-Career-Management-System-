/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        glass: "rgba(255,255,255,0.6)",
        accent: "#38bdf8",   // teal
        secondary: "#a855f7" // violet
      },
      boxShadow: {
        glass: "0 4px 30px rgba(0, 0, 0, 0.1)"
      },
      backdropBlur: {
        glass: "12px"
      }
    }
  },
  plugins: []
};
