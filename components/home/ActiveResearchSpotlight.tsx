import React from 'react'
import Link from 'next/link'
import {
  Brain,
  Cpu,
  Dna,
  Activity,
  ArrowRight,
  GraduationCap,
} from 'lucide-react'

export const ActiveResearchSpotlight: React.FC = () => {
  const projects = [
    {
      number: '01',
      badge: 'Rare Disease Target Triage',
      title: 'RareDx-Modality',
      subtitle: 'AI-Powered Druggability Assessment Across 7 Modalities',
      icon: Brain,
      problem:
        'The most critical early decision in rare disease drug development is modality selection. Existing tools (Open Targets) assess only 3 modalities with rigid rule buckets &mdash; blind to genetic medicines (ASO, siRNA, AAV, CRISPR), gene size packaging caps (<4.7kb), and disease mechanism.',
      solution:
        'Combines multi-modal biophysical logic with Claude reasoning to rank feasibility across 7 modalities with calibrated uncertainty. Encodes N1C VARIANT guidelines to classify pathogenic variants for antisense oligonucleotide eligibility at scale.',
      models: ['Claude 3.5 Sonnet', 'AlphaFold-Multimer', 'N1C Algorithmic Framework', 'Modality Feasibility Engine'],
      focus: '7-Modality assessment pipeline · SMA & LCA10/CEP290 retrospective benchmarks',
    },
    {
      number: '02',
      badge: 'Infectious Disease & Resistance',
      title: 'AMR Surveillance + Drug Repurposing',
      subtitle: 'Structure-Guided Resistance Bypass & Compound Optimization',
      icon: Cpu,
      problem:
        'Antimicrobial resistance is rendering frontline antibiotics obsolete. De novo discovery takes 10+ years, while pathogen targets evolve complex beta-lactamase and efflux pump mutations that evade standard therapy.',
      solution:
        'Deploys Boltz-2 for structure and binding affinity prediction (1000x faster than FEP) across resistant variants, Chemprop for ADMET property prediction with built-in uncertainty estimation, and REINVENT 4 for generative RL scaffold hopping.',
      models: ['Boltz-2 (MIT)', 'Chemprop (MIT)', 'REINVENT 4 (Apache 2.0)'],
      focus: 'Co-folding resistant beta-lactamase complexes · Permissive MIT licensing for pharma co-development',
    },
    {
      number: '03',
      badge: 'Neglected Pathogens',
      title: 'Drug Discovery for Neglected Tropical Diseases',
      subtitle: 'Filling the Global AI Gap in Parasitic Target Discovery',
      icon: Dna,
      problem:
        'Global AI drug discovery literature almost entirely neglects tropical parasitic diseases. A 2026 scoping review confirmed most ML studies focus on geo-risk with "none focusing on drug discovery", leaving endemic parasitic diseases underfunded.',
      solution:
        'Applies ESMC (EvolutionaryScale) to predict zero-shot functional annotations for unstudied parasitic proteins lacking experimental structures, and ESMFold2 for rapid 1–10s single-A100 folding of endemic variant libraries.',
      models: ['ESMC (Open Weights)', 'ESMFold2 (MIT)', 'Boltz-2', 'Chemprop'],
      focus: 'Zero-shot functional embeddings · Rapid 1–10s screening for Leishmania, Filariasis & TB targets',
    },
    {
      number: '04',
      badge: 'South Asian Functional Genomics',
      title: 'Population-Specific Biomarker Discovery',
      subtitle: 'Mining South Asia’s Homozygous Knockout Landscape',
      icon: Activity,
      problem:
        'Over 80% of global genomic and single-cell models are optimized for European ancestries. Consequently, target discovery pipelines and polygenic risk predictors miss disease mechanisms unique to South Asian genetic architectures, especially in cardiometabolic pathology.',
      solution:
        'Deploys single-cell foundation models (scGPT, Geneformer) and long-range genome models (Evo2) to map perturbation biology and protective homozygous loss-of-function phenotypes, where targets progress 2.2x more reliably through clinical phases.',
      models: ['scGPT', 'Geneformer', 'Nucleotide Transformer v3', 'Evo2 (1Mb)'],
      focus: 'In silico single-cell perturbation mapping · Prioritizing targets validated by protective human knockouts',
    },
  ]

  return (
    <section id="research" className="w-full py-20 md:py-28 bg-[#F8FAFC] border-b border-rule scroll-mt-20 md:scroll-mt-24">
      <div className="max-w-container mx-auto px-6 md:px-10 flex flex-col gap-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-rule">
          <div className="flex flex-col gap-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 w-fit px-3.5 py-1 rounded-full border border-rule-strong bg-white shadow-subtle">
              <span className="w-2 h-2 rounded-full bg-[#205E92] animate-pulse" />
              <span className="text-xs font-mono font-semibold text-ink uppercase tracking-wider">
                We Are Working On
              </span>
            </div>

            <h2 className="text-heading-lg text-ink font-bold leading-tight">
              Active Research &amp; Translational Initiatives
            </h2>

            <p className="text-base md:text-lg text-ink-secondary font-light leading-relaxed">
              Four focused computational initiatives leveraging foundation models, structural AI, and generative chemistry to solve neglected health challenges.
            </p>
          </div>

          <Link
            href="/contact"
            className="h-10 px-6 rounded-full inline-flex items-center gap-2 text-xs font-semibold whitespace-nowrap bg-ink text-white hover:bg-[#205E92] transition-all shadow-subtle self-start md:self-auto"
          >
            <span>Partner on Research</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 4 Projects Grid (2x2) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {projects.map((proj) => {
            const Icon = proj.icon
            return (
              <div
                key={proj.number}
                className="group relative flex flex-col justify-between p-8 md:p-9 rounded-3xl bg-white border border-rule/80 hover:border-[#205E92]/40 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] hover:shadow-[0_14px_36px_-8px_rgba(32,94,146,0.12)] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="space-y-5">
                  {/* Top Bar: Number, Badge, and Brand Icon */}
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-[#205E92]">
                        PROJECT {proj.number}
                      </span>
                      <span className="text-slate-300">&bull;</span>
                      <span className="text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-full bg-surface-secondary text-slate border border-rule">
                        {proj.badge}
                      </span>
                    </div>

                    <div className="w-10 h-10 rounded-xl bg-[#205E92] text-white flex items-center justify-center shadow-sm group-hover:scale-105 group-hover:bg-[#1A4C77] transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-ink group-hover:text-[#205E92] transition-colors leading-snug">
                      {proj.title}
                    </h3>
                    <p className="text-xs font-mono text-slate mt-1 font-medium">
                      {proj.subtitle}
                    </p>
                  </div>

                  {/* Problem & Approach */}
                  <div className="space-y-2.5 text-xs md:text-sm text-ink-secondary font-light leading-relaxed">
                    <p>
                      <strong className="font-semibold text-ink">Bottleneck: </strong>
                      <span dangerouslySetInnerHTML={{ __html: proj.problem }} />
                    </p>
                    <p>
                      <strong className="font-semibold text-ink">Approach: </strong>
                      <span dangerouslySetInnerHTML={{ __html: proj.solution }} />
                    </p>
                  </div>
                </div>

                {/* Bottom Metadata: Model Stack & Research Focus */}
                <div className="pt-5 mt-6 border-t border-rule space-y-3">
                  {/* Model Chips */}
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="text-[10px] font-mono font-semibold uppercase text-slate mr-1">
                      Models:
                    </span>
                    {proj.models.map((m, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium text-slate-700 bg-[#F8FAFC] border border-rule"
                      >
                        {m}
                      </span>
                    ))}
                  </div>

                  {/* Objective & Focus Strip */}
                  <div className="p-3 rounded-xl bg-blue-50/60 border border-blue-100 flex items-start gap-2 text-[11px] font-mono text-[#205E92] leading-snug">
                    <span className="font-bold shrink-0">FOCUS:</span>
                    <span>{proj.focus}</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Cross-Cutting Banner: AI-Bio Workforce Development */}
        <div className="p-6 md:p-8 rounded-3xl bg-white border border-rule shadow-subtle flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-4 max-w-3xl">
            <div className="w-12 h-12 rounded-2xl bg-[#205E92] text-white flex items-center justify-center shadow-sm shrink-0">
              <GraduationCap className="w-6 h-6" />
            </div>

            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-mono font-bold text-[#205E92] uppercase">
                  Cross-Cutting Mission
                </span>
                <span className="text-xs font-mono text-slate">&bull;</span>
                <span className="text-xs font-mono text-slate">National Capacity Building</span>
              </div>

              <h4 className="text-lg font-bold text-ink">
                AI-Bio Workforce Development
              </h4>

              <p className="text-xs md:text-sm text-ink-secondary font-light mt-1 leading-relaxed">
                Training scientists and researchers to deploy Boltz-2, Chemprop, REINVENT 4, and scGPT. Because these models carry permissive MIT &amp; Apache 2.0 open-source licenses, trainees and partner institutions can immediately apply them commercially without licensing barriers.
              </p>
            </div>
          </div>

          <Link
            href="/services"
            className="h-9 px-5 rounded-full inline-flex items-center gap-1.5 text-xs font-semibold border border-rule-strong bg-white hover:bg-surface-secondary text-ink transition-all shadow-subtle whitespace-nowrap shrink-0 self-start md:self-auto"
          >
            <span>Training Details</span>
            <ArrowRight className="w-3.5 h-3.5 text-slate" />
          </Link>
        </div>
      </div>
    </section>
  )
}
