
import React from 'react';
import SectionTitle from '../components/common/SectionTitle.tsx';
import ServiceCard from '../components/common/ServiceCard.tsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faUsers, faAward } from '@fortawesome/free-solid-svg-icons';
import { ServiceId, Page } from '../types.ts';
import { serviceCategories } from '../data/servicesData.ts';
import ServiceProcess from '../components/common/ServiceProcess.tsx';

const featuredServiceIds: ServiceId[] = [
    'molecular-dynamics', 
    'molecular-docking', 
    'insilico-drug-design', 
    'drug-design', 
    'dge-analysis', 
    'single-cell-rna-seq', 
    'microbiome-diversity-analysis',
    'ai-gene-expression',
    'ai-drug-repurposing'
];

const allServices = serviceCategories.flatMap(category => category.services);
const featuredServices = featuredServiceIds.map(id => allServices.find(s => s.id === id)).filter(Boolean);

interface HomePageProps {
  setSelectedService: (service: ServiceId) => void;
  setActiveTab: (tab: Page) => void;
  setEstimatorActive: (isActive: boolean) => void;
}

const HomePage: React.FC<HomePageProps> = ({ setSelectedService, setActiveTab, setEstimatorActive }) => {
    return (
        <div className="font-sans">
            <section className="py-20 px-8 bg-white">
                <SectionTitle title="Explore Areas of Interest" subtitle="We focus on key areas where computation can make a significant impact on health and science." />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
                    {[
                        { id: 'ai-health-innovation', title: "AI in Health Innovation", desc: "Leveraging machine learning for predictive modeling in healthcare.", img: 'https://github.com/hossainlab/deepbioltd/blob/main/img/home/ai-for-health.jpg?raw=true' },
                        { id: 'multi-omics', title: "Multi-Omics Data", desc: "Comprehensive analysis of multi-omics data for insights into disease and traits.", img: 'https://github.com/hossainlab/deepbioltd/blob/main/img/home/multi-omics.png?raw=true' },
                        { id: 'drug-discovery', title: "Insilico Drug Discovery & Development", desc: "Accelerating the identification of novel therapeutic compounds.", img: 'https://github.com/hossainlab/deepbioltd/blob/main/img/home/drug-discovery.jpg?raw=true' },
                        { id: 'biomedical-informatics', title: "Biomedical Informatics", desc: "Using data science to monitor disease and inform public health policy.", img: 'https://github.com/hossainlab/deepbioltd/blob/main/img/home/biomedical.jpg?raw=true' },
                    ].map((interest) => (
                        <ServiceCard
                            key={interest.id}
                            title={interest.title}
                            description={interest.desc}
                            image={interest.img}
                            onClick={() => setSelectedService(interest.id as ServiceId)}
                            showButton={false}
                        />
                    ))}
                </div>
            </section>

            <ServiceProcess />
            
            <section className="py-20 px-8 bg-white">
                <SectionTitle title="Our Services" subtitle="We offer a comprehensive suite of bioinformatics and computational biology services." />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
                    {featuredServices.map((service) => (
                       service && <ServiceCard
                            key={service.id}
                            title={service.title}
                            description={service.description}
                            image={service.image}
                            onClick={() => setSelectedService(service.id as ServiceId)}
                            showButton={true}
                            buttonText="Learn More"
                        />
                    ))}
                </div>
                <div className="mt-16 text-center">
                    <button
                        onClick={() => setActiveTab('services')}
                        className="px-8 py-3 rounded-full text-lg font-semibold text-white bg-primary hover:bg-secondary transition-colors duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
                    >
                        See All Our Services
                    </button>
                </div>
            </section>

            <section className="py-20 px-8 bg-light-gray">
    <SectionTitle title="Our Core Values" subtitle="The principles that guide our work and culture." />
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
            <div className="mb-4 flex justify-center">
                <FontAwesomeIcon icon={faLightbulb} size="2x" className="text-primary" />
            </div>
            <h3 className="text-2xl font-semibold font-heading text-primary mb-2">Innovation</h3>
            <p className="text-light-text">We constantly push the boundaries of science and technology to create novel solutions for complex biological problems.</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-8 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
            <div className="mb-4 flex justify-center">
                <FontAwesomeIcon icon={faUsers} size="2x" className="text-primary" />
            </div>
            <h3 className="text-2xl font-semibold font-heading text-primary mb-2">Collaboration</h3>
            <p className="text-light-text">We believe in the power of teamwork and partner closely with our clients and collaborators to achieve shared goals.</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-8 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
            <div className="mb-4 flex justify-center">
                <FontAwesomeIcon icon={faAward} size="2x" className="text-primary" />
            </div>
            <h3 className="text-2xl font-semibold font-heading text-primary mb-2">Excellence</h3>
            <p className="text-light-text">We are committed to delivering the highest quality results, maintaining scientific integrity and rigor in all our projects.</p>
        </div>
    </div>
</section>

            
            <section className="py-20 px-8 bg-white">
                <SectionTitle title="Our Esteemed Clients" subtitle="We are proud to collaborate with leading institutions and companies in the life sciences." />
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-70">
                        {[
                            'PharmaCo', 'BioGen', 'Innovate-Tx',
                            'Geno-Med', 'Health-AI', 'Synth-Bio'
                        ].map((client, index) => (
                            <div key={index} className="flex-shrink-0">
                                <img src={`https://placehold.co/150x75/CCCCCC/AFAFAF?text=${client.replace(' ', '+')}`} alt={client} className="h-16 object-contain grayscale" loading="lazy" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 px-8 bg-light-gray">
                <SectionTitle title="Research Collaborators & Community Partners" subtitle="Fostering innovation and impact through strong partnerships with academic and community organizations." />
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-10">
                        {[
                            'National University', 'Global Health Institute', 'BioData Consortium', 'State Research Lab'
                        ].map((partner, index) => (
                            <div key={index} className="flex-shrink-0">
                                <img src={`https://placehold.co/180x90/F9FAFB/205E92?text=${partner.replace(' ', '+')}`} alt={partner} className="h-20 object-contain" loading="lazy" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default HomePage;