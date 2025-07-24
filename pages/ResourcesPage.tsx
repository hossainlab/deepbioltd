
import React from 'react';
import SectionTitle from '../components/common/SectionTitle.tsx';
import PageHero from '../components/common/PageHero.tsx';
import { DownloadIcon } from '../components/icons/Icons.tsx';

const ResourcesPage: React.FC = () => (
    <div className="font-sans bg-white">
        <PageHero
            title="Resources"
            subtitle="Explore our valuable whitepapers, case studies, and informational guides."
        />

        <section className="py-20 px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2">
                    <SectionTitle title="Downloads" subtitle="Explore our valuable resources." />
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {[
                            { title: 'Molecular Dynamics Guide', img: 'https://placehold.co/200x150/F9FAFB/205E92?text=PDF+1' },
                            { title: 'Intro to Molecular Docking', img: 'https://placehold.co/200x150/F9FAFB/205E92?text=PDF+2' },
                            { title: 'AI in Drug Design', img: 'https://placehold.co/200x150/F9FAFB/205E92?text=PDF+3' },
                            { title: 'Protein Modeling Techniques', img: 'https://placehold.co/200x150/F9FAFB/205E92?text=PDF+4' },
                            { title: 'Case Study: Virtual Screening', img: 'https://placehold.co/200x150/F9FAFB/205E92?text=PDF+5' },
                            { title: 'Genomic Data Analysis Whitepaper', img: 'https://placehold.co/200x150/F9FAFB/205E92?text=PDF+6' },
                        ].map((resource, index) => (
                            <div key={index} className="bg-light-gray rounded-lg shadow-md overflow-hidden p-4 text-center group">
                                <img src={resource.img} alt={resource.title} className="w-full h-32 object-cover mb-4 rounded" loading="lazy" />
                                <h4 className="font-semibold text-lg text-primary mb-3 font-heading">{resource.title}</h4>
                                <button className="px-4 py-2 rounded-full text-sm font-semibold text-white bg-secondary hover:bg-primary transition-colors duration-300">
                                    <DownloadIcon size={16} className="inline-block mr-2" /> Download
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                <aside className="lg:col-span-1">
                    <div className="bg-light-gray p-8 rounded-lg shadow-lg sticky top-28">
                        <h3 className="text-2xl font-bold font-heading mb-6 text-primary">Inquiry</h3>
                        <form className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                                <input type="text" id="name" placeholder="Your Name" className="mt-1 block w-full rounded-md bg-gray-700 text-white border border-gray-600 shadow-sm px-4 py-2 transition-all duration-300 focus:ring-2 focus:ring-secondary focus:border-primary placeholder:text-gray-400" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                <input type="email" id="email" placeholder="Your Email" className="mt-1 block w-full rounded-md bg-gray-700 text-white border border-gray-600 shadow-sm px-4 py-2 transition-all duration-300 focus:ring-2 focus:ring-secondary focus:border-primary placeholder:text-gray-400" />
                            </div>
                            <div>
                                <label htmlFor="organization" className="block text-sm font-medium text-gray-700">Organization/Company</label>
                                <input type="text" id="organization" placeholder="Your Organization" className="mt-1 block w-full rounded-md bg-gray-700 text-white border border-gray-600 shadow-sm px-4 py-2 transition-all duration-300 focus:ring-2 focus:ring-secondary focus:border-primary placeholder:text-gray-400" />
                            </div>
                            <div>
                                <label htmlFor="description" className="block text-sm font-medium text-gray-700">Project Description</label>
                                <textarea id="description" rows={4} placeholder="Describe your project..." className="mt-1 block w-full rounded-md bg-gray-700 text-white border border-gray-600 shadow-sm px-4 py-2 transition-all duration-300 focus:ring-2 focus:ring-secondary focus:border-primary placeholder:text-gray-400"></textarea>
                            </div>
                            <button type="submit" className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white font-semibold bg-primary hover:bg-opacity-90 transition-opacity">Submit</button>
                        </form>
                    </div>
                </aside>
            </div>
        </section>
    </div>
);

export default ResourcesPage;