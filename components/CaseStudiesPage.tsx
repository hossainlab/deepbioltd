'use client'

import React, { useState } from 'react'
import {
  FileText,
  Sparkles,
  Download,
  Microscope,
  Dna,
  BrainCircuit,
  Database,
  FlaskConical,
  Activity,
  Layers,
  Search,
  CheckCircle2,
  Filter,
} from 'lucide-react'
import Link from 'next/link'

interface CaseStudy {
  id: string
  title: string
  category: 'Genomics' | 'Structural Biology' | 'Clinical' | 'Systems Biology'
  description: string
  featuredImage: string
  pdfUrl: string
  icon: React.ElementType
  tags: string[]
}

const caseStudies: CaseStudy[] = [
  // Genomics & Transcriptomics
  {
    id: 'deseq2-analysis',
    title: 'DESeq2 MASH RNA-seq Analysis',
    category: 'Genomics',
    description: 'Advanced differential gene expression analysis using DESeq2 and MASH to identify significant transcriptomic changes with high precision.',
    featuredImage: '/case_studies/img/deseq2_qc_volcano_plot.png',
    pdfUrl: '/case_studies/pdf/DESeq2 MASH RNA-seq Analysis.pdf',
    icon: Layers,
    tags: ['RNA-Seq', 'Transcriptomics', 'DESeq2', 'MASH']
  },
  {
    id: 'breast-cancer-survival',
    title: 'Breast Cancer Survival Risk Stratification',
    category: 'Clinical',
    description: 'Advanced risk stratification and survival analysis for breast cancer patients using multi-modal data and Kaplan-Meier estimation.',
    featuredImage: '/case_studies/img/figures_km_stratified.png',
    pdfUrl: '/case_studies/pdf/Breast Cancer Survival Risk Stratification.pdf',
    icon: Activity,
    tags: ['Oncology', 'Survival Analysis', 'Risk Stratification', 'Clinical']
  },
  {
    id: 'pcsk9-binder-design',
    title: 'PCSK9 Binder Design & Optimization',
    category: 'Structural Biology',
    description: 'Computational design and optimization of high-affinity binders targeting PCSK9 for cholesterol management therapeutics.',
    featuredImage: '/case_studies/img/PCSK9 Binder Design & Optimization.png',
    pdfUrl: '/case_studies/pdf/PCSK9 Binder Design & Optimization.pdf',
    icon: FlaskConical,
    tags: ['Protein Design', 'Binder Optimization', 'PCSK9', 'Therapeutics']
  },
  {
    id: 'primer-design',
    title: 'Primer Design',
    category: 'Genomics',
    description: 'Automated optimization of PCR primers for high specificity and efficiency in genomic assays.',
    featuredImage: '/case_studies/img/primer_design.png',
    pdfUrl: '/case_studies/pdf/Primer Design.pdf',
    icon: Dna,
    tags: ['PCR', 'Genomics', 'Assay Design']
  },
  {
    id: 'gene-regulatory-network',
    title: 'Gene Regulatory Network Inference in Glioblastoma',
    category: 'Systems Biology',
    description: 'Deciphering complex transcriptional regulatory networks in Glioblastoma to identify key drivers of tumor progression and therapeutic targets.',
    featuredImage: '/case_studies/img/figures_umap_gbm_subtypes.png',
    pdfUrl: '/case_studies/pdf/Gene Regulatory Network Inference.pdf',
    icon: Layers,
    tags: ['GRN', 'Glioblastoma', 'Transcription Factors', 'Systems Biology']
  },
  {
    id: 'phylogenetic-polygenic-risk',
    title: 'Phylogenetic Polygenic Risk Assessment',
    category: 'Genomics',
    description: 'Advanced assessment of polygenic risk scores integrated with phylogenetic information to enhance disease susceptibility prediction across diverse genetic backgrounds.',
    featuredImage: '/case_studies/img/figures_workflow_abstract.png',
    pdfUrl: '/case_studies/pdf/Cardiometabolic Polygenic Risk Assessment.pdf',
    icon: Activity,
    tags: ['Phylogenetics', 'Polygenic Risk', 'Genomics', 'Cardiometabolic']
  },
  {
    id: 'variant-annotation',
    title: 'Variant Annotation',
    category: 'Genomics',
    description: 'Functional characterization of genetic variants to assess their potential impact on protein function and disease.',
    featuredImage: '/biohpc/hpc01.jpg',
    pdfUrl: '#',
    icon: Search,
    tags: ['Genomics', 'VCF', 'Annotation']
  },
  {
    id: 'scrna-cell-annotation',
    title: 'scRNA-seq Cell Annotation',
    category: 'Genomics',
    description: 'Automated identification and labeling of cell types within single-cell transcriptomic datasets.',
    featuredImage: '/case_studies/img/figures_02_umap_celltypes.png',
    pdfUrl: '#',
    icon: Microscope,
    tags: ['Single-Cell', 'scRNA-seq', 'Cell Typing']
  },
  {
    id: 'spatial-transcriptomics',
    title: 'Spatial Transcriptomics Analysis',
    category: 'Genomics',
    description: 'Mapping gene expression patterns within their anatomical context to study tissue architecture.',
    featuredImage: '/biohpc/hpc03.jpg',
    pdfUrl: '#',
    icon: Layers,
    tags: ['Spatial', 'Tissue Mapping', 'Transcriptomics']
  },
  {
    id: 'pseudotime-analysis',
    title: 'Pseudotime Trajectory Analysis',
    category: 'Genomics',
    description: 'Reconstructing cellular developmental pathways and transitions from single-cell sequencing data.',
    featuredImage: '/images/papers/wnt.jpg',
    pdfUrl: '#',
    icon: Activity,
    tags: ['Trajectory', 'Cell Fate', 'Single-Cell']
  },

  // Structural Biology & Drug Discovery
  {
    id: 'binder-design',
    title: 'Binder Design',
    category: 'Structural Biology',
    description: 'Computational design of high-affinity protein binders for therapeutic and diagnostic applications.',
    featuredImage: '/images/papers/cct5.jpg',
    pdfUrl: '#',
    icon: FlaskConical,
    tags: ['Protein Design', 'Therapeutics', 'Docking']
  },
  {
    id: 'binding-affinity-ml',
    title: 'Binding Affinity ML Model Building',
    category: 'Structural Biology',
    description: 'Training predictive models to estimate the strength of interactions between molecules and their biological targets.',
    featuredImage: '/biohpc/hpc02.jpg',
    pdfUrl: '#',
    icon: BrainCircuit,
    tags: ['Machine Learning', 'Drug Discovery', 'Affinity']
  },
  {
    id: 'protein-structure-prediction',
    title: 'Protein Structure Prediction',
    category: 'Structural Biology',
    description: 'Predicting the 3D conformation of proteins from their amino acid sequences using advanced AI models like AlphaFold.',
    featuredImage: '/biohpc/hpc03.jpg',
    pdfUrl: '#',
    icon: Microscope,
    tags: ['AlphaFold', '3D Structure', 'AI']
  },
  {
    id: 'biomarker-panel-design',
    title: 'Biomarker Panel Design',
    category: 'Structural Biology',
    description: 'Selecting and validating sets of biological markers for early disease detection and monitoring.',
    featuredImage: '/images/papers/rnaseq-meta.jpg',
    pdfUrl: '#',
    icon: Activity,
    tags: ['Biomarkers', 'Diagnostics', 'Validation']
  },

  // Clinical & Precision Medicine
  {
    id: 'survival-analysis',
    title: 'Survival Analysis',
    category: 'Clinical',
    description: 'Modeling time-to-event data to understand factors influencing patient outcomes and therapeutic efficacy.',
    featuredImage: '/biohpc/hpc01.jpg',
    pdfUrl: '#',
    icon: Activity,
    tags: ['Clinical Trials', 'Epidemiology', 'R Statistics']
  },
  {
    id: 'polygenic-risk-score',
    title: 'Polygenic Risk Score Analysis',
    category: 'Clinical',
    description: 'Calculating cumulative genetic risk to predict individual susceptibility to complex diseases.',
    featuredImage: '/biohpc/hpc02.jpg',
    pdfUrl: '#',
    icon: Search,
    tags: ['PRS', 'Risk Prediction', 'GWAS']
  },
  {
    id: 'fine-mapping-analysis',
    title: 'Fine-mapping Analysis',
    category: 'Clinical',
    description: 'Identifying causal genetic variants within associated genomic regions to pinpoint disease drivers.',
    featuredImage: '/biohpc/hpc03.jpg',
    pdfUrl: '#',
    icon: Database,
    tags: ['Genetics', 'Causality', 'Fine-mapping']
  },
  {
    id: 'mendelian-randomization',
    title: 'Mendelian Randomization',
    category: 'Clinical',
    description: 'Using genetic variants as instrumental variables to investigate causal relationships between risk factors and outcomes.',
    featuredImage: '/images/papers/wnt.jpg',
    pdfUrl: '#',
    icon: BrainCircuit,
    tags: ['Causal Inference', 'Genetics', 'Public Health']
  },
  {
    id: 'clinical-trial-landscaping',
    title: 'Clinical Trial Landscaping',
    category: 'Clinical',
    description: 'Comprehensive analysis of the clinical trial ecosystem to inform strategic decision-making and trial design.',
    featuredImage: '/images/papers/rnaseq-meta.jpg',
    pdfUrl: '#',
    icon: Search,
    tags: ['Strategic Analysis', 'Pharma', 'Trials']
  },

  // Systems Biology & Networks
  {
    id: 'gene-regulatory-network-analysis',
    title: 'Gene Regulatory Network Analysis',
    category: 'Systems Biology',
    description: 'Mapping the complex interactions between transcription factors and target genes to uncover regulatory mechanisms.',
    featuredImage: '/biohpc/hpc01.jpg',
    pdfUrl: '#',
    icon: Layers,
    tags: ['Networks', 'Transcription', 'GRN']
  },
  {
    id: 'proteomics-de-analysis',
    title: 'Proteomics Differential Expression Analysis',
    category: 'Systems Biology',
    description: 'Identifying significant changes in protein abundance across biological samples using mass spectrometry data.',
    featuredImage: '/biohpc/hpc02.jpg',
    pdfUrl: '#',
    icon: Database,
    tags: ['Proteomics', 'Mass Spec', 'Statistics']
  },
  {
    id: 'gene-coexpression-network',
    title: 'Gene Co-expression Network Analysis',
    category: 'Systems Biology',
    description: 'Identifying clusters of genes with correlated expression patterns to discover functional modules (WGCNA).',
    featuredImage: '/biohpc/hpc03.jpg',
    pdfUrl: '#',
    icon: Database,
    tags: ['WGCNA', 'Co-expression', 'Modules']
  },
  {
    id: 'cell-cell-communication',
    title: 'Cell-cell Communication Analysis',
    category: 'Systems Biology',
    description: 'Deciphering the signaling interactions between different cell types in a tissue or microenvironment.',
    featuredImage: '/images/papers/wnt.jpg',
    pdfUrl: '#',
    icon: BrainCircuit,
    tags: ['Signaling', 'Single-Cell', 'Interactions']
  },
  {
    id: 'microbiome-analysis',
    title: 'Microbiome Analysis',
    category: 'Systems Biology',
    description: 'Characterizing the composition and function of microbial communities in various biological and environmental samples.',
    featuredImage: '/biohpc/hpc01.jpg',
    pdfUrl: '#',
    icon: Microscope,
    tags: ['Metagenomics', '16S', 'Microbiology']
  }
]

export const CaseStudiesPage: React.FC = () => {
  const [filter, setFilter] = useState<string>('All')
  const categories = ['All', 'Genomics', 'Structural Biology', 'Clinical', 'Systems Biology']

  const filteredStudies = filter === 'All' 
    ? caseStudies 
    : caseStudies.filter(study => study.category === filter)

  return (
    <article className="pt-0 min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative bg-brand-dark pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-brand-primary/20 blur-[150px] rounded-full"></div>
          <div className="absolute bottom-1/4 -left-20 w-[400px] h-[400px] bg-indigo-500/10 blur-[100px] rounded-full"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-secondary text-[10px] font-bold uppercase tracking-[0.3em] backdrop-blur-md mb-8">
            <Sparkles className="w-4 h-4" />
            Biomni Lab Use Cases
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight mb-6">
            Case <span className="brand-text-gradient">Studies</span>
          </h1>

          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-light">
            Comprehensive computational biology workflows and real-world applications of our agentic lab assistant.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="sticky top-20 z-40 bg-white border-b border-slate-100 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-center gap-4">
          <div className="flex items-center gap-2 mr-4 text-slate-400">
            <Filter className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-wider">Filter by:</span>
          </div>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                filter === cat 
                  ? 'bg-brand-primary text-white shadow-lg shadow-brand-primary/25' 
                  : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStudies.map((study) => (
              <div
                key={study.id}
                className="group bg-white rounded-[2.5rem] border border-slate-100 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col hover:-translate-y-2"
              >
                {/* Image Section */}
                <div className="relative h-64 overflow-hidden bg-white flex items-center justify-center border-b border-slate-50 p-6">
                  <img
                    src={study.featuredImage}
                    alt={study.title}
                    className="max-w-full max-h-full object-contain transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute bottom-4 left-6">
                    <span className="px-3 py-1 rounded-full bg-brand-primary text-white text-[10px] font-bold uppercase tracking-wider shadow-lg">
                      {study.category}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 flex-grow flex flex-col">
                  <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">
                    <span className="block text-slate-900 font-bold mb-2">{study.title}</span>
                    {study.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {study.tags.map((tag) => (
                      <span key={tag} className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center justify-center mt-auto pt-6 border-t border-slate-50">
                    <a
                      href={study.pdfUrl}
                      className="flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-brand-primary transition-colors"
                    >
                      <Download className="w-4 h-4" />
                      View PDF
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation CTA */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="w-20 h-20 bg-brand-primary/10 rounded-[2rem] flex items-center justify-center mx-auto mb-10">
            <Search className="w-10 h-10 text-brand-primary" />
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight">Need Expert Analysis?</h2>
          <p className="text-lg text-slate-500 mb-10 leading-relaxed">
            From single-cell transcriptomics to complex structural biology, our team is equipped to handle your most challenging biological data.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:info@deepbioltd.com?subject=Project Inquiry"
              className="px-10 py-5 bg-brand-primary text-white rounded-2xl font-bold hover:bg-brand-dark transition-all shadow-xl hover:shadow-brand-primary/25"
            >
              Start a Consultation
            </a>
            <Link
              href="/services"
              className="px-10 py-5 bg-slate-50 text-slate-700 rounded-2xl font-bold hover:bg-slate-100 transition-all border border-slate-200"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </article>
  )
}
