
import React from 'react';
import { 
  Microscope, 
  Beaker, 
  Brain, 
  FlaskConical, 
  ArrowRight, 
  User, 
  Search, 
  Dna, 
  ShieldAlert, 
  Sprout, 
  Zap,
  Sparkles,
  Target,
  BookOpen,
  Activity,
  Globe2,
  Database,
  Binary,
  Cpu,
  RefreshCw,
  Terminal,
  Layers
} from 'lucide-react';
import { Publications } from './Publications';
import { researchMetrics } from '../config/researchMetrics';

const researchGroups = [
  {
    id: "big-bio",
    name: "Big Bioinformatics Lab",
    subtitle: "High-Throughput Genomics",
    description: "We orchestrate large-scale genomic data processing and distributed computing to decode complex biological signals. Our lab specializes in architecting the technical infrastructure required for massive-scale South Asian population studies.",
    icon: Binary,
    tags: ["Big Data", "Distributed Computing", "Genome Architecture"],
    color: "text-brand-primary",
    bg: "bg-brand-primary/5",
    affiliation: "CHIRAL Bangladesh"
  },
  {
    id: "gen-gen",
    name: "The Generative Genomics Lab",
    subtitle: "Synthetic Biology & AI",
    description: "Predict the results of future or even impossible gene expression experiments with our generative AI models. We leverage 'pysynthbio', our proprietary Python interface for the Synthesize Bio API, to generate hyper-realistic bulk and single-cell transcriptomic data.",
    icon: Sparkles,
    tags: ["Generative AI", "pysynthbio API", "Single-Cell Simulation"],
    color: "text-teal-600",
    bg: "bg-teal-50",
    featured: "Powered by pysynthbio"
  },
  {
    id: "insilico",
    name: "Insilico Medicine",
    subtitle: "Computational Drug-Discovery",
    description: "Redefining pharmacology through in-silico modeling. We utilize physics-based simulations and deep learning to identify novel drug-target interactions, accelerating lead optimization from years to weeks.",
    icon: FlaskConical,
    tags: ["Drug Discovery", "Molecular Docking", "In-Silico Screening"],
    color: "text-indigo-600",
    bg: "bg-indigo-50"
  }
];

const researchPrograms = [
  {
    id: 1,
    title: "Genomic Surveillance of Pathogens",
    lead: "Dr. Tanveer Rahman",
    status: "Ongoing",
    focus: "AMR & Infectious Disease",
    description: "Developing automated pipelines for the real-time monitoring of antibiotic-resistant strains in urban clinical settings.",
    icon: Microscope,
    color: "bg-brand-primary/10 text-brand-primary"
  },
  {
    id: 2,
    title: "AI Frameworks for Rare Disease Diagnostics",
    lead: "Dr. Samina Hossain",
    status: "In Review",
    focus: "Machine Learning",
    description: "Utilizing deep learning architectures to identify pathogenic variants in non-coding regions for South Asian cohorts.",
    icon: Brain,
    color: "bg-brand-secondary/10 text-brand-secondary"
  },
  {
    id: 3,
    title: "Molecular Dynamics in Protein Folding",
    lead: "Dr. Rubayet Islam",
    status: "Early Stage",
    focus: "Computational Biology",
    description: "Simulating the interaction of novel small molecules with viral spike proteins using high-throughput computing.",
    icon: Beaker,
    color: "bg-slate-100 text-slate-600"
  }
];

const researchFocusAreas = [
  {
    title: "Cancer Genomics",
    description: "Unlocking the genetic drivers of oncogenesis through multi-layered somatic mutation analysis and tumor microenvironment modeling.",
    icon: Dna,
    color: "text-rose-500",
    bg: "bg-rose-50"
  },
  {
    title: "Neurogenomics",
    description: "Exploring the genomic architecture of neurological disorders using single-cell transcriptomics and complex neural network mapping.",
    icon: Brain,
    color: "text-indigo-500",
    bg: "bg-indigo-50"
  },
  {
    title: "Infectious Diseases",
    description: "Pioneering bioinformatics for rapid pathogen identification and real-time genomic surveillance of emerging infectious threats.",
    icon: ShieldAlert,
    color: "text-amber-500",
    bg: "bg-amber-50"
  },
  {
    title: "Drug Discovery",
    description: "Accelerating the therapeutic pipeline through high-fidelity molecular docking simulations and AI-driven lead optimization.",
    icon: FlaskConical,
    color: "text-teal-500",
    bg: "bg-teal-50"
  },
  {
    title: "AgriBioinformatics",
    description: "Applying computational genomics to enhance crop resilience and food security through precise trait mapping and soil microbiome analysis.",
    icon: Sprout,
    color: "text-emerald-500",
    bg: "bg-emerald-50"
  }
];

export const ResearchPage: React.FC = () => {
  return (
    <div className="pt-0 min-h-screen bg-white">
      {/* High-Impact Research Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-brand-dark pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1579154235602-3c32e98749e7?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
          <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-brand-primary/20 blur-[150px] rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/4 -left-20 w-[600px] h-[600px] bg-indigo-500/10 blur-[150px] rounded-full"></div>
          
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid lg:grid-cols-2 gap-20 items-center py-24">
          <div className="space-y-12">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-secondary text-[10px] font-bold uppercase tracking-[0.3em] backdrop-blur-md">
              <Sparkles className="w-4 h-4 animate-pulse" />
              Scientific Discovery Hub
            </div>
            <h1 className="text-6xl md:text-8xl font-bold text-white leading-[0.95] tracking-tight">
              Frontier <br />
              <span className="brand-text-gradient">Discovery.</span>
            </h1>
            <p className="text-2xl text-slate-300 max-w-xl leading-relaxed font-light">
              DeepBio bridges the gap between raw biological data and clinical breakthroughs through rigorous computational research and AI innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <button className="px-12 py-6 bg-brand-primary hover:bg-[#1a4b75] text-white rounded-2xl font-bold flex items-center justify-center gap-3 transition-all shadow-[0_20px_40px_rgba(32,94,146,0.3)] hover:-translate-y-1 group text-lg">
                View Publications
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-square rounded-[4rem] overflow-hidden group shadow-2xl border border-white/5 animate-float flex items-center justify-center bg-slate-900/40 backdrop-blur-md">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-transparent"></div>
              
              <div className="relative z-10 w-full px-16 space-y-10">
                <div className="p-8 glass rounded-[2.5rem] border-white/20 shadow-[0_25px_60px_rgba(0,0,0,0.7)] transform -translate-x-12 translate-y-8 hover:-translate-y-2 transition-all duration-700">
                  <div className="flex items-center gap-5 mb-6">
                    <div className="w-14 h-14 bg-indigo-600 rounded-2xl flex items-center justify-center shadow-2xl">
                      <BookOpen className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <div className="text-slate-800 font-extrabold text-lg">Research Output</div>
                      <div className="text-indigo-600 text-[11px] font-bold uppercase tracking-[0.2em]">Citations: {researchMetrics.citations} | H-Index: {researchMetrics.hIndex}</div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-1 p-3 bg-slate-50 rounded-xl border border-slate-100 text-center">
                      <div className="text-xl font-black text-slate-800">{researchMetrics.journals}</div>
                      <div className="text-[8px] font-bold text-slate-400 uppercase">Journals</div>
                    </div>
                    <div className="flex-1 p-3 bg-slate-50 rounded-xl border border-slate-100 text-center">
                      <div className="text-xl font-black text-slate-800">{researchMetrics.patents}</div>
                      <div className="text-[8px] font-bold text-slate-400 uppercase">Patents</div>
                    </div>
                  </div>
                </div>

                <div className="p-8 glass rounded-[2.5rem] border-white/20 shadow-[0_25px_60px_rgba(0,0,0,0.7)] transform translate-x-12 -translate-y-8 hover:translate-y-[-12px] transition-all duration-700">
                  <div className="flex items-center gap-5 mb-6">
                    <div className="w-14 h-14 bg-emerald-500 rounded-2xl flex items-center justify-center shadow-2xl">
                      <Database className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <div className="text-slate-800 font-extrabold text-lg">Active Nodes</div>
                      <div className="text-emerald-600 text-[11px] font-bold uppercase tracking-[0.2em]">Genomic Cloud Live</div>
                    </div>
                  </div>
                  <div className="flex gap-2 items-center text-slate-600">
                    <Activity className="w-5 h-5 text-emerald-500 animate-pulse" />
                    <span className="text-xs font-bold uppercase tracking-widest">Processing Node 09-Z</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Research Labs Section - Modern & Clean */}
      <section className="py-32 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <header className="mb-20 text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/5 text-brand-primary text-xs font-bold uppercase tracking-wider">
              <Layers className="w-4 h-4" />
              Innovation Clusters
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tight">Our Research Groups</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light">
              Specialized labs pushing the boundaries of computational biology and AI-driven discovery
            </p>
          </header>

          <div className="grid lg:grid-cols-3 gap-8">
            {researchGroups.map((group, index) => (
              <div
                key={group.id}
                className="group relative bg-white rounded-3xl border border-slate-200 hover:border-brand-primary/30 hover:shadow-xl transition-all duration-500 overflow-hidden"
              >
                {/* Clean gradient accent */}
                <div className={`absolute inset-0 ${group.bg} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                {/* Content */}
                <div className="relative p-8 space-y-6">
                  {/* Icon */}
                  <div className={`inline-flex w-16 h-16 rounded-2xl ${group.bg} ${group.color} items-center justify-center`}>
                    <group.icon className="w-8 h-8" />
                  </div>

                  {/* Title Section */}
                  <div className="space-y-2">
                    <div className={`text-xs font-bold uppercase tracking-wide ${group.color}`}>
                      {group.subtitle}
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 leading-tight">
                      {group.name}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 text-base leading-relaxed">
                    {group.description}
                  </p>

                  {/* Tags - Minimal Design */}
                  <div className="flex flex-wrap gap-2">
                    {group.tags.map(tag => (
                      <span key={tag} className="text-xs text-slate-500 bg-slate-100 px-3 py-1 rounded-full font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Featured Badge */}
                  {group.featured && (
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-primary/10 text-brand-primary rounded-xl">
                      <Terminal className="w-4 h-4" />
                      <span className="text-xs font-semibold">{group.featured}</span>
                    </div>
                  )}

                  {/* Affiliation Badge */}
                  {group.affiliation && (
                    <div className="text-xs text-slate-500">
                      <span className="font-semibold">Part of:</span> Center for Health Innovation, Research, Action, and Learning - Bangladesh ({group.affiliation})
                    </div>
                  )}

                  {/* Clean Footer */}
                  <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs text-slate-400 font-medium flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      Active
                    </span>
                    <button className="text-brand-primary hover:text-brand-secondary transition-colors">
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Research Focus Section */}
      <section className="py-32 bg-slate-50/50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24 space-y-6">
            <h2 className="text-brand-primary font-bold uppercase tracking-[0.4em] text-xs">Strategic Pillars</h2>
            <p className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tighter">Our Research Focus</p>
            <div className="w-20 h-1.5 brand-gradient mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {researchFocusAreas.map((focus, i) => (
              <div key={i} className="group p-8 rounded-[3rem] bg-white border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-700 hover:-translate-y-3">
                <div className={`w-16 h-16 rounded-2xl ${focus.bg} ${focus.color} flex items-center justify-center mb-8 transform group-hover:rotate-6 transition-transform`}>
                  <focus.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight group-hover:text-brand-primary transition-colors">{focus.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium line-clamp-4">
                  {focus.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section className="py-32 bg-white">
        <Publications />
      </section>
    </div>
  );
};
