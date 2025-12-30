
import React from 'react';
import {
  GraduationCap,
  Users,
  Database,
  BookOpen,
  CheckCircle,
  AlertCircle,
  Clock,
  MapPin,
  DollarSign,
  Sparkles,
  ArrowRight,
  Target,
  Award,
  Code,
  Calendar,
  Cpu,
  HardDrive,
  MonitorCheck,
  ExternalLink,
  Zap,
  TrendingUp,
  Shield,
  Globe,
  FileText,
  Settings,
  Microscope,
  Brain,
  Dna,
  Sprout
} from 'lucide-react';

export const ThesisProgramPage: React.FC = () => {
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
              <GraduationCap className="w-4 h-4 animate-pulse" />
              Graduate Research Fellowship
            </div>
            <h1 className="text-6xl md:text-8xl font-bold text-white leading-[0.95] tracking-tight">
              DeepBio <br />
              <span className="brand-text-gradient">Thesis Program.</span>
            </h1>
            <p className="text-2xl text-slate-300 max-w-xl leading-relaxed font-light">
              Bring Your Own Supervisor. We Provide the Research.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <a
                href="#apply"
                className="px-12 py-6 bg-brand-primary hover:bg-[#1a4b75] text-white rounded-2xl font-bold flex items-center justify-center gap-3 transition-all shadow-[0_20px_40px_rgba(32,94,146,0.3)] hover:-translate-y-1 group text-lg"
              >
                Apply Now
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </a>
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
                      <div className="text-slate-800 font-extrabold text-lg">Program Details</div>
                      <div className="text-indigo-600 text-[11px] font-bold uppercase tracking-[0.2em]">Graduate Research Track</div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-1 p-3 bg-slate-50 rounded-xl border border-slate-100 text-center">
                      <div className="text-xl font-black text-slate-800">1 Year</div>
                      <div className="text-[8px] font-bold text-slate-400 uppercase">Duration</div>
                    </div>
                    <div className="flex-1 p-3 bg-slate-50 rounded-xl border border-slate-100 text-center">
                      <div className="text-xl font-black text-slate-800">Remote</div>
                      <div className="text-[8px] font-bold text-slate-400 uppercase">Location</div>
                    </div>
                  </div>
                </div>

                <div className="p-8 glass rounded-[2.5rem] border-white/20 shadow-[0_25px_60px_rgba(0,0,0,0.7)] transform translate-x-12 -translate-y-8 hover:translate-y-[-12px] transition-all duration-700">
                  <div className="flex items-center gap-5 mb-6">
                    <div className="w-14 h-14 bg-emerald-500 rounded-2xl flex items-center justify-center shadow-2xl">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <div className="text-slate-800 font-extrabold text-lg">No Program Fees</div>
                      <div className="text-emerald-600 text-[11px] font-bold uppercase tracking-[0.2em]">High Effort Required</div>
                    </div>
                  </div>
                  <div className="flex gap-2 items-center text-slate-600">
                    <Target className="w-5 h-5 text-emerald-500 animate-pulse" />
                    <span className="text-xs font-bold uppercase tracking-widest">Publication Goal</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Highlights Banner */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group p-8 bg-white rounded-3xl border-2 border-slate-100 hover:border-brand-primary/20 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-7 h-7 text-white" />
              </div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Role</div>
              <div className="text-2xl font-bold text-slate-900">Graduate Research Fellow</div>
              <div className="text-sm text-slate-500 mt-2">Thesis Track Position</div>
            </div>

            <div className="group p-8 bg-white rounded-3xl border-2 border-slate-100 hover:border-brand-primary/20 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Globe className="w-7 h-7 text-white" />
              </div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Location</div>
              <div className="text-2xl font-bold text-slate-900">100% Remote</div>
              <div className="text-sm text-slate-500 mt-2">Work From Anywhere</div>
            </div>

            <div className="group p-8 bg-white rounded-3xl border-2 border-slate-100 hover:border-brand-primary/20 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Clock className="w-7 h-7 text-white" />
              </div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Duration</div>
              <div className="text-2xl font-bold text-slate-900">12 Months</div>
              <div className="text-sm text-slate-500 mt-2">15-20 hrs/week</div>
            </div>

            <div className="group p-8 bg-white rounded-3xl border-2 border-slate-100 hover:border-brand-primary/20 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Investment</div>
              <div className="text-2xl font-bold text-slate-900">No Fees</div>
              <div className="text-sm text-slate-500 mt-2">Zero Financial Cost</div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem We Solve */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 text-red-600 text-xs font-bold uppercase tracking-wider mb-6">
              <AlertCircle className="w-4 h-4" />
              The Research Gap
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8 tracking-tight">
              The Challenge <span className="brand-text-gradient">We Address</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="p-8 bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl border border-red-100">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Common Barriers Students Face</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    </div>
                    <span className="text-slate-700 leading-relaxed">Limited access to <strong>GPUs and HPC infrastructure</strong> for computational analysis</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    </div>
                    <span className="text-slate-700 leading-relaxed">Lack of technical mentorship in <strong>advanced AI/ML and single-cell pipelines</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    </div>
                    <span className="text-slate-700 leading-relaxed">Insufficient exposure to <strong>industry-standard tools and workflows</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    </div>
                    <span className="text-slate-700 leading-relaxed">Gap between <strong>academic theory and publication-ready research</strong></span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-8">
              <div className="p-8 bg-gradient-to-br from-brand-primary/5 to-brand-secondary/5 rounded-3xl border border-brand-primary/20">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Solution</h3>
                <p className="text-lg text-slate-700 leading-relaxed mb-6">
                  The <strong className="text-brand-primary">DeepBio Thesis Fellowship</strong> bridges this critical gap by providing:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 shrink-0 mt-1" />
                    <span className="text-slate-700 leading-relaxed"><strong>Industry Co-Supervision</strong> alongside your university advisor</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 shrink-0 mt-1" />
                    <span className="text-slate-700 leading-relaxed"><strong>Cloud Infrastructure</strong> and computational resources</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 shrink-0 mt-1" />
                    <span className="text-slate-700 leading-relaxed"><strong>Technical Mentorship</strong> from experienced bioinformaticians</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 shrink-0 mt-1" />
                    <span className="text-slate-700 leading-relaxed"><strong>Publication Strategy</strong> to turn your thesis into a peer-reviewed paper</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 bg-gradient-to-r from-brand-dark to-brand-primary rounded-2xl text-white">
                <div className="flex items-center gap-3 mb-2">
                  <Target className="w-6 h-6 text-brand-secondary" />
                  <span className="text-sm font-bold uppercase tracking-wider">Our Goal</span>
                </div>
                <p className="text-lg font-semibold">Transform your thesis into a published manuscript</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tripartite Model */}
      <section className="py-32 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-wider mb-6">
              <Users className="w-4 h-4" />
              Collaborative Framework
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8 tracking-tight">
              The Tripartite <span className="brand-text-gradient">Model</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              We don't replace your university supervisor—<strong className="text-slate-900">we empower them</strong>
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative p-10 bg-white rounded-3xl border-2 border-blue-100 group-hover:border-blue-200 shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="absolute top-6 right-6 w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 font-bold text-sm">
                  1
                </div>
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <GraduationCap className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Primary Supervisor</h3>
                <div className="inline-block px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                  Your University
                </div>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Provides academic oversight, theoretical guidance, and ensures alignment with institutional requirements and grading standards.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-slate-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                    Academic requirements
                  </li>
                  <li className="flex items-center gap-2 text-sm text-slate-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                    Theoretical framework
                  </li>
                  <li className="flex items-center gap-2 text-sm text-slate-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                    Final evaluation
                  </li>
                </ul>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative p-10 bg-white rounded-3xl border-2 border-brand-primary/30 group-hover:border-brand-primary shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="absolute top-6 right-6 w-10 h-10 bg-brand-primary/10 rounded-full flex items-center justify-center text-brand-primary font-bold text-sm">
                  2
                </div>
                <div className="w-20 h-20 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <Code className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Co-Supervisor</h3>
                <div className="inline-block px-3 py-1 bg-brand-primary/10 text-brand-primary rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                  DeepBio Limited
                </div>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Delivers hands-on technical implementation, code infrastructure, cloud resources, and strategic publication guidance.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-slate-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-primary"></div>
                    Technical implementation
                  </li>
                  <li className="flex items-center gap-2 text-sm text-slate-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-primary"></div>
                    Code review & infrastructure
                  </li>
                  <li className="flex items-center gap-2 text-sm text-slate-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-primary"></div>
                    Publication strategy
                  </li>
                </ul>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative p-10 bg-white rounded-3xl border-2 border-emerald-100 group-hover:border-emerald-200 shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="absolute top-6 right-6 w-10 h-10 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 font-bold text-sm">
                  3
                </div>
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <Zap className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">The Fellow</h3>
                <div className="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                  You
                </div>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Executes the research, bridges communication between supervisors, and ensures seamless collaboration for optimal outcomes.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-slate-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                    Execute research tasks
                  </li>
                  <li className="flex items-center gap-2 text-sm text-slate-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                    Coordinate both supervisors
                  </li>
                  <li className="flex items-center gap-2 text-sm text-slate-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                    Drive project forward
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="p-8 bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 rounded-3xl">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center shrink-0">
                <AlertCircle className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">Important Administrative Requirement</h4>
                <p className="text-slate-700 leading-relaxed">
                  <strong>DeepBio does not contact university professors on your behalf.</strong> You are responsible for securing written permission from your academic department to have an external industry co-supervisor. This approval must be obtained before starting the fellowship.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Specialization Tracks Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-wider mb-6">
              <Target className="w-4 h-4" />
              Research Focus Areas
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
              What Research Specialization Tracks Can You Work On?
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Choose a research specialization track that sparks your passion to work on a bioinformatics research project. The following options provide a glimpse into potential areas where students can focus their work:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Infectious Diseases */}
            <div className="group p-10 bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl border-2 border-amber-100 hover:border-amber-300 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Microscope className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Infectious Diseases</h3>
              <p className="text-slate-600 leading-relaxed">
                Study pathogen genomics, antimicrobial resistance, and epidemiological surveillance using computational approaches to combat emerging infectious threats.
              </p>
            </div>

            {/* Neuroscience */}
            <div className="group p-10 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl border-2 border-indigo-100 hover:border-indigo-300 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Neuroscience</h3>
              <p className="text-slate-600 leading-relaxed">
                Explore neurogenomics, brain-computer interfaces, and computational neuroscience to unravel the complexities of the nervous system.
              </p>
            </div>

            {/* Oncology */}
            <div className="group p-10 bg-gradient-to-br from-rose-50 to-pink-50 rounded-3xl border-2 border-rose-100 hover:border-rose-300 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Dna className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Oncology</h3>
              <p className="text-slate-600 leading-relaxed">
                Investigate cancer genomics, tumor mutation profiling, and precision oncology through advanced bioinformatics and machine learning.
              </p>
            </div>

            {/* Immunology */}
            <div className="group p-10 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl border-2 border-blue-100 hover:border-blue-300 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Immunology</h3>
              <p className="text-slate-600 leading-relaxed">
                Analyze immune system dynamics, vaccine development, and immunogenomics to advance therapeutic strategies and disease prevention.
              </p>
            </div>

            {/* Agriculture */}
            <div className="group p-10 bg-gradient-to-br from-emerald-50 to-green-50 rounded-3xl border-2 border-emerald-100 hover:border-emerald-300 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Sprout className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Agriculture</h3>
              <p className="text-slate-600 leading-relaxed">
                Apply genomics to crop improvement, plant disease resistance, and sustainable agriculture through computational breeding strategies.
              </p>
            </div>

            {/* Custom Track */}
            <div className="group p-10 bg-gradient-to-br from-slate-50 to-gray-50 rounded-3xl border-2 border-slate-200 hover:border-brand-primary hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Custom Research Track</h3>
              <p className="text-slate-600 leading-relaxed">
                Have a unique research interest? We welcome proposals in other bioinformatics domains aligned with our computational expertise.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-slate-600 bg-slate-50 inline-block px-8 py-4 rounded-2xl border border-slate-200">
              <strong className="text-slate-900">Note:</strong> All tracks require strong computational skills and dedication to rigorous scientific research.
            </p>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-32 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-wider mb-6">
              <Award className="w-4 h-4" />
              Fellowship Benefits
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8 tracking-tight">
              What You'll <span className="brand-text-gradient">Receive</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group p-10 bg-gradient-to-br from-white to-slate-50 rounded-3xl border-2 border-slate-200 hover:border-brand-primary/30 shadow-sm hover:shadow-2xl transition-all duration-500">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Database className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Curated Datasets</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Access to proprietary, publication-ready multi-omics datasets across multiple domains:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700">Cancer Genomics</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700">Neurogenomics</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700">Agri-genomics</span>
                </li>
              </ul>
            </div>

            <div className="group p-10 bg-gradient-to-br from-white to-slate-50 rounded-3xl border-2 border-slate-200 hover:border-brand-primary/30 shadow-sm hover:shadow-2xl transition-all duration-500">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Settings className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Industry Tools</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Professional training on cutting-edge tools rarely taught in universities:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700">Docker & Containerization</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700">Nextflow Pipelines</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700">Cloud Computing & HPC</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700">Git Version Control</span>
                </li>
              </ul>
            </div>

            <div className="group p-10 bg-gradient-to-br from-white to-slate-50 rounded-3xl border-2 border-slate-200 hover:border-brand-primary/30 shadow-sm hover:shadow-2xl transition-all duration-500">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Publication Path</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Beyond thesis defense—our goal is peer-reviewed publication:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700">Journal Selection Strategy</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700">Manuscript Preparation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700">Co-authorship Opportunity</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700">Peer Review Process Support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Criteria */}
      <section className="py-32 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-wider mb-6">
              <CheckCircle className="w-4 h-4" />
              Requirements
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8 tracking-tight">
              Eligibility <span className="brand-text-gradient">Criteria</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              We're looking for dedicated, self-motivated researchers ready to commit to excellence
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Academic Status',
                  desc: 'Currently enrolled in MSc or final-year BSc program (any life science discipline)',
                  icon: GraduationCap
                },
                {
                  title: 'Technical Skills',
                  desc: 'Basic proficiency in Python or R, and fundamental Linux/Bash knowledge',
                  icon: Code
                },
                {
                  title: 'Administrative',
                  desc: 'University supervisor willing to accept external industry co-mentor',
                  icon: FileText
                },
                {
                  title: 'Time Commitment',
                  desc: '15–20 hours/week (flexible during exams, evenings/weekends preferred)',
                  icon: Clock
                },
                {
                  title: 'Team Collaboration',
                  desc: 'Highly team-oriented with problem-solving mindset and passion for data science',
                  icon: Users
                },
                {
                  title: 'Weekly Meetings',
                  desc: 'Mandatory attendance at Sunday meetings (9:00–11:00 PM) via video call',
                  icon: Calendar
                },
                {
                  title: 'Ethics & Compliance',
                  desc: 'Strict adherence to national/international research and copyright standards',
                  icon: Shield
                },
                {
                  title: 'Program Duration',
                  desc: 'Minimum 12-month commitment required to complete assigned projects',
                  icon: TrendingUp
                }
              ].map((item, index) => (
                <div key={index} className="group p-8 bg-white rounded-2xl border-2 border-slate-200 hover:border-brand-primary/30 shadow-sm hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <item.icon className="w-6 h-6 text-brand-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-slate-600 leading-relaxed text-sm">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Hardware Requirements */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider mb-6">
              <MonitorCheck className="w-4 h-4" />
              Technical Specifications
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8 tracking-tight">
              Minimum Hardware <span className="brand-text-gradient">Setup</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-8 bg-gradient-to-br from-slate-50 to-white rounded-3xl border-2 border-slate-200 shadow-sm">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center">
                    <Cpu className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Processor</div>
                    <div className="text-lg font-bold text-slate-900">Multi-Core CPU</div>
                  </div>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Intel Core i5 (8th Gen or higher) or AMD Ryzen 5 or better for computational tasks
                </p>
              </div>

              <div className="p-8 bg-gradient-to-br from-slate-50 to-white rounded-3xl border-2 border-slate-200 shadow-sm">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                    <Database className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Memory (RAM)</div>
                    <div className="text-lg font-bold text-slate-900">8GB Minimum</div>
                  </div>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  At least 8 GB RAM (16 GB strongly recommended for heavy omics analysis workloads)
                </p>
              </div>

              <div className="p-8 bg-gradient-to-br from-slate-50 to-white rounded-3xl border-2 border-slate-200 shadow-sm">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center">
                    <HardDrive className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Storage</div>
                    <div className="text-lg font-bold text-slate-900">256GB SSD</div>
                  </div>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Minimum 256 GB solid-state drive for faster data processing and analysis
                </p>
              </div>

              <div className="p-8 bg-gradient-to-br from-slate-50 to-white rounded-3xl border-2 border-slate-200 shadow-sm">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center">
                    <MonitorCheck className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Operating System</div>
                    <div className="text-lg font-bold text-slate-900">Cross-Platform</div>
                  </div>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Windows 10/11, macOS (latest version), or any Linux distribution
                </p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-2xl">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" />
                <p className="text-slate-700 leading-relaxed text-sm">
                  <strong>Note:</strong> Cloud-based computational resources (GPUs, HPC clusters) will be provided by DeepBio for intensive analysis tasks. Your local machine is primarily for code development and routine analysis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-20 bg-gradient-to-br from-red-50 via-orange-50 to-amber-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="p-12 bg-white rounded-3xl border-2 border-red-200 shadow-xl">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center shrink-0">
                <AlertCircle className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-slate-900 mb-4">This Is a Research Position</h3>
                <div className="space-y-4 text-slate-700 leading-relaxed">
                  <p className="text-lg">
                    <strong className="text-red-600">This is not a tutoring service.</strong> This is a <strong>junior research position</strong> that demands commitment, independence, and technical rigor.
                  </p>
                  <p className="text-lg">
                    If you cannot dedicate <strong className="text-slate-900">15+ hours per week</strong> to hands-on coding, data analysis, and computational research, please do not apply.
                  </p>
                  <p className="text-lg">
                    We are seeking <strong className="text-slate-900">brilliant self-starters</strong> who want to prove themselves on the global research stage and contribute to high-impact, publication-quality science.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Section - Professional Redesign */}
      <section id="apply" className="scroll-mt-20 py-32 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-wider mb-6">
                <GraduationCap className="w-4 h-4" />
                Application Process
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                Apply to the Thesis Program
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Join our research community and receive comprehensive support to transform your thesis into high-impact, publication-ready work.
              </p>
            </div>

            {/* Application Card */}
            <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Left Side - Information */}
                <div className="p-12 bg-gradient-to-br from-brand-primary to-brand-secondary text-white">
                  <h3 className="text-3xl font-bold mb-6">Program Benefits</h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                        <CheckCircle className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">Expert Mentorship</h4>
                        <p className="text-white/80 text-sm">Guidance from experienced researchers and principal investigators</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                        <CheckCircle className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">Computational Resources</h4>
                        <p className="text-white/80 text-sm">Access to high-performance computing infrastructure</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                        <CheckCircle className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">Publication Support</h4>
                        <p className="text-white/80 text-sm">Full assistance with manuscript preparation and journal submission</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side - Application Form */}
                <div className="p-12 bg-white">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Submit Your Application</h3>
                  <p className="text-slate-600 mb-8 leading-relaxed">
                    Complete our application form to begin your journey as a DeepBio Graduate Research Fellow.
                  </p>

                  <a
                    href="https://forms.gle/KZkaUWRKxChn6cyN6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full px-8 py-5 bg-brand-primary hover:bg-brand-primary/90 text-white rounded-2xl font-bold text-center transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 group mb-8"
                  >
                    <span className="flex items-center justify-center gap-3">
                      Open Application Form
                      <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </a>

                  <div className="space-y-4 pt-6 border-t border-slate-200">
                    <div className="flex items-center gap-3 text-slate-600">
                      <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      </div>
                      <span className="text-sm font-medium">Rolling admissions - apply anytime</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-600">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Clock className="w-5 h-5 text-blue-600" />
                      </div>
                      <span className="text-sm font-medium">Response within 2 weeks</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-600">
                      <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                        <Sparkles className="w-5 h-5 text-purple-600" />
                      </div>
                      <span className="text-sm font-medium">No application fee required</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="mt-12 text-center">
              <p className="text-slate-600 text-sm">
                Questions about the program? Contact us at{' '}
                <a href="mailto:deepbiobd@gmail.com" className="text-brand-primary font-semibold hover:underline">
                  deepbiobd@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
