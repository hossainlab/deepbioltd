import React from 'react'

/**
 * The hero image under the "Foundational AI for Life Sciences" line.
 *
 * It replaces VolcanoMark in that slot. The volcano is a good drawing and it
 * stays in the repository, but it is a picture of a negative-binomial test —
 * the signature of the analysis catalogue, not of a foundation model. Under a
 * headline about sequence and structure models it would have argued against
 * the words above it.
 *
 * What is drawn here is a contact arc diagram: a residue track along the
 * bottom, and above it the pairs of positions a protein model believes touch
 * in three dimensions. It is the standard way of showing what attention over a
 * biological sequence actually found.
 *
 * Why this shape and not another:
 *
 * - The logo mark is two strands with rungs between them. The residue track is
 *   that rung device run to full width, and every arc springs from two of its
 *   ticks. The brand geometry and the method are the same picture, which is the
 *   rule the rest of this system is built on.
 *
 * - It carries the argument the headline makes. Short arcs are local contacts:
 *   dense, pale, and findable by methods that predate any of this. The few long
 *   arcs are residues far apart in sequence and adjacent in the fold, and those
 *   are what a model trained on the whole protein universe buys you over an
 *   alignment. Marking them in `helix` is the one licensed use of that token:
 *   it is the semantic orange, never chrome, and a predicted long-range contact
 *   is exactly a semantic event.
 *
 * As with the volcano: the distribution is generated, not measured. It is a
 * portrait of the method, not a claim about a target, which is why the caption
 * beside it points at a report where the real numbers are.
 */

const WIDTH = 640
const HEIGHT = 500

const PAD = { top: 30, right: 26, bottom: 46, left: 26 }
const PW = WIDTH - PAD.left - PAD.right
const PH = HEIGHT - PAD.top - PAD.bottom

/** Residue positions along the track. */
const N = 68

/** Where the sequence track sits. Arcs occupy everything above it. */
const TRACK_Y = PAD.top + PH

/** Deterministic PRNG. The figure must be byte-identical on server and client. */
function mulberry32(seed: number) {
  let a = seed >>> 0
  return () => {
    a = (a + 0x6d2b79f5) >>> 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

const rx = (i: number) => PAD.left + (i / (N - 1)) * PW

type Range = 'local' | 'medium' | 'long'

interface Contact {
  i: number
  j: number
  range: Range
  weight: number
}

function buildContacts(): Contact[] {
  const rand = mulberry32(20592) // the logo blue, as a number
  const out: Contact[] = []
  const seen = new Set<string>()

  const push = (i: number, j: number, range: Range, weight: number) => {
    if (i < 0 || j > N - 1 || i >= j) return
    const key = `${i}:${j}`
    if (seen.has(key)) return
    seen.add(key)
    out.push({ i, j, range, weight })
  }

  // Local contacts: the helical i→i+3/i+4 ladder and its neighbours. Dense and
  // pale, because this is the band every method already gets right.
  for (let i = 0; i < N - 4; i++) {
    if (rand() < 0.62) push(i, i + 3 + Math.floor(rand() * 2), 'local', 0.3 + rand() * 0.3)
  }

  // Medium range: the turns and the strand pairings inside a domain.
  for (let k = 0; k < 26; k++) {
    const i = Math.floor(rand() * (N - 14))
    push(i, i + 8 + Math.floor(rand() * 12), 'medium', 0.35 + rand() * 0.4)
  }

  // Long range: residues far apart in sequence, adjacent in the fold. Few, and
  // the reason the picture is here.
  const anchors: Array<[number, number]> = [
    [6, 57],
    [14, 44],
    [21, 63],
    [9, 38],
    [30, 61],
  ]
  anchors.forEach(([i, j], k) => push(i, j, 'long', k < 3 ? 0.92 : 0.6))

  // Draw the pale band first so the marked contacts sit on top of it.
  const order: Record<Range, number> = { local: 0, medium: 1, long: 2 }
  return out.sort((a, b) => order[a.range] - order[b.range])
}

const contacts = buildContacts()

/**
 * Arc from i to j: a quadratic curve whose apex rises with the sequence
 * separation, so the long-range contacts are also the tall ones and the
 * hierarchy reads before any colour does.
 */
function arcPath(i: number, j: number) {
  const x1 = rx(i)
  const x2 = rx(j)
  const span = x2 - x1
  // The control point sits at twice the intended apex height.
  const apex = Math.min(span * 0.62, PH * 0.94)
  return `M ${x1.toFixed(1)} ${TRACK_Y} Q ${((x1 + x2) / 2).toFixed(1)} ${(
    TRACK_Y -
    apex * 2
  ).toFixed(1)} ${x2.toFixed(1)} ${TRACK_Y}`
}

const STROKE: Record<Range, string> = {
  local: 'rgba(159, 180, 199, 0.30)',
  medium: '#5AB0E8',
  long: '#E08A2C',
}

const WIDTH_BY_RANGE: Record<Range, number> = {
  local: 1,
  medium: 1.15,
  long: 1.6,
}

/** Residues that anchor a long-range contact get a tick of their own colour. */
const longResidues = new Set(
  contacts.filter((c) => c.range === 'long').flatMap((c) => [c.i, c.j]),
)

export const ContactMark: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
    className={className}
    role="img"
    aria-label="Contact arc diagram: a protein sequence drawn as a track of residues, with arcs above it joining the pairs of positions a structure model predicts are in contact. Short pale arcs are local contacts; a few tall marked arcs join residues far apart in the sequence and adjacent in the folded structure."
  >
    <g fill="none" strokeLinecap="round">
      {contacts.map((c, k) => (
        <path
          key={k}
          d={arcPath(c.i, c.j)}
          stroke={STROKE[c.range]}
          strokeWidth={WIDTH_BY_RANGE[c.range]}
          strokeOpacity={c.range === 'local' ? 1 : c.weight}
        />
      ))}
    </g>

    {/* The residue track. This is the `.rung` device at full width: a baseline
        with interval ticks, the same marks the logo draws between its two
        strands. */}
    <line
      x1={PAD.left}
      y1={TRACK_Y}
      x2={PAD.left + PW}
      y2={TRACK_Y}
      stroke="rgba(232, 240, 247, 0.30)"
      strokeWidth="1"
    />
    <g strokeWidth="1.5" strokeLinecap="round">
      {Array.from({ length: N }, (_, i) => (
        <line
          key={i}
          x1={rx(i).toFixed(1)}
          y1={TRACK_Y}
          x2={rx(i).toFixed(1)}
          y2={TRACK_Y + (longResidues.has(i) ? 11 : 6)}
          stroke={longResidues.has(i) ? '#E08A2C' : 'rgba(232, 240, 247, 0.34)'}
        />
      ))}
    </g>

    {/* Labels. Mono, because they are units and indices. */}
    <g
      fill="#6E8399"
      fontFamily="var(--font-mono), ui-monospace, monospace"
      fontSize="11"
    >
      <text x={PAD.left} y={TRACK_Y + 30}>
        1
      </text>
      <text x={PAD.left + PW} y={TRACK_Y + 30} textAnchor="end">
        {N}
      </text>
      <text x={PAD.left + PW / 2} y={HEIGHT - 8} textAnchor="middle" fill="#9FB4C7">
        residue index
      </text>
      <text x={PAD.left} y={PAD.top - 12} fill="#9FB4C7">
        predicted contacts
      </text>
    </g>
  </svg>
)
