'use client';

import React, { useState } from 'react';
import { 
  Rocket, 
  MapPin, 
  Calendar, 
  Clock, 
  Globe, 
  Briefcase, 
  GraduationCap, 
  Users, 
  Award, 
  CheckCircle2, 
  ArrowRight,
  ChevronRight,
  Star,
  BookOpen,
  MessageSquare,
  ChevronDown,
  Linkedin,
  Facebook,
  ExternalLink,
  Terminal,
  Trophy,
  Target,
  Zap,
  Shield
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function CareerGuidePage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const focusAreas = [
    {
      icon: Briefcase,
      title: 'Industry Insights',
      description: 'Explore the rapidly evolving landscape of bioinformatics in both National and International markets. Learn about role expectations, salary trends, and core competencies required to thrive in biotech and pharma companies.',
      tags: ['National Markets', 'International Markets', 'Role Expectations', 'Salary Trends', 'Skill Gaps', 'Networking'],
      color: 'brand-primary'
    },
    {
      icon: GraduationCap,
      title: 'Academic Excellence',
      description: 'Master the application process for MS and PhD programs globally. We discuss finding the right mentor, drafting compelling research proposals, and securing fully funded scholarships in top-tier research institutions.',
      tags: ['Global MS/PhD', 'Mentor Finding', 'CV/Resume', 'SOP/Motivation', 'Funded Research', 'Proposal Writing'],
      color: 'brand-secondary'
    }
  ];

  const outcomes = [
    {
      icon: Target,
      title: 'Professional Guidance',
      description: 'Gain a clear, actionable roadmap for your career in bioinformatics, tailored to current market demands.'
    },
    {
      icon: Users,
      title: 'Professional Networking',
      description: 'Connect with industry professionals and research scholars from across the country in our community.'
    },
    {
      icon: Star,
      title: 'Expert Insights',
      description: 'Access a comprehensive arsenal of professional tools, templates, and advanced learning resources.'
    }
  ];

  const scheduleData = [
    {
      type: "Welcome",
      time: "9:00 – 9:10 PM",
      event: "Opening Remarks & Program Overview",
      format: "Introduction"
    },
    {
      type: "Industry",
      time: "9:10 – 9:50 PM", 
      event: "Industry Guide: National & International Markets",
      format: "Expert Presentation"
    },
    {
      type: "Research",
      time: "9:50 – 10:30 PM",
      event: "Academic Excellence: Global MS & PhD Pathways",
      format: "Guidelines & Strategies"
    },
    {
      type: "Q&A",
      time: "10:30 – 10:55 PM",
      event: "Open Discussion & Career Consultations",
      format: "Interactive Session"
    },
    {
      type: "Closing",
      time: "10:55 – 11:00 PM",
      event: "Closing Remarks & Networking Links",
      format: "Wrap-up"
    }
  ];

  const speakers = [
    {
      name: "Md. Jubayer Hossain",
      title: "Founder & CEO, DeepBio Limited / CHIRAL Bangladesh",
      bio: "Mr. Hossain is a founder of DeepBio Limited and CHIRAL Bangladesh, leading initiatives in AI-driven healthcare solutions and bioinformatics education.",
      image: "/images/career-guide/speakers/jubayer.png",
      linkedin: "https://www.linkedin.com/in/hossainmj/"
    },
    {
      name: "Muhibullah Shahjan",
      title: "Research Assistant, Big Bioinformatics Lab, CHIRAL",
      bio: "Mr. Shahjan is a Research Assistant at Big Bioinformatics Lab, focusing on bioinformatics research and data analysis to support healthcare innovations.",
      image: "/images/career-guide/speakers/muhib.png",
      linkedin: "https://www.linkedin.com/in/muhibullah-shahjahan/"
    },
    {
      name: "Musab Shahriar",
      title: "Team Lead, Insilico Medicine, CHIRAL",
      bio: "Mr. Shahriar is a Team Lead at Insilico Medicine, focusing on the application of artificial intelligence in drug discovery and bioinformatics.",
      image: "/images/career-guide/speakers/musab.png",
      linkedin: "https://www.linkedin.com/in/mshahariar/"
    },
    {
      name: "Pritom Kundu",
      title: "Team Lead, Insilico Medicine, CHIRAL",
      bio: "Mr. Kundu is a Team Lead at Insilico Medicine, specializing in the integration of AI and bioinformatics for innovative healthcare solutions.",
      image: "/images/career-guide/speakers/pritom.png",
      linkedin: "https://www.linkedin.com/in/pritom-kundu/"
    }
  ];

  const managementTeam = [
    {
      name: "Fatema Tuj Johora Fariha",
      role: "Program Director",
      image: "https://api.dicebear.com/7.x/initials/svg?seed=FF&backgroundColor=0f172a&fontFamily=Arial&fontSize=40",
      linkedin: "#"
    },
    {
      name: "Hafeza Bhuiyan Lata",
      role: "Assistant Director",
      image: "/career-guide-team/Hafeza Bhuiyan Lata.jpg",
      linkedin: "#"
    },
    {
      name: "Sharmin Sultana Lincoln",
      role: "Program Host",
      image: "/career-guide-team/Sharmin Sultana Lincoln.jpeg",
      linkedin: "https://www.linkedin.com/in/sharmin-sultana-lincoln-966462370"
    },
    {
      name: "Ellina Tasneem Bushra",
      role: "Program Host",
      image: "/career-guide-team/Ellina Tasneem Bushra.jpg",
      linkedin: "https://www.linkedin.com/in/ellina-tasneem-bushra-453ab6386"
    },
    {
      name: "Faiza Wamea Haque",
      role: "Communications & Outreach Manager",
      image: "/career-guide-team/Faiza Wamea Haque.jpg",
      linkedin: "https://www.linkedin.com/in/faiza-wamea-haque-68b108244"
    },
    {
      name: "Nafisa Nawal",
      role: "Creative Design & Brand Lead",
      image: "/career-guide-team/Nafisa Nawal.jpeg",
      linkedin: "https://www.linkedin.com/in/nnawal/"
    },
    {
      name: "Md. Nazmul Hasan",
      role: "Coordinator",
      image: "/career-guide-team/Md. Nazmul Hasan.jpg",
      linkedin: "https://www.linkedin.com/in/mnh24"
    },
    {
      name: "Moriom Islam Mim",
      role: "Coordinator",
      image: "/career-guide-team/Moriom Islam Mim.jpg",
      linkedin: "https://www.linkedin.com/in/moriom-islam-mim"
    }
  ];

  const ambassadors = [
    { name: "MD. HABIB UN NOBI", university: "Jahangirnagar University", image: "/images/career-guide/ambassador_photo/Md. Habib Un Nobi_JU - Md. Habib Un Nobi.jpg", facebook: "https://www.facebook.com/share/1ChWDwb5UK/", linkedin: "https://www.linkedin.com/in/md-habib-un-nobi-9b694437a" },
    { name: "Md Sane Hossain", university: "Bangladesh University of Health Sciences", image: "/images/career-guide/ambassador_photo/Md Sane Hossain -BUHS - Md. Sane Hossain.jpg", facebook: "https://www.facebook.com/share/18K73unKn6/", linkedin: "https://www.linkedin.com/in/md-sane-hossain-7753371ab" },
    { name: "MD Towfiqul Islam", university: "North South University", image: "/images/career-guide/ambassador_photo/TowfiqulIslam_NSU - 8433 Towfiqul Islam.jpg", facebook: "https://www.facebook.com/turzo.tawfik", linkedin: "https://www.linkedin.com/in/towfiqul-islam-88075789" },
    { name: "Md. Tariqul Islam", university: "Jashore University of Science and Technology", image: "/images/career-guide/ambassador_photo/Tariqulislam_JUST - Md.Tariqul Islam.png", facebook: "https://www.facebook.com/share/1ApkyR3928/", linkedin: "https://www.linkedin.com/in/md-tariqul-islam-398790259" },
    { name: "Salman Masud", university: "BRAC University", image: "/images/career-guide/ambassador_photo/Salman Masud_BRACU - Salman Masud.jpg", facebook: "https://www.facebook.com/share/1E9zBV5s4z/", linkedin: "https://www.linkedin.com/in/salman-masud-017072344" },
    { name: "Md. Ashikur Rahman", university: "Bangladesh Agricultural University", image: "/images/career-guide/ambassador_photo/MdAshikurRahman_BAU - Md. Ashikur Rahman.jpg", facebook: "https://www.facebook.com/share/18RkNK7Ebq/", linkedin: "https://www.linkedin.com/in/md-ashikur-rahman-52b034332" },
    { name: "Sweety Akter", university: "Brac University", image: "/images/career-guide/ambassador_photo/SweetyAkter_BRACU - Sweety Akter.jpg", facebook: "https://www.facebook.com/alex.tanhaa.5/", linkedin: "https://www.linkedin.com/in/sweety-akter-6b11b0286" },
    { name: "Jannatul Mawa Etee", university: "Islamic University, Kushtia", image: "/images/career-guide/ambassador_photo/IMG_20260301_210347 - Jannatul Mawa ll-21.png", facebook: "https://www.facebook.com/share/1DdzyHFgdc/", linkedin: "https://www.linkedin.com/in/jannatul-mawa-etee-3476a11b5" },
    { name: "Habibur Rahman Naim", university: "Jagannath University", image: "/images/career-guide/ambassador_photo/Habibur Rahman Naim.JnU - Habibur Rahman Naim.png", facebook: "https://www.facebook.com/share/184avGhg6Y/", linkedin: "https://www.linkedin.com/in/habibur-rahman-naim-762168361" },
    { name: "Shirsho Saha", university: "Daffodil International University", image: "/images/career-guide/ambassador_photo/Shirsho Saha_DIU - Shirsho Saha 251-59-005.jpg", facebook: "https://www.facebook.com/share/18hn5AJe7x/", linkedin: "https://www.linkedin.com/in/shirsho-saha-0b51933b6" },
    { name: "Ankit Saha", university: "BRAC University", image: "/images/career-guide/ambassador_photo/Ankit Saha_BracU - Ankit Saha.jpg", facebook: "https://www.facebook.com/ankit.saha.455211/", linkedin: null },
    { name: "Md. Anamul Hasan Wasi", university: "Shahjalal University of Science and Technology", image: "/images/career-guide/ambassador_photo/MdAnamulHasanWasi_SUST - Anamul Hasan Wasi.jpg", facebook: "https://www.facebook.com/share/1HMB57JhXB/", linkedin: null },
    { name: "Saju Mandal", university: "Jahangirnagar University", image: "/images/career-guide/ambassador_photo/ChatGPT Image Apr 13, 2026, 02_24_21 PM - Saju Mandal.png", facebook: "https://www.facebook.com/profile.php?id=100031018788823", linkedin: "https://www.linkedin.com/in/saju-biotech" },
    { name: "MD. Sal Sabil Anwar", university: "BRAC University", image: "/images/career-guide/ambassador_photo/Md.SalSabilAnwar_BRACU - MD. SAL SABIL ANWAR.jpg", facebook: "https://www.facebook.com/share/1MwbnnU2Tn/", linkedin: "https://www.linkedin.com/in/salsabil-anwar-t4a007" },
    { name: "MD. SHAKAWAT HOSSAIN", university: "Shahjalal University of Science And Technology", image: "/images/career-guide/ambassador_photo/ShakawatHossain_SUST.jpg - shakawat hossain.jpeg", facebook: "https://www.facebook.com/shihaab7838/", linkedin: "https://www.linkedin.com/in/md-shakawat-hossain-372143378/" },
    { name: "Sadia Sultana Mim", university: "University of Rajshahi", image: "/images/career-guide/ambassador_photo/inbound4528769483021909120 - Sadia Mim.jpg", facebook: "https://www.facebook.com/sadia.sultana.mim.783113", linkedin: "https://www.linkedin.com/in/sadia-mim-240931279" },
    { name: "Sanjida Mazumder", university: "Cumilla Medical College", image: "/images/career-guide/ambassador_photo/IMG_1479~2 (1).JPG - Sanjida Mazumder.png", facebook: "https://www.facebook.com/sanjida.mazumder.17", linkedin: null },
    { name: "Nazifa Rounak Ushna", university: "University of Rajshahi", image: "/images/career-guide/ambassador_photo/IMG_20251125_134427 - Feorella Firoza.jpg", facebook: "https://www.facebook.com/share/18p8doyW2z/", linkedin: "https://www.linkedin.com/in/nazifa-rounak-ushna-768485404" }
  ];

  const reviews = [
    {
      name: "Samiul Islam",
      role: "Undergraduate Student",
      comment: "The career guide was eye-opening. I finally understood how to bridge the gap between biology and coding. Highly recommended for any biotech student!",
      date: "May 2026"
    },
    {
      name: "Dr. Farhana Ahmed",
      role: "Researcher",
      comment: "A very well-organized session. The insights into global PhD opportunities and industry requirements were particularly helpful for my students.",
      date: "April 2026"
    },
    {
      name: "Tanvir Hossain",
      role: "Career Changer",
      comment: "I was confused about moving into Bioinformatics. This session gave me a clear roadmap and the confidence to start my journey. Thank you DeepBio!",
      date: "March 2026"
    }
  ];

  const faqs = [
    {
      question: "Who should attend this career guide?",
      answer: "This event is ideal for undergraduates, recent graduates, career changers, and anyone interested in exploring bioinformatics and computational biology career opportunities. No prior experience is required."
    },
    {
      question: "Is there a registration fee?",
      answer: "No, this career awareness orientation is completely free to attend. We believe in making career exploration accessible to everyone interested in bioinformatics."
    },
    {
      question: "Will the session be held in-person or virtually?",
      answer: "We offer both in-person and virtual attendance options. Virtual participants will have full access to all sessions, presentations, and interactive workshops through our online platform."
    },
    {
      question: "What should I bring or prepare?",
      answer: "Just your curiosity and any career-related questions you have! If you're attending virtually, ensure you have a stable internet connection."
    },
    {
      question: "Will I get a certificate of participation?",
      answer: "No, this is a free career guidance session. However, all participants will gain access to our premium community network and exclusive career resources to help navigate their bioinformatics journey."
    }
  ];

  const partners = [
    { name: "Partner 1", logo: null },
    { name: "Partner 2", logo: null },
    { name: "Partner 3", logo: null },
    { name: "Partner 4", logo: null }
  ];

  const getTypeColor = (type: string) => {
    const colors: Record<string, string> = {
      "Welcome": "bg-brand-primary/10 text-brand-primary",
      "Industry": "bg-brand-primary/10 text-brand-primary",
      "Research": "bg-brand-secondary/10 text-brand-secondary",
      "Q&A": "bg-brand-primary/10 text-brand-primary",
      "Closing": "bg-slate-100 text-slate-600"
    };
    return colors[type] || "bg-slate-100 text-slate-600";
  };

  return (
    <div className="pt-0 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden bg-brand-dark">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
          <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-brand-primary/20 blur-[150px] rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/4 -left-20 w-[600px] h-[600px] bg-brand-secondary/15 blur-[150px] rounded-full"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="inline-flex items-center gap-2 bg-brand-primary/10 border border-brand-primary/20 px-4 py-2 rounded-full mb-8 backdrop-blur-md">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-secondary"></span>
            </span>
            <span className="text-brand-secondary text-[10px] font-bold tracking-[0.3em] uppercase">100% FREE Career Guidance Session</span>
          </div>

          <p className="text-brand-secondary font-bold text-sm tracking-[0.3em] uppercase mb-4">
            DeepBio Limited & CHIRAL Bangladesh Presents
          </p>
          
          <h1 className="text-6xl md:text-8xl font-bold text-white leading-[0.95] tracking-tight mb-8 max-w-4xl">
            Bioinformatics <br />
            <span className="brand-text-gradient">Career Guide</span>
          </h1>
          
          <p className="text-xl text-slate-300 max-w-3xl leading-relaxed mb-10">
            Navigate your future in computational biology. Join our monthly Career Guide Session held at the end of every month to gain expert insights into global career paths, higher education, and industry trends.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a
              href="https://forms.gle/oKYqNMxzN2iakmQQ7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-brand-primary hover:bg-[#1a4b75] text-white rounded-2xl font-bold transition-all shadow-[0_20px_40px_rgba(32,94,146,0.3)] hover:-translate-y-1"
            >
              Join for FREE
              <ChevronRight className="w-5 h-5" />
            </a>
            <a
              href="#schedule"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-2xl font-bold hover:bg-white/20 transition-all shadow-lg hover:-translate-y-1"
            >
              <Calendar className="w-5 h-5" />
              View Schedule
            </a>
            <Link
              href="/career-guide/handbook"
              className="inline-flex items-center gap-3 px-8 py-4 bg-brand-secondary/20 backdrop-blur-md border border-brand-secondary/30 text-brand-secondary rounded-2xl font-bold hover:bg-brand-secondary/30 transition-all shadow-lg hover:-translate-y-1"
            >
              <BookOpen className="w-5 h-5" />
              Program Handbook
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 pt-16 border-t border-white/10 mt-16 max-w-5xl">
            <div className="group cursor-default">
              <div className="text-3xl font-bold text-white mb-1 group-hover:text-brand-secondary transition-colors">9PM - 11PM</div>
              <div className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Monthly Session</div>
            </div>
            <div className="group cursor-default">
              <div className="text-3xl font-bold text-white mb-1 group-hover:text-brand-secondary transition-colors">100% FREE</div>
              <div className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Open Access</div>
            </div>
            <div className="group cursor-default">
              <div className="text-3xl font-bold text-white mb-1 group-hover:text-brand-secondary transition-colors">Expert</div>
              <div className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Mentorship</div>
            </div>
            <div className="group cursor-default">
              <div className="text-3xl font-bold text-white mb-1 group-hover:text-brand-secondary transition-colors">Global</div>
              <div className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Exposure</div>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas Section */}
      <section id="focus-areas" className="py-24 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-wider mb-6">
              Program Tracks
            </div>
            <h2 className="text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Dual-Track <span className="text-brand-primary">Guidance</span>
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
              Our guide covers the two most critical paths for bioinformaticians, providing a 360-degree view of your future opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {focusAreas.map((area, index) => (
              <div
                key={index}
                className="group relative p-10 bg-white rounded-[2.5rem] border border-slate-200 hover:border-brand-primary/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              >
                <div className={`w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-primary group-hover:scale-110 transition-all duration-500`}>
                  <area.icon className={`w-8 h-8 text-brand-primary group-hover:text-white transition-colors`} />
                </div>
                
                <h3 className="text-3xl font-bold text-slate-900 mb-4">{area.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-8 text-lg">
                  {area.description}
                </p>
                
                <div className="flex flex-wrap gap-3">
                  {area.tags.map((tag, i) => (
                    <span key={i} className="px-4 py-1.5 rounded-full bg-slate-50 text-brand-primary text-xs font-bold border border-slate-100 group-hover:border-brand-primary/20 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Outcomes */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-wider mb-6">
              Session Value
            </div>
            <h2 className="text-5xl font-bold text-slate-900 mb-6">Program Outcomes</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              What you will gain from our intensive 2-hour Career Guide Session.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {outcomes.map((outcome, index) => (
              <div 
                key={index}
                className="group p-8 bg-white rounded-3xl border border-slate-200 hover:border-brand-primary/50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-primary group-hover:scale-110 transition-all">
                  <outcome.icon className="w-8 h-8 text-brand-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{outcome.title}</h3>
                <p className="text-slate-600 leading-relaxed">{outcome.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Session Format Section */}
      <section id="format" className="py-24 bg-brand-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-brand-secondary text-xs font-bold uppercase tracking-wider mb-6">
              Program Structure
            </div>
            <h2 className="text-5xl font-bold mb-6">Session Format</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our intensive 2-hour orientation is designed to provide a comprehensive roadmap for your bioinformatics career.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-lg rounded-[2rem] p-8 border border-white/10 hover:border-brand-primary/50 transition-all duration-300 group">
              <div className="w-14 h-14 bg-brand-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Globe className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Industry Guide</h3>
              <div className="inline-block bg-brand-primary/20 text-brand-secondary px-4 py-1.5 rounded-full text-xs font-bold mb-4">Global Insights</div>
              <p className="text-slate-400 leading-relaxed">
                Fast-track your understanding of diverse career paths in industry, academia, and government sectors.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-lg rounded-[2rem] p-8 border border-white/10 hover:border-brand-secondary/50 transition-all duration-300 group">
              <div className="w-14 h-14 bg-brand-secondary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Rocket className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Advanced Training</h3>
              <div className="inline-block bg-brand-secondary/20 text-brand-secondary px-4 py-1.5 rounded-full text-xs font-bold mb-4">Deep Dive</div>
              <p className="text-slate-400 leading-relaxed">
                Explore specialized domains from genomic data science to structural bioinformatics and clinical research.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-lg rounded-[2rem] p-8 border border-white/10 hover:border-brand-primary/50 transition-all duration-300 group">
              <div className="w-14 h-14 bg-brand-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Terminal className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Practical Orientation</h3>
              <div className="inline-block bg-brand-primary/20 text-brand-secondary px-4 py-1.5 rounded-full text-xs font-bold mb-4">Career Toolkit</div>
              <p className="text-slate-400 leading-relaxed">
                Learn about the essential tools, technologies, and soft skills required to succeed in the modern lab environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Table Section */}
      <section id="schedule" className="py-24 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-wider mb-6">
              Timeline
            </div>
            <h2 className="text-5xl font-bold text-slate-900 mb-6">Session Schedule</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our intensive 2-hour career guide breakdown (9 PM – 11 PM)
            </p>
          </div>

          <div className="hidden lg:block bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden hover:shadow-brand-primary/5 transition-all duration-300">
            <table className="w-full">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-100 text-left">
                  <th className="px-8 py-5 text-sm font-bold text-slate-900 uppercase tracking-wider">Type</th>
                  <th className="px-8 py-5 text-sm font-bold text-slate-900 uppercase tracking-wider">Time</th>
                  <th className="px-8 py-5 text-sm font-bold text-slate-900 uppercase tracking-wider">Event</th>
                  <th className="px-8 py-5 text-sm font-bold text-slate-900 uppercase tracking-wider">Format</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {scheduleData.map((item, index) => (
                  <tr key={index} className="hover:bg-slate-50 transition-colors group">
                    <td className="px-8 py-6">
                      <span className={`inline-block px-4 py-1.5 text-xs font-bold rounded-full ${getTypeColor(item.type)}`}>
                        {item.type}
                      </span>
                    </td>
                    <td className="px-8 py-6 text-sm font-bold text-slate-900">{item.time}</td>
                    <td className="px-8 py-6 text-sm text-slate-600 font-medium group-hover:text-brand-primary transition-colors">{item.event}</td>
                    <td className="px-8 py-6 text-sm text-slate-400 font-bold uppercase tracking-widest text-[10px]">{item.format}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Schedule */}
          <div className="lg:hidden space-y-4">
            {scheduleData.map((item, index) => (
              <div key={index} className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                <div className="flex justify-between items-start mb-4">
                  <span className={`px-3 py-1 text-[10px] font-bold rounded-full ${getTypeColor(item.type)}`}>
                    {item.type}
                  </span>
                  <span className="text-sm font-bold text-slate-900">{item.time}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.event}</h3>
                <p className="text-sm text-slate-500 font-bold uppercase tracking-widest text-[10px]">{item.format}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Speakers Section */}
      <section id="speakers" className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-wider mb-6">
              Our Experts
            </div>
            <h2 className="text-5xl font-bold text-slate-900 mb-6">Meet the Speakers</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Learn directly from industry leaders and researchers who are accelerating bioinformatics education in Bangladesh.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {speakers.map((speaker, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl border border-slate-200 p-8 hover:border-brand-primary/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              >
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <div className="absolute inset-0 bg-brand-primary/10 rounded-full group-hover:scale-110 transition-transform duration-500"></div>
                  <Image
                    src={speaker.image}
                    alt={speaker.name}
                    width={128}
                    height={128}
                    className="relative w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg group-hover:border-brand-primary transition-colors"
                  />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-1 text-center group-hover:text-brand-primary transition-colors">
                  {speaker.name}
                </h3>
                <p className="text-brand-secondary font-bold text-[10px] uppercase tracking-widest text-center mb-4">
                  {speaker.title}
                </p>
                <p className="text-slate-600 text-sm text-center leading-relaxed mb-6">
                  {speaker.bio}
                </p>
                <div className="flex justify-center pt-4 border-t border-slate-100">
                  <a href={speaker.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#0A66C2] transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Management Team Section */}
      <section id="management" className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-wider mb-6">
              Team Behind the Event
            </div>
            <h2 className="text-5xl font-bold text-slate-900 mb-6">Management Team</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Meet the dedicated professionals who work tirelessly behind the scenes to make every Career Guide session a success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {managementTeam.map((member, index) => (
              <div
                key={index}
                className="group bg-slate-50 rounded-3xl border border-slate-200 p-8 hover:border-brand-primary/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              >
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <div className="absolute inset-0 bg-brand-primary/10 rounded-full group-hover:scale-110 transition-transform duration-500"></div>
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={128}
                    height={128}
                    className="relative w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg group-hover:border-brand-primary transition-colors"
                  />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-1 text-center group-hover:text-brand-primary transition-colors">
                  {member.name}
                </h3>
                <p className="text-brand-secondary font-bold text-[10px] uppercase tracking-widest text-center mb-6">
                  {member.role}
                </p>
                <div className="flex justify-center pt-4 border-t border-slate-100">
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#0A66C2] transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Hosts Section */}
      <section id="hosts" className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-wider mb-6">
              Organizers
            </div>
            <h2 className="text-5xl font-bold text-slate-900 mb-6 leading-tight">Program Hosts</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <a href="https://deepbioltd.com/" target="_blank" rel="noopener noreferrer" className="group p-10 bg-white rounded-[2.5rem] border border-slate-200 hover:border-brand-primary/50 hover:bg-slate-50 hover:shadow-2xl transition-all duration-500 text-center">
              <div className="w-24 h-24 bg-slate-50 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl group-hover:scale-110 transition-transform p-4">
                <Image src="/images/career-guide/partners/deepbio.jpg" alt="DeepBio Logo" width={80} height={80} className="object-contain" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-brand-primary transition-colors">DeepBio Limited</h3>
              <p className="text-slate-600 leading-relaxed">Leading bioinformatics company specializing in AI-driven healthcare solutions and computational biology research.</p>
            </a>
            
            <a href="https://chiralbd.org/" target="_blank" rel="noopener noreferrer" className="group p-10 bg-white rounded-[2.5rem] border border-slate-200 hover:border-brand-primary/50 hover:bg-slate-50 hover:shadow-2xl transition-all duration-500 text-center">
              <div className="w-24 h-24 bg-slate-50 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl group-hover:scale-110 transition-transform p-4">
                <Image src="/images/career-guide/partners/chiral.jpg" alt="CHIRAL Logo" width={80} height={80} className="object-contain" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-brand-primary transition-colors">CHIRAL Bangladesh</h3>
              <p className="text-slate-600 leading-relaxed">Advancing bioinformatics education and research in Bangladesh through innovative programs and industry collaboration.</p>
            </a>
          </div>
        </div>
      </section>

      {/* Campus Ambassadors Section */}
      <section id="ambassadors" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-wider mb-6">
              DeepBio Network
            </div>
            <h2 className="text-5xl font-bold text-slate-900 mb-6">Campus Ambassadors</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Meet our dedicated network of 24 ambassadors representing DeepBio across premier universities. They bridge the gap between bioinformatics expertise and student communities nationwide.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {ambassadors.map((ambassador, index) => (
              <div 
                key={index}
                className="group bg-white border border-slate-200 rounded-2xl p-6 text-center hover:border-brand-primary/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative w-24 h-24 mx-auto mb-6">
                  <div className="absolute inset-0 bg-brand-primary/10 rounded-full group-hover:scale-110 transition-transform duration-500"></div>
                  <Image 
                    src={ambassador.image} 
                    alt={ambassador.name}
                    width={96}
                    height={96}
                    className="relative w-24 h-24 rounded-full object-cover border-2 border-slate-100 group-hover:border-brand-primary transition-all duration-300 grayscale group-hover:grayscale-0"
                  />
                </div>
                <h3 className="text-slate-900 font-bold text-sm mb-1 leading-tight group-hover:text-brand-primary transition-colors min-h-[2.5rem] flex items-center justify-center">
                  {ambassador.name}
                </h3>
                <p className="text-slate-400 text-[10px] font-bold uppercase tracking-wider mb-6 min-h-[2.5rem] flex items-center justify-center">
                  {ambassador.university}
                </p>
                <div className="flex justify-center gap-3 pt-4 border-t border-slate-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {ambassador.facebook && (
                    <a href={ambassador.facebook} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#1877F2] transition-colors">
                      <Facebook className="w-5 h-5" />
                    </a>
                  )}
                  {ambassador.linkedin && (
                    <a href={ambassador.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#0A66C2] transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="sponsors" className="py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-wider mb-6">
              Our Ecosystem
            </div>
            <h2 className="text-5xl font-bold text-slate-900 mb-6">Community Partners</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Collaborating with leading organizations to foster innovation and accessibility in bioinformatics education.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {partners.map((partner, i) => (
              <div key={i} className="group p-8 bg-slate-50 rounded-3xl border border-dashed border-slate-300 flex items-center justify-center hover:border-brand-primary/50 hover:bg-white hover:shadow-xl transition-all duration-500 min-h-[120px]">
                {partner.logo ? (
                  <Image src={partner.logo} alt={partner.name} width={200} height={48} className="h-12 w-auto object-contain grayscale group-hover:grayscale-0 transition-all" />
                ) : (
                  <span className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">Coming Soon</span>
                )}
              </div>
            ))}
          </div>

          <div className="bg-brand-dark rounded-[3rem] p-12 lg:p-20 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-[1.1]">Scale Your Impact with DeepBio Network</h2>
              <p className="text-xl text-slate-300 mb-12 leading-relaxed">
                Join our mission to democratize bioinformatics education. Become a community partner and empower the next generation.
              </p>
              <a 
                href="https://forms.gle/5Yy9MAxet2x6hEhT8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-10 py-5 bg-brand-primary hover:bg-[#1a4b75] text-white rounded-2xl font-bold transition-all shadow-xl hover:-translate-y-1"
              >
                Join as Community Partner
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-24 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-wider mb-6">
                Testimonials
              </div>
              <h2 className="text-5xl font-bold text-slate-900">What Participants <span className="text-brand-primary">Say</span></h2>
            </div>
            <a 
              href="https://forms.gle/B6QjmhS34cPeMgjV8"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-slate-50 hover:bg-slate-100 text-brand-primary font-bold rounded-2xl border border-slate-200 transition-all hover:border-brand-primary/30 flex items-center gap-2"
            >
              Share Your Experience
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, i) => (
              <div 
                key={i}
                className="p-8 rounded-[2rem] bg-slate-50 border border-slate-200 hover:border-brand-primary/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group"
              >
                <div className="flex gap-1 mb-6 text-brand-secondary">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-slate-600 text-lg mb-8 italic leading-relaxed group-hover:text-slate-900 transition-colors">
                  "{review.comment}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary font-bold text-xl">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-slate-900 font-bold group-hover:text-brand-primary transition-colors">{review.name}</h4>
                    <p className="text-slate-400 text-sm font-semibold">{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-wider mb-6">
              Help Center
            </div>
            <h2 className="text-5xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-slate-600">Everything you need to know about the career guide.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-brand-primary/50 transition-all cursor-pointer group"
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
              >
                <div className="px-8 py-6 flex items-center justify-between">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-primary transition-colors">
                    {faq.question}
                  </h3>
                  <ChevronDown className={`w-5 h-5 text-brand-primary transition-transform duration-300 ${openFAQ === index ? 'rotate-180' : ''}`} />
                </div>
                
                <div 
                  className={`px-8 overflow-hidden transition-all duration-300 ease-in-out ${
                    openFAQ === index ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-slate-600 leading-relaxed pt-4 border-t border-slate-100">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section id="register" className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-wider mb-6">
              Next Session
            </div>
            <h2 className="text-5xl font-bold text-slate-900 mb-6">Join the Career Guide Session</h2>
          </div>

          <div className="bg-white rounded-[3rem] p-12 border border-slate-200 shadow-2xl hover:shadow-brand-primary/10 transition-shadow">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary shrink-0">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1">Last Friday</h3>
                    <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Every Month</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1">9:00 PM - 11:00 PM</h3>
                    <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">BST (UTC+6)</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary shrink-0">
                    <Globe className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1">Virtual Attendance</h3>
                    <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Access from Anywhere</p>
                  </div>
                </div>
              </div>
              <div className="text-center md:text-left space-y-6 border-l-0 md:border-l border-slate-100 md:pl-12">
                <p className="text-2xl font-bold text-slate-900">Registration is <span className="text-brand-primary">Open</span></p>
                <p className="text-slate-600 leading-relaxed">Secure your spot for the upcoming monthly session. Admission is 100% free but requires registration to receive the session link.</p>
                <a
                  href="https://forms.gle/oKYqNMxzN2iakmQQ7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-10 py-5 bg-brand-primary hover:bg-[#1a4b75] text-white rounded-2xl font-bold transition-all shadow-[0_20px_40px_rgba(32,94,146,0.3)] hover:-translate-y-1 w-full justify-center"
                >
                  Register Now
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
