/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
        keyframes: {
          fadeUp: {
            '0%': { opacity: '0', transform: 'translateY(40px)' },
            '100%': { opacity: '1', transform: 'translateY(0)' },
          },
          float: {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-15px)' },
          },
        },
        animation: {
          fadeUp: 'fadeUp 1s ease-out forwards',
          float: 'float 3s ease-in-out infinite',
        },
    },
  },
  plugins: [],
}