

import React from 'react';
import { Page, ServiceId } from '../../types.ts';
import { RefreshCwIcon, FlaskConicalIcon, SparklesIcon, BookOpenIcon, ChevronRightIcon } from '../../components/icons/Icons.tsx';
import ServiceSidebar from '../../components/services/ServiceSidebar.tsx';
import Breadcrumb, { BreadcrumbItem } from '../../components/common/Breadcrumb.tsx';
import ServiceSectionTitle from '../../components/common/ServiceSectionTitle.tsx';
import FeatureCard from '../../components/common/FeatureCard.tsx';
import { serviceLinks } from '../../data/serviceSidebarLinks.ts';

interface ServicePageProps {
  onServiceClick: (service: ServiceId | null) => void;
  setActiveTab: (tab: Page) => void;
}

const AiDrugRepurposingServicePage: React.FC<ServicePageProps> = ({ onServiceClick, setActiveTab }) => {
    
    const handleNav = (page?: Page, serviceId?: ServiceId) => {
        if (page) {
            setActiveTab(page);
            onServiceClick(null);
        } else if (serviceId) {
            onServiceClick(serviceId);
        }
        window.scrollTo(0, 0);
    };

    const breadcrumbItems: BreadcrumbItem[] = [
        { name: 'Home', page: 'home', onClick: () => handleNav('home') },
        { name: 'Services', page: 'services', onClick: () => handleNav('services') },
        { name: 'AI-Powered Solutions', serviceId: 'ai-biomarker-discovery', onClick: () => handleNav(undefined, 'ai-biomarker-discovery') },
        { name: 'AI Drug Repurposing', active: true },
    ];
    
    return (
        <div className="font-sans bg-white animate-fade-in">
             <section className="relative bg-cover bg-center h-80" style={{backgroundImage: "url('https://placehold.co/1920x1080/8B5CF6/FFFFFF?text=AI+Drug+Repurposing')"}}>
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="relative h-full flex flex-col justify-center items-start max-w-7xl mx-auto px-8 text-white">
                    <h1 className="text-5xl font-bold font-heading">AI for Drug Repurposing</h1>
                    <button onClick={() => setActiveTab('contact')} className="mt-6 border border-white px-6 py-2 text-lg hover:bg-white hover:text-black transition-colors duration-300 flex items-center">
                        Inquire Now <ChevronRightIcon className="ml-2" size={20} />
                    </button>
                </div>
            </section>
            
            <Breadcrumb items={breadcrumbItems} />
            
            <section className="py-20 px-8">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <main className="lg:col-span-8">
                        <ServiceSectionTitle title="Introduction to AI-Powered Drug Repurposing" />
                        <p className="text-gray-700 mb-6 leading-relaxed">
                            Drug repurposing, or finding new uses for existing approved drugs, offers a faster and more cost-effective route to treatment than traditional de novo drug discovery. We employ advanced AI and machine learning techniques, particularly Graph Neural Networks (GNNs) on large-scale biological knowledge graphs, to systematically identify and prioritize promising drug repurposing candidates for a wide range of diseases.
                        </p>
                        <img src="https://placehold.co/600x400/F9FAFB/8B5CF6?text=Knowledge+Graph" alt="Drug Repurposing Knowledge Graph" className="rounded-lg shadow-xl w-full mb-8" />
                        
                        <ServiceSectionTitle title="Our Approach" />
                        <div className="space-y-6 mt-6">
                            <FeatureCard 
                                icon={<SparklesIcon className="text-primary" size={32}/>}
                                title="Knowledge Graph Construction"
                                description="We integrate diverse data sources—including drug-target interactions, gene-disease associations, protein-protein interactions, and scientific literature—into a comprehensive knowledge graph."
                            />
                             <FeatureCard 
                                icon={<FlaskConicalIcon className="text-primary" size={32}/>}
                                title="Graph Neural Network (GNN) Modeling"
                                description="We train powerful GNN models on the knowledge graph to learn complex relationships and predict novel connections between drugs and diseases."
                            />
                             <FeatureCard 
                                icon={<RefreshCwIcon className="text-primary" size={32}/>}
                                title="Prioritization and Validation"
                                description="Our models provide a ranked list of potential repurposing candidates, which are further prioritized based on biological plausibility and supporting evidence."
                            />
                        </div>

                        <ServiceSectionTitle title="Drug Repurposing Workflow" />
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center my-6">
                            {['Data Curation', 'Graph Construction', 'GNN Model Training', 'Prediction & Ranking'].map(step => (
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
                            <li>A prioritized list of drug repurposing candidates for your disease of interest.</li>
                            <li>Predicted scores and confidence levels for each drug-disease association.</li>
                            <li>Supporting evidence for top predictions, including key pathways and interaction data.</li>
                            <li>Visualization of the local network around high-confidence predictions.</li>
                            <li>A comprehensive report detailing the methodology and findings.</li>
                        </ul>
                        
                        <ServiceSectionTitle title="References" />
                        <blockquote className="p-4 my-4 border-l-4 border-gray-300 bg-gray-50">
                            <p className="text-gray-600 italic">
                                Our methods are based on cutting-edge research in graph machine learning for drug discovery.
                                <br />- Zitnik, M., Agrawal, M., & Leskovec, J. (2018). Modeling polypharmacy side effects with graph convolutional networks. Bioinformatics.
                                <br />- Fey, M., & Lenssen, J. E. (2019). Fast graph representation learning with PyTorch Geometric. arXiv preprint.
                            </p>
                        </blockquote>
                    </main>

                    <ServiceSidebar 
                        serviceLinks={serviceLinks}
                        currentServiceId="ai-drug-repurposing"
                        onServiceClick={(id) => onServiceClick(id)}
                    />
                </div>
            </section>
        </div>
    );
};
export default AiDrugRepurposingServicePage;