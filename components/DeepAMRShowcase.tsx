import React from 'react'
import { ArrowRight, Shield, Zap, FlaskConical, Activity, Dna, Globe } from 'lucide-react'

const features = [
  {
    icon: Dna,
    title: 'Genomic Analysis',
    description: 'Upload FASTA/FASTQ files for instant resistance gene detection across 12+ organisms.',
  },
  {
    icon: Zap,
    title: 'Results in Minutes',
    description: 'AI-powered predictions delivered in under 15 minutes with 95%+ accuracy.',
  },
  {
    icon: FlaskConical,
    title: '50+ Antibiotics',
    description: 'Comprehensive resistance profiling across a wide panel of antimicrobial agents.',
  },
  {
    icon: Shield,
    title: 'HIPAA Compliant',
    description: 'End-to-end encryption with international data protection standards.',
  },
]

const stats = [
  { value: '95%+', label: 'Prediction Accuracy' },
  { value: '12+', label: 'Organisms Supported' },
  { value: '<15min', label: 'Turnaround Time' },
  { value: '50+', label: 'Antibiotics Covered' },
]

export const DeepAMRShowcase: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="relative overflow-hidden rounded-[3rem] bg-brand-dark p-10 md:p-16">
        {/* Background effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/20 blur-[150px] rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-secondary/10 blur-[120px] rounded-full"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </div>

        <div className="relative z-10">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10 mb-14">
            <div className="space-y-5 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-secondary text-[10px] font-bold uppercase tracking-[0.2em] backdrop-blur-md">
                <Activity className="w-3 h-3 animate-pulse" />
                Featured Product
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                Deep<span className="brand-text-gradient">AMR</span>
              </h2>
              <p className="text-lg text-slate-400 leading-relaxed">
                AI-powered antimicrobial resistance prediction from genomic data. Helping clinicians in Bangladesh and South Asia make faster, evidence-based treatment decisions.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 lg:pt-10">
              <a
                href="https://deep-amr.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-brand-primary hover:bg-[#1a4b75] text-white rounded-2xl font-bold flex items-center justify-center gap-3 transition-all shadow-[0_20px_40px_rgba(32,94,146,0.3)] hover:-translate-y-1 group"
              >
                <Globe className="w-5 h-5" />
                Try Deep-AMR
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
            {stats.map((stat, i) => (
              <div key={i} className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm text-center">
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Features */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((feature, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <div className="w-11 h-11 rounded-xl bg-brand-primary/20 flex items-center justify-center mb-4">
                  <feature.icon className="w-5 h-5 text-brand-secondary" />
                </div>
                <h3 className="text-white font-bold mb-2">{feature.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
