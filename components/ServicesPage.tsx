'use client'

import React, { useState } from 'react'
import {
  Microscope,
  BrainCircuit,
  ArrowRight,
  FlaskConical,
  Layers,
  Cpu,
  Dna,
  Atom,
  Code2,
  BarChart3,
  Server,
  Database,
  GraduationCap,
  Syringe,
  TestTube,
  Bug,
  Mail,
  X,
  CheckCircle2,
  Sparkles,
} from 'lucide-react'

type PricingTier = {
  name: string
  price: string
  unit?: string
}

type Service = {
  id: string
  category: string
  categoryColor: string
  title: string
  description: string
  icon: React.ElementType
  pricing: PricingTier[]
  details?: {
    overview: string
    features: string[]
    deliverables: string[]
  }
}

const services: Service[] = [
  {
    id: 'ngs-analysis',
    category: 'Genomics',
    categoryColor: 'bg-brand-primary/10 text-brand-primary',
    title: 'NGS Data Analysis',
    description: 'Comprehensive sequencing analysis pipelines. Premium pricing depends on sample size, volume, and analysis complexity.',
    icon: Dna,
    pricing: [
      { name: 'Basic', price: '$50', unit: '/ sample' },
      { name: 'Standard', price: '$100', unit: '/ sample' },
      { name: 'Premium', price: 'Custom' },
    ],
    details: {
      overview: 'End-to-end NGS data analysis from raw reads to biological insights. We support WGS, WES, RNA-Seq, ChIP-Seq, and more.',
      features: ['Quality Control (FastQC, MultiQC)', 'Read Mapping & Alignment', 'Variant Calling (SNPs/Indels)', 'Differential Expression'],
      deliverables: ['BAM/VCF files', 'Analysis Reports', 'QC Metrics', 'Publication Figures'],
    },
  },
  {
    id: 'transcriptomics',
    category: 'Genomics',
    categoryColor: 'bg-brand-primary/10 text-brand-primary',
    title: 'Transcriptomics Analysis',
    description: 'Explore gene expression dynamics and regulatory networks with high-resolution transcriptomic analysis services.',
    icon: Microscope,
    pricing: [
      { name: 'Bulk RNA-Seq', price: '$75', unit: '/ sample' },
      { name: 'Pathway Analysis', price: '$50', unit: '/ dataset' },
      { name: 'Full Pipeline', price: '$150', unit: '/ project' },
    ],
    details: {
      overview: 'Comprehensive transcriptomic analysis to understand gene expression patterns and uncover regulatory mechanisms.',
      features: ['RNA-Seq Analysis', 'Gene Expression Profiling', 'Alternative Splicing Analysis', 'Functional Annotation'],
      deliverables: ['Expression Matrices', 'DE Results', 'Pathway Reports', 'Visualization Plots'],
    },
  },
  {
    id: 'single-cell',
    category: 'Genomics',
    categoryColor: 'bg-brand-primary/10 text-brand-primary',
    title: 'Single-Cell Analysis',
    description: 'Dissect tissue heterogeneity and cellular dynamics with cutting-edge single-cell sequencing analysis.',
    icon: TestTube,
    pricing: [
      { name: 'Basic Clustering', price: '$100', unit: '/ sample' },
      { name: 'Full Analysis', price: '$200', unit: '/ sample' },
      { name: 'Multi-sample', price: 'Custom' },
    ],
    details: {
      overview: 'Analyze gene expression at single-cell resolution with cell type identification and trajectory analysis.',
      features: ['Cell Clustering', 'Marker Gene Identification', 'Trajectory Analysis', 'Cell-Cell Communication'],
      deliverables: ['UMAP/tSNE Plots', 'Cluster Annotations', 'Marker Lists', 'Trajectory Maps'],
    },
  },
  {
    id: 'metagenomics',
    category: 'Genomics',
    categoryColor: 'bg-brand-primary/10 text-brand-primary',
    title: 'Metagenomics',
    description: 'Uncover the diversity and function of complex microbial ecosystems with comprehensive metagenomic analysis.',
    icon: Bug,
    pricing: [
      { name: '16S Analysis', price: '$40', unit: '/ sample' },
      { name: 'Shotgun', price: '$80', unit: '/ sample' },
      { name: 'Functional', price: '$120', unit: '/ sample' },
    ],
    details: {
      overview: 'Analyze microbial communities directly from environmental samples to reveal taxonomic composition.',
      features: ['16S/ITS Amplicon Analysis', 'Shotgun Metagenomics', 'Taxonomic Profiling', 'Functional Annotation'],
      deliverables: ['OTU Tables', 'Diversity Metrics', 'Taxonomic Reports', 'Functional Profiles'],
    },
  },
  {
    id: 'md-simulation',
    category: 'Structural Biology',
    categoryColor: 'bg-brand-primary/10 text-brand-primary',
    title: 'Molecular Dynamics Simulation',
    description: 'High-performance simulation of biomolecular systems to study physical movements and interactions over time.',
    icon: Cpu,
    pricing: [
      { name: '10 ns Simulation', price: '$10' },
      { name: '50 ns Simulation', price: '$15' },
      { name: '100 ns Simulation', price: '$20' },
      { name: 'Custom Duration', price: 'Contact' },
    ],
    details: {
      overview: 'Molecular dynamics simulations provide insights into the dynamic behavior of biomolecules.',
      features: ['System Setup & Equilibration', 'Production Runs', 'Trajectory Analysis', 'Free Energy Calculations'],
      deliverables: ['Trajectory Files', 'RMSD/RMSF Plots', 'Energy Reports', 'Structural Insights'],
    },
  },
  {
    id: 'molecular-docking',
    category: 'Structural Biology',
    categoryColor: 'bg-brand-primary/10 text-brand-primary',
    title: 'Molecular Docking & Virtual Screening',
    description: 'Predict preferred orientation of ligands to receptors and screen libraries for potential drug candidates.',
    icon: FlaskConical,
    pricing: [
      { name: 'Standard Docking', price: '$10', unit: '/ complex' },
      { name: 'Virtual Screening', price: '$50', unit: '/ 100 compounds' },
      { name: 'Protein-Protein', price: '$10', unit: '/ complex' },
    ],
    details: {
      overview: 'Leverage computational chemistry to predict how small molecules interact with protein targets.',
      features: ['Receptor Preparation', 'Ligand Library Screening', 'Binding Site Analysis', 'Affinity Prediction'],
      deliverables: ['Docking Scores', 'Binding Poses', 'Interaction Reports', '3D Visualizations'],
    },
  },
  {
    id: 'proteomics',
    category: 'Proteomics',
    categoryColor: 'bg-brand-primary/10 text-brand-primary',
    title: 'Proteomics Analysis',
    description: 'Analyze proteins, their structures, and interactions with comprehensive proteomics solutions.',
    icon: Atom,
    pricing: [
      { name: 'Protein ID', price: '$60', unit: '/ sample' },
      { name: 'Quantification', price: '$100', unit: '/ sample' },
      { name: 'PTM Analysis', price: '$150', unit: '/ sample' },
    ],
    details: {
      overview: 'Go beyond the genome to understand the proteome with identification, quantification, and characterization.',
      features: ['Mass Spectrometry Analysis', 'Protein Identification', 'Post-translational Modifications', 'Protein-Protein Interactions'],
      deliverables: ['Protein Lists', 'Quantification Data', 'PTM Reports', 'Interaction Networks'],
    },
  },
  {
    id: 'vaccine-design',
    category: 'Immunoinformatics',
    categoryColor: 'bg-brand-primary/10 text-brand-primary',
    title: 'Epitope Prediction & Vaccine Design',
    description: 'In silico identification of immunogenic epitopes and design of multi-epitope vaccine candidates.',
    icon: Syringe,
    pricing: [
      { name: 'Epitope Screening', price: '$10', unit: '/ antigen' },
      { name: 'Vaccine Construct', price: '$20', unit: '/ design' },
      { name: 'Immune Docking', price: '$10', unit: '/ complex' },
    ],
    details: {
      overview: 'Computational immunology services for identifying T-cell and B-cell epitopes and designing vaccines.',
      features: ['B-cell Epitope Prediction', 'T-cell Epitope Mapping', 'Allergenicity Assessment', 'Vaccine Construct Design'],
      deliverables: ['Epitope Lists', 'Vaccine Sequences', 'Immunogenicity Reports', '3D Models'],
    },
  },
  {
    id: 'machine-learning',
    category: 'AI & Machine Learning',
    categoryColor: 'bg-brand-primary/10 text-brand-primary',
    title: 'Machine Learning for Biology',
    description: 'Harness AI to discover patterns, predict outcomes, and classify biological data with custom models.',
    icon: BrainCircuit,
    pricing: [
      { name: 'Model Training', price: '$100', unit: '/ model' },
      { name: 'Deep Learning', price: '$200', unit: '/ model' },
      { name: 'Custom Pipeline', price: 'Custom' },
    ],
    details: {
      overview: 'Apply state-of-the-art machine learning algorithms to biological datasets for predictive modeling.',
      features: ['Feature Engineering', 'Model Training & Validation', 'Deep Learning', 'Interpretability Analysis'],
      deliverables: ['Trained Models', 'Performance Metrics', 'Feature Importance', 'Predictions'],
    },
  },
  {
    id: 'ai-workflow',
    category: 'AI & Machine Learning',
    categoryColor: 'bg-brand-primary/10 text-brand-primary',
    title: 'AI-Assisted Bioinformatics Workflow',
    description: 'Integration of AI tools for smart ranking, filtering, summarization and automated report generation.',
    icon: Sparkles,
    pricing: [
      { name: 'AI Integration', price: '$40', unit: '/ tool' },
      { name: 'Smart Analysis', price: '$60', unit: '/ project' },
      { name: 'Auto-Reporting', price: '$80', unit: '/ report' },
    ],
    details: {
      overview: 'Leverage AI-powered tools to accelerate your bioinformatics workflows with intelligent automation.',
      features: ['AI-powered Ranking', 'Automated Filtering', 'Smart Summarization', 'Report Generation'],
      deliverables: ['AI Reports', 'Ranked Results', 'Summary Documents', 'Automated Insights'],
    },
  },
  {
    id: 'custom-scripting',
    category: 'Development',
    categoryColor: 'bg-brand-primary/10 text-brand-primary',
    title: 'Custom Bioinformatics Scripting',
    description: 'Tailored scripts and pipelines using Python, R, or Bash for specific research needs.',
    icon: Code2,
    pricing: [
      { name: 'Basic Scripting', price: '$20', unit: '/ script' },
      { name: 'Custom Plotting', price: '$15', unit: '/ figure' },
      { name: 'Consultation', price: '$25', unit: '/ hour' },
    ],
    details: {
      overview: 'Bespoke bioinformatics solutions for unique research challenges with custom tools and pipelines.',
      features: ['Pipeline Development', 'Tool Customization', 'Database Design', 'API Integration'],
      deliverables: ['Source Code', 'Documentation', 'Docker Containers', 'User Guides'],
    },
  },
  {
    id: 'automation-pipeline',
    category: 'Development',
    categoryColor: 'bg-brand-primary/10 text-brand-primary',
    title: 'Bioinformatics Automation Pipeline',
    description: 'End-to-end automation of bioinformatics tasks including BLAST, docking workflows, and batch processing.',
    icon: Layers,
    pricing: [
      { name: 'Automated Workflow', price: '$30', unit: '/ workflow' },
      { name: 'Batch Processing', price: '$45', unit: '/ pipeline' },
      { name: 'Full Package', price: '$60', unit: '/ project' },
    ],
    details: {
      overview: 'Automate repetitive bioinformatics tasks with robust, scalable pipelines.',
      features: ['Workflow Automation', 'Batch Processing', 'Error Handling', 'Progress Monitoring'],
      deliverables: ['Automated Scripts', 'Pipeline Code', 'Logs & Reports', 'Documentation'],
    },
  },
  {
    id: 'data-visualization',
    category: 'Data & Reporting',
    categoryColor: 'bg-brand-primary/10 text-brand-primary',
    title: 'Data Visualization & Reporting',
    description: 'Transform complex data into clear, compelling, and publication-ready visual narratives.',
    icon: BarChart3,
    pricing: [
      { name: 'Custom Figures', price: '$15', unit: '/ figure' },
      { name: 'Dashboard', price: '$100', unit: '/ dashboard' },
      { name: 'Full Report', price: '$75', unit: '/ report' },
    ],
    details: {
      overview: 'Professional visualization services to communicate your findings effectively.',
      features: ['Custom Plot Design', 'Interactive Dashboards', 'Statistical Graphics', 'Infographics'],
      deliverables: ['High-res Figures', 'Interactive Reports', 'Data Dashboards', 'Presentation Materials'],
    },
  },
  {
    id: 'remote-execution',
    category: 'Infrastructure',
    categoryColor: 'bg-brand-primary/10 text-brand-primary',
    title: 'Remote Linux Execution',
    description: 'We run your heavy bioinformatics jobs on our high-performance systems with full error handling and logs.',
    icon: Server,
    pricing: [
      { name: 'Student / Small Job', price: '$15', unit: '/ run' },
      { name: 'Standard Job', price: '$30', unit: '/ run' },
      { name: 'Heavy Duty', price: '$50', unit: '/ run' },
    ],
    details: {
      overview: 'Offload computationally intensive bioinformatics tasks to our high-performance infrastructure.',
      features: ['HPC Access', 'Job Scheduling', 'Error Handling', 'Full Logging'],
      deliverables: ['Results Files', 'Log Files', 'Execution Reports', 'Data Transfer'],
    },
  },
  {
    id: 'large-data',
    category: 'Infrastructure',
    categoryColor: 'bg-brand-primary/10 text-brand-primary',
    title: 'Large Dataset Processing',
    description: 'Efficient handling of massive datasets including FASTA processing, large BLAST databases, and batch jobs.',
    icon: Database,
    pricing: [
      { name: 'Batch Formatting', price: '$25', unit: '/ dataset' },
      { name: 'Big Data BLAST', price: '$50', unit: '/ run' },
      { name: 'Complex Filtering', price: '$75', unit: '/ project' },
    ],
    details: {
      overview: 'Handle massive biological datasets with efficient processing pipelines.',
      features: ['FASTA Processing', 'Database Management', 'Batch Operations', 'Data Filtering'],
      deliverables: ['Processed Data', 'BLAST Results', 'Filtered Datasets', 'Summary Reports'],
    },
  },
  {
    id: 'training',
    category: 'Education',
    categoryColor: 'bg-brand-primary/10 text-brand-primary',
    title: 'Training & Academic Support',
    description: 'Hands-on guidance and academic support for bioinformatics projects, tools, and workflows.',
    icon: GraduationCap,
    pricing: [
      { name: 'Troubleshooting', price: '$10', unit: '/ session' },
      { name: 'Topic Walkthrough', price: '$15', unit: '/ session' },
      { name: '1-on-1 Mentorship', price: '$25', unit: '/ session' },
    ],
    details: {
      overview: 'Personalized training and mentorship for students and researchers learning bioinformatics.',
      features: ['Tool Training', 'Workflow Guidance', 'Thesis Support', 'Code Review'],
      deliverables: ['Training Materials', 'Code Examples', 'Documentation', 'Certificates'],
    },
  },
]

interface ServiceModalProps {
  service: Service
  onClose: () => void
}

const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose }) => {
  if (!service.details) return null

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
          <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 ${service.categoryColor}`}>
            {service.category}
          </span>

          <h3 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">{service.title}</h3>
          <p className="text-slate-500 mb-8">{service.details.overview}</p>

          <div className="mb-8">
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">What&apos;s Included</h4>
            <div className="grid grid-cols-2 gap-3">
              {service.details.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
                  <CheckCircle2 className="w-4 h-4 text-teal-500 flex-shrink-0" />
                  <span className="text-sm text-slate-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">Deliverables</h4>
            <div className="flex flex-wrap gap-2">
              {service.details.deliverables.map((item, idx) => (
                <span key={idx} className="px-4 py-2 bg-brand-primary/5 text-brand-primary rounded-full text-sm font-medium">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">Pricing Options</h4>
            <div className="grid grid-cols-3 gap-3">
              {service.pricing.map((tier, idx) => (
                <div key={idx} className="p-4 bg-slate-50 rounded-xl text-center">
                  <div className="text-sm font-medium text-slate-600 mb-1">{tier.name}</div>
                  <div className="text-xl font-bold text-slate-900">
                    {tier.price}
                    {tier.unit && <span className="text-sm font-normal text-slate-500"> {tier.unit}</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-4">
            <a
              href={`mailto:deepbiobd@gmail.com?subject=Service Inquiry: ${service.title}`}
              className="flex-1 py-4 bg-brand-primary text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-brand-dark transition-colors"
            >
              <Mail className="w-5 h-5" />
              Request Quote
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

interface ServiceCardProps {
  service: Service
  onLearnMore: () => void
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, onLearnMore }) => {
  return (
    <div className="bg-white border border-slate-100 rounded-[2rem] p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
      <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 w-fit ${service.categoryColor}`}>
        {service.category}
      </span>

      <div className="flex items-start gap-4 mb-4">
        <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center flex-shrink-0">
          <service.icon className="w-6 h-6 text-brand-primary" />
        </div>
        <h3 className="text-xl font-bold text-slate-900 tracking-tight leading-tight">{service.title}</h3>
      </div>

      <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">{service.description}</p>

      <button
        onClick={onLearnMore}
        className="text-brand-primary font-semibold text-sm flex items-center gap-2 hover:gap-3 transition-all mb-6"
      >
        Learn More & View Details <ArrowRight className="w-4 h-4" />
      </button>

      <div className="space-y-2 mb-6">
        {service.pricing.slice(0, 3).map((tier, idx) => (
          <div key={idx} className="flex items-center justify-between p-3 bg-slate-50 rounded-xl">
            <span className="text-sm text-slate-600">{tier.name}</span>
            <div className="flex items-center gap-2">
              <span className="font-bold text-slate-900">{tier.price}</span>
              {tier.unit && <span className="text-xs text-slate-500">{tier.unit}</span>}
            </div>
          </div>
        ))}
      </div>

      <a
        href={`mailto:deepbiobd@gmail.com?subject=Inquiry: ${service.title}`}
        className="w-full py-3 bg-slate-100 text-slate-700 rounded-xl font-semibold text-center hover:bg-brand-primary hover:text-white transition-all"
      >
        General Inquiry
      </a>
    </div>
  )
}

export const ServicesPage: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null)

  return (
    <article className="pt-0 min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative bg-brand-dark pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-brand-primary/20 blur-[150px] rounded-full"></div>
          <div className="absolute bottom-1/4 -left-20 w-[400px] h-[400px] bg-indigo-500/10 blur-[100px] rounded-full"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-secondary text-[10px] font-bold uppercase tracking-[0.3em] backdrop-blur-md mb-8">
            <Sparkles className="w-4 h-4" />
            Premium Bioinformatics Services
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight mb-6">
            Our Services <span className="brand-text-gradient">&amp; Pricing</span>
          </h1>

          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-light">
            Premium bioinformatics services tailored to your research needs at competitive rates. From NGS analysis to AI-powered workflows.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} onLearnMore={() => setSelectedService(service)} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight">Need a Custom Solution?</h2>
          <p className="text-lg text-slate-500 mb-10 max-w-2xl mx-auto">
            Don&apos;t see exactly what you need? We offer custom packages and enterprise solutions tailored to your specific research requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:deepbiobd@gmail.com?subject=Custom Service Inquiry"
              className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-brand-primary text-white rounded-2xl font-bold hover:bg-brand-dark transition-all shadow-xl"
            >
              <Mail className="w-5 h-5" />
              Contact for Custom Quote
            </a>
            <a
              href="/about"
              className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-white border-2 border-slate-200 text-slate-700 rounded-2xl font-bold hover:border-brand-primary hover:text-brand-primary transition-all"
            >
              Learn About Our Team <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {selectedService && <ServiceModal service={selectedService} onClose={() => setSelectedService(null)} />}
    </article>
  )
}
