
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Activity, Brain, MousePointer2, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <header className="relative min-h-screen flex items-center overflow-hidden bg-brand-dark">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=60&w=2000')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-brand-primary/20 blur-[150px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-brand-secondary/15 blur-[150px] rounded-full transition-all duration-[10s]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-transparent to-brand-dark"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid lg:grid-cols-2 gap-16 items-center pt-20">
        <div className="space-y-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-secondary text-[10px] font-bold uppercase tracking-[0.2em] backdrop-blur-md animate-in fade-in slide-in-from-left-4 duration-1000">
            <Sparkles className="w-3 h-3 animate-pulse" />
            Leading Life Science Research Hub in Bangladesh
          </div>
          <h1 className="text-6xl md:text-8xl font-bold text-white leading-[0.95] tracking-tight">
            Data-Driven <br />
            <span className="brand-text-gradient">Life Science.</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-xl leading-relaxed">
            DeepBio Limited is a Bangladesh-based research startup turning life science data into impactful solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 pt-4">
            <Link
              to="/research"
              className="px-10 py-5 bg-brand-primary hover:bg-[#1a4b75] text-white rounded-2xl font-bold flex items-center justify-center gap-3 transition-all shadow-[0_20px_40px_rgba(32,94,146,0.3)] hover:-translate-y-1 group"
            >
              Explore Our Research
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/training"
              className="px-10 py-5 border border-white/20 hover:bg-white/5 text-white rounded-2xl font-bold transition-all backdrop-blur-sm hover:border-white/40"
            >
              Training Programs
            </Link>
          </div>
          
          <div className="grid grid-cols-3 gap-10 pt-16 border-t border-white/10">
            <div className="group cursor-default">
              <div className="text-4xl font-bold text-white mb-2 transition-colors group-hover:text-brand-secondary">250+</div>
              <div className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Genomes Analyzed</div>
            </div>
            <div className="group cursor-default">
              <div className="text-4xl font-bold text-white mb-2 transition-colors group-hover:text-brand-secondary">2+</div>
              <div className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Partners</div>
            </div>
            <div className="group cursor-default">
              <div className="text-4xl font-bold text-white mb-2 transition-colors group-hover:text-brand-secondary">99%</div>
              <div className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Model Precision</div>
            </div>
          </div>
        </div>

        <div className="relative hidden lg:block">
           <div className="relative w-full aspect-[4/5] rounded-[3rem] overflow-hidden group shadow-2xl border border-white/5 animate-float flex items-center justify-center bg-slate-900">
              <img 
                src="https://images.unsplash.com/photo-1530210124550-912dc1381cb8?auto=format&fit=crop&q=80&w=1200" 
                className="absolute inset-0 w-full h-full object-cover opacity-60" 
                alt="Molecular Research Visualization" 
                // Fix: changed fetchpriority to fetchPriority for React compatibility
                fetchPriority="high"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent"></div>
              
              <div className="relative z-10 w-full px-12 space-y-6">
                <div className="p-6 glass rounded-3xl border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.6)] transform -translate-x-12 translate-y-6 hover:-translate-y-2 transition-all duration-500 backdrop-blur-xl">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 bg-brand-primary rounded-xl flex items-center justify-center shadow-lg">
                      <Brain className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-slate-800 font-bold text-sm">DeepBio Neural-v3</div>
                      <div className="text-brand-primary text-[10px] font-bold uppercase tracking-widest">Processing Data</div>
                    </div>
                  </div>
                  <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full bg-brand-primary w-[84%] animate-pulse"></div>
                  </div>
                </div>

                <div className="p-6 glass rounded-3xl border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.6)] transform translate-x-12 -translate-y-6 hover:translate-y-[-10px] transition-all duration-500 backdrop-blur-xl">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 bg-brand-secondary rounded-xl flex items-center justify-center shadow-lg">
                      <Activity className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-slate-800 font-bold text-sm">Genomic Insights</div>
                      <div className="text-brand-primary text-[10px] font-bold uppercase tracking-widest">Real-time Stream</div>
                    </div>
                  </div>
                  <div className="flex gap-1 items-end h-10">
                     {[4, 8, 3, 9, 5, 10, 4, 8, 6, 9].map((h, i) => (
                       <div key={i} className="flex-1 bg-brand-secondary/60 rounded-t" style={{height: `${h*10}%`}}></div>
                     ))}
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-2 text-white/60 text-[10px] font-bold uppercase tracking-[0.4em] backdrop-blur-md px-4 py-2 rounded-full border border-white/10 bg-white/5">
                <MousePointer2 className="w-3 h-3" /> Discover Innovation
              </div>
           </div>
        </div>
      </div>
    </header>
  );
};
