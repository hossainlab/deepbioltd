'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const minimalNav: { name: string; href: string; external?: boolean }[] = [
  { name: 'Home', href: '/' },
  { name: 'Research', href: '/research' },
  { name: 'Services', href: '/services' },
  { name: 'Training', href: 'https://deepbioacademy.com/', external: true },
  { name: 'Join Us', href: '/join-us' },
]

export function Mark({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      {[
        'M4 4C4 4 7 6 12 12S20 20 20 20',
        'M20 4C20 4 17 6 12 12S4 20 4 20',
        'M6.5 6.5H4', 'M17.5 6.5H20', 'M6.5 17.5H4', 'M17.5 17.5H20',
        'M9 9H7.5', 'M16.5 9H15', 'M9 15H7.5', 'M16.5 15H15',
      ].map((d) => (
        <path key={d} d={d} stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      ))}
    </svg>
  )
}

/** Wordmark, nav and rule shared by every minimal page. */
export function Masthead() {
  const pathname = usePathname() || '/'
  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(href + '/')

  return (
    <header className="mx-auto w-full max-w-[36rem] px-4 pt-12 text-center sm:px-0">
      <Link
        href="/"
        aria-label="DeepBio, home"
        className="inline-flex items-center gap-3 text-[color:var(--home-accent)] sm:gap-4"
      >
        <Mark className="h-9 w-9 sm:h-12 sm:w-12" />
        <span className="text-[2.6rem] font-bold leading-none tracking-tight sm:text-[3.6rem]">DeepBio</span>
      </Link>

      <nav aria-label="Primary" className="mt-6">
        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-base">
          {minimalNav.map((item) => {
            if (item.external) {
              return (
                <li key={item.name}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-[color:var(--home-accent)]"
                  >
                    {item.name}
                  </a>
                </li>
              )
            }
            const active = isActive(item.href)
            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  aria-current={active ? 'page' : undefined}
                  className={
                    active
                      ? 'text-[color:var(--home-accent)] underline decoration-1 underline-offset-[6px]'
                      : 'transition-colors hover:text-[color:var(--home-accent)]'
                  }
                >
                  {item.name}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>

      <hr className="mt-6 border-0 border-t border-[color:var(--home-rule)]" />
    </header>
  )
}
