
import React from 'react';
import SectionTitle from '../components/common/SectionTitle.tsx';
import PageHero from '../components/common/PageHero.tsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain, faDna, faChartLine, faDownload } from '@fortawesome/free-solid-svg-icons';

const researchAreas = [
    {
        icon: <FontAwesomeIcon icon={faBrain} size="2x" className="text-primary" />,
        title: 'AI in Drug Discovery',
        desc: 'Leveraging deep learning and machine learning to accelerate the identification of novel therapeutic candidates and predict drug efficacy.',
    },
    {
        icon: <FontAwesomeIcon icon={faDna} size="2x" className="text-primary" />,
        title: 'Genomics',
        desc: 'Analyzing genomic and transcriptomic data to uncover the genetic basis of diseases and develop personalized medicine strategies.',
    },
    {
        icon: <FontAwesomeIcon icon={faChartLine} size="2x" className="text-primary" />,
        title: 'Public Health Informatics',
        desc: 'Using data science and AI to monitor disease outbreaks, predict epidemiological trends, and inform public health policy.',
    },
];

const publications = [
     { id: 'pub1', title: 'Pan-cancer analysis reveals immunological and prognostic significance of CCT5 in human tumors', authors: 'Ahmed, M.Z., Billah, M.M., Ferdous, J., Hossain, M.J. et al.', journal: 'Sci Rep', year: '2025', link: 'https://doi.org/10.1038/s41598-025-88339-z', image: 'https://placehold.co/300x200/205E92/FFFFFF?text=CCT5' },
    { id: 'pub2', title: 'Global, regional, and national trends in routine childhood vaccination coverage from 1980 to 2023 with forecasts to 2030: a systematic analysis for the Global Burden of Disease Study 2023', authors: 'The Lancet', journal: 'The Lancet', year: '2025', link: 'https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(25)01037-2/', image: 'https://placehold.co/300x200/4DB8FF/FFFFFF?text=GBD' },
    { id: 'pub3', title: 'Resistance and Co-Resistance of Metallo-Beta-Lactamase Genes in Diarrheal and Urinary-Tract Pathogens in Bangladesh', authors: 'Shanta, A.S.; Islam, N.; Al Asad, M.; Akter, K.; Habib, M.B.; Hossain, M.J.; Nahar, S.; Godman, B.; Islam, S.', journal: 'Microorganisms', year: '2024', link: 'https://doi.org/10.3390/microorganisms12081589', image: 'https://placehold.co/300x200/FF5733/FFFFFF?text=AMR' },
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
                            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden p-4 text-center group flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                                <img src={report.image} alt={report.title} className="w-full h-32 object-cover mb-4 rounded" loading="lazy" />
                                <h4 className="font-semibold text-lg text-primary mb-2 font-heading flex-grow">{report.title}</h4>
                                <p className="text-sm text-light-text mb-4">{report.desc}</p>
                                <button className="mt-auto px-4 py-2 rounded-full text-sm font-semibold text-white bg-secondary hover:bg-primary transition-colors duration-300">
                                    <FontAwesomeIcon icon={faDownload} size="sm" className="inline-block mr-2" /> Download
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