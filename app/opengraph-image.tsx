import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'DeepBio Limited - computational biology from Dhaka'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

/**
 * The share card is the site's hero band at card size: flat navy, the logo
 * mark, the rung, the claim.
 *
 * What went: a three-stop gradient, two blurred colour blobs, a tracked-out
 * uppercase pill with a ✦ in it, and a stats row reading "250+ Genomes
 * Analyzed / 18+ Services / 6 Research Programs". The first four were
 * decoration the rest of the site no longer carries. The stats were worse than
 * decoration — the catalogue holds twenty services, so the card was shipping a
 * stale number to every link preview, and nothing in the repository supports
 * the genome count. The two figures here are the ones the site itself can show
 * you: the catalogue length, and how many of those ship a published report.
 */
export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          background: '#071A2C',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        {/* Mark and wordmark, drawn to match components/Logo.tsx */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <svg width="44" height="44" viewBox="0 0 24 24" fill="none">
            <path d="M4 4C4 4 7 6 12 12S20 20 20 20" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
            <path d="M20 4C20 4 17 6 12 12S4 20 4 20" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
            <path d="M6.5 6.5H4" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
            <path d="M17.5 6.5H20" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
            <path d="M6.5 17.5H4" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
            <path d="M17.5 17.5H20" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
            <path d="M9 9H7.5" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
            <path d="M16.5 9H15" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
            <path d="M9 15H7.5" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
            <path d="M16.5 15H15" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <div style={{ fontSize: '34px', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.02em' }}>
            DeepBio
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', marginTop: '18px' }}>
          {/* The rung, built from divs because ImageResponse has no support for
              layered background-image shorthand. */}
          <div style={{ display: 'flex', flexDirection: 'column', width: '360px', marginBottom: '38px' }}>
            <div style={{ display: 'flex', gap: '17px', marginBottom: '9px' }}>
              {[0, 1, 2, 3].map((i) => (
                <div key={i} style={{ width: '2px', height: '10px', background: '#5AB0E8' }} />
              ))}
            </div>
            <div style={{ width: '360px', height: '2px', background: 'rgba(232, 240, 247, 0.18)' }} />
          </div>

          <div
            style={{
              display: 'flex',
              fontSize: '60px',
              fontWeight: 700,
              color: '#E8F0F7',
              lineHeight: 1.06,
              letterSpacing: '-0.03em',
              maxWidth: '900px',
            }}
          >
            Your sequencer produces terabytes. Nobody reads them.
          </div>

          <div
            style={{
              display: 'flex',
              marginTop: '24px',
              fontSize: '23px',
              color: '#9FB4C7',
              lineHeight: 1.5,
              maxWidth: '760px',
            }}
          >
            Computational biology from Dhaka. Genomic, transcriptomic and
            structural analysis, with the pipelines and the paper trail behind it.
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTop: '1px solid rgba(232, 240, 247, 0.14)',
            paddingTop: '22px',
            fontSize: '19px',
            color: '#6E8399',
          }}
        >
          <div style={{ display: 'flex' }}>
            20 analyses &nbsp;/&nbsp; 6 with a published report
          </div>
          <div style={{ display: 'flex', color: '#5AB0E8' }}>deepbioltd.com</div>
        </div>
      </div>
    ),
    { ...size },
  )
}
