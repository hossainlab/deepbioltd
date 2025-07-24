
import React from 'react';
import SectionTitle from '../components/common/SectionTitle.tsx';
import PageHero from '../components/common/PageHero.tsx';
import { BrainIcon, DnaIcon, ActivityIcon, DownloadIcon } from '../components/icons/Icons.tsx';

const researchAreas = [
    {
        icon: <BrainIcon size={48} className="text-primary" />,
        title: 'AI in Drug Discovery',
        desc: 'Leveraging deep learning and machine learning to accelerate the identification of novel therapeutic candidates and predict drug efficacy.',
    },
    {
        icon: <DnaIcon size={48} className="text-primary" />,
        title: 'Genomic Medicine',
        desc: 'Analyzing genomic and transcriptomic data to uncover the genetic basis of diseases and develop personalized medicine strategies.',
    },
    {
        icon: <ActivityIcon size={48} className="text-primary" />,
        title: 'Public Health Informatics',
        desc: 'Using data science and AI to monitor disease outbreaks, predict epidemiological trends, and inform public health policy.',
    },
];

const publications = [
    { id: 'pub1', title: 'AI-Driven Drug Repurposing for Neglected Tropical Diseases', authors: 'J. Doe, A. Johnson, B. Williams', journal: 'Nature Biotechnology', year: '2023', link: '#', image: 'https://placehold.co/300x200/205E92/FFFFFF?text=Publication+1' },
    { id: 'pub2', title: 'Genomic Surveillance of Antimicrobial Resistance in Bangladesh', authors: 'C. Davis, F. Wilson, E. Miller', journal: 'The Lancet Digital Health', year: '2022', link: '#', image: 'https://placehold.co/300x200/4DB8FF/FFFFFF?text=Publication+2' },
    { id: 'pub3', title: 'Machine Learning Models for Early Disease Outbreak Prediction', authors: 'J. Smith, H. Taylor', journal: 'Journal of Biomedical Informatics', year: '2023', link: '#', image: 'https://placehold.co/300x200/205E92/FFFFFF?text=Publication+3' },
    { id: 'pub4', title: 'Cheminformatics Approaches to Novel Compound Identification', authors: 'A. Johnson, J. Doe', journal: 'Journal of Chemical Information and Modeling', year: '2021', link: '#', image: 'https://placehold.co/300x200/4DB8FF/FFFFFF?text=Publication+4' },
    { id: 'pub5', title: 'Integrated Multi-omics Analysis of Cancer Progression', authors: 'E. Miller, C. Davis', journal: 'Cell Systems', year: '2024', link: '#', image: 'https://placehold.co/300x200/205E92/FFFFFF?text=Publication+5' },
    { id: 'pub6', title: 'Virtual Screening for Novel SARS-CoV-2 Inhibitors', authors: 'Team DeepBio', journal: 'Virology Journal', year: '2022', link: '#', image: 'https://placehold.co/300x200/4DB8FF/FFFFFF?text=Publication+6' },
];

const technicalReports = [
    { id: 'tr1', title: 'Scalable Workflow for scRNA-Seq Analysis', desc: 'A detailed report on our containerized Nextflow pipeline for single-cell analysis.', link: '#', image: 'https://placehold.co/200x150/F9FAFB/205E92?text=Report+1' },
    { id: 'tr2', title: 'Whitepaper: Deep Learning for Protein Structure Prediction', desc: 'An overview of our custom models and their performance benchmarks against AlphaFold2.', link: '#', image: 'https://placehold.co/200x150/F9FAFB/4DB8FF?text=Report+2' },
    { id: 'tr3', title: 'Validation of a Novel Virtual Screening Platform', desc: 'A comprehensive technical document detailing the validation and results of our in-house virtual screening software.', link: '#', image: 'https://placehold.co/200x150/F9FAFB/205E92?text=Report+3' },
];


const ResearchPage: React.FC = () => {
    return (
        <div className="font-sans bg-white">
             <PageHero
                title="Our Research"
                subtitle="Driving scientific progress through computational innovation and collaborative discovery."
             />
            
            <section className="py-20 px-8 bg-light-gray">
                <div className="max-w-7xl mx-auto">
                    <SectionTitle title="Our Research Areas" subtitle="We focus on key areas where computation can make a significant impact on health and science." />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {researchAreas.map((area, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-lg p-8 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                                <div className="mb-4 flex justify-center">{area.icon}</div>
                                <h3 className="text-2xl font-semibold font-heading text-primary mb-2">{area.title}</h3>
                                <p className="text-light-text">{area.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <SectionTitle title="Our Publications" subtitle="Explore our latest research and contributions to the scientific community." />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {publications.map((pub) => (
                            <div key={pub.id} className="bg-light-gray rounded-lg shadow-lg overflow-hidden transition-transform transform hover:-translate-y-2 flex flex-col">
                                <img src={pub.image} alt={pub.title} className="w-full h-48 object-cover" loading="lazy" />
                                <div className="p-6 flex flex-col flex-grow">
                                    <h4 className="text-xl font-bold font-heading mb-2 text-primary">{pub.title}</h4>
                                    <p className="text-sm text-light-text mb-1"><span className="font-semibold text-dark-text">Authors:</span> {pub.authors}</p>
                                    <p className="text-sm text-light-text mb-3"><span className="font-semibold text-dark-text">Journal:</span> <span className="italic">{pub.journal}</span> ({pub.year})</p>
                                    <a href={pub.link} target="_blank" rel="noopener noreferrer" className="mt-auto inline-block py-2 px-4 rounded-md text-sm font-semibold text-white bg-secondary hover:bg-primary transition-colors duration-300 self-start">Read More</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            <section className="py-20 px-8 bg-light-gray">
                <div className="max-w-7xl mx-auto">
                    <SectionTitle title="Technical Reports" subtitle="In-depth documents and whitepapers detailing our methodologies and technologies." />
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {technicalReports.map((report, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden p-4 text-center group flex flex-col">
                                <img src={report.image} alt={report.title} className="w-full h-32 object-cover mb-4 rounded" loading="lazy" />
                                <h4 className="font-semibold text-lg text-primary mb-2 font-heading flex-grow">{report.title}</h4>
                                <p className="text-sm text-light-text mb-4">{report.desc}</p>
                                <button className="mt-auto px-4 py-2 rounded-full text-sm font-semibold text-white bg-secondary hover:bg-primary transition-colors duration-300">
                                    <DownloadIcon size={16} className="inline-block mr-2" /> Download
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default ResearchPage;