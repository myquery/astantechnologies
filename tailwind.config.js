/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#2a3ef4",
        secondary: "#5dd3ff",
        tertiary: "#8ea4c7",
        background: "#ffffff",
        brand: {
          ink: "#08111f",
          panel: "#0f1d35",
          blue: "#2a3ef4",
          sky: "#5dd3ff",
          mist: "#dbe7ff",
          paper: "#f5f7fb",
          slate: "#8ea4c7",
        },
        dark: {
          900: "#0a0f1c",
          800: "#1a2332",
          700: "#2a3441",
        },
        accent: {
          blue: "#2a3ef4",
          light: "#5dd3ff",
        },
      },
      fontFamily: {
        sans: ["Manrope", "system-ui", "sans-serif"],
        display: ["Sora", "Manrope", "system-ui", "sans-serif"],
        mono: ["IBM Plex Mono", "monospace"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        glow: "glow 2s ease-in-out infinite alternate",
        floaty: "floaty 14s ease-in-out infinite",
        "pulse-slow": "pulseSlow 8s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        glow: {
          "0%": { boxShadow: "0 0 5px #2a3ef4" },
          "100%": { boxShadow: "0 0 20px #2a3ef4, 0 0 30px #2a3ef4" },
        },
        floaty: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        pulseSlow: {
          "0%, 100%": { opacity: "0.45" },
          "50%": { opacity: "0.8" },
        },
      },
    },
  },
  plugins: [],
};
