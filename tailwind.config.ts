import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0A2E65",
          50: "#eaf0fa",
          100: "#cdd9f0",
          200: "#9bb3e0",
          300: "#6989d0",
          400: "#3a5fb8",
          500: "#1f428f",
          600: "#163576",
          700: "#0A2E65",
          800: "#072449",
          900: "#04162e",
        },
        secondary: {
          DEFAULT: "#FDB913",
          50: "#fff9e6",
          100: "#ffefbf",
          200: "#ffe085",
          300: "#fed04b",
          400: "#FDB913",
          500: "#e3a004",
          600: "#b87d03",
          700: "#8c5d05",
          800: "#603f08",
          900: "#3a2605",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-poppins)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "hero-grid":
          "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-18px)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        shimmer: "shimmer 2s infinite",
        "gradient-x": "gradient-x 8s ease infinite",
      },
    },
  },
  plugins: [],
};

export default config;
