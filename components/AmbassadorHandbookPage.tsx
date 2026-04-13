'use client';

import React, { useState } from 'react';
import { BookOpen, Users, Target, Sparkles, CheckCircle, Calendar, MessageSquare, Award, FileText, Star, AlertTriangle, Phone, BarChart3, Video, PenLine, Image, Megaphone, Shield, ChevronDown, HelpCircle } from 'lucide-react';

const phases = [
  {
    n: 1, period: 'Days 1–7', name: 'Onboarding', unlock: 'Course 1',
    why: 'You earn instant access to Course 1 by proving your commitment from day one. This foundational course gives you the knowledge to speak credibly about DeepBio before you post a single word.',
    tasks: [
      ['Post a public "I joined DeepBio" announcement on LinkedIn and Facebook', 'Screenshot of live post'],
      ['Share DeepBio intro in at least 2 Facebook university groups', 'Screenshot of both posts'],
      ['Follow DeepBio on Facebook and LinkedIn, like/share 1 post', 'Screenshot of follow + engagement'],
      ['Invite friends or classmates to follow all DeepBio social channels — all links at bio.link/deepbioltd', 'Screenshots of invites or tags on each platform'],
      ['Submit Ambassador Profile Form (social handles, research profiles)', 'Form submission confirmation'],
    ],
  },
  {
    n: 2, period: 'Month 1–2', name: 'Foundation', unlock: 'Course 2',
    why: 'By Month 2 you have established a consistent online presence. Course 2 rewards this early momentum with deeper content expertise — so your promotions become more informed and generate more genuine enrolments.',
    tasks: [
      ['10 university/community group posts (links required, min 2 per week)', 'Direct URL of each public post'],
      ['10 personal social media posts (public, links required, min 2 per week)', 'Direct post URLs'],
      ['Minimum 5 students enrolled using your Ambassador ID coupon code', 'Admin-side WooCommerce verification'],
      ['4 piece of original content — video, written blog post, or flyer', 'Content link or upload'],
    ],
  },
  {
    n: 3, period: 'Month 3–4', name: 'Activation', unlock: 'Course 3',
    why: 'Organizing your first workshop is the highest-impact action an ambassador can take. Course 3 is reserved for those who have moved beyond social media and brought DeepBio into the physical classroom.',
    tasks: [
      ['12 university/community group posts (cumulative, Months 1–3)', 'Post links'],
      ['12 personal social media posts', 'Post links'],
      ['5 students enrolled using your Ambassador ID coupon code', 'Admin-side WooCommerce verification'],
      ['1 workshop organized at your department (min 15 attendees)', 'Photos, sign-in sheet, event link'],
      ['At least 6 pieces of original content', 'Content links'],
    ],
  },
  {
    n: 4, period: 'Month 5–7', name: 'Growth', unlock: 'Course 4',
    why: 'Sustained performance over 7 months separates serious ambassadors from those who started strong and faded. Course 4 is reserved for those who have demonstrated they are a long-term asset, not just an early joiner.',
    tasks: [
      ['Average monthly score of 60/100 or above across Months 1–6', 'Verified via Master Tracker'],
      ['15 or more cumulative verified enrolments tracked via your Ambassador ID', 'Admin-side WooCommerce verification'],
      ['2nd workshop organized (second semester requirement)', 'Photos, sign-in sheet, event link'],
      ['Content created every month — no missed months in Months 1–6', 'Monthly report record'],
    ],
  },
  {
    n: 5, period: 'Month 8–12', name: 'Mastery', unlock: 'Course 5',
    why: 'Course 5 is the most advanced course and is unlocked only by those who have seen the year through. Ambassadors reaching this milestone are top candidates for the Research Associate invitation and a personal LinkedIn recommendation from the CEO.',
    tasks: [
      ['Average monthly score of 70/100 or above across all reviewed months', 'Verified via Master Tracker'],
      ['25 or more cumulative verified enrolments tracked via your Ambassador ID', 'Admin-side WooCommerce verification'],
      ['Content created every month from Month 1 through Month 8 without fail', 'Monthly report record'],
      ['No active warnings or program violations on record', 'Program coordinator sign-off'],
    ],
  },
];

const faqs = [
  {
    q: 'When will I receive my Ambassador ID?',
    a: 'Your unique Ambassador ID is assigned upon acceptance into the program, before your onboarding tasks begin. You will receive it via WhatsApp along with your onboarding welcome message. Your Ambassador ID doubles as a 10% discount coupon code on our WooCommerce store — students use it at checkout, and every purchase made with your ID is tracked directly to you.',
  },
  {
    q: 'Can I submit proof after the 5th of the month?',
    a: 'No. The 5th is a hard deadline. Late submissions are not reviewed for that month and count as a missed month. If you anticipate difficulty, contact your program coordinator before the deadline.',
  },
  {
    q: 'What counts as a valid university group post?',
    a: 'A post in a Facebook group, LinkedIn group, or university forum that is publicly visible (or verifiable by admin), mentions your Ambassador ID coupon code (so students know they get 10% off using it), and is directly related to DeepBio courses, events, or relevant educational content. Copy-pasted identical posts across groups without personalisation do not count.',
  },
  {
    q: 'Can I run an online workshop instead of in-person?',
    a: 'Yes — online workshops (Zoom, Google Meet, etc.) are accepted, provided they meet the minimum 15-attendee requirement and you can submit a screenshot of the participant list along with the event announcement link and at least 3 screenshots from the session.',
  },
  {
    q: 'What happens if I miss a month?',
    a: 'You will receive a friendly reminder for the first missed month. If you miss two consecutive months without prior communication, it triggers automatic removal from the program. One month of pre-approved leave does not count against you.',
  },
  {
    q: 'How long does course access last once it is unlocked?',
    a: 'All unlocked courses remain accessible for the full one-year program duration. If you are removed from the program, access to all courses is revoked immediately.',
  },
  {
    q: 'Can I submit the same content in multiple months?',
    a: 'No. Posts, videos, and photos must be unique to each submission month. Resubmitting the same content across months is treated as fabrication and may result in removal.',
  },
  {
    q: 'What if I believe my enrolment count in the admin dashboard is incorrect?',
    a: 'The admin-side WooCommerce records are the authoritative source for enrolment verification. All purchases made using your Ambassador ID coupon code are logged automatically. If you believe there is a discrepancy, contact your coordinator within 7 days of receiving your monthly score so it can be reviewed.',
  },
  {
    q: 'Does attendance at the monthly Zoom call affect my score?',
    a: 'Yes — Zoom call attendance is tracked and reflected in your leaderboard standing as a seriousness indicator. While it does not carry dedicated points in the monthly 100-point breakdown, consistent absence signals low engagement to the DeepBio team and will be noted during RA selection and LinkedIn recommendation decisions. Ambassadors who attend regularly are visibly more committed and consistently rank higher on the leaderboard.',
  },
  {
    q: 'Can I publish a research paper through this program?',
    a: 'Not directly during the ambassador year. The Campus Ambassador Program is a bioinformatics skills and leadership development program — its purpose is to build your promotional, communication, and community leadership abilities while deepening your foundational knowledge through the 5 course phases. After completing the full year with strong performance, top ambassadors are invited to join DeepBio as Research Associates (RAs). It is as an RA that you work alongside the DeepBio research team on active projects and have the opportunity to contribute to and co-author publications. The ambassador year is your pathway to that opportunity.',
  },
  {
    q: 'How do I qualify for the LinkedIn recommendation from the CEO?',
    a: 'LinkedIn recommendations are given to top performers at the end of the program year. You need to complete Phase 5 (Course 5 unlock) and maintain an average monthly score of 75/100 or above across all 12 months with no warnings on record.',
  },
  {
    q: 'What is the Research Associate (RA) position?',
    a: 'The RA position is an invitation to join the DeepBio research team after the program year ends. It is the most prestigious outcome of the program and is awarded to a small number of ambassadors who meet all five RA criteria: consistent scores, two workshops, 25+ verified enrolments via Ambassador ID, unbroken content creation, and no violations.',
  },
  {
    q: 'Can final-year or postgraduate students apply?',
    a: 'Yes. The program is open to students from 1st year through final year, as well as MS and MPhil students, across all eligible life science and CSE departments.',
  },
  {
    q: 'What should I do if a student asks something I cannot answer?',
    a: 'Direct them to the appropriate email: academy@deepbioltd.com for course enquiries, services@deepbioltd.com for services, and info@deepbioltd.com for anything else. You are not expected to know everything — just be responsive and point them in the right direction.',
  },
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

export const AmbassadorHandbookPage: React.FC = () => {
  const tocItems = [
    { title: 'Welcome to DeepBio Academy', href: '#welcome' },
    { title: 'About This Program', href: '#about' },
    { title: 'Your Responsibilities', href: '#responsibilities' },
    { title: 'What You Earn', href: '#benefits' },
    { title: 'Course Access: How It Works', href: '#course-access' },
    { title: 'Marketing Guidelines', href: '#marketing' },
    { title: 'Content Creation Guidelines', href: '#content' },
    { title: 'Events & Workshops', href: '#events' },
    { title: 'Monthly Proof Submission', href: '#proof' },
    { title: 'Scoring & Leaderboard', href: '#scoring' },
    { title: "Do's and Don'ts", href: '#rules' },
    { title: 'FAQs', href: '#faqs' },
    { title: 'Support & Contact', href: '#support' },

  ];

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
            Official Guide · 2026–2027
          </div>
          <h1 className="text-6xl md:text-8xl font-bold text-white leading-[0.95] tracking-tight mb-8">
            Campus Ambassador <br />
            <span className="brand-text-gradient">Handbook</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Your complete guide to representing DeepBio at your university — and building your career along the way.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-10 text-sm text-slate-400">
            <span>Course Platform: <a href="https://deepbioacademy.com" className="text-brand-secondary hover:underline">deepbioacademy.com</a></span>
            <span>·</span>
            <span>Website: <a href="https://deepbioltd.com" className="text-brand-secondary hover:underline">deepbioltd.com</a></span>
            <span>·</span>
            <span>Link Tree: <a href="https://bio.link/deepbioltd" className="text-brand-secondary hover:underline">bio.link/deepbioltd</a></span>
          </div>
        </div>
      </section>

      {/* Main Content with Sidebar */}
      <div className="max-w-7xl mx-auto px-6 py-24 flex gap-12">
        {/* Left Sidebar - Table of Contents */}
        <aside className="hidden lg:block w-72 flex-shrink-0">
          <div className="sticky top-24">
            <h2 className="text-xs font-bold text-slate-900 mb-4 uppercase tracking-wider">Table of Contents</h2>
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

          {/* 01 Welcome */}
          <section id="welcome">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-brand-primary rounded-2xl flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-slate-900">Welcome to DeepBio Academy</h2>
            </div>
            <p className="text-slate-600 leading-relaxed mb-6">
              Welcome to one of the most exciting student programs in the biotech and bioinformatics education space in Bangladesh. By joining the DeepBio Ambassador Program, you have taken a step that most students never do — you have chosen to lead, to build, and to grow.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              DeepBio was founded with a single mission: to make world-class life sciences, bioinformatics, and computational biology education accessible to every motivated student in Bangladesh, regardless of their institution or background. We believe the next generation of biotech researchers, data scientists, and innovators are already sitting in university classrooms across this country. We just need to reach them.
            </p>
            <p className="text-slate-700 font-semibold mb-4">That is where you come in.</p>
            <div className="p-6 bg-brand-primary/5 border-l-4 border-brand-primary rounded-r-2xl mb-8">
              <p className="text-slate-700 font-semibold mb-2">What DeepBio Offers</p>
              <ul className="space-y-2 text-slate-600">
                {[
                  'Bioinformatics and Computational Biology',
                  'Python and R programming for Life Sciences',
                  'AI in Biology',
                  'Research Skills, Scientific Writing, and Career Development',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-slate-600 leading-relaxed">
              Our programs are designed for students in Life Sciences — exactly the disciplines most underserved by existing Bangladeshi education platforms. This handbook is your complete guide. Read it fully before you begin.
            </p>
          </section>

          {/* 02 About This Program */}
          <section id="about">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-brand-secondary rounded-2xl flex items-center justify-center flex-shrink-0">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-slate-900">About This Program</h2>
            </div>
            <p className="text-slate-600 leading-relaxed mb-8">
              The DeepBio Campus Ambassador Program is a one-year structured program designed for motivated students who want to make a real contribution to bioinformatics research and education in Bangladesh while accelerating their own academic and professional growth.
            </p>

            {/* Program Duration Table */}
            <h3 className="text-xl font-bold text-slate-900 mb-4">Program Duration</h3>
            <div className="rounded-2xl border border-slate-200 overflow-hidden mb-10">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="text-left px-6 py-3 font-semibold text-slate-700">Detail</th>
                    <th className="text-left px-6 py-3 font-semibold text-slate-700">Information</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    ['Program period', 'One full year'],
                    ['Monthly commitment', 'Approximately 8–10 hours per month'],
                    ['Reporting deadline', '5th of every month'],
                    ['Review turnaround', 'Within 7 working days of submission'],
                    ['Certificate issued', 'At end of program'],
                  ].map(([detail, info], i) => (
                    <tr key={i} className="hover:bg-slate-50">
                      <td className="px-6 py-4 text-slate-700 font-medium">{detail}</td>
                      <td className="px-6 py-4 text-slate-600">{info}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Who Can Apply */}
            <h3 className="text-xl font-bold text-slate-900 mb-4">Who Can Apply</h3>
            <p className="text-slate-600 mb-4">
              Open to students currently enrolled at any Bangladeshi university — from 1st year to final year, as well as MS and MPhil students. Eligible departments include:
            </p>
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {[
                'Biology and Botany',
                'Pharmacy and Pharmaceutical Sciences',
                'Microbiology',
                'Biochemistry and Molecular Biology',
                'Genetics and Biotechnology',
                'Bioinformatics',
                'Computer Science and Engineering (CSE)',
                'Any life science background',
              ].map((dept, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
                  <CheckCircle className="w-4 h-4 text-brand-primary flex-shrink-0" />
                  <span className="text-sm text-slate-700">{dept}</span>
                </div>
              ))}
            </div>

            {/* Philosophy */}
            <div className="p-6 bg-amber-50 border-l-4 border-amber-400 rounded-r-2xl">
              <p className="text-slate-700 font-semibold mb-2">Program Philosophy</p>
              <p className="text-slate-600">
                This is not a passive sponsorship. DeepBio does not give free course access in exchange for nothing. This is a working program where you earn your benefits through real, verifiable contributions to your university community. The skills you build as an ambassador — communication, event organization, content creation, community leadership — are exactly the skills that will set you apart in your career.
              </p>
            </div>
          </section>

          {/* 03 Responsibilities */}
          <section id="responsibilities">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-brand-primary rounded-2xl flex items-center justify-center flex-shrink-0">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-slate-900">Your Responsibilities</h2>
            </div>
            <p className="text-slate-600 leading-relaxed mb-8">
              As a DeepBio Campus Ambassador, your work falls into four core areas. All four are required. You may choose how much effort you put into each, but there are minimum requirements for all of them.
            </p>
            <div className="space-y-6">

              {/* Area 1 */}
              <div className="p-8 bg-white rounded-2xl border border-slate-200">
                <h3 className="text-2xl font-bold text-slate-900 mb-2 flex items-center gap-3">
                  <Megaphone className="w-6 h-6 text-brand-primary" />
                  Area 1 — Marketing & Promotion
                </h3>
                <p className="text-slate-500 text-sm mb-4">You are the voice of DeepBio at your university.</p>
                <ul className="space-y-3 text-slate-600">
                  {[
                    'University group posts: Share DeepBio course announcements in Facebook groups, club forums, and LinkedIn groups. Minimum 10 posts per month.',
                    'Personal social media: Post about DeepBio on your own Facebook or LinkedIn profile. Minimum 10 posts per month.',
                    'Ambassador ID promotion: Share your unique Ambassador ID coupon code in all promotions. Students enter it at checkout for a 10% discount, and every purchase is tracked directly to you in WooCommerce.',
                    'Physical promotion: Put up flyers or posters on department notice boards when relevant.',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-primary mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Area 2 */}
              <div className="p-8 bg-white rounded-2xl border border-slate-200">
                <h3 className="text-2xl font-bold text-slate-900 mb-2 flex items-center gap-3">
                  <PenLine className="w-6 h-6 text-brand-primary" />
                  Area 2 — Content Creation
                </h3>
                <p className="text-slate-500 text-sm mb-4">Create at least one piece of original content each month. Choose from:</p>
                <ul className="space-y-3 text-slate-600">
                  {[
                    'Video (recommended): A 60–90 second video about your learning journey, why you chose DeepBio, or an intro to a topic you are studying.',
                    'Written post: A 200+ word article about bioinformatics, computational biology, biotech careers, or your DeepBio experience.',
                    'Flyer or infographic: A designed promotional image shared in your personal profile (Facebook, LinkedIn, and all DeepBio channels). Must include DeepBio branding.',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-primary mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Area 3 */}
              <div className="p-8 bg-white rounded-2xl border border-slate-200">
                <h3 className="text-2xl font-bold text-slate-900 mb-2 flex items-center gap-3">
                  <Calendar className="w-6 h-6 text-brand-primary" />
                  Area 3 — Events & Workshops
                </h3>
                <p className="text-slate-500 text-sm mb-4">Organize at least one free introductory workshop per semester at your department.</p>
                <ul className="space-y-3 text-slate-600">
                  {[
                    'The workshop can be a seminar, a hands-on session, or a career talk — if it introduces students to DeepBio or to the fields it teaches.',
                    'Minimum attendance: 15–20 students.',
                    'You must submit at least 3 event photos and an attendance record.',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-primary mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Area 4 */}
              <div className="p-8 bg-white rounded-2xl border border-slate-200">
                <h3 className="text-2xl font-bold text-slate-900 mb-2 flex items-center gap-3">
                  <Users className="w-6 h-6 text-brand-primary" />
                  Area 4 — Student Support
                </h3>
                <p className="text-slate-500 text-sm mb-4">Act as the first point of contact for students who have questions.</p>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-primary mt-0.5 flex-shrink-0" />
                    <span>Be responsive and direct students to the right channels. You don't need to know everything — just point them to the right place.</span>
                  </li>
                </ul>
                <div className="mt-4 grid sm:grid-cols-3 gap-3">
                  {[
                    { label: 'Course Enquiries', email: 'academy@deepbioltd.com' },
                    { label: 'Services Enquiries', email: 'services@deepbioltd.com' },
                    { label: 'General Enquiries', email: 'info@deepbioltd.com' },
                  ].map((c, i) => (
                    <div key={i} className="p-3 bg-slate-50 rounded-xl text-sm">
                      <p className="font-semibold text-slate-700 mb-1">{c.label}</p>
                      <a href={`mailto:${c.email}`} className="text-brand-primary hover:underline break-all">{c.email}</a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* 04 Benefits */}
          <section id="benefits">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-brand-secondary rounded-2xl flex items-center justify-center flex-shrink-0">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-slate-900">What You Earn</h2>
            </div>
            <p className="text-slate-600 leading-relaxed mb-8">
              Your benefits are earned progressively. The more you contribute, the more you receive. Nothing is given upfront — everything is unlocked by completing verified milestones.
            </p>
            <div className="rounded-2xl border border-slate-200 overflow-hidden mb-8">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="text-left px-6 py-3 font-semibold text-slate-700">Benefit</th>
                    <th className="text-left px-6 py-3 font-semibold text-slate-700">Detail</th>
                    <th className="text-left px-6 py-3 font-semibold text-slate-700">When You Get It</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    ['5 DeepBio Courses', 'Full access for 1 year (worth BDT 40,000+)', 'Unlocked in stages (see Section 05)'],
                    ['Ambassador Certificate', 'Official certificate signed by CEO', 'End of program'],
                    ['LinkedIn Recommendation', 'Personal recommendation from CEO', 'End of program (top performers)'],
                    ['Research Associate (RA) Invite', 'Join DeepBio research team', 'Top performers only, year-end'],
                    ['Star Ambassador Title', 'Monthly recognition + special badge on certificate', 'Monthly top performers'],
                  ].map(([benefit, detail, when], i) => (
                    <tr key={i} className="hover:bg-slate-50">
                      <td className="px-6 py-4 font-semibold text-slate-800">{benefit}</td>
                      <td className="px-6 py-4 text-slate-600">{detail}</td>
                      <td className="px-6 py-4 text-slate-600">{when}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-6 bg-brand-primary/5 border-l-4 border-brand-primary rounded-r-2xl">
              <p className="text-slate-700 font-semibold mb-2">What Makes an Research Assistant Invitation</p>
              <p className="text-slate-600 mb-4">The Research Associate invitation is the most prestigious outcome. It is awarded to ambassadors who demonstrate all of the following by year-end:</p>
              <ul className="space-y-2 text-slate-600">
                {[
                  'Consistent performance across all 12 months (average score 75/100 or above)',
                  'At least 2 workshops organized during the year',
                  '25 or more verified enrolments tracked via your Ambassador ID coupon code',
                  'Original content creation every single month without fail',
                  'No warnings or program violations on record',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Star className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* 05 Course Access */}
          <section id="course-access">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-brand-primary rounded-2xl flex items-center justify-center flex-shrink-0">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-slate-900">Course Access: How It Works</h2>
            </div>
            <p className="text-slate-600 leading-relaxed mb-10">
              Over one year you unlock all 5 DeepBio courses across 5 progressive phases. Each phase has a clear time window, specific tasks, and a reason — so you always know what you are working toward and why each milestone matters.
            </p>

            <div className="space-y-5">
              {phases.map((phase) => (
                <div key={phase.n} className="rounded-2xl border border-slate-200 overflow-hidden">
                  {/* Header */}
                  <div className="bg-brand-dark px-8 py-5 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-brand-primary rounded-xl flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-lg">{phase.n}</span>
                      </div>
                      <div>
                        <p className="text-white/75 text-xs font-semibold uppercase tracking-widest">{phase.period}</p>
                        <h3 className="text-white text-xl font-bold leading-tight">{phase.name}</h3>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-white/75 text-xs uppercase tracking-wider mb-0.5">Unlocks</p>
                      <span className="inline-block px-3 py-1 bg-brand-primary rounded-lg text-white font-bold text-sm">{phase.unlock}</span>
                    </div>
                  </div>
                  {/* Why it matters */}
                  <div className="bg-slate-50 px-8 py-4 border-b border-slate-200">
                    <p className="text-sm text-slate-600"><span className="font-semibold text-slate-800">Why this matters: </span>{phase.why}</p>
                  </div>
                  {/* Tasks */}
                  <div className="px-8 py-5 bg-white">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Tasks to Complete</p>
                    <div className="space-y-3">
                      {phase.tasks.map(([task, submit], i) => (
                        <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50">
                          <CheckCircle className="w-4 h-4 text-brand-primary flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-sm text-slate-700">{task}</p>
                            <p className="text-xs text-slate-400 mt-0.5">Submit: {submit}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}

              <div className="p-5 bg-amber-50 border border-amber-200 rounded-2xl text-sm text-slate-700">
                <AlertTriangle className="w-4 h-4 text-amber-500 inline mr-2" />
                <strong>Missed a phase deadline?</strong> You will receive one warning and a 7-day extension (Phases 1–4). Phase 5 has no extension — it requires sustained consistency across the full year.
              </div>
            </div>
          </section>

          {/* 06 Marketing Guidelines */}
          <section id="marketing">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-brand-secondary rounded-2xl flex items-center justify-center flex-shrink-0">
                <Megaphone className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-slate-900">Marketing Guidelines</h2>
            </div>
            <p className="text-slate-600 leading-relaxed mb-8">
              Good marketing is honest, helpful, and consistent. Your goal is not to spam — it is to genuinely help your fellow students discover something valuable.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mb-4">What to Post</h3>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                { title: 'Course Announcements', desc: 'New course launches, enrolment deadlines, discount windows' },
                { title: 'Career Information', desc: 'Why bioinformatics matters, job opportunities, research paths' },
                { title: 'Your Own Experience', desc: 'What you are learning, what surprised you, what you found useful' },
                { title: 'Event Promotions', desc: 'Announce your upcoming workshops or study sessions' },
                { title: 'Student Testimonials', desc: 'Share feedback from classmates who enrolled (with their permission)' },
              ].map((item, i) => (
                <div key={i} className="p-5 bg-slate-50 rounded-2xl">
                  <h4 className="font-semibold text-slate-800 mb-1">{item.title}</h4>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-4">Minimum Monthly Requirements</h3>
            <div className="rounded-2xl border border-slate-200 overflow-hidden mb-8">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="text-left px-6 py-3 font-semibold text-slate-700">Activity</th>
                    <th className="text-left px-6 py-3 font-semibold text-slate-700">Minimum Per Month</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    ['University forum/group posts', '4 posts (links required)'],
                    ['Personal Facebook or LinkedIn posts', '2 posts (links required)'],
                    ['Ambassador ID mentioned in posts', 'Every promotional post must include your Ambassador ID so students know they get 10% off'],
                  ].map(([activity, min], i) => (
                    <tr key={i} className="hover:bg-slate-50">
                      <td className="px-6 py-4 text-slate-700">{activity}</td>
                      <td className="px-6 py-4 text-slate-600">{min}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-4">What Not to Do</h3>
            <ul className="space-y-3 text-slate-600">
              {[
                'Do not copy-paste the same message across groups without personalisation — this gets ignored and may get you removed from groups.',
                'Do not make claims about courses that are not accurate — always stick to what DeepBio actually offers.',
                'Do not post DeepBio content on pages or groups unrelated to science, education, or careers.',
                'Do not ask people to use your Ambassador ID without genuine interest in enrolling — artificial usage is detectable and will not be counted.',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 p-4 bg-red-50 rounded-xl border border-red-100">
                  <AlertTriangle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* 07 Content Creation */}
          <section id="content">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-brand-primary rounded-2xl flex items-center justify-center flex-shrink-0">
                <Video className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-slate-900">Content Creation Guidelines</h2>
            </div>
            <p className="text-slate-600 leading-relaxed mb-8">
              Content creation is what separates a great ambassador from an average one. When you create original content, you are building something that reaches people even when you are not in the room.
            </p>
            <div className="space-y-6">
              <div className="p-8 bg-white rounded-2xl border border-slate-200">
                <div className="flex items-center gap-3 mb-4">
                  <Video className="w-6 h-6 text-brand-primary" />
                  <h3 className="text-xl font-bold text-slate-900">Area 1 — Video Content <span className="text-sm font-normal text-brand-primary ml-2">(Recommended)</span></h3>
                </div>
                <p className="text-slate-600 mb-3">A 60–90 second video posted on Facebook, LinkedIn, or YouTube. Ideas include:</p>
                <ul className="space-y-2 text-slate-600 text-sm">
                  {[
                    'Why I chose to study bioinformatics',
                    "What I learned from DeepBio's Python for Biology course",
                    '3 careers you can build with a biology degree + coding skills',
                    'What is genomics? (explained in 60 seconds)',
                  ].map((idea, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-brand-primary flex-shrink-0" />
                      {idea}
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-slate-500 mt-4 italic">You do not need professional equipment. A smartphone, good lighting, and a quiet room are enough.</p>
              </div>

              <div className="p-8 bg-white rounded-2xl border border-slate-200">
                <div className="flex items-center gap-3 mb-4">
                  <PenLine className="w-6 h-6 text-brand-primary" />
                  <h3 className="text-xl font-bold text-slate-900">Area 2 — Written Blog Article</h3>
                </div>
                <p className="text-slate-600 mb-3">A 200+ word post on LinkedIn or a personal blog. Ideas include:</p>
                <ul className="space-y-2 text-slate-600 text-sm">
                  {[
                    'My experience with DeepBio Academy — what I liked, what I learned',
                    'How to start a career in bioinformatics from Bangladesh',
                    'Why every pharmacy student should learn Python',
                    'My roadmap for getting into computational biology research',
                  ].map((idea, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-brand-primary flex-shrink-0" />
                      {idea}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-8 bg-white rounded-2xl border border-slate-200">
                <div className="flex items-center gap-3 mb-4">
                  <Image className="w-6 h-6 text-brand-primary" />
                  <h3 className="text-xl font-bold text-slate-900">Area 3 — Flyer or Infographic</h3>
                </div>
                <p className="text-slate-600 mb-3">A designed image created in Canva or similar tools, shared in at least 3 university groups. Must include:</p>
                <ul className="space-y-2 text-slate-600 text-sm">
                  {[
                    'DeepBio Academy name and logo',
                    'Course name or event being promoted',
                    'Your Ambassador ID coupon code (so students know they get 10% off at checkout)',
                    'A clear call to action (enrol now, register here, etc.)',
                  ].map((req, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-brand-primary flex-shrink-0" />
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 p-5 bg-brand-primary/5 border border-brand-primary/20 rounded-2xl text-sm text-slate-700">
              <Star className="w-4 h-4 text-amber-500 inline mr-2" />
              <strong>Tip:</strong> Ambassadors who post video content consistently tend to score 15–20% higher on their monthly evaluations and generate more enrolments via their Ambassador ID from their personal network.
            </div>
          </section>

          {/* 08 Events & Workshops */}
          <section id="events">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-brand-secondary rounded-2xl flex items-center justify-center flex-shrink-0">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-slate-900">Events & Workshops</h2>
            </div>
            <p className="text-slate-600 leading-relaxed mb-8">
              Organizing a workshop is the highest-impact activity you can do as an ambassador. A single 90-minute session at your department can introduce 30–50 students to bioinformatics and generate more genuine interest than weeks of social media posting.
            </p>

            <div className="p-6 bg-brand-primary/5 border-l-4 border-brand-primary rounded-r-2xl mb-8">
              <p className="font-semibold text-slate-800 mb-2">Minimum Workshop Requirement</p>
              <p className="text-slate-600">You must organize at least <strong>one workshop per semester</strong> (minimum two workshops over the full program year). Workshops must be free for all attendees, held at your university, attended by a minimum of 15 students, and focused on an introductory topic related to bioinformatics, biotech, or DeepBio courses.</p>
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-4">Workshop Ideas</h3>
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {[
                'Introduction to Bioinformatics — What is it and why does it matter?',
                'Getting Started with Python for Biology Students',
                'Career Paths in Genomics and Computational Biology',
                'How to Start Research in Bioinformatics from Bangladesh',
                'Live demo session: Using NCBI, BLAST, or sequence analysis tools',
                'AlphaFold and the Future of Protein Structure Prediction',
                'R for Bioinformatics — Data Analysis for Life Science Students',
              ].map((idea, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl">
                  <span className="w-6 h-6 bg-brand-primary/10 text-brand-primary rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0">{i + 1}</span>
                  <span className="text-sm text-slate-700">{idea}</span>
                </div>
              ))}
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-4">How to Organize a Workshop</h3>
            <div className="space-y-4 mb-8">
              {[
                'Choose a date and book a venue (seminar room, classroom, or department hall)',
                'Announce the event at least 7 days in advance via WhatsApp, Facebook, and physical posters',
                'Prepare a 45–90 minute session plan — you can use DeepBio introductory materials',
                'On the day, collect a sign-in sheet (name + student ID + contact)',
                "Take at least 5 photos during the event — include at least one with a visible 'DeepBio Academy' sign or banner",
                'Submit all proof in your Monthly Report Form within 7 days of the event',
              ].map((step, i) => (
                <div key={i} className="flex gap-4 items-start p-4 bg-white rounded-xl border border-slate-200">
                  <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center text-white font-bold text-sm flex-shrink-0">{i + 1}</div>
                  <p className="text-slate-600 text-sm leading-relaxed">{step}</p>
                </div>
              ))}
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-4">What to Submit After a Workshop</h3>
            <div className="rounded-2xl border border-slate-200 overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="text-left px-6 py-3 font-semibold text-slate-700">Proof Required</th>
                    <th className="text-left px-6 py-3 font-semibold text-slate-700">Details</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    ['Event announcement post link', 'The Facebook or WhatsApp post promoting the event'],
                    ['Minimum 3 event photos', 'Upload to Google Drive, submit link (anyone with link access)'],
                    ['Sign-in sheet photo', 'Shows attendee names and count'],
                    ['Event date and venue', 'Written in the Monthly Report Form'],
                    ['Number of attendees', 'Self-reported, verified against sign-in sheet'],
                  ].map(([proof, detail], i) => (
                    <tr key={i} className="hover:bg-slate-50">
                      <td className="px-6 py-4 font-medium text-slate-700">{proof}</td>
                      <td className="px-6 py-4 text-slate-600">{detail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* 09 Monthly Proof Submission */}
          <section id="proof">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-brand-primary rounded-2xl flex items-center justify-center flex-shrink-0">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-slate-900">Monthly Proof Submission</h2>
            </div>
            <div className="p-6 bg-red-50 border-l-4 border-red-400 rounded-r-2xl mb-8">
              <p className="font-semibold text-slate-800">Submission Deadline: 5th of every month</p>
              <p className="text-slate-600 text-sm mt-1">Late submissions will not be reviewed for that month and will count as a missed month. No submission means no review, which means no course unlock and no score for that month.</p>
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-4">What You Must Submit</h3>
            <div className="rounded-2xl border border-slate-200 overflow-hidden mb-8">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="text-left px-6 py-3 font-semibold text-slate-700">Proof Type</th>
                    <th className="text-left px-6 py-3 font-semibold text-slate-700">How to Submit</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    ['Facebook group post links', 'Paste direct URL of each public post'],
                    ['Personal social media post links', 'Paste direct URL of each post (must be public)'],
                    ['WhatsApp group post proof', 'Upload screenshot to Google Drive, paste shareable link'],
                    ['Ambassador ID enrolment count', 'Verified automatically via WooCommerce — no screenshot required; contact coordinator if you believe the count is incorrect'],
                    ['Video content link', 'Paste URL of Facebook / LinkedIn / YouTube video'],
                    ['Written post link', 'Paste URL (LinkedIn article, blog, etc.)'],
                    ['Event photos', 'Upload folder to Google Drive, paste shareable folder link'],
                    ['Event announcement link', 'Paste URL of the promotion post'],
                  ].map(([type, how], i) => (
                    <tr key={i} className="hover:bg-slate-50">
                      <td className="px-6 py-4 font-medium text-slate-700">{type}</td>
                      <td className="px-6 py-4 text-slate-600">{how}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-4">What Counts as Valid Proof</h3>
            <div className="space-y-3 mb-8">
              {[
                { title: 'Posts must be public', desc: 'Private posts or posts in closed groups that cannot be verified will not be counted.' },
                { title: 'Screenshots must show full context', desc: 'Group name, your name, post content, and date must all be visible in one frame.' },
                { title: "Google Drive links must be set to 'anyone with link'", desc: 'If we cannot open your link, we cannot verify it — and it will not be counted.' },
                { title: 'Dates must match the submission month', desc: 'Posts from previous months cannot be resubmitted.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-4 bg-slate-50 rounded-xl">
                  <CheckCircle className="w-5 h-5 text-brand-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-800">{item.title}</p>
                    <p className="text-sm text-slate-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 bg-red-50 border border-red-200 rounded-2xl text-sm">
              <Shield className="w-4 h-4 text-red-500 inline mr-2" />
              <strong className="text-red-700">Zero-tolerance policy:</strong>
              <span className="text-slate-700"> Submitting falsified, edited, or fabricated proof will result in immediate removal from the program with no appeal. This includes edited screenshots, fake post links, or re-using the same content across months.</span>
            </div>
          </section>

          {/* 10 Scoring & Leaderboard */}
          <section id="scoring">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-brand-secondary rounded-2xl flex items-center justify-center flex-shrink-0">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-slate-900">Scoring & Leaderboard</h2>
            </div>
            <p className="text-slate-600 leading-relaxed mb-8">
              Each monthly submission is scored out of 100 points. Your score determines your leaderboard ranking, Star Ambassador eligibility, and ongoing course access.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mb-4">Monthly Scoring Breakdown</h3>
            <div className="rounded-2xl border border-slate-200 overflow-hidden mb-8">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="text-left px-6 py-3 font-semibold text-slate-700">Activity</th>
                    <th className="text-left px-6 py-3 font-semibold text-slate-700">Points Available</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    ['University group/community enagagement posts', '25 points'],
                    ['Personal social media posts', '15 points'],
                    ['Enrolments tracked via Ambassador ID (verified via WooCommerce)', '20 points'],
                    ['Original content created (video / written / flyer)', '25 points'],
                    ['Workshop or event organized', '15 points'],
                  ].map(([activity, points], i) => (
                    <tr key={i} className="hover:bg-slate-50">
                      <td className="px-6 py-4 text-slate-700">{activity}</td>
                      <td className="px-6 py-4 font-semibold text-brand-primary">{points}</td>
                    </tr>
                  ))}
                  <tr className="bg-brand-primary/5">
                    <td className="px-6 py-4 font-bold text-slate-900">Total</td>
                    <td className="px-6 py-4 font-bold text-brand-primary">100 points</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-4">Score Tiers</h3>
            <div className="space-y-3 mb-8">
              {[
                { range: '80–100 points', status: 'Star Ambassador', desc: 'Eligible for monthly recognition and year-end RA consideration', color: 'bg-green-50 border-green-200', badge: 'bg-green-100 text-green-700' },
                { range: '60–79 points', status: 'Active', desc: 'Good standing, all course access maintained', color: 'bg-blue-50 border-blue-200', badge: 'bg-blue-100 text-blue-700' },
                { range: '40–59 points', status: 'Warning', desc: 'Written notice sent, must improve next month', color: 'bg-amber-50 border-amber-200', badge: 'bg-amber-100 text-amber-700' },
                { range: 'Below 40 points', status: 'At Risk', desc: 'Second consecutive month below 40 leads to removal', color: 'bg-red-50 border-red-200', badge: 'bg-red-100 text-red-700' },
              ].map((tier, i) => (
                <div key={i} className={`flex items-center gap-4 p-4 rounded-xl border ${tier.color}`}>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${tier.badge} flex-shrink-0`}>{tier.range}</span>
                  <div>
                    <span className="font-semibold text-slate-800">{tier.status}: </span>
                    <span className="text-sm text-slate-600">{tier.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-4">Ambassador ID Enrolment Scoring Detail</h3>
            <p className="text-sm text-slate-600 mb-4">Enrolments are tracked automatically in WooCommerce when a student uses your Ambassador ID coupon code at checkout. No referral links or third-party trackers are used.</p>
            <div className="rounded-2xl border border-slate-200 overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="text-left px-6 py-3 font-semibold text-slate-700">Enrolments via Ambassador ID</th>
                    <th className="text-left px-6 py-3 font-semibold text-slate-700">Points</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    ['0 enrolments', '0–5 points'],
                    ['1–2 enrolments', '6–12 points'],
                    ['3–4 enrolments', '13–17 points'],
                    ['5+ enrolments', '18–20 points'],
                  ].map(([perf, pts], i) => (
                    <tr key={i} className="hover:bg-slate-50">
                      <td className="px-6 py-4 text-slate-700">{perf}</td>
                      <td className="px-6 py-4 font-semibold text-brand-primary">{pts}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* 11 Do's and Don'ts */}
          <section id="rules">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-brand-primary rounded-2xl flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-slate-900">Do's and Don'ts</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="p-6 bg-green-50 rounded-2xl border border-green-100">
                <h3 className="text-lg font-bold text-green-800 mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" /> Always Do
                </h3>
                <ul className="space-y-3">
                  {[
                    'Submit your Monthly Report Form by the 5th of every month without fail',
                    'Make all promotional posts public so they can be verified',
                    'Include your Ambassador ID coupon code in every promotional post — students use it at checkout for 10% off, and every purchase is tracked to you automatically',
                    'Take proper screenshots showing group name, your name, content, and date',
                    "Set all Google Drive links to 'anyone with link' before submitting",
                    'Respond to student questions about DeepBio honestly and direct complex queries to info@deepbioltd.com',
                    'Notify your program coordinator in advance if you face a genuine difficulty completing tasks in a given month',
                    'Represent DeepBio professionally in all public communications',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-green-800">
                      <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 bg-red-50 rounded-2xl border border-red-100">
                <h3 className="text-lg font-bold text-red-800 mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" /> Never Do
                </h3>
                <ul className="space-y-3">
                  {[
                    'Submit fake, edited, or fabricated screenshots or post links — immediate grounds for removal',
                    'Resubmit the same post links or photos across multiple months',
                    'Make false claims about DeepBio courses, pricing, or outcomes',
                    'Share DeepBio content in groups unrelated to science, education, or student communities',
                    'Encourage students to use your Ambassador ID without genuine enrolment intent — coupon misuse is detectable via WooCommerce and will not be counted',
                    'Publicly criticise DeepBio Academy or its instructors on social media',
                    'Share confidential program information outside the program',
                    'Miss 2 consecutive months without prior communication — triggers automatic removal',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-red-800">
                      <AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-4">Consequences at a Glance</h3>
            <div className="rounded-2xl border border-slate-200 overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="text-left px-6 py-3 font-semibold text-slate-700">Violation</th>
                    <th className="text-left px-6 py-3 font-semibold text-slate-700">First Occurrence</th>
                    <th className="text-left px-6 py-3 font-semibold text-slate-700">Repeat Occurrence</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    ['Missing monthly submission', 'Friendly reminder', 'Warning issued'],
                    ['Score below 40 two months in a row', 'Warning + 7-day plan', 'Removal from program'],
                    ['Fake or fabricated proof submitted', 'Immediate removal', 'Permanent ban'],
                    ['Missing workshop for full semester', 'Warning', 'Course access paused'],
                    ['Public misrepresentation of DeepBio', 'Warning + correction required', 'Removal from program'],
                  ].map(([violation, first, repeat], i) => (
                    <tr key={i} className="hover:bg-slate-50">
                      <td className="px-6 py-4 text-slate-700">{violation}</td>
                      <td className="px-6 py-4 text-amber-700 font-medium">{first}</td>
                      <td className="px-6 py-4 text-red-700 font-medium">{repeat}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* 12 FAQs */}
          <section id="faqs">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-brand-primary rounded-2xl flex items-center justify-center flex-shrink-0">
                <HelpCircle className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-slate-900">Frequently Asked Questions</h2>
            </div>
            <p className="text-slate-600 leading-relaxed mb-8">
              Answers to the questions we hear most often. If yours isn't here, reach out via the contact section below.
            </p>
            <FaqList />
          </section>

          {/* 13 Support & Contact */}
          <section id="support">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-brand-secondary rounded-2xl flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-slate-900">Support & Contact</h2>
            </div>
            <p className="text-slate-600 leading-relaxed mb-8">
              We want you to succeed. If you are struggling with any part of the program — whether it is finding time, dealing with low engagement, or simply not knowing what to post — reach out. We will help.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                { label: 'General Enquiries', value: 'info@deepbioltd.com', href: 'mailto:info@deepbioltd.com' },
                { label: 'Program Website', value: 'deepbioltd.com/ambassadors', href: 'https://deepbioltd.com/ambassadors' },
                { label: 'Course Platform', value: 'deepbioacademy.com', href: 'https://deepbioacademy.com' },
                { label: 'Ambassador WhatsApp Group', value: 'Link shared upon onboarding', href: null },
              ].map((c, i) => (
                <div key={i} className="p-5 bg-slate-50 rounded-2xl">
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">{c.label}</p>
                  {c.href ? (
                    <a href={c.href} className="text-brand-primary hover:underline font-medium">{c.value}</a>
                  ) : (
                    <p className="text-slate-700 font-medium">{c.value}</p>
                  )}
                </div>
              ))}
            </div>

            <div className="p-6 bg-brand-primary/5 border-l-4 border-brand-primary rounded-r-2xl mb-6">
              <p className="font-semibold text-slate-800 mb-2">Monthly Ambassador Call</p>
              <p className="text-slate-600">
                Every month, DeepBio hosts a 30-minute Zoom call for all active ambassadors on the <strong>last Friday of every month</strong>. Use this to ask questions, hear about upcoming courses before they are announced publicly, learn what is working from other ambassadors, and get proof submission or scoring queries resolved. <strong>Attendance is tracked</strong> — consistent presence signals seriousness and is factored into leaderboard standing and RA selection. Ambassadors who attend every call are visibly more engaged and rank higher.
              </p>
            </div>

            <div className="p-6 bg-slate-50 rounded-2xl">
              <p className="font-semibold text-slate-800 mb-2">If You Need to Take a Break</p>
              <p className="text-slate-600 text-sm">
                Life happens. If you are facing exams, a family situation, or any other genuine difficulty, contact your program coordinator <strong>before</strong> your submission deadline — not after. One month of approved leave will not count against you. Disappearing without notice is what leads to warnings and removal.
              </p>
            </div>
          </section>

        </div>
      </div>

      {/* Closing Banner */}
      <section className="py-24 bg-brand-dark text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Thank You for Being Part of DeepBio</h2>
          <p className="text-xl text-slate-300 mb-4">
            You are not just promoting courses — you are building the next generation of biotech talent in Bangladesh. We are proud to have you with us.
          </p>
          <p className="text-slate-400 mb-10">Questions? Our team is here to help you succeed.</p>
          <a
            href="mailto:info@deepbioltd.com?subject=Ambassador Support Request"
            className="inline-flex items-center gap-3 px-12 py-6 bg-brand-primary hover:bg-[#1a4b75] text-white rounded-2xl font-bold transition-all shadow-[0_20px_40px_rgba(32,94,146,0.3)] hover:-translate-y-1 text-lg"
          >
            Contact Ambassador Team
          </a>
        </div>
      </section>
    </div>
  );
};
