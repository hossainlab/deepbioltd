'use client'

import React from 'react'
import Link from 'next/link'
import {
  Layers,
  Database,
  Cpu,
  Terminal,
  CheckCircle2,
  FlaskConical,
  ArrowRight,
  ShieldCheck,
  FileCheck,
  ExternalLink,
} from 'lucide-react'

const steps = [
  {
    icon: Database,
    phase: 'Phase I',
    title: 'Data Ingestion & Sovereignty',
    subtitle: 'Ethical Custody & High-Fidelity Preprocessing',
    description:
      'Every collaboration begins with strict ethics-approved data governance agreements. We ingest raw FASTQ, count matrices, atomic coordinate PDBs, and clinical metadata with SHA-256 cryptographic checksums verified at each transfer stage.',
    details: [
      'Encrypted client data silos',
      'Quality control & adapter trimming',
      'Batch-effect correction protocols',
    ],
  },
  {
    icon: Cpu,
    phase: 'Phase II',
    title: 'Distributed BioHPC Compute',
    subtitle: 'Containerized & GPU-Accelerated Pipelines',
    description:
      'Deploying scalable cloud compute clusters running containerized Nextflow and Snakemake workflows. Sequence alignments, variant calling, and high-throughput molecular dynamics run on dedicated GPU nodes with deterministic versioning.',
    details: [
      'NVIDIA H100/A100 GPU acceleration',
      'Nextflow Tower workflow orchestration',
      'Deterministic container locking (Docker/Singularity)',
    ],
  },
  {
    icon: Terminal,
    phase: 'Phase III',
    title: 'Biological Foundation Modeling',
    subtitle: 'Generative AI & Sequence-to-Structure Inference',
    description:
      'The core AI phase applying deep generative transformers, diffusion models, and structural neural networks. We predict pathogenic variant impact, reconstruct single-cell regulatory circuits, and design de novo protein binders.',
    details: [
      'RFdiffusion & AlphaFold structural models',
      'pysynthbio single-cell synthesis',
      'Ancestry-calibrated Bayesian networks',
    ],
  },
  {
    icon: FlaskConical,
    phase: 'Phase IV',
    title: 'Bench & Clinical Cross-Validation',
    subtitle: 'Holdout Testing & Publication-Grade Deliverables',
    description:
      'Every AI prediction undergoes rigorous out-of-distribution validation, phylogenetic cross-validation, and correlation against empirical biological benchmarks before compilation into a comprehensive scientific report.',
    details: [
      'Held-out cohort validation',
      'Publication-ready vector figures',
      'Complete reproducible code & data packages',
    ],
  },
]

export const Methodology: React.FC = () => {
  return (
    <div className="min-h-screen bg-paper">
      {/* Header Section */}
      <section className="on-deep relative overflow-hidden bg-abyss pt-36 pb-20 md:pt-44 md:pb-28 border-b border-deep-rule">
        <div className="absolute inset-0 bio-grid-pattern opacity-30 pointer-events-none" />
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-brand/20 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-plate mx-auto px-6 md:px-10 relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-900 border border-slate-700 px-3.5 py-1.5 text-xs font-mono text-beam mb-6">
            <Layers className="w-3.5 h-3.5 text-amber-400" />
            <span>Scientific Pipeline Architecture</span>
          </div>

          <h1 className="text-display text-white max-w-[18ch]">
            Rigorous 4-Phase Computational Life Science Pipeline.
          </h1>

          <p className="mt-6 max-w-[58ch] text-deck text-on-deep-mid font-light leading-relaxed">
            DeepBio’s methodology bridges biological truth and computational rigor. We transform noisy high-dimensional sequencing data into verifiable clinical findings through deterministic, reproducible workflows.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link href="/contact" className="btn-light">
              <span>Scope a Project</span>
              <ArrowRight className="w-4 h-4 ml-2 inline-block" />
            </Link>
            <Link href="/case-studies" className="btn-outline-light">
              View Worked Reports
            </Link>
          </div>
        </div>
      </section>

      {/* Step-by-Step Breakdown */}
      <section className="py-20 md:py-28 bg-paper">
        <div className="max-w-plate mx-auto px-6 md:px-10">
          <div className="space-y-16">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div
                  key={index}
                  className="grid lg:grid-cols-[14rem_1fr_18rem] gap-8 p-8 rounded-2xl bg-chalk border border-rule hover:border-brand/40 transition-all duration-200"
                >
                  {/* Left Phase Label */}
                  <div>
                    <span className="data text-brand font-bold text-xs uppercase tracking-wider block mb-1">
                      {step.phase}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-white border border-rule flex items-center justify-center text-brand mb-3">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono text-slate-500">Pipeline Stage 0{index + 1}/04</span>
                  </div>

                  {/* Middle Description */}
                  <div className="space-y-3">
                    <span className="data text-slate-500 text-xs uppercase font-semibold">{step.subtitle}</span>
                    <h2 className="text-2xl font-bold text-ink">{step.title}</h2>
                    <p className="text-sm text-slate leading-relaxed font-light">{step.description}</p>
                  </div>

                  {/* Right Details Checklist */}
                  <div className="p-4 rounded-xl bg-white border border-rule space-y-2.5 self-center">
                    <span className="data text-slate-400 uppercase text-[10px] block mb-2 font-semibold">Key Deliverables</span>
                    {step.details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Standards & Evidence Framework Banner */}
      <section className="on-deep bg-abyss py-16 border-t border-deep-rule">
        <div className="max-w-plate mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <div className="flex items-center gap-2 text-beam text-xs font-mono">
              <ShieldCheck className="w-4 h-4" />
              <span>UNCOMPROMISING SCIENTIFIC INTEGRITY</span>
            </div>
            <h3 className="text-2xl font-bold text-white">
              Compliant with International Peer-Review Standards
            </h3>
            <p className="text-sm text-on-deep-mid font-light leading-relaxed">
              Our computational methodologies adhere strictly to the benchmarking and reproducibility guidelines outlined in The Life Sciences AI Handbook.
            </p>
          </div>

          <Link href="/contact" className="btn-light whitespace-nowrap flex items-center gap-2">
            <span>Partner With Our Lab</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
