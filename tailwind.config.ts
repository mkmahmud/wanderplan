import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {

      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      colors: {
        // Green-based primary palette
        primary: {
          DEFAULT: '#065F46',      // Emerald Green
          dark: '#10B981',         // Forest Green
          light: '#D1FAE5',        // Mint Green
        },

        // Neutral palette
        neutral: {
          50: '#F9FAFB',           // Light Gray (background)
          100: '#FFFFFF',          // White (cards)
          700: '#111827',          // Charcoal (primary text)
          500: '#6B7280',          // Gray (secondary text)
          300: '#E5E7EB',          // Soft Gray (borders)
        },

        // Accent colors
        success: '#34D399',        // Spring Green
        warning: '#F59E0B',        // Amber
        error: '#EF4444',          // Red
        info: '#0EA5E9',           // Sky Blue
      },
      fontSize: {
        xs: '0.75rem',     // 12px
        sm: '0.875rem',    // 14px
        base: '1rem',      // 16px
        lg: '1.125rem',    // 18px
        xl: '1.25rem',     // 20px
        '2xl': '1.5rem',   // 24px
        '3xl': '1.875rem', // 30px
        '4xl': '2.25rem',  // 36px
        '5xl': '3rem',     // 48px
        '6xl': '4rem',     // 64px
      },
      keyframes: {
        shimmer: {
          '100%': {
            transform: 'translateX(100%)',
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};

export default config;
