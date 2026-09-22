import React from 'react'
import Image from 'next/image'
import { scienceTeam } from '@/lib/team/data'
import { ArrowUpRight, Users } from 'lucide-react'

export const Leadership: React.FC = () => {
  return (
    <section id="team" className="w-full py-20 md:py-28 bg-white border-b border-rule scroll-mt-20 md:scroll-mt-24">
      <div className="max-w-container mx-auto px-6 md:px-10 flex flex-col gap-12">
        {/* Section Header */}
        <div className="flex flex-col gap-4 max-w-3xl pb-6 border-b border-rule">
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 w-fit px-3.5 py-1 rounded-full border border-rule-strong bg-white shadow-subtle">
            <Users className="w-3.5 h-3.5 text-[#205E92]" />
            <span className="text-xs font-mono font-semibold text-ink uppercase tracking-wider">
              Scientific Team
            </span>
          </div>

          <h2 className="text-heading-lg text-ink font-bold leading-tight">
            The scientists behind DeepBio
          </h2>

          <p className="text-base md:text-lg text-ink-secondary font-light leading-relaxed">
            Led by computational biologists, machine learning researchers, and structural bioinformaticians based in Dhaka, developing and evaluating foundational biological models.
          </p>
        </div>

        {/* 5 Science Team Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 items-stretch">
          {scienceTeam.map((member) => (
            <div
              key={member.name}
              className="group relative flex flex-col justify-between p-4 rounded-2xl bg-[#F8FAFC] border border-rule/80 hover:bg-white hover:border-[#205E92]/40 shadow-[0_2px_12px_-2px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_28px_-6px_rgba(32,94,146,0.12)] hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                {/* Photo container */}
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl border border-rule/60 bg-white">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(min-width: 1024px) 20vw, (min-width: 768px) 33vw, 50vw"
                    className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
                  />
                </div>

                {/* Name & Role */}
                <h3 className="mt-3.5 text-base font-bold text-ink group-hover:text-[#205E92] transition-colors leading-snug">
                  {member.name}
                </h3>
                <p className="text-xs font-mono text-slate mt-1 font-medium">
                  {member.role}
                </p>
              </div>

              {/* LinkedIn / Team Link */}
              <div className="pt-3 mt-4 border-t border-rule flex items-center justify-between">
                {member.linkedin ? (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium text-[#205E92] hover:underline inline-flex items-center gap-1"
                  >
                    <span>LinkedIn</span>
                    <ArrowUpRight className="w-3 h-3 opacity-70" />
                  </a>
                ) : (
                  <span className="text-[11px] font-mono text-slate-400">DeepBio Core</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
