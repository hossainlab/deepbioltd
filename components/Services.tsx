
import React from 'react';
import { BrainCircuit, Microscope, ArrowRight, FlaskConical, Layers } from 'lucide-react';
import { View } from '../App';

const serviceList = [
  {
    title: 'Bioinformatics',
    description: 'Developing high-throughput pipelines for genetic sequence analysis, variant calling, and clinical genomics.',
    icon: Microscope,
    color: 'bg-brand-primary/10 text-brand-primary',
  },
  {
    title: 'Computational Biology',
    description: 'Modeling complex biological systems and molecular interactions through physics-based simulations.',
    icon: FlaskConical,
    color: 'bg-indigo-50 text-indigo-600',
  },
  {
    title: 'Multi-Omics Integration',
    description: 'Synthesizing data from genomics, transcriptomics, and proteomics to reveal holistic biological insights.',
    icon: Layers,
    color: 'bg-teal-50 text-teal-600',
  },
  {
    title: 'Artificial Intelligence',
    description: 'Deploying advanced neural architectures for predictive diagnostics and drug discovery acceleration.',
    icon: BrainCircuit,
    color: 'bg-brand-secondary/10 text-brand-secondary',
  },
];

interface ServicesProps {
  onNavigate?: (view: View) => void;
}

export const Services: React.FC<ServicesProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-20 space-y-6">
        <h2 className="text-brand-primary font-bold uppercase tracking-[0.3em] text-xs">Core Expertise</h2>
        <p className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight">What We Do Best</p>
        <div className="w-12 h-1 brand-gradient mx-auto rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        {serviceList.map((service, index) => (
          <div key={index} className="group p-10 bg-white border border-slate-100 rounded-[3rem] shadow-sm hover:shadow-2xl hover:border-brand-primary/10 hover:-translate-y-2 transition-all duration-500">
            <div className={`w-16 h-16 rounded-[1.5rem] flex items-center justify-center mb-8 transition-all group-hover:scale-110 group-hover:rotate-3 ${service.color}`}>
              <service.icon className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-5 tracking-tight group-hover:text-brand-primary transition-colors">{service.title}</h3>
            <p className="text-slate-500 leading-relaxed text-sm font-medium">
              {service.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-20 text-center">
        <button 
          onClick={() => onNavigate?.('services')}
          className="inline-flex items-center gap-2 px-10 py-5 bg-brand-dark text-white rounded-2xl font-bold hover:bg-brand-primary transition-all shadow-xl group"
        >
          Explore Full Service Portfolio <ArrowRight className="w-5 h-5 group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
};
