
import React from 'react';
import { Page, ServiceId } from '../../types.ts';
import { UsersIcon, BrainIcon, ActivityIcon, BookOpenIcon, ChevronRightIcon } from '../../components/icons/Icons.tsx';
import ServiceSidebar from '../../components/services/ServiceSidebar.tsx';
import Breadcrumb, { BreadcrumbItem } from '../../components/common/Breadcrumb.tsx';
import ServiceSectionTitle from '../../components/common/ServiceSectionTitle.tsx';
import FeatureCard from '../../components/common/FeatureCard.tsx';
import { serviceLinks } from '../../data/serviceSidebarLinks.ts';

interface ServicePageProps {
  onServiceClick?: (service: ServiceId | null) => void;
  setActiveTab?: (tab: Page) => void;
}

const SingleCellRnaSeqServicePage: React.FC<ServicePageProps> = ({ onServiceClick, setActiveTab }) => {
    
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
        { name: 'Single-Cell RNA-Seq Analysis', active: true },
    ];
    
    return (
        <div className="font-sans bg-white animate-fade-in">
            <section className="relative bg-cover bg-center h-80" style={{backgroundImage: "url('https://placehold.co/1920x1080/4DB8FF/FFFFFF?text=scRNA-Seq')"}}>
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="relative h-full flex flex-col justify-center items-start max-w-7xl mx-auto px-8 text-white">
                    <h1 className="text-5xl font-bold font-heading">Single-Cell RNA-Seq Analysis</h1>
                    <button onClick={() => setActiveTab?.('contact')} className="mt-6 border border-white px-6 py-2 text-lg hover:bg-white hover:text-black transition-colors duration-300 flex items-center">
                        Inquire Now <ChevronRightIcon className="ml-2" size={20} />
                    </button>
                </div>
            </section>
            
            <Breadcrumb items={breadcrumbItems} />
            
            <section className="py-20 px-8">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <main className="lg:col-span-8">
                        <ServiceSectionTitle title="Single-Cell RNA-Seq (scRNA-Seq) Analysis" />
                        <p className="text-gray-700 mb-6 leading-relaxed">
                            Single-cell RNA sequencing (scRNA-Seq) provides a high-resolution view of gene expression by profiling individual cells. This technology is essential for understanding the complexity of heterogeneous tissues, identifying rare cell populations, and mapping developmental trajectories. We offer comprehensive analysis of scRNA-Seq data from various platforms, including 10x Genomics, Drop-seq, and more.
                        </p>
                        <img src="https://placehold.co/600x400/F9FAFB/4DB8FF?text=scRNA-Seq+UMAP" alt="scRNA-Seq Analysis" className="rounded-lg shadow-xl w-full mb-8" loading="lazy" />

                        <ServiceSectionTitle title="Our scRNA-Seq Analysis Workflow" />
                        <div className="space-y-6 mt-6">
                            <FeatureCard 
                                icon={<UsersIcon className="text-primary" size={32}/>}
                                title="Clustering & Cell Type Identification"
                                description="Unsupervised clustering to group cells by expression similarity and annotation of clusters with known cell type markers."
                            />
                             <FeatureCard 
                                icon={<BrainIcon className="text-primary" size={32}/>}
                                title="Differential Expression & Marker Genes"
                                description="Finding marker genes that define each cell cluster or genes that change between conditions within a specific cell type."
                            />
                             <FeatureCard 
                                icon={<ActivityIcon className="text-primary" size={32}/>}
                                title="Trajectory Inference"
                                description="Reconstructing developmental pathways or dynamic cellular processes by ordering cells in pseudotime."
                            />
                        </div>

                        <ServiceSectionTitle title="Standard Workflow" />
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center my-6">
                            {['Processing', 'QC & Filter', 'Clustering', 'Annotation'].map(step => (
                                <div key={step} className="flex flex-col items-center">
                                    <div className="p-4 bg-primary/10 rounded-md">
                                        <BookOpenIcon size={40} className="text-primary" />
                                    </div>
                                    <p className="mt-2 font-semibold text-sm text-primary bg-primary/10 px-2 py-1 rounded w-full">{step}</p>
                                </div>
                            ))}
                        </div>
                        
                        <ServiceSectionTitle title="Advanced Analysis" />
                         <p className="text-gray-700 mb-8">
                            Beyond the standard workflow, we also offer advanced analyses such as multi-sample integration, cell-cell communication analysis, and integration with other single-cell modalities (e.g., CITE-seq, ATAC-seq).
                        </p>

                        <ServiceSectionTitle title="References" />
                        <blockquote className="p-4 my-4 border-l-4 border-gray-300 bg-gray-50">
                            <p className="text-gray-600 italic">
                                We primarily use the Seurat (R) and Scanpy (Python) frameworks, which are the leading toolkits for scRNA-Seq analysis.
                                <br />- Hao, Y., et al. (2021). Integrated analysis of multimodal single-cell data. Cell.
                                <br />- Wolf, F. A., Angerer, P., & Theis, F. J. (2018). SCANPY: large-scale single-cell gene expression data analysis. Genome biology.
                            </p>
                        </blockquote>
                    </main>

                    <ServiceSidebar 
                        serviceLinks={serviceLinks}
                        currentServiceId="single-cell-rna-seq"
                        onServiceClick={(id: ServiceId | null) => onServiceClick?.(id)}
                    />
                </div>
            </section>
        </div>
    );
};

export default SingleCellRnaSeqServicePage;
