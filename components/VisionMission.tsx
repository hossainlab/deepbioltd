
import React from 'react';
import { Target, Eye } from 'lucide-react';

export const VisionMission: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-12">
        <div className="p-12 bg-slate-900/40 rounded-[3rem] border border-white/5 hover:border-brand-primary/50 transition-all duration-500 group backdrop-blur-sm">
          <div className="w-20 h-20 bg-brand-primary rounded-[2rem] flex items-center justify-center mb-10 group-hover:scale-110 transition-transform shadow-lg shadow-brand-primary/20">
            <Eye className="w-10 h-10 text-white" />
          </div>
          <h3 className="text-4xl font-bold mb-6 text-white tracking-tight">Our Vision</h3>
          <p className="text-xl text-slate-400 leading-relaxed font-light">
            To revolutionize healthcare and life science research in resource-limited settings through data-driven innovation in bioinformatics, artificial intelligence, and digital health.
          </p>
        </div>

        <div className="p-12 bg-slate-900/40 rounded-[3rem] border border-white/5 hover:border-brand-secondary/50 transition-all duration-500 group backdrop-blur-sm">
          <div className="w-20 h-20 bg-brand-secondary rounded-[2rem] flex items-center justify-center mb-10 group-hover:scale-110 transition-transform shadow-lg shadow-brand-secondary/20">
            <Target className="w-10 h-10 text-[#0A192F]" />
          </div>
          <h3 className="text-4xl font-bold mb-6 text-white tracking-tight">Our Mission</h3>
          <p className="text-xl text-slate-400 leading-relaxed font-light">
            To drive innovation in health and life sciences through data, AI, and bioinformatics in resource-limited settings. We empower researchers and clinicians with tools that save lives.
          </p>
        </div>
      </div>
    </div>
  );
};
