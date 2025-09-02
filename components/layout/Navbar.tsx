
import React, { useState, useEffect, memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MenuIcon, XIcon } from '../icons/Icons.tsx';

const Logo: React.FC = () => (
    <div className="flex items-center gap-2" aria-label="DeepBio Logo">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
        <path d="M4 4C4 4 7 6 12 12S20 20 20 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M20 4C20 4 17 6 12 12S4 20 4 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M6.5 6.5H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M17.5 6.5H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M6.5 17.5H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M17.5 17.5H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M9 9H7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M16.5 9H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M9 15H7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M16.5 15H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
      <span className="text-2xl font-bold text-primary logo-text" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Arial, sans-serif'}}>DeepBio</span>
    </div>
);


interface NavbarProps {}

const NAV_ITEMS: { name: string, path: string }[] = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Research', path: '/research' },
    { name: 'Team', path: '/team' },
    { name: 'Courses', path: '/courses' },
    { name: 'Resources', path: '/resources' },
    { name: 'Contact', path: '/contact' },
    { name: 'Careers', path: '/careers' },
];

const Navbar: React.FC<NavbarProps> = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [menuOpen]);
    
    const location = useLocation();

    const handleNavClick = () => {
        setMenuOpen(false); // Close menu on navigation
    };

    return (
        <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 font-heading">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <Link
                        to="/"
                        onClick={handleNavClick}
                        className="flex-shrink-0 flex items-center focus:outline-none focus:ring-0 active:outline-none"
                        style={{outline: 'none', boxShadow: 'none'}}
                        aria-label="Back to homepage"
                    >
                         <Logo />
                    </Link>
                    
                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center">
                        <nav className="flex space-x-6">
                            {NAV_ITEMS.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.path}
                                    onClick={handleNavClick}
                                    className={`navbar-text text-base font-medium transition-colors duration-300 px-1 py-2 focus:outline-none focus:ring-0 focus:border-primary active:outline-none active:ring-0 ${
                                        location.pathname === item.path 
                                        ? 'text-primary border-b-2 border-primary' 
                                        : 'text-gray-500 hover:text-primary'
                                    }`}
                                    style={{
                                        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Arial, sans-serif',
                                        outline: 'none',
                                        boxShadow: 'none'
                                    }}
                                    aria-current={location.pathname === item.path ? 'page' : undefined}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button 
                            onClick={() => setMenuOpen(!menuOpen)} 
                            aria-label="Toggle menu"
                            aria-expanded={menuOpen}
                            className="p-2 rounded-md text-gray-600 hover:text-primary focus:outline-none focus:ring-0 active:outline-none"
                            style={{outline: 'none', boxShadow: 'none'}}
                        >
                            {menuOpen ? <XIcon size={28} /> : <MenuIcon size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden absolute top-20 left-0 w-full h-[calc(100vh-80px)] bg-white z-40 animate-fade-in-down">
                    <div className="flex flex-col h-full">
                        <nav className="flex flex-col items-center justify-center flex-grow space-y-6">
                            {NAV_ITEMS.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.path}
                                    onClick={handleNavClick}
                                    className={`navbar-text text-2xl font-medium transition-colors duration-300 focus:outline-none focus:ring-0 active:outline-none active:ring-0 ${
                                        location.pathname === item.path 
                                        ? 'text-primary' 
                                        : 'text-gray-600 hover:text-primary'
                                    }`}
                                    style={{
                                        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Arial, sans-serif',
                                        outline: 'none',
                                        boxShadow: 'none'
                                    }}
                                    aria-current={location.pathname === item.path ? 'page' : undefined}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </nav>
                    </div>
                </div>
            )}
        </header>
    );
};

export default memo(Navbar);