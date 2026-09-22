import type { Config } from 'tailwindcss'

/**
 * The palette is derived from one fixed point: the logo blue, #205E92.
 *
 * Everything cool and blue-shifted, because the logo is and the logo is not
 * changing. `abyss` and `deep` are that same hue driven down in lightness
 * rather than a neutral near-black, so the navy bands and the mark read as one
 * family. `helix` is the only warm value in the system and it is not
 * decoration: it is the orange the DESeq2 volcano already uses for
 * up-regulated genes, so it appears where that means something and nowhere
 * else.
 *
 * Measured on the grounds they sit on: slate/chalk 4.6:1, beam/abyss 7.4:1,
 * brand/white 7.0:1 (so white-on-brand buttons pass too).
 */
const blue = {
  abyss: '#071A2C',
  deep: '#0E3355',
  brand: '#205E92',
  beam: '#5AB0E8',
  helix: '#E08A2C',
  chalk: '#F4F7FA',
  paper: '#FFFFFF',
  ink: '#0B1B2A',
  slate: '#56697E',
  rule: '#DCE3EA',
  'rule-strong': '#B9C5D1',
}

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ...blue,

        // On the navy grounds. Named for the ground they belong to so a
        // `text-on-deep` reads as a promise about contrast, not a guess.
        'on-deep': '#E8F0F7',
        'on-deep-mid': '#9FB4C7',
        'on-deep-faint': '#6E8399',
        'deep-rule': 'rgba(232, 240, 247, 0.14)',

        // `bg-brand` and `bg-brand-primary` both resolve, so the 23 legacy
        // routes that predate this palette keep compiling while they wait
        // their turn.
        brand: {
          DEFAULT: blue.brand,
          primary: blue.brand,
          secondary: blue.beam,
          dark: blue.abyss,
        },
        primary: blue.brand,
        signal: blue.helix,

        // Warm tokens from the previous direction, repointed at the blue
        // system. Nothing references these by intent any more; they exist so
        // an un-migrated page shifts with the rest of the site instead of
        // staying beige on its own.
        marble: blue.paper,
        parchment: blue.chalk,
        linen: '#E7EDF3',
        mist: blue.rule,
        laurel: blue.abyss,
        moss: blue.deep,
        sage: blue.beam,
        gild: blue.brand,
        'gild-soft': blue.beam,
        'paper-sunk': blue.chalk,
        'ink-soft': '#1B3247',
        'ink-mid': blue.slate,
        'ink-muted': blue.slate,
        'ink-faint': '#728598',

        // Figure colours. These belong inside a plot and nowhere else.
        figure: {
          blue: blue.brand,
          'blue-light': blue.beam,
          navy: blue.abyss,
          orange: blue.helix,
        },
      },
      fontFamily: {
        // Archivo is loaded with its width axis, which is what lets display
        // lines run expanded while body stays normal without a second family.
        // `serif` is aliased to it deliberately: legacy markup is full of
        // `font-serif`, and there is no serif in this system.
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        display: ['clamp(2.25rem, 3.8vw, 3.5rem)', { lineHeight: '1.06', letterSpacing: '-0.028em' }],
        section: ['clamp(1.75rem, 2.6vw, 2.35rem)', { lineHeight: '1.12', letterSpacing: '-0.022em' }],
        deck: ['clamp(1rem, 1.1vw, 1.125rem)', { lineHeight: '1.65' }],
      },
      maxWidth: {
        measure: '64ch',
        prose: '44rem',
        statement: '48rem',
        plate: '75rem',
        wide: '90rem',
      },
      boxShadow: {
        // One shadow: the nav once it has left the hero and needs to sit on
        // top of content rather than beside it.
        bar: '0 1px 0 rgba(11, 27, 42, 0.08), 0 8px 24px -16px rgba(11, 27, 42, 0.30)',
      },
      borderRadius: {
        DEFAULT: '2px',
      },
    },
  },
  plugins: [],
}

export default config
