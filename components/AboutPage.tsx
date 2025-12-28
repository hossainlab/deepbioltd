
import React from 'react';
import { Target, Eye, Sparkles, Users, Globe2, ArrowRight } from 'lucide-react';
import { Team } from './Team';

export const AboutPage: React.FC = () => {
  return (
    <div className="pt-0 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-brand-dark pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1579154235602-3c32e98749e7?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
          <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-brand-primary/20 blur-[150px] rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/4 -left-20 w-[600px] h-[600px] bg-brand-secondary/15 blur-[150px] rounded-full"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid lg:grid-cols-2 gap-20 items-center py-24">
          <div className="space-y-12">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-secondary text-[10px] font-bold uppercase tracking-[0.3em] backdrop-blur-md">
              <Sparkles className="w-4 h-4 animate-pulse" />
              About DeepBio Limited
            </div>
            <h1 className="text-6xl md:text-8xl font-bold text-white leading-[0.95] tracking-tight">
              Who We <br />
              <span className="brand-text-gradient">Are.</span>
            </h1>
            <p className="text-2xl text-slate-300 max-w-xl leading-relaxed font-light">
              DeepBio Limited is a Bangladesh-based research startup turning life science data into impactful solutions through AI and bioinformatics.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <button className="px-12 py-6 bg-brand-primary hover:bg-[#1a4b75] text-white rounded-2xl font-bold flex items-center justify-center gap-3 transition-all shadow-[0_20px_40px_rgba(32,94,146,0.3)] hover:-translate-y-1 group text-lg">
                Learn Our Story
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-square rounded-[4rem] overflow-hidden group shadow-2xl border border-white/5 animate-float flex items-center justify-center bg-slate-900/40 backdrop-blur-md">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/20 to-transparent"></div>

              <div className="relative z-10 w-full px-16 space-y-10">
                <div className="p-8 glass rounded-[2.5rem] border-white/20 shadow-[0_25px_60px_rgba(0,0,0,0.7)] transform -translate-x-12 translate-y-8 hover:-translate-y-2 transition-all duration-700">
                  <div className="flex items-center gap-5 mb-6">
                    <div className="w-14 h-14 bg-brand-primary rounded-2xl flex items-center justify-center shadow-2xl">
                      <Globe2 className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <div className="text-slate-800 font-extrabold text-lg">Global Impact</div>
                      <div className="text-brand-primary text-[11px] font-bold uppercase tracking-[0.2em]">South Asia's Leading Hub</div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-1 p-3 bg-slate-50 rounded-xl border border-slate-100 text-center">
                      <div className="text-xl font-black text-slate-800">250+</div>
                      <div className="text-[8px] font-bold text-slate-400 uppercase">Genomes</div>
                    </div>
                    <div className="flex-1 p-3 bg-slate-50 rounded-xl border border-slate-100 text-center">
                      <div className="text-xl font-black text-slate-800">99%</div>
                      <div className="text-[8px] font-bold text-slate-400 uppercase">Precision</div>
                    </div>
                  </div>
                </div>

                <div className="p-8 glass rounded-[2.5rem] border-white/20 shadow-[0_25px_60px_rgba(0,0,0,0.7)] transform translate-x-12 -translate-y-8 hover:translate-y-[-12px] transition-all duration-700">
                  <div className="flex items-center gap-5 mb-6">
                    <div className="w-14 h-14 bg-brand-secondary rounded-2xl flex items-center justify-center shadow-2xl">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <div className="text-slate-800 font-extrabold text-lg">Expert Team</div>
                      <div className="text-brand-secondary text-[11px] font-bold uppercase tracking-[0.2em]">Multi-Disciplinary</div>
                    </div>
                  </div>
                  <p className="text-slate-600 text-sm font-medium">Powered by leading scientists and AI researchers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-40 bg-slate-950 text-white relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-6">
          <header className="mb-24 text-center space-y-6">
            <h2 className="text-brand-secondary font-bold uppercase tracking-[0.4em] text-xs">Our Foundation</h2>
            <p className="text-5xl md:text-7xl font-bold text-white tracking-tighter">Vision & Mission</p>
            <div className="w-20 h-1.5 brand-gradient mx-auto rounded-full"></div>
          </header>

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
      </section>

      {/* Team Section */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <header className="mb-24 text-center space-y-6">
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 bg-brand-primary/10 rounded-xl flex items-center justify-center text-brand-primary">
                <Users className="w-6 h-6" />
              </div>
              <h2 className="text-brand-primary font-bold uppercase tracking-[0.3em] text-xs">Our People</h2>
            </div>
            <p className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tighter">Meet Our Team</p>
            <div className="w-20 h-1.5 brand-gradient mx-auto rounded-full"></div>
          </header>

          <Team />
        </div>
      </section>
    </div>
  );
};
