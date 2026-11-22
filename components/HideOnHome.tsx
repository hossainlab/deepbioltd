'use client'

import { usePathname } from 'next/navigation'

/**
 * Pages built on the minimal shell (components/minimal/*) carry their own
 * masthead and colophon, so the global Navbar and Footer step aside there.
 */
const MINIMAL_PREFIXES = ['/research', '/training', '/services', '/resources', '/case-studies', '/join-us']

export function isMinimalRoute(pathname: string) {
  return pathname === '/' || MINIMAL_PREFIXES.some((p) => pathname === p || pathname.startsWith(p + '/'))
}

export function HideOnHome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() || '/'
  if (isMinimalRoute(pathname)) return null
  return <>{children}</>
}
