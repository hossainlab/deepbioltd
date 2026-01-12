
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';

interface NavbarProps {
  scrolled: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [researchMenuOpen, setResearchMenuOpen] = useState(false);
  const [labsMenuOpen, setLabsMenuOpen] = useState(false);
  const [resourcesMenuOpen, setResourcesMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Training', path: '/training' },
  ];

  const researchSubmenu = [
    { name: 'Overview', path: '/research' },
    { name: 'Research Programs', path: '/research-programs' },
    { name: 'Publications', path: '/publications' },
  ];

  const labsSubmenu = [
    { name: 'Cloud Labs', path: '/labs/cloud-labs' },
    { name: 'Big Bioinformatics Lab', path: '/labs/bigbio' },
    { name: 'Generative Genomics Lab', path: '/labs/generative-genomics' },
    { name: 'Insilico Medicine', path: '/labs/insilico-medicine' },
    { name: 'Lab Onboarding', path: '/lab-onboarding' },
  ];

  const resourcesSubmenu = [
    { name: 'Company Brochure', path: '/brochure' },
    { name: 'DeepBio Ambassadors', path: '/ambassadors' },
    { name: 'Our Ambassadors', path: '/our-ambassadors' },
    { name: 'Slack Community', path: 'https://join.slack.com/t/deepbiocommunity/shared_invite', external: true },
  ];

  const isResearchPage = ['/research', '/research-programs', '/publications'].includes(location.pathname);
  const isLabsPage = ['/labs/cloud-labs', '/labs/bigbio', '/labs/generative-genomics', '/labs/insilico-medicine', '/lab-onboarding'].includes(location.pathname);
  const isResourcesPage = ['/brochure', '/ambassadors', '/our-ambassadors'].includes(location.pathname);
  const isLight = !scrolled && location.pathname === '/' && window.innerWidth >= 1024;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled || location.pathname !== '/' ? 'glass py-3 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="transition-transform hover:scale-105 active:scale-95 duration-300">
          <Logo isLight={isLight} />
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`text-sm font-semibold transition-all hover:text-brand-primary relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-brand-primary after:transition-all hover:after:w-full
                ${(scrolled || location.pathname !== '/') ? 'text-slate-600' : 'text-slate-900 md:text-white/80'}
                ${location.pathname === item.path ? 'text-brand-primary after:w-full' : ''}
              `}
            >
              {item.name}
            </Link>
          ))}

          {/* Research Menu - Modern Hover Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setResearchMenuOpen(true)}
            onMouseLeave={() => setResearchMenuOpen(false)}
          >
            <button
              className={`text-sm font-semibold transition-all hover:text-brand-primary relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-brand-primary after:transition-all hover:after:w-full
                ${(scrolled || location.pathname !== '/') ? 'text-slate-600' : 'text-slate-900 md:text-white/80'}
                ${isResearchPage ? 'text-brand-primary after:w-full' : ''}
              `}
            >
              Research
            </button>

            {/* Modern Dropdown Menu */}
            {researchMenuOpen && (
              <div className="absolute top-full left-0 pt-4 w-64 animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden mt-2">
                  {researchSubmenu.map((item, index) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setResearchMenuOpen(false)}
                      className={`block w-full text-left px-6 py-4 text-sm font-semibold transition-all
                        ${location.pathname === item.path
                          ? 'bg-brand-primary/10 text-brand-primary'
                          : 'text-slate-700 hover:bg-slate-50 hover:text-brand-primary'
                        }
                        ${index !== researchSubmenu.length - 1 ? 'border-b border-slate-100' : ''}
                      `}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Labs Menu - Modern Hover Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setLabsMenuOpen(true)}
            onMouseLeave={() => setLabsMenuOpen(false)}
          >
            <button
              className={`text-sm font-semibold transition-all hover:text-brand-primary relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-brand-primary after:transition-all hover:after:w-full
                ${(scrolled || location.pathname !== '/') ? 'text-slate-600' : 'text-slate-900 md:text-white/80'}
                ${isLabsPage ? 'text-brand-primary after:w-full' : ''}
              `}
            >
              Labs
            </button>

            {/* Modern Dropdown Menu */}
            {labsMenuOpen && (
              <div className="absolute top-full left-0 pt-4 w-64 animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden mt-2">
                  {labsSubmenu.map((item, index) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setLabsMenuOpen(false)}
                      className={`block w-full text-left px-6 py-4 text-sm font-semibold transition-all
                        ${location.pathname === item.path
                          ? 'bg-brand-primary/10 text-brand-primary'
                          : 'text-slate-700 hover:bg-slate-50 hover:text-brand-primary'
                        }
                        ${index !== labsSubmenu.length - 1 ? 'border-b border-slate-100' : ''}
                      `}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Resources Menu - Modern Hover Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setResourcesMenuOpen(true)}
            onMouseLeave={() => setResourcesMenuOpen(false)}
          >
            <button
              className={`text-sm font-semibold transition-all hover:text-brand-primary relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-brand-primary after:transition-all hover:after:w-full
                ${(scrolled || location.pathname !== '/') ? 'text-slate-600' : 'text-slate-900 md:text-white/80'}
                ${isResourcesPage ? 'text-brand-primary after:w-full' : ''}
              `}
            >
              Resources
            </button>

            {/* Modern Dropdown Menu */}
            {resourcesMenuOpen && (
              <div className="absolute top-full left-0 pt-4 w-64 animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden mt-2">
                  {resourcesSubmenu.map((item, index) => (
                    item.external ? (
                      <a
                        key={item.path}
                        href={item.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setResourcesMenuOpen(false)}
                        className={`block w-full text-left px-6 py-4 text-sm font-semibold transition-all text-slate-700 hover:bg-slate-50 hover:text-brand-primary
                          ${index !== resourcesSubmenu.length - 1 ? 'border-b border-slate-100' : ''}
                        `}
                      >
                        {item.name}
                      </a>
                    ) : (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={() => setResourcesMenuOpen(false)}
                        className={`block w-full text-left px-6 py-4 text-sm font-semibold transition-all
                          ${location.pathname === item.path
                            ? 'bg-brand-primary/10 text-brand-primary'
                            : 'text-slate-700 hover:bg-slate-50 hover:text-brand-primary'
                          }
                          ${index !== resourcesSubmenu.length - 1 ? 'border-b border-slate-100' : ''}
                        `}
                      >
                        {item.name}
                      </Link>
                    )
                  ))}
                </div>
              </div>
            )}
          </div>

          <a
            href="mailto:deepbiobd@gmail.com?subject=Partnership Inquiry"
            className="ml-4 px-6 py-2.5 bg-brand-primary text-white rounded-full text-sm font-bold hover:bg-opacity-90 transition-all shadow-md hover:shadow-brand-primary/25 inline-block"
          >
            Partner With Us
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className={`lg:hidden p-2 rounded-lg ${(scrolled || location.pathname !== '/') ? 'text-slate-900' : 'text-white'}`} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-2xl border-t border-slate-100 p-8 flex flex-col gap-6 animate-in slide-in-from-top-2">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`text-xl font-bold transition-colors ${location.pathname === item.path ? 'text-brand-primary' : 'text-slate-800 hover:text-brand-primary'}`}
            >
              {item.name}
            </Link>
          ))}

          {/* Research Submenu - Mobile */}
          <div className="space-y-4">
            <div className={`text-xl font-bold ${isResearchPage ? 'text-brand-primary' : 'text-slate-800'}`}>
              Research
            </div>
            <div className="pl-6 space-y-3 border-l-2 border-slate-200">
              {researchSubmenu.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block text-left text-lg font-semibold transition-colors ${location.pathname === item.path ? 'text-brand-primary' : 'text-slate-600 hover:text-brand-primary'}`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Labs Submenu - Mobile */}
          <div className="space-y-4">
            <div className={`text-xl font-bold ${isLabsPage ? 'text-brand-primary' : 'text-slate-800'}`}>
              Labs
            </div>
            <div className="pl-6 space-y-3 border-l-2 border-slate-200">
              {labsSubmenu.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block text-left text-lg font-semibold transition-colors ${location.pathname === item.path ? 'text-brand-primary' : 'text-slate-600 hover:text-brand-primary'}`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Resources Submenu - Mobile */}
          <div className="space-y-4">
            <div className={`text-xl font-bold ${isResourcesPage ? 'text-brand-primary' : 'text-slate-800'}`}>
              Resources
            </div>
            <div className="pl-6 space-y-3 border-l-2 border-slate-200">
              {resourcesSubmenu.map((item) => (
                item.external ? (
                  <a
                    key={item.path}
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="block text-left text-lg font-semibold transition-colors text-slate-600 hover:text-brand-primary"
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`block text-left text-lg font-semibold transition-colors ${location.pathname === item.path ? 'text-brand-primary' : 'text-slate-600 hover:text-brand-primary'}`}
                  >
                    {item.name}
                  </Link>
                )
              ))}
            </div>
          </div>

          <a
            href="mailto:deepbiobd@gmail.com?subject=Partnership Inquiry"
            className="w-full py-4 bg-brand-primary text-white rounded-xl text-lg font-bold shadow-xl text-center block"
          >
            Partner With Us
          </a>
        </div>
      )}
    </nav>
  );
};
