'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import {
  services,
  serviceCategories,
  servicesWithExamples,
  ServiceCategory,
} from '@/lib/services/data'
import { ArrowRight, Cpu, Dna, FileCheck, Filter, Sparkles, Search } from 'lucide-react'

export const ServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [searchQuery, setSearchQuery] = useState<string>('')

  const filteredServices = services.filter((s) => {
    const matchesCategory = selectedCategory === 'all' || s.category === selectedCategory
    const matchesSearch =
      s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.input.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.output.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen bg-paper">
      {/* Header Section */}
      <section className="on-deep relative overflow-hidden bg-abyss pt-36 pb-20 md:pt-44 md:pb-28 border-b border-deep-rule">
        <div className="absolute inset-0 bio-grid-pattern opacity-30 pointer-events-none" />
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-brand/20 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-plate mx-auto px-6 md:px-10 relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-900 border border-slate-700 px-3.5 py-1.5 text-xs font-mono text-beam mb-6">
            <Cpu className="w-3.5 h-3.5 text-amber-400" />
            <span>Catalogue of 20 Life Science AI Pipelines</span>
          </div>

          <h1 className="text-display text-white max-w-[18ch]">
            Computational Biology &amp; Foundational AI Services.
          </h1>

          <p className="mt-6 max-w-[58ch] text-deck text-on-deep-mid font-light leading-relaxed">
            Every pipeline has deterministic inputs, containerized execution, and verified deliverables. Six analyses ship with complete worked case reports you can inspect before commissioning work.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link href="/contact" className="btn-light">
              <span>Scope a Custom Pipeline</span>
              <ArrowRight className="w-4 h-4 ml-2 inline-block" />
            </Link>
            <Link href="/case-studies" className="btn-outline-light">
              Inspect {servicesWithExamples.length} Worked Examples
            </Link>
          </div>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="py-8 bg-chalk border-b border-rule sticky top-16 z-30 shadow-sm backdrop-blur-md bg-chalk/95">
        <div className="max-w-plate mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Category Pills */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 rounded text-xs font-semibold transition-all ${
                selectedCategory === 'all'
                  ? 'bg-brand text-white shadow-sm'
                  : 'bg-white border border-rule text-slate-700 hover:text-ink hover:bg-slate-50'
              }`}
            >
              All ({services.length})
            </button>
            {serviceCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'bg-brand text-white shadow-sm'
                    : 'bg-white border border-rule text-slate-700 hover:text-ink hover:bg-slate-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search analyses, genes, inputs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-1.5 text-xs bg-white border border-rule rounded focus:outline-none focus:border-brand text-ink"
            />
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-paper">
        <div className="max-w-plate mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-2 gap-8">
            {filteredServices.map((s) => (
              <div
                key={s.id}
                className="p-8 rounded-2xl bg-chalk border border-rule hover:border-brand/40 transition-all duration-200 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="data text-brand font-bold text-[11px] uppercase tracking-wider">
                      {s.category}
                    </span>
                    {s.example && (
                      <span className="inline-flex items-center gap-1 rounded bg-amber-50 border border-amber-200 px-2 py-0.5 text-[10px] font-mono text-amber-800 font-semibold">
                        <FileCheck className="w-3 h-3" />
                        Report Available
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-ink leading-snug">{s.title}</h3>

                  <p className="text-sm text-slate leading-relaxed">{s.description}</p>

                  <div className="data space-y-2 rounded-xl bg-white p-4 border border-rule text-xs">
                    <div className="flex items-start gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-brand/10 text-brand shrink-0">
                        YOU SEND
                      </span>
                      <span className="text-slate-700 leading-tight">{s.input}</span>
                    </div>
                    <div className="flex items-start gap-2 pt-1 border-t border-rule">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-700 shrink-0">
                        YOU RECEIVE
                      </span>
                      <span className="text-slate-700 leading-tight">{s.output}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-rule flex items-center justify-between text-xs">
                  {s.example ? (
                    <a
                      href={s.example.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand font-semibold hover:underline flex items-center gap-1"
                    >
                      <span>Read worked example PDF</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <Link
                      href="/contact"
                      className="text-slate-600 hover:text-brand font-semibold flex items-center gap-1"
                    >
                      <span>Scope this pipeline</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  )}

                  <Link href="/contact" className="btn text-xs py-1.5 px-3">
                    Inquire
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-16 text-slate-500">
              <p className="text-base font-semibold">No analyses matching your search criteria.</p>
              <button
                onClick={() => {
                  setSelectedCategory('all')
                  setSearchQuery('')
                }}
                className="mt-4 text-xs font-semibold text-brand underline"
              >
                Reset filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Custom Request CTA Block */}
      <section className="on-deep bg-abyss py-16 border-t border-deep-rule">
        <div className="max-w-plate mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <h3 className="text-2xl font-bold text-white">Need a Specialized or Novel Model Architecture?</h3>
            <p className="text-sm text-on-deep-mid font-light leading-relaxed">
              Our catalogue represents our most frequently executed workflows. If your research demands custom foundation model fine-tuning or novel multi-omics integration, our Dhaka lab can engineer a dedicated pipeline.
            </p>
          </div>

          <Link href="/contact" className="btn-light whitespace-nowrap flex items-center gap-2">
            <span>Describe Your Custom Project</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
