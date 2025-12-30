
import React, { useState } from 'react';
import {
  Microscope,
  Beaker,
  Brain,
  Target,
  Users,
  FlaskConical,
  Activity,
  Sparkles,
  ArrowRight,
  BookOpen,
  Database,
  X,
  Mail,
  Calendar,
  TrendingUp
} from 'lucide-react';
import { researchMetrics } from '../config/researchMetrics';

const researchPrograms = [
  {
    id: 1,
    title: "Genomic Surveillance of Pathogens",
    lead: "Md. Jubayer Hossain",
    status: "Planning",
    focus: "AMR & Infectious Disease",
    description: "Developing automated pipelines for the real-time monitoring of antibiotic-resistant strains in urban clinical settings.",
    icon: Microscope,
    color: "bg-brand-primary/10 text-brand-primary",
    borderColor: "border-brand-primary/20"
  },
  {
    id: 2,
    title: "AI Frameworks for Rare Disease Diagnostics",
    lead: "Md. Jubayer Hossain",
    status: "Planning",
    focus: "Machine Learning",
    description: "Utilizing deep learning architectures to identify pathogenic variants in non-coding regions for South Asian cohorts.",
    icon: Brain,
    color: "bg-brand-secondary/10 text-brand-secondary",
    borderColor: "border-brand-secondary/20"
  },
  {
    id: 3,
    title: "Molecular Dynamics in Protein Folding",
    lead: "Md. Jubayer Hossain",
    status: "Planning",
    focus: "Computational Biology",
    description: "Simulating the interaction of novel small molecules with viral spike proteins using high-throughput computing.",
    icon: Beaker,
    color: "bg-slate-100 text-slate-600",
    borderColor: "border-slate-200"
  },
  {
    id: 4,
    title: "Cancer Genomics Profiling",
    lead: "Md. Jubayer Hossain",
    status: "Planning",
    focus: "Oncology & Precision Medicine",
    description: "Comprehensive genomic profiling of South Asian cancer patients to identify population-specific biomarkers and therapeutic targets.",
    icon: Target,
    color: "bg-rose-100 text-rose-600",
    borderColor: "border-rose-200"
  },
  {
    id: 5,
    title: "Neurogenomics of Mental Health",
    lead: "Md. Jubayer Hossain",
    status: "Planning",
    focus: "Psychiatric Genomics",
    description: "Investigating the genetic architecture of mental health disorders in South Asian populations using whole-genome sequencing.",
    icon: Brain,
    color: "bg-indigo-100 text-indigo-600",
    borderColor: "border-indigo-200"
  },
  {
    id: 6,
    title: "Drug Discovery for Tropical Diseases",
    lead: "Md. Jubayer Hossain",
    status: "Planning",
    focus: "In-Silico Pharmacology",
    description: "Accelerating drug discovery for neglected tropical diseases through AI-powered molecular screening and docking simulations.",
    icon: FlaskConical,
    color: "bg-teal-100 text-teal-600",
    borderColor: "border-teal-200"
  }
];

export const ResearchProgramsPage: React.FC = () => {
  const [selectedProgram, setSelectedProgram] = useState<typeof researchPrograms[0] | null>(null);

  return (
    <div className="pt-0 min-h-screen bg-white">
      {/* Hero Section - Matching Research Overview */}
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
              <Activity className="w-4 h-4 animate-pulse" />
              Active Research Initiatives
            </div>
            <h1 className="text-6xl md:text-8xl font-bold text-white leading-[0.95] tracking-tight">
              Research <br />
              <span className="brand-text-gradient">Programs.</span>
            </h1>
            <p className="text-2xl text-slate-300 max-w-xl leading-relaxed font-light">
              Flagship research initiatives driving innovation in computational biology, genomics, and AI-driven healthcare solutions.
            </p>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-square rounded-[4rem] overflow-hidden group shadow-2xl border border-white/5 animate-float flex items-center justify-center bg-slate-900/40 backdrop-blur-md">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-transparent"></div>

              <div className="relative z-10 w-full px-16 space-y-10">
                <div className="p-8 glass rounded-[2.5rem] border-white/20 shadow-[0_25px_60px_rgba(0,0,0,0.7)] transform -translate-x-12 translate-y-8 hover:-translate-y-2 transition-all duration-700">
                  <div className="flex items-center gap-5 mb-6">
                    <div className="w-14 h-14 bg-teal-600 rounded-2xl flex items-center justify-center shadow-2xl">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <div className="text-slate-800 font-extrabold text-lg">Active Programs</div>
                      <div className="text-teal-600 text-[11px] font-bold uppercase tracking-[0.2em]">Multi-domain Research</div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-1 p-3 bg-slate-50 rounded-xl border border-slate-100 text-center">
                      <div className="text-xl font-black text-slate-800">6</div>
                      <div className="text-[8px] font-bold text-slate-400 uppercase">Programs</div>
                    </div>
                    <div className="flex-1 p-3 bg-slate-50 rounded-xl border border-slate-100 text-center">
                      <div className="text-xl font-black text-slate-800">15+</div>
                      <div className="text-[8px] font-bold text-slate-400 uppercase">Researchers</div>
                    </div>
                  </div>
                </div>

                <div className="p-8 glass rounded-[2.5rem] border-white/20 shadow-[0_25px_60px_rgba(0,0,0,0.7)] transform translate-x-12 -translate-y-8 hover:translate-y-[-12px] transition-all duration-700">
                  <div className="flex items-center gap-5 mb-6">
                    <div className="w-14 h-14 bg-emerald-500 rounded-2xl flex items-center justify-center shadow-2xl">
                      <Database className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <div className="text-slate-800 font-extrabold text-lg">Research Output</div>
                      <div className="text-emerald-600 text-[11px] font-bold uppercase tracking-[0.2em]">Data-Driven Discovery</div>
                    </div>
                  </div>
                  <div className="flex gap-2 items-center text-slate-600">
                    <Activity className="w-5 h-5 text-emerald-500 animate-pulse" />
                    <span className="text-xs font-bold uppercase tracking-widest">Real-time Analysis</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Programs Section */}
      <section className="py-32 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/5 text-brand-primary text-xs font-bold uppercase tracking-wider mb-6">
              <Target className="w-4 h-4" />
              Strategic Initiatives
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tight mb-6">
              Active Research <span className="brand-text-gradient">Programs</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light">
              Our research programs span multiple domains of computational biology, each led by expert principal investigators
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            {researchPrograms.map((program) => (
              <div
                key={program.id}
                className={`group bg-white rounded-[3rem] border-2 ${program.borderColor} hover:border-brand-primary/30 shadow-sm hover:shadow-[0_30px_60px_-15px_rgba(0,82,204,0.15)] transition-all duration-500 p-10 relative overflow-hidden`}
              >
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-40 h-40 opacity-5 group-hover:opacity-10 transition-opacity">
                  <program.icon className="w-full h-full text-brand-primary" />
                </div>

                <div className="relative z-10 space-y-6">
                  {/* Header with Icon */}
                  <div className="flex items-start justify-between">
                    <div className={`w-20 h-20 rounded-2xl ${program.color} flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                      <program.icon className="w-10 h-10" />
                    </div>
                    <div className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest ${
                      program.status === 'Ongoing' ? 'bg-green-50 text-green-600' :
                      program.status === 'In Review' ? 'bg-blue-50 text-blue-600' :
                      program.status === 'Planning' ? 'bg-amber-50 text-amber-600' :
                      'bg-slate-50 text-slate-600'
                    }`}>
                      {program.status}
                    </div>
                  </div>

                  {/* Title & Focus */}
                  <div className="space-y-3">
                    <div className="text-xs font-bold uppercase tracking-wide text-brand-primary">
                      {program.focus}
                    </div>
                    <h3 className="text-3xl font-bold text-slate-900 leading-tight group-hover:text-brand-primary transition-colors">
                      {program.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 text-base leading-relaxed">
                    {program.description}
                  </p>

                  {/* Principal Investigator */}
                  <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center text-white shadow-lg">
                      <Users className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Principal Investigator</div>
                      <div className="text-lg font-bold text-slate-900">{program.lead}</div>
                    </div>
                  </div>

                  {/* Action Button */}
                  <button
                    onClick={() => setSelectedProgram(program)}
                    className="w-full mt-6 py-4 bg-slate-50 hover:bg-brand-primary text-slate-600 hover:text-white rounded-2xl font-bold flex items-center justify-center gap-3 transition-all group/btn"
                  >
                    Learn More
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-brand-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-secondary text-[10px] font-bold uppercase tracking-[0.3em] backdrop-blur-md mb-8">
            <Sparkles className="w-4 h-4 animate-pulse" />
            Collaboration Opportunities
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Join Our Research Network
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Collaborate with our world-class research teams and contribute to breakthrough discoveries in computational biology
          </p>
          <a
            href="mailto:deepbiobd@gmail.com?subject=Research Collaboration Inquiry"
            className="inline-flex items-center gap-3 px-10 py-5 bg-brand-primary hover:bg-[#1a4b75] text-white rounded-2xl font-bold shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 text-lg"
          >
            Contact Research Team
            <ArrowRight className="w-6 h-6" />
          </a>
        </div>
      </section>

      {/* Modal Popup */}
      {selectedProgram && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl animate-in zoom-in-95 duration-300">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProgram(null)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 flex items-center justify-center transition-all z-10"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Content */}
            <div className="p-10 max-h-[85vh] overflow-y-auto">
              {/* Header */}
              <div className="mb-8">
                <div className={`inline-flex w-16 h-16 rounded-2xl ${selectedProgram.color} items-center justify-center mb-6`}>
                  <selectedProgram.icon className="w-8 h-8" />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <span className={`text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full ${
                    selectedProgram.status === 'Ongoing' ? 'bg-green-50 text-green-600' :
                    selectedProgram.status === 'In Review' ? 'bg-blue-50 text-blue-600' :
                    selectedProgram.status === 'Planning' ? 'bg-amber-50 text-amber-600' :
                    'bg-slate-50 text-slate-600'
                  }`}>
                    {selectedProgram.status}
                  </span>
                  <span className="text-xs font-bold text-brand-primary uppercase tracking-wide">{selectedProgram.focus}</span>
                </div>
                <h2 className="text-4xl font-bold text-slate-900 mb-4 leading-tight">{selectedProgram.title}</h2>
                <p className="text-lg text-slate-600 leading-relaxed">{selectedProgram.description}</p>
              </div>

              {/* Detailed Information */}
              <div className="space-y-6 border-t border-slate-100 pt-8">
                {/* Principal Investigator */}
                <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-brand-primary/5 to-brand-secondary/5 rounded-2xl border border-brand-primary/10">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center text-white shadow-lg shrink-0">
                    <Users className="w-7 h-7" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Principal Investigator</div>
                    <div className="text-2xl font-bold text-slate-900 mb-1">{selectedProgram.lead}</div>
                    <div className="text-sm text-slate-600">Lead Researcher & Program Director</div>
                  </div>
                </div>

                {/* Research Objectives */}
                <div className="p-6 bg-slate-50 rounded-2xl">
                  <div className="flex items-center gap-3 mb-4">
                    <Target className="w-6 h-6 text-brand-primary" />
                    <h3 className="text-xl font-bold text-slate-900">Research Objectives</h3>
                  </div>
                  <ul className="space-y-3 text-slate-700">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-2 shrink-0"></div>
                      <span>Develop innovative methodologies for advanced {selectedProgram.focus.toLowerCase()} research</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-2 shrink-0"></div>
                      <span>Collaborate with international research institutions and healthcare partners</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-2 shrink-0"></div>
                      <span>Publish findings in high-impact peer-reviewed journals</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-2 shrink-0"></div>
                      <span>Train next-generation bioinformatics researchers</span>
                    </li>
                  </ul>
                </div>

                {/* Expected Outcomes */}
                <div className="p-6 bg-slate-50 rounded-2xl">
                  <div className="flex items-center gap-3 mb-4">
                    <TrendingUp className="w-6 h-6 text-brand-primary" />
                    <h3 className="text-xl font-bold text-slate-900">Expected Outcomes</h3>
                  </div>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    This program aims to deliver breakthrough discoveries in {selectedProgram.focus.toLowerCase()}, with direct applications to clinical practice and public health policy in South Asia and beyond.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-brand-primary font-semibold">
                    <Calendar className="w-4 h-4" />
                    <span>Timeline: 2024-2027</span>
                  </div>
                </div>

                {/* Contact CTA */}
                <div className="p-6 bg-gradient-to-r from-brand-dark to-brand-primary rounded-2xl text-white">
                  <h3 className="text-xl font-bold mb-2">Interested in Collaborating?</h3>
                  <p className="text-white/80 mb-4">
                    Join our research team or explore partnership opportunities for this program.
                  </p>
                  <a
                    href={`mailto:deepbiobd@gmail.com?subject=Collaboration Inquiry: ${selectedProgram.title}`}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-brand-primary rounded-xl font-bold hover:bg-slate-100 transition-all"
                  >
                    <Mail className="w-5 h-5" />
                    Contact Research Team
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
