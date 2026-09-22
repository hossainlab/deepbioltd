import React from 'react'

export const OurStack: React.FC = () => {
  const row1 = [
    'AlphaFold 2',
    'Boltz-2',
    'ESMFold',
    'AutoDock Vina',
    'DiffDock',
    'PoseBusters',
    'REINVENT 4',
    'Chemprop',
    'ADMET-AI',
  ]

  const row2 = [
    'LINCS L1000 / L2S2',
    'Open Targets',
    'PrimeKG',
    'ChEMBL',
    'DrugBank',
    'DeepVariant',
    'Nucleotide Transformer',
  ]

  const row3 = [
    'AlphaMissense',
    'QIIME2',
    'MOFA+',
    'SynergyFinder 2.0',
    'RDKit',
  ]

  return (
    <section id="technology" className="w-full py-20 md:py-28 bg-[#07121E] text-white relative overflow-hidden border-b border-white/10">
      <div className="max-w-plate mx-auto px-6 md:px-10 flex flex-col items-center text-center relative z-10">
        {/* Gold / Amber Eyebrow */}
        <span className="text-[11px] md:text-xs font-mono font-bold tracking-[0.2em] text-[#E08A2C] uppercase mb-4">
          OUR STACK
        </span>

        {/* Main Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white max-w-3xl leading-[1.15]">
          Pre-trained models we leverage.
        </h2>

        {/* Subtitle */}
        <p className="mt-4 text-base md:text-lg text-slate-300 font-light max-w-2xl leading-relaxed">
          We do not train foundation models from scratch. We apply, fine-tune, and validate them against local biology.
        </p>

        {/* Model Pills Matrix */}
        <div className="mt-12 w-full max-w-5xl flex flex-col items-center gap-3">
          {/* Row 1 */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 md:gap-3">
            {row1.map((name) => (
              <span
                key={name}
                className="px-4 py-2 rounded-full text-xs md:text-sm font-mono font-medium text-slate-200 bg-[#0E2238] border border-slate-700/80 hover:border-[#205E92] hover:bg-[#143252] hover:text-white transition-all cursor-default shadow-sm"
              >
                {name}
              </span>
            ))}
          </div>

          {/* Row 2 */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 md:gap-3">
            {row2.map((name) => (
              <span
                key={name}
                className="px-4 py-2 rounded-full text-xs md:text-sm font-mono font-medium text-slate-200 bg-[#0E2238] border border-slate-700/80 hover:border-[#205E92] hover:bg-[#143252] hover:text-white transition-all cursor-default shadow-sm"
              >
                {name}
              </span>
            ))}
          </div>

          {/* Row 3 */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 md:gap-3">
            {row3.map((name) => (
              <span
                key={name}
                className="px-4 py-2 rounded-full text-xs md:text-sm font-mono font-medium text-slate-200 bg-[#0E2238] border border-slate-700/80 hover:border-[#205E92] hover:bg-[#143252] hover:text-white transition-all cursor-default shadow-sm"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
