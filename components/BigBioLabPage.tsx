import React from 'react';
import { Microscope, Users, BookOpen, Dna, Brain, Activity, FlaskConical } from 'lucide-react';

export const BigBioLabPage: React.FC = () => {
  const incomingPositions = [
    {
      position: 'Principal Investigator',
      focus: 'Cancer Genomics & Computational Biology',
      qualifications: 'PhD in Bioinformatics or related field, 10+ years research experience',
      responsibilities: 'Lead research direction, mentor team members, secure funding'
    },
    {
      position: 'Senior Research Scientist',
      focus: 'Neurogenomics & Machine Learning',
      qualifications: 'PhD with expertise in neuroscience and computational methods',
      responsibilities: 'Design and execute neurogenomics studies, develop ML pipelines'
    },
    {
      position: 'Research Scientist',
      focus: 'Bulk RNA-seq Analysis',
      qualifications: 'PhD or Master\'s with strong background in transcriptomics',
      responsibilities: 'Perform RNA-seq data analysis, develop analysis workflows'
    },
    {
      position: 'Research Scientist',
      focus: 'Single-Cell Genomics',
      qualifications: 'Expertise in single-cell technologies and computational analysis',
      responsibilities: 'Analyze single-cell datasets, develop visualization tools'
    },
    {
      position: 'Bioinformatics Analyst',
      focus: 'Cancer Data Analysis',
      qualifications: 'Master\'s degree with experience in cancer genomics',
      responsibilities: 'Support cancer genomics projects, pipeline development'
    },
    {
      position: 'Research Assistant',
      focus: 'Computational Support',
      qualifications: 'Bachelor\'s or Master\'s in Bioinformatics/Computer Science',
      responsibilities: 'Database management, computational infrastructure support'
    }
  ];

  const researchAreas = [
    {
      icon: Dna,
      title: 'Cancer Genomics',
      description: 'Advanced genomic analysis to identify cancer biomarkers, understand tumor heterogeneity, and discover therapeutic targets.'
    },
    {
      icon: Brain,
      title: 'Neurogenomics',
      description: 'Comprehensive analysis of gene expression patterns in neurological disorders and brain development.'
    },
    {
      icon: Activity,
      title: 'Bulk RNA-seq',
      description: 'High-throughput transcriptome analysis to understand gene expression profiles across different conditions and tissues.'
    },
    {
      icon: FlaskConical,
      title: 'Single-Cell Analysis',
      description: 'Single-cell resolution genomics to uncover cellular heterogeneity and rare cell populations.'
    }
  ];

  return (
    <div className="pt-0 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden bg-brand-dark">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
          <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-brand-primary/20 blur-[150px] rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/4 -left-20 w-[600px] h-[600px] bg-brand-secondary/15 blur-[150px] rounded-full"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-secondary text-[10px] font-bold uppercase tracking-[0.3em] backdrop-blur-md mb-8">
            <Microscope className="w-4 h-4" />
            Research Laboratory
          </div>
          <h1 className="text-6xl md:text-8xl font-bold text-white leading-[0.95] tracking-tight mb-8 max-w-4xl">
            Big Bioinformatics <br />
            <span className="brand-text-gradient">Lab</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl leading-relaxed mb-10">
            Advancing cancer genomics, neurogenomics, and transcriptomics research through cutting-edge computational analysis and single-cell technologies.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#mission"
              className="inline-flex items-center gap-3 px-8 py-4 bg-brand-primary hover:bg-[#1a4b75] text-white rounded-2xl font-bold transition-all shadow-[0_20px_40px_rgba(32,94,146,0.3)] hover:-translate-y-1"
            >
              Learn More
            </a>
            <a
              href="/lab-onboarding"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-2xl font-bold hover:bg-white/20 transition-all shadow-lg hover:-translate-y-1"
            >
              <BookOpen className="w-5 h-5" />
              Lab Guidelines
            </a>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section id="mission" className="py-24 bg-white border-y border-slate-200">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-wider mb-6">
              Mission Statement
            </div>
            <h2 className="text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Pioneering Genomics Research in <span className="text-brand-primary">Computational Biology</span>
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
              Big Bioinformatics Lab is dedicated to advancing our understanding of complex biological systems through computational genomics. Our focus areas include cancer genomics, neurogenomics, bulk RNA-seq analysis, and single-cell transcriptomics.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-brand-primary/5 to-brand-primary/10 rounded-2xl p-8 border border-brand-primary/20">
              <div className="w-14 h-14 rounded-xl bg-brand-primary/20 flex items-center justify-center mb-6">
                <Dna className="w-7 h-7 text-brand-primary" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Research Excellence</h3>
              <p className="text-slate-600 leading-relaxed">
                We are building a world-class team to tackle critical questions in genomics research, combining expertise in molecular biology, machine learning, and high-throughput data analysis to uncover insights into disease mechanisms and therapeutic opportunities.
              </p>
            </div>

            <div className="bg-gradient-to-br from-brand-secondary/5 to-brand-secondary/10 rounded-2xl p-8 border border-brand-secondary/20">
              <div className="w-14 h-14 rounded-xl bg-brand-secondary/20 flex items-center justify-center mb-6">
                <Activity className="w-7 h-7 text-brand-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Global Impact</h3>
              <p className="text-slate-600 leading-relaxed">
                Through collaboration with leading international institutions and healthcare providers, we aim to translate our computational discoveries into practical applications that improve patient outcomes and advance precision medicine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Research Areas */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-wider mb-6">
              Research Focus
            </div>
            <h2 className="text-5xl font-bold text-slate-900 mb-6">Core Research Areas</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Specialized expertise across multiple domains of computational genomics
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {researchAreas.map((area, index) => (
              <div
                key={index}
                className="group p-8 bg-white rounded-3xl border border-slate-200 hover:border-brand-primary/50 hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-primary group-hover:scale-110 transition-all">
                  <area.icon className="w-8 h-8 text-brand-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{area.title}</h3>
                <p className="text-slate-600 leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Incoming Lab Positions */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-wider mb-6">
              <Users className="w-4 h-4" />
              Join Our Team
            </div>
            <h2 className="text-5xl font-bold text-slate-900 mb-6">Incoming Lab Positions</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We're seeking talented researchers to join our growing team
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {incomingPositions.map((position, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl border border-slate-200 overflow-hidden hover:shadow-2xl hover:border-brand-primary/50 transition-all duration-300"
              >
                <div className="aspect-square bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10 flex items-center justify-center">
                  <div className="text-center p-8">
                    <Users className="w-20 h-20 text-brand-primary mx-auto mb-4" />
                    <p className="text-sm text-slate-500 font-semibold uppercase tracking-wider">Open Position</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{position.position}</h3>
                  <p className="text-brand-primary font-semibold mb-4">{position.focus}</p>
                  <div className="mb-4">
                    <p className="text-sm text-slate-500 font-semibold mb-2">Qualifications:</p>
                    <p className="text-slate-600 text-sm leading-relaxed">{position.qualifications}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-semibold mb-2">Key Responsibilities:</p>
                    <p className="text-slate-600 text-sm leading-relaxed">{position.responsibilities}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA with Publications */}
      <section className="py-24 bg-brand-dark text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-6">Join Our Research Community</h2>
          <p className="text-xl text-slate-300 mb-10 leading-relaxed">
            Interested in joining our lab or collaborating on genomics research? Explore our publications and get in touch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/publications"
              className="inline-flex items-center gap-3 px-8 py-4 bg-brand-primary hover:bg-[#1a4b75] text-white rounded-2xl font-bold transition-all shadow-lg hover:-translate-y-1"
            >
              <BookOpen className="w-5 h-5" />
              View Publications
            </a>
            <a
              href="mailto:deepbiobd@gmail.com?subject=BigBio Lab Application"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-2xl font-bold hover:bg-white/20 transition-all hover:-translate-y-1"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
