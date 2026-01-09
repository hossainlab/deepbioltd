
import React from 'react';
import { Dna, Sparkles, Users, Award, BookOpen, Mail, Linkedin, Github, ExternalLink, Brain, Network } from 'lucide-react';

export const GenerativeGenomicsLabPage: React.FC = () => {
  const members = [
    {
      name: 'Dr. Michael Zhang',
      role: 'Lab Director',
      image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&q=80&w=400',
      bio: 'Pioneer in generative AI for genomics, former researcher at MIT and Stanford',
      linkedin: '#',
      github: '#',
      email: 'michael.zhang@gengenomics.org'
    },
    {
      name: 'Dr. Priya Patel',
      role: 'Senior AI Researcher',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=400',
      bio: 'Expert in deep learning and transformer models for biological sequence generation',
      linkedin: '#',
      github: '#',
      email: 'priya.patel@gengenomics.org'
    },
    {
      name: 'Dr. James Wilson',
      role: 'Computational Biologist',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400',
      bio: 'Specializes in protein structure prediction and design using generative models',
      linkedin: '#',
      github: '#',
      email: 'james.wilson@gengenomics.org'
    },
    {
      name: 'Dr. Lisa Anderson',
      role: 'Research Scientist',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400',
      bio: 'Focuses on genome editing optimization and CRISPR target prediction',
      linkedin: '#',
      github: '#',
      email: 'lisa.anderson@gengenomics.org'
    },
    {
      name: 'Dr. Yuki Tanaka',
      role: 'Machine Learning Engineer',
      image: 'https://images.unsplash.com/photo-1504257432389-52343af06ae3?auto=format&fit=crop&q=80&w=400',
      bio: 'Develops scalable ML infrastructure for large-scale genomic data processing',
      linkedin: '#',
      github: '#',
      email: 'yuki.tanaka@gengenomics.org'
    },
    {
      name: 'Maria Garcia',
      role: 'PhD Candidate',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400',
      bio: 'Researching novel approaches to synthetic genome design using VAEs and GANs',
      linkedin: '#',
      github: '#',
      email: 'maria.garcia@gengenomics.org'
    }
  ];

  const researchAreas = [
    {
      icon: Brain,
      title: 'Generative AI Models',
      description: 'Developing state-of-the-art generative models (VAEs, GANs, Transformers) for biological sequence generation and optimization.'
    },
    {
      icon: Dna,
      title: 'Synthetic Genomics',
      description: 'Design and synthesis of novel genetic sequences with desired properties using AI-guided approaches.'
    },
    {
      icon: Network,
      title: 'Protein Engineering',
      description: 'AI-powered protein design and optimization for therapeutic and industrial applications.'
    },
    {
      icon: Sparkles,
      title: 'Drug Discovery',
      description: 'Leveraging generative models to discover novel drug candidates and optimize molecular properties.'
    }
  ];

  return (
    <div className="pt-0 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
          <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-purple-500/20 blur-[150px] rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/4 -left-20 w-[600px] h-[600px] bg-blue-500/15 blur-[150px] rounded-full"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-purple-500/10 border border-purple-400/20 text-purple-300 text-[10px] font-bold uppercase tracking-[0.3em] backdrop-blur-md mb-8">
            <Sparkles className="w-4 h-4" />
            AI-Powered Research
          </div>
          <h1 className="text-6xl md:text-8xl font-bold text-white leading-[0.95] tracking-tight mb-8 max-w-4xl">
            The Generative <br />
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Genomics Lab</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl leading-relaxed mb-10">
            Pioneering the intersection of generative AI and genomics to design novel biological sequences, optimize proteins, and accelerate drug discovery through cutting-edge machine learning.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#about"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-2xl font-bold transition-all shadow-[0_20px_40px_rgba(147,51,234,0.3)] hover:-translate-y-1"
            >
              Explore Our Research
            </a>
            <a
              href="https://github.com/bigbiolab"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-2xl font-bold hover:bg-white/20 transition-all shadow-lg hover:-translate-y-1"
            >
              <Github className="w-5 h-5" />
              GitHub Repository
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-600 text-xs font-bold uppercase tracking-wider mb-6">
                About the Lab
              </div>
              <h2 className="text-5xl font-bold text-slate-900 mb-6 leading-tight">
                Redefining Biology with <span className="text-purple-600">Generative AI</span>
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  The Generative Genomics Lab stands at the forefront of AI-driven biological research. We harness the power of generative artificial intelligence to unlock new possibilities in genomics, protein engineering, and synthetic biology.
                </p>
                <p>
                  Our interdisciplinary team combines expertise in machine learning, computational biology, and molecular genetics to develop novel generative models that can design, predict, and optimize biological sequences with unprecedented accuracy.
                </p>
                <p>
                  From designing synthetic promoters and regulatory elements to engineering proteins with specific functions, our research is transforming how we approach biological design. We collaborate with leading pharmaceutical companies and research institutions worldwide to translate our AI innovations into real-world applications.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&q=80&w=800"
                  alt="Lab Research"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-purple-500/20 rounded-3xl -z-10"></div>
              <div className="absolute -top-8 -left-8 w-64 h-64 bg-blue-500/20 rounded-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-600 text-xs font-bold uppercase tracking-wider mb-6">
              Research Focus
            </div>
            <h2 className="text-5xl font-bold text-slate-900 mb-6">Our Core Research Areas</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Advancing the frontier of generative AI in biological sciences
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {researchAreas.map((area, index) => (
              <div
                key={index}
                className="group p-8 bg-white rounded-3xl border border-slate-200 hover:border-purple-300 hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all">
                  <area.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{area.title}</h3>
                <p className="text-slate-600 leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-600 text-xs font-bold uppercase tracking-wider mb-6">
              <Users className="w-4 h-4" />
              Our Team
            </div>
            <h2 className="text-5xl font-bold text-slate-900 mb-6">World-Class Researchers</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Experts in AI, genomics, and computational biology working together to push boundaries
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {members.map((member, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl border border-slate-200 overflow-hidden hover:shadow-2xl hover:border-purple-300 transition-all duration-300"
              >
                <div className="aspect-square overflow-hidden bg-slate-100">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{member.name}</h3>
                  <p className="text-purple-600 font-semibold mb-4">{member.role}</p>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">{member.bio}</p>
                  <div className="flex gap-3">
                    <a
                      href={`mailto:${member.email}`}
                      className="w-10 h-10 rounded-full bg-slate-100 hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 flex items-center justify-center transition-all group/icon"
                    >
                      <Mail className="w-5 h-5 text-slate-600 group-hover/icon:text-white transition-colors" />
                    </a>
                    <a
                      href={member.linkedin}
                      className="w-10 h-10 rounded-full bg-slate-100 hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 flex items-center justify-center transition-all group/icon"
                    >
                      <Linkedin className="w-5 h-5 text-slate-600 group-hover/icon:text-white transition-colors" />
                    </a>
                    <a
                      href={member.github}
                      className="w-10 h-10 rounded-full bg-slate-100 hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 flex items-center justify-center transition-all group/icon"
                    >
                      <Github className="w-5 h-5 text-slate-600 group-hover/icon:text-white transition-colors" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: '30+', label: 'AI Models Published' },
              { number: '10+', label: 'Active Collaborations' },
              { number: '500K+', label: 'Sequences Generated' },
              { number: '5', label: 'Patents Filed' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-3">{stat.number}</div>
                <div className="text-slate-300 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold text-slate-900 mb-6">Collaborate With Us</h2>
          <p className="text-xl text-slate-600 mb-10 leading-relaxed">
            Interested in leveraging generative AI for your biological research? Let's explore opportunities together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:deepbiobd@gmail.com?subject=Collaboration Inquiry - Generative Genomics Lab"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-2xl font-bold transition-all shadow-lg hover:-translate-y-1"
            >
              <Mail className="w-5 h-5" />
              Get in Touch
            </a>
            <a
              href="https://github.com/bigbiolab"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-slate-100 hover:bg-slate-200 text-slate-900 rounded-2xl font-bold transition-all hover:-translate-y-1"
            >
              <ExternalLink className="w-5 h-5" />
              View Our Code
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
