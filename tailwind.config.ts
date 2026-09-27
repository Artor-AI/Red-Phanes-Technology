import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background) / <alpha-value>)',
        foreground: 'hsl(var(--foreground) / <alpha-value>)',
        panel: 'hsl(var(--panel) / <alpha-value>)',
        'accent-soft': 'hsl(var(--accent-soft) / <alpha-value>)',
        muted: {
          DEFAULT: 'hsl(var(--panel) / <alpha-value>)',
          foreground: 'hsl(var(--muted-foreground) / <alpha-value>)',
        },
        border: 'hsl(var(--border) / <alpha-value>)',
        primary: {
          DEFAULT: 'hsl(var(--primary) / <alpha-value>)',
          foreground: 'hsl(var(--primary-foreground) / <alpha-value>)',
        },
        'overlay-bg': 'hsl(var(--overlay-bg) / <alpha-value>)',
        'overlay-fg': 'hsl(var(--overlay-fg) / <alpha-value>)',
        'overlay-muted': 'hsl(var(--overlay-muted) / <alpha-value>)',
        'overlay-border': 'hsl(var(--overlay-border) / <alpha-value>)',
        'overlay-accent': 'hsl(var(--overlay-accent) / <alpha-value>)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 8px)',
        sm: 'calc(var(--radius) - 12px)',
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;