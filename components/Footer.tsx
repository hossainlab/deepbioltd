
import React from 'react';
import { Facebook, Twitter, Linkedin, Github, Youtube, Mail, Phone } from 'lucide-react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-primary text-white py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <Logo isLight />
          <p className="text-sm leading-relaxed text-white/80">
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
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all"
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="font-bold text-sm uppercase tracking-wider">Services</h4>
          <ul className="space-y-3 text-sm">
            {['Genomics', 'Drug Design', 'Protein Modeling', 'AI in Health'].map(link => (
              <li key={link}>
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="font-bold text-sm uppercase tracking-wider">Company</h4>
          <ul className="space-y-3 text-sm">
            {['About Us', 'Research', 'Careers', 'Team'].map(link => (
              <li key={link}>
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="font-bold text-sm uppercase tracking-wider">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <a href="mailto:deepbiobd@gmail.com" className="text-white/80 hover:text-white transition-colors">
                deepbiobd@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <a href="tel:+8801843381652" className="text-white/80 hover:text-white transition-colors">
                +8801843381652
              </a>
            </li>
            <li className="text-white/80">
              Dhaka, Bangladesh
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-white/20">
        <p className="text-center text-sm text-white/60">
          © {new Date().getFullYear()} DeepBio Limited. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};
