/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: '#070b14',
          card: '#0d1322',
          surface: '#121b2f',
          border: '#1f2b48',
          accent: '#00f0ff',
          neon: '#00d2ff',
          green: '#10b981',
          emerald: '#059669',
          purple: '#8b5cf6',
          muted: '#94a3b8',
          text: '#f8fafc',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'glow-cyan': '0 0 25px -5px rgba(0, 240, 255, 0.3)',
        'glow-sm': '0 0 15px -3px rgba(0, 240, 255, 0.25)',
        'glow-emerald': '0 0 25px -5px rgba(16, 185, 129, 0.3)',
        'glow-purple': '0 0 25px -5px rgba(139, 92, 246, 0.3)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
