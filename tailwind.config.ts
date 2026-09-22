import type { Config } from 'tailwindcss'

/**
 * DeepBio Design System — Inspired by Boltz (boltz.com)
 * 
 * Ultra-clean, clear, minimalist biotechnology aesthetic:
 * - Clean porcelain, chalk, and crisp white grounds
 * - Deep slate & ink typography with maximum legibility
 * - Refined monoline borders & subtle sage/stone accents
 * - Monoline pill badges and spring-transition buttons
 */
const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Base Grounds
        surface: {
          DEFAULT: '#FFFFFF',
          secondary: '#F8F9FA',
          tertiary: '#F1F3F5',
          pale: '#F4F7F6', // Boltz-inspired sage-pale
        },
        paper: '#FFFFFF',
        chalk: '#F8FAFC',
        'chalk-warm': '#F9F8F6',
        
        // Deep compute & dark sections
        abyss: '#07121E',
        'abyss-card': '#0B1C2D',
        deep: '#0E2A44',

        // Brand & Accents
        brand: {
          DEFAULT: '#1E4E79',
          primary: '#1E4E79',
          dark: '#07121E',
          light: '#EBF3FA',
        },
        beam: '#0284C7',
        'beam-light': '#E0F2FE',
        helix: '#D97706',
        'helix-light': '#FEF3C7',
        emerald: '#059669',
        'emerald-light': '#ECFDF5',

        // Typography Colors
        ink: '#0A1118',
        'ink-secondary': '#475569',
        slate: '#64748B',
        'slate-light': '#94A3B8',

        // Borders & Rules
        rule: '#E2E8F0',
        'rule-warm': '#E8E6E1',
        'rule-strong': '#CBD5E1',
        'deep-rule': 'rgba(255, 255, 255, 0.12)',

        // Dark text tokens
        'on-deep': '#F8FAFC',
        'on-deep-mid': '#94A3B8',
        'on-deep-faint': '#64748B',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        'heading-xl': ['clamp(2.5rem, 4.2vw, 4.25rem)', { lineHeight: '1.04', letterSpacing: '-0.035em', fontWeight: '700' }],
        'heading-lg': ['clamp(2rem, 3.2vw, 3rem)', { lineHeight: '1.1', letterSpacing: '-0.028em', fontWeight: '700' }],
        'heading-md': ['clamp(1.5rem, 2.2vw, 2rem)', { lineHeight: '1.18', letterSpacing: '-0.022em', fontWeight: '600' }],
        display: ['clamp(2.25rem, 3.8vw, 3.75rem)', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        section: ['clamp(1.75rem, 2.6vw, 2.35rem)', { lineHeight: '1.14', letterSpacing: '-0.022em' }],
        deck: ['clamp(1.05rem, 1.2vw, 1.25rem)', { lineHeight: '1.6' }],
      },
      maxWidth: {
        container: '78rem',
        plate: '76rem',
        measure: '65ch',
        hero: '54ch',
      },
      borderRadius: {
        full: '9999px',
        DEFAULT: '6px',
        md: '8px',
        lg: '12px',
        xl: '16px',
        '2xl': '24px',
      },
      boxShadow: {
        subtle: '0 1px 3px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.02)',
        card: '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        nav: '0 1px 0 rgba(0, 0, 0, 0.06)',
      },
    },
  },
  plugins: [],
}

export default config
