import React from 'react';
import SectionTitle from '../components/common/SectionTitle.tsx';
import ServiceCard from '../components/common/ServiceCard.tsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faUsers, faAward } from '@fortawesome/free-solid-svg-icons';
import { ServiceId, Page } from '../types.ts';
import { serviceCategories } from '../data/servicesData.ts';
import ServiceProcess from '../components/common/ServiceProcess.tsx';
import HeroSlider from '../components/HeroSlider';

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

const HomePage: React.FC<HomePageProps> = ({  }) => {
    return (
        <div className="font-sans">
            <HeroSlider />
            <section className="py-20 px-8 bg-white">
                <SectionTitle title="Explore Areas of Interest" subtitle="We focus on key areas where computation can make a significant impact on health and science." />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
                    {[
                        { id: 'single-cell-genomics', title: "Single Cell Genomics", desc: "Decoding cellular diversity using single-cell technologies for precision health insights.", img: 'https://www.activemotif.com/uploads/images/web_site/services-hp-dec2015/scrna-2022-services-icons-web.png' },
                        { id: 'brain-genomics', title: "Brain Genomics", desc: "Unraveling brain disorders through genomic and neural data to advance diagnosis and therapy.", img: 'https://genengnews.com/wp-content/uploads/2018/08/Oct6_2016_ENIGMA_Brain2432552431-1.jpg' },
                        { id: 'cancer-genomics', title: "Cancer Genomics", desc: "Investigating genetic alterations in cancer to discover biomarkers, drivers, and targeted treatments.", img: 'https://cdn.prod.website-files.com/642af736b8df4b680292fb9b/649c47d7f4475d586ee67537_Untitled%20design%20(11).jpg' },
                        { id: 'epigenomics', title: "Epigenomics", desc: "Studying heritable changes in gene expression to understand development, disease, and environmental influences.", img: 'https://www.genome.gov/sites/default/files/media/images/2020-08/Epigenomics_dynamic2020-01-2.jpg' },
                        { id: 'ai-health-innovation', title: "AI in Health Innovation", desc: "Leveraging machine learning for predictive modeling in healthcare.", img: '/img/home/ai-for-health.jpg' },
                        { id: 'multi-omics', title: "Multi-Omics Data", desc: "Comprehensive analysis of multi-omics data for insights into disease and traits.", img: '/img/home/multi-omics.png' },
                        { id: 'drug-discovery', title: "Insilico Drug Discovery & Development", desc: "Accelerating the identification of novel therapeutic compounds.", img: '/img/home/drug-discovery.jpg' },
                        { id: 'biomedical-informatics', title: "Biomedical Informatics", desc: "Using data science to monitor disease and inform public health policy.", img: '/img/home/biomedical.jpg' },
                    ].map((interest) => (
                        <ServiceCard
                            key={interest.id}
                            title={interest.title}
                            description={interest.desc}
                            image={interest.img}
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
                            showButton={true}
                            buttonText="Learn More"
                            to={`/services/${service.id}`} 
                        />
                    ))}
                </div>
                <div className="mt-16 text-center">
                    <a
                        href="/services"
                        className="px-8 py-3 rounded-full text-lg font-semibold text-white bg-primary hover:bg-secondary transition-colors duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 inline-block"
                    >
                        See All Our Services
                </a>
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