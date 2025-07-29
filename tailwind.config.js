/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#004aad',
        secondary: '#0066ff',
        tertiary: '#99a0a3',
        background: '#ffffff',
        dark: {
          900: '#0a0f1c',
          800: '#1a2332',
          700: '#2a3441',
        },
        accent: {
          blue: '#004aad',
          light: '#0066ff',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Space Grotesk', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #004aad' },
          '100%': { boxShadow: '0 0 20px #004aad, 0 0 30px #004aad' },
        },
      },
    },
  },
  plugins: [],
};