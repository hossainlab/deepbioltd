'use client';

import React from 'react';
import { 
  Server, 
  Database, 
  Zap, 
  Shield, 
  Globe, 
  Users, 
  Terminal, 
  Network, 
  Cpu, 
  Activity, 
  CheckCircle2, 
  TrendingUp,
  BarChart3,
  Globe2,
  Lock,
  ArrowRight,
  PieChart,
  Lightbulb,
  Building2,
  Coins,
  Rocket,
  ShieldCheck,
  Scale,
  Microscope,
  FlaskConical,
  Dna,
  Brain,
  Sprout,
  Atom,
  Link2,
  Move
} from 'lucide-react';
import Image from 'next/image';
import { PHASES } from '@/lib/biohpc/data';

export const BioHPCLabPage: React.FC = () => {
  // LAB DATA
  const whatWeOffer = [
    {
      icon: Cpu,
      title: 'High-Performance Computing',
      desc: 'Access to GPU-accelerated nodes and multi-core CPU clusters for heavy-duty biological data processing.'
    },
    {
      icon: Database,
      title: 'Secure Bio-Data Storage',
      desc: 'Encrypted, high-redundancy storage solutions for large-scale genomic sequences and clinical datasets.'
    },
    {
      icon: Terminal,
      title: 'Bioinformatics Pipelines',
      desc: 'Pre-configured software environments (Nextflow, Snakemake) for automated NGS and structural analysis.'
    },
    {
      icon: Network,
      title: 'Collaborative Environment',
      desc: 'A shared platform enabling multi-institutional research projects with seamless data sharing and version control.'
    }
  ];

  const scientificMission = [
    {
      icon: Activity,
      title: 'Pathogen Surveillance',
      desc: 'Real-time variant identification and genomic tracking of infectious diseases to safeguard public health.'
    },
    {
      icon: Users,
      title: 'Single-Cell Genomics',
      desc: 'Analyzing cellular heterogeneity at unprecedented resolution to understand complex biological systems.'
    },
    {
      icon: Brain,
      title: 'Neurogenomics',
      desc: 'Deciphering the genetic basis of neurological disorders through high-throughput neural data processing.'
    },
    {
      icon: Microscope,
      title: 'Cancer Genomics',
      desc: 'Identifying driver mutations and therapeutic targets to enable personalized oncology and precision medicine.'
    },
    {
      icon: FlaskConical,
      title: 'Drug Discovery & Design',
      desc: 'Accelerating the R&D cycle through molecular docking, virtual screening, and protein-ligand simulations.'
    },
    {
      icon: Sprout,
      title: 'Agricultural Genomics',
      desc: 'Optimizing crop resilience and yield through genomic selection and plant-pathogen interaction studies.'
    },
    {
      icon: ShieldCheck,
      title: 'Metagenomics & AMR',
      desc: 'Characterizing microbial communities and tracking Antimicrobial Resistance (AMR) across diverse environments.'
    },
    {
      icon: Zap,
      title: 'AI Integration',
      desc: 'Deploying custom Deep Learning architectures to automate complex biological pattern recognition.'
    }
  ];

  const softwareStack = [
    {
      category: "Quantum Chemistry",
      icon: Atom,
      tools: [
        { name: "Gaussian", desc: "Electronic structure modeling and molecular property prediction." },
        { name: "ORCA", desc: "High-performance quantum mechanical calculations for large molecules." },
        { name: "Q-Chem / GAMESS", desc: "Comprehensive packages for ab-initio quantum chemistry." },
        { name: "WebMO / Gabedit", desc: "GUIs for managing quantum workflows." }
      ]
    },
    {
      category: "Molecular Docking & Design",
      icon: Link2,
      tools: [
        { name: "AutoDock Vina", desc: "Virtual screening and lead optimization." },
        { name: "Discovery Studio", desc: "Comprehensive life science modeling environment." },
        { name: "LigPlot+", desc: "2D protein-ligand interaction visualization." }
      ]
    },
    {
      category: "Molecular Dynamics & Viz",
      icon: Move,
      tools: [
        { name: "GROMACS / NAMD", desc: "High-speed MD simulations." },
        { name: "PyMOL", desc: "Industry-standard 3D visualization." },
        { name: "VMD", desc: "Trajectory visualization and analysis." }
      ]
    },
    {
      category: "Advanced Analytics",
      icon: Brain,
      tools: [
        { name: "Deep Learning", desc: "Custom neural networks for predictive modeling." },
        { name: "Single-Cell Analysis", desc: "High-dimensional multi-omic integration." },
        { name: "Pipeline Automation", desc: "Nextflow and Snakemake protocols." }
      ]
    }
  ];

  const marketGaps = [
    {
      title: "Cost Inefficiency",
      desc: "Regional researchers currently pay 300% more for cloud compute compared to global averages due to high latency and lack of localized specialized clusters.",
      impact: "High OPEX"
    },
    {
      title: "Data Biosecurity",
      desc: "Sensitive genomic IP is processed on foreign servers, creating significant national security and data sovereignty vulnerabilities.",
      impact: "Strategic Risk"
    },
    {
      title: "Technical Bottlenecks",
      desc: "Critical research is delayed by weeks due to insufficient local CPU/GPU availability, leading to massive scientific opportunity costs.",
      impact: "Slower R&D"
    }
  ];

  // INVESTOR DATA
  const investorStats = [
    { label: "Cost Arbitrage", value: "3.5x", desc: "Lower operational cost vs global public cloud" },
    { label: "Market Growth", value: "24%", desc: "Annual increase in regional bioinformatics demand" },
    { label: "Break-even", value: "18mo", desc: "Projected time to reach node profitability" },
    { label: "Asset Value", value: "5x", desc: "Target LTV/CAC ratio for infrastructure services" }
  ];

  return (
    <div className="pt-0 min-h-screen bg-white">
      
      {/* ==========================================
          PART 1: THE LAB (Scientific Identity)
      ========================================== */}

      {/* Lab Hero */}
      <section className="relative py-32 lg:py-48 overflow-hidden bg-brand-dark">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 z-0">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 bg-[url('/images/biohpc/hpc01.jpg')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
          
          {/* Dynamic Blurred Blobs */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-brand-primary/20 blur-[120px] rounded-full opacity-50"></div>
          <div className="absolute -bottom-48 -left-48 w-[600px] h-[600px] bg-brand-secondary/10 blur-[100px] rounded-full"></div>
          <div className="absolute top-1/2 -right-48 w-[500px] h-[500px] bg-brand-primary/10 blur-[100px] rounded-full"></div>

          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_60%,transparent_100%)]"></div>
          
          {/* Animated Particles (CSS only simulation) */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-brand-secondary rounded-full animate-pulse shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
            <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-brand-primary rounded-full animate-pulse delay-700 shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
            <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-white rounded-full animate-pulse delay-1000 shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white/5 border border-white/10 text-brand-secondary text-[10px] font-black uppercase tracking-[0.4em] backdrop-blur-xl mb-12 shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <div className="relative">
              <Cpu className="w-4 h-4 text-brand-primary animate-pulse" />
              <div className="absolute inset-0 bg-brand-primary/20 blur-md rounded-full"></div>
            </div>
            Advanced HPC Infrastructure
          </div>

          <h1 className="text-6xl md:text-9xl font-black text-white leading-[0.9] tracking-tighter mb-10 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            <span className="block mb-2">BioHPC</span>
            <span className="brand-text-gradient bg-clip-text text-transparent drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]">Laboratory</span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-14 font-medium animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-400">
            Powering the next generation of genomic discovery through <span className="text-white">massive computational scale</span> and specialized biological intelligence.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-600">
            <a
              href="#what-we-do"
              className="group relative inline-flex items-center gap-4 px-10 py-5 bg-brand-primary hover:bg-[#1a4b75] text-white rounded-2xl font-black transition-all shadow-[0_20px_40px_rgba(32,94,146,0.4)] hover:-translate-y-2 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <span>Explore Lab Services</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#investor-portal"
              className="inline-flex items-center gap-4 px-10 py-5 bg-white/5 backdrop-blur-md border border-white/20 text-white rounded-2xl font-black hover:bg-white/10 transition-all hover:-translate-y-2 shadow-xl"
            >
              <Database className="w-5 h-5 text-brand-secondary" />
              Infrastructure Assets
            </a>
          </div>

          {/* Floating Metrics Badge */}
          <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto border-t border-white/5 pt-12 animate-in fade-in duration-1000 delay-800">
            {[
              { label: "Processing Power", value: "2.5 PFLOPS" },
              { label: "Data Throughput", value: "400 GB/s" },
              { label: "Storage Capacity", value: "5 PB" },
              { label: "Network Latency", value: "< 1.2ms" }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl font-black text-white mb-1">{stat.value}</div>
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do (Mission) */}
      <section id="what-we-do" className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-wider mb-6">
              Scientific Mission
            </div>
            <h2 className="text-5xl font-black text-slate-900 mb-6">What We Do</h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              Bridging the technical gap between biological questions and computational answers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {scientificMission.map((mission, idx) => (
              <div key={idx} className="group p-8 bg-slate-50 rounded-3xl border border-slate-200 hover:border-brand-primary/50 hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-primary transition-all">
                  <mission.icon className="w-8 h-8 text-brand-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{mission.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{mission.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer (Services/Infrastructure) */}
      <section className="py-24 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-wider mb-6">
              Our Infrastructure
            </div>
            <h2 className="text-5xl font-black text-slate-900 mb-6">What We Offer</h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              Enterprise-grade resources accessible through a simplified scientific interface.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whatWeOffer.map((offer, idx) => (
              <div key={idx} className="group p-8 bg-white rounded-3xl border border-slate-200 hover:border-brand-primary/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-primary transition-all">
                  <offer.icon className="w-8 h-8 text-brand-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{offer.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{offer.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Computational Technology Stack */}
      <section id="tech-stack" className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-wider mb-6">
              The Engine Room
            </div>
            <h2 className="text-5xl font-black text-slate-900 mb-6">Computational Stack</h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              Leveraging industry-standard scientific software and custom deep learning architectures.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {softwareStack.map((category, idx) => (
              <div key={idx} className="bg-slate-50 rounded-[2.5rem] p-10 border border-slate-100 hover:border-brand-primary/20 transition-all duration-500 group">
                <div className="flex items-center gap-6 mb-10">
                  <div className="w-14 h-14 bg-brand-primary rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <category.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 tracking-tight">{category.category}</h3>
                </div>

                <div className="grid gap-6">
                  {category.tools.map((tool, tIdx) => (
                    <div key={tIdx} className="relative pl-6 border-l-2 border-slate-200 group-hover:border-brand-primary/30 transition-colors">
                      <h4 className="text-lg font-bold text-slate-900 mb-1">{tool.name}</h4>
                      <p className="text-sm text-slate-500 leading-relaxed">{tool.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          PART 2: INVESTOR PORTAL (Business Focus)
      ========================================== */}

      {/* Transition / Separator */}
      <section id="investor-portal" className="py-24 bg-brand-dark overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-brand-secondary text-[11px] font-black uppercase tracking-[0.5em] mb-12">
            Strategic Investment Portal
          </div>
          <h2 className="text-6xl md:text-8xl font-black text-white leading-tight tracking-tighter mb-8">
            Investing in <br /> <span className="brand-text-gradient">The Infrastructure Moat</span>
          </h2>
          <p className="text-2xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed">
            BioHPC is not just a lab; it is an infrastructure play in an emerging $20B biotech market. We are building the critical "Layer 1" for biological data processing.
          </p>
        </div>
      </section>

      {/* Market Gap Assessment (The Problem) */}
      <section id="opportunity" className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-black uppercase tracking-widest mb-6">
              Gap Assessment
            </div>
            <h2 className="text-5xl font-black text-slate-900 mb-6 tracking-tight">The Problem We Solve</h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              Identifying the critical inefficiencies in the current regional research ecosystem.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {marketGaps.map((gap, idx) => (
              <div key={idx} className="group p-10 bg-slate-50 rounded-[3rem] border border-slate-100 hover:border-brand-primary/30 hover:bg-white hover:shadow-2xl transition-all duration-500">
                <div className="inline-block px-4 py-1 rounded-full bg-brand-primary/10 text-brand-primary text-[10px] font-black uppercase tracking-widest mb-6 group-hover:bg-brand-primary group-hover:text-white transition-all">
                  Impact: {gap.impact}
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4">{gap.title}</h3>
                <p className="text-slate-500 leading-relaxed font-medium">{gap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Business Case (Profit & Arbitrage) */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="grid grid-cols-2 gap-6">
              {investorStats.map((stat, idx) => (
                <div key={idx} className="p-8 bg-slate-900 rounded-[2.5rem] text-white shadow-xl hover:scale-[1.03] transition-all border border-white/5">
                  <div className="text-5xl font-black text-brand-secondary mb-4">{stat.value}</div>
                  <div className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">{stat.label}</div>
                  <p className="text-[10px] text-slate-300 leading-relaxed uppercase font-bold">{stat.desc}</p>
                </div>
              ))}
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-black uppercase tracking-widest mb-8">
                Economic Arbitrage
              </div>
              <h2 className="text-5xl font-black text-slate-900 mb-8 leading-tight">The Profit Potential</h2>
              <p className="text-xl text-slate-600 leading-relaxed mb-10">
                Researchers in emerging markets currently pay a <span className="text-brand-primary font-bold">300% premium</span> for international cloud resources. By localizing compute, we capture this expenditure as internal margin while owning the physical "Data Moat."
              </p>
              <div className="grid gap-6">
                <div className="p-6 bg-slate-50 rounded-2xl border-l-4 border-brand-primary">
                  <h4 className="font-bold text-slate-900 mb-1">Sustainable Revenue</h4>
                  <p className="text-sm text-slate-600">A mix of Compute-as-a-Service (CaaS) subscriptions and long-term Enterprise R&D contracts.</p>
                </div>
                <div className="p-6 bg-slate-50 rounded-2xl border-l-4 border-brand-secondary">
                  <h4 className="font-bold text-slate-900 mb-1">Asset Value Growth</h4>
                  <p className="text-sm text-slate-600">Every node added increases the cumulative dataset and "gravity" of our bioinformatics ecosystem.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure Investment - Investor-Friendly Redesign */}
      <section id="investment-tiers" className="py-32 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-black uppercase tracking-widest mb-6">
              Co-Ownership Model
            </div>
            <h2 className="text-6xl font-black text-slate-900 mb-8 leading-tight tracking-tighter">Infrastructure <span className="text-brand-primary">Assets</span></h2>
            <p className="text-2xl text-slate-500 max-w-3xl mx-auto font-medium leading-relaxed">
              We've simplified high-tech infrastructure into clear, co-ownable units. Each "Node" is a high-performance computer dedicated to life-saving research.
            </p>
          </div>

          <div className="space-y-32">
            {[
              { 
                id: "01", 
                code: "APEX-G1",
                title: "Genomic Computing Node", 
                tagline: "Dedicated to rapid DNA sequencing & Virus tracking.",
                components: [
                  { name: "NVIDIA AI Processor (GPU)", desc: "The 'Brain' for AI calculations" },
                  { name: "AMD High-Core CPU", desc: "Main processing engine" },
                  { name: "Enterprise Memory (RAM)", desc: "High-speed workspace for data" },
                  { name: "Research Storage & Chassis", desc: "Secure housing & data vault" }
                ],
                image: "/images/biohpc/hpc02.jpg"
              },
              { 
                id: "02", 
                code: "STRUX-S1",
                title: "Structural Biology Node", 
                tagline: "Specialized for Drug Design & Protein Modeling.",
                components: [
                  { name: "NVIDIA H100 Hopper GPU", desc: "Next-gen AI accelerator" },
                  { name: "AMD Threadripper CPU", desc: "Extreme multitasking power" },
                  { name: "Ultra-Fast DDR5 RAM", desc: "Maximum data fluidity" },
                  { name: "Liquid Cooling & Infrastructure", desc: "Heat management & network" }
                ],
                image: "/images/biohpc/hpc03.jpg"
              }
            ].map((unit, idx) => (
              <div key={idx} className="group relative bg-white rounded-[3rem] border border-slate-200 shadow-xl overflow-hidden hover:border-brand-primary/30 transition-all duration-700">
                <div className="flex flex-col lg:flex-row">
                  {/* Left: Visual & Status */}
                  <div className="lg:w-1/3 relative h-64 lg:h-auto">
                    <img src={unit.image} alt={unit.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                    <div className="absolute bottom-8 left-8 right-8">
                      <div className="inline-block px-3 py-1 rounded-lg bg-brand-primary text-white text-[10px] font-black uppercase tracking-widest mb-2">
                        {unit.code}
                      </div>
                      <h4 className="text-white text-xl font-bold">{unit.title}</h4>
                    </div>
                  </div>

                  {/* Right: Breakdown */}
                  <div className="lg:w-2/3 p-10 lg:p-16">
                    <div className="flex flex-col sm:flex-row justify-between items-start gap-6 mb-12">
                      <div>
                        <h3 className="text-4xl font-black text-slate-900 mb-2 tracking-tight">{unit.title}</h3>
                        <p className="text-slate-500 font-medium">{unit.tagline}</p>
                      </div>
                      <div className="bg-emerald-50 text-emerald-700 px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest border border-emerald-100 shrink-0">
                        99.9% Uptime Goal
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-8 mb-12">
                      {unit.components.map((comp, cIdx) => (
                        <div key={cIdx} className="flex justify-between items-center p-4 bg-slate-50 rounded-2xl border border-slate-100 group-hover:bg-white group-hover:shadow-md transition-all">
                          <div>
                            <p className="text-sm font-black text-slate-900">{comp.name}</p>
                            <p className="text-[10px] text-slate-500 font-bold uppercase">{comp.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Investment Slots Simplified */}
                    <div className="pt-10 border-t border-slate-100">
                      <div className="flex flex-col md:flex-row items-center gap-10">
                        <div className="flex-grow w-full">
                          <div className="flex justify-between mb-4">
                            <span className="text-xs font-black text-slate-900 uppercase tracking-widest">Co-Ownership Slots</span>
                            <span className="text-xs font-bold text-slate-400">Available: 10 units</span>
                          </div>
                          <div className="flex gap-2">
                            {[...Array(10)].map((_, i) => (
                              <div key={i} className="h-3 flex-grow rounded-full bg-slate-100 border border-slate-200/50 relative overflow-hidden group/slot">
                                <div className="absolute inset-0 bg-brand-primary/5 -translate-x-full group-hover/slot:translate-x-0 transition-transform duration-500"></div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-32 p-12 bg-white rounded-[3rem] border border-slate-100 shadow-2xl max-w-5xl mx-auto">
            <h3 className="text-3xl font-black text-slate-900 text-center mb-12">How Your Investment Works</h3>
            <div className="grid md:grid-cols-3 gap-12">
              {[
                { 
                  title: "1. Asset Purchase", 
                  desc: "Your capital directly funds the procurement of specialized HPC hardware components listed above.",
                  icon: Coins
                },
                { 
                  title: "2. Research Usage", 
                  desc: "DeepBio leases this compute power to pharmaceutical companies and research labs globally.",
                  icon: FlaskConical
                },
                { 
                  title: "3. Yield Distribution", 
                  desc: "Profit from lease contracts is shared with node co-owners on a quarterly basis.",
                  icon: TrendingUp
                }
              ].map((item, i) => (
                <div key={i} className="space-y-4">
                  <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-brand-primary" />
                  </div>
                  <h4 className="text-lg font-black text-slate-900 uppercase tracking-tight">{item.title}</h4>
                  <p className="text-slate-500 leading-relaxed text-sm font-medium">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL INVESTOR CTA - Institutional Enterprise Redesign */}
      <section className="relative py-40 bg-[#0A0F1C] text-white overflow-hidden border-t border-white/5">
        {/* Subtle Architectural Background */}
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,#205E9215_0%,transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:80px_80px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-24">
            {/* Content Side */}
            <div className="lg:w-3/5 text-left">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-0.5 bg-brand-primary"></div>
                <span className="text-brand-secondary text-sm font-black uppercase tracking-[0.4em]">Strategic Participation</span>
              </div>
              
              <h2 className="text-5xl md:text-7xl font-black text-white mb-8 leading-[1.1] tracking-tight">
                Confidential <br />
                <span className="text-brand-primary">Investment Memorandum</span>
              </h2>
              
              <p className="text-xl text-slate-400 mb-12 leading-relaxed max-w-2xl font-light">
                Join DeepBio Limited in establishing the region's most critical computational moat. Secure a strategic position in the backbone of biological discovery.
              </p>

              <div className="flex flex-col sm:flex-row gap-6">
                <a
                  href="mailto:invest@deepbioltd.com?subject=Inquiry: Confidential Investment Memorandum (BioHPC)"
                  className="group relative inline-flex items-center justify-center gap-4 px-10 py-5 bg-brand-primary hover:bg-[#1a4b75] text-white rounded-xl font-bold transition-all shadow-xl hover:-translate-y-1 text-lg overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <span>Request Memorandum</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#opportunity"
                  className="inline-flex items-center justify-center gap-4 px-10 py-5 bg-white/5 border border-white/10 hover:bg-white/10 text-white rounded-xl font-bold transition-all hover:-translate-y-1 text-lg"
                >
                  <PieChart className="w-5 h-5 text-brand-secondary" />
                  Technical Deck
                </a>
              </div>
            </div>

            {/* Security/Metrics Card */}
            <div className="lg:w-2/5 w-full">
              <div className="bg-white/[0.02] backdrop-blur-3xl border border-white/10 rounded-[3rem] p-10 lg:p-12 relative shadow-2xl">
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-brand-primary/10 blur-2xl rounded-full"></div>
                
                <div className="space-y-10">
                  <div className="flex items-start gap-5 group">
                    <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center shrink-0 border border-brand-primary/20 group-hover:bg-brand-primary/20 transition-colors">
                      <ShieldCheck className="w-6 h-6 text-brand-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1">Asset-Backed Venture</h4>
                      <p className="text-sm text-slate-500 leading-relaxed font-medium">Investment is secured against high-end physical HPC hardware assets.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5 group">
                    <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center shrink-0 border border-brand-primary/20 group-hover:bg-brand-primary/20 transition-colors">
                      <BarChart3 className="w-6 h-6 text-brand-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1">Quarterly Dividends</h4>
                      <p className="text-sm text-slate-500 leading-relaxed font-medium">Profit distribution based on CaaS utilization and R&D margins.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5 group">
                    <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center shrink-0 border border-brand-primary/20 group-hover:bg-brand-primary/20 transition-colors">
                      <Building2 className="w-6 h-6 text-brand-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1">Institutional Governance</h4>
                      <p className="text-sm text-slate-500 leading-relaxed font-medium">Fully managed ecosystem at the CHIRAL technical hub.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-10 border-t border-white/5">
                  <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-[0.3em] text-slate-600">
                    <span>Availability</span>
                    <span className="text-brand-secondary">Limited Round</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
