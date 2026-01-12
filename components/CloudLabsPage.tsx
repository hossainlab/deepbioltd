import React from 'react';
import { Cloud, Server, Zap, Shield, Globe, Users, Database, Terminal, Network, Lock, Gauge, CheckCircle2 } from 'lucide-react';

export const CloudLabsPage: React.FC = () => {
  const features = [
    {
      icon: Cloud,
      title: 'Cloud-Native Infrastructure',
      description: 'Fully distributed computing environment enabling researchers to work from anywhere in the world with enterprise-grade performance.'
    },
    {
      icon: Zap,
      title: 'Instant Scalability',
      description: 'Scale computational resources on-demand for large-scale genomic analyses without infrastructure limitations.'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level encryption, secure data transfer protocols, and compliance with international data protection standards.'
    },
    {
      icon: Globe,
      title: 'Global Accessibility',
      description: 'Access your research environment 24/7 from any device, anywhere in the world with just an internet connection.'
    },
    {
      icon: Database,
      title: 'High-Performance Computing',
      description: 'GPU-accelerated compute instances for AI/ML workloads, bioinformatics pipelines, and massive dataset processing.'
    },
    {
      icon: Network,
      title: 'Collaborative Ecosystem',
      description: 'Shared computational resources, version-controlled environments, and real-time collaboration tools for distributed teams.'
    }
  ];

  const platforms = [
    {
      name: 'Google Cloud Platform',
      description: 'Primary cloud infrastructure for high-performance computing and AI/ML workloads',
      capabilities: ['Vertex AI', 'BigQuery', 'Cloud Run', 'Compute Engine']
    },
    {
      name: 'Amazon Web Services',
      description: 'Scalable storage solutions and genomics data processing pipelines',
      capabilities: ['S3 Storage', 'EC2', 'SageMaker', 'Lambda Functions']
    },
    {
      name: 'Microsoft Azure',
      description: 'Enterprise collaboration and research data management',
      capabilities: ['Azure ML', 'Blob Storage', 'Azure Notebooks', 'DevOps']
    },
    {
      name: 'Specialized Platforms',
      description: 'Domain-specific computational biology and bioinformatics tools',
      capabilities: ['Galaxy Project', 'Terra.bio', 'Nextflow Tower', 'DNAnexus']
    }
  ];

  const workflowSteps = [
    {
      number: '01',
      title: 'Access',
      description: 'Researchers log into secure cloud workspaces using SSO authentication from anywhere globally.'
    },
    {
      number: '02',
      title: 'Provision',
      description: 'Instantly spin up computational resources tailored to specific research needs - from basic analysis to GPU clusters.'
    },
    {
      number: '03',
      title: 'Collaborate',
      description: 'Work simultaneously on shared projects with version control, real-time updates, and integrated communication tools.'
    },
    {
      number: '04',
      title: 'Scale',
      description: 'Automatically scale compute and storage as datasets grow, ensuring uninterrupted research workflows.'
    }
  ];

  const benefits = [
    'No upfront capital investment in physical infrastructure',
    'Reduced operational costs with pay-as-you-go model',
    'Instant access to latest computational technologies',
    'Automatic software updates and security patches',
    'Disaster recovery and data redundancy included',
    'Environmental sustainability through shared resources',
    'Seamless integration with international collaborators',
    'Compliance with data residency requirements'
  ];

  return (
    <div className="pt-0 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden bg-brand-dark">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
          <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-brand-primary/20 blur-[150px] rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/4 -left-20 w-[600px] h-[600px] bg-brand-secondary/15 blur-[150px] rounded-full"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-secondary text-[10px] font-bold uppercase tracking-[0.3em] backdrop-blur-md mb-8">
            <Cloud className="w-4 h-4" />
            Virtual Infrastructure
          </div>
          <h1 className="text-6xl md:text-8xl font-bold text-white leading-[0.95] tracking-tight mb-8 max-w-4xl">
            Cloud-Based <br />
            <span className="brand-text-gradient">Research Labs</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl leading-relaxed mb-10">
            As a virtual headquarters, we leverage cutting-edge cloud infrastructure to power world-class bioinformatics research without geographical boundaries. Our distributed cloud labs enable global collaboration, infinite scalability, and enterprise-grade security.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#infrastructure"
              className="inline-flex items-center gap-3 px-8 py-4 bg-brand-primary hover:bg-[#1a4b75] text-white rounded-2xl font-bold transition-all shadow-[0_20px_40px_rgba(32,94,146,0.3)] hover:-translate-y-1"
            >
              <Server className="w-5 h-5" />
              Explore Infrastructure
            </a>
            <a
              href="/lab-onboarding"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-2xl font-bold hover:bg-white/20 transition-all shadow-lg hover:-translate-y-1"
            >
              <Terminal className="w-5 h-5" />
              Get Started
            </a>
          </div>
        </div>
      </section>

      {/* Why Cloud Labs Section */}
      <section className="py-24 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-wider mb-6">
              Virtual Headquarters
            </div>
            <h2 className="text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Why We Choose <span className="text-brand-primary">Cloud Labs</span>
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
              Operating as a fully virtual organization, our cloud-based infrastructure eliminates physical barriers and enables us to bring together the brightest minds in computational biology from across the globe.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-8 bg-white rounded-3xl border border-slate-200 hover:border-brand-primary/50 hover:shadow-2xl transition-all duration-300"
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

      {/* Tech Stack Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-wider mb-6">
              <Terminal className="w-4 h-4" />
              Core Technologies
            </div>
            <h2 className="text-5xl font-bold text-slate-900 mb-6">Our Research Tech Stack</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Industry-leading tools and frameworks powering our computational biology research
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {/* Linux */}
            <div className="group relative bg-white rounded-3xl p-8 border-2 border-slate-200 hover:border-brand-primary/50 hover:shadow-2xl transition-all duration-300 text-center">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
                    alt="Linux"
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Linux</h3>
                <p className="text-sm text-slate-600">Operating System</p>
              </div>
            </div>

            {/* Python */}
            <div className="group relative bg-white rounded-3xl p-8 border-2 border-slate-200 hover:border-brand-primary/50 hover:shadow-2xl transition-all duration-300 text-center">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                    alt="Python"
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Python</h3>
                <p className="text-sm text-slate-600">Data Analysis & ML</p>
              </div>
            </div>

            {/* R */}
            <div className="group relative bg-white rounded-3xl p-8 border-2 border-slate-200 hover:border-brand-primary/50 hover:shadow-2xl transition-all duration-300 text-center">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg"
                    alt="R"
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">R</h3>
                <p className="text-sm text-slate-600">Statistical Computing</p>
              </div>
            </div>

            {/* Nextflow */}
            <div className="group relative bg-white rounded-3xl p-8 border-2 border-slate-200 hover:border-brand-primary/50 hover:shadow-2xl transition-all duration-300 text-center">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl">
                  <svg viewBox="0 0 200 200" className="w-16 h-16" fill="white">
                    <path d="M100,20 L180,60 L180,140 L100,180 L20,140 L20,60 Z M100,50 L60,70 L60,110 L100,130 L140,110 L140,70 Z" />
                    <text x="100" y="110" textAnchor="middle" fontSize="40" fontWeight="bold" fill="white">nf</text>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Nextflow</h3>
                <p className="text-sm text-slate-600">Workflow Orchestration</p>
              </div>
            </div>
          </div>

          {/* Tech Stack Description */}
          <div className="mt-16 max-w-4xl mx-auto bg-white rounded-3xl p-10 border border-slate-200 shadow-xl">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-primary/10 flex items-center justify-center">
                    <Terminal className="w-5 h-5 text-brand-primary" />
                  </div>
                  Why These Technologies?
                </h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Our tech stack represents the gold standard in computational biology and bioinformatics research. Each tool has been carefully selected for its performance, community support, and scientific credibility.
                </p>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" />
                    <span><strong>Linux:</strong> Rock-solid foundation for high-performance computing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" />
                    <span><strong>Python:</strong> Versatile ecosystem with BioPython, pandas, scikit-learn</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-secondary/10 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-brand-secondary" />
                  </div>
                  Performance & Scale
                </h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  From single-cell analysis to whole-genome sequencing, our infrastructure handles the most demanding computational workloads with ease.
                </p>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-secondary flex-shrink-0 mt-0.5" />
                    <span><strong>R/Bioconductor:</strong> Statistical analysis and genomics packages</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-secondary flex-shrink-0 mt-0.5" />
                    <span><strong>Nextflow:</strong> Reproducible, scalable workflow automation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud Platforms Section */}
      <section id="infrastructure" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-wider mb-6">
              Cloud Infrastructure
            </div>
            <h2 className="text-5xl font-bold text-slate-900 mb-6">Multi-Cloud Platforms</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Multi-cloud strategy leveraging best-in-class platforms for optimal performance, reliability, and cost-efficiency
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {platforms.map((platform, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 border border-slate-200 hover:border-brand-primary/50 hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Server className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{platform.name}</h3>
                    <p className="text-slate-600">{platform.description}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {platform.capabilities.map((capability, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-brand-primary/5 text-brand-primary rounded-full text-sm font-semibold border border-brand-primary/10"
                    >
                      {capability}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-wider mb-6">
              Workflow
            </div>
            <h2 className="text-5xl font-bold text-slate-900 mb-6">How Our Cloud Labs Work</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Seamless research workflow from login to publication
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workflowSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-brand-primary to-brand-secondary text-white font-bold text-2xl mb-6 shadow-xl">
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

      {/* Benefits Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-wider mb-6">
                Advantages
              </div>
              <h2 className="text-5xl font-bold text-slate-900 mb-6 leading-tight">
                Virtual Infrastructure <span className="text-brand-primary">Benefits</span>
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                Our cloud-first approach transforms how we conduct research, collaborate globally, and deliver scientific breakthroughs without the constraints of traditional physical laboratories.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-primary/10 flex items-center justify-center mt-1">
                      <CheckCircle2 className="w-4 h-4 text-brand-primary" />
                    </div>
                    <p className="text-slate-700 font-medium">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden border-4 border-white shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1000"
                  alt="Cloud Infrastructure"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-brand-primary/10 rounded-3xl -z-10"></div>
              <div className="absolute -top-8 -left-8 w-64 h-64 bg-brand-secondary/10 rounded-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Compliance Section */}
      <section className="py-24 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-wider mb-6">
              Security First
            </div>
            <h2 className="text-5xl font-bold text-slate-900 mb-6">Enterprise-Grade Security</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Research data protection and compliance built into every layer of our infrastructure
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-slate-50 rounded-3xl border border-slate-200">
              <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Lock className="w-8 h-8 text-brand-primary" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Data Encryption</h3>
              <p className="text-slate-600">End-to-end encryption for data at rest and in transit using AES-256 and TLS 1.3</p>
            </div>

            <div className="text-center p-8 bg-slate-50 rounded-3xl border border-slate-200">
              <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-brand-primary" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Compliance</h3>
              <p className="text-slate-600">HIPAA, GDPR, and SOC 2 compliant infrastructure for sensitive research data</p>
            </div>

            <div className="text-center p-8 bg-slate-50 rounded-3xl border border-slate-200">
              <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Gauge className="w-8 h-8 text-brand-primary" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Monitoring</h3>
              <p className="text-slate-600">24/7 security monitoring, automated threat detection, and incident response</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-brand-dark text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold uppercase tracking-wider mb-8">
            <Users className="w-4 h-4" />
            Join Our Virtual Labs
          </div>
          <h2 className="text-5xl font-bold mb-6">Ready to Access World-Class Cloud Infrastructure?</h2>
          <p className="text-xl text-slate-300 mb-10 leading-relaxed">
            Join our global research community and leverage cutting-edge cloud computing for your bioinformatics projects. No hardware investment required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/lab-onboarding"
              className="inline-flex items-center gap-3 px-8 py-4 bg-brand-primary hover:bg-[#1a4b75] text-white rounded-2xl font-bold transition-all shadow-lg hover:-translate-y-1"
            >
              <Terminal className="w-5 h-5" />
              Lab Onboarding
            </a>
            <a
              href="/research-assistant-recruitment"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-2xl font-bold hover:bg-white/20 transition-all hover:-translate-y-1"
            >
              <Users className="w-5 h-5" />
              Apply as Researcher
            </a>
            <a
              href="mailto:deepbiobd@gmail.com?subject=Cloud Labs Inquiry"
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
