'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  BookOpen, 
  Users, 
  Target, 
  Sparkles, 
  CheckCircle, 
  Calendar, 
  MessageSquare, 
  Award, 
  FileText, 
  Star, 
  AlertTriangle, 
  Phone, 
  BarChart3, 
  Video, 
  PenLine, 
  Image as ImageIcon, 
  Megaphone, 
  Shield, 
  ChevronDown, 
  HelpCircle,
  Clock,
  Zap,
  Briefcase,
  GraduationCap
} from 'lucide-react';

const roles = [
  {
    title: 'Program Director',
    responsibility: 'Vision & Strategy',
    tasks: [
      'Define program goals and monthly themes',
      'Manage high-level relationships with speakers and partners',
      'Oversee overall program quality and impact',
      'Lead strategic decision-making for program scaling'
    ],
    icon: Target
  },
  {
    title: 'Assistant Director',
    responsibility: 'Operations & Coordination',
    tasks: [
      'Manage the internal management team workflow',
      'Ensure all departments (Creative, Outreach, Tech) are on schedule',
      'Prepare monthly impact reports for the CEO',
      'Coordinate with the Director on speaker onboarding'
    ],
    icon: Shield
  },
  {
    title: 'Program Hosts',
    responsibility: 'Live Session Execution',
    tasks: [
      'Moderate the live 2-hour monthly session',
      'Handle speaker introductions and transitions',
      'Manage the Q&A segment and participant engagement',
      'Ensure the session adheres to the timeline'
    ],
    icon: MessageSquare
  },
  {
    title: 'Speakers',
    responsibility: 'Subject Matter Expertise',
    tasks: [
      'Deliver insightful presentations on monthly themes',
      'Share industry-specific trends and skill requirements',
      'Provide actionable advice for higher education pathways',
      'Engage with participants during the interactive Q&A'
    ],
    icon: GraduationCap
  },
  {
    title: 'Communications & Outreach Manager',
    responsibility: 'Ambassador & Partner Network',
    tasks: [
      'Coordinate the network of 24+ Campus Ambassadors',
      'Distribute promotional materials to ambassadors',
      'Track registration sources and localized impact',
      'Maintain relationships with community partners'
    ],
    icon: Megaphone
  },
  {
    title: 'Creative Design & Brand Lead',
    responsibility: 'Visual Identity',
    tasks: [
      'Design monthly social media assets and flyers',
      'Create and maintain presentation deck templates',
      'Ensure all branding adheres to DeepBio standards',
      'Oversee the visual quality of the handbook and program pages'
    ],
    icon: ImageIcon
  },
  {
    title: 'Coordinators',
    responsibility: 'Logistics & Tech Support',
    tasks: [
      'Manage registration databases and Zoom/Meet settings',
      'Handle technical troubleshooting during live sessions',
      'Distribute certificates and resources post-session',
      'Monitor participant feedback and help desk'
    ],
    icon: Zap
  }
];

const participantGuidelines = [
  {
    title: 'Pre-Session',
    items: [
      'Register via the official Google Form before the deadline',
      'Join the official WhatsApp/Email community for updates',
      'Review the session theme and speaker profiles'
    ]
  },
  {
    title: 'During Session',
    items: [
      'Join on time (Sessions typically run 9:00 PM - 11:00 PM BST)',
      'Keep microphones muted unless called upon',
      'Use the chat for questions during the presentation',
      'Engage actively during the Q&A segment'
    ]
  },
  {
    title: 'Post-Session',
    items: [
      'Complete the feedback form to help us improve',
      'Access the shared resource folder (if provided)',
      'Network with fellow participants in the community'
    ]
  }
];

const faqs = [
  {
    q: 'How often are the Career Guide sessions held?',
    a: 'Sessions are held monthly, typically on the last Friday of every month from 9:00 PM to 11:00 PM BST.',
  },
  {
    q: 'Is there any cost for participants?',
    a: 'No. The Bioinformatics Career Guide is a 100% free community initiative by DeepBio Limited and CHIRAL Bangladesh.',
  },
  {
    q: 'Do ambassadors get specific training for these sessions?',
    a: 'Yes. Ambassadors receive a monthly briefing and promotional toolkit from the Communications Manager to ensure they can effectively guide students at their respective universities.',
  },
  {
    q: 'How are speakers selected?',
    a: 'Speakers are industry leaders, academic scholars, and bioinformatics experts selected based on the monthly theme and their contribution to the field.',
  },
  {
    q: 'Can I join the management team?',
    a: 'Management team positions are typically invited from top-performing Campus Ambassadors or through internal recruitment based on specific skill sets.',
  }
];

const FaqList: React.FC = () => {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div key={i} className="rounded-2xl border border-slate-200 overflow-hidden">
          <button
            className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-white hover:bg-slate-50 transition-colors"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <span className="font-semibold text-slate-800 text-sm leading-snug">{faq.q}</span>
            <ChevronDown className={`w-4 h-4 text-slate-400 flex-shrink-0 transition-transform duration-200 ${open === i ? 'rotate-180' : ''}`} />
          </button>
          {open === i && (
            <div className="px-6 pb-5 bg-white border-t border-slate-100">
              <p className="text-slate-600 text-sm leading-relaxed pt-4">{faq.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export const CareerGuideHandbookPage: React.FC = () => {
  const tocItems = [
    { title: 'Program Mission', href: '#mission' },
    { title: 'Management Roles', href: '#roles' },
    { title: 'Speaker Guidelines', href: '#speaker-guide' },
    { title: 'Ambassador Responsibilities', href: '#ambassadors' },
    { title: 'Participant Guidelines', href: '#participants' },
    { title: 'Operational Workflow', href: '#workflow' },
    { title: 'Branding & Style', href: '#branding' },
    { title: 'FAQs', href: '#faqs' },
    { title: 'Contact & Support', href: '#support' },
  ];

  return (
    <div className="pt-0 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden bg-brand-dark">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
          <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-brand-primary/20 blur-[150px] rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/4 -left-20 w-[600px] h-[600px] bg-brand-secondary/15 blur-[150px] rounded-full"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-secondary text-[10px] font-bold uppercase tracking-[0.3em] backdrop-blur-md mb-8">
            <BookOpen className="w-4 h-4" />
            Program Handbook · Operational Excellence
          </div>
          <h1 className="text-6xl md:text-8xl font-bold text-white leading-[0.95] tracking-tight mb-8">
            Career Guide <br />
            <span className="brand-text-gradient">Handbook</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            The definitive guide for the management team, ambassadors, and participants of the Bioinformatics Career Guide.
          </p>
        </div>
      </section>

      {/* Main Content with Sidebar */}
      <div className="max-w-7xl mx-auto px-6 py-24 flex flex-col lg:flex-row gap-12">
        {/* Left Sidebar - Table of Contents */}
        <aside className="lg:w-72 flex-shrink-0">
          <div className="sticky top-24">
            <h2 className="text-xs font-bold text-slate-900 mb-4 uppercase tracking-wider">Guide Contents</h2>
            <nav className="space-y-1">
              {tocItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-center gap-3 py-2 px-4 text-sm font-medium text-slate-600 hover:text-brand-primary hover:bg-brand-primary/5 rounded-lg transition-all border-l-2 border-transparent hover:border-brand-primary"
                >
                  <span className="text-xs text-slate-400 font-mono w-5">{String(index + 1).padStart(2, '0')}</span>
                  {item.title}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 min-w-0 space-y-24">

          {/* 01 Mission */}
          <section id="mission">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-brand-primary rounded-2xl flex items-center justify-center flex-shrink-0">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-slate-900">Program Mission</h2>
            </div>
            <p className="text-slate-600 leading-relaxed mb-6 text-lg">
              The Bioinformatics Career Guide is dedicated to democratizing career awareness in computational biology. We bridge the gap between academic education and industry requirements by providing monthly, expert-led orientation sessions for students across Bangladesh.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-brand-primary" />
                  Industry Ready
                </h3>
                <p className="text-sm text-slate-600">Equipping students with market-relevant skills and awareness of global biotech trends.</p>
              </div>
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-brand-secondary" />
                  Academic Excellence
                </h3>
                <p className="text-sm text-slate-600">Guiding future scholars through the complexities of global MS/PhD applications and research funding.</p>
              </div>
            </div>
          </section>

          {/* 02 Management Roles */}
          <section id="roles">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-brand-secondary rounded-2xl flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-slate-900">Management Roles</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {roles.map((role, i) => (
                <div key={i} className="p-8 bg-white rounded-3xl border border-slate-200 hover:border-brand-primary/30 transition-all group">
                  <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-primary transition-colors">
                    <role.icon className="w-6 h-6 text-brand-primary group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{role.title}</h3>
                  <p className="text-brand-primary text-xs font-bold uppercase tracking-wider mb-4">{role.responsibility}</p>
                  <ul className="space-y-2">
                    {role.tasks.map((task, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-slate-600">
                        <CheckCircle className="w-4 h-4 text-brand-primary mt-0.5 flex-shrink-0" />
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* 03 Speaker Guidelines */}
          <section id="speaker-guide">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-brand-primary rounded-2xl flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-slate-900">Speaker Guidelines</h2>
            </div>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Our speakers are the heart of the Career Guide. These guidelines ensure a consistent and high-impact experience for all participants.
            </p>
            <div className="space-y-6">
              <div className="p-8 bg-slate-50 rounded-3xl border border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-brand-primary" />
                  Session Structure
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-slate-600 text-sm">
                    <CheckCircle className="w-4 h-4 text-brand-primary mt-0.5 flex-shrink-0" />
                    <span><strong>Presentation (40 mins):</strong> Focused, data-driven insights into industry or academic tracks.</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-600 text-sm">
                    <CheckCircle className="w-4 h-4 text-brand-primary mt-0.5 flex-shrink-0" />
                    <span><strong>Q&A Engagement (20 mins):</strong> Direct interaction with participants to address specific career queries.</span>
                  </li>
                </ul>
              </div>
              <div className="p-8 bg-white rounded-3xl border border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Target className="w-5 h-5 text-brand-primary" />
                  Key Content Pillars
                </h3>
                <div className="grid sm:grid-cols-2 gap-4 text-sm text-slate-600">
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                    <span className="font-bold text-slate-900 block mb-1">National Market</span>
                    Skill gaps, local industry opportunities, and salary trends in Bangladesh.
                  </div>
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                    <span className="font-bold text-slate-900 block mb-1">Global Pathways</span>
                    MS/PhD application strategies, funding landscapes, and research networking.
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 04 Ambassadors */}
          <section id="ambassadors">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-brand-primary rounded-2xl flex items-center justify-center flex-shrink-0">
                <Megaphone className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-slate-900">Ambassador Responsibilities</h2>
            </div>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Ambassadors are the localized face of the program. Your primary responsibility is to ensure students at your university are aware of and can access these free career resources.
            </p>
            <div className="space-y-4">
              {[
                'Post monthly session announcements in departmental and university-wide groups.',
                'Engage with students to answer basic questions about the session format.',
                'Encourage early registration to ensure participants receive the session link.',
                'Share feedback and student needs from your university with the Communications Manager.'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <CheckCircle className="w-5 h-5 text-brand-primary flex-shrink-0" />
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* 04 Participants */}
          <section id="participants">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-brand-secondary rounded-2xl flex items-center justify-center flex-shrink-0">
                <Star className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-slate-900">Participant Guidelines</h2>
            </div>
            <div className="grid sm:grid-cols-3 gap-6">
              {participantGuidelines.map((phase, i) => (
                <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <h3 className="font-bold text-slate-900 mb-4 text-lg">{phase.title}</h3>
                  <ul className="space-y-3">
                    {phase.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-slate-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-secondary mt-1.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* 05 Workflow */}
          <section id="workflow">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-brand-primary rounded-2xl flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-slate-900">Operational Workflow</h2>
            </div>
            <div className="space-y-8">
              {[
                { week: 'Week 1-2', task: 'Speaker Acquisition & Theme Finalization', lead: 'Director & Assistant Director' },
                { week: 'Week 3', task: 'Asset Creation & Ambassador Briefing', lead: 'Creative Lead & Outreach Manager' },
                { week: 'Week 4', task: 'Intensive Promotion & Registration Push', lead: 'Outreach Manager & Ambassadors' },
                { week: 'Last Friday', task: 'Live Session Execution', lead: 'Hosts & Coordinators' },
                { week: 'Post-Session', task: 'Feedback Analysis & Resource Distribution', lead: 'Coordinators' }
              ].map((step, i) => (
                <div key={i} className="flex flex-col sm:flex-row gap-4 sm:items-center p-6 bg-white border border-slate-200 rounded-2xl hover:shadow-lg transition-all">
                  <div className="w-24 font-bold text-brand-primary">{step.week}</div>
                  <div className="flex-1">
                    <h4 className="font-bold text-slate-900">{step.task}</h4>
                    <p className="text-sm text-slate-500">Lead: {step.lead}</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 font-mono text-xs">0{i+1}</div>
                </div>
              ))}
            </div>
          </section>

          {/* 06 Branding */}
          <section id="branding">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-brand-secondary rounded-2xl flex items-center justify-center flex-shrink-0">
                <ImageIcon className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-slate-900">Branding & Style</h2>
            </div>
            <div className="p-8 bg-slate-900 rounded-[2rem] text-white">
              <h3 className="text-xl font-bold mb-6">Visual Identity Guidelines</h3>
              <div className="grid sm:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-brand-secondary font-bold text-sm uppercase tracking-wider mb-4">Core Colors</h4>
                  <div className="flex gap-4">
                    <div className="space-y-2">
                      <div className="w-12 h-12 bg-[#143d59] rounded-lg border border-white/20"></div>
                      <p className="text-[10px] font-mono text-white/50">#143D59</p>
                    </div>
                    <div className="space-y-2">
                      <div className="w-12 h-12 bg-[#f4b41a] rounded-lg border border-white/20"></div>
                      <p className="text-[10px] font-mono text-white/50">#F4B41A</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-brand-secondary font-bold text-sm uppercase tracking-wider mb-4">Tone of Voice</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Professional, encouraging, and research-focused. We aim to inspire confidence while maintaining scientific rigor.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 07 FAQs */}
          <section id="faqs">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-brand-primary rounded-2xl flex items-center justify-center flex-shrink-0">
                <HelpCircle className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-slate-900">Frequently Asked Questions</h2>
            </div>
            <FaqList />
          </section>

          {/* 08 Support */}
          <section id="support" className="p-10 bg-brand-primary/5 rounded-[2.5rem] border border-brand-primary/10">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Need Support?</h2>
              <p className="text-slate-600 mb-8">
                If you are a management team member or an ambassador needing specific help or resources, please reach out via the official program channels.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="mailto:academy@deepbioltd.com" className="px-6 py-3 bg-brand-primary text-white rounded-xl font-bold hover:shadow-lg transition-all">Email Program Team</a>
                <a href="https://wa.me/your-whatsapp-link" className="px-6 py-3 bg-white text-slate-700 border border-slate-200 rounded-xl font-bold hover:bg-slate-50 transition-all">WhatsApp Coordinator</a>
              </div>
            </div>
          </section>

        </div>
      </div>

      {/* Footer CTA */}
      <section className="py-24 bg-brand-dark text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">Built for Impact</h2>
          <p className="text-xl text-slate-300 mb-10">
            Every session we run brings us one step closer to a stronger bioinformatics ecosystem in Bangladesh. Thank you for your dedication.
          </p>
          <div className="flex justify-center gap-6">
            <Link href="/career-guide" className="px-10 py-5 bg-brand-primary text-white rounded-2xl font-bold hover:shadow-2xl transition-all">Back to Session Page</Link>
          </div>
        </div>
      </section>
    </div>
  );
};
