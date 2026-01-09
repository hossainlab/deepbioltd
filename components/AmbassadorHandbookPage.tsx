
import React from 'react';
import { BookOpen, Users, Target, Sparkles, CheckCircle, Calendar, MessageSquare, Award } from 'lucide-react';

export const AmbassadorHandbookPage: React.FC = () => {
  return (
    <div className="pt-0 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden bg-brand-dark">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
          <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-brand-primary/20 blur-[150px] rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/4 -left-20 w-[600px] h-[600px] bg-brand-secondary/15 blur-[150px] rounded-full"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-secondary text-[10px] font-bold uppercase tracking-[0.3em] backdrop-blur-md mb-8">
            <BookOpen className="w-4 h-4" />
            Official Guide
          </div>
          <h1 className="text-6xl md:text-8xl font-bold text-white leading-[0.95] tracking-tight mb-8">
            DeepBio Ambassadors <br />
            <span className="brand-text-gradient">Handbook</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Your comprehensive guide to being a successful DeepBio Ambassador and making an impact in the life science research community.
          </p>
        </div>
      </section>

      {/* Main Content with Sidebar */}
      <div className="max-w-7xl mx-auto px-6 py-24 flex gap-12">
        {/* Left Sidebar - Table of Contents */}
        <aside className="hidden lg:block w-64 flex-shrink-0">
          <div className="sticky top-24">
            <h2 className="text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider">Table of Contents</h2>
            <nav className="space-y-2">
              {[
                { title: 'Welcome to the Program', href: '#welcome' },
                { title: 'Role & Responsibilities', href: '#responsibilities' },
                { title: 'Benefits & Support', href: '#benefits' },
                { title: 'Getting Started', href: '#getting-started' },
                { title: 'Best Practices', href: '#best-practices' },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="block py-2 px-4 text-sm font-medium text-slate-600 hover:text-brand-primary hover:bg-brand-primary/5 rounded-lg transition-all border-l-2 border-transparent hover:border-brand-primary"
                >
                  {item.title}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 min-w-0">
          {/* Welcome Section */}
          <section id="welcome" className="mb-24">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-brand-primary rounded-2xl flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-slate-900">Welcome to the Program</h2>
            </div>
            <div className="prose prose-lg max-w-none">
            <p className="text-slate-600 leading-relaxed mb-6">
              Congratulations on becoming a DeepBio Ambassador! You are now part of an elite group of individuals who are passionate about advancing life science research through bioinformatics, AI, and computational biology in Bangladesh and beyond.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              As an ambassador, you play a crucial role in building and strengthening the DeepBio community. Your enthusiasm, expertise, and dedication will help us reach more researchers, students, and professionals who can benefit from our work.
            </p>
            <div className="p-6 bg-brand-primary/5 border-l-4 border-brand-primary rounded-r-2xl my-8">
              <p className="text-slate-700 font-semibold mb-2">Mission Statement</p>
              <p className="text-slate-600">
                To empower DeepBio Ambassadors with the tools, resources, and support needed to foster a vibrant, collaborative community that advances life science research and innovation in resource-limited settings.
              </p>
            </div>
            </div>
          </section>

          {/* Responsibilities Section */}
          <section id="responsibilities" className="mb-24">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-brand-secondary rounded-2xl flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-slate-900">Your Role & Responsibilities</h2>
            </div>
            <div className="space-y-6">
            <div className="p-8 bg-white rounded-2xl border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <Users className="w-6 h-6 text-brand-primary" />
                Community Engagement
              </h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-primary mt-1 flex-shrink-0" />
                  <span>Engage with local, national, and international life science communities</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-primary mt-1 flex-shrink-0" />
                  <span>Act as a local contact for new community members and researchers</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-primary mt-1 flex-shrink-0" />
                  <span>Answer questions about DeepBio services and methodologies</span>
                </li>
              </ul>
            </div>

            <div className="p-8 bg-white rounded-2xl border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <MessageSquare className="w-6 h-6 text-brand-primary" />
                Content Creation
              </h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-primary mt-1 flex-shrink-0" />
                  <span>Write and share blog posts, articles, and social media content about DeepBio</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-primary mt-1 flex-shrink-0" />
                  <span>Create educational content such as tutorials, case studies, or training materials</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-primary mt-1 flex-shrink-0" />
                  <span>Share success stories and research outcomes using DeepBio tools</span>
                </li>
              </ul>
            </div>

            <div className="p-8 bg-white rounded-2xl border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <Calendar className="w-6 h-6 text-brand-primary" />
                Events & Workshops
              </h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-primary mt-1 flex-shrink-0" />
                  <span>Organize and run local events such as workshops, hackathons, and seminars</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-primary mt-1 flex-shrink-0" />
                  <span>Speak about DeepBio and computational biology at conferences and meetings</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-primary mt-1 flex-shrink-0" />
                  <span>Host user group meetings for local researchers and students</span>
                </li>
              </ul>
            </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section id="benefits" className="mb-24">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-brand-primary rounded-2xl flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-slate-900">Benefits & Support</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-slate-50 rounded-2xl">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Exclusive Resources</h3>
              <p className="text-slate-600">Access to presentation templates, slide decks, promotional materials, and technical documentation</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Travel Support</h3>
              <p className="text-slate-600">Financial support for attending conferences, workshops, and community events</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Recognition</h3>
              <p className="text-slate-600">Official certificate, profile on our website, exclusive ambassador swag and merchandise</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Training</h3>
              <p className="text-slate-600">Ambassador training sessions, skill development workshops, and mentorship opportunities</p>
            </div>
            </div>
          </section>

          {/* Getting Started */}
          <section id="getting-started" className="mb-24">
            <h2 className="text-4xl font-bold text-slate-900 mb-12">Getting Started</h2>
            <div className="space-y-6">
            {[
              {
                step: '1',
                title: 'Join Our Communication Channels',
                description: 'Connect with us on Slack, email lists, and social media to stay updated on program news and opportunities.'
              },
              {
                step: '2',
                title: 'Complete Your Profile',
                description: 'Update your ambassador profile with your bio, photo, social links, and areas of expertise.'
              },
              {
                step: '3',
                title: 'Attend Onboarding Session',
                description: 'Participate in our ambassador onboarding call to learn about resources, expectations, and opportunities.'
              },
              {
                step: '4',
                title: 'Plan Your First Activity',
                description: 'Choose an activity that aligns with your interests and skills—whether it\'s writing a blog post, organizing an event, or speaking at a conference.'
              },
            ].map((item, index) => (
              <div key={index} className="flex gap-6 items-start p-8 bg-white rounded-2xl border border-slate-200">
                <div className="w-12 h-12 bg-brand-primary rounded-xl flex items-center justify-center flex-shrink-0 text-white font-bold text-xl">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
            </div>
          </section>

          {/* Best Practices */}
          <section id="best-practices" className="mb-24">
            <h2 className="text-4xl font-bold text-slate-900 mb-12">Best Practices</h2>
            <div className="space-y-6">
            <div className="p-8 bg-slate-50 rounded-2xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Be Authentic</h3>
              <p className="text-slate-600 leading-relaxed">
                Share your genuine experiences and perspectives. Your unique voice and story are what make you valuable as an ambassador.
              </p>
            </div>
            <div className="p-8 bg-slate-50 rounded-2xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Stay Informed</h3>
              <p className="text-slate-600 leading-relaxed">
                Keep up-to-date with DeepBio's latest developments, research, and community initiatives so you can accurately represent our work.
              </p>
            </div>
            <div className="p-8 bg-slate-50 rounded-2xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Be Inclusive</h3>
              <p className="text-slate-600 leading-relaxed">
                Welcome and support community members from all backgrounds and experience levels. Foster an inclusive and supportive environment.
              </p>
            </div>
            <div className="p-8 bg-slate-50 rounded-2xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Report Your Activities</h3>
              <p className="text-slate-600 leading-relaxed">
                Share your activities and impact with us through quarterly reports. This helps us understand the program's reach and provide better support.
              </p>
            </div>
            </div>
          </section>
        </div>
      </div>

      {/* Contact Section */}
      <section className="py-24 bg-brand-dark text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Questions or Need Support?</h2>
          <p className="text-xl text-slate-300 mb-10">
            Our team is here to help you succeed as a DeepBio Ambassador.
          </p>
          <a
            href="mailto:deepbiobd@gmail.com?subject=Ambassador Support Request"
            className="inline-flex items-center gap-3 px-12 py-6 bg-brand-primary hover:bg-[#1a4b75] text-white rounded-2xl font-bold transition-all shadow-[0_20px_40px_rgba(32,94,146,0.3)] hover:-translate-y-1 text-lg"
          >
            Contact Ambassador Team
          </a>
        </div>
      </section>
    </div>
  );
};
