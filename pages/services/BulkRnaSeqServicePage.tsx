
import React from 'react';
import { Page, ServiceId } from '../../types.ts';
import { ActivityIcon, LightbulbIcon, UsersIcon, BookOpenIcon, ChevronRightIcon } from '../../components/icons/Icons.tsx';
import ServiceSidebar from '../../components/services/ServiceSidebar.tsx';
import Breadcrumb, { BreadcrumbItem } from '../../components/common/Breadcrumb.tsx';
import ServiceSectionTitle from '../../components/common/ServiceSectionTitle.tsx';
import FeatureCard from '../../components/common/FeatureCard.tsx';
import { serviceLinks } from '../../data/serviceSidebarLinks.ts';

interface ServicePageProps {
  onServiceClick?: (service: ServiceId | null) => void;
  setActiveTab?: (tab: Page) => void;
}

const BulkRnaSeqServicePage: React.FC<ServicePageProps> = ({ onServiceClick, setActiveTab }) => {
    
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
        { name: 'Bulk RNA-Seq Analysis', active: true },
    ];
    
    return (
        <div className="font-sans bg-white animate-fade-in">
             <section className="relative bg-cover bg-center h-80" style={{backgroundImage: "url('https://placehold.co/1920x1080/205E92/FFFFFF?text=Bulk+RNA-Seq')"}}>
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="relative h-full flex flex-col justify-center items-start max-w-7xl mx-auto px-8 text-white">
                    <h1 className="text-5xl font-bold font-heading">Bulk RNA-Seq Analysis</h1>
                    <button onClick={() => setActiveTab?.('contact')} className="mt-6 border border-white px-6 py-2 text-lg hover:bg-white hover:text-black transition-colors duration-300 flex items-center">
                        Inquire Now <ChevronRightIcon className="ml-2" size={20} />
                    </button>
                </div>
            </section>
            
            <Breadcrumb items={breadcrumbItems} />
            
            <section className="py-20 px-8">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <main className="lg:col-span-8">
                        <ServiceSectionTitle title="Bulk RNA-Seq Data Analysis" />
                        <p className="text-gray-700 mb-6 leading-relaxed">
                            Bulk RNA sequencing (RNA-Seq) is a powerful method for measuring the average gene expression levels across a population of cells in a sample. It is widely used to compare expression profiles between different conditions, identify differentially expressed genes, and uncover the biological pathways involved in a response. Our expert analysis services help you get the most out of your RNA-Seq data.
                        </p>
                        <img src="https://placehold.co/600x400/F9FAFB/205E92?text=Bulk+RNA-Seq+Workflow" alt="Bulk RNA-Seq Workflow" className="rounded-lg shadow-xl w-full mb-8" loading="lazy" />
                        
                        <ServiceSectionTitle title="Key Analysis Components" />
                        <div className="space-y-6 mt-6">
                            <FeatureCard 
                                icon={<ActivityIcon className="text-primary" size={32}/>}
                                title="Differential Expression Analysis"
                                description="Identification of genes that are significantly up- or down-regulated between experimental groups using robust statistical methods (e.g., DESeq2, edgeR)."
                            />
                             <FeatureCard 
                                icon={<LightbulbIcon className="text-primary" size={32}/>}
                                title="Pathway & Enrichment Analysis"
                                description="Functional analysis (e.g., GO, KEGG) to determine which biological pathways are enriched among the differentially expressed genes."
                            />
                             <FeatureCard 
                                icon={<UsersIcon className="text-primary" size={32}/>}
                                title="Data Visualization"
                                description="Creation of publication-quality plots such as heatmaps, volcano plots, and PCA plots to visualize expression patterns and sample relationships."
                            />
                        </div>

                        <ServiceSectionTitle title="Standard Workflow" />
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center my-6">
                            {['QC & Trim', 'Alignment', 'Quantification', 'DE Analysis'].map(step => (
                                <div key={step} className="flex flex-col items-center">
                                    <div className="p-4 bg-primary/10 rounded-md">
                                        <BookOpenIcon size={40} className="text-primary" />
                                    </div>
                                    <p className="mt-2 font-semibold text-sm text-primary bg-primary/10 px-2 py-1 rounded w-full">{step}</p>
                                </div>
                            ))}
                        </div>
                        
                        <ServiceSectionTitle title="What You Receive" />
                        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-8">
                            <li>Raw and normalized expression count tables.</li>
                            <li>Lists of differentially expressed genes with statistical significance.</li>
                            <li>High-resolution, publication-ready figures for visualization.</li>
                            <li>A comprehensive report detailing the methods, results, and interpretation.</li>
                        </ul>

                        <ServiceSectionTitle title="References" />
                        <blockquote className="p-4 my-4 border-l-4 border-gray-300 bg-gray-50">
                            <p className="text-gray-600 italic">
                                Our differential expression and functional analysis workflows utilize gold-standard R/Bioconductor packages.
                                <br />- Love, M. I., Huber, W., & Anders, S. (2014). Moderated estimation of fold change and dispersion for RNA-seq data with DESeq2. Genome biology.
                                <br />- Robinson, M. D., McCarthy, D. J., & Smyth, G. K. (2010). edgeR: a Bioconductor package for differential expression analysis of digital gene expression data. Bioinformatics.
                            </p>
                        </blockquote>
                    </main>

                    <ServiceSidebar 
                        serviceLinks={serviceLinks}
                        currentServiceId="bulk-rna-seq"
                        onServiceClick={(id: ServiceId | null) => onServiceClick?.(id)}
                    />
                </div>
            </section>
        </div>
    );
};

export default BulkRnaSeqServicePage;
