
import React from 'react';
import { Layers, Database, Cpu, Terminal, CheckCircle2, FlaskConical, Share2, Shield } from 'lucide-react';

const steps = [
  {
    icon: Database,
    title: "Phase I: Data Ingestion & Sovereignty",
    subtitle: "Ethical & High-Fidelity Data Acquisition",
    description: "Our pipeline begins with strict adherence to HIPAA and bio-ethical standards. We ingest raw genomic, proteomic, and clinical data from our decentralized partner network, ensuring data integrity through blockchain-validated checksums.",
    details: ["Multi-omics Integration", "Anonymization Protocols", "Real-time Syncing"]
  },
  {
    icon: Cpu,
    title: "Phase II: Distributed Computation",
    subtitle: "High-Throughput Processing Clusters",
    description: "Utilizing our Virtual HQ infrastructure, we deploy scalable cloud-native compute clusters. This phase focuses on sequence alignment, variant calling, and molecular dynamics simulations at global-scale speeds.",
    details: ["GPU-Accelerated Workflows", "Dynamic Load Balancing", "Low-latency API Nodes"]
  },
  {
    icon: Terminal,
    title: "Phase III: Neural Architecture & Modeling",
    subtitle: "Deep Learning & AI Insights",
    description: "The core intelligence phase where we apply proprietary deep learning models. We specialize in predicting pathogenicity in non-coding genomic regions and simulating protein-ligand interactions for drug discovery.",
    details: ["Transformer-based Models", "Pathogenicity Scoring", "Structural Biology AI"]
  },
  {
    icon: FlaskConical,
    title: "Phase IV: Clinical Validation",
    subtitle: "From Silicon to Clinical Proof",
    description: "Every computational insight undergoes rigorous cross-validation with existing biological benchmarks. We collaborate with international labs to ensure that our AI predictions translate accurately to real-world biological outcomes.",
    details: ["Bench-test Correlation", "Peer-review Verification", "FDA/CE Compliance Path"]
  }
];

export const Methodology: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Technical Header */}
        <div className="max-w-3xl mb-24 space-y-8">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-primary/5 rounded-full border border-primary/10">
            <Layers className="w-4 h-4 text-primary" />
            <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em]">Scientific Methodology</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight leading-[1.1]">
            Our <span className="brand-text-gradient underline decoration-primary/20 underline-offset-8">Research Pipeline</span> Architecture.
          </h1>
          <p className="text-xl text-slate-500 font-light leading-relaxed">
            DeepBio's methodology is built on a foundation of computational rigor and biological truth. We've engineered a four-phase pipeline that transforms raw biological noise into clinical clarity.
          </p>
        </div>

        {/* Step-by-Step Breakdown */}
        <div className="space-y-24">
          {steps.map((step, index) => (
            <div key={index} className={`flex flex-col lg:flex-row gap-16 items-start ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="lg:w-1/2 space-y-8">
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 rounded-[2rem] bg-slate-900 flex items-center justify-center text-white shadow-2xl relative overflow-hidden group">
                    <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <step.icon className="w-10 h-10 relative z-10" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-slate-900">{step.title}</h2>
                    <p className="text-primary font-bold text-sm tracking-widest uppercase mt-1">{step.subtitle}</p>
                  </div>
                </div>
                
                <p className="text-lg text-slate-600 leading-relaxed font-light">
                  {step.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {step.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100 group hover:border-primary/30 transition-all">
                      <CheckCircle2 className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                      <span className="text-sm font-bold text-slate-700">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Visual Representation */}
              <div className="lg:w-1/2 w-full h-[400px] bg-slate-50 rounded-[3rem] border border-slate-100 relative overflow-hidden flex items-center justify-center p-12 group shadow-inner">
                 <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-30 transition-opacity">
                    <step.icon className="w-64 h-64 text-primary" />
                 </div>
                 <div className="relative z-10 w-full max-w-sm p-8 glass rounded-[2.5rem] border-white shadow-2xl space-y-6">
                    <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                       <div className="h-full bg-primary w-[75%] animate-pulse"></div>
                    </div>
                    <div className="space-y-4">
                       {[1, 2, 3].map(i => (
                         <div key={i} className="flex items-center gap-4">
                            <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center">
                               <div className="w-2 h-2 rounded-full bg-primary animate-ping"></div>
                            </div>
                            <div className="h-4 bg-slate-100 rounded-lg flex-1"></div>
                         </div>
                       ))}
                    </div>
                 </div>
              </div>
            </div>
          ))}
        </div>

        {/* Global Standards Footer */}
        <div className="mt-32 p-16 bg-slate-900 rounded-[4rem] text-white relative overflow-hidden group">
           <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 blur-[100px] rounded-full translate-x-32 -translate-y-32"></div>
           <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="max-w-xl space-y-4">
                 <div className="flex items-center gap-3 text-primary">
                    <Shield className="w-6 h-6" />
                    <span className="text-sm font-bold uppercase tracking-[0.2em]">Quality Assurance</span>
                 </div>
                 <h2 className="text-4xl font-bold">Uncompromising Integrity.</h2>
                 <p className="text-slate-400 font-light leading-relaxed">
                   Our methodology is reviewed annually by international advisory boards to ensure our computational pipelines meet the rigorous demands of modern clinical science.
                 </p>
              </div>
              <div className="flex gap-4">
                 <button className="px-10 py-5 bg-primary text-white rounded-2xl font-bold hover:bg-opacity-90 shadow-2xl shadow-primary/20 transition-all flex items-center gap-3">
                    Partner With Our Lab <Share2 className="w-5 h-5" />
                 </button>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};
