'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import {
  ShieldAlert,
  Dna,
  Sprout,
  Brain,
  ArrowRight,
  CheckCircle2,
  MapPin,
  Sparkles,
} from 'lucide-react'

interface ImpactDomain {
  id: string
  tag: string
  title: string
  locationBadge: string
  problemStatement: string
  aiApproach: string
  researchGoal: string
  targetOutcomes: string[]
  icon: React.ElementType
}

export const RegionalImpactShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('amr')

  const domains: ImpactDomain[] = [
    {
      id: 'amr',
      tag: 'Public Health',
      title: 'Pathogen Genomics & Real-Time AMR Surveillance',
      locationBadge: 'Dhaka Hospital ICUs & Municipal Wastewater',
      problemStatement:
        'Bangladesh faces critical burdens of Antimicrobial Resistance (AMR), with multidrug-resistant Klebsiella pneumoniae, Vibrio cholerae, and Salmonella escaping rapid standard microbiological detection.',
      aiApproach:
        'We are developing sequence-to-phenotype transformer models that predict antibiotic resistance profiles directly from raw NGS reads in hours rather than days.',
      researchGoal:
        'Enable automated early warning of resistance mutations (NDM-1, OXA-48, colistin resistance) to support hospital antibiotic stewardship.',
      targetOutcomes: [
        'Rapid genomic resistance classification from metagenomic samples',
        'Phylogenetic transmission tracking across clinical hospital ICUs',
        'Automated WHO GLASS-aligned genomic reporting protocols',
      ],
      icon: ShieldAlert,
    },
    {
      id: 'pop-genomics',
      tag: 'Population Genetics',
      title: 'Ancestry-Calibrated Polygenic Risk for South Asian Cohorts',
      locationBadge: 'Bengali & Regional Genetic Cohorts',
      problemStatement:
        'Global genomic databases (gnomAD, UK Biobank) remain over 80% European ancestry. Applying standard polygenic risk scores to South Asian patients leads to diagnostic miscalibration for cardiometabolic disease.',
      aiApproach:
        'We are developing ancestry-aware Bayesian models and LD-matrix fine-mapping trained specifically on South Asian genetic variations to accurately calibrate disease risk.',
      researchGoal:
        'Deliver clinically relevant, ancestry-tuned polygenic risk assessment for cardiovascular disease, type-2 diabetes, and familial cancer risk in Bengali populations.',
      targetOutcomes: [
        'Ancestry-adjusted PRS scoring for cardiometabolic phenotypes',
        'Variant pathogenicity ranking for underrepresented cohorts',
        'Open benchmarks comparing transferability across diverse ancestries',
      ],
      icon: Dna,
    },
    {
      id: 'climate-agri',
      tag: 'Climate Resilience',
      title: 'Delta Agricultural AI: Salinity-Tolerant Crop Design',
      locationBadge: 'Coastal Bengal & Saline Delta Belt',
      problemStatement:
        'Rising sea levels and saltwater intrusion in southern coastal Bangladesh threaten staple rice crop yields, demanding accelerated genetic discovery for stress tolerance.',
      aiApproach:
        'We are applying generative biological foundation models to simulate plant gene regulatory networks under hyper-saline and submergence stress conditions in Oryza sativa.',
      researchGoal:
        'Identify high-impact regulatory targets and guide-RNA sequences to assist agricultural breeders developing resilient local cultivars.',
      targetOutcomes: [
        'In silico mapping of salinity- and submergence-responsive QTLs',
        'Generative simulation of stress-induced transcriptomic states',
        'Collaborative research translation with national agricultural institutes',
      ],
      icon: Sprout,
    },
    {
      id: 'rare-disease',
      tag: 'Clinical AI',
      title: 'Non-Coding Pathogenicity in Rare Pediatric Disorders',
      locationBadge: 'Pediatric Clinical Research Centers',
      problemStatement:
        'Over 98% of the human genome is non-coding, making variant interpretation a major bottleneck in undiagnosed rare pediatric genetic diseases, particularly in consanguineous families.',
      aiApproach:
        'We are implementing genome-scale transformer architectures to model chromatin accessibility, splicing alterations, and regulatory disruption in non-coding DNA regions.',
      researchGoal:
        'Prioritize likely pathogenic non-coding mutations to shorten the diagnostic odyssey for children with unexplained developmental and neurological conditions.',
      targetOutcomes: [
        'Deep learning prioritization of non-coding regulatory variants',
        'Splice-disruption and promoter disruption scoring',
        'Structured analytical summaries for clinical geneticists',
      ],
      icon: Brain,
    },
  ]

  const currentDomain = domains.find((d) => d.id === activeTab) || domains[0]

  return (
    <div id="regional-focus" className="max-w-plate mx-auto px-6 md:px-10">
      {/* Boltz-Style Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-rule">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-rule px-3 py-1 text-xs font-mono text-ink bg-surface-secondary mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Active Research Initiatives</span>
          </div>

          <h2 className="text-heading-lg text-ink">
            We’re applying foundational AI to acute regional problems
          </h2>
          <p className="mt-3 text-deck text-ink-secondary font-light leading-relaxed">
            Rather than generic tech demos, our team in Dhaka focuses on high-consequence biological challenges across Bangladesh and South Asia.
          </p>
        </div>

        <Link
          href="/contact"
          className="group inline-flex items-center gap-2 h-9 pl-4 pr-1.5 rounded-full text-xs font-semibold bg-ink text-white hover:bg-brand transition-all whitespace-nowrap self-start md:self-auto"
        >
          <span>Propose a pilot</span>
          <span className="w-6 h-6 rounded-full bg-white text-ink flex items-center justify-center text-[10px] group-hover:rotate-45 transition-transform">
            &rarr;
          </span>
        </Link>
      </div>

      {/* Pill Tabs Selector (Boltz Style) */}
      <div className="mt-8 flex flex-wrap gap-2">
        {domains.map((dom) => {
          const isActive = dom.id === activeTab
          return (
            <button
              key={dom.id}
              onClick={() => setActiveTab(dom.id)}
              className={`h-9 px-4 rounded-full text-xs font-semibold transition-all ${
                isActive
                  ? 'bg-ink text-white shadow-sm'
                  : 'bg-surface-secondary text-slate hover:text-ink hover:bg-white border border-rule'
              }`}
            >
              {dom.tag} &bull; {dom.title.split(':')[0]}
            </button>
          )
        })}
      </div>

      {/* Clean Showcase Plate */}
      <div className="mt-6 rounded-2xl bg-surface-pale border border-rule p-6 md:p-10">
        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-10 items-start">
          {/* Left Column */}
          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white border border-rule px-3 py-1 text-xs font-mono text-slate">
                <MapPin className="w-3.5 h-3.5 text-amber-500" />
                {currentDomain.locationBadge}
              </span>
              <span className="rounded-full bg-amber-50 border border-amber-200 px-3 py-1 text-xs font-mono text-amber-800 font-medium">
                In Active R&amp;D
              </span>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-ink leading-tight">
              {currentDomain.title}
            </h3>

            <div className="space-y-4 text-sm leading-relaxed">
              <div className="p-4 rounded-xl bg-white border border-rule">
                <p className="font-mono text-slate uppercase text-[11px] mb-1 font-semibold">The Regional Challenge</p>
                <p className="text-ink-secondary font-light">{currentDomain.problemStatement}</p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-rule">
                <p className="font-mono text-[#205E92] uppercase text-[11px] mb-1 font-semibold">Our Computational &amp; AI Approach</p>
                <p className="text-ink-secondary font-light">{currentDomain.aiApproach}</p>
              </div>
            </div>

            <div>
              <p className="font-mono text-slate uppercase text-xs mb-3 font-semibold">Target Deliverables</p>
              <ul className="space-y-2">
                {currentDomain.targetOutcomes.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-ink-secondary">
                    <CheckCircle2 className="w-4 h-4 text-emerald shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <div className="rounded-xl bg-white border border-rule p-6 space-y-4 shadow-subtle">
              <p className="font-mono text-slate uppercase text-xs">Research Objective</p>
              <p className="text-sm text-ink-secondary leading-relaxed font-light">
                {currentDomain.researchGoal}
              </p>

              <div className="pt-3 border-t border-rule">
                <span className="font-mono text-slate uppercase text-[10px] block mb-1">Standard Alignment</span>
                <p className="font-mono text-xs text-[#205E92] font-medium">
                  The Life Sciences AI Handbook &bull; Evidence &amp; Evaluation
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-white border border-rule p-5 space-y-3 shadow-subtle">
              <p className="font-mono text-slate uppercase text-xs">Open Collaboration</p>
              <p className="text-xs text-ink-secondary leading-relaxed font-light">
                We invite partnerships with hospital ICUs, researchers, and agricultural institutes across Bangladesh and internationally.
              </p>
              <div className="pt-1">
                <Link
                  href="/contact"
                  className="text-xs font-semibold text-brand hover:underline flex items-center gap-1"
                >
                  <span>Propose a collaborative pilot study</span>
                  &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
