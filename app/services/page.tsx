import type { Metadata } from 'next'
import { Shell } from '@/components/minimal/Shell'
import { Masthead } from '@/components/minimal/Masthead'
import { Colophon } from '@/components/minimal/Colophon'
import { PubEntry, SmartLink, Thumb, pubLink } from '@/components/minimal/PubEntry'
import { ServiceGlyph } from '@/components/minimal/serviceGlyphs'
import { services, serviceCategories, servicesWithExamples, type Service } from '@/lib/services/data'

export const metadata: Metadata = {
  title: 'Services | DeepBio',
  description: 'Bioinformatics and computational biology analyses run by DeepBio in Dhaka, Bangladesh.',
}

/** Previous version: backups/homepage-2026-11-15/services/page.tsx (components/ServicesPage.tsx). */

/** One service as a publication-style row; services with a worked example link to it. */
function ServiceEntry({ s }: { s: Service }) {
  const caseHref = s.example ? `/case-studies#${s.id}` : undefined
  return (
    <PubEntry
      id={s.id}
      thumb={
        s.example ? (
          <Thumb href={caseHref} src={s.example.figure} alt={s.example.figureAlt} fit="contain" />
        ) : (
          <Thumb glyph={<ServiceGlyph id={s.id} category={s.category} />} />
        )
      }
    >
      {caseHref ? (
        <SmartLink href={caseHref} className={`font-bold ${pubLink}`}>
          {s.title}
        </SmartLink>
      ) : (
        <p className="font-bold text-[color:var(--home-accent)]">{s.title}</p>
      )}
      <p>
        <span className="text-[color:var(--home-muted)]">You send:</span> {s.input}
      </p>
      <p>
        <span className="text-[color:var(--home-muted)]">You get:</span> {s.output}
      </p>
      {s.example && (
        <p>
          <SmartLink href={caseHref!} className={pubLink}>
            case study
          </SmartLink>
          {' / '}
          <SmartLink href={s.example.pdf} className={pubLink}>
            report (PDF)
          </SmartLink>
        </p>
      )}
      <p className="mt-2.5">{s.description}</p>
    </PubEntry>
  )
}

export default function ServicesIndex() {
  return (
    <Shell>
      <div className="text-[color:var(--home-ink)]">
        <Masthead />

        <main className="mx-auto w-full max-w-[36rem] px-4 sm:px-0">
          <div className="pb-4 pt-8">
            <h1 className="text-center text-[1.05rem] text-[color:var(--home-accent)]">Services</h1>
            <p className="mt-3 text-[13.5px] leading-[1.55]">
              Analyses we run for labs, hospitals and companies. {servicesWithExamples.length} of them
              include a worked example you can read first; all are collected under{' '}
              <SmartLink href="/case-studies" className={pubLink}>
                case studies
              </SmartLink>
              .
            </p>
          </div>

          {serviceCategories.map((cat) => {
            const items = services.filter((s) => s.category === cat)
            if (!items.length) return null
            return (
              <section key={cat} aria-labelledby={`cat-${cat}`} className="pt-6">
                <h2 id={`cat-${cat}`} className="text-[1.15rem] font-normal">
                  {cat}
                </h2>
                <ul>
                  {items.map((s) => (
                    <ServiceEntry key={s.id} s={s} />
                  ))}
                </ul>
              </section>
            )
          })}

          <p className="mt-10 text-center text-[13.5px] leading-[1.6]">
            Need something not listed, or a custom model? Write to{' '}
            <a
              href="mailto:info@deepbioltd.com?subject=Service%20enquiry"
              className="text-[color:var(--home-accent)] underline underline-offset-4"
            >
              info@deepbioltd.com
            </a>{' '}
            with a short description of your data and question.
          </p>
        </main>

        <Colophon />
      </div>
    </Shell>
  )
}
