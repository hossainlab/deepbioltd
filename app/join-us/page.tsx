import type { Metadata } from 'next'
import Link from 'next/link'
import { Shell } from '@/components/minimal/Shell'
import { Masthead } from '@/components/minimal/Masthead'
import { Colophon } from '@/components/minimal/Colophon'

export const metadata: Metadata = {
  title: 'Join Us | DeepBio',
  description: 'Careers at DeepBio. No open positions right now; get in touch to be considered for future roles.',
}

type Role = { title: string; meta: string[]; href: string }

// No open positions right now. Add a group here when hiring opens and the
// page switches from the "no openings" note to the role list automatically.
const openings: { team: string; roles: Role[] }[] = []

export default function JoinUs() {
  const count = openings.reduce((n, g) => n + g.roles.length, 0)

  return (
    <Shell>
      <div className="text-[color:var(--home-ink)]">
        <Masthead />

        <main className="mx-auto w-full max-w-[36rem] px-4 pt-8 text-[14px] leading-5 sm:px-0">
          <p>
            We are building AI for biology from Dhaka, for the health problems of Bangladesh, and are looking for
            exceptional people to join us. We have no open positions right now, but we are always glad to hear
            from people who want to work on these problems.
          </p>
          <p className="mt-4">
            If you&apos;re interested in partnering with us or getting in touch about something else, reach out via{' '}
            <a href="mailto:info@deepbioltd.com" className="hover:text-[color:var(--home-accent)]">info@deepbioltd.com</a>.
          </p>

          <section className="mt-12 px-0 sm:px-3" aria-labelledby="open-positions">
            <h2 id="open-positions" className="text-[1.15rem] font-semibold">Open Positions ({count})</h2>

            {count === 0 && (
              <div className="mt-6 rounded-[4px] border border-[color:var(--home-rule-soft)] px-4 py-5 text-[14px] leading-[1.6]">
                <p className="font-semibold">No open positions right now</p>
                <p className="mt-2 text-[color:var(--home-muted)]">
                  New roles are posted on this page and on our{' '}
                  <a
                    href="https://www.linkedin.com/company/deepbioltd/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-4 hover:text-[color:var(--home-accent)]"
                  >
                    LinkedIn
                  </a>
                  .
                </p>
              </div>
            )}

            {openings.map((group) => (
              <div key={group.team} className="mt-8">
                <h3 className="text-[15px] font-semibold">{group.team}</h3>
                <ul className="mt-4 space-y-3">
                  {group.roles.map((role) => (
                    <li key={role.title}>
                      <Link
                        href={role.href}
                        className="block rounded-[4px] border border-[color:var(--home-ink)] px-4 py-4 shadow-[0_1px_3px_rgba(0,0,0,0.12)] transition-colors hover:border-[color:var(--home-accent)] hover:text-[color:var(--home-accent)]"
                      >
                        <span className="block text-[15px] font-semibold">{role.title}</span>
                        <span className="mt-2 block text-[12px] text-[color:var(--home-muted)]">{role.meta.join(' • ')}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <p className="mt-14 text-[15px] leading-[1.6]">
              Think you&apos;d be a great fit anyway? Send your CV and a short note on what you&apos;d like to
              work on to{' '}
              <a href="mailto:info@deepbioltd.com?subject=Join%20DeepBio" className="hover:text-[color:var(--home-accent)]">info@deepbioltd.com</a>.
              We keep every message on file for future openings.
            </p>
          </section>
        </main>

        <Colophon />
      </div>
    </Shell>
  )
}
