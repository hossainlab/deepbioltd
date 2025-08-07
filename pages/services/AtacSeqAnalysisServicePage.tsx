

import React from 'react';
import { Page, ServiceId } from '../../types.ts';
import { DnaIcon, TargetIcon, LightbulbIcon, BookOpenIcon, ChevronRightIcon } from '../../components/icons/Icons.tsx';
import ServiceSidebar from '../../components/services/ServiceSidebar.tsx';
import Breadcrumb, { BreadcrumbItem } from '../../components/common/Breadcrumb.tsx';
import ServiceSectionTitle from '../../components/common/ServiceSectionTitle.tsx';
import FeatureCard from '../../components/common/FeatureCard.tsx';
import { serviceLinks } from '../../data/serviceSidebarLinks.ts';

interface ServicePageProps {
  onServiceClick?: (service: ServiceId | null) => void;
  setActiveTab?: (tab: Page) => void;
}

const AtacSeqAnalysisServicePage: React.FC<ServicePageProps> = ({ onServiceClick, setActiveTab }) => {
    
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
        { name: 'ATAC-seq Analysis', active: true },
    ];
    
    return (
        <div className="font-sans bg-white animate-fade-in">
             <section className="relative bg-cover bg-center h-80" style={{backgroundImage: "url('https://placehold.co/1920x1080/F59E0B/FFFFFF?text=ATAC-seq')"}}>
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="relative h-full flex flex-col justify-center items-start max-w-7xl mx-auto px-8 text-white">
                    <h1 className="text-5xl font-bold font-heading">ATAC-seq Analysis</h1>
                    <button onClick={() => setActiveTab?.('contact')} className="mt-6 border border-white px-6 py-2 text-lg hover:bg-white hover:text-black transition-colors duration-300 flex items-center">
                        Inquire Now <ChevronRightIcon className="ml-2" size={20} />
                    </button>
                </div>
            </section>
            
            <Breadcrumb items={breadcrumbItems} />
            
            <section className="py-20 px-8">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <main className="lg:col-span-8">
                        <ServiceSectionTitle title="Introduction to ATAC-seq Analysis" />
                        <p className="text-gray-700 mb-6 leading-relaxed">
                            The Assay for Transposase-Accessible Chromatin using sequencing (ATAC-seq) is a revolutionary method for probing chromatin accessibility across the genome. By identifying open, accessible regions of chromatin, ATAC-seq allows us to map active regulatory elements like promoters and enhancers, providing a snapshot of the active gene regulatory landscape within a cell population.
                        </p>
                        <img src="https://placehold.co/600x400/F9FAFB/F59E0B?text=ATAC-seq+Peaks" alt="ATAC-seq Peaks" className="rounded-lg shadow-xl w-full mb-8" />
                        
                        <ServiceSectionTitle title="Key Applications" />
                        <div className="space-y-6 mt-6">
                            <FeatureCard 
                                icon={<LightbulbIcon className="text-primary" size={32}/>}
                                title="Identify Active Regulatory Elements"
                                description="Pinpoint the locations of active promoters and enhancers that drive gene expression in your specific cell type or condition."
                            />
                             <FeatureCard 
                                icon={<TargetIcon className="text-primary" size={32}/>}
                                title="Transcription Factor Footprinting"
                                description="Detect the precise binding sites of transcription factors within open chromatin regions to infer regulatory protein activity."
                            />
                             <FeatureCard 
                                icon={<DnaIcon className="text-primary" size={32}/>}
                                title="Study Chromatin Dynamics"
                                description="Compare chromatin accessibility between different conditions to understand how the regulatory landscape changes during development or disease."
                            />
                        </div>

                        <ServiceSectionTitle title="ATAC-seq Analysis Workflow" />
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center my-6">
                            {['QC & Alignment', 'Peak Calling', 'Footprinting', 'Integrative Analysis'].map(step => (
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
                            <li>Peak files (BED format) for accessible chromatin regions.</li>
                            <li>Differential accessibility analysis results between samples.</li>
                            <li>Transcription factor footprinting analysis and motif enrichment.</li>
                            <li>Genome browser tracks (BigWig) for visualizing accessibility signal.</li>
                            <li>A comprehensive report detailing all methods, QC, and results.</li>
                        </ul>

                        <ServiceSectionTitle title="References" />
                        <blockquote className="p-4 my-4 border-l-4 border-gray-300 bg-gray-50">
                            <p className="text-gray-600 italic">
                                We utilize the ENCODE consortium's standard pipeline for ATAC-seq data processing to ensure high-quality, reproducible results.
                                <br />- Buenrostro, J. D., et al. (2013). Transposition of native chromatin for fast and sensitive epigenomic profiling of open chromatin, DNA-binding proteins and nucleosome position. Nature methods.
                                <br />- Ou, J., et al. (2018). ChIPseeker: an R/Bioconductor package for ChIP peak annotation, comparison and visualization. Bioinformatics.
                            </p>
                        </blockquote>
                    </main>

                    <ServiceSidebar 
                        serviceLinks={serviceLinks}
                        currentServiceId="atac-seq-analysis"
                        onServiceClick={(id: ServiceId | null) => onServiceClick?.(id)}
                    />
                </div>
            </section>
        </div>
    );
};
export default AtacSeqAnalysisServicePage;
