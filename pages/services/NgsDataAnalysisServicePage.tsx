
import React from 'react';
import { Page, ServiceId } from '../../types.ts';
import { DocumentStackIcon, DnaIcon, UsersIcon, BookOpenIcon, ChevronRightIcon } from '../../components/icons/Icons.tsx';
import ServiceSidebar from '../../components/services/ServiceSidebar.tsx';
import Breadcrumb, { BreadcrumbItem } from '../../components/common/Breadcrumb.tsx';
import ServiceSectionTitle from '../../components/common/ServiceSectionTitle.tsx';
import FeatureCard from '../../components/common/FeatureCard.tsx';
import { serviceLinks } from '../../data/serviceSidebarLinks.ts';

interface ServicePageProps {
  onServiceClick?: (service: ServiceId | null) => void;
  setActiveTab?: (tab: Page) => void;
}

const NgsDataAnalysisServicePage: React.FC<ServicePageProps> = ({ onServiceClick, setActiveTab }) => {
    
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
        { name: 'NGS Data Analysis', active: true },
    ];
    
    return (
        <div className="font-sans bg-white animate-fade-in">
             <section className="relative bg-cover bg-center h-80" style={{backgroundImage: "url('https://placehold.co/1920x1080/4DB8FF/FFFFFF?text=NGS+Data')"}}>
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="relative h-full flex flex-col justify-center items-start max-w-7xl mx-auto px-8 text-white">
                    <h1 className="text-5xl font-bold font-heading">NGS Data Analysis</h1>
                    <button onClick={() => setActiveTab?.('contact')} className="mt-6 border border-white px-6 py-2 text-lg hover:bg-white hover:text-black transition-colors duration-300 flex items-center">
                        Inquire Now <ChevronRightIcon className="ml-2" size={20} />
                    </button>
                </div>
            </section>
            
            <Breadcrumb items={breadcrumbItems} />
            
            <section className="py-20 px-8">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <main className="lg:col-span-8">
                        <ServiceSectionTitle title="Next-Generation Sequencing (NGS)" />
                        <p className="text-gray-700 mb-6 leading-relaxed">
                            Next-Generation Sequencing (NGS) has revolutionized biological research, generating massive amounts of data for a wide range of applications. However, analyzing this complex data requires specialized bioinformatics expertise and computational infrastructure. We provide end-to-end analysis services for data from all major NGS platforms, including Illumina, PacBio, and Oxford Nanopore.
                        </p>
                        <img src="https://placehold.co/600x400/F9FAFB/4DB8FF?text=NGS+Pipeline" alt="NGS Data Pipeline" className="rounded-lg shadow-xl w-full mb-8" loading="lazy" />
                        
                        <ServiceSectionTitle title="Supported NGS Applications" />
                        <div className="space-y-6 mt-6">
                            <FeatureCard 
                                icon={<DnaIcon className="text-primary" size={32}/>}
                                title="Whole Genome/Exome Sequencing (WGS/WES)"
                                description="Comprehensive analysis of entire genomes or protein-coding regions for variant discovery and structural analysis."
                            />
                             <FeatureCard 
                                icon={<DocumentStackIcon className="text-primary" size={32}/>}
                                title="RNA-Sequencing (RNA-Seq)"
                                description="Quantification of gene expression, discovery of novel transcripts, and analysis of alternative splicing (both bulk and single-cell)."
                            />
                             <FeatureCard 
                                icon={<UsersIcon className="text-primary" size={32}/>}
                                title="Epigenomic Sequencing (ChIP-Seq, ATAC-Seq)"
                                description="Identification of protein-DNA interactions and chromatin accessibility to study gene regulation and epigenetic modifications."
                            />
                        </div>

                        <ServiceSectionTitle title="Our Standard Pipeline" />
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center my-6">
                            {['QC & Trim', 'Alignment', 'Quantification', 'Downstream'].map(step => (
                                <div key={step} className="flex flex-col items-center">
                                    <div className="p-4 bg-primary/10 rounded-md">
                                        <BookOpenIcon size={40} className="text-primary" />
                                    </div>
                                    <p className="mt-2 font-semibold text-sm text-primary bg-primary/10 px-2 py-1 rounded w-full">{step}</p>
                                </div>
                            ))}
                        </div>
                        
                        <p className="text-gray-700 mb-8">
                            Our process begins with raw data QC (FastQC) and pre-processing, followed by alignment and application-specific analysis (e.g., differential expression for RNA-Seq, peak calling for ChIP-Seq). We deliver comprehensive reports and publication-ready figures.
                        </p>

                        <ServiceSectionTitle title="References" />
                        <blockquote className="p-4 my-4 border-l-4 border-gray-300 bg-gray-50">
                            <p className="text-gray-600 italic">
                                Our analytical pipelines are containerized using Docker and managed with Nextflow to ensure maximum reproducibility. Key tools include:
                                <br />- Andrews, S. (2010). FastQC: a quality control tool for high throughput sequence data.
                                <br />- Ewels, P., et al. (2020). The nf-core framework for community-curated bioinformatics pipelines. Nature biotechnology.
                            </p>
                        </blockquote>
                    </main>

                    <ServiceSidebar 
                        serviceLinks={serviceLinks}
                        currentServiceId="ngs-data-analysis"
                        onServiceClick={(id: ServiceId | null) => onServiceClick?.(id)}
                    />
                </div>
            </section>
        </div>
    );
};

export default NgsDataAnalysisServicePage;
