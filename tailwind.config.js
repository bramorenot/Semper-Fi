/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Gestura Headline', 'Georgia', 'serif'],
        mono: ['Roboto Mono', 'monospace'],
      },
      colors: {
        'brand-green': '#10b981',
        'brand-blue': '#3b82f6',
        'brand-orange': '#f59e0b',
      },
    },
  },
  plugins: [],
}
