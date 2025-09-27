import type { Config } from 'tailwindcss'

const withOpacity = (variable: string) => {
  return (({ opacityValue }: { opacityValue?: string }) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`
    }
    return `rgb(var(${variable}) / ${opacityValue})`
  }) as unknown as string
}

const config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: withOpacity('--color-primary-600'),
          50: withOpacity('--color-primary-50'),
          100: withOpacity('--color-primary-100'),
          200: withOpacity('--color-primary-200'),
          300: withOpacity('--color-primary-300'),
          400: withOpacity('--color-primary-400'),
          500: withOpacity('--color-primary-500'),
          600: withOpacity('--color-primary-600'),
          700: withOpacity('--color-primary-700'),
          800: withOpacity('--color-primary-800'),
          900: withOpacity('--color-primary-900'),
        },
        accent: {
          DEFAULT: withOpacity('--color-accent-500'),
          400: withOpacity('--color-accent-400'),
          500: withOpacity('--color-accent-500'),
          600: withOpacity('--color-accent-600'),
        },
        ink: {
          DEFAULT: withOpacity('--color-ink'),
          muted: withOpacity('--color-muted'),
        },
        surface: {
          DEFAULT: withOpacity('--color-surface'),
          elevated: withOpacity('--color-surface-elevated'),
        },
      },
      boxShadow: {
        soft: 'var(--shadow-soft)',
        glow: 'var(--shadow-glow)',
      },
      borderRadius: {
        xl: '1.5rem',
        '3xl': '2.25rem',
      },
      backdropBlur: {
        30: '30px',
      },
    },
  },
  plugins: [],
} satisfies Config

export default config
