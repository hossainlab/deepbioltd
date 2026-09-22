import React from 'react'
import Image from 'next/image'
import { servicesWithExamples } from '@/lib/services/data'
import { ArrowUpRight, BookOpen, Download, FileText } from 'lucide-react'

export const BoltzNewsCaseStudies: React.FC = () => {
  const featured = servicesWithExamples.slice(0, 2)

  return (
    <section className="w-full py-20 md:py-28 bg-white border-b border-rule">
      <div className="max-w-container mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-12 items-start">
          {/* Left Column */}
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center w-fit px-3.5 py-1 rounded-full border border-rule-strong bg-white shadow-subtle">
              <span className="text-xs font-mono font-semibold text-ink uppercase tracking-wider">
                Case Studies &amp; Reports
              </span>
            </div>

            <h2 className="text-heading-lg text-ink">
              Advancing the open frontier of computational life sciences
            </h2>

            <p className="text-base text-ink-secondary font-light leading-relaxed">
              We publish worked technical reports and reproducible benchmarks covering our analytical methods, data processing pipelines, and figure generation.
            </p>
          </div>

          {/* Right Column: 2 Case Study Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {featured.map((service, idx) => {
              const ex = service.example!
              return (
                <div
                  key={service.id}
                  className="rounded-2xl border border-rule bg-surface-secondary p-5 flex flex-col justify-between hover:bg-white hover:shadow-subtle transition-all duration-200"
                >
                  <div className="space-y-3">
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-rule/80 bg-white">
                      <Image
                        src={ex.figure}
                        alt={ex.figureAlt}
                        fill
                        sizes="(min-width: 768px) 300px, 100vw"
                        className="object-contain p-2"
                      />
                    </div>

                    <div className="flex items-center justify-between text-[11px] font-mono text-slate pt-1">
                      <span>{service.category}</span>
                      <span className="text-brand font-semibold">Fig. 0{idx + 1}</span>
                    </div>

                    <h3 className="text-base font-bold text-ink leading-snug line-clamp-2">
                      {ex.title}
                    </h3>

                    <p className="text-xs text-ink-secondary font-light line-clamp-3 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-rule">
                    <a
                      href={ex.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-between w-full text-xs font-semibold text-ink hover:text-brand transition-colors"
                    >
                      <span className="flex items-center gap-1.5">
                        <Download className="w-3.5 h-3.5 text-brand" />
                        <span>Download Technical Report (PDF)</span>
                      </span>
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                    </a>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
