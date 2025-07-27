
import React from 'react';
import SectionTitle from '../components/common/SectionTitle.tsx';
import PageHero from '../components/common/PageHero.tsx';
import { DownloadIcon } from '../components/icons/Icons.tsx';
import ToolsPage from './ToolsPage.tsx';
import WorkflowsPage from './WorkflowsPage.tsx';

const ResourcesPage: React.FC = () => (
    <div className="font-sans bg-white">
        <PageHero
            title="Resources"
            subtitle="Explore our valuable whitepapers, case studies, and informational guides."
        />

        <section className="py-20 px-8">
            <div className="max-w-7xl mx-auto">
                <div>
                    <section className="mt-12">
                        <ToolsPage />
                    </section>
                    <section className="mt-12">
                        <WorkflowsPage />
                    </section>
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
                            <div key={index} className="bg-light-gray rounded-lg shadow-md overflow-hidden p-4 text-center group hover:shadow-lg hover:scale-105 transition-all duration-300">
                                <img src={resource.img} alt={resource.title} className="w-full h-32 object-cover mb-4 rounded" loading="lazy" />
                                <h4 className="font-semibold text-lg text-primary mb-3 font-heading">{resource.title}</h4>
                                <button className="px-4 py-2 rounded-full text-sm font-semibold text-white bg-secondary hover:bg-primary transition-colors duration-300">
                                    <DownloadIcon size={16} className="inline-block mr-2" /> Download
                                </button>
                            </div>
                        ))}
                    </div>
                </div>


            </div>
        </section>
    </div>
);

export default ResourcesPage;