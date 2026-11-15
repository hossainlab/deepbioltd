import React from 'react'
import Image from 'next/image'
import { teamMembers } from '@/lib/team/data'
import { Shell } from '@/components/minimal/Shell'
import { Masthead } from '@/components/minimal/Masthead'
import { Colophon } from '@/components/minimal/Colophon'

/**
 * DeepBio Homepage — minimal, single-column colophon.
 *
 * One centered measure carries everything: wordmark, a short nav, a two-line
 * statement of what DeepBio is, the people, the collaborators, and a ruled
 * footer. No hero art, no cards — the restraint is the design.
 *
 * Previous homepage: backups/homepage-2026-11-15/page.tsx
 * (git tag homepage-backup-2026-11-15).
 */

const collaborators = [
  { name: 'GNOBB', logo: '/partner_logos/clean/GNOBB.png', h: 58 },
  { name: 'ASI School of Life', logo: '/partner_logos/clean/ASISchoolofLife.png', h: 46 },
  { name: 'SPSB', logo: '/partner_logos/clean/SPSB.png', h: 56 },
  { name: 'GSA Bioinformatics Internship', logo: '/partner_logos/clean/GSABioinformaticsInternship.png', h: 50 },
  { name: 'cBLAST', logo: '/partner_logos/clean/cBLAST.png', h: 36 },
  { name: 'One Health Lab', logo: '/partner_logos/clean/onehealthlab.png', h: 56 },
]

// Names left off the homepage roll. Filtered here rather than deleted from
// lib/team/data.ts, which /team and the leadership list (picked by index) still use.
const HIDDEN_FROM_HOME = new Set(['Pritom Kundu', 'Tajrian Rahman'])

// Some source photos are loose, full-length crops; zoom them so faces read at 76px.
// Each value sets the crop anchor (object-position) and zoom around the face.
const PORTRAIT_ZOOM: Record<string, string> = {
  'Md. Jubayer Hossain': 'scale-[1.3] origin-[47%_40%]',
  'Muhibullah Shahjahan': 'scale-[1.4] origin-[45%_26%]',
  'Nishat Mim': '!object-[48%_43%] scale-[2.2] origin-[48%_45%]',
  'Najnin Suktara': '!object-[47%_51%] scale-[2.7] origin-[47%_52%]',
}

export default function HomePage() {
  // Split names into three balanced, top-aligned columns (column-major, like a credit roll).
  const team = teamMembers.filter((m) => !HIDDEN_FROM_HOME.has(m.name))

  return (
    <Shell>
      <Masthead />
      <div className="mx-auto w-full max-w-[36rem] px-4 text-center text-[color:var(--home-ink)] sm:px-0">

        {/* Statement */}
        <section className="text-sm leading-5">
          <p className="mb-2 mt-8">DeepBio is an AI biology company.</p>
          <p className="mb-8">
            We build and evaluate biological foundation models, run our own genomic and
            computational pipelines, and translate what we find into research and clinical
            outcomes. Our first focus is the health challenges of Bangladesh: antimicrobial
            resistance, infectious disease surveillance, and drug discovery for the diseases
            that burden the country most. Our team of computational biologists, ML researchers,
            and drug discovery scientists is based in Dhaka, Bangladesh.
          </p>
        </section>

        {/* Team — one row of full-color portraits */}
        <section aria-labelledby="team-heading">
          <h2 id="team-heading" className="mb-4 mt-8 text-base font-bold text-[color:var(--home-ink)]">
            Team
          </h2>
          <ul className="flex flex-wrap justify-center gap-y-5">
            {team.map((m) => {
              const card = (
                <>
                  <span className="relative mx-auto block h-[76px] w-[76px] overflow-hidden rounded-full bg-white ring-1 ring-[color:var(--home-rule-soft)] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:ring-2 group-hover:ring-[color:var(--home-accent)]">
                    <Image
                      src={m.image}
                      alt=""
                      fill
                      sizes="152px"
                      className={`object-cover object-top ${PORTRAIT_ZOOM[m.name] ?? ''}`}
                    />
                  </span>
                  <span className="mt-2 block text-[12px] font-medium leading-[1.25] text-[color:var(--home-ink)] [text-wrap:balance] transition-colors group-hover:text-[color:var(--home-accent)]">
                    {m.name}
                  </span>
                  <span className="mt-0.5 block text-[10.5px] leading-[1.3] text-[color:var(--home-muted)] [text-wrap:balance]">
                    {m.role}
                  </span>
                </>
              )
              return (
                <li key={m.name} className="w-1/3 px-1 sm:w-[calc(100%/6)]">
                  {m.linkedin ? (
                    <a
                      href={m.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${m.name}, ${m.role} — LinkedIn`}
                      className="group block"
                    >
                      {card}
                    </a>
                  ) : (
                    <div className="group block" aria-label={`${m.name}, ${m.role}`}>
                      {card}
                    </div>
                  )}
                </li>
              )
            })}
          </ul>
        </section>

        {/* Collaborators */}
        <section aria-labelledby="collab-heading">
          <h2 id="collab-heading" className="mb-4 mt-10 text-base font-bold text-[color:var(--home-ink)]">
            Collaborators
          </h2>
          <ul className="grid grid-cols-3 items-center gap-x-6 gap-y-3">
            {collaborators.map((c) => (
              <li key={c.name} className="logo-tile flex h-[60px] items-center justify-center px-2">
                <Image
                  src={c.logo}
                  alt={c.name}
                  width={200}
                  height={100}
                  sizes="(max-width: 640px) 40vw, 320px"
                  style={{ maxHeight: c.h }}
                  className="h-auto w-auto max-w-full object-contain"
                />
              </li>
            ))}
          </ul>
        </section>
      </div>
      <Colophon />
    </Shell>
  )
}
