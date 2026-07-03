/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Brand green — pulled from the shop's visiting card, laddered so
        // buttons/gradients/dark sections all draw from one scale.
        brand: {
          50: '#e6f5ec',
          100: '#c6e9d3',
          500: '#0c8a46',
          600: '#0a6e38',
          700: '#084f29',
          900: '#06331b',
        },
        // Near-black greens for footer / guarantee band.
        ink: {
          950: '#0a1811',
          900: '#0d1f16',
          700: '#1a2b21',
        },
        gold: {
          DEFAULT: '#ffc82c',
          soft: '#fff4d6',
        },
        whatsapp: {
          DEFAULT: '#1fb658',
          deep: '#17954a',
        },
        paper: '#f6f9f7',
        muted: '#51665b',
        faint: '#7d8f85',
        line: '#e2e9e4',
      },
      fontFamily: {
        display: ['Manrope', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 3px rgba(13,31,22,0.07), 0 4px 14px -6px rgba(13,31,22,0.08)',
        pop: '0 6px 24px -8px rgba(13,31,22,0.16)',
        float: '0 20px 50px -20px rgba(13,31,22,0.28)',
        cta: '0 8px 24px -8px rgba(12,138,70,0.55)',
        wa: '0 8px 24px -8px rgba(31,182,88,0.55)',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 32s linear infinite',
      },
    },
  },
  plugins: [],
}
