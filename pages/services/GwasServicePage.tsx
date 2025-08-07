

import React from 'react';
import { Page, ServiceId } from '../../types.ts';
import { DnaIcon, LightbulbIcon, UsersIcon, BookOpenIcon, ChevronRightIcon } from '../../components/icons/Icons.tsx';
import ServiceSidebar from '../../components/services/ServiceSidebar.tsx';
import Breadcrumb, { BreadcrumbItem } from '../../components/common/Breadcrumb.tsx';
import ServiceSectionTitle from '../../components/common/ServiceSectionTitle.tsx';
import FeatureCard from '../../components/common/FeatureCard.tsx';
import { serviceLinks } from '../../data/serviceSidebarLinks.ts';

interface ServicePageProps {
  onServiceClick?: (service: ServiceId | null) => void;
  setActiveTab?: (tab: Page) => void;
}

const GwasServicePage: React.FC<ServicePageProps> = ({ onServiceClick, setActiveTab }) => {
    
    const handleNav = (page?: Page, serviceId?: ServiceId) => {
        if (page) {
            setActiveTab?.(page);
            onServiceClick?.(null);
        } else if (serviceId) {
            onServiceClick?.(serviceId);
        }
        window.scrollTo(0, 0);
    };

    const breadcrumbItems: BreadcrumbItem[] = [
        { name: 'Home', page: 'home', onClick: () => handleNav('home') },
        { name: 'Services', page: 'services', onClick: () => handleNav('services') },
        { name: 'Genomic Analysis', serviceId: 'genomic-analysis', onClick: () => handleNav(undefined, 'genomic-analysis') },
        { name: 'GWAS', active: true },
    ];
    
    return (
        <div className="font-sans bg-white animate-fade-in">
             <section className="relative bg-cover bg-center h-80" style={{backgroundImage: "url('https://placehold.co/1920x1080/10B981/FFFFFF?text=GWAS')"}}>
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="relative h-full flex flex-col justify-center items-start max-w-7xl mx-auto px-8 text-white">
                    <h1 className="text-5xl font-bold font-heading">Genome-Wide Association Studies (GWAS)</h1>
                    <button onClick={() => setActiveTab?.('contact')} className="mt-6 border border-white px-6 py-2 text-lg hover:bg-white hover:text-black transition-colors duration-300 flex items-center">
                        Inquire Now <ChevronRightIcon className="ml-2" size={20} />
                    </button>
                </div>
            </section>
            
            <Breadcrumb items={breadcrumbItems} />
            
            <section className="py-20 px-8">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <main className="lg:col-span-8">
                        <ServiceSectionTitle title="Introduction to GWAS" />
                        <p className="text-gray-700 mb-6 leading-relaxed">
                            A Genome-Wide Association Study (GWAS) is an approach that involves rapidly scanning markers across the complete sets of DNA, or genomes, of many people to find genetic variations associated with a particular disease or trait. Once new genetic associations are identified, researchers can use the information to develop better strategies to detect, treat and prevent the disease.
                        </p>
                        <img src="https://placehold.co/600x400/F9FAFB/10B981?text=Manhattan+Plot" alt="GWAS Manhattan Plot" className="rounded-lg shadow-xl w-full mb-8" loading="lazy" />
                        
                        <ServiceSectionTitle title="Applications of GWAS" />
                        <div className="space-y-6 mt-6">
                            <FeatureCard 
                                icon={<DnaIcon className="text-primary" size={32}/>}
                                title="Complex Disease Genetics"
                                description="Identifying common genetic variants that contribute to the risk of complex diseases like diabetes, heart disease, and autoimmune disorders."
                            />
                             <FeatureCard 
                                icon={<UsersIcon className="text-primary" size={32}/>}
                                title="Pharmacogenomics"
                                description="Discovering genetic markers that predict an individual's response to drugs, paving the way for personalized medicine."
                            />
                             <FeatureCard 
                                icon={<LightbulbIcon className="text-primary" size={32}/>}
                                title="Trait Mapping"
                                description="Associating genetic variants with a wide range of human traits, from height and weight to cognitive abilities."
                            />
                        </div>

                        <ServiceSectionTitle title="Our GWAS Workflow" />
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center my-6">
                            {['Data QC & Imputation', 'Association Testing', 'Post-GWAS Analysis', 'Visualization'].map(step => (
                                <div key={step} className="flex flex-col items-center">
                                    <div className="p-4 bg-primary/10 rounded-md">
                                        <BookOpenIcon size={40} className="text-primary" />
                                    </div>
                                    <p className="mt-2 font-semibold text-sm text-primary bg-primary/10 px-2 py-1 rounded w-full">{step}</p>
                                </div>
                            ))}
                        </div>
                        
                        <ServiceSectionTitle title="Deliverables" />
                        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-8">
                            <li>High-quality Manhattan and Q-Q plots for visualizing association results.</li>
                            <li>A list of genome-wide significant SNPs with their association statistics.</li>
                            <li>LocusZoom plots to visualize association signals at specific genomic regions.</li>
                            <li>Functional annotation of top-associated variants.</li>
                            <li>A comprehensive report detailing methods, quality control, and interpretation of results.</li>
                        </ul>
                        
                        <ServiceSectionTitle title="References" />
                        <blockquote className="p-4 my-4 border-l-4 border-gray-300 bg-gray-50">
                            <p className="text-gray-600 italic">
                                Our GWAS pipelines use state-of-the-art software for association testing and post-analysis to ensure robust findings.
                                <br />- Purcell, S., et al. (2007). PLINK: a tool set for whole-genome association and population-based linkage analyses. The American journal of human genetics.
                                <br />- Mbatchou, J., et al. (2021). Computationally efficient whole-genome regression for quantitative and binary traits. Nature genetics.
                            </p>
                        </blockquote>
                    </main>

                    <ServiceSidebar 
                        serviceLinks={serviceLinks}
                        currentServiceId="gwas"
                        onServiceClick={(id: ServiceId | null) => onServiceClick?.(id)}
                    />
                </div>
            </section>
        </div>
    );
};
export default GwasServicePage;