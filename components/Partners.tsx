import React from 'react'

import Image from 'next/image'

const partners = [
  { name: 'GNOBB', logo: '/partner_logos/GNOBB.png', scale: 'scale-110' },
  { name: 'ASI School of Life', logo: '/partner_logos/ASISchoolofLife.png', scale: 'scale-125' },
  { name: 'CHIRAL Bangladesh', logo: '/partner_logos/chiral_logo.jpg', scale: 'scale-100', hasBg: true },
  { name: 'SPSB', logo: '/partner_logos/SPSB.png', scale: 'scale-110' },
  { name: 'GSA Bioinformatics Internship', logo: '/partner_logos/GSABioinformaticsInternship.png', scale: 'scale-125' },
  { name: 'cBLAST', logo: '/partner_logos/cBLAST.jpg', scale: 'scale-90', hasBg: true },
]

export const Partners: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        <div className="flex-shrink-0 text-center lg:text-left space-y-2">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-primary/5 border border-brand-primary/10 text-brand-primary text-[9px] font-bold uppercase tracking-[0.2em]">
            Strategic Network
          </div>
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight leading-tight">
            Strategic Research <br className="hidden lg:block" /> 
            <span className="text-brand-primary">Partners</span>
          </h2>
        </div>
        
        <div className="flex-1 w-full">
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4 items-center justify-items-center">
            {partners.map((partner) => (
              <div 
                key={partner.name} 
                className="group relative w-full h-24 flex items-center justify-center rounded-[1.5rem] bg-white border border-slate-50 transition-all duration-500 hover:shadow-[0_15px_35px_rgba(32,94,146,0.08)] hover:border-brand-primary/10 hover:-translate-y-1 overflow-hidden"
              >
                {/* Subtle Hover Background */}
                <div className="absolute inset-0 bg-slate-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className={`relative z-10 w-full h-full flex items-center justify-center p-4 ${partner.scale} transition-transform duration-500 group-hover:scale-[1.15]`}>
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={200}
                    height={80}
                    sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 16vw"
                    className={`max-h-full max-w-full object-contain ${partner.hasBg ? 'mix-blend-multiply' : ''}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
