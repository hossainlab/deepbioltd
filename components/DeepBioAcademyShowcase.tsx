import React from 'react'
import { ArrowRight, BookOpen, GraduationCap, Dna, BrainCircuit, Microscope, ExternalLink, Play } from 'lucide-react'

const stats = [
  { value: '6+',       label: 'Courses Available' },
  { value: '500+',     label: 'Students Enrolled' },
  { value: 'Self-paced', label: 'Flexible Learning' },
  { value: 'Certified', label: 'On Completion' },
]

const topics = [
  {
    icon: Dna,
    title: 'Bioinformatics',
    description: 'NGS analysis, RNA-Seq, single-cell genomics, variant calling, and computational pipelines for omics data.',
  },
  {
    icon: Microscope,
    title: 'Computational Biology',
    description: 'Structural biology, molecular dynamics, systems biology, and AI-driven molecular discovery.',
  },
  {
    icon: BrainCircuit,
    title: 'AI in Biology',
    description: 'Machine learning for drug discovery, generative molecular design, and deep learning for life sciences.',
  },
]

export const DeepBioAcademyShowcase: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="relative overflow-hidden rounded-[3rem] bg-brand-dark p-10 md:p-16">
        {/* Background effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-brand-secondary/15 blur-[160px] rounded-full"></div>
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-primary/20 blur-[140px] rounded-full"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </div>

        <div className="relative z-10">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10 mb-14">
            <div className="space-y-5 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-secondary text-[10px] font-bold uppercase tracking-[0.2em] backdrop-blur-md">
                <GraduationCap className="w-3 h-3" />
                Featured Initiative
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                DeepBio<span className="brand-text-gradient"> Academy</span>
              </h2>
              <p className="text-lg text-slate-400 leading-relaxed">
                Expert-led online training in bioinformatics, computational biology, and AI in life sciences — built by DeepBio Ltd to democratise cutting-edge biological education.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 lg:pt-10">
              <a
                href="https://deepbioacademy.com/courses/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-brand-primary hover:bg-[#1a4b75] text-white rounded-2xl font-bold flex items-center justify-center gap-3 transition-all shadow-[0_20px_40px_rgba(32,94,146,0.3)] hover:-translate-y-1 group"
              >
                <BookOpen className="w-5 h-5" />
                Explore Courses
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://www.youtube.com/@hossainlab"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border border-white/20 hover:bg-white/5 text-white rounded-2xl font-bold flex items-center justify-center gap-3 transition-all backdrop-blur-sm hover:border-white/40"
              >
                <Play className="w-4 h-4" />
                Watch Demo
                <ExternalLink className="w-4 h-4 opacity-60" />
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

          {/* Topics */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {topics.map((topic, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <div className="w-11 h-11 rounded-xl bg-brand-primary/20 flex items-center justify-center mb-4">
                  <topic.icon className="w-5 h-5 text-brand-secondary" />
                </div>
                <h3 className="text-white font-bold mb-2">{topic.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{topic.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
