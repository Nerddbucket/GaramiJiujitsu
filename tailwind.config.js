/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
      },
    },
    extend: {
      fontFamily: {
        display: ["'Oswald'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
      },
      colors: {
        brand: {
          dark: "#050505",
          gray: "#111111",
          red: "#c1121f",
          accent: "#f5f3f0",
          green: "#8B0000", // Deep red/maroon to match logo
        },
      },
      boxShadow: {
        brand: "0 25px 50px -12px rgba(0, 0, 0, 0.65)",
      },
      backgroundImage: {
        "hero-grid":
          "linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(180deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
}

