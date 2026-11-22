import React from 'react';
import { Users, Clock, Calendar, BookOpen, AlertCircle, CheckCircle, GraduationCap, Heart } from 'lucide-react';

export const ResearchAssistantRecruitmentPage: React.FC = () => {
  const requirements = [
    {
      icon: GraduationCap,
      title: 'Academic Requirements',
      items: [
        'Strong motivation for research',
        'Clear plans for future MSc/PhD studies in computational biology or bioinformatics'
      ]
    },
    {
      icon: BookOpen,
      title: 'Program Enrollment',
      items: [
        'Currently enrolled in or have completed the SBTP training program'
      ]
    },
    {
      icon: Clock,
      title: 'Time Commitment',
      items: [
        '15–20 hours per week',
        'Preferably evenings or weekends',
        'Flexible during exam periods'
      ]
    },
    {
      icon: Heart,
      title: 'Personal Qualities',
      items: [
        'Team-oriented mindset',
        'Dedicated and passionate about data-driven biological research'
      ]
    },
    {
      icon: Calendar,
      title: 'Weekly Meetings',
      items: [
        'Attend weekly online meetings every Sunday',
        'Time: 9:00–11:00 PM (BST)'
      ]
    },
    {
      icon: CheckCircle,
      title: 'Ethics & Commitment',
      items: [
        'Uphold research ethics at all times',
        'Maintain 12–18 month commitment to complete assigned projects',
        'Willing to mentor or assist junior researchers during collaborative lab activities'
      ]
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
            <Users className="w-4 h-4" />
            Recruitment Policy
          </div>
          <h1 className="text-6xl md:text-8xl font-bold text-white leading-[0.95] tracking-tight mb-8 max-w-4xl">
            Join as <br />
            <span className="brand-text-gradient">Research Assistant</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl leading-relaxed mb-10">
            Research Assistant recruitment follows the successful completion of the course and assigned projects.
          </p>
        </div>
      </section>

      {/* Position Information */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50 border-y border-blue-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-white rounded-3xl p-10 shadow-lg border border-blue-100">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-2xl flex items-center justify-center shrink-0">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-slate-900">Voluntary Research Position</h2>
                <p className="text-lg text-slate-700 leading-relaxed">
                  This is a <strong className="text-brand-primary">voluntary research position</strong> designed to provide hands-on experience and professional development in computational biology and bioinformatics research.
                </p>
                <div className="p-6 bg-gradient-to-r from-brand-primary/5 to-brand-secondary/5 rounded-2xl border border-brand-primary/20">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <Users className="w-6 h-6 text-brand-primary" />
                    Recognition & Rewards
                  </h3>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    Research Assistants who make <strong>significant contributions to research projects</strong> will be rewarded with <strong className="text-brand-primary">co-authorship</strong> on resulting publications and manuscripts.
                  </p>
                  <a
                    href="/lab-onboarding"
                    className="inline-flex items-center gap-2 text-brand-primary font-semibold hover:gap-3 transition-all group"
                  >
                    <BookOpen className="w-5 h-5" />
                    <span>Review Lab Guidelines for detailed co-authorship criteria</span>
                    <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-wider mb-6">
              Requirements
            </div>
            <h2 className="text-5xl font-bold text-slate-900 mb-6">Recruitment Requirements</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              All requirements must be met to qualify for the Research Assistant position
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {requirements.map((req, index) => (
              <div
                key={index}
                className="group p-8 bg-slate-50 rounded-3xl border border-slate-200 hover:border-brand-primary/50 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 bg-brand-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-brand-primary group-hover:scale-110 transition-all">
                    <req.icon className="w-7 h-7 text-brand-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mt-2">{req.title}</h3>
                </div>
                <ul className="space-y-3">
                  {req.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-slate-900 mb-6">Application Process</h2>
            <p className="text-xl text-slate-600">
              Follow these steps to apply for the Research Assistant position
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-brand-primary text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Complete SBTP Training Program</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Successfully complete all required courses and assigned projects in the SBTP training program.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-brand-primary text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Review Requirements</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Carefully review all requirements listed above and ensure you meet each criterion.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-brand-primary text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Submit Application</h3>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Complete the online application form to express your interest and provide your details.
                  </p>
                  <a
                    href="https://forms.gle/pEoVj5awQ7mca2UR9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-brand-primary hover:bg-[#1a4b75] text-white rounded-xl font-semibold transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
                  >
                    Open Application Form
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-brand-primary text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Begin Your Research Journey</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Upon acceptance, you'll be assigned to a lab and begin contributing to cutting-edge research projects.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-brand-dark text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-6">Ready to Apply?</h2>
          <p className="text-xl text-slate-300 mb-10 leading-relaxed">
            Join our research community and contribute to groundbreaking discoveries in computational biology and bioinformatics.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://forms.gle/pEoVj5awQ7mca2UR9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-brand-primary hover:bg-[#1a4b75] text-white rounded-2xl font-bold transition-all shadow-lg hover:-translate-y-1"
            >
              <Users className="w-5 h-5" />
              Apply Now
            </a>
            <a
              href="/lab-onboarding"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-2xl font-bold hover:bg-white/20 transition-all hover:-translate-y-1"
            >
              <BookOpen className="w-5 h-5" />
              View Lab Guidelines
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
