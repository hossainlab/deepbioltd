'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import {
  Layers,
  ArrowRight,
  Sparkles,
  ExternalLink,
  ChevronRight,
  Dna,
  Cpu,
  Activity,
  GitBranch,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react'

interface ModelSpec {
  id: string
  name: string
  category: string
  icon: React.ComponentType<{ className?: string }>
  tags: string[]
  headline: string
  description: string
  handbookTopic: string
  benchmarks: { label: string; value: string }[]
  inputs: string
  outputs: string
  pipelineLink: string
}

export const BoltzModelsAccordion: React.FC = () => {
  const [activeId, setActiveId] = useState<string>('boltz-2')

  const models: ModelSpec[] = [
    {
      id: 'boltz-2',
      name: 'Boltz-2 & AlphaFold 3',
      category: 'Biomolecular Complex Prediction',
      icon: Cpu,
      tags: ['All-Atom Structure', 'Protein-Ligand', 'Cofactors'],
      headline: 'Full atomistic resolution across complex multi-molecular assemblies.',
      description:
        'All-atom biomolecular structure prediction resolving complex protein-ligand, protein-nucleic acid, and modified residue interactions with high atomic fidelity. Predicts binding interfaces, conformational equilibria, and cofactor coordination for challenging drug targets.',
      handbookTopic: 'Structural AI & All-Atom Complexes',
      benchmarks: [
        { label: 'Docking RMSD', value: '< 1.8 Å' },
        { label: 'Modality', value: 'Protein + Small Molecule + RNA' },
        { label: 'Confidence Metric', value: 'pLDDT & PAE Matrix' },
      ],
      inputs: 'FASTA sequences + SMILES / SDF ligands + Ion stoichiometry',
      outputs: 'PDB / mmCIF structures with full confidence scores & interface analysis',
      pipelineLink: '/services#drug-discovery',
    },
    {
      id: 'boltzgen',
      name: 'BoltzGen & RFdiffusion',
      category: 'Generative De Novo Design',
      icon: Dna,
      tags: ['Generative Diffusion', 'De Novo Binders', 'Peptides'],
      headline: 'Target-conditioned structural diffusion for functional molecular binders.',
      description:
        'Generates custom functional de novo macrocyclic peptides, therapeutic protein binders, and catalytic active sites. Coupled with ProteinMPNN sequence design and molecular dynamics relaxation to guarantee stability and selective binding.',
      handbookTopic: 'Generative Protein & Binder Design',
      benchmarks: [
        { label: 'Affinity Range', value: 'Sub-nanomolar (Kd < 10⁻⁸ M)' },
        { label: 'Generation Mode', value: 'Hotspot-conditioned inpainting' },
        { label: 'Filtering', value: 'Self-consistency score (scRMSD < 2Å)' },
      ],
      inputs: 'Target PDB coordinate + specified binding epitope residues',
      outputs: 'Ranked candidate binder backbones + designed sequence variants',
      pipelineLink: '/services#binder-design',
    },
    {
      id: 'esm-3',
      name: 'ESM-3 & ProtGPT2',
      category: 'Protein Sequence & Language AI',
      icon: Sparkles,
      tags: ['Sequence LM', 'Zero-Shot Variant', 'Fitness Landscape'],
      headline: 'Billion-parameter generative representations of evolutionary sequence space.',
      description:
        'Multimodal biological sequence language models predicting zero-shot variant effects, mutation fitness landscapes, and evolutionary constraints. Enables rapid pathogen mutation prioritization, regional resistance forecasting, and stability engineering.',
      handbookTopic: 'Evolutionary Scale Protein Modeling',
      benchmarks: [
        { label: 'Pre-training Scale', value: '98 Billion tokens across all kingdoms' },
        { label: 'Evaluation', value: 'Deep mutational scanning (DMS) correlation' },
        { label: 'Throughput', value: 'Millions of zero-shot variant scores / hr' },
      ],
      inputs: 'Wild-type protein sequence + candidate mutation lists',
      outputs: 'Log-odds fitness delta scores + variant tolerance heatmaps',
      pipelineLink: '/services#variant-calling',
    },
    {
      id: 'geneformer',
      name: 'Geneformer & scGPT',
      category: 'Single-Cell & Spatial Omics',
      icon: Activity,
      tags: ['Single-Cell Omics', 'In Silico Perturbation', 'Cell State Transitions'],
      headline: 'Transformer foundation models modeling cell states and disease trajectories.',
      description:
        'Pre-trained on 30+ million single-cell transcriptomes to understand non-linear gene regulatory networks. Simulates in-silico genetic knockdowns, chemical drug perturbations, and cellular state transitions to pinpoint novel therapeutic targets without costly wet-lab trials.',
      handbookTopic: 'Transcriptomic Foundation Models',
      benchmarks: [
        { label: 'Cell Corpus', value: '30M+ human scRNA-seq profiles' },
        { label: 'Task Support', value: 'In silico knockout, dosage simulation' },
        { label: 'Spatial Integration', value: 'Spatial transcriptomics alignment' },
      ],
      inputs: 'h5ad single-cell count matrices + candidate gene perturbation targets',
      outputs: 'Perturbed cell-state trajectories + differential gene shift scores',
      pipelineLink: '/services#metagenomics',
    },
    {
      id: 'enformer',
      name: 'Enformer & Nucleotide Transformer',
      category: 'Genomic Sequence & Regulatory Epigenomics',
      icon: GitBranch,
      tags: ['Genomics LM', 'Non-Coding Pathogenicity', 'Epigenomics'],
      headline: 'Long-range regulatory decoding across diverse regional genomes.',
      description:
        'Long-range genomic language models predicting chromatin accessibility, transcription factor binding, histone modifications, and non-coding variant pathogenicity with 100kb+ receptive field. Calibrated specifically against South Asian genomic diversity.',
      handbookTopic: 'Regulatory Epigenomics & Non-Coding AI',
      benchmarks: [
        { label: 'Context Length', value: '100,000+ base pairs receptive field' },
        { label: 'Epigenetic Tracks', value: '5,000+ ENCODE & Roadmap epigenetic tracks' },
        { label: 'Cohort Focus', value: 'South Asian population non-coding variation' },
      ],
      inputs: 'VCF genomic variant files + reference FASTA context',
      outputs: 'Predicted delta epigenetic tracks + non-coding pathogenicity index',
      pipelineLink: '/services#variant-calling',
    },
  ]

  const activeModel = models.find((m) => m.id === activeId) || models[0]
  const ActiveIcon = activeModel.icon

  return (
    <section id="models" className="w-full py-20 md:py-28 bg-[#F4F7F6] border-b border-rule scroll-mt-20 md:scroll-mt-24">
      <div className="max-w-container mx-auto px-6 md:px-10 flex flex-col gap-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-rule">
          <div className="flex flex-col gap-4 max-w-3xl">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 w-fit px-3.5 py-1 rounded-full border border-rule-strong bg-white shadow-subtle">
              <Layers className="w-3.5 h-3.5 text-[#205E92]" />
              <span className="text-xs font-mono font-semibold text-ink uppercase tracking-wider">
                Foundational Models
              </span>
            </div>

            <h2 className="text-heading-lg text-ink font-bold leading-tight">
              Biomolecular intelligence across every scale.
            </h2>

            <p className="text-base md:text-lg text-ink-secondary font-light leading-relaxed max-w-2xl">
              From single nucleotides to all-atom macromolecular complexes, explore the five foundation model engines powering our computational workflows.
            </p>
          </div>
        </div>

        {/* Master-Detail Interactive Architecture Explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-8 items-start">
          {/* Left: Model Selector List */}
          <div className="flex flex-col gap-3">
            {models.map((model) => {
              const isSelected = activeId === model.id
              const Icon = model.icon
              return (
                <button
                  key={model.id}
                  onClick={() => setActiveId(model.id)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-200 flex items-center justify-between group ${
                    isSelected
                      ? 'bg-white border-[#205E92] shadow-sm'
                      : 'bg-white/60 border-rule hover:bg-white hover:border-rule-strong'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center transition-colors ${
                        isSelected
                          ? 'bg-[#205E92] text-white'
                          : 'bg-surface-secondary text-slate group-hover:text-ink'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className={`text-base font-bold transition-colors ${
                          isSelected ? 'text-[#205E92]' : 'text-ink group-hover:text-[#205E92]'
                        }`}>
                          {model.name}
                        </h3>
                      </div>
                      <p className="text-xs text-slate font-mono mt-0.5">
                        {model.category}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span
                      className={`hidden sm:inline-block px-2.5 py-0.5 rounded-full text-[11px] font-mono border ${
                        isSelected
                          ? 'bg-blue-50 text-[#205E92] border-blue-200 font-semibold'
                          : 'bg-transparent text-slate border-rule'
                      }`}
                    >
                      {model.tags[0]}
                    </span>
                    <ChevronRight
                      className={`w-4 h-4 transition-transform ${
                        isSelected
                          ? 'text-[#205E92] translate-x-0.5'
                          : 'text-slate-400 group-hover:text-slate group-hover:translate-x-0.5'
                      }`}
                    />
                  </div>
                </button>
              )
            })}
          </div>

          {/* Right: Technical Specification & Benchmark Console */}
          <div className="bg-white rounded-3xl p-8 border border-rule shadow-[0_4px_24px_-4px_rgba(0,0,0,0.04)] flex flex-col justify-between transition-all">
            <div className="space-y-6">
              {/* Header with Category Badge & Handbook Reference */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-rule">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-[#205E92]">
                    <ActiveIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate font-semibold block">
                      Architecture Pillar
                    </span>
                    <span className="text-sm font-bold text-ink">{activeModel.name}</span>
                  </div>
                </div>

                <span className="px-3 py-1 rounded-full text-xs font-mono font-medium text-[#205E92] bg-blue-50 border border-blue-200">
                  {activeModel.handbookTopic}
                </span>
              </div>

              {/* Headline & Description */}
              <div>
                <h4 className="text-xl font-bold text-ink leading-snug">
                  {activeModel.headline}
                </h4>
                <p className="mt-3 text-sm text-ink-secondary leading-relaxed font-light">
                  {activeModel.description}
                </p>
              </div>

              {/* Benchmark / Technical Specs Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                {activeModel.benchmarks.map((b, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-surface-secondary border border-rule/80 flex flex-col justify-between"
                  >
                    <span className="text-[11px] font-mono text-slate uppercase tracking-wide">
                      {b.label}
                    </span>
                    <span className="text-xs font-bold text-ink mt-1.5 font-mono">
                      {b.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Input / Output Pipeline Specifications */}
              <div className="space-y-2.5 pt-2 text-xs font-mono">
                <div className="p-3 rounded-xl bg-[#F8FAFC] border border-rule flex items-start gap-2.5">
                  <span className="px-1.5 py-0.5 rounded bg-blue-100 text-[#205E92] font-bold text-[10px] shrink-0">
                    INPUT
                  </span>
                  <span className="text-slate-700 leading-relaxed font-sans text-xs">
                    {activeModel.inputs}
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-[#F8FAFC] border border-rule flex items-start gap-2.5">
                  <span className="px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold text-[10px] shrink-0">
                    OUTPUT
                  </span>
                  <span className="text-slate-700 leading-relaxed font-sans text-xs">
                    {activeModel.outputs}
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="mt-8 pt-5 border-t border-rule flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <Link
                  href={activeModel.pipelineLink}
                  className="h-9 px-4 rounded-full inline-flex items-center gap-1.5 text-xs font-semibold bg-ink text-white hover:bg-[#205E92] transition-all shadow-subtle"
                >
                  <span>Explore pipeline</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <Link
                  href="/contact"
                  className="h-9 px-4 rounded-full inline-flex items-center text-xs font-semibold border border-rule-strong bg-white hover:bg-surface-secondary text-ink transition-all shadow-subtle"
                >
                  Collaborate
                </Link>
              </div>

              <a
                href="https://lifesciencesaihandbook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium text-slate hover:text-[#205E92] inline-flex items-center gap-1 transition-colors"
              >
                <span>Handbook Reference</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
