/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'c-bg-primary': '#0d0f13',
        'c-bg-secondary': '#1A1D25',
        'c-bg-tertiary': '#2A2D35',
        'c-text-primary': '#E5E7EB',
        'c-text-secondary': '#9CA3AF',
        'c-text-tertiary': '#6B7280',
        'c-primary': '#00E0BE',
        'c-primary-hover': '#00C4A7',
        'c-success': '#10B981',
        'c-danger': '#EF4444',
        'c-border': '#2A2D35',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'sans-serif'],
      },
      borderRadius: {
        'sm': '8px',
        'md': '12px',
        'lg': '16px',
        'xl': '20px',
        '2xl': '24px',
      },
      keyframes: {
        hue: {
          '0%': { filter: 'hue-rotate(0deg)' },
          '100%': { filter: 'hue-rotate(360deg)' },
        },
      },
      animation: {
        hue: 'hue 6s linear infinite',
      },
      backgroundImage: {
        'noise': "url('/noise.svg')",
      },
      boxShadow: {
        'glow-primary': '0 0 20px rgba(0, 224, 190, 0.3)',
        'glow-primary-light': '0 0 20px rgba(0, 224, 190, 0.15)',
      }
    },
  },
  plugins: [],
}