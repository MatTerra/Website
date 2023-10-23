/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          100: '#F4F7F6',
          200: '#E2E9EB',
          300: '#CED8DD',
          400: '#A4AFB5',
          500: '#798387',
          600: '#5E5F60',
          700: '#3C3C3B',
          800: '#2E2E2D',
          900: '#1E1D1A',
        },
        blue: {
          100: '#D5FFFF',
          200: '#C3FFFF',
          300: '#ACFFFF',
          400: '#8CFFFF',
          500: '#6EFFFF',
          600: '#3EDAFF',
          700: '#2CC7FF',
          800: '#19B4DF',
          900: '#07A3AB',
        }
      },
      spacing: {
        '9/16': '56.25%',
        '3/4': '75%',
        '1/1': '100%',
      },
      fontFamily: {
        bandung: ['var(--font-bandung)', 'sans-serif'],
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '2.5rem',
        '5xl': '3.25rem',
        '6xl': '4rem',
      },
      inset: {
        'full': '100%',
      },
      letterSpacing: {
        tighter: '-0.02em',
        tight: '-0.01em',
        normal: '0',
        wide: '0.01em',
        wider: '0.02em',
        widest: '0.4em',
      },
      minWidth: {
        '10': '2.5rem',
      },
      scale: {
        '98': '.98'
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
