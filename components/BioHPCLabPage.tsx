import React from 'react';
import { Server, Database, Zap, Shield, Globe, Users, Terminal, Network, Cpu, Activity, CheckCircle2, Heart } from 'lucide-react';
import Image from 'next/image';
import { PHASES, PLATFORMS, DONOR_TIERS, GRANTS } from '@/lib/biohpc/data';

export const BioHPCLabPage: React.FC = () => {
  const infrastructureFeatures = [
    {
      icon: Cpu,
      title: 'Scalable Compute Power',
      description: 'High-density server racks designed for massive parallel processing of genomic sequences and complex biological simulations.'
    },
    {
      icon: Database,
      title: 'Data Sovereignty',
      description: 'Local storage infrastructure ensuring Bangladeshi genomic data remains secure and under national control.'
    },
    {
      icon: Zap,
      title: 'Accelerated Discovery',
      description: 'GPU-accelerated nodes reducing analysis time from weeks to hours for critical public health surveillance.'
    },
    {
      icon: Network,
      title: 'National Network',
      description: 'Establishing a collaborative high-performance computing environment for researchers across all Bangladeshi universities.'
    },
    {
      icon: Shield,
      title: 'Secure Environment',
      description: 'Enterprise-grade security protocols for protecting sensitive genomic and clinical data assets.'
    },
    {
      icon: Globe,
      title: 'Open Science',
      description: 'Democratizing access to computational resources for the entire scientific community in Bangladesh.'
    }
  ];

  const workflowSteps = [
    {
      number: '01',
      title: 'Data Input',
      description: 'Raw genomic sequences and biological data are uploaded to the secure facility for processing.'
    },
    {
      number: '02',
      title: 'Scheduling',
      description: 'Smart job scheduling (SLURM) prioritizes tasks and allocates memory and CPU cores for maximum efficiency.'
    },
    {
      number: '03',
      title: 'Processing',
      description: 'Processor nodes work in unison to perform complex calculations in minutes instead of weeks.'
    },
    {
      number: '04',
      title: 'Discovery',
      description: 'Visualized results empower scientists to identify variants and design new treatments or vaccines.'
    }
  ];

  const endorsements = [
    {
      name: "Dr. Zeba I. Seraj",
      role: "Director, cBLAST",
      org: "University of Dhaka",
      image: "/images/biohpc/Zeba-I-Seraj-Ph-D.jpg",
      quote: "The establishment of a local HPC cluster is a critical step towards scientific self-reliance for Bangladesh."
    },
    {
      name: "Dr. Md. Salequl Islam",
      role: "Professor, Microbiology",
      org: "Jahangirnagar University",
      image: "/images/biohpc/salequl.jpg",
      quote: "BioHPC Lab will provide the necessary infrastructure to accelerate our research in infectious diseases."
    }
  ];

  return (
    <div className="pt-0 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden bg-brand-dark">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('/images/biohpc/hpc01.jpg')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
          <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-brand-primary/20 blur-[150px] rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/4 -left-20 w-[600px] h-[600px] bg-brand-secondary/15 blur-[150px] rounded-full"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-secondary text-[10px] font-bold uppercase tracking-[0.3em] backdrop-blur-md mb-8">
            <Server className="w-4 h-4" />
            National Genomic Infrastructure
          </div>
          <h1 className="text-6xl md:text-8xl font-bold text-white leading-[0.95] tracking-tight mb-8 max-w-4xl">
            BioHPC <br />
            <span className="brand-text-gradient">Lab</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl leading-relaxed mb-10">
            Establishing the first open-access High-Performance Computing cluster dedicated to genomic surveillance, pathogen research, and computational biology for the scientific community in Bangladesh.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#infrastructure"
              className="inline-flex items-center gap-3 px-8 py-4 bg-brand-primary hover:bg-[#1a4b75] text-white rounded-2xl font-bold transition-all shadow-[0_20px_40px_rgba(32,94,146,0.3)] hover:-translate-y-1"
            >
              Explore Infrastructure
            </a>
            <a
              href="#support"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-2xl font-bold hover:bg-white/20 transition-all shadow-lg hover:-translate-y-1"
            >
              <Heart className="w-5 h-5" />
              Support the Initiative
            </a>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-24 bg-white border-y border-slate-200">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-wider mb-6">
            Our Mission
          </div>
          <h2 className="text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Empowering Bangladesh's <span className="text-brand-primary">Bioinformatics Revolution</span>
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed mb-12 max-w-3xl mx-auto">
            BioHPC Lab is a collaborative effort to establish national-scale genomic computing infrastructure. We focus on public health, open science, and sovereign biological research to bridge the computational gap for Bangladeshi researchers.
          </p>
          <div className="grid sm:grid-cols-3 gap-8 text-left">
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-brand-primary/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center mb-4 group-hover:bg-brand-primary transition-colors">
                <CheckCircle2 className="w-6 h-6 text-brand-primary group-hover:text-white transition-colors" />
              </div>
              <p className="text-slate-900 font-bold mb-2">Democratize Access</p>
              <p className="text-sm text-slate-600">High-end computational resources for all.</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-brand-primary/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center mb-4 group-hover:bg-brand-primary transition-colors">
                <CheckCircle2 className="w-6 h-6 text-brand-primary group-hover:text-white transition-colors" />
              </div>
              <p className="text-slate-900 font-bold mb-2">Accelerate Research</p>
              <p className="text-sm text-slate-600">Genomic surveillance for infectious diseases.</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-brand-primary/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center mb-4 group-hover:bg-brand-primary transition-colors">
                <CheckCircle2 className="w-6 h-6 text-brand-primary group-hover:text-white transition-colors" />
              </div>
              <p className="text-slate-900 font-bold mb-2">Foster Capacity</p>
              <p className="text-sm text-slate-600">Building local expertise in computational biology.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure Features */}
      <section id="infrastructure" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-wider mb-6">
              Infrastructure
            </div>
            <h2 className="text-5xl font-bold text-slate-900 mb-6">State-of-the-Art HPC</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our cluster is designed to handle the most demanding computational workloads in modern biology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {infrastructureFeatures.map((feature, index) => (
              <div
                key={index}
                className="group p-8 bg-white rounded-3xl border border-slate-200 hover:border-brand-primary/50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-primary group-hover:scale-110 transition-all">
                  <feature.icon className="w-8 h-8 text-brand-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-wider mb-6">
              Workflow
            </div>
            <h2 className="text-5xl font-bold text-slate-900 mb-6">How BioHPC Accelerates Discovery</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workflowSteps.map((step, index) => (
              <div key={index} className="relative group p-8 rounded-3xl border border-transparent hover:border-brand-primary/20 hover:bg-slate-50 transition-all duration-300">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-brand-primary to-brand-secondary text-white font-bold text-2xl mb-6 shadow-xl group-hover:scale-110 transition-transform">
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{step.description}</p>
                </div>
                {index < workflowSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 -right-4 w-8 h-0.5 bg-gradient-to-r from-brand-primary to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-wider mb-6">
              Development
            </div>
            <h2 className="text-5xl font-bold text-slate-900 mb-6">Phased Roadmap</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A strategic approach to building national computing capacity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {PHASES.map((phase) => (
              <div key={phase.id} className="bg-white p-8 rounded-3xl border border-slate-200 hover:border-brand-primary/50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-4xl group-hover:scale-110 transition-transform">{phase.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">{phase.title}</h3>
                    <p className="text-sm font-bold text-brand-primary uppercase tracking-wider">{phase.timeline}</p>
                  </div>
                </div>
                <p className="text-slate-600 mb-6">{phase.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {phase.unlocks.slice(0, 4).map((unlock, idx) => (
                    <span key={idx} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-semibold group-hover:bg-brand-primary/10 group-hover:text-brand-primary transition-colors">
                      {unlock}
                    </span>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-slate-100 flex justify-between items-center">
                  <span className="text-slate-400 text-sm font-bold">Goal</span>
                  <span className="text-2xl font-black text-slate-900 group-hover:text-brand-primary transition-colors">${phase.goal.toLocaleString()}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Endorsements Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-wider mb-6">
              Community
            </div>
            <h2 className="text-5xl font-bold text-slate-900 mb-6">Supported by Leaders</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {endorsements.map((e, i) => (
              <div key={i} className="flex flex-col md:flex-row gap-6 p-8 bg-slate-50 rounded-3xl border border-slate-200 items-center hover:border-brand-primary/50 hover:bg-white hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="relative w-24 h-24 shrink-0 rounded-2xl overflow-hidden shadow-lg group-hover:scale-105 transition-transform">
                  <Image src={e.image} alt={e.name} fill className="object-cover" />
                </div>
                <div className="text-center md:text-left">
                  <p className="text-slate-600 italic mb-4 group-hover:text-slate-900 transition-colors">"{e.quote}"</p>
                  <h4 className="font-bold text-slate-900">{e.name}</h4>
                  <p className="text-sm text-brand-primary font-semibold">{e.role}</p>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">{e.org}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support CTA */}
      <section id="support" className="py-24 bg-brand-dark text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold uppercase tracking-wider mb-8">
            Get Involved
          </div>
          <h2 className="text-5xl font-bold mb-6">Support National Science</h2>
          <p className="text-xl text-slate-300 mb-10 leading-relaxed">
            Your contributions directly fund the acquisition of high-performance computing hardware for Bangladeshi scientists. Join us in building the future of bioinformatics.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            {PLATFORMS.slice(0, 2).map((p) => (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-brand-primary hover:bg-[#1a4b75] text-white rounded-2xl font-bold transition-all shadow-lg hover:-translate-y-1"
              >
                Donate via {p.name}
              </a>
            ))}
            <a
              href="mailto:info@deepbioltd.com?subject=BioHPC Partnership"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-2xl font-bold hover:bg-white/20 transition-all hover:-translate-y-1"
            >
              Partner With Us
            </a>
          </div>
        </div>
      </section>

      {/* Initiator Mini Section */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="relative w-24 h-24 mx-auto mb-8 rounded-full overflow-hidden border-4 border-white shadow-xl">
            <Image src="/images/biohpc/jubayer.jpg" alt="Md. Jubayer Hossain" fill className="object-cover" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-2">Md. Jubayer Hossain</h3>
          <p className="text-brand-primary font-bold uppercase tracking-widest text-sm mb-6">Initiator & Bioinformatician</p>
          <p className="text-slate-600 leading-relaxed">
            Founded BioHPC Lab to democratize research skills and make high-performance computing accessible to all researchers across Bangladesh.
          </p>
        </div>
      </section>
    </div>
  );
};
