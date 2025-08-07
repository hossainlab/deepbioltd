

import React from 'react';
import { Page, ServiceId } from '../../types.ts';
import { DnaIcon, LayersIcon, TargetIcon, BookOpenIcon, ChevronRightIcon } from '../../components/icons/Icons.tsx';
import ServiceSidebar from '../../components/services/ServiceSidebar.tsx';
import Breadcrumb, { BreadcrumbItem } from '../../components/common/Breadcrumb.tsx';
import ServiceSectionTitle from '../../components/common/ServiceSectionTitle.tsx';
import FeatureCard from '../../components/common/FeatureCard.tsx';
import { serviceLinks } from '../../data/serviceSidebarLinks.ts';

interface ServicePageProps {
  onServiceClick?: (service: ServiceId | null) => void;
  setActiveTab?: (tab: Page) => void;
}

const CnvAnalysisServicePage: React.FC<ServicePageProps> = ({ onServiceClick, setActiveTab }) => {
    
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
        { name: 'CNV Analysis', active: true },
    ];
    
    return (
        <div className="font-sans bg-white animate-fade-in">
             <section className="relative bg-cover bg-center h-80" style={{backgroundImage: "url('https://placehold.co/1920x1080/10B981/FFFFFF?text=CNV+Analysis')"}}>
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="relative h-full flex flex-col justify-center items-start max-w-7xl mx-auto px-8 text-white">
                    <h1 className="text-5xl font-bold font-heading">Copy Number Variation (CNV) Analysis</h1>
                    <button onClick={() => setActiveTab?.('contact')} className="mt-6 border border-white px-6 py-2 text-lg hover:bg-white hover:text-black transition-colors duration-300 flex items-center">
                        Inquire Now <ChevronRightIcon className="ml-2" size={20} />
                    </button>
                </div>
            </section>
            
            <Breadcrumb items={breadcrumbItems} />
            
            <section className="py-20 px-8">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <main className="lg:col-span-8">
                        <ServiceSectionTitle title="Introduction to CNV Analysis" />
                        <p className="text-gray-700 mb-6 leading-relaxed">
                            Copy Number Variations (CNVs) are alterations of the DNA of a genome that results in the cell having an abnormal or, for certain genes, a normal variation in the number of copies of one or more sections of the DNA. CNVs correspond to relatively large regions of the genome that have been deleted or duplicated. We provide robust analysis to detect and interpret these variations from whole-genome or exome sequencing data.
                        </p>
                        <img src="https://placehold.co/600x400/F9FAFB/10B981?text=CNV+Plot" alt="CNV Plot" className="rounded-lg shadow-xl w-full mb-8" />
                        
                        <ServiceSectionTitle title="Applications of CNV Analysis" />
                        <div className="space-y-6 mt-6">
                            <FeatureCard 
                                icon={<TargetIcon className="text-primary" size={32}/>}
                                title="Cancer Genomics"
                                description="Identifying amplifications of oncogenes (e.g., ERBB2) and deletions of tumor suppressor genes (e.g., PTEN) that drive cancer."
                            />
                             <FeatureCard 
                                icon={<DnaIcon className="text-primary" size={32}/>}
                                title="Developmental Disorders"
                                description="Detecting microdeletions and microduplications associated with congenital abnormalities and developmental delay."
                            />
                             <FeatureCard 
                                icon={<LayersIcon className="text-primary" size={32}/>}
                                title="Population Genetics"
                                description="Studying the role of CNVs in population diversity and adaptation to different environments."
                            />
                        </div>

                        <ServiceSectionTitle title="Our CNV Analysis Workflow" />
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center my-6">
                            {['Data QC', 'Read Depth Analysis', 'CNV Calling', 'Annotation & Visualization'].map(step => (
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
                            <li>A list of detected CNVs with their genomic coordinates, copy number state, and size.</li>
                            <li>Annotation of CNVs with overlapping genes from databases like RefSeq and Ensembl.</li>
                            <li>Genome-wide plots showing copy number profiles for each sample.</li>
                            <li>A comprehensive report summarizing methods, QC, and results.</li>
                        </ul>
                        
                        <ServiceSectionTitle title="References" />
                        <blockquote className="p-4 my-4 border-l-4 border-gray-300 bg-gray-50">
                            <p className="text-gray-600 italic">
                                We utilize a variety of established tools for CNV detection from WGS data, choosing the best algorithm for the data type.
                                <br />- Talevich, E., et al. (2016). CNVkit: Genome-wide copy number detection and visualization from targeted DNA sequencing. PLoS computational biology.
                                <br />- Abyzov, A., et al. (2011). CNVnator: an approach to discover, genotype, and characterize typical and atypical CNVs from family and population genome sequencing. Genome research.
                            </p>
                        </blockquote>
                    </main>

                    <ServiceSidebar 
                        serviceLinks={serviceLinks}
                        currentServiceId="cnv-analysis"
                        onServiceClick={(id: ServiceId | null) => onServiceClick?.(id)}
                    />
                </div>
            </section>
        </div>
    );
};

export default CnvAnalysisServicePage;