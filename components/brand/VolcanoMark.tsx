import React from 'react'

/**
 * The hero image, drawn rather than exported.
 *
 * The logo mark is two strands diverging from a crossing point with rungs
 * between them. A volcano plot — the single most-run output in this catalogue —
 * is two wings diverging from a centre with threshold rules across them. They
 * are the same shape, so the brand mark and the work it sells can be the same
 * picture, and the page needs exactly one bold element instead of a stock
 * photograph.
 *
 * Why not the real PNG: /case_studies/img/deseq2_qc_volcano_plot.png is a
 * matplotlib export. It bakes in its own bold-sans title that fights the page
 * heading, sits on a white ground that reads as a box on the navy band, and
 * renders 8pt gene labels at display scale. It stays on /case-studies, where it
 * is evidence at reading size. Here the same result is redrawn at display
 * scale in the page's own type and colour.
 *
 * The distribution is generated, not measured — it is a portrait of the method,
 * not a claim about a dataset. The real numbers are one click away in the
 * linked report, which is why the caption points at it.
 */

const WIDTH = 640
const HEIGHT = 500

// Plot area inside the frame.
const PAD = { top: 26, right: 22, bottom: 40, left: 46 }
const PW = WIDTH - PAD.left - PAD.right
const PH = HEIGHT - PAD.top - PAD.bottom

const X_MAX = 7 // log2 fold change, symmetric
const Y_MAX = 50 // -log10 adjusted p

const LFC_CUT = 1
const SIG_CUT = 1.301 // -log10(0.05)

/** Deterministic PRNG. The figure must be byte-identical on every render. */
function mulberry32(seed: number) {
  let a = seed >>> 0
  return () => {
    a = (a + 0x6d2b79f5) >>> 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

interface Point {
  x: number
  y: number
  r: number
  kind: 'ns' | 'down' | 'up'
}

function buildPoints(): Point[] {
  const rand = mulberry32(20592) // the logo blue, as a number
  const pts: Point[] = []

  while (pts.length < 1200) {
    // Fold change: dense at zero with a tail either side. Out-of-range draws
    // are discarded rather than clamped — clamping stacks every overshoot on
    // the axis limit and leaves a solid bar of points down the edge.
    const sign = rand() < 0.5 ? -1 : 1
    const x = sign * Math.pow(rand(), 2.2) * X_MAX * 1.2
    if (Math.abs(x) > X_MAX * 0.96) continue

    // Significance rises with effect size, which is what gives a volcano its
    // two swept wings. The envelope sets how high a gene at this fold change
    // can reach; the squared draw keeps the population piled at the bottom,
    // where most genes in a real run sit.
    const drive = Math.abs(x) / X_MAX
    const envelope = 20 + 30 * Math.pow(drive, 0.8)
    const y = envelope * Math.pow(rand(), 2)

    const significant = Math.abs(x) >= LFC_CUT && y >= SIG_CUT
    pts.push({
      x,
      y,
      r: significant ? 2.2 : 1.9,
      kind: !significant ? 'ns' : x < 0 ? 'down' : 'up',
    })
  }

  // Draw the non-significant cloud first so the coloured wings sit on top.
  const order = { ns: 0, down: 1, up: 2 }
  return pts.sort((a, b) => order[a.kind] - order[b.kind])
}

const points = buildPoints()

const sx = (x: number) => PAD.left + ((x + X_MAX) / (2 * X_MAX)) * PW
const sy = (y: number) => PAD.top + PH - (y / Y_MAX) * PH

const FILL = {
  ns: 'rgba(159, 180, 199, 0.28)',
  down: '#5AB0E8',
  up: '#E08A2C',
} as const

export const VolcanoMark: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
    className={className}
    role="img"
    aria-label="Volcano plot: thousands of genes plotted by fold change against statistical significance, with down-regulated genes to the left and up-regulated genes to the right."
  >
    {/* Axes. Drawn as two rules meeting at the origin corner, the same weight
        as the rung device. */}
    <g stroke="rgba(232, 240, 247, 0.22)" strokeWidth="1">
      <line x1={PAD.left} y1={PAD.top} x2={PAD.left} y2={PAD.top + PH} />
      <line x1={PAD.left} y1={PAD.top + PH} x2={PAD.left + PW} y2={PAD.top + PH} />
    </g>

    {/* Thresholds: the two fold-change cuts and the significance cut. These are
        the rungs — the same interval marks the mark carries. */}
    <g stroke="rgba(232, 240, 247, 0.28)" strokeWidth="1" strokeDasharray="3 5">
      <line x1={sx(-LFC_CUT)} y1={PAD.top} x2={sx(-LFC_CUT)} y2={PAD.top + PH} />
      <line x1={sx(LFC_CUT)} y1={PAD.top} x2={sx(LFC_CUT)} y2={PAD.top + PH} />
      <line x1={PAD.left} y1={sy(SIG_CUT)} x2={PAD.left + PW} y2={sy(SIG_CUT)} />
    </g>

    {points.map((p, i) => (
      <circle
        key={i}
        cx={sx(p.x).toFixed(1)}
        cy={sy(p.y).toFixed(1)}
        r={p.r}
        fill={FILL[p.kind]}
        fillOpacity={p.kind === 'ns' ? 1 : 0.8}
      />
    ))}

    {/* Axis labels. Mono, because they are units. */}
    <g
      fill="#6E8399"
      fontFamily="var(--font-mono), ui-monospace, monospace"
      fontSize="11"
    >
      {[-4, 0, 4].map((t) => (
        <text key={t} x={sx(t)} y={PAD.top + PH + 18} textAnchor="middle">
          {t}
        </text>
      ))}
      {[0, 25, 50].map((t) => (
        <text key={t} x={PAD.left - 10} y={sy(t) + 4} textAnchor="end">
          {t}
        </text>
      ))}
      <text x={PAD.left + PW / 2} y={HEIGHT - 6} textAnchor="middle" fill="#9FB4C7">
        log2 fold change
      </text>
      <text
        x={-(PAD.top + PH / 2)}
        y={13}
        textAnchor="middle"
        transform="rotate(-90)"
        fill="#9FB4C7"
      >
        −log10 padj
      </text>
    </g>
  </svg>
)
