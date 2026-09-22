'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { Logo } from './Logo'

/**
 * Two states, one bar.
 *
 * Over the homepage hero the ground is navy, so the bar is transparent and the
 * mark runs in its light form. Everywhere else — and on the homepage once you
 * have scrolled past the hero — it is a white bar with a hairline and the mark
 * in brand blue. That is the whole behaviour; there is no capsule, no blur
 * stack and no shadow until the bar is actually sitting on top of content.
 */
export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [researchMenuOpen, setResearchMenuOpen] = useState(false)
  const [labsMenuOpen, setLabsMenuOpen] = useState(false)
  const [resourcesMenuOpen, setResourcesMenuOpen] = useState(false)
  const pathname = usePathname()

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 60)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Temporarily hidden from the navbar pending menu reorganization.
  const SHOW_RESEARCH_MENU: boolean = false
  const SHOW_LABS_MENU: boolean = false

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Academy', path: 'https://deepbioacademy.com/', external: true },
    { name: 'Research Wing', path: 'https://chiralbd.github.io/', external: true },
  ]

  const researchSubmenu = [
    { name: 'Overview', path: '/research' },
    { name: 'Research Programs', path: '/research-programs' },
  ]

  const labsSubmenu = [
    { name: 'BioHPC Lab', path: '/labs/biohpc' },
    { name: 'Big Bioinformatics Lab', path: '/labs/bigbio' },
    { name: 'Generative Genomics Lab', path: '/labs/generative-genomics' },
    { name: 'Insilico Medicine', path: '/labs/insilico-medicine' },
    { name: 'Lab Onboarding', path: '/lab-onboarding' },
  ]

  // 'DeepBio Ambassadors' and 'Our Ambassadors' read as duplicates. They are
  // different pages — one recruits, one lists the current cohort — so the fix
  // is naming them for what they do, not merging the routes.
  const resourcesSubmenu = [
    { name: 'Team', path: '/team' },
    { name: 'Contact', path: '/contact' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Company Brochure', path: '/brochure' },
    { name: 'Career Guide', path: '/career-guide' },
    { name: 'Become an Ambassador', path: '/ambassadors' },
    { name: 'Meet the Ambassadors', path: '/our-ambassadors' },
    { name: 'Slack Community', path: 'https://join.slack.com/t/deepbiocommunity/shared_invite', external: true },
  ]

  const isResearchPage = ['/research', '/research-programs'].includes(pathname)
  const isLabsPage = labsSubmenu.some((l) => l.path === pathname)
  const isResourcesPage = ['/brochure', '/case-studies', '/career-guide', '/ambassadors', '/our-ambassadors', '/team', '/contact'].includes(pathname)

  // Only the homepage opens on the navy hero.
  const overHero = pathname === '/' && !scrolled

  const barClass = overHero
    ? 'bg-transparent py-6'
    : 'bg-paper border-b border-rule shadow-bar py-3'

  const itemClass = (active: boolean) =>
    [
      'text-sm font-semibold transition-colors',
      overHero
        ? active
          ? 'text-beam'
          : 'text-on-deep-mid hover:text-on-deep'
        : active
          ? 'text-brand'
          : 'text-slate hover:text-brand',
    ].join(' ')

  const dropdownPanel = 'bg-paper border border-rule shadow-bar overflow-hidden mt-2'

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${overHero ? 'on-deep ' : ''}${barClass}`}
    >
      <div className="max-w-plate mx-auto px-6 md:px-10 flex items-center justify-between">
        <Link href="/" aria-label="DeepBio, home">
          <Logo isLight={overHero} />
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((item) =>
            item.external ? (
              <a
                key={item.name}
                href={item.path}
                target="_blank"
                rel="noopener noreferrer"
                className={itemClass(false)}
              >
                {item.name}
              </a>
            ) : (
              <Link
                key={item.name}
                href={item.path}
                className={itemClass(pathname === item.path)}
              >
                {item.name}
              </Link>
            ),
          )}

          {SHOW_RESEARCH_MENU && (
            <div
              className="relative"
              onMouseEnter={() => setResearchMenuOpen(true)}
              onMouseLeave={() => setResearchMenuOpen(false)}
            >
              <button className={itemClass(isResearchPage)}>Research</button>

              {researchMenuOpen && (
                <div className="absolute top-full left-0 pt-4 w-64">
                  <div className={dropdownPanel}>
                    {researchSubmenu.map((item, index) => (
                      <Link
                        key={item.path}
                        href={item.path}
                        onClick={() => setResearchMenuOpen(false)}
                        className={`block w-full px-5 py-3.5 text-sm font-semibold transition-colors
                          ${pathname === item.path ? 'bg-chalk text-brand' : 'text-slate hover:bg-chalk hover:text-ink'}
                          ${index !== researchSubmenu.length - 1 ? 'border-b border-rule' : ''}`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {SHOW_LABS_MENU && (
            <div
              className="relative"
              onMouseEnter={() => setLabsMenuOpen(true)}
              onMouseLeave={() => setLabsMenuOpen(false)}
            >
              <button className={itemClass(isLabsPage)}>Labs</button>

              {labsMenuOpen && (
                <div className="absolute top-full left-0 pt-4 w-64">
                  <div className={dropdownPanel}>
                    {labsSubmenu.map((item, index) => (
                      <Link
                        key={item.path}
                        href={item.path}
                        onClick={() => setLabsMenuOpen(false)}
                        className={`block w-full px-5 py-3.5 text-sm font-semibold transition-colors
                          ${pathname === item.path ? 'bg-chalk text-brand' : 'text-slate hover:bg-chalk hover:text-ink'}
                          ${index !== labsSubmenu.length - 1 ? 'border-b border-rule' : ''}`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          <div
            className="relative"
            onMouseEnter={() => setResourcesMenuOpen(true)}
            onMouseLeave={() => setResourcesMenuOpen(false)}
          >
            <button className={itemClass(isResourcesPage)}>More</button>

            {resourcesMenuOpen && (
              <div className="absolute top-full right-0 pt-4 w-64">
                <div className={dropdownPanel}>
                  {resourcesSubmenu.map((item, index) =>
                    item.external ? (
                      <a
                        key={item.path}
                        href={item.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setResourcesMenuOpen(false)}
                        className={`block w-full px-5 py-3.5 text-sm font-semibold text-slate transition-colors hover:bg-chalk hover:text-ink
                          ${index !== resourcesSubmenu.length - 1 ? 'border-b border-rule' : ''}`}
                      >
                        {item.name}
                      </a>
                    ) : (
                      <Link
                        key={item.path}
                        href={item.path}
                        onClick={() => setResourcesMenuOpen(false)}
                        className={`block w-full px-5 py-3.5 text-sm font-semibold transition-colors
                          ${pathname === item.path ? 'bg-chalk text-brand' : 'text-slate hover:bg-chalk hover:text-ink'}
                          ${index !== resourcesSubmenu.length - 1 ? 'border-b border-rule' : ''}`}
                      >
                        {item.name}
                      </Link>
                    ),
                  )}
                </div>
              </div>
            )}
          </div>

          <a
            href="mailto:info@deepbioltd.com?subject=Partnership Inquiry"
            className={`ml-2 px-5 py-2.5 text-sm ${overHero ? 'btn-light' : 'btn'}`}
          >
            Partner with us
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className={`lg:hidden p-2 ${overHero ? 'text-on-deep' : 'text-ink'}`}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 max-h-[80vh] overflow-y-auto border-t border-rule bg-paper p-6 shadow-bar">
          <div className="flex flex-col gap-5">
            {navLinks.map((item) =>
              item.external ? (
                <a
                  key={item.name}
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-semibold text-ink"
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  href={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-semibold ${pathname === item.path ? 'text-brand' : 'text-ink'}`}
                >
                  {item.name}
                </Link>
              ),
            )}

            {SHOW_RESEARCH_MENU && (
              <div>
                <p className="data text-slate">Research</p>
                <div className="mt-3 flex flex-col gap-3 border-l border-rule pl-5">
                  {researchSubmenu.map((item) => (
                    <Link
                      key={item.path}
                      href={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`text-base font-semibold ${pathname === item.path ? 'text-brand' : 'text-slate'}`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {SHOW_LABS_MENU && (
              <div>
                <p className="data text-slate">Labs</p>
                <div className="mt-3 flex flex-col gap-3 border-l border-rule pl-5">
                  {labsSubmenu.map((item) => (
                    <Link
                      key={item.path}
                      href={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`text-base font-semibold ${pathname === item.path ? 'text-brand' : 'text-slate'}`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <div>
              <p className="data text-slate">More</p>
              <div className="mt-3 flex flex-col gap-3 border-l border-rule pl-5">
                {resourcesSubmenu.map((item) =>
                  item.external ? (
                    <a
                      key={item.path}
                      href={item.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsOpen(false)}
                      className="text-base font-semibold text-slate"
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link
                      key={item.path}
                      href={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`text-base font-semibold ${pathname === item.path ? 'text-brand' : 'text-slate'}`}
                    >
                      {item.name}
                    </Link>
                  ),
                )}
              </div>
            </div>

            <a
              href="mailto:info@deepbioltd.com?subject=Partnership Inquiry"
              onClick={() => setIsOpen(false)}
              className="btn mt-1 w-full"
            >
              Partner with us
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
