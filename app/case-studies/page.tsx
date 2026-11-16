import type { Metadata } from 'next'
import { Shell } from '@/components/minimal/Shell'
import { Masthead } from '@/components/minimal/Masthead'
import { Colophon } from '@/components/minimal/Colophon'
import { PubEntry, SmartLink, Thumb, pubLink } from '@/components/minimal/PubEntry'
import { servicesWithExamples } from '@/lib/services/data'

const description =
  'Worked examples of DeepBio analyses, each with its figures, methods and a full downloadable report.'

export const metadata: Metadata = {
  title: 'Case Studies | DeepBio',
  description,
  openGraph: {
    title: 'Case Studies | DeepBio',
    description,
    images: [
      {
        url: '/case_studies/img/deseq2_qc_volcano_plot.png',
        width: 1200,
        height: 630,
        alt: 'DeepBio Case Studies - DESeq2 Analysis',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Case Studies | DeepBio',
    description,
    images: ['/case_studies/img/deseq2_qc_volcano_plot.png'],
  },
}

/** Previous version: components/CaseStudiesPage.tsx (no longer routed). */

export default function CaseStudiesIndex() {
  return (
    <Shell>
      <div className="text-[color:var(--home-ink)]">
        <Masthead />

        <main className="mx-auto w-full max-w-[36rem] px-4 sm:px-0">
          <div className="pb-4 pt-8">
            <h1 className="text-center text-[1.05rem] text-[color:var(--home-accent)]">Case Studies</h1>
            <p className="mt-3 text-[13.5px] leading-[1.55]">
              Real DeepBio outputs, so you can see the deliverable before commissioning work. Each
              report includes the figures, methods and interpretation. The full list of analyses is
              under{' '}
              <SmartLink href="/services" className={pubLink}>
                services
              </SmartLink>
              .
            </p>
          </div>

          <ul className="pt-2">
            {servicesWithExamples.map((s) => {
              const ex = s.example!
              return (
                <PubEntry
                  key={s.id}
                  id={s.id}
                  thumb={<Thumb href={ex.pdf} src={ex.figure} alt={ex.figureAlt} fit="contain" />}
                >
                  <SmartLink href={ex.pdf} className={`font-bold ${pubLink}`}>
                    {ex.title}
                  </SmartLink>
                  <p>
                    <strong>{s.title}</strong>
                    <span className="text-[color:var(--home-muted)]"> · {s.category}</span>
                  </p>
                  <p>
                    <span className="text-[color:var(--home-muted)]">Input:</span> {s.input}
                  </p>
                  <p>
                    <span className="text-[color:var(--home-muted)]">Output:</span> {s.output}
                  </p>
                  <p>
                    <SmartLink href={ex.pdf} className={pubLink}>
                      report (PDF)
                    </SmartLink>
                    {' / '}
                    <SmartLink href={`/services#${s.id}`} className={pubLink}>
                      service
                    </SmartLink>
                  </p>
                  <p className="mt-2.5">{s.description}</p>
                </PubEntry>
              )
            })}
          </ul>

          <p className="mt-10 text-center text-[13.5px] leading-[1.6]">
            Have data that needs a similar analysis? Write to{' '}
            <a
              href="mailto:info@deepbioltd.com?subject=Case%20study%20enquiry"
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
