'use client'

import React from 'react'
import Link from 'next/link'
import { Target, Eye, Sparkles, Users, Globe2, ArrowRight, ShieldCheck, Database, Award, CheckCircle2 } from 'lucide-react'
import { Team } from './Team'

export const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-paper">
      {/* Hero Section */}
      <section className="on-deep relative overflow-hidden bg-abyss pt-36 pb-20 md:pt-44 md:pb-28 border-b border-deep-rule">
        <div className="absolute inset-0 bio-grid-pattern opacity-30 pointer-events-none" />
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-brand/20 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-plate mx-auto px-6 md:px-10 relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-900 border border-slate-700 px-3.5 py-1.5 text-xs font-mono text-beam mb-6">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>About DeepBio Limited &bull; Applied Biotech</span>
          </div>

          <h1 className="text-display text-white max-w-[18ch]">
            Pioneering Foundational AI for Life Sciences in South Asia.
          </h1>

          <p className="mt-6 max-w-[58ch] text-deck text-on-deep-mid font-light leading-relaxed">
            DeepBio Limited is an applied biotech startup and research hub based in Dhaka, Bangladesh. We develop biological foundation models, sequence-to-structure AI architectures, and high-performance cloud laboratories to transform raw life science data into clinical breakthroughs.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link href="/team" className="btn-light">
              <span>Meet the Scientific Team</span>
              <ArrowRight className="w-4 h-4 ml-2 inline-block" />
            </Link>
            <Link href="/contact" className="btn-outline-light">
              Contact Dhaka Lab
            </Link>
          </div>
        </div>
      </section>

      {/* Vision & Mission Grid */}
      <section className="py-20 md:py-28 bg-chalk border-b border-rule">
        <div className="max-w-plate mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Vision Card */}
            <div className="p-8 md:p-10 rounded-2xl bg-paper border border-rule flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-brand/10 text-brand flex items-center justify-center">
                  <Eye className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-ink">Our Vision</h2>
                <p className="text-slate leading-relaxed text-sm">
                  To establish a world-class life sciences AI foundation in South Asia, proving that frontier computational biology, de novo protein design, and genomic surveillance can be led from Dhaka to solve global and regional health crises.
                </p>
              </div>

              <div className="pt-4 border-t border-rule text-xs font-mono text-slate-500">
                Strategic Horizon: 2026&ndash;2030 Precision Bio-Platform
              </div>
            </div>

            {/* Mission Card */}
            <div className="p-8 md:p-10 rounded-2xl bg-paper border border-rule flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
                  <Target className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-ink">Our Mission</h2>
                <p className="text-slate leading-relaxed text-sm">
                  To democratize access to advanced multi-omics AI, train regional scientific talent, and deliver deterministic, publication-grade analytical pipelines that accelerate diagnostics, combat AMR, and design targeted therapies.
                </p>
              </div>

              <div className="pt-4 border-t border-rule text-xs font-mono text-slate-500">
                Core Standard: Deterministic, Reproducible Science
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Institutional Values & Scientific Integrity */}
      <section className="py-20 md:py-28 bg-paper">
        <div className="max-w-plate mx-auto px-6 md:px-10">
          <div className="max-w-2xl mb-14 space-y-3">
            <span className="data text-brand font-bold text-xs uppercase tracking-wider">
              Governance &amp; Scientific Integrity
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-ink">
              Built on Data Sovereignty &amp; Rigorous Benchmarks
            </h2>
            <p className="text-slate text-sm leading-relaxed">
              Every project follows stringent data protection guidelines, checksum verification, and open reproducible workflows.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-chalk border border-rule space-y-3">
              <div className="w-10 h-10 rounded-lg bg-white border border-rule flex items-center justify-center text-brand">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-ink">Data Sovereignty</h3>
              <p className="text-xs text-slate leading-relaxed">
                Clear data custody agreements, encrypted transfer protocols, and complete client ownership of models, code, and weights.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-chalk border border-rule space-y-3">
              <div className="w-10 h-10 rounded-lg bg-white border border-rule flex items-center justify-center text-brand">
                <Database className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-ink">BioHPC Infrastructure</h3>
              <p className="text-xs text-slate leading-relaxed">
                High-throughput GPU compute clusters engineered for accelerated transformer inference, molecular dynamics, and variant calling.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-chalk border border-rule space-y-3">
              <div className="w-10 h-10 rounded-lg bg-white border border-rule flex items-center justify-center text-brand">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-ink">Handbook Evidence Standards</h3>
              <p className="text-xs text-slate leading-relaxed">
                Adhering to the evaluation principles of The Life Sciences AI Handbook for unbiased biological performance validation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Science Team Section */}
      <section id="team" className="py-20 md:py-28 bg-chalk border-t border-rule">
        <div className="max-w-plate mx-auto px-6 md:px-10">
          <div className="max-w-2xl mb-12 space-y-3">
            <span className="data text-brand font-bold text-xs uppercase tracking-wider">
              Dhaka Scientific Leadership
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-ink">
              Meet Our Computational Scientists
            </h2>
            <p className="text-slate text-sm leading-relaxed">
              Led by computational biologists, machine learning researchers, and clinical bioinformaticians. You deal directly with the specialists executing the models.
            </p>
          </div>

          <Team />
        </div>
      </section>
    </div>
  )
}
