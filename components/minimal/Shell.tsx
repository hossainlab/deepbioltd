'use client'

import React, { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

type Theme = 'light' | 'dark'
const KEY = 'deepbio-home-theme'

/**
 * Wraps a minimal page in a themed surface and owns the light/dark switch.
 * Colors are CSS variables declared under .home-shell in globals.css, so
 * every child reads them without knowing which theme is on.
 */
export function Shell({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light')

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(KEY)
      if (saved === 'light' || saved === 'dark') setTheme(saved)
    } catch {
      /* storage unavailable: stay light */
    }
  }, [])

  const toggle = () => {
    const next: Theme = theme === 'light' ? 'dark' : 'light'
    setTheme(next)
    try {
      window.localStorage.setItem(KEY, next)
    } catch {
      /* ignore */
    }
  }

  return (
    <div className="home-shell min-h-screen" data-theme={theme}>
      <button
        type="button"
        onClick={toggle}
        aria-label={theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}
        className="fixed right-4 top-4 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--home-rule-soft)] bg-[color:var(--home-bg)] text-[color:var(--home-ink)] shadow-[0_2px_10px_rgba(0,0,0,0.08)] transition-colors hover:text-[color:var(--home-accent)] md:right-6 md:top-6"
      >
        {theme === 'light' ? <Moon className="h-[18px] w-[18px]" /> : <Sun className="h-[18px] w-[18px]" />}
      </button>
      {children}
    </div>
  )
}
