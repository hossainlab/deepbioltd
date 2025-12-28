
import React from 'react';
import { 
  Microscope, 
  BrainCircuit, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Globe2, 
  Terminal,
  Activity,
  Sparkles,
  FlaskConical,
  Layers,
  Cpu,
  Database
} from 'lucide-react';

const detailedServices = [
  {
    id: "bioinformatics",
    title: "Bioinformatics",
    subtitle: "Precision Genomic Engineering",
    description: "Architecting end-to-end multi-omics pipelines for global research. We specialize in transforming raw sequencing data into high-fidelity biological maps, optimized for resource-limited clinical environments.",
    icon: Microscope,
    image: "https://images.unsplash.com/photo-1530210124550-912dc1381cb8?auto=format&fit=crop&q=80&w=1200",
    color: "text-blue-600",
    features: ["Whole Genome Alignment", "RNA-Seq Quantification", "Metagenomic Characterization", "Phylogenetic Reconstruction"]
  },
  {
    id: "comp-bio",
    title: "Computational Biology",
    subtitle: "Molecular Dynamics & In-Silico Modeling",
    description: "Leveraging physics-based simulations to predict molecular behavior. Our computational models reveal the hidden dynamics of protein-ligand interactions, accelerating the path to therapeutic discovery.",
    icon: FlaskConical,
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=1200",
    color: "text-indigo-600",
    features: ["Molecular Docking", "Protein Folding Analysis", "Metabolic Pathway Simulation", "Binding Affinity Prediction"]
  },
  {
    id: "multi-omics",
    title: "Multi-Omics Integration",
    subtitle: "Holistic Systems Biology",
    description: "Breaking data silos by integrating genomics, transcriptomics, and proteomics. We provide the technical backbone for complex multi-layered biological analysis that drives precision medicine.",
    icon: Layers,
    image: "https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&q=80&w=1200",
    color: "text-teal-600",
    features: ["Cross-Layer Correlation", "Integrative Data Mining", "Biomarker Identification", "Network Analysis Workflows"]
  },
  {
    id: "ai-healthcare",
    title: "Artificial Intelligence",
    subtitle: "Deep Learning for Life Sciences",
    description: "Developing state-of-the-art neural architectures tailored for biological data. Our models assist in early disease detection, genomic risk scoring, and intelligent clinical decision support.",
    icon: BrainCircuit,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200",
    color: "text-brand-secondary",
    features: ["Diagnostic Neural Nets", "Variant Effect Prediction", "Small Molecule Screening", "Generative Bio-Modeling"]
  }
];

export const ServicesPage: React.FC = () => {
  return (
    <article className="pt-0 min-h-screen bg-white">
      {/* Modernized Hero Section with Unified Background */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-brand-dark pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1579154235602-3c32e98749e7?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
          <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-brand-primary/20 blur-[150px] rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/4 -left-20 w-[600px] h-[600px] bg-indigo-500/10 blur-[150px] rounded-full"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full text-center lg:text-left grid lg:grid-cols-2 gap-20 items-center py-24">
          <div className="space-y-12">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-secondary text-[10px] font-bold uppercase tracking-[0.3em] backdrop-blur-md">
              <Sparkles className="w-4 h-4 animate-pulse" />
              Service Excellence Portfolio
            </div>
            <h1 className="text-6xl md:text-8xl font-bold text-white leading-[0.95] tracking-tight">
              Unrivaled <br />
              <span className="brand-text-gradient">Precision.</span>
            </h1>
            <p className="text-2xl text-slate-300 max-w-xl leading-relaxed font-light mx-auto lg:mx-0">
              DeepBio orchestrates world-class technical capabilities to solve complex challenges in modern life science research.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 pt-4 justify-center lg:justify-start">
              <button className="px-12 py-6 bg-brand-primary hover:bg-[#1a4b75] text-white rounded-2xl font-bold flex items-center justify-center gap-3 transition-all shadow-xl hover:-translate-y-1 group text-lg">
                View All Services
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>
          
          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-square rounded-[4rem] overflow-hidden group shadow-2xl border border-white/5 animate-float flex items-center justify-center bg-slate-900/40 backdrop-blur-md">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/20 to-transparent"></div>
              
              <div className="relative z-10 w-full px-16 space-y-10">
                {/* Floating Service Card: Multi-Omics */}
                <div className="p-8 glass rounded-[2.5rem] border-white/20 shadow-[0_25px_60px_rgba(0,0,0,0.7)] transform -translate-x-12 translate-y-8 hover:-translate-y-2 transition-all duration-700">
                  <div className="flex items-center gap-5 mb-6">
                    <div className="w-14 h-14 bg-brand-primary rounded-2xl flex items-center justify-center shadow-2xl">
                      <Layers className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <div className="text-slate-800 font-extrabold text-lg">Data Engineering</div>
                      <div className="text-brand-primary text-[11px] font-bold uppercase tracking-[0.2em]">Multi-Omics Pipeline Active</div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between text-[11px] font-black text-slate-800">
                      <span>PROCESSING LOAD</span>
                      <span>87.4%</span>
                    </div>
                    <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                      <div className="h-full bg-brand-primary w-[87.4%]"></div>
                    </div>
                  </div>
                </div>

                {/* Floating Service Card: AI Research */}
                <div className="p-8 glass rounded-[2.5rem] border-white/20 shadow-[0_25px_60px_rgba(0,0,0,0.7)] transform translate-x-12 -translate-y-8 hover:translate-y-[-12px] transition-all duration-700">
                  <div className="flex items-center gap-5 mb-6">
                    <div className="w-14 h-14 bg-teal-500 rounded-2xl flex items-center justify-center shadow-2xl">
                      <Cpu className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <div className="text-slate-800 font-extrabold text-lg">Neural Assets</div>
                      <div className="text-teal-600 text-[11px] font-bold uppercase tracking-[0.2em]">Model Accuracy: 99.2%</div>
                    </div>
                  </div>
                  <div className="flex gap-2 items-center text-slate-600">
                    <Activity className="w-5 h-5 text-teal-500 animate-pulse" />
                    <span className="text-xs font-bold uppercase tracking-widest">Real-time Inference</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6 space-y-48">
          {detailedServices.map((service, index) => (
            <div key={service.id} className={`flex flex-col lg:flex-row gap-24 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="lg:w-1/2 space-y-12">
                <header className="space-y-6">
                  <div className="flex items-center gap-8">
                    <div className={`w-24 h-24 rounded-[2rem] bg-slate-50 flex items-center justify-center ${service.color} shadow-xl border border-slate-100 transform -rotate-6`}>
                      <service.icon className="w-12 h-12" aria-hidden="true" />
                    </div>
                    <div>
                      <div className={`text-[11px] font-extrabold uppercase tracking-[0.4em] mb-2 ${service.color}`}>{service.subtitle}</div>
                      <h2 className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tighter leading-none">{service.title}</h2>
                    </div>
                  </div>
                  <p className="text-2xl text-slate-500 font-light leading-relaxed">
                    {service.description}
                  </p>
                </header>

                <div className="grid sm:grid-cols-2 gap-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-5 p-6 bg-slate-50 rounded-[2.5rem] border border-slate-100 transition-all hover:bg-white hover:shadow-2xl">
                      <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-md">
                        <CheckCircle2 className="w-5 h-5 text-teal-500" />
                      </div>
                      <span className="text-sm font-extrabold text-slate-800 tracking-tight">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-6">
                  <button className="flex items-center gap-4 px-12 py-6 bg-brand-dark text-white rounded-[2.5rem] font-bold text-lg hover:bg-brand-primary transition-all shadow-2xl hover:-translate-y-1 group">
                    Technical Specifications <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                  </button>
                </div>
              </div>

              <aside className="lg:w-1/2 relative">
                <div className="relative overflow-hidden rounded-[4rem] shadow-2xl aspect-[16/11] border-[12px] border-white bg-slate-100">
                  <img 
                    src={service.image} 
                    alt={`Visualization of ${service.title} services`} 
                    className="w-full h-full object-cover transition-all duration-[2s] hover:scale-105" 
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute top-10 left-10 px-6 py-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-[10px] font-bold text-white uppercase tracking-[0.3em] z-30">
                    Core Division {index + 1}
                  </div>
                </div>
              </aside>
            </div>
          ))}
        </div>
      </section>

      {/* Standards Section */}
      <section className="py-40 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-primary/50 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <header className="text-center mb-24 space-y-6">
             <h2 className="text-brand-secondary font-bold uppercase tracking-[0.5em] text-[12px]">Quality Compliance Benchmarks</h2>
             <p className="text-5xl md:text-7xl font-bold tracking-tighter">Enterprise Infrastructure Standards</p>
          </header>
          
          <div className="grid md:grid-cols-3 gap-16">
            {[
              { 
                icon: ShieldCheck, 
                title: "Data Sovereignty", 
                desc: "Military-grade 256-bit encryption and air-gapped secure processing for patient genomic datasets." 
              },
              { 
                icon: Globe2, 
                title: "HL7/FHIR Protocol", 
                desc: "Full interoperability with international medical databases, ensuring seamless data exchange." 
              },
              { 
                icon: Terminal, 
                title: "High-Bandwidth AI", 
                desc: "Proprietary neural architectures built to process petabytes of multi-omics data with ultra-low latency." 
              }
            ].map((item, i) => (
              <div key={i} className="group p-14 bg-white/5 border border-white/10 rounded-[4rem] transition-all hover:bg-white/10 text-center">
                <div className="w-24 h-24 bg-brand-primary/10 rounded-3xl flex items-center justify-center mx-auto text-brand-secondary mb-10 group-hover:bg-brand-primary group-hover:text-white transition-all duration-500 shadow-2xl">
                  <item.icon className="w-12 h-12" aria-hidden="true" />
                </div>
                <h3 className="text-3xl font-bold mb-6 tracking-tight">{item.title}</h3>
                <p className="text-slate-400 text-lg leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
};
