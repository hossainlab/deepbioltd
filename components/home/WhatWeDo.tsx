import React from 'react'
import {
  Cpu,
  Link2,
  Dna,
  Binary,
  Bug,
  Activity,
} from 'lucide-react'

interface CapabilityItem {
  id: string
  title: string
  icon: React.ComponentType<{ className?: string }>
  description: string
  models: string[]
  link?: string
}

export const WhatWeDo: React.FC = () => {
  const capabilities: CapabilityItem[] = [
    {
      id: 'drug-design',
      title: 'Structure-Based Drug Design',
      icon: Cpu,
      description:
        'AlphaFold 2 and Boltz-2 for protein structure prediction. AutoDock Vina and DiffDock for virtual screening. PoseBusters for pose validity checking. ADMET-AI for property triage.',
      models: ['AlphaFold 2', 'Boltz-2', 'DiffDock', 'ADMET-AI'],
      link: '/services#drug-discovery',
    },
    {
      id: 'knowledge-graph',
      title: 'Knowledge Graph Repurposing',
      icon: Link2,
      description:
        'Open Targets, PrimeKG, and Hetionet for drug-disease-target evidence integration. LINCS L1000 / L2S2 for perturbational signature matching. SynergyFinder for combination prediction.',
      models: ['Open Targets', 'PrimeKG', 'LINCS L1000', 'SynergyFinder'],
      link: '/services#target-discovery',
    },
    {
      id: 'generative-chemistry',
      title: 'Generative Chemistry',
      icon: Dna,
      description:
        'REINVENT 4 for goal-directed molecule generation. Chemprop for property prediction. Retrosynthetic analysis with AiZynthFinder. Scaffold hopping and lead optimization.',
      models: ['REINVENT 4', 'Chemprop', 'AiZynthFinder'],
      link: '/services#binder-design',
    },
    {
      id: 'genomics-variants',
      title: 'Genomics & Variants',
      icon: Binary,
      description:
        'DeepVariant and GATK for variant calling. Nucleotide Transformer for genome-level reasoning. AlphaMissense for variant effect prediction. Population-specific PRS development.',
      models: ['DeepVariant', 'Nucleotide Transformer', 'AlphaMissense', 'PRS'],
      link: '/services#variant-calling',
    },
    {
      id: 'multi-omics',
      title: 'Multi-Omics & Microbiome',
      icon: Bug,
      description:
        'QIIME2 and MetaPhlAn for microbiome analysis. MOFA+ for multi-omics integration. MaAsLin2 for multivariate association. Single-cell analysis with Scanpy.',
      models: ['QIIME2', 'MetaPhlAn', 'MOFA+', 'Scanpy'],
      link: '/services#metagenomics',
    },
    {
      id: 'amr-surveillance',
      title: 'AMR Surveillance Analytics',
      icon: Activity,
      description:
        'ML-based resistance trend prediction and mutation modeling. Spatial-temporal tracking of AMR spread. One Health integration across human, animal, and environmental transmission vectors.',
      models: ['AMR ML Prediction', 'Spatial-Temporal', 'One Health'],
      link: '/case-studies',
    },
  ]

  return (
    <section id="what-we-do" className="w-full py-20 md:py-28 bg-[#F8FAFC] border-b border-rule relative scroll-mt-20 md:scroll-mt-24">
      <div className="max-w-container mx-auto px-6 md:px-10 flex flex-col gap-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-rule">
          <div className="flex flex-col gap-4 max-w-3xl">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 w-fit px-3.5 py-1 rounded-full border border-rule-strong bg-white shadow-subtle">
              <span className="w-2 h-2 rounded-full bg-[#205E92] animate-pulse" />
              <span className="text-xs font-mono font-semibold text-ink uppercase tracking-wider">
                What We Do
              </span>
            </div>

            <h2 className="text-heading-lg text-ink font-bold leading-tight">
              Capabilities built on pre-trained foundation models.
            </h2>

            <p className="text-base md:text-lg text-ink-secondary font-light leading-relaxed max-w-2xl">
              We leverage state-of-the-art AI models and adapt them to Bangladesh-specific health challenges. Here is our technology stack.
            </p>
          </div>
        </div>

        {/* 6 Capabilities Cards Grid (3x2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {capabilities.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.id}
                className="group relative flex flex-col justify-between p-8 rounded-3xl bg-white border border-rule/80 hover:border-[#205E92]/40 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] hover:shadow-[0_14px_36px_-8px_rgba(32,94,146,0.12)] hover:-translate-y-1 transition-all duration-300"
              >
                <div>
                  {/* Icon Container matching DeepBio Brand Logo Blue (#205E92) */}
                  <div className="w-12 h-12 rounded-2xl bg-[#205E92] text-white flex items-center justify-center shadow-sm group-hover:scale-105 group-hover:bg-[#1A4C77] transition-all duration-200">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-ink mt-6 mb-3 group-hover:text-[#205E92] transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-ink-secondary leading-relaxed font-light mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Model / Stack Tags */}
                <div className="pt-4 border-t border-rule/60 flex flex-wrap gap-1.5">
                  {item.models.map((model, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-full text-[11px] font-mono font-medium text-slate bg-surface-secondary border border-rule group-hover:border-[#205E92]/30 group-hover:text-ink transition-colors"
                    >
                      {model}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
