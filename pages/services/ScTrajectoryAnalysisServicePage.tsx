

import React from 'react';
import { Page, ServiceId } from '../../types.ts';
import { ActivityIcon, UsersIcon, BrainIcon, BookOpenIcon, ChevronRightIcon } from '../../components/icons/Icons.tsx';
import ServiceSidebar from '../../components/services/ServiceSidebar.tsx';
import Breadcrumb, { BreadcrumbItem } from '../../components/common/Breadcrumb.tsx';
import ServiceSectionTitle from '../../components/common/ServiceSectionTitle.tsx';
import FeatureCard from '../../components/common/FeatureCard.tsx';
import { serviceLinks } from '../../data/serviceSidebarLinks.ts';

interface ServicePageProps {
  onServiceClick?: (service: ServiceId | null) => void;
  setActiveTab?: (tab: Page) => void;
}

const ScTrajectoryAnalysisServicePage: React.FC<ServicePageProps> = ({ onServiceClick, setActiveTab }) => {
    
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
        { name: 'Single-Cell RNA-Seq', serviceId: 'single-cell-rna-seq', onClick: () => handleNav(undefined, 'single-cell-rna-seq') },
        { name: 'Trajectory Analysis', active: true },
    ];
    
    return (
        <div className="font-sans bg-white animate-fade-in">
             <section className="relative bg-cover bg-center h-80" style={{backgroundImage: "url('https://placehold.co/1920x1080/4DB8FF/FFFFFF?text=Trajectory')"}}>
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="relative h-full flex flex-col justify-center items-start max-w-7xl mx-auto px-8 text-white">
                    <h1 className="text-5xl font-bold font-heading">Single-Cell Trajectory Inference</h1>
                    <button onClick={() => setActiveTab?.('contact')} className="mt-6 border border-white px-6 py-2 text-lg hover:bg-white hover:text-black transition-colors duration-300 flex items-center">
                        Inquire Now <ChevronRightIcon className="ml-2" size={20} />
                    </button>
                </div>
            </section>
            
            <Breadcrumb items={breadcrumbItems} />
            
            <section className="py-20 px-8">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <main className="lg:col-span-8">
                        <ServiceSectionTitle title="Introduction to Trajectory Inference" />
                        <p className="text-gray-700 mb-6 leading-relaxed">
                            Trajectory inference, or pseudotime analysis, is a computational method used to understand dynamic biological processes from static single-cell RNA-seq snapshots. By ordering cells based on their transcriptional similarity, we can reconstruct developmental lineages, differentiation pathways, or responses to stimuli, revealing the underlying progression of cellular states.
                        </p>
                        <img src="https://placehold.co/600x400/F9FAFB/4DB8FF?text=Pseudotime+Trajectory" alt="Trajectory Inference Plot" className="rounded-lg shadow-xl w-full mb-8" />
                        
                        <ServiceSectionTitle title="Key Applications" />
                        <div className="space-y-6 mt-6">
                            <FeatureCard 
                                icon={<ActivityIcon className="text-primary" size={32}/>}
                                title="Developmental Biology"
                                description="Map the complete differentiation trajectories of stem cells into various mature cell types, identifying key regulators at each stage."
                            />
                             <FeatureCard 
                                icon={<BrainIcon className="text-primary" size={32}/>}
                                title="Disease Progression"
                                description="Model the progression of diseases like cancer at a single-cell level, uncovering transitions between healthy, pre-malignant, and malignant states."
                            />
                             <FeatureCard 
                                icon={<UsersIcon className="text-primary" size={32}/>}
                                title="Response to Perturbation"
                                description="Trace how different cell types respond over time to a drug treatment, infection, or other environmental perturbation."
                            />
                        </div>

                        <ServiceSectionTitle title="Trajectory Analysis Workflow" />
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center my-6">
                            {['Data Prep', 'Dimensionality Reduction', 'Construct Trajectory', 'Downstream Analysis'].map(step => (
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
                            <li>Visualization of the inferred trajectory projected onto a UMAP or other embedding.</li>
                            <li>Pseudotime values assigned to each cell.</li>
                            <li>Heatmaps of key genes that change their expression along the trajectory.</li>
                            <li>Identification of branch points and analysis of genes driving cell fate decisions.</li>
                            <li>A comprehensive report detailing the methods (e.g., Monocle, Slingshot) and results.</li>
                        </ul>
                        
                        <ServiceSectionTitle title="References" />
                        <blockquote className="p-4 my-4 border-l-4 border-gray-300 bg-gray-50">
                            <p className="text-gray-600 italic">
                                We use a variety of leading tools for trajectory inference, selecting the best method based on the dataset's characteristics.
                                <br />- Trapnell, C., et al. (2014). The dynamics and regulators of cell fate decisions are revealed by pseudotemporal ordering of single cells. Nature biotechnology.
                                <br />- Street, K., et al. (2018). Slingshot: cell lineage and pseudotime inference for single-cell transcriptomics. BMC genomics.
                            </p>
                        </blockquote>
                    </main>

                    <ServiceSidebar 
                        serviceLinks={serviceLinks}
                        currentServiceId="sc-trajectory-analysis"
                        onServiceClick={(id: ServiceId | null) => onServiceClick?.(id)}
                    />
                </div>
            </section>
        </div>
    );
};
export default ScTrajectoryAnalysisServicePage;