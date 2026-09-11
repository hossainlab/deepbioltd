import React from 'react'
import { SectionHeading } from './home/SectionHeading'
import { GraduationCap, Activity, Users, Code, Compass, Server } from 'lucide-react'

const initiatives = [
  {
    badge: 'Online Learning Platform',
    badgeIcon: GraduationCap,
    title: 'DeepBio Academy',
    description: 'Expert-led online training in bioinformatics, computational biology, and AI in life sciences — built to democratise cutting-edge biological education.',
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
    badge: 'Research Internship',
    badgeIcon: Code,
    title: 'GSA Bioinformatics Internship',
    description: 'A collaborative initiative jointly organized by GNOBB, ASI School of Life, and SPSB — committed to nurturing the next generation of bioinformatics researchers through accessible, high-quality, and impact-driven training.',
    stats: [
      { value: '6-Month', label: 'Duration' },
      { value: 'Hybrid', label: 'Model' },
      { value: 'Research', label: 'Focused' },
    ],
    cta: { label: 'Explore Program', href: 'https://gsabioinfointernship.github.io/' },
    glow: 'bg-brand-primary/20',
    glowPos: 'bottom-0 left-0',
  },
  {
    badge: 'Career Resource',
    badgeIcon: Compass,
    title: 'DeepBio Career Guide',
    description: 'A comprehensive resource bridging the gap between academia and industry with curated paths, skill-gap analysis, and mentorship.',
    stats: [
      { value: '50+', label: 'Specialized Roles' },
      // TODO(deepbio): restore a satisfaction figure only with a survey and n= behind it.
      { value: 'Mentored', label: 'Placement Support' },
      { value: 'Industry', label: 'Focused' },
    ],
    cta: { label: 'Explore Careers', href: 'https://careerguide.deepbioltd.com/' },
    glow: 'bg-brand-primary/15',
    glowPos: 'top-0 left-0',
  },
  {
    badge: 'HPC Infrastructure',
    badgeIcon: Server,
    title: 'BioHPC Lab',
    description: 'High-performance computing platform providing scalable infrastructure and GPU-accelerated nodes for large-scale biological data analysis.',
    stats: [
      { value: 'GPU', label: 'Accelerated' },
      { value: 'Scalable', label: 'Nodes' },
      { value: 'Cloud', label: 'Native' },
    ],
    cta: { label: 'Explore Lab', href: 'https://biohpclab.vercel.app/' },
    glow: 'bg-brand-secondary/10',
    glowPos: 'bottom-0 right-0',
  },
  {
    badge: 'AI-Powered Tool',
    badgeIcon: Activity,
    title: 'Deep AMR',
    description: 'AI-powered antimicrobial resistance prediction from genomic data — helping clinicians make faster, evidence-based treatment decisions.',
    stats: [
      // TODO(deepbio): quote accuracy with the task, dataset and held-out n, or leave qualitative.
      { value: 'Validated', label: 'Resistance Calls' },
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
    title: 'Bioinformatics Mentorship Program',
    description: 'A structured mentorship program connecting aspiring bioinformaticians with experienced researchers to accelerate their growth.',
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
    <div className="max-w-plate mx-auto px-6 md:px-10">
      <SectionHeading
        title="We don't only take on projects. We build the infrastructure."
        deck="Training, high-performance computing, mentorship and open tools — the platforms we run alongside client work, most of them free to use."
      />

      <div className="mt-16 grid gap-x-16 md:grid-cols-2">
        {initiatives.map((item) => (
          <article
            key={item.title}
            className="grid gap-3 border-t border-rule py-7 md:grid-cols-[1fr_auto] md:items-baseline md:gap-8"
          >
            <div className="max-w-measure">
              <h3 className="font-serif text-xl leading-snug text-ink">
                {item.title}
              </h3>
              <p className="mt-1 text-sm text-ink-faint">{item.badge}</p>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-mid">
                {item.description}
              </p>
            </div>

            <a
              href={item.cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 self-start border-b border-rule-strong text-sm font-semibold text-ink transition-colors hover:border-ink md:mt-1"
            >
              {item.cta.label}
            </a>
          </article>
        ))}
      </div>
    </div>
  )
}
