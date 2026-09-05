/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
    "./assets-demo.html"
  ],
  theme: {
    extend: {
      colors: {
        // Colores corporativos Semper Fi
        'semperfi': {
          DEFAULT: '#2ebaf8',
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#5dcbfb',
          500: '#2ebaf8', // Color principal
          600: '#1a9ad6',
          700: '#0d94c9',
          800: '#0a7ab5',
          900: '#0a1628', // Azul muy oscuro
        },
      },
      backgroundImage: {
        'gradient-semperfi': 'linear-gradient(135deg, #2ebaf8 0%, #1a9ad6 50%, #0d94c9 100%)',
        'gradient-semperfi-radial': 'radial-gradient(circle, #2ebaf8 0%, #1a9ad6 100%)',
      },
      boxShadow: {
        'semperfi': '0 10px 40px rgba(46, 186, 248, 0.3)',
        'semperfi-lg': '0 20px 60px rgba(46, 186, 248, 0.4)',
        'semperfi-xl': '0 30px 80px rgba(46, 186, 248, 0.5)',
      },
      fontFamily: {
        'serif': ['Gestura Headline', 'Georgia', 'serif'],
        'sans': ['Inter', 'sans-serif'],
        'mono': ['Roboto Mono', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
  plugins: [],
}
