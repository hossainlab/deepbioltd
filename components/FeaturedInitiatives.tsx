import React from 'react'
import { ArrowRight, GraduationCap, Activity, Users } from 'lucide-react'

const initiatives = [
  {
    badge: 'Online Learning Platform',
    badgeIcon: GraduationCap,
    title: 'DeepBio Academy',
    titleGradient: 'Academy',
    titlePrefix: 'DeepBio',
    description: 'Expert-led courses in bioinformatics, computational biology, and AI in life sciences — built to democratise cutting-edge biological education.',
    stats: [
      { value: '6+', label: 'Courses' },
      { value: '500+', label: 'Students' },
      { value: 'Certified', label: 'On Completion' },
    ],
    cta: { label: 'Explore Courses', href: 'https://deepbioacademy.com/courses/' },
    glow: 'bg-brand-secondary/20',
    glowPos: 'top-0 left-0',
  },
  {
    badge: 'AI-Powered Tool',
    badgeIcon: Activity,
    title: 'DeepAMR',
    titleGradient: 'AMR',
    titlePrefix: 'Deep',
    description: 'AI-powered antimicrobial resistance prediction from genomic data — helping clinicians make faster, evidence-based treatment decisions.',
    stats: [
      { value: '95%+', label: 'Accuracy' },
      { value: '12+', label: 'Organisms' },
      { value: '<15 min', label: 'Results' },
    ],
    cta: { label: 'Try DeepAMR', href: 'https://deep-amr.vercel.app/' },
    glow: 'bg-brand-primary/25',
    glowPos: 'bottom-0 right-0',
  },
  {
    badge: 'Mentorship Program',
    badgeIcon: Users,
    title: 'BMP',
    titleGradient: 'Mentorship Program',
    titlePrefix: 'Bioinformatics',
    description: 'A structured mentorship program connecting aspiring bioinformaticians with experienced researchers to accelerate their academic and professional growth.',
    stats: [
      { value: '1:1', label: 'Mentoring' },
      { value: 'Structured', label: 'Curriculum' },
      { value: 'Career', label: 'Focused' },
    ],
    cta: { label: 'Join the Program', href: 'https://mdjubayerhossain.com/bmp/' },
    glow: 'bg-brand-secondary/15',
    glowPos: 'top-0 right-0',
  },
]

export const FeaturedInitiatives: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-5">
          Featured Initiatives
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
          Beyond Research
        </h2>
        <p className="text-lg text-slate-500 mt-4 max-w-2xl mx-auto">
          Tools, platforms, and programs we have built to extend the impact of our work across education, clinical practice, and mentorship.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {initiatives.map((item, i) => (
          <div key={i} className="relative overflow-hidden rounded-3xl bg-brand-dark flex flex-col">
            {/* Glow */}
            <div className={`absolute ${item.glowPos} w-64 h-64 ${item.glow} blur-[100px] rounded-full pointer-events-none`} />

            <div className="relative z-10 p-8 flex flex-col flex-1">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-brand-secondary text-[10px] font-bold uppercase tracking-widest mb-6 w-fit">
                <item.badgeIcon className="w-3 h-3" />
                {item.badge}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-3 leading-tight">
                {item.titlePrefix}<span className="brand-text-gradient"> {item.titleGradient}</span>
              </h3>

              {/* Description */}
              <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">
                {item.description}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-2 mb-6">
                {item.stats.map((stat, j) => (
                  <div key={j} className="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
                    <div className="text-white font-bold text-sm">{stat.value}</div>
                    <div className="text-slate-500 text-[10px] uppercase tracking-wider mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <a
                href={item.cta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3.5 bg-brand-primary hover:bg-[#1a4b75] text-white rounded-xl font-bold text-sm transition-all group hover:-translate-y-0.5"
              >
                {item.cta.label}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
