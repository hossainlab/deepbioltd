
import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Github, Youtube, Mail, Phone } from 'lucide-react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-deep text-paper py-20">
      <div className="max-w-plate mx-auto px-6 md:px-10 grid md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <Logo isLight />
          <p className="text-sm leading-relaxed text-paper/60 max-w-measure">
            Innovating at the intersection of AI, bioinformatics, and public health informatics to advance global health.
          </p>
          <div className="flex gap-3">
            {[
              { icon: Facebook, href: "https://www.facebook.com/deepbioltd", label: "Facebook" },
              { icon: Linkedin, href: "https://www.linkedin.com/company/deepbioltd/", label: "LinkedIn" },
              { icon: Twitter, href: "https://twitter.com/deepbioltd", label: "X (Twitter)" },
              { icon: Github, href: "https://github.com/deepbioltd", label: "GitHub" },
              { icon: Youtube, href: "https://www.youtube.com/@deepbioltd", label: "YouTube" },
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-9 w-9 items-center justify-center border border-deep-rule text-paper/70 transition-colors hover:border-paper/40 hover:text-paper"
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="font-serif text-base text-paper">Services</h4>
          <ul className="space-y-3 text-sm">
            {[
              { label: 'All Services', href: '/services' },
              { label: 'Case Studies', href: '/case-studies' },
              { label: 'Methodology', href: '/methodology' },
              { label: 'Research Programs', href: '/research-programs' },
            ].map(link => (
              <li key={link.href}>
                <Link href={link.href} className="text-paper/60 hover:text-paper transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="font-serif text-base text-paper">Company</h4>
          <ul className="space-y-3 text-sm">
            {[
              { label: 'About', href: '/about' },
              { label: 'Research', href: '/research' },
              { label: 'Team', href: '/team' },
            ].map(link => (
              <li key={link.href}>
                <Link href={link.href} className="text-paper/60 hover:text-paper transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="font-serif text-base text-paper">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <a href="mailto:info@deepbioltd.com" className="text-paper/60 hover:text-paper transition-colors">
                info@deepbioltd.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <a href="tel:+8801843381652" className="text-paper/60 hover:text-paper transition-colors">
                +8801843381652
              </a>
            </li>
            <li className="text-paper/60">
              Dhaka, Bangladesh
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-plate mx-auto px-6 md:px-10 mt-16 pt-8 border-t border-deep-rule">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-paper/50">
            © {new Date().getFullYear()} DeepBio Limited. All Rights Reserved.
            {/* TODO(deepbio): add company registration number and registered
                office address here — international B2B buyers look for both. */}
          </p>
          <nav aria-label="Legal" className="flex items-center gap-6 text-sm">
            <Link href="/privacy" className="text-paper/60 hover:text-paper transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-paper/60 hover:text-paper transition-colors">
              Terms
            </Link>
            <Link href="/contact" className="text-paper/60 hover:text-paper transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};
