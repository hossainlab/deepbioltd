import React from 'react'
import { Users, GraduationCap, Building2, Stethoscope, BookOpen } from 'lucide-react'

const audienceList = [
  {
    title: 'Researchers',
    description: 'Custom analysis pipelines and data interpretation for academic research projects.',
    icon: Users,
    color: 'bg-brand-primary/10 text-brand-primary',
  },
  {
    title: 'Universities',
    description: 'Curriculum support, workshops, and collaborative research opportunities.',
    icon: GraduationCap,
    color: 'bg-brand-primary/10 text-brand-primary',
  },
  {
    title: 'Biotech Companies',
    description: 'R&D outsourcing, data consulting, and scalable computational infrastructure.',
    icon: Building2,
    color: 'bg-brand-primary/10 text-brand-primary',
  },
  {
    title: 'Clinicians',
    description: 'Variant interpretation and diagnostic support for precision medicine.',
    icon: Stethoscope,
    color: 'bg-brand-primary/10 text-brand-primary',
  },
  {
    title: 'Students',
    description: 'Guidance on thesis projects, data analysis, and bioinformatics training.',
    icon: BookOpen,
    color: 'bg-brand-primary/10 text-brand-primary',
  },
]

export const WhoWeServe: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-20 space-y-6">
        <h2 className="text-brand-primary font-bold uppercase tracking-[0.3em] text-xs">Who We Serve</h2>
        <p className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight">Tailored Solutions</p>
        <p className="text-lg text-slate-500 max-w-2xl mx-auto">
          Comprehensive support for the entire life sciences ecosystem
        </p>
        <div className="w-12 h-1 brand-gradient mx-auto rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
        {audienceList.map((audience, index) => (
          <div
            key={index}
            className="group p-8 bg-white border border-slate-100 rounded-[2rem] shadow-sm hover:shadow-2xl hover:border-brand-primary/10 hover:-translate-y-2 transition-all duration-500"
          >
            <div
              className={`w-14 h-14 rounded-[1.25rem] flex items-center justify-center mb-6 transition-all group-hover:scale-110 group-hover:rotate-3 ${audience.color}`}
            >
              <audience.icon className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight group-hover:text-brand-primary transition-colors">
              {audience.title}
            </h3>
            <p className="text-slate-500 leading-relaxed text-sm font-medium">{audience.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
