/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Warm paper base — the whole site sits on this, not pure white,
        // so the black ink and colour blocks read as printed, not digital.
        paper: {
          DEFAULT: '#f3efe4',
          deep: '#e9e2d1',
        },
        // Warm near-black — every border, shadow and body text.
        ink: {
          DEFAULT: '#17140d',
          soft: '#3a352b',
        },
        // Brand green (visiting card) — the primary action colour.
        green: {
          DEFAULT: '#0c8a46',
          deep: '#0a6e38',
          bright: '#16b45f',
        },
        // Brand yellow — highlights, badges, one hero block.
        yellow: {
          DEFAULT: '#ffce34',
          deep: '#f2b705',
        },
        whatsapp: '#1fb658',
        red: '#e0503a',
        muted: '#6b6459',
      },
      fontFamily: {
        // Space Grotesk reads engineered/technical — right for a repair
        // workshop. Space Mono carries the "job ticket" labels.
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        mono: ['"Space Mono"', 'ui-monospace', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        // Hard offset shadows — the signature of the whole look. No blur.
        hard: '4px 4px 0 0 #17140d',
        'hard-sm': '3px 3px 0 0 #17140d',
        'hard-lg': '7px 7px 0 0 #17140d',
        'hard-paper': '4px 4px 0 0 #f3efe4',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
      },
    },
  },
  plugins: [],
}
