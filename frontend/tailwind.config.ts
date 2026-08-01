import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Editorial midnight palette
        'dark-bg': '#141825',
        'dark-surface': '#1b2031',
        'dark-surface-light': '#252b3e',

        // Warm coral accent palette (kept as existing utility names)
        'neon-cyan': '#ef6a64',
        'neon-pink': '#d9505b',
        'neon-green': '#8fcb9b',
        
        // Text colors
        'text-primary': '#f4f0ec',
        'text-secondary': '#b6b5bd',
        'text-muted': '#777b8e',
      },
      fontFamily: {
        sans: ['Inter', 'Geist Sans', 'system-ui', 'sans-serif'],
        display: ['Geist Sans', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'pulse-glow': 'pulseGlow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 3s ease-in-out infinite',
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
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        pulseGlow: {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(0, 217, 255, 0.5)',
          },
          '50%': {
            boxShadow: '0 0 40px rgba(0, 217, 255, 0.8)',
          },
        },
        glow: {
          '0%, 100%': { 
            textShadow: '0 0 20px rgba(0, 217, 255, 0.5)',
          },
          '50%': {
            textShadow: '0 0 30px rgba(0, 217, 255, 0.8), 0 0 40px rgba(255, 0, 110, 0.5)',
          },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glow-cyan': '0 12px 30px rgba(239, 106, 100, 0.22)',
        'glow-pink': '0 12px 30px rgba(217, 80, 91, 0.22)',
      },
    },
  },
}

export default config
