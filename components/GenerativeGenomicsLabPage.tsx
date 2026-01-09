import React from 'react';
import { Sparkles, Users, BookOpen, Brain, Network, Cpu, Dna } from 'lucide-react';

export const GenerativeGenomicsLabPage: React.FC = () => {
  // TODO: Replace with actual team members after recruitment
  const teamMembers = [
    {
      name: "Dr. [Name]",
      role: "Lab Director",
      image: "/images/team/placeholder.png"
    },
    {
      name: "Dr. [Name]",
      role: "Senior AI Researcher",
      image: "/images/team/placeholder.png"
    },
    {
      name: "Dr. [Name]",
      role: "Research Scientist",
      image: "/images/team/placeholder.png"
    },
    {
      name: "[Name]",
      role: "ML Engineer",
      image: "/images/team/placeholder.png"
    }
  ];

  const researchAreas = [
    {
      icon: Network,
      title: 'Synthesize.bio Integration',
      description: 'Leveraging the synthesize.bio API platform to accelerate biological sequence generation and validation workflows.'
    },
    {
      icon: Brain,
      title: 'Generative AI Models',
      description: 'Developing novel generative models (VAEs, GANs, Diffusion Models) specifically designed for genomic and proteomic data.'
    },
    {
      icon: Dna,
      title: 'Synthetic Biology Applications',
      description: 'Applying generative AI to design synthetic genetic circuits, regulatory elements, and functional biomolecules.'
    },
    {
      icon: Cpu,
      title: 'Independent Research',
      description: 'Pursuing innovative research projects that push the boundaries of generative genomics and computational biology.'
    }
  ];

  return (
    <div className="pt-0 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden bg-brand-dark">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
          <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-brand-primary/20 blur-[150px] rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/4 -left-20 w-[600px] h-[600px] bg-brand-secondary/15 blur-[150px] rounded-full"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-secondary text-[10px] font-bold uppercase tracking-[0.3em] backdrop-blur-md mb-8">
            <Sparkles className="w-4 h-4" />
            AI-Powered Research
          </div>
          <h1 className="text-6xl md:text-8xl font-bold text-white leading-[0.95] tracking-tight mb-8 max-w-4xl">
            The Generative <br />
            <span className="brand-text-gradient">Genomics Lab</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl leading-relaxed mb-10">
            Pioneering the future of genomics through generative AI, powered by synthesize.bio API integration and independent research projects pushing the boundaries of computational biology.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#mission"
              className="inline-flex items-center gap-3 px-8 py-4 bg-brand-primary hover:bg-[#1a4b75] text-white rounded-2xl font-bold transition-all shadow-[0_20px_40px_rgba(32,94,146,0.3)] hover:-translate-y-1"
            >
              Explore Our Research
            </a>
            <a
              href="/research-assistant-recruitment"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-2xl font-bold hover:bg-white/20 transition-all shadow-lg hover:-translate-y-1"
            >
              <Users className="w-5 h-5" />
              RA Recruitment
            </a>
            <a
              href="/thesis-support"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-2xl font-bold hover:bg-white/20 transition-all shadow-lg hover:-translate-y-1"
            >
              <BookOpen className="w-5 h-5" />
              Thesis Support
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
              Redefining Biology with <span className="text-brand-primary">Generative AI</span>
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
              The Generative Genomics Lab focuses on leveraging the power of generative artificial intelligence to revolutionize biological sequence design and analysis. We utilize the synthesize.bio API platform as a core tool for accelerating our research workflows.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-brand-primary/5 to-brand-primary/10 rounded-2xl p-8 border border-brand-primary/20">
              <div className="w-14 h-14 rounded-xl bg-brand-primary/20 flex items-center justify-center mb-6">
                <Brain className="w-7 h-7 text-brand-primary" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">AI-Powered Innovation</h3>
              <p className="text-slate-600 leading-relaxed">
                Our research combines cutting-edge generative AI models with practical applications in synthetic biology, protein engineering, and drug discovery. Through the synthesize.bio platform, we access state-of-the-art tools for DNA and protein synthesis, enabling rapid prototyping and validation.
              </p>
            </div>

            <div className="bg-gradient-to-br from-brand-secondary/5 to-brand-secondary/10 rounded-2xl p-8 border border-brand-secondary/20">
              <div className="w-14 h-14 rounded-xl bg-brand-secondary/20 flex items-center justify-center mb-6">
                <Network className="w-7 h-7 text-brand-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Independent Research</h3>
              <p className="text-slate-600 leading-relaxed">
                Beyond platform integration, we pursue independent research projects that explore novel applications of generative models in genomics, from designing synthetic genetic circuits to optimizing gene expression systems. Our interdisciplinary approach bridges machine learning, molecular biology, and biotechnology.
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
              Advancing the frontier of generative AI in biological sciences
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

          {/* Team Grid */}
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
              {teamMembers.map((member, i) => (
                <div key={i} className="bg-white border border-gray-200 group cursor-pointer">
                  <div className="w-full aspect-[5/6] overflow-hidden relative" style={{ backgroundColor: '#8B8B8B' }}>
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                      style={{ mixBlendMode: 'normal' }}
                    />
                  </div>
                  <div className="p-5 bg-white">
                    <h3 className="text-base font-bold text-black mb-1">{member.name}</h3>
                    <p className="text-sm text-gray-600">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA with Publications */}
      <section className="py-24 bg-brand-dark text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-6">Collaborate With Us</h2>
          <p className="text-xl text-slate-300 mb-10 leading-relaxed">
            Interested in leveraging generative AI for your biological research? Explore our publications and let's connect.
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
              href="mailto:deepbiobd@gmail.com?subject=Generative Genomics Lab Application"
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
