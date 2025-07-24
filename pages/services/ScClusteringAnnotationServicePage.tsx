

import React from 'react';
import { Page, ServiceId } from '../../types.ts';
import { UsersIcon, CheckCircleIcon, BrainIcon, BookOpenIcon, ChevronRightIcon } from '../../components/icons/Icons.tsx';
import ServiceSidebar from '../../components/services/ServiceSidebar.tsx';
import Breadcrumb, { BreadcrumbItem } from '../../components/common/Breadcrumb.tsx';
import ServiceSectionTitle from '../../components/common/ServiceSectionTitle.tsx';
import FeatureCard from '../../components/common/FeatureCard.tsx';
import { serviceLinks } from '../../data/serviceSidebarLinks.ts';

interface ServicePageProps {
  onServiceClick: (service: ServiceId | null) => void;
  setActiveTab: (tab: Page) => void;
}

const ScClusteringAnnotationServicePage: React.FC<ServicePageProps> = ({ onServiceClick, setActiveTab }) => {
    
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
        { name: 'Single-Cell RNA-Seq', serviceId: 'single-cell-rna-seq', onClick: () => handleNav(undefined, 'single-cell-rna-seq') },
        { name: 'Clustering & Annotation', active: true },
    ];
    
    return (
        <div className="font-sans bg-white animate-fade-in">
             <section className="relative bg-cover bg-center h-80" style={{backgroundImage: "url('https://placehold.co/1920x1080/4DB8FF/FFFFFF?text=Cell+Clustering')"}}>
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="relative h-full flex flex-col justify-center items-start max-w-7xl mx-auto px-8 text-white">
                    <h1 className="text-5xl font-bold font-heading">Single-cell Clustering & Annotation</h1>
                    <button onClick={() => setActiveTab('contact')} className="mt-6 border border-white px-6 py-2 text-lg hover:bg-white hover:text-black transition-colors duration-300 flex items-center">
                        Inquire Now <ChevronRightIcon className="ml-2" size={20} />
                    </button>
                </div>
            </section>
            
            <Breadcrumb items={breadcrumbItems} />
            
            <section className="py-20 px-8">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <main className="lg:col-span-8">
                        <ServiceSectionTitle title="Introduction to Clustering & Annotation" />
                        <p className="text-gray-700 mb-6 leading-relaxed">
                            The first critical step in analyzing single-cell RNA-seq (scRNA-Seq) data is to identify and classify the different cell types present in a heterogeneous sample. This is achieved through unsupervised clustering, which groups cells based on their transcriptional similarities, followed by annotation, where these clusters are assigned biological identities based on known marker genes.
                        </p>
                        <img src="https://placehold.co/600x400/F9FAFB/4DB8FF?text=Annotated+UMAP" alt="Annotated UMAP Plot" className="rounded-lg shadow-xl w-full mb-8" loading="lazy" />
                        
                        <ServiceSectionTitle title="Key Applications" />
                        <div className="space-y-6 mt-6">
                            <FeatureCard 
                                icon={<UsersIcon className="text-primary" size={32}/>}
                                title="Deconstruct Tissue Heterogeneity"
                                description="Resolve the full spectrum of cell types and states within a complex tissue, such as a tumor microenvironment or a developing organ."
                            />
                             <FeatureCard 
                                icon={<BrainIcon className="text-primary" size={32}/>}
                                title="Identify Rare Cell Populations"
                                description="Discover novel or rare cell types that are often masked in bulk tissue analysis but may play critical roles in disease or development."
                            />
                             <FeatureCard 
                                icon={<CheckCircleIcon className="text-primary" size={32}/>}
                                title="Characterize Cellular States"
                                description="Distinguish between different functional states of a single cell type, such as activated vs. resting immune cells."
                            />
                        </div>

                        <ServiceSectionTitle title="Clustering & Annotation Workflow" />
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center my-6">
                            {['Data Integration', 'Clustering', 'Find Markers', 'Annotate'].map(step => (
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
                            <li>High-resolution UMAP/t-SNE plots colored by cluster and cell type annotation.</li>
                            <li>Dot plots and heatmaps showing the expression of key marker genes for each cluster.</li>
                            <li>A table listing the identified cell types and their relative proportions in each sample.</li>
                            <li>An interactive HTML report for exploring the data.</li>
                            <li>A comprehensive analysis report with methods and interpretation.</li>
                        </ul>
                        
                        <ServiceSectionTitle title="References" />
                        <blockquote className="p-4 my-4 border-l-4 border-gray-300 bg-gray-50">
                            <p className="text-gray-600 italic">
                                Our annotation process combines automated methods with expert manual review, leveraging canonical marker gene databases.
                                <br />- Stuart, T., et al. (2019). Comprehensive integration of single-cell data. Cell.
                                <br />- Traag, V. A., Waltman, L., & Van Eck, N. J. (2019). From Louvain to Leiden: guaranteeing well-connected communities. Scientific reports.
                            </p>
                        </blockquote>
                    </main>

                    <ServiceSidebar 
                        serviceLinks={serviceLinks}
                        currentServiceId="sc-clustering-annotation"
                        onServiceClick={(id) => onServiceClick(id)}
                    />
                </div>
            </section>
        </div>
    );
};
export default ScClusteringAnnotationServicePage;