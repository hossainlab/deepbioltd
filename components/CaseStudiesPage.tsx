'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { servicesWithExamples } from '@/lib/services/data'
import { ArrowRight, FileCheck, FileText, Download, ExternalLink, Sparkles, CheckCircle2 } from 'lucide-react'

export const CaseStudiesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-paper">
      {/* Header Section */}
      <section className="on-deep relative overflow-hidden bg-abyss pt-36 pb-20 md:pt-44 md:pb-28 border-b border-deep-rule">
        <div className="absolute inset-0 bio-grid-pattern opacity-30 pointer-events-none" />
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-brand/20 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-plate mx-auto px-6 md:px-10 relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-900 border border-slate-700 px-3.5 py-1.5 text-xs font-mono text-beam mb-6">
            <FileCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Verifiable Evidence &bull; Downloadable Case Reports</span>
          </div>

          <h1 className="text-display text-white max-w-[18ch]">
            Inspect the Output Before You Commission Any Work.
          </h1>

          <p className="mt-6 max-w-[58ch] text-deck text-on-deep-mid font-light leading-relaxed">
            {servicesWithExamples.length} complete scientific studies with actual figures, methods, and full downloadable PDFs &mdash; the exact caliber of deliverable you receive at the conclusion of a project.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link href="/contact" className="btn-light">
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4 ml-2 inline-block" />
            </Link>
            <Link href="/services" className="btn-outline-light">
              See All 20 Pipelines
            </Link>
          </div>
        </div>
      </section>

      {/* Case Studies Articles */}
      <section className="py-20 md:py-28 bg-paper">
        <div className="max-w-plate mx-auto px-6 md:px-10 space-y-20">
          {servicesWithExamples.map((service, i) => {
            const ex = service.example!

            return (
              <article
                key={service.id}
                className="grid gap-10 border-t border-rule pt-12 lg:grid-cols-[1.1fr_1fr] lg:gap-14 items-start"
              >
                {/* Left Column: Summary, Methods, Download */}
                <div className="space-y-6">
                  <div className="flex items-center gap-2">
                    <span className="data text-brand font-bold text-xs uppercase tracking-wider">
                      CASE STUDY 0{i + 1} &bull; {service.category}
                    </span>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-bold text-ink leading-tight">
                    {ex.title}
                  </h2>

                  <p className="text-sm text-slate leading-relaxed font-light">
                    {service.description}
                  </p>

                  <div className="data space-y-2 rounded-xl bg-chalk p-4 border border-rule text-xs">
                    <div className="flex items-start gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-brand/10 text-brand shrink-0">
                        INPUT
                      </span>
                      <span className="text-slate-700 leading-tight">{service.input}</span>
                    </div>
                    <div className="flex items-start gap-2 pt-1 border-t border-rule">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-700 shrink-0">
                        OUTPUT
                      </span>
                      <span className="text-slate-700 leading-tight">{service.output}</span>
                    </div>
                  </div>

                  <div className="pt-2 flex flex-wrap items-center gap-4">
                    <a
                      href={ex.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn flex items-center gap-2 text-xs py-2.5 px-4"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download Complete Report (PDF)</span>
                    </a>
                    <Link
                      href="/contact"
                      className="btn-ghost text-xs py-2.5 px-4"
                    >
                      Inquire on This Method
                    </Link>
                  </div>
                </div>

                {/* Right Column: Figure Plate with Scientific Legend */}
                <figure className="rounded-2xl border border-rule bg-white p-4 shadow-sm space-y-3">
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-slate-50 border border-slate-100">
                    <Image
                      src={ex.figure}
                      alt={ex.figureAlt}
                      fill
                      sizes="(min-width: 1024px) 580px, 100vw"
                      className="object-contain p-3"
                      priority={i === 0}
                    />
                  </div>
                  <figcaption className="text-xs text-slate-600 leading-relaxed pt-2 border-t border-rule/60">
                    <span className="font-mono font-bold text-brand mr-1.5">Fig. {i + 1}:</span>
                    {ex.figureAlt}
                  </figcaption>
                </figure>
              </article>
            )
          })}
        </div>
      </section>

      {/* Bottom Scoping Banner */}
      <section className="on-deep bg-abyss py-16 border-t border-deep-rule">
        <div className="max-w-plate mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-2xl font-bold text-white">Have Cohort Data Requiring Similar Analysis?</h3>
            <p className="text-sm text-on-deep-mid font-light">
              Send us your sample matrix parameters and research question. We provide a fixed-price written scope within 24 business hours.
            </p>
          </div>

          <Link href="/contact" className="btn-light whitespace-nowrap flex items-center gap-2">
            <span>Request a Scoping Call</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
