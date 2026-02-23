import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'DeepBio Limited - Data-Driven Life Science Research'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: 'linear-gradient(135deg, #0A2540 0%, #0f3460 50%, #205E92 100%)',
          fontFamily: 'system-ui, sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Decorative circles */}
        <div
          style={{
            position: 'absolute',
            top: '-100px',
            right: '-100px',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'rgba(32, 94, 146, 0.3)',
            filter: 'blur(80px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-80px',
            left: '-80px',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'rgba(65, 132, 196, 0.2)',
            filter: 'blur(80px)',
          }}
        />

        {/* Tag */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 20px',
            borderRadius: '999px',
            background: 'rgba(32, 94, 146, 0.3)',
            border: '1px solid rgba(65, 132, 196, 0.3)',
            color: '#4184C4',
            fontSize: '14px',
            fontWeight: 700,
            textTransform: 'uppercase' as const,
            letterSpacing: '0.15em',
            marginBottom: '32px',
            width: 'fit-content',
          }}
        >
          ✦ Leading Life Science Research Hub
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: '72px',
            fontWeight: 800,
            color: '#ffffff',
            lineHeight: 1,
            letterSpacing: '-0.03em',
            marginBottom: '24px',
            display: 'flex',
          }}
        >
          Data-Driven Life Science.
        </div>

        {/* Description */}
        <div
          style={{
            fontSize: '24px',
            color: 'rgba(148, 163, 184, 1)',
            lineHeight: 1.5,
            maxWidth: '700px',
            marginBottom: '48px',
          }}
        >
          Bioinformatics, AI & Genomics research hub based in Bangladesh. Turning life science data into impactful solutions.
        </div>

        {/* Stats row */}
        <div style={{ display: 'flex', gap: '40px' }}>
          {[
            { value: '250+', label: 'Genomes Analyzed' },
            { value: '18+', label: 'Services' },
            { value: '6', label: 'Research Programs' },
          ].map((stat) => (
            <div key={stat.label} style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontSize: '36px', fontWeight: 800, color: '#ffffff' }}>{stat.value}</div>
              <div
                style={{
                  fontSize: '12px',
                  fontWeight: 700,
                  color: 'rgba(100, 116, 139, 1)',
                  textTransform: 'uppercase' as const,
                  letterSpacing: '0.1em',
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Domain */}
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            right: '80px',
            fontSize: '20px',
            fontWeight: 700,
            color: 'rgba(65, 132, 196, 0.6)',
            letterSpacing: '0.05em',
          }}
        >
          deepbioltd.com
        </div>
      </div>
    ),
    { ...size }
  )
}
