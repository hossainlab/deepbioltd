
import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Sparkles, Award, BookOpen, Globe2, UserCheck, TrendingUp, Megaphone, Calendar, MessageSquare, HeartHandshake, ExternalLink, ArrowRight } from 'lucide-react';

export const AmbassadorsPage: React.FC = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Impact',
      description: 'Help shape and grow the DeepBio community and increase your social media reach in life sciences!'
    },
    {
      icon: BookOpen,
      title: 'Training',
      description: 'Receive training to be a successful ambassador and get access to our content library with slide decks, templates, and more.'
    },
    {
      icon: Globe2,
      title: 'Access',
      description: 'Get behind the scenes with insights into running a life science startup and make a variety of valuable contacts.'
    },
    {
      icon: Users,
      title: 'Involved',
      description: 'Be kept up-to-date regarding our events and have opportunities to be involved in their planning.'
    },
    {
      icon: Award,
      title: 'Recognition',
      description: 'Receive a certificate for your work and appear on the ambassador page of our website. Plus exclusive swag!'
    },
    {
      icon: HeartHandshake,
      title: 'Support',
      description: 'Gain access to an exclusive support fund to attend events; get materials and support for events that you organize.'
    }
  ];

  const responsibilities = [
    {
      icon: Users,
      title: 'Networking',
      description: 'Engaging with the local, national, and international DeepBio and life science community'
    },
    {
      icon: Megaphone,
      title: 'Creating content',
      description: 'Writing or sharing posts, blogs, articles, and technical documentation about our work'
    },
    {
      icon: Calendar,
      title: 'Organizing events',
      description: 'Running local DeepBio events such as user groups, hackathons, workshops, and seminars'
    },
    {
      icon: MessageSquare,
      title: 'Giving talks',
      description: 'Speaking about DeepBio, bioinformatics, and AI in life sciences at meetings and events'
    },
    {
      icon: UserCheck,
      title: 'Local contact',
      description: 'Acting as a local contact for new community members and researchers'
    },
    {
      icon: HeartHandshake,
      title: 'Community support',
      description: 'Answering questions about DeepBio services, research methodologies, and best practices'
    }
  ];

  const requirements = [
    'Joined the DeepBio and life science community at least 6 months ago',
    'Share our information reliably and appropriately',
    'Have already participated in some of our events and/or initiatives',
    'Are willing to actively support the community as an ambassador for at least one year'
  ];

  return (
    <div className="pt-0 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-brand-dark pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
          <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-brand-primary/20 blur-[150px] rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/4 -left-20 w-[600px] h-[600px] bg-brand-secondary/15 blur-[150px] rounded-full"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full py-24">
          <div className="max-w-4xl mx-auto text-center space-y-10">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-secondary text-[10px] font-bold uppercase tracking-[0.3em] backdrop-blur-md">
              <Sparkles className="w-4 h-4 animate-pulse" />
              Ambassador Program
            </div>
            <h1 className="text-6xl md:text-8xl font-bold text-white leading-[0.95] tracking-tight">
              Become a <br />
              <span className="brand-text-gradient">DeepBio Ambassador!</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
              The DeepBio community is a dynamic ecosystem that brings together researchers, scientists, developers, and enthusiasts who are passionate about advancing life science research through AI and bioinformatics. Join us in fostering collaboration, knowledge sharing, and innovation in computational biology.
            </p>
            <Link
              to="/our-ambassadors"
              className="inline-flex items-center gap-2 text-brand-secondary hover:text-white transition-colors font-semibold text-lg group"
            >
              Check our ambassadors
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <div className="flex flex-col sm:flex-row gap-6 pt-4 justify-center">
              <a
                href="https://forms.gle/ZxPyH6xtueLohBFg7"
                target="_blank"
                rel="noopener noreferrer"
                className="px-12 py-6 bg-brand-primary hover:bg-[#1a4b75] text-white rounded-2xl font-bold flex items-center justify-center gap-3 transition-all shadow-[0_20px_40px_rgba(32,94,146,0.3)] hover:-translate-y-1 group text-lg"
              >
                Apply Now
                <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <Link
                to="/ambassador-handbook"
                className="px-12 py-6 border-2 border-white/20 hover:bg-white/5 text-white rounded-2xl font-bold transition-all backdrop-blur-sm hover:border-white/40 flex items-center justify-center gap-3 text-lg"
              >
                View Handbook
                <BookOpen className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Become an Ambassador Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <header className="mb-20 text-center space-y-6">
            <h2 className="text-brand-primary font-bold uppercase tracking-[0.3em] text-xs">Join Our Mission</h2>
            <p className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tight">Why Become a DeepBio Ambassador?</p>
            <div className="w-20 h-1.5 brand-gradient mx-auto rounded-full"></div>
          </header>

          <div className="mb-16 max-w-4xl mx-auto">
            <p className="text-xl text-slate-600 leading-relaxed text-center">
              The DeepBio Ambassador Program is a unique initiative designed to empower passionate individuals within our community to play a more active role in fostering collaboration, knowledge sharing, and engagement. As a DeepBio Ambassador, you'll amplify the reach and impact of computational biology and AI-driven life science research by promoting innovation, organizing community events, sharing your expertise, and assisting fellow researchers with their challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="p-8 bg-slate-50 rounded-3xl border border-slate-200 hover:border-brand-primary/50 transition-all duration-300 group hover:shadow-xl"
                >
                  <div className="w-16 h-16 bg-brand-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-slate-900">{benefit.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What We Expect Section */}
      <section className="py-32 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <header className="mb-20 text-center space-y-6">
            <h2 className="text-brand-secondary font-bold uppercase tracking-[0.3em] text-xs">Your Role</h2>
            <p className="text-5xl md:text-6xl font-bold text-white tracking-tight">What We Expect From You</p>
            <div className="w-20 h-1.5 brand-gradient mx-auto rounded-full"></div>
          </header>

          <div className="mb-16 max-w-4xl mx-auto">
            <p className="text-xl text-slate-300 leading-relaxed text-center mb-8">
              Examples of activities for an ambassador could include talking about DeepBio and computational biology at local events, writing or sharing posts about our research and methodologies, or managing local user groups for organizing workshops and hackathons. Of course, if you have other ideas of how to promote DeepBio and advance life science research, we encourage you to do so.
            </p>
            <p className="text-lg text-slate-400 leading-relaxed text-center">
              Successful ambassadors are individuals recognized for their expertise and willingness to help others learn about bioinformatics, AI in life sciences, and data-driven research. They are interested in and may already help coordinate local and regional meetups, create educational content such as blog posts, case studies, or training materials.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {responsibilities.map((responsibility, index) => {
              const Icon = responsibility.icon;
              return (
                <div
                  key={index}
                  className="p-8 bg-slate-900/40 rounded-3xl border border-white/10 hover:border-brand-primary/50 transition-all duration-300 group backdrop-blur-sm"
                >
                  <div className="w-16 h-16 bg-brand-secondary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                    <Icon className="w-8 h-8 text-slate-900" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">{responsibility.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{responsibility.description}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-16 max-w-4xl mx-auto text-center">
            <p className="text-slate-400 leading-relaxed">
              We do our best to monitor the activities of our ambassadors (with your help) and review membership twice per year. The quantity and types of contributions vary between ambassadors and we understand that other demands can fluctuate over time—membership of the program is non-binding.
            </p>
          </div>
        </div>
      </section>

      {/* Become an Ambassador Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <header className="mb-20 text-center space-y-6">
            <h2 className="text-brand-primary font-bold uppercase tracking-[0.3em] text-xs">Join Us</h2>
            <p className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tight">Become an Ambassador</p>
            <div className="w-20 h-1.5 brand-gradient mx-auto rounded-full"></div>
          </header>

          <div className="max-w-4xl mx-auto space-y-12">
            <div className="p-10 bg-slate-50 rounded-3xl border border-slate-200">
              <h3 className="text-2xl font-bold mb-8 text-slate-900">We're looking for people who:</h3>
              <ul className="space-y-4">
                {requirements.map((requirement, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-brand-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <UserCheck className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-lg text-slate-700 leading-relaxed">{requirement}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center space-y-8">
              <p className="text-lg text-slate-600 leading-relaxed">
                We review our ambassadors every six months, so it's no problem to pick up and put down the title as your other commitments allow.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                To become an ambassador, please register your interest using the link below. We will get in touch with you soon to chat about the next steps.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 pt-4 justify-center">
                <a
                  href="https://forms.gle/ZxPyH6xtueLohBFg7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-12 py-6 bg-brand-primary hover:bg-[#1a4b75] text-white rounded-2xl font-bold flex items-center justify-center gap-3 transition-all shadow-[0_20px_40px_rgba(32,94,146,0.3)] hover:-translate-y-1 group text-lg"
                >
                  Apply Here
                  <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <Link
                  to="/ambassador-handbook"
                  className="px-12 py-6 border-2 border-slate-300 hover:bg-slate-50 text-slate-900 rounded-2xl font-bold transition-all hover:border-brand-primary flex items-center justify-center gap-3 text-lg"
                >
                  Ambassador Handbook
                  <BookOpen className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
