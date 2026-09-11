import type { Config } from 'tailwindcss'

/**
 * Warm, green-shifted grounds with a single gold accent (see RESTYLE-SCOPE.md §1).
 *
 * Two values are deliberately off-reference: `ink-faint` and `sage` were
 * darkened/lightened until they clear 4.5:1 on the grounds they sit on
 * (marble/parchment and laurel respectively). `gild` is 3.2:1 on marble, so
 * it is a border and focus-ring colour only — never text on a light ground.
 */
const warm = {
  marble: '#FAF8F2',
  parchment: '#F2EEE3',
  linen: '#E8E2D4',
  mist: '#D9D5C7',
  ink: '#171B14',
  'ink-soft': '#2C332A',
  'ink-muted': '#5B6357',
  'ink-faint': '#666D5F',
  laurel: '#2F3D2C',
  moss: '#56684C',
  sage: '#A3B294',
  gild: '#A8873F',
  'gild-soft': '#C9AB6B',
}

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ...warm,

        // Legacy aliases, re-pointed at the warm values so every route shifts
        // at once. Phases 2–5 rename call sites to the tokens above; delete
        // these once nothing references them.
        paper: warm.marble,
        'paper-sunk': warm.parchment,
        'ink-mid': warm['ink-muted'],
        rule: warm.mist,
        'rule-strong': '#BDB8A8',
        deep: warm.laurel,
        'deep-rule': 'rgba(250, 248, 242, 0.16)',

        // The DESeq2 volcano colours. Data-only: they belong inside figures,
        // not in interface chrome.
        figure: {
          blue: '#205E92',
          'blue-light': '#4184C4',
          navy: '#0A2540',
          orange: '#C77A16',
        },
        // Legacy names for the same values, still used by un-migrated pages.
        primary: '#205E92',
        brand: {
          primary: '#205E92',
          secondary: '#4184C4',
          dark: '#0A2540',
        },
        signal: '#C77A16',
      },
      fontFamily: {
        // next/font exposes hashed families through these variables only;
        // bare names silently fall back to generic. There is no UI sans in
        // this system, so `sans` resolves to the serif too — that keeps
        // Tailwind's preflight and every legacy `font-sans` on EB Garamond.
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        sans: ['var(--font-serif)', 'Georgia', 'serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        display: ['clamp(2.5rem, 6vw, 5rem)', { lineHeight: '1.05', letterSpacing: '-0.015em' }],
        section: ['clamp(2.25rem, 5vw, 3.75rem)', { lineHeight: '1.1', letterSpacing: '-0.012em' }],
        deck: ['clamp(1.55rem, 2.6vw, 1.95rem)', { lineHeight: '1.35' }],
      },
      maxWidth: {
        measure: '68ch',
        prose: '49rem',
        statement: '52rem',
        plate: '78rem',
        wide: '96rem',
      },
      boxShadow: {
        // The only shadow in the system: the floating nav capsule.
        capsule: '0 10px 30px -12px rgba(23, 27, 20, 0.18)',
      },
    },
  },
  plugins: [],
}

export default config
