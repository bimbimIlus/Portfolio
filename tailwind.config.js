/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}', './index.html'],
  safelist: [
    'hidden',
    'block',
    'hamburger-active',
    'rotate-45',
    '-rotate-45',
    'scale-0'
  ],
  theme: {
    container: {
      center: true,
      padding: '16px'
    },
    extend: {
      colors: {
        primary: '#14b8a6',
        secondary: '#64748b',
        dark: '#0f172a'
      },
      screens: {
        '2xl': '1290px',
      }
    },
  },
  plugins: [],
}
