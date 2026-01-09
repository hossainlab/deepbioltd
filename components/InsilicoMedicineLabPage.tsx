
import React from 'react';
import { Pill, Heart, Users, Award, BookOpen, Mail, Linkedin, Github, ExternalLink, Activity, Zap, FlaskConical } from 'lucide-react';

export const InsilicoMedicineLabPage: React.FC = () => {
  const members = [
    {
      name: 'Dr. Alex Zhavoronkov',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400',
      bio: 'Leading expert in AI for drug discovery and aging research, PhD in Biotechnology',
      linkedin: '#',
      github: '#',
      email: 'alex@insilico.com'
    },
    {
      name: 'Dr. Feng Ren',
      role: 'Chief Scientific Officer',
      image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=80&w=400',
      bio: 'Pioneer in deep learning for molecular generation and drug target identification',
      linkedin: '#',
      github: '#',
      email: 'feng.ren@insilico.com'
    },
    {
      name: 'Dr. Maria Ivanova',
      role: 'VP of Research',
      image: 'https://images.unsplash.com/photo-1589156229687-496a31ad1d1f?auto=format&fit=crop&q=80&w=400',
      bio: 'Expert in computational chemistry and structure-based drug design',
      linkedin: '#',
      github: '#',
      email: 'maria.ivanova@insilico.com'
    },
    {
      name: 'Dr. Rajesh Kumar',
      role: 'Lead Data Scientist',
      image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&q=80&w=400',
      bio: 'Specializes in reinforcement learning and optimization for drug discovery',
      linkedin: '#',
      github: '#',
      email: 'rajesh.kumar@insilico.com'
    },
    {
      name: 'Dr. Sophie Martin',
      role: 'Clinical Research Director',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=400',
      bio: 'Bridges AI research with clinical applications in oncology and rare diseases',
      linkedin: '#',
      github: '#',
      email: 'sophie.martin@insilico.com'
    },
    {
      name: 'Dr. Chen Wei',
      role: 'Senior ML Engineer',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400',
      bio: 'Develops scalable AI platforms for high-throughput drug screening',
      linkedin: '#',
      github: '#',
      email: 'chen.wei@insilico.com'
    }
  ];

  const researchAreas = [
    {
      icon: Pill,
      title: 'AI Drug Discovery',
      description: 'Leveraging deep learning to discover novel drug candidates and predict their efficacy and safety profiles.'
    },
    {
      icon: Activity,
      title: 'Aging Research',
      description: 'Applying AI to understand aging mechanisms and develop interventions for age-related diseases.'
    },
    {
      icon: FlaskConical,
      title: 'Target Identification',
      description: 'Using machine learning to identify and validate novel therapeutic targets for complex diseases.'
    },
    {
      icon: Zap,
      title: 'Clinical Trial Design',
      description: 'Optimizing clinical trial protocols and patient stratification using AI-driven insights.'
    }
  ];

  return (
    <div className="pt-0 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
          <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-emerald-500/20 blur-[150px] rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/4 -left-20 w-[600px] h-[600px] bg-cyan-500/15 blur-[150px] rounded-full"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-emerald-500/10 border border-emerald-400/20 text-emerald-300 text-[10px] font-bold uppercase tracking-[0.3em] backdrop-blur-md mb-8">
            <Heart className="w-4 h-4" />
            AI-Powered Drug Discovery
          </div>
          <h1 className="text-6xl md:text-8xl font-bold text-white leading-[0.95] tracking-tight mb-8 max-w-4xl">
            Insilico <br />
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Medicine</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl leading-relaxed mb-10">
            Revolutionizing drug discovery through artificial intelligence. We develop end-to-end AI platforms to discover novel therapeutics, accelerate clinical development, and extend healthy human lifespan.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#about"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-700 text-white rounded-2xl font-bold transition-all shadow-[0_20px_40px_rgba(16,185,129,0.3)] hover:-translate-y-1"
            >
              Discover Our Platform
            </a>
            <a
              href="#pipeline"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-2xl font-bold hover:bg-white/20 transition-all shadow-lg hover:-translate-y-1"
            >
              <Pill className="w-5 h-5" />
              Drug Pipeline
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-600 text-xs font-bold uppercase tracking-wider mb-6">
                About Us
              </div>
              <h2 className="text-5xl font-bold text-slate-900 mb-6 leading-tight">
                Transforming Drug Discovery with <span className="text-emerald-600">AI Innovation</span>
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Insilico Medicine is at the forefront of AI-driven pharmaceutical research. Founded with the vision of extending healthy human lifespan, we've built comprehensive AI platforms that span the entire drug discovery pipeline—from target identification to clinical trial design.
                </p>
                <p>
                  Our proprietary AI engines—Pharma.AI, Chemistry42, and InClinico—work in concert to accelerate drug discovery by up to 10x while reducing costs by 80%. We've successfully identified novel drug candidates for cancer, fibrosis, and age-related diseases, with multiple compounds advancing through clinical trials.
                </p>
                <p>
                  With a global team of world-class scientists, engineers, and clinicians, we're partnering with leading pharmaceutical companies and research institutions to bring life-saving medicines to patients faster than ever before.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800"
                  alt="Lab Research"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-emerald-500/20 rounded-3xl -z-10"></div>
              <div className="absolute -top-8 -left-8 w-64 h-64 bg-cyan-500/20 rounded-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-600 text-xs font-bold uppercase tracking-wider mb-6">
              Core Capabilities
            </div>
            <h2 className="text-5xl font-bold text-slate-900 mb-6">Our AI Platforms</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              End-to-end AI solutions for modern drug discovery and development
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {researchAreas.map((area, index) => (
              <div
                key={index}
                className="group p-8 bg-white rounded-3xl border border-slate-200 hover:border-emerald-300 hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all">
                  <area.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{area.title}</h3>
                <p className="text-slate-600 leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pipeline Section */}
      <section id="pipeline" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-600 text-xs font-bold uppercase tracking-wider mb-6">
              Drug Pipeline
            </div>
            <h2 className="text-5xl font-bold text-slate-900 mb-6">Active Programs</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              AI-discovered compounds advancing through development
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { stage: 'Phase II', indication: 'Idiopathic Pulmonary Fibrosis', compound: 'ISM001-055' },
              { stage: 'Phase I', indication: 'Solid Tumors', compound: 'ISM042-2-048' },
              { stage: 'Preclinical', indication: 'Age-Related Diseases', compound: 'ISM-NAD+' }
            ].map((program, index) => (
              <div key={index} className="p-6 bg-gradient-to-br from-emerald-50 to-cyan-50 rounded-2xl border border-emerald-200">
                <div className="inline-block px-3 py-1 bg-emerald-600 text-white text-xs font-bold rounded-full mb-4">
                  {program.stage}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{program.indication}</h3>
                <p className="text-slate-600 font-mono text-sm">{program.compound}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-600 text-xs font-bold uppercase tracking-wider mb-6">
              <Users className="w-4 h-4" />
              Leadership Team
            </div>
            <h2 className="text-5xl font-bold text-slate-900 mb-6">Meet Our Experts</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A multidisciplinary team driving the future of AI-powered drug discovery
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {members.map((member, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl border border-slate-200 overflow-hidden hover:shadow-2xl hover:border-emerald-300 transition-all duration-300"
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
                  <p className="text-emerald-600 font-semibold mb-4">{member.role}</p>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">{member.bio}</p>
                  <div className="flex gap-3">
                    <a
                      href={`mailto:${member.email}`}
                      className="w-10 h-10 rounded-full bg-slate-100 hover:bg-gradient-to-r hover:from-emerald-600 hover:to-cyan-600 flex items-center justify-center transition-all group/icon"
                    >
                      <Mail className="w-5 h-5 text-slate-600 group-hover/icon:text-white transition-colors" />
                    </a>
                    <a
                      href={member.linkedin}
                      className="w-10 h-10 rounded-full bg-slate-100 hover:bg-gradient-to-r hover:from-emerald-600 hover:to-cyan-600 flex items-center justify-center transition-all group/icon"
                    >
                      <Linkedin className="w-5 h-5 text-slate-600 group-hover/icon:text-white transition-colors" />
                    </a>
                    <a
                      href={member.github}
                      className="w-10 h-10 rounded-full bg-slate-100 hover:bg-gradient-to-r hover:from-emerald-600 hover:to-cyan-600 flex items-center justify-center transition-all group/icon"
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
      <section className="py-24 bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: '200+', label: 'AI-Generated Compounds' },
              { number: '6', label: 'Clinical Trials' },
              { number: '30+', label: 'Pharma Partners' },
              { number: '$400M+', label: 'Funding Raised' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-3">{stat.number}</div>
                <div className="text-slate-300 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold text-slate-900 mb-6">Partner With Insilico</h2>
          <p className="text-xl text-slate-600 mb-10 leading-relaxed">
            Ready to accelerate your drug discovery program with AI? Let's discuss how we can help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:deepbiobd@gmail.com?subject=Partnership Inquiry - Insilico Medicine"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-700 text-white rounded-2xl font-bold transition-all shadow-lg hover:-translate-y-1"
            >
              <Mail className="w-5 h-5" />
              Contact Us
            </a>
            <a
              href="#pipeline"
              className="inline-flex items-center gap-3 px-8 py-4 bg-slate-100 hover:bg-slate-200 text-slate-900 rounded-2xl font-bold transition-all hover:-translate-y-1"
            >
              <ExternalLink className="w-5 h-5" />
              View Pipeline
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
