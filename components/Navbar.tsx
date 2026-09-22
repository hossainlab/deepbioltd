'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ArrowUpRight, Mail } from 'lucide-react'
import { Logo } from './Logo'

interface NavItem {
  name: string
  path: string
  external?: boolean
}

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState<string>('')
  const pathname = usePathname()

  // Prevent background scrolling when mobile menu drawer is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  // Track scroll position for navbar background transition
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Scroll spy: tracks which sequential section is currently active on the homepage
  useEffect(() => {
    if (pathname !== '/') {
      setActiveSection('')
      return
    }

    const sections = ['what-we-do', 'models', 'research', 'team']

    const handleScrollSpy = () => {
      // If user is near top of page (Hero), clear active section
      if (window.scrollY < 120) {
        setActiveSection('')
        return
      }

      // If user reached the bottom of the page, activate the last section
      const isAtBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60
      if (isAtBottom) {
        setActiveSection('team')
        return
      }

      // Trigger line is 140px below viewport top (accounting for sticky navbar height)
      const triggerY = 140
      let current = ''

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= triggerY && rect.bottom > triggerY) {
            current = sectionId
            break
          }
        }
      }

      // Fallback: if between element boundaries, select the deepest section whose top has passed triggerY
      if (!current) {
        for (let i = sections.length - 1; i >= 0; i--) {
          const el = document.getElementById(sections[i])
          if (el) {
            const rect = el.getBoundingClientRect()
            if (rect.top <= triggerY) {
              current = sections[i]
              break
            }
          }
        }
      }

      if (current) {
        setActiveSection(current)
      }
    }

    handleScrollSpy()
    window.addEventListener('scroll', handleScrollSpy, { passive: true })
    window.addEventListener('resize', handleScrollSpy, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScrollSpy)
      window.removeEventListener('resize', handleScrollSpy)
    }
  }, [pathname])

  // Handle direct hash navigation on initial load or route transition
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      const id = window.location.hash.replace('#', '')
      const el = document.getElementById(id)
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' })
        }, 150)
      }
    }
  }, [pathname])

  // In-page smooth scroll click handler
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    setIsOpen(false)
    if (path.startsWith('/#')) {
      const targetId = path.replace('/#', '')
      if (pathname === '/') {
        e.preventDefault()
        const el = document.getElementById(targetId)
        if (el) {
          setActiveSection(targetId)
          el.scrollIntoView({ behavior: 'smooth' })
          window.history.pushState(null, '', `#${targetId}`)
        }
      }
    }
  }

  // Handle logo click: scroll to top if already on homepage
  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === '/') {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
      window.history.pushState(null, '', '/')
      setActiveSection('')
    }
  }

  const isDarkHero =
    !scrolled &&
    (pathname === '/services' ||
      pathname === '/case-studies' ||
      pathname === '/research' ||
      pathname === '/methodology' ||
      pathname === '/about')

  // Sequential order strictly matching homepage flow: What We Do -> Foundation Models -> Team -> Active Research
  const navLinks: NavItem[] = [
    { name: 'Work', path: '/#what-we-do' },
    { name: 'Models', path: '/#models' },
    { name: 'Research', path: '/#research' },
    { name: 'Team', path: '/#team' }
  ]

  const isItemActive = (item: NavItem) => {
    if (item.external) return false
    if (item.path.startsWith('/#')) {
      const sectionId = item.path.replace('/#', '')
      return pathname === '/' && activeSection === sectionId
    }
    return pathname === item.path
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? 'bg-white/95 backdrop-blur-md border-b border-rule shadow-subtle py-3'
        : 'bg-transparent border-b border-transparent py-4 md:py-5'
        }`}
    >
      <div className="max-w-plate mx-auto px-6 md:px-10 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          onClick={handleLogoClick}
          aria-label="DeepBio Limited, home"
          className="flex items-center gap-2 shrink-0"
        >
          <Logo isLight={isDarkHero} />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-2">
          <div
            className={`flex items-center rounded-full p-1 transition-all duration-300 ${isDarkHero
              ? 'border border-white/15 bg-white/10 backdrop-blur-md'
              : scrolled
                ? 'border border-rule bg-surface-secondary/90 shadow-subtle'
                : 'border border-rule-strong/40 bg-white/75 backdrop-blur-md shadow-subtle'
              }`}
          >
            {navLinks.map((item) => {
              const active = isItemActive(item)
              return item.external ? (
                <a
                  key={item.name}
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-3 py-1.5 rounded-full text-[11px] xl:text-xs font-medium transition-all flex items-center gap-1 ${isDarkHero
                    ? 'text-on-deep-mid hover:text-white hover:bg-white/10'
                    : 'text-slate hover:text-ink hover:bg-white'
                    }`}
                >
                  <span>{item.name}</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>
              ) : (
                <Link
                  key={item.name}
                  href={item.path}
                  onClick={(e) => handleNavClick(e, item.path)}
                  className={`px-3 py-1.5 rounded-full text-[11px] xl:text-xs font-medium transition-all duration-200 ${active
                    ? isDarkHero
                      ? 'bg-white/20 text-white font-semibold shadow-sm'
                      : 'bg-white text-[#205E92] font-semibold shadow-subtle'
                    : isDarkHero
                      ? 'text-on-deep-mid hover:text-white hover:bg-white/10'
                      : 'text-slate hover:text-ink hover:bg-white/80'
                    }`}
                >
                  {item.name}
                </Link>
              )
            })}
          </div>

          <a
            href="mailto:info@deepbioltd.com?subject=DeepBio%20Inquiry"
            className={`ml-2 inline-flex items-center gap-1.5 h-9 px-5 rounded-full text-xs font-semibold transition-all shadow-subtle whitespace-nowrap ${isDarkHero
              ? 'bg-white text-ink hover:bg-beam hover:text-white'
              : 'bg-ink text-white hover:bg-[#205E92]'
              }`}
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Get in touch</span>
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className={`lg:hidden p-2 rounded-full transition-colors ${isDarkHero ? 'text-white hover:bg-white/10' : 'text-ink hover:bg-black/5'
            }`}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 border-t border-rule bg-white p-6 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-2">
            {navLinks.map((item) => {
              const active = isItemActive(item)
              return item.external ? (
                <a
                  key={item.name}
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-semibold text-slate hover:text-ink py-2 flex items-center justify-between"
                >
                  <span>{item.name}</span>
                  <ArrowUpRight className="w-4 h-4 text-slate/60" />
                </a>
              ) : (
                <Link
                  key={item.name}
                  href={item.path}
                  onClick={(e) => handleNavClick(e, item.path)}
                  className={`text-sm font-semibold py-2 px-3 rounded-xl transition-all flex items-center justify-between ${active
                    ? 'bg-blue-50 text-[#205E92] font-bold'
                    : 'text-slate hover:text-ink hover:bg-slate-50'
                    }`}
                >
                  <span>{item.name}</span>
                  {item.path.startsWith('/#') && (
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-slate-100 text-slate-500 font-normal">
                      Section
                    </span>
                  )}
                </Link>
              )
            })}

            <div className="pt-3 border-t border-rule mt-2">
              <a
                href="mailto:info@deepbioltd.com?subject=DeepBio%20Inquiry"
                onClick={() => setIsOpen(false)}
                className="btn w-full text-center flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4" />
                <span>Get in touch</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
