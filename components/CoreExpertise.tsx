'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import {
  Dna,
  FlaskConical,
  Microscope,
  BrainCircuit,
  Database,
  BarChart3,
  Cpu,
  FileText,
  Layers,
  Atom,
  Syringe,
  Bug,
  Pill,
  TestTube,
  Code2,
  ArrowRight,
  X,
  CheckCircle2,
  Mail,
} from 'lucide-react'

const expertiseList = [
  {
    id: 'ngs-analysis',
    title: 'NGS Data Analysis',
    description: 'Comprehensive sequencing analysis pipelines tailored to your sample size and complexity.',
    icon: Dna,
    color: 'bg-brand-primary/10 text-brand-primary',
    overview: 'Our NGS Data Analysis service handles everything from raw data quality control to advanced variant calling and differential expression analysis. We support WGS, WES, RNA-Seq, ChIP-Seq, and more.',
    features: ['Quality Control (FastQC, MultiQC)', 'Read Mapping & Alignment', 'Variant Calling (SNPs/Indels)', 'Differential Expression Analysis'],
    deliverables: ['BAM/VCF files', 'Analysis Reports', 'QC Metrics', 'Publication Figures'],
  },
  {
    id: 'transcriptomics',
    title: 'Transcriptomics',
    description: 'Explore gene expression dynamics and regulatory networks with high-resolution analysis.',
    icon: Microscope,
    color: 'bg-brand-primary/10 text-brand-primary',
    overview: 'Comprehensive transcriptomic analysis to understand gene expression patterns, identify differentially expressed genes, and uncover regulatory mechanisms.',
    features: ['RNA-Seq Analysis', 'Gene Expression Profiling', 'Alternative Splicing Analysis', 'Long Non-coding RNA Analysis'],
    deliverables: ['Expression Matrices', 'Differential Expression Results', 'Pathway Analysis', 'Visualization Plots'],
  },
  {
    id: 'proteomics',
    title: 'Proteomics',
    description: 'Analyze proteins, their structures, and interactions with comprehensive proteomics solutions.',
    icon: Atom,
    color: 'bg-brand-primary/10 text-brand-primary',
    overview: 'Go beyond the genome to understand the proteome. Our proteomics services help identify, quantify, and characterize proteins in complex biological samples.',
    features: ['Mass Spectrometry Analysis', 'Protein Identification', 'Post-translational Modifications', 'Protein-Protein Interactions'],
    deliverables: ['Protein Lists', 'Quantification Data', 'PTM Reports', 'Interaction Networks'],
  },
  {
    id: 'molecular-docking',
    title: 'Molecular Docking',
    description: 'Accelerate drug discovery with high-throughput virtual screening and precision docking.',
    icon: FlaskConical,
    color: 'bg-brand-primary/10 text-brand-primary',
    overview: 'Leverage computational chemistry to predict how small molecules interact with protein targets. Our molecular docking services support structure-based drug design.',
    features: ['Receptor Preparation', 'Ligand Library Screening', 'Binding Site Analysis', 'Affinity Prediction'],
    deliverables: ['Docking Scores', 'Binding Poses', 'Interaction Reports', '3D Visualizations'],
  },
  {
    id: 'md-simulation',
    title: 'MD Simulation',
    description: 'Simulate biomolecular behavior at atomic resolution to understand stability and dynamics.',
    icon: Cpu,
    color: 'bg-brand-primary/10 text-brand-primary',
    overview: 'Molecular dynamics simulations provide insights into the dynamic behavior of biomolecules, helping understand protein folding, stability, and ligand binding.',
    features: ['System Setup & Equilibration', 'Production Runs', 'Trajectory Analysis', 'Free Energy Calculations'],
    deliverables: ['Trajectory Files', 'RMSD/RMSF Plots', 'Energy Reports', 'Structural Insights'],
  },
  {
    id: 'vaccine-design',
    title: 'Epitope Prediction & Vaccine Design',
    description: 'In silico identification of immunogenic epitopes and multi-epitope vaccine candidates.',
    icon: Syringe,
    color: 'bg-brand-primary/10 text-brand-primary',
    overview: 'Computational immunology services for identifying T-cell and B-cell epitopes, designing multi-epitope vaccines, and predicting immunogenicity.',
    features: ['B-cell Epitope Prediction', 'T-cell Epitope Mapping', 'Allergenicity Assessment', 'Vaccine Construct Design'],
    deliverables: ['Epitope Lists', 'Vaccine Sequences', 'Immunogenicity Reports', '3D Models'],
  },
  {
    id: 'metagenomics',
    title: 'Metagenomics',
    description: 'Uncover the diversity and function of complex microbial ecosystems.',
    icon: Bug,
    color: 'bg-brand-primary/10 text-brand-primary',
    overview: 'Analyze microbial communities directly from environmental samples. Our metagenomic services reveal taxonomic composition and functional potential.',
    features: ['16S/ITS Amplicon Analysis', 'Shotgun Metagenomics', 'Taxonomic Profiling', 'Functional Annotation'],
    deliverables: ['OTU Tables', 'Diversity Metrics', 'Taxonomic Reports', 'Functional Profiles'],
  },
  {
    id: 'pharmacogenomics',
    title: 'Pharmacogenomics',
    description: 'Optimize drug therapy by analyzing genetic variations that influence drug response.',
    icon: Pill,
    color: 'bg-brand-primary/10 text-brand-primary',
    overview: 'Personalized medicine through genomics. We analyze genetic variants that affect drug metabolism, efficacy, and adverse reactions.',
    features: ['Variant Annotation', 'Drug-Gene Interactions', 'Dosing Recommendations', 'Clinical Interpretation'],
    deliverables: ['PGx Reports', 'Variant Classifications', 'Clinical Guidelines', 'Patient Summaries'],
  },
  {
    id: 'single-cell',
    title: 'Single-Cell Analysis',
    description: 'Dissect tissue heterogeneity and cellular dynamics with cutting-edge single-cell analysis.',
    icon: TestTube,
    color: 'bg-brand-primary/10 text-brand-primary',
    overview: 'Analyze gene expression at single-cell resolution. Our services include cell type identification, trajectory analysis, and spatial transcriptomics.',
    features: ['Cell Clustering', 'Marker Gene Identification', 'Trajectory Analysis', 'Cell-Cell Communication'],
    deliverables: ['UMAP/tSNE Plots', 'Cluster Annotations', 'Marker Lists', 'Trajectory Maps'],
  },
  {
    id: 'machine-learning',
    title: 'Machine Learning for Biology',
    description: 'Harness AI to discover patterns, predict outcomes, and classify biological data.',
    icon: BrainCircuit,
    color: 'bg-brand-primary/10 text-brand-primary',
    overview: 'Apply state-of-the-art machine learning algorithms to biological datasets. From classification to deep learning, we build predictive models for your research.',
    features: ['Feature Engineering', 'Model Training & Validation', 'Deep Learning', 'Interpretability Analysis'],
    deliverables: ['Trained Models', 'Performance Metrics', 'Feature Importance', 'Predictions'],
  },
  {
    id: 'data-visualization',
    title: 'Data Visualization & Reporting',
    description: 'Transform complex data into clear, compelling, and publication-ready visual narratives.',
    icon: BarChart3,
    color: 'bg-brand-primary/10 text-brand-primary',
    overview: 'Professional visualization services to communicate your findings effectively. We create interactive dashboards and publication-quality figures.',
    features: ['Custom Plot Design', 'Interactive Dashboards', 'Statistical Graphics', 'Infographics'],
    deliverables: ['High-res Figures', 'Interactive Reports', 'Data Dashboards', 'Presentation Materials'],
  },
  {
    id: 'bioinformatics-dev',
    title: 'Custom Bioinformatics Development',
    description: 'Tailored scripts and pipelines using Python, R, or Bash for specific research needs.',
    icon: Code2,
    color: 'bg-brand-primary/10 text-brand-primary',
    overview: 'Bespoke bioinformatics solutions for unique research challenges. We develop custom tools, pipelines, and databases tailored to your specifications.',
    features: ['Pipeline Development', 'Tool Customization', 'Database Design', 'API Integration'],
    deliverables: ['Source Code', 'Documentation', 'Docker Containers', 'User Guides'],
  },
]

interface ExpertiseModalProps {
  expertise: typeof expertiseList[0]
  onClose: () => void
}

const ExpertiseModal: React.FC<ExpertiseModalProps> = ({ expertise, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative bg-white rounded-[2rem] max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center hover:bg-slate-200 transition-colors"
        >
          <X className="w-5 h-5 text-slate-600" />
        </button>

        <div className="p-10">
          <div className={`w-16 h-16 rounded-[1.25rem] flex items-center justify-center mb-6 ${expertise.color}`}>
            <expertise.icon className="w-8 h-8" />
          </div>

          <h3 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">{expertise.title}</h3>
          <p className="text-slate-500 mb-8">{expertise.overview}</p>

          <div className="mb-8">
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">What We Offer</h4>
            <div className="grid grid-cols-2 gap-3">
              {expertise.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
                  <CheckCircle2 className="w-4 h-4 text-teal-500 flex-shrink-0" />
                  <span className="text-sm text-slate-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-10">
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">Deliverables</h4>
            <div className="flex flex-wrap gap-2">
              {expertise.deliverables.map((item, idx) => (
                <span key={idx} className="px-4 py-2 bg-brand-primary/5 text-brand-primary rounded-full text-sm font-medium">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-4">
            <a
              href={`mailto:deepbiobd@gmail.com?subject=Inquiry about ${expertise.title}`}
              className="flex-1 py-4 bg-brand-primary text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-brand-dark transition-colors"
            >
              <Mail className="w-5 h-5" />
              Contact Us
            </a>
            <button
              onClick={onClose}
              className="px-8 py-4 bg-slate-100 text-slate-700 rounded-xl font-bold hover:bg-slate-200 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export const CoreExpertise: React.FC = () => {
  const [selectedExpertise, setSelectedExpertise] = useState<typeof expertiseList[0] | null>(null)

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-20 space-y-6">
        <h2 className="text-brand-primary font-bold uppercase tracking-[0.3em] text-xs">Our Core Expertise</h2>
        <p className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight">Comprehensive Solutions</p>
        <p className="text-lg text-slate-500 max-w-2xl mx-auto">
          End-to-end bioinformatics and computational biology services for biological data analysis
        </p>
        <div className="w-12 h-1 brand-gradient mx-auto rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {expertiseList.map((expertise) => (
          <div
            key={expertise.id}
            className="group p-8 bg-white border border-slate-100 rounded-[2rem] shadow-sm hover:shadow-2xl hover:border-brand-primary/10 hover:-translate-y-2 transition-all duration-500"
          >
            <div
              className={`w-14 h-14 rounded-[1.25rem] flex items-center justify-center mb-6 transition-all group-hover:scale-110 group-hover:rotate-3 ${expertise.color}`}
            >
              <expertise.icon className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-3 tracking-tight group-hover:text-brand-primary transition-colors">
              {expertise.title}
            </h3>
            <p className="text-slate-500 leading-relaxed text-sm font-medium mb-6">{expertise.description}</p>
            <button
              onClick={() => setSelectedExpertise(expertise)}
              className="inline-flex items-center gap-2 text-brand-primary font-semibold text-sm hover:gap-3 transition-all"
            >
              Learn more <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>

      <div className="mt-16 flex flex-col sm:flex-row gap-6 justify-center">
        <Link
          href="/services"
          className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-brand-dark text-white rounded-2xl font-bold hover:bg-brand-primary transition-all shadow-xl group"
        >
          View All Services <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
        <a
          href="mailto:deepbiobd@gmail.com?subject=Service Inquiry"
          className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-white border-2 border-brand-primary text-brand-primary rounded-2xl font-bold hover:bg-brand-primary hover:text-white transition-all group"
        >
          <Mail className="w-5 h-5" />
          Contact Us
        </a>
      </div>

      {selectedExpertise && <ExpertiseModal expertise={selectedExpertise} onClose={() => setSelectedExpertise(null)} />}
    </div>
  )
}
