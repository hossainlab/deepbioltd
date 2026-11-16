import type { ReactNode } from 'react'
import type { ServiceCategory } from '@/lib/services/data'
import { glyphStroke } from './PubEntry'

/**
 * Line drawings (80×60 viewBox) standing in for figures on services that have
 * no worked example. One per service, so neighbouring rows don't repeat;
 * unknown ids fall back to a drawing for their category.
 */

const dot = (cx: number, cy: number, r = 2.2, o = 1) => (
  <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={r} fill="currentColor" stroke="none" opacity={o} />
)

const byService: Record<string, ReactNode> = {
  // Three labelled clusters of cells in an embedding.
  'scrna-cell-annotation': (
    <>
      {[
        [18, 20], [22, 16], [24, 23], [15, 25], [20, 27],
        [52, 14], [57, 18], [50, 20], [55, 23], [60, 13],
        [38, 42], [43, 46], [35, 47], [41, 38], [46, 41],
      ].map(([x, y], i) => dot(x, y, 2.2, i < 5 ? 1 : i < 10 ? 0.6 : 0.35))}
      <circle cx="20" cy="22" r="10" opacity={0.4} />
      <circle cx="55" cy="18" r="10" opacity={0.4} />
      <circle cx="41" cy="43" r="10" opacity={0.4} />
    </>
  ),
  // A branching trajectory with cells along it.
  'pseudotime-trajectory': (
    <>
      <path d="M8 46C22 44 30 36 38 30S54 14 70 12" />
      <path d="M38 30c8 4 18 10 32 12" opacity={0.6} />
      {[[8, 46], [20, 43], [30, 36], [38, 30], [52, 19], [70, 12], [54, 37], [70, 42]].map(([x, y], i) =>
        dot(x, y, 2.6, 0.3 + i * 0.09),
      )}
    </>
  ),
  // A grid of capture spots over a tissue outline.
  'spatial-transcriptomics': (
    <>
      <path d="M14 18c8-10 32-12 46-4s10 28-4 34-36 4-42-8-6-14 0-22z" opacity={0.5} />
      {Array.from({ length: 5 }, (_, r) =>
        Array.from({ length: 7 }, (_, c) => {
          const x = 16 + c * 8 + (r % 2) * 4
          const y = 14 + r * 8
          const inside = (x - 38) ** 2 / 700 + (y - 30) ** 2 / 300 < 1
          return inside ? dot(x, y, 1.9, (r + c) % 3 === 0 ? 1 : 0.35) : null
        }),
      )}
    </>
  ),
  // Two gene modules joined by a hub edge.
  'gene-coexpression-network': (
    <>
      <path d="M14 18l10 10-12 8M24 28l-10-10M24 28l8 14M24 28l20 2" opacity={0.6} />
      <path d="M44 30l12-14 12 10-8 14-16-10M56 16l4 24" opacity={0.6} />
      {[[14, 18], [12, 36], [32, 42], [56, 16], [68, 26], [60, 40]].map(([x, y]) => dot(x, y, 2.6, 0.6))}
      {dot(24, 28, 3.6)}
      {dot(44, 30, 3.6)}
    </>
  ),
  // Ligand passing from a sender cell to a receptor on a receiver cell.
  'cell-cell-communication': (
    <>
      <circle cx="18" cy="30" r="12" />
      <circle cx="62" cy="30" r="12" />
      <path d="M32 26h14M42 22l4 4-4 4" />
      <path d="M48 34H34M38 30l-4 4 4 4" opacity={0.5} />
      {dot(18, 30, 3)}
      {dot(62, 30, 3)}
    </>
  ),
  // Association peak with the causal variant circled.
  'fine-mapping': (
    <>
      <path d="M8 50h64" opacity={0.5} />
      {[
        [10, 46], [14, 44], [18, 47], [22, 42], [26, 38], [30, 30], [34, 22], [38, 14],
        [42, 20], [46, 30], [50, 38], [54, 43], [58, 46], [62, 44], [66, 47], [70, 45],
      ].map(([x, y]) => dot(x, y, 1.9, 0.55))}
      {dot(38, 14, 2.4)}
      <circle cx="38" cy="14" r="6" />
    </>
  ),
  // Instrument → exposure → outcome.
  'mendelian-randomization': (
    <>
      <circle cx="12" cy="30" r="7" />
      <circle cx="40" cy="30" r="7" />
      <circle cx="68" cy="30" r="7" />
      <path d="M19 30h12M28 27l3 3-3 3M47 30h12M56 27l3 3-3 3" />
      <path d="M40 18c0-8 28-8 28 4" strokeDasharray="2.5 3" opacity={0.5} />
      <path d="M12 30h0" />
    </>
  ),
  // Sequence with one variant base flagged.
  'variant-annotation': (
    <>
      {Array.from({ length: 7 }, (_, i) => (
        <rect key={i} x={8 + i * 9.5} y="26" width="7" height="10" rx="1.5" opacity={i === 3 ? 1 : 0.45} />
      ))}
      <path d="M40.5 26v-8h14" />
      <rect x="54" y="13" width="18" height="10" rx="2" />
      <path d="M58 18h10" opacity={0.6} />
    </>
  ),
  // Coiled helix.
  'protein-structure-prediction': (
    <>
      <path d="M8 40c6 0 6-22 12-22s6 22 12 22 6-22 12-22 6 22 12 22 6-22 12-22 6 22 8 22" />
      <path d="M8 46h64" opacity={0.3} />
    </>
  ),
  // A ligand seated in a binding pocket.
  'binding-affinity-ml': (
    <>
      <path d="M10 14v18c0 12 10 18 30 18s30-6 30-18V14" />
      <path d="M40 22l7 4v8l-7 4-7-4v-8z" />
      <path d="M47 26l6-3M33 34l-6 3" opacity={0.6} />
    </>
  ),
  // ROC curve above the diagonal.
  'biomarker-panel-design': (
    <>
      <path d="M14 50V10M14 50h52" opacity={0.5} />
      <path d="M14 50L66 10" strokeDasharray="2.5 3" opacity={0.45} />
      <path d="M14 50C16 24 26 14 66 10" />
    </>
  ),
  // Trial phases laid out on a timeline.
  'clinical-trial-landscaping': (
    <>
      <path d="M10 52h60" opacity={0.5} />
      <path d="M12 14h18M22 24h22M32 34h26M44 44h22" strokeWidth={4} />
      {[12, 22, 32, 44].map((x, i) => dot(x, 14 + i * 10, 1.4, 0))}
    </>
  ),
  // Mass spectrum peaks.
  'proteomics-differential-expression': (
    <>
      <path d="M8 50h64" opacity={0.5} />
      {[
        [14, 40], [20, 28], [24, 44], [30, 14], [36, 36], [42, 22], [48, 42], [54, 30], [60, 44], [66, 34],
      ].map(([x, top]) => (
        <path key={x} d={`M${x} 50V${top}`} />
      ))}
    </>
  ),
  // Stacked relative-abundance bars.
  'microbiome-analysis': (
    <>
      {[16, 30, 44, 58].map((x, i) => {
        const cuts = [[20, 34], [26, 36], [18, 30], [24, 40]][i]
        return (
          <g key={x}>
            <rect x={x} y="10" width="9" height="40" rx="1" />
            <path d={`M${x} ${cuts[0]}h9M${x} ${cuts[1]}h9`} />
            <rect x={x} y="10" width="9" height={cuts[0] - 10} fill="currentColor" stroke="none" opacity={0.35} />
          </g>
        )
      })}
    </>
  ),
}

const byCategory: Record<ServiceCategory, ReactNode> = {
  Transcriptomics: byService['proteomics-differential-expression'],
  'Human genetics': byService['variant-annotation'],
  'Structural & molecular design': byService['protein-structure-prediction'],
  'Clinical & translational': byService['biomarker-panel-design'],
  'Proteomics & microbiome': byService['microbiome-analysis'],
}

export function ServiceGlyph({ id, category }: { id: string; category: ServiceCategory }) {
  return <g {...glyphStroke}>{byService[id] ?? byCategory[category]}</g>
}
