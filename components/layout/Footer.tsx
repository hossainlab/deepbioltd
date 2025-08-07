
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { LinkedinIcon, GithubIcon, XIcon } from '../icons/Icons.tsx';
import { faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// ...existing imports...

interface FooterProps {}

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

const Footer: React.FC<FooterProps> = () => {


    return (
        <footer className="bg-primary text-gray-300 font-roboto">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
                    <div className="col-span-2 lg:col-span-2">
                         <Link to="/" className="inline-block mb-4">
                            <FooterLogo />
                        </Link>
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
                            <li><Link to="/services" className="hover:text-white">Genomics</Link></li>
                            <li><Link to="/services" className="hover:text-white">Drug Design</Link></li>
                            <li><Link to="/services" className="hover:text-white">Protein Modeling</Link></li>
                            <li><Link to="/services" className="hover:text-white">AI in Health</Link></li>
                        </ul>
                    </div>
                     <div>
                        <h4 className="text-sm font-semibold font-heading text-white tracking-wider uppercase mb-4">Company</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
                            <li><Link to="/research" className="hover:text-white">Research</Link></li>
                            <li><Link to="/careers" className="hover:text-white">Careers</Link></li>
                            <li><Link to="/team" className="hover:text-white">Team</Link></li>
                        </ul>
                    </div>
                     <div>
                        <h4 className="text-sm font-semibold font-heading text-white tracking-wider uppercase mb-4">Contact</h4>
                        <ul className="space-y-3 text-sm">
                            <li><a href="mailto:info@deepbio.com" className="hover:text-white">Email: deepbiobd@gmail.com</a></li>
                            <li><a href="tel:+12072070429" className="hover:text-white">Phone: +8801843381652</a></li>
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