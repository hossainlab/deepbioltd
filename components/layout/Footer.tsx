
import React, { memo } from 'react';
import { Page, Course } from '../../types.ts';
import { LinkedinIcon, GithubIcon, XIcon, OrcidIcon } from '../icons/Icons.tsx';
import { faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// ...existing imports...

interface FooterProps {
    setActiveTab: (tab: Page) => void;
    setSelectedCourse: (course: Course | null) => void;
}

const FooterLogo: React.FC = () => (
    <div className="flex items-center gap-2" aria-label="DeepBio Logo">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
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
      <span className="text-2xl font-bold text-white font-heading">DeepBio</span>
    </div>
);

const Footer: React.FC<FooterProps> = ({ setActiveTab, setSelectedCourse }) => {
    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, tab: Page) => {
        e.preventDefault();
        setActiveTab(tab);
        setSelectedCourse(null);
        window.scrollTo(0, 0);
    };

    return (
        <footer className="bg-primary text-gray-300 font-roboto">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
                    <div className="col-span-2 lg:col-span-2">
                         <a href="#" onClick={(e) => handleLinkClick(e, 'home')} className="inline-block mb-4">
                            <FooterLogo />
                        </a>
                        <p className="text-sm max-w-sm">
                           Innovating at the intersection of AI, bioinformatics, and public health informatics to advance global health.
                        </p>
                        <div className="flex space-x-4 mt-6">
                            <a href="https://www.facebook.com/deepbioltd" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                                <span className="sr-only">Facebook</span>
                                <FontAwesomeIcon icon={faFacebook} size="lg" />
                            </a>
                            <a href="https://www.linkedin.com/company/deepbioltd/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                                <span className="sr-only">LinkedIn</span>
                                <LinkedinIcon />
                            </a>
                            <a href="https://x.com/deepbioltd" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                                <span className="sr-only">X (Twitter)</span>
                                <XIcon />
                            </a>
                            <a href="https://github.com/deepbioltd" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                                <span className="sr-only">GitHub</span>
                                <GithubIcon />
                            </a>
                            <a href="https://youtube.com/deepbioltd" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                                <span className="sr-only">YouTube</span>
                                <FontAwesomeIcon icon={faYoutube} size="lg" />
                            </a>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-sm font-semibold font-heading text-white tracking-wider uppercase mb-4">Services</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-white" onClick={(e) => handleLinkClick(e, 'services')}>Genomics</a></li>
                            <li><a href="#" className="hover:text-white" onClick={(e) => handleLinkClick(e, 'services')}>Drug Design</a></li>
                            <li><a href="#" className="hover:text-white" onClick={(e) => handleLinkClick(e, 'services')}>Protein Modeling</a></li>
                            <li><a href="#" className="hover:text-white" onClick={(e) => handleLinkClick(e, 'services')}>AI in Health</a></li>
                        </ul>
                    </div>
                     <div>
                        <h4 className="text-sm font-semibold font-heading text-white tracking-wider uppercase mb-4">Company</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-white" onClick={(e) => handleLinkClick(e, 'about')}>About Us</a></li>
                            <li><a href="#" className="hover:text-white" onClick={(e) => handleLinkClick(e, 'research')}>Research</a></li>
                            <li><a href="#" className="hover:text-white" onClick={(e) => handleLinkClick(e, 'careers')}>Careers</a></li>
                            <li><a href="#" className="hover:text-white" onClick={(e) => handleLinkClick(e, 'team')}>Team</a></li>
                        </ul>
                    </div>
                     <div>
                        <h4 className="text-sm font-semibold font-heading text-white tracking-wider uppercase mb-4">Contact</h4>
                        <ul className="space-y-3 text-sm">
                            <li><a href="mailto:info@deepbio.com" className="hover:text-white">Email: info@deepbioltd.com</a></li>
                            <li><a href="tel:+12072070429" className="hover:text-white">Phone: +881843381652</a></li>
                            <li className="pt-1"><p className="leading-relaxed">Dhaka, Bangladesh</p></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-16 pt-8 border-t border-secondary/30 text-center text-sm text-gray-400">
                    &copy; {new Date().getFullYear()} DeepBio Limited. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
};

export default memo(Footer);