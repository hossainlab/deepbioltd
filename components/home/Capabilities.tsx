import React from 'react'
import Link from 'next/link'
import { capabilities } from '@/lib/home/capabilities'
import { ArrowRight, BookOpen, Cpu, Dna, FileCheck, Layers } from 'lucide-react'

export const Capabilities: React.FC = () => {
  const handbookPillars = [
    {
      title: 'Foundations & Sequence Models',
      desc: 'Biological language models (DNA/RNA/Protein transformers) modeling sequence grammar, non-coding variation, and evolutionary fitness.',
      icon: Dna,
    },
    {
      title: 'Molecular Discovery & Structural AI',
      desc: 'Diffusion models (RFdiffusion) and structure prediction (AlphaFold/ESM-3) to model complexes and design functional binders.',
      icon: Cpu,
    },
    {
      title: 'Single-Cell & Systems Biology',
      desc: 'Single-cell embeddings, gene regulatory networks, and perturbation simulations to predict cellular response and disease progression.',
      icon: Layers,
    },
    {
      title: 'Evidence & Reproducibility',
      desc: 'Strict adherence to holdout evaluations, out-of-distribution test sets, and deterministic containerized workflows.',
      icon: FileCheck,
    },
  ]

  return (
    <div className="max-w-plate mx-auto px-6 md:px-10">
      {/* Boltz-Style Section Header */}
      <div className="max-w-3xl pb-10 border-b border-rule">
        <div className="inline-flex items-center gap-2 rounded-full border border-rule px-3 py-1 text-xs font-mono text-ink bg-surface-secondary mb-4">
          <BookOpen className="w-3.5 h-3.5 text-brand" />
          <span>Scientific Framework</span>
        </div>

        <h2 className="text-heading-lg text-ink">
          How we approach computational biology
        </h2>
        <p className="mt-3 text-deck text-ink-secondary font-light leading-relaxed">
          We structure our research around the evidence and evaluation frameworks established in <strong className="text-ink font-semibold">The Life Sciences AI Handbook</strong> &mdash; ensuring our models are grounded in biological truth, rigorous holdout testing, and reproducibility.
        </p>
      </div>

      {/* 4 Handbook Foundation Pillars */}
      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {handbookPillars.map((p, idx) => {
          const Icon = p.icon
          return (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-surface-secondary border border-rule flex flex-col justify-between space-y-4 hover:bg-white hover:shadow-subtle transition-all duration-200"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-white border border-rule flex items-center justify-center text-brand">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-ink">{p.title}</h3>
                <p className="text-xs text-slate leading-relaxed font-light">{p.desc}</p>
              </div>
              <div className="pt-3 border-t border-rule text-[10px] font-mono text-slate uppercase">
                Handbook Domain 0{idx + 1}
              </div>
            </div>
          )
        })}
      </div>

      {/* Flagship Analytical Workflows Matrix */}
      <div className="mt-16 pt-12 border-t border-rule">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <span className="data text-brand font-bold text-xs uppercase tracking-wider">
              Analytical Specifications
            </span>
            <h3 className="text-2xl font-bold text-ink mt-1">
              Active Computational Workflows
            </h3>
            <p className="text-xs text-slate mt-1 font-light">
              Clear input requirements and deliverable specifications for the analyses we execute and benchmark.
            </p>
          </div>
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 h-9 pl-4 pr-1.5 rounded-full text-xs font-semibold bg-surface-secondary border border-rule text-ink hover:bg-white transition-all whitespace-nowrap self-start md:self-auto"
          >
            <span>All 20 workflows</span>
            <span className="w-6 h-6 rounded-full bg-ink text-white flex items-center justify-center text-[10px] group-hover:translate-x-0.5 transition-transform">
              &rarr;
            </span>
          </Link>
        </div>

        <dl className="divide-y divide-rule border-b border-rule">
          {capabilities.map((c, idx) => (
            <div
              key={c.label}
              className="grid gap-x-10 gap-y-4 py-6 md:grid-cols-[16rem_1fr_16rem] items-start hover:bg-surface-pale transition-colors px-3 rounded-xl"
            >
              <div>
                <span className="data text-brand font-bold text-[10px] block mb-1">0{idx + 1} // PIPELINE</span>
                <dt className="text-base font-bold leading-snug text-ink">{c.label}</dt>
              </div>

              <dd className="text-xs leading-relaxed text-ink-secondary font-light self-center">
                {c.line}
              </dd>

              <dd className="data space-y-1.5 text-slate rounded-xl bg-white p-3 border border-rule text-xs shadow-subtle">
                <div className="flex items-start gap-1.5">
                  <span className="text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-brand/10 text-brand shrink-0">
                    IN
                  </span>
                  <span className="text-ink text-[11px]">{c.input}</span>
                </div>
                <div className="flex items-start gap-1.5 pt-1.5 border-t border-rule">
                  <span className="text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-700 shrink-0">
                    OUT
                  </span>
                  <span className="text-ink text-[11px]">{c.output}</span>
                </div>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
