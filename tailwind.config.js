/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#f5f6f4',
          100: '#eaede7',
          200: '#d7ddd2',
          300: '#b8c3b1',
          400: '#94a48c',
          500: '#73846b',
          600: '#556453',
          700: '#485546',
          800: '#3c473a',
          900: '#323b31',
          950: '#1b201a',
        },
        surface: {
          canvas: '#f9f9f7',
          card: '#ffffff',
          muted: '#f2f3ee',
          highlight: '#ebede6',
          border: '#e3e6de',
          dark: '#141713',
        }
      },
      fontFamily: {
        serif: ['Newsreader', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(26, 29, 26, 0.05)',
        'elevated': '0 10px 30px -4px rgba(26, 29, 26, 0.08)',
        'sage': '0 8px 25px -4px rgba(85, 100, 83, 0.2)',
      }
    },
  },
  plugins: [],
}
