'use client'

import React from 'react'
import Link from 'next/link'
import {
  Microscope,
  Brain,
  FlaskConical,
  ArrowRight,
  Dna,
  ShieldAlert,
  Sprout,
  Sparkles,
  Database,
  Binary,
  Cpu,
  Terminal,
  Layers,
  Activity,
  CheckCircle2,
  FileText,
  ExternalLink,
} from 'lucide-react'
import { servicesWithExamples } from '@/lib/services/data'

const researchGroups = [
  {
    id: 'big-bio',
    name: 'Big Bioinformatics Lab',
    subtitle: 'Population-Scale High-Throughput Genomics',
    description:
      'Architecting scalable, distributed cloud infrastructure for large-scale South Asian population studies. Specializing in ancestry-aware variant calling, multi-cohort LD matrix modeling, and high-depth whole genome processing.',
    icon: Binary,
    tags: ['Big Data Genomics', 'Distributed Nextflow', 'South Asian Haplotypes'],
    color: 'text-beam',
    bg: 'bg-sky-950/40 border-sky-500/20',
    affiliation: 'CHIRAL Bangladesh Consortium',
  },
  {
    id: 'gen-gen',
    name: 'The Generative Genomics Lab',
    subtitle: 'Synthetic Biology & Biological Foundation Models',
    description:
      'Predicting the outcomes of in silico gene expression experiments with generative AI architectures. Utilizing pysynthbio (our Python framework for transcriptomic synthesis) to model single-cell perturbation trajectories and gene regulatory networks.',
    icon: Sparkles,
    tags: ['Generative AI', 'pysynthbio Framework', 'Single-Cell Perturbations'],
    color: 'text-amber-400',
    bg: 'bg-amber-950/40 border-amber-500/20',
    featured: 'Powered by pysynthbio',
  },
  {
    id: 'insilico',
    name: 'Insilico Medicine & Structural AI',
    subtitle: 'De Novo Protein Design & In Silico Therapeutics',
    description:
      'Redefining therapeutic discovery using diffusion models (RFdiffusion), structure prediction (AlphaFold/ESM-3), and physics-based molecular docking. Accelerating lead optimization from years to weeks for neglected tropical diseases and regional oncology targets.',
    icon: FlaskConical,
    tags: ['RFdiffusion', 'AlphaFold Modeling', 'PCSK9 / Target Binders'],
    color: 'text-purple-400',
    bg: 'bg-purple-950/40 border-purple-500/20',
  },
  {
    id: 'deep-amr',
    name: 'Pathogen Genomics & AMR Surveillance',
    subtitle: 'Real-Time Epidemiological Warning System',
    description:
      'Developing AI sequence-to-phenotype classifiers and automated pipelines for real-time monitoring of multidrug-resistant pathogens (Klebsiella, Vibrio, Salmonella) across clinical hospital ICUs and municipal wastewater in Bangladesh.',
    icon: ShieldAlert,
    tags: ['AMR Genomic AI', 'Wastewater Metagenomics', 'WHO GLASS Compliant'],
    color: 'text-emerald-400',
    bg: 'bg-emerald-950/40 border-emerald-500/20',
  },
]

const strategicPillars = [
  {
    title: 'Pathogen Genomics & AMR',
    description:
      'Predicting resistance phenotypes directly from raw NGS reads to guide hospital stewardship in urban Bangladesh.',
    icon: ShieldAlert,
    tag: 'Public Health',
  },
  {
    title: 'South Asian Population Genetics',
    description:
      'Developing ancestry-calibrated Polygenic Risk Scores (PRS) for cardiometabolic disorders in underrepresented cohorts.',
    icon: Dna,
    tag: 'Precision Medicine',
  },
  {
    title: 'Delta Agricultural Resilience',
    description:
      'Generative modeling of crop stress responses to engineer salinity- and submergence-tolerant rice cultivars for coastal Bengal.',
    icon: Sprout,
    tag: 'Climate & Food Security',
  },
  {
    title: 'Rare Pediatric Diagnostics',
    description:
      'Deep learning frameworks prioritizing non-coding pathogenic disruptions in consanguineous rare disease families.',
    icon: Brain,
    tag: 'Clinical AI',
  },
  {
    title: 'De Novo Binder Design',
    description:
      'Computational structural design of high-affinity protein binders against clinical targets including PCSK9 and viral antigens.',
    icon: FlaskConical,
    tag: 'Therapeutics',
  },
]

export const ResearchPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-paper">
      {/* Header Section */}
      <section className="on-deep relative overflow-hidden bg-abyss pt-36 pb-20 md:pt-44 md:pb-28 border-b border-deep-rule">
        <div className="absolute inset-0 bio-grid-pattern opacity-30 pointer-events-none" />
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-brand/20 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-plate mx-auto px-6 md:px-10 relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-900 border border-slate-700 px-3.5 py-1.5 text-xs font-mono text-beam mb-6">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Scientific Discovery &bull; Dhaka Research Laboratories</span>
          </div>

          <h1 className="text-display text-white max-w-[20ch]">
            Applied Foundational AI for Life Sciences Research.
          </h1>

          <p className="mt-6 max-w-[62ch] text-deck text-on-deep-mid font-light leading-relaxed">
            DeepBio bridges biological data and clinical breakthroughs. Grounded in the evidence frameworks of{' '}
            <strong className="text-white">The Life Sciences AI Handbook</strong>, our research wings operate at the intersection of foundation models, high-performance cloud compute, and critical regional health priorities.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link href="/case-studies" className="btn-light">
              <span>Read Worked Reports</span>
              <ArrowRight className="w-4 h-4 ml-2 inline-block" />
            </Link>
            <Link href="/contact" className="btn-outline-light">
              Propose a Research Collaboration
            </Link>
          </div>
        </div>
      </section>

      {/* Research Groups Matrix */}
      <section className="py-20 md:py-28 bg-chalk">
        <div className="max-w-plate mx-auto px-6 md:px-10">
          <div className="max-w-2xl pb-12 border-b border-rule">
            <span className="data text-brand font-bold text-xs uppercase tracking-wider">
              Specialized Divisions
            </span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-ink">
              Our Research Groups &amp; Laboratories
            </h2>
            <p className="mt-3 text-slate text-sm leading-relaxed">
              Autonomous, cross-functional research groups dedicated to foundational biological modeling, cloud bio-compute, and translational clinical science.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            {researchGroups.map((group) => {
              const Icon = group.icon
              return (
                <div
                  key={group.id}
                  className="rounded-2xl bg-paper border border-rule p-8 hover:border-brand/40 hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
                >
                  <div className="space-y-5">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-chalk border border-rule flex items-center justify-center text-brand">
                        <Icon className="w-6 h-6" />
                      </div>
                      {group.featured && (
                        <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded bg-amber-50 text-amber-700 border border-amber-200">
                          {group.featured}
                        </span>
                      )}
                    </div>

                    <div>
                      <span className="data text-xs text-brand font-semibold uppercase">{group.subtitle}</span>
                      <h3 className="text-xl font-bold text-ink mt-1">{group.name}</h3>
                    </div>

                    <p className="text-sm text-slate leading-relaxed">
                      {group.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {group.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] font-mono bg-chalk border border-rule px-2.5 py-1 rounded text-slate-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-rule flex items-center justify-between text-xs">
                    <span className="text-slate-500 font-mono flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                      Active Research Hub
                    </span>
                    <Link
                      href="/contact"
                      className="text-brand font-semibold hover:underline flex items-center gap-1"
                    >
                      <span>Collaborate</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Strategic Research Pillars */}
      <section className="py-20 md:py-28 bg-paper border-t border-rule">
        <div className="max-w-plate mx-auto px-6 md:px-10">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="data text-brand font-bold text-xs uppercase tracking-wider">
              Strategic Scientific Pillars
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-ink">
              Focus Areas Grounded in Real-World Need
            </h2>
            <p className="text-slate text-sm">
              Applying machine learning, single-cell perturbations, and protein language models to solve acute regional and global biological challenges.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {strategicPillars.map((pillar, idx) => {
              const Icon = pillar.icon
              return (
                <div
                  key={idx}
                  className="p-6 rounded-xl bg-chalk border border-rule hover:border-brand/30 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-lg bg-white border border-rule flex items-center justify-center text-brand">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-slate-200 text-slate-700">
                        {pillar.tag}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-ink">{pillar.title}</h3>
                    <p className="text-xs text-slate leading-relaxed">{pillar.description}</p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-rule/60 flex items-center justify-between">
                    <Link
                      href="/case-studies"
                      className="text-xs font-semibold text-brand hover:underline flex items-center gap-1"
                    >
                      <span>View related report</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Handbook Framework Anchor Banner */}
      <section className="on-deep bg-abyss py-16 border-t border-deep-rule">
        <div className="max-w-plate mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <div className="flex items-center gap-2 text-beam text-xs font-mono">
              <FileText className="w-4 h-4" />
              <span>EVIDENCE &amp; DECISION FRAMEWORKS</span>
            </div>
            <h3 className="text-2xl font-bold text-white">
              Built in Accordance with The Life Sciences AI Handbook
            </h3>
            <p className="text-sm text-on-deep-mid font-light leading-relaxed">
              Our modeling benchmarks, out-of-distribution validation, and clinical translation protocols adhere strictly to peer-reviewed standards in computational biology and autonomous laboratories.
            </p>
          </div>

          <a
            href="https://lifesciencesaihandbook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-light whitespace-nowrap flex items-center gap-2"
          >
            <span>Explore Handbook Standards</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  )
}
