/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
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
      padding: '16px',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1290px',
      },
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
