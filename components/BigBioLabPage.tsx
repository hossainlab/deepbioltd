
import React from 'react';
import { Microscope, Target, Users, Award, BookOpen, Mail, Linkedin, Github, ExternalLink, FlaskConical } from 'lucide-react';

export const BigBioLabPage: React.FC = () => {
  const members = [
    {
      name: 'Dr. Jane Smith',
      role: 'Principal Investigator',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
      bio: 'PhD in Bioinformatics, 15+ years of research experience in computational genomics',
      linkedin: '#',
      github: '#',
      email: 'jane.smith@bigbiolab.org'
    },
    {
      name: 'Dr. Ahmed Rahman',
      role: 'Senior Research Scientist',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400',
      bio: 'Specializes in machine learning applications in genomics and disease prediction',
      linkedin: '#',
      github: '#',
      email: 'ahmed.rahman@bigbiolab.org'
    },
    {
      name: 'Dr. Sarah Chen',
      role: 'Research Scientist',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400',
      bio: 'Expert in single-cell RNA sequencing and spatial transcriptomics analysis',
      linkedin: '#',
      github: '#',
      email: 'sarah.chen@bigbiolab.org'
    },
    {
      name: 'Md. Jubayer Hossain',
      role: 'Bioinformatics Analyst',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
      bio: 'Focuses on pipeline development and next-generation sequencing data analysis',
      linkedin: '#',
      github: '#',
      email: 'jubayer@bigbiolab.org'
    },
    {
      name: 'Emily Johnson',
      role: 'PhD Candidate',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400',
      bio: 'Researching novel biomarkers for early cancer detection using multi-omics approaches',
      linkedin: '#',
      github: '#',
      email: 'emily.johnson@bigbiolab.org'
    },
    {
      name: 'David Kim',
      role: 'Research Assistant',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400',
      bio: 'Supporting computational infrastructure and database management',
      linkedin: '#',
      github: '#',
      email: 'david.kim@bigbiolab.org'
    }
  ];

  const researchAreas = [
    {
      icon: FlaskConical,
      title: 'Computational Genomics',
      description: 'Advanced analysis of genomic data to understand genetic variations and their impact on health and disease.'
    },
    {
      icon: Target,
      title: 'Drug Discovery',
      description: 'Using AI and machine learning to identify novel drug targets and accelerate the drug development process.'
    },
    {
      icon: Microscope,
      title: 'Systems Biology',
      description: 'Integrating multi-omics data to understand complex biological systems and disease mechanisms.'
    },
    {
      icon: Award,
      title: 'Precision Medicine',
      description: 'Developing personalized treatment strategies based on individual genetic and molecular profiles.'
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
            Advancing life science research through cutting-edge bioinformatics, AI-driven analysis, and computational biology to address critical public health challenges in Bangladesh and beyond.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#about"
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

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-wider mb-6">
                About the Lab
              </div>
              <h2 className="text-5xl font-bold text-slate-900 mb-6 leading-tight">
                Pioneering Bioinformatics Research in <span className="text-brand-primary">South Asia</span>
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Big Bioinformatics Lab (BigBio Lab) is an independent bioinformatics research and training facility based in Bangladesh. Founded with the mission to bridge the gap in computational biology expertise in resource-limited settings, we focus on cutting-edge research that addresses local and global health challenges.
                </p>
                <p>
                  Our multidisciplinary team combines expertise in genomics, machine learning, and systems biology to tackle complex biological questions. We collaborate with international institutions and local healthcare providers to translate our research into practical applications.
                </p>
                <p>
                  Through our training programs, we're building the next generation of bioinformatics researchers in Bangladesh, fostering a vibrant community of scientists dedicated to advancing life science research through computational approaches.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800"
                  alt="Lab Research"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-brand-primary/20 rounded-3xl -z-10"></div>
              <div className="absolute -top-8 -left-8 w-64 h-64 bg-brand-secondary/20 rounded-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-wider mb-6">
              Research Areas
            </div>
            <h2 className="text-5xl font-bold text-slate-900 mb-6">Our Focus Areas</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We're pushing the boundaries of bioinformatics research across multiple domains
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

      {/* Team Members */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-wider mb-6">
              <Users className="w-4 h-4" />
              Our Team
            </div>
            <h2 className="text-5xl font-bold text-slate-900 mb-6">Meet Our Researchers</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A diverse team of experts dedicated to advancing bioinformatics research
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {members.map((member, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl border border-slate-200 overflow-hidden hover:shadow-2xl hover:border-brand-primary/50 transition-all duration-300"
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
                  <p className="text-brand-primary font-semibold mb-4">{member.role}</p>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">{member.bio}</p>
                  <div className="flex gap-3">
                    <a
                      href={member.email}
                      className="w-10 h-10 rounded-full bg-slate-100 hover:bg-brand-primary flex items-center justify-center transition-all group/icon"
                    >
                      <Mail className="w-5 h-5 text-slate-600 group-hover/icon:text-white transition-colors" />
                    </a>
                    <a
                      href={member.linkedin}
                      className="w-10 h-10 rounded-full bg-slate-100 hover:bg-brand-primary flex items-center justify-center transition-all group/icon"
                    >
                      <Linkedin className="w-5 h-5 text-slate-600 group-hover/icon:text-white transition-colors" />
                    </a>
                    <a
                      href={member.github}
                      className="w-10 h-10 rounded-full bg-slate-100 hover:bg-brand-primary flex items-center justify-center transition-all group/icon"
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
      <section className="py-24 bg-brand-dark text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: '50+', label: 'Research Publications' },
              { number: '15+', label: 'Active Projects' },
              { number: '100+', label: 'Students Trained' },
              { number: '20+', label: 'Collaborations' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl md:text-6xl font-bold brand-text-gradient mb-3">{stat.number}</div>
                <div className="text-slate-300 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold text-slate-900 mb-6">Join Our Research Community</h2>
          <p className="text-xl text-slate-600 mb-10 leading-relaxed">
            Interested in collaborating or joining our lab? We welcome researchers, students, and partners who share our vision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:deepbiobd@gmail.com?subject=Collaboration Inquiry - BigBio Lab"
              className="inline-flex items-center gap-3 px-8 py-4 bg-brand-primary hover:bg-[#1a4b75] text-white rounded-2xl font-bold transition-all shadow-lg hover:-translate-y-1"
            >
              <Mail className="w-5 h-5" />
              Contact Us
            </a>
            <a
              href="/lab-onboarding"
              className="inline-flex items-center gap-3 px-8 py-4 bg-slate-100 hover:bg-slate-200 text-slate-900 rounded-2xl font-bold transition-all hover:-translate-y-1"
            >
              <ExternalLink className="w-5 h-5" />
              View Lab Guidelines
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
