import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { servicesWithExamples } from '@/lib/services/data'
import { ArrowUpRight, Download, FileCheck } from 'lucide-react'

const FEATURED_IDS = ['deseq2-rna-seq', 'gene-regulatory-network', 'binder-design']

const featured = FEATURED_IDS.map((id) => {
  const service = servicesWithExamples.find((s) => s.id === id)
  if (!service) {
    throw new Error(`Unknown featured service id: ${id}`)
  }
  return service
})

/**
 * Proof-of-Concept Studies & Method Demonstrations (Boltz Style)
 */
export const SelectedWork: React.FC = () => {
  return (
    <div className="max-w-plate mx-auto px-6 md:px-10">
      <div className="max-w-3xl pb-10 border-b border-rule">
        <div className="inline-flex items-center gap-2 rounded-full border border-rule px-3 py-1 text-xs font-mono text-ink bg-surface-secondary mb-4">
          <FileCheck className="w-3.5 h-3.5 text-emerald" />
          <span>Evidence &amp; Deliverables</span>
        </div>

        <h2 className="text-heading-lg text-ink">
          Proof-of-concept studies and method demonstrations
        </h2>
        <p className="mt-3 text-deck text-ink-secondary font-light leading-relaxed">
          Three worked analyses with actual outputs produced by our team. Download the full technical reports to inspect our data processing rigor, statistical benchmarks, and publication-ready figures.
        </p>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {featured.map((service, i) => {
          const item = service.example!
          return (
            <figure
              key={service.id}
              className="flex flex-col justify-between p-6 rounded-2xl bg-white border border-rule shadow-subtle hover:border-brand/40 transition-all duration-200"
            >
              <div>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-rule/80 bg-surface-secondary">
                  <Image
                    src={item.figure}
                    alt={item.figureAlt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-contain p-3"
                  />
                </div>

                <figcaption className="data mt-4 text-slate text-xs flex items-center gap-2">
                  <span className="font-bold text-ink">Fig. {i + 1}</span>
                  <span className="text-slate-light">&bull;</span>
                  <span>{service.title}</span>
                </figcaption>

                <h3 className="mt-2 text-base font-bold text-ink leading-snug">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-ink-secondary font-light">
                  {service.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-rule">
                <a
                  href={item.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between w-full h-9 px-3.5 rounded-full border border-rule bg-surface-secondary text-xs font-semibold text-ink hover:bg-white transition-all"
                >
                  <span className="flex items-center gap-1.5">
                    <Download className="w-3.5 h-3.5 text-brand" />
                    <span>Download Report (PDF)</span>
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </a>
              </div>
            </figure>
          )
        })}
      </div>

      <div className="mt-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-rule text-xs">
        <span className="text-slate font-light">
          6 worked demonstration reports available across transcriptomics, structural AI, and clinical modeling.
        </span>
        <Link href="/case-studies" className="text-brand font-semibold hover:underline flex items-center gap-1">
          <span>View all worked reports</span>
          &rarr;
        </Link>
      </div>
    </div>
  )
}
