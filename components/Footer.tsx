
import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Github, Youtube, Mail, Phone } from 'lucide-react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="on-deep bg-abyss py-20 text-on-deep">
      <div className="max-w-plate mx-auto px-6 md:px-10 grid md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <Logo isLight />
          <p className="max-w-measure text-sm leading-relaxed text-on-deep-mid">
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
                className="flex h-9 w-9 items-center justify-center border border-deep-rule text-on-deep-mid transition-colors hover:border-beam hover:text-beam"
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="data text-on-deep-faint">Services</h4>
          <ul className="space-y-3 text-sm">
            {[
              { label: 'All Services', href: '/services' },
              { label: 'Case Studies', href: '/case-studies' },
              { label: 'Methodology', href: '/methodology' },
              { label: 'Research Programs', href: '/research-programs' },
            ].map(link => (
              <li key={link.href}>
                <Link href={link.href} className="text-on-deep-mid transition-colors hover:text-beam">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="data text-on-deep-faint">Company</h4>
          <ul className="space-y-3 text-sm">
            {[
              { label: 'About', href: '/about' },
              { label: 'Research', href: '/research' },
              { label: 'Team', href: '/team' },
            ].map(link => (
              <li key={link.href}>
                <Link href={link.href} className="text-on-deep-mid transition-colors hover:text-beam">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="data text-on-deep-faint">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <a href="mailto:info@deepbioltd.com" className="text-on-deep-mid transition-colors hover:text-beam">
                info@deepbioltd.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <a href="tel:+8801843381652" className="text-on-deep-mid transition-colors hover:text-beam">
                +8801843381652
              </a>
            </li>
            <li className="text-on-deep-mid">
              Dhaka, Bangladesh
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-plate mx-auto px-6 md:px-10 mt-16 pt-8 border-t border-deep-rule">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-on-deep-faint">
            © {new Date().getFullYear()} DeepBio Limited. All Rights Reserved.
            {/* TODO(deepbio): add company registration number and registered
                office address here — international B2B buyers look for both. */}
          </p>
          <nav aria-label="Legal" className="flex items-center gap-6 text-sm">
            <Link href="/privacy" className="text-on-deep-mid transition-colors hover:text-beam">
              Privacy
            </Link>
            <Link href="/terms" className="text-on-deep-mid transition-colors hover:text-beam">
              Terms
            </Link>
            <Link href="/contact" className="text-on-deep-mid transition-colors hover:text-beam">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};
