

import React from 'react';
import { Page, ServiceId } from '../../types.ts';
import { ActivityIcon, LightbulbIcon, LayersIcon, BookOpenIcon, ChevronRightIcon } from '../../components/icons/Icons.tsx';
import ServiceSidebar from '../../components/services/ServiceSidebar.tsx';
import Breadcrumb, { BreadcrumbItem } from '../../components/common/Breadcrumb.tsx';
import ServiceSectionTitle from '../../components/common/ServiceSectionTitle.tsx';
import FeatureCard from '../../components/common/FeatureCard.tsx';
import { serviceLinks } from '../../data/serviceSidebarLinks.ts';

interface ServicePageProps {
  onServiceClick: (service: ServiceId | null) => void;
  setActiveTab: (tab: Page) => void;
}

const DgeAnalysisServicePage: React.FC<ServicePageProps> = ({ onServiceClick, setActiveTab }) => {
    
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
        { name: 'Bulk RNA-Seq Analysis', serviceId: 'bulk-rna-seq', onClick: () => handleNav(undefined, 'bulk-rna-seq') },
        { name: 'DGE Analysis', active: true },
    ];
    
    return (
        <div className="font-sans bg-white animate-fade-in">
             <section className="relative bg-cover bg-center h-80" style={{backgroundImage: "url('https://placehold.co/1920x1080/205E92/FFFFFF?text=DGE+Analysis')"}}>
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="relative h-full flex flex-col justify-center items-start max-w-7xl mx-auto px-8 text-white">
                    <h1 className="text-5xl font-bold font-heading">Differential Gene Expression Analysis</h1>
                    <button onClick={() => setActiveTab('contact')} className="mt-6 border border-white px-6 py-2 text-lg hover:bg-white hover:text-black transition-colors duration-300 flex items-center">
                        Inquire Now <ChevronRightIcon className="ml-2" size={20} />
                    </button>
                </div>
            </section>
            
            <Breadcrumb items={breadcrumbItems} />
            
            <section className="py-20 px-8">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <main className="lg:col-span-8">
                        <ServiceSectionTitle title="Introduction to DGE Analysis" />
                        <p className="text-gray-700 mb-6 leading-relaxed">
                            Differential Gene Expression (DGE) analysis is a cornerstone of transcriptomics, used to identify genes that show significant changes in expression levels between two or more experimental conditions (e.g., treated vs. untreated, diseased vs. healthy). This analysis provides critical insights into the molecular mechanisms underlying biological processes and responses.
                        </p>
                        <img src="https://placehold.co/600x400/F9FAFB/205E92?text=Volcano+Plot" alt="DGE Volcano Plot" className="rounded-lg shadow-xl w-full mb-8" loading="lazy" />
                        
                        <ServiceSectionTitle title="Key Applications of DGE" />
                        <div className="space-y-6 mt-6">
                            <FeatureCard 
                                icon={<LightbulbIcon className="text-primary" size={32}/>}
                                title="Biomarker Discovery"
                                description="Identifying genes whose expression changes consistently with a disease state or treatment response, making them potential diagnostic or prognostic biomarkers."
                            />
                             <FeatureCard 
                                icon={<LayersIcon className="text-primary" size={32}/>}
                                title="Mechanism of Action Studies"
                                description="Uncovering the biological pathways and cellular processes that are perturbed by a drug, genetic modification, or environmental stimulus."
                            />
                             <FeatureCard 
                                icon={<ActivityIcon className="text-primary" size={32}/>}
                                title="Understanding Disease"
                                description="Comparing gene expression profiles between diseased and healthy tissues to understand the molecular basis of the pathology."
                            />
                        </div>

                        <ServiceSectionTitle title="DGE Analysis Workflow" />
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center my-6">
                            {['Count Matrix', 'Normalization', 'Statistical Model', 'Gene List'].map(step => (
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
                            <li>A complete list of differentially expressed genes with log-fold changes, p-values, and adjusted p-values.</li>
                            <li>Publication-quality visualizations, including volcano plots, heatmaps, and MA plots.</li>
                            <li>Principal Component Analysis (PCA) plots to visualize sample clustering.</li>
                            <li>Functional enrichment analysis results (GO and KEGG) for DEGs.</li>
                            <li>A comprehensive report detailing all methods and interpreting the results.</li>
                        </ul>
                        
                        <ServiceSectionTitle title="References" />
                        <blockquote className="p-4 my-4 border-l-4 border-gray-300 bg-gray-50">
                            <p className="text-gray-600 italic">
                                Our DGE analysis relies on statistically robust, peer-reviewed methods and packages from the R/Bioconductor project.
                                <br />- Love, M. I., Huber, W., & Anders, S. (2014). Moderated estimation of fold change and dispersion for RNA-seq data with DESeq2. Genome biology.
                                <br />- Subramanian, A., et al. (2005). Gene set enrichment analysis: a knowledge-based approach for interpreting genome-wide expression profiles. PNAS.
                            </p>
                        </blockquote>
                    </main>

                    <ServiceSidebar 
                        serviceLinks={serviceLinks}
                        currentServiceId="dge-analysis"
                        onServiceClick={(id) => onServiceClick(id)}
                    />
                </div>
            </section>
        </div>
    );
};
export default DgeAnalysisServicePage;