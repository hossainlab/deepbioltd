import React from 'react'
import Link from 'next/link'
import {
  Linkedin,
  Twitter,
  Github,
  Facebook,
  Youtube,
  Mail,
} from 'lucide-react'
import { Logo } from './Logo'

export const Footer: React.FC = () => {
  const socials = [
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/company/deepbioltd/',
      label: 'LinkedIn',
    },
    {
      icon: Twitter,
      href: 'https://twitter.com/deepbioltd',
      label: 'X (Twitter)',
    },
    {
      icon: Github,
      href: 'https://github.com/deepbioltd',
      label: 'GitHub',
    },
    {
      icon: Facebook,
      href: 'https://www.facebook.com/deepbioltd',
      label: 'Facebook',
    },
    {
      icon: Youtube,
      href: 'https://www.youtube.com/@deepbioltd',
      label: 'YouTube',
    },
  ]

  const footerLinks = [
    { label: 'Work', href: '/#what-we-do' },
    { label: 'Models', href: '/#models' },
    { label: 'Research', href: '/#research' },
    { label: 'Team', href: '/#team' },
  ]

  return (
    <footer className="bg-white border-t border-rule text-ink pt-14 pb-12">
      <div className="max-w-plate mx-auto px-6 md:px-10">
        {/* Main Row: Left (Brand & Mission) vs Right (Work, Models, Research, Team) */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 pb-12 border-b border-rule">
          {/* Left Column: Brand & Mission */}
          <div className="max-w-md space-y-4">
            <Logo isLight={false} />
            <p className="text-xs leading-relaxed text-ink-secondary font-light">
              DeepBio Limited is an applied computational biology and biomolecular intelligence research hub based in Dhaka, Bangladesh. Grounded in open, reproducible science.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2 pt-1">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-rule text-slate hover:border-[#205E92] hover:text-white hover:bg-[#205E92] transition-all shadow-xs"
                >
                  <social.icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Only Work, Models, Research, Team */}
          <div className="flex flex-col gap-3 min-w-[140px]">
            <h4 className="font-mono text-ink font-bold uppercase tracking-wider text-xs">
              Navigation
            </h4>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-slate hover:text-[#205E92] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Legal & Contact Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate font-light">
          <p>
            &copy; {new Date().getFullYear()} DeepBio Limited. Grounded in open, reproducible science.
          </p>

          <div className="flex items-center gap-5">
            <a
              href="mailto:info@deepbioltd.com?subject=DeepBio%20Inquiry"
              className="text-slate hover:text-[#205E92] transition-colors inline-flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5 text-[#205E92]" />
              <span>info@deepbioltd.com</span>
            </a>
            <span className="text-slate-300">&bull;</span>
            <span>Dhaka, Bangladesh</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
