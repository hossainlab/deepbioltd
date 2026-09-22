import React from 'react'
import Image from 'next/image'

interface Partner {
  name: string
  logo: string
  height: number
  maxWidth: number
  alt: string
}

export const BoltzTrustSection: React.FC = () => {
  const partners: Partner[] = [
    {
      name: 'GNOBB',
      logo: '/partner_logos/clean/GNOBB.png',
      height: 58,
      maxWidth: 140,
      alt: 'Global Network of Bangladeshi Biotechnologists (GNOBB)',
    },
    {
      name: 'ASI School of Life',
      logo: '/partner_logos/clean/ASISchoolofLife.png',
      height: 48,
      maxWidth: 180,
      alt: 'ASI School of Life Sciences',
    },
    {
      name: 'SPSB',
      logo: '/partner_logos/clean/SPSB.png',
      height: 56,
      maxWidth: 120,
      alt: 'Society for Promotion of Science Bangladesh (SPSB)',
    },
    {
      name: 'cBLAST',
      logo: '/partner_logos/clean/cBLAST.png',
      height: 46,
      maxWidth: 160,
      alt: 'cBLAST Laboratory',
    },
    {
      name: 'GSA Bioinformatics Internship',
      logo: '/partner_logos/clean/GSABioinformaticsInternship.png',
      height: 52,
      maxWidth: 180,
      alt: 'GSA Bioinformatics Internship Program',
    },
    {
      name: 'One Health JU',
      logo: '/partner_logos/clean/onehealthlab.png',
      height: 54,
      maxWidth: 140,
      alt: 'One Health Laboratory Jahangirnagar University',
    },
  ]

  return (
    <section className="w-full bg-white border-y border-rule py-10 md:py-14">
      <div className="max-w-container mx-auto px-6 md:px-10">
        <div className="flex flex-col items-center">
          {/* Subtle label */}
          <p className="text-[11px] font-mono font-semibold text-slate uppercase tracking-widest mb-8 text-center">
            Research Collaborations & Partner Laboratories
          </p>

          {/* Clean, Prominent Logo Grid */}
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 items-center justify-items-center gap-8 md:gap-10">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="flex items-center justify-center p-3 w-full h-20 transition-transform duration-200 hover:scale-105"
                title={partner.alt}
              >
                <Image
                  src={partner.logo}
                  alt={partner.alt}
                  width={220}
                  height={80}
                  style={{
                    maxHeight: `${partner.height}px`,
                    maxWidth: `${partner.maxWidth}px`,
                  }}
                  className="h-auto w-auto object-contain transition-opacity duration-200"
                  priority
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
