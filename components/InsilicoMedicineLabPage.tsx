import React from 'react';
import { Heart, Users, BookOpen, Activity, FlaskConical, Atom, Pill } from 'lucide-react';

export const InsilicoMedicineLabPage: React.FC = () => {
  // TODO: Replace with actual team members after recruitment
  const teamMembers = [
    {
      name: "Dr. [Name]",
      role: "Principal Investigator",
      image: "/images/team/placeholder.png"
    },
    {
      name: "Dr. [Name]",
      role: "Senior Research Scientist",
      image: "/images/team/placeholder.png"
    },
    {
      name: "Dr. [Name]",
      role: "Structural Biologist",
      image: "/images/team/placeholder.png"
    },
    {
      name: "[Name]",
      role: "ML Scientist",
      image: "/images/team/placeholder.png"
    }
  ];

  const researchAreas = [
    {
      icon: FlaskConical,
      title: 'Computer-Aided Drug Design',
      description: 'Advanced computational methods for rational drug design, including molecular docking, dynamics simulations, and virtual screening.'
    },
    {
      icon: Activity,
      title: 'AI for Drug Discovery',
      description: 'Machine learning and deep learning approaches to predict drug properties, optimize candidates, and accelerate the discovery pipeline.'
    },
    {
      icon: Atom,
      title: 'Structural Biology',
      description: 'Protein structure determination and analysis to understand drug-target interactions and guide structure-based design.'
    },
    {
      icon: Pill,
      title: 'Lead Optimization',
      description: 'Computational optimization of drug candidates for improved potency, selectivity, and pharmacokinetic properties.'
    }
  ];

  return (
    <div className="pt-0 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden bg-brand-dark">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
          <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-brand-primary/20 blur-[150px] rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/4 -left-20 w-[600px] h-[600px] bg-brand-secondary/15 blur-[150px] rounded-full"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-secondary text-[10px] font-bold uppercase tracking-[0.3em] backdrop-blur-md mb-8">
            <Heart className="w-4 h-4" />
            AI-Powered Drug Discovery
          </div>
          <h1 className="text-6xl md:text-8xl font-bold text-white leading-[0.95] tracking-tight mb-8 max-w-4xl">
            Insilico <br />
            <span className="brand-text-gradient">Medicine</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl leading-relaxed mb-10">
            Revolutionizing drug discovery through computer-aided design, artificial intelligence, and structural biology to accelerate the development of life-saving therapeutics.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#mission"
              className="inline-flex items-center gap-3 px-8 py-4 bg-brand-primary hover:bg-[#1a4b75] text-white rounded-2xl font-bold transition-all shadow-[0_20px_40px_rgba(32,94,146,0.3)] hover:-translate-y-1"
            >
              Discover Our Platform
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
              Transforming Drug Discovery with <span className="text-brand-primary">AI Innovation</span>
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
              Insilico Medicine Lab focuses on accelerating drug discovery through the integration of computer-aided drug design, artificial intelligence, and structural biology. Our mission is to reduce the time and cost of bringing new therapeutics to patients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-brand-primary/5 to-brand-primary/10 rounded-2xl p-8 border border-brand-primary/20">
              <div className="w-14 h-14 rounded-xl bg-brand-primary/20 flex items-center justify-center mb-6">
                <FlaskConical className="w-7 h-7 text-brand-primary" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Computational Excellence</h3>
              <p className="text-slate-600 leading-relaxed">
                We leverage state-of-the-art computational methods including molecular modeling, machine learning, and protein structure analysis to identify and optimize drug candidates. Our approach combines rational design with AI-powered predictions to increase success rates in drug development.
              </p>
            </div>

            <div className="bg-gradient-to-br from-brand-secondary/5 to-brand-secondary/10 rounded-2xl p-8 border border-brand-secondary/20">
              <div className="w-14 h-14 rounded-xl bg-brand-secondary/20 flex items-center justify-center mb-6">
                <Pill className="w-7 h-7 text-brand-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Therapeutic Impact</h3>
              <p className="text-slate-600 leading-relaxed">
                From target identification to lead optimization, our interdisciplinary team applies cutting-edge technologies to tackle challenging diseases. We work on novel therapeutics for cancer, infectious diseases, and rare genetic disorders, collaborating with pharmaceutical companies and academic institutions worldwide.
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
              Comprehensive solutions for modern drug discovery and development
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
          <h2 className="text-5xl font-bold mb-6">Partner With Insilico</h2>
          <p className="text-xl text-slate-300 mb-10 leading-relaxed">
            Ready to accelerate your drug discovery program with AI? Explore our research publications and let's collaborate.
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
              href="mailto:deepbiobd@gmail.com?subject=Insilico Medicine Application"
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
