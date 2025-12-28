
import React, { useState } from 'react';
import { 
  GraduationCap, 
  ArrowRight, 
  Clock, 
  Users, 
  Award, 
  CheckCircle2, 
  Zap, 
  Sparkles,
  BookOpen,
  PieChart,
  Activity,
  Layers,
  ChevronRight,
  ShieldCheck,
  Globe2,
  Cpu,
  Database
} from 'lucide-react';

const programs = [
  {
    id: "sbtp",
    category: "Elite Research",
    title: "Specialized Bioinformatics Training Program (SBTP)",
    subtitle: "Advanced Research Intensive",
    description: "Our flagship elite curriculum designed for high-impact biological studies. Master the complete multi-omics workflow from sequencing to structural biology.",
    duration: "16 Weeks",
    level: "Elite",
    modules: 24,
    type: "Hybrid",
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=1200",
    enrollmentLink: "https://docs.google.com/forms/d/e/1FAIpQLSclK7H7q5J_0I8X6T-Q8R5R7X7q5J_0I8X6T-Q8R5R7X7q5J/viewform",
    skills: ["Genomics", "Proteomics", "Cloud-Compute", "AI Modeling"]
  },
  {
    id: "mastery",
    category: "Professional Track",
    title: "Bioinformatics Mastery",
    subtitle: "Genomic Analysis Workshop",
    description: "A comprehensive intensive program for life science professionals. Master NGS data analysis and genome assembly using industry-standard tools.",
    duration: "12 Weeks",
    level: "Pro",
    modules: 18,
    type: "Hybrid",
    image: "https://images.unsplash.com/photo-1518152006812-edab29b069ac?auto=format&fit=crop&q=80&w=1200",
    enrollmentLink: "https://docs.google.com/forms/d/e/1FAIpQLSclK7H7q5J_0I8X6T-Q8R5R7X7q5J_0I8X6T-Q8R5R7X7q5J/viewform",
    skills: ["NGS Pipelines", "Linux", "Variant Calling", "Phylogenetics"]
  },
  {
    id: "ai-clinical",
    category: "Clinical Tech",
    title: "Clinical AI Practitioner",
    subtitle: "ML in Modern Healthcare",
    description: "Build predictive models for disease diagnosis using real-world medical datasets. Covers neural architectures and HIPAA-compliant deployment.",
    duration: "8 Weeks",
    level: "Advanced",
    modules: 12,
    type: "Online",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=1200",
    enrollmentLink: "https://docs.google.com/forms/d/e/1FAIpQLSclK7H7q5J_0I8X6T-Q8R5R7X7q5J_0I8X6T-Q8R5R7X7q5J/viewform",
    skills: ["Deep Learning", "Medical Imaging", "Ethics", "Python"]
  }
];

export const TrainingPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');

  const filteredPrograms = activeTab === 'all' 
    ? programs 
    : programs.filter(p => p.category.toLowerCase().includes(activeTab.toLowerCase()));

  return (
    <article className="pt-0 min-h-screen bg-slate-50/50">
      {/* Refined Hero Section with Unified Background */}
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
              <Sparkles className="w-4 h-4 animate-pulse" />
              Academic Excellence Initiative
            </div>
            <h1 className="text-6xl md:text-8xl font-bold text-white leading-[0.95] tracking-tight">
              Master the <br />
              <span className="brand-text-gradient">Unknown.</span>
            </h1>
            <p className="text-2xl text-slate-300 max-w-xl leading-relaxed font-light">
              DeepBio bridges the technical gap in life sciences across South Asia, providing elite-level training in bioinformatics and clinical AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <button className="px-12 py-6 bg-brand-primary hover:bg-[#1a4b75] text-white rounded-2xl font-bold flex items-center justify-center gap-3 transition-all shadow-[0_20px_40px_rgba(32,94,146,0.3)] hover:-translate-y-1 group text-lg">
                View All Programs
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-square rounded-[4rem] overflow-hidden group shadow-2xl border border-white/5 animate-float flex items-center justify-center bg-slate-900/40 backdrop-blur-md">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/20 to-transparent"></div>
              
              <div className="relative z-10 w-full px-16 space-y-10">
                {/* Floating Academic Card: Alumni */}
                <div className="p-8 glass rounded-[2.5rem] border-white/20 shadow-[0_25px_60px_rgba(0,0,0,0.7)] transform -translate-x-12 translate-y-8 hover:-translate-y-2 transition-all duration-700">
                  <div className="flex items-center gap-5 mb-6">
                    <div className="w-14 h-14 bg-brand-primary rounded-2xl flex items-center justify-center shadow-2xl">
                      <GraduationCap className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <div className="text-slate-800 font-extrabold text-lg">Alumni Network</div>
                      <div className="text-brand-primary text-[11px] font-bold uppercase tracking-[0.2em]">Global Placements Active</div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between text-[11px] font-black text-slate-800">
                      <span>PLACEMENT RATE</span>
                      <span>94.8%</span>
                    </div>
                    <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                      <div className="h-full bg-brand-primary w-[94.8%]"></div>
                    </div>
                  </div>
                </div>

                {/* Floating Academic Card: Certifications */}
                <div className="p-8 glass rounded-[2.5rem] border-white/20 shadow-[0_25px_60px_rgba(0,0,0,0.7)] transform translate-x-12 -translate-y-8 hover:translate-y-[-12px] transition-all duration-700">
                  <div className="flex items-center gap-5 mb-6">
                    <div className="w-14 h-14 bg-teal-500 rounded-2xl flex items-center justify-center shadow-2xl">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <div className="text-slate-800 font-extrabold text-lg">Verified Skills</div>
                      <div className="text-teal-600 text-[11px] font-bold uppercase tracking-[0.2em]">ISCB Standards Aligned</div>
                    </div>
                  </div>
                  <div className="flex gap-2 items-center text-slate-600">
                    <Activity className="w-5 h-5 text-teal-500 animate-pulse" />
                    <span className="text-xs font-bold uppercase tracking-widest">Enrollment Cycle: Q2 Open</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Selector Tabs */}
      <nav className="py-20 -mt-10 relative z-20" aria-label="Program filter">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white p-4 rounded-[3rem] shadow-2xl border border-slate-100 flex flex-wrap justify-center gap-4">
             {['All', 'Elite Research', 'Professional Track', 'Clinical Tech'].map((tab) => (
               <button 
                 key={tab}
                 onClick={() => setActiveTab(tab.toLowerCase())}
                 className={`px-10 py-4 rounded-2xl text-sm font-bold transition-all ${
                   activeTab === tab.toLowerCase() || (tab === 'All' && activeTab === 'all')
                   ? 'bg-brand-dark text-white shadow-xl scale-105' 
                   : 'text-slate-400 hover:text-brand-primary hover:bg-slate-50'
                 }`}
               >
                 {tab}
               </button>
             ))}
          </div>
        </div>
      </nav>

      {/* Program Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-10">
            {filteredPrograms.map((p) => (
              <article key={p.id} className="group flex flex-col bg-white rounded-[3.5rem] overflow-hidden border border-slate-100 hover:border-brand-primary/20 hover:shadow-[0_40px_80px_-20px_rgba(10,37,64,0.15)] transition-all duration-700">
                {/* Image & Status */}
                <header className="relative aspect-[16/10] overflow-hidden">
                  <img src={p.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]" alt={p.title} loading="lazy" decoding="async" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 via-transparent to-transparent"></div>
                  <div className="absolute top-6 left-6 px-4 py-1.5 bg-white/20 backdrop-blur-xl border border-white/20 rounded-full text-[9px] font-black text-white uppercase tracking-widest">
                    {p.category}
                  </div>
                  <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center">
                    <div className="flex items-center gap-2 text-white">
                       <Clock className="w-4 h-4 text-brand-secondary" />
                       <span className="text-[10px] font-bold tracking-widest uppercase">{p.duration}</span>
                    </div>
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-xl">
                       <Zap className="w-5 h-5 text-brand-primary fill-current" />
                    </div>
                  </div>
                </header>

                {/* Content */}
                <div className="p-10 flex-grow flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                     <span className="text-[10px] font-black text-brand-primary uppercase tracking-[0.2em]">{p.level} LEVEL</span>
                     <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{p.modules} Modules</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight leading-snug group-hover:text-brand-primary transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-8 line-clamp-3">
                    {p.description}
                  </p>

                  {/* Skills Cloud */}
                  <div className="flex flex-wrap gap-2 mb-10">
                    {p.skills.map(skill => (
                      <span key={skill} className="px-3 py-1 bg-slate-50 text-slate-400 text-[9px] font-bold uppercase tracking-widest rounded-lg border border-slate-100 group-hover:bg-brand-primary/5 group-hover:text-brand-primary transition-colors">
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-slate-400">
                       <Users className="w-4 h-4" />
                       <span className="text-[10px] font-bold uppercase tracking-widest">Seats Limited</span>
                    </div>
                    <a 
                      href={p.enrollmentLink}
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="flex items-center gap-2 text-brand-primary font-bold text-xs group/link"
                    >
                      Enroll Now <ChevronRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Path visualization */}
      <section className="py-40 bg-brand-dark relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/10 blur-[120px] rounded-full"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <header className="text-center mb-32 space-y-6">
            <h2 className="text-brand-secondary font-bold uppercase tracking-[0.4em] text-xs">The DeepBio Path</h2>
            <p className="text-5xl md:text-7xl font-bold text-white tracking-tighter">Your Academic Journey</p>
          </header>

          <div className="grid md:grid-cols-4 gap-4 relative">
            <div className="hidden md:block absolute top-12 left-24 right-24 h-0.5 bg-gradient-to-r from-brand-primary/50 via-brand-secondary/50 to-brand-primary/50 -z-0"></div>

            {[
              { step: "01", icon: BookOpen, title: "Foundation", desc: "Linux, Python, and the basics of biological data science." },
              { step: "02", icon: Cpu, title: "Execution", desc: "Handling massive NGS datasets and variant calling pipelines." },
              { step: "03", icon: Activity, title: "Analytics", desc: "Applying ML models to predict biological outcomes." },
              { step: "04", icon: Globe2, title: "Leadership", desc: "Leading independent research projects in the global lab." }
            ].map((item, i) => (
              <div key={i} className="relative z-10 text-center space-y-8 p-8 group">
                <div className="w-24 h-24 bg-brand-dark border-4 border-brand-primary/30 rounded-[2rem] flex items-center justify-center mx-auto transition-all group-hover:border-brand-secondary group-hover:scale-110 group-hover:bg-brand-primary/20 shadow-2xl">
                   <item.icon className="w-10 h-10 text-white" aria-hidden="true" />
                   <span className="absolute -top-4 -right-4 w-10 h-10 bg-brand-primary rounded-full flex items-center justify-center text-xs font-black text-white shadow-xl">
                     {item.step}
                   </span>
                </div>
                <div className="space-y-3">
                  <h4 className="text-2xl font-bold text-white tracking-tight">{item.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed font-light">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Institutional Partnerships */}
      <section className="py-40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-[5rem] border border-slate-100 shadow-2xl overflow-hidden flex flex-col lg:flex-row items-center gap-20 p-20 lg:p-32">
            <div className="lg:w-1/2 space-y-12">
              <div className="w-20 h-20 bg-brand-primary/5 text-brand-primary rounded-3xl flex items-center justify-center shadow-sm">
                <ShieldCheck className="w-10 h-10" />
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tighter leading-none">Institutional <br /> Capacity Building.</h2>
              <p className="text-2xl text-slate-500 font-light leading-relaxed">
                We engineer customized training frameworks for universities, hospitals, and clinical labs, bridging the gap between theory and modern computational mastery.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                 <button className="px-12 py-6 bg-brand-dark text-white rounded-[2rem] font-bold text-lg hover:bg-brand-primary transition-all shadow-xl group">
                   Request Institutional Prospectus <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                 </button>
              </div>
            </div>

            <div className="lg:w-1/2 grid grid-cols-2 gap-8 w-full">
               {[
                 { icon: Award, label: "Certification", val: "ISCB Standards" },
                 { icon: Users, label: "Placement", val: "Global Access" },
                 { icon: Layers, label: "Multi-Omics", val: "Elite Tracks" },
                 { icon: PieChart, label: "Analytics", val: "Real-time Tracking" }
               ].map((box, i) => (
                 <div key={i} className="p-10 bg-slate-50/50 rounded-[3rem] border border-slate-100 hover:shadow-2xl hover:bg-white transition-all duration-500 text-center">
                    <box.icon className="w-10 h-10 text-brand-primary mx-auto mb-6" />
                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">{box.label}</div>
                    <div className="text-xl font-bold text-slate-900">{box.val}</div>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};
