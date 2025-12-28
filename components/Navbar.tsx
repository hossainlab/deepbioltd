
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';
import { View } from '../App';

interface NavbarProps {
  scrolled: boolean;
  currentView: View;
  onNavigate: (view: View) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ scrolled, currentView, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', view: 'home', href: '#home' },
    { name: 'About', view: 'about', href: '#' },
    { name: 'Research', view: 'research', href: '#' },
    { name: 'Services', view: 'services', href: '#' },
    { name: 'Training', view: 'training', href: '#' },
  ];

  const handleLinkClick = (e: React.MouseEvent, view: View, href: string) => {
    if (view !== currentView || view === 'home') {
      if (href === '#' || view !== 'home') {
        e.preventDefault();
      }
      onNavigate(view);
    }
    setIsOpen(false);
  };

  const isLight = !scrolled && (currentView === 'home') && window.innerWidth >= 1024;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled || currentView !== 'home' ? 'glass py-3 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <button onClick={() => onNavigate('home')} className="transition-transform hover:scale-105 active:scale-95 duration-300">
          <Logo isLight={isLight} />
        </button>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleLinkClick(e, item.view as View, item.href)}
              className={`text-sm font-semibold transition-all hover:text-brand-primary relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-brand-primary after:transition-all hover:after:w-full 
                ${(scrolled || currentView !== 'home') ? 'text-slate-600' : 'text-slate-900 md:text-white/80'}
                ${currentView === item.view ? 'text-brand-primary after:w-full' : ''}
              `}
            >
              {item.name}
            </a>
          ))}
          <a
            href="mailto:deepbiobd@gmail.com?subject=Partnership Inquiry"
            className="ml-4 px-6 py-2.5 bg-brand-primary text-white rounded-full text-sm font-bold hover:bg-opacity-90 transition-all shadow-md hover:shadow-brand-primary/25 inline-block"
          >
            Partner With Us
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className={`lg:hidden p-2 rounded-lg ${(scrolled || currentView !== 'home') ? 'text-slate-900' : 'text-white'}`} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-2xl border-t border-slate-100 p-8 flex flex-col gap-6 animate-in slide-in-from-top-2">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`text-xl font-bold transition-colors ${currentView === item.view ? 'text-brand-primary' : 'text-slate-800 hover:text-brand-primary'}`}
              onClick={(e) => handleLinkClick(e, item.view as View, item.href)}
            >
              {item.name}
            </a>
          ))}
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
