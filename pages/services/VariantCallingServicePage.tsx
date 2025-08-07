

import React from 'react';
import { Page, ServiceId } from '../../types.ts';
import { DnaIcon, CheckCircleIcon, BookOpenIcon, ChevronRightIcon, UsersIcon } from '../../components/icons/Icons.tsx';
import ServiceSidebar from '../../components/services/ServiceSidebar.tsx';
import Breadcrumb, { BreadcrumbItem } from '../../components/common/Breadcrumb.tsx';
import ServiceSectionTitle from '../../components/common/ServiceSectionTitle.tsx';
import FeatureCard from '../../components/common/FeatureCard.tsx';
import { serviceLinks } from '../../data/serviceSidebarLinks.ts';

interface ServicePageProps {
  onServiceClick?: (service: ServiceId | null) => void;
  setActiveTab?: (tab: Page) => void;
}

const VariantCallingServicePage: React.FC<ServicePageProps> = ({ onServiceClick, setActiveTab }) => {
    
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
        { name: 'Variant Calling', active: true },
    ];
    
    return (
        <div className="font-sans bg-white animate-fade-in">
             <section className="relative bg-cover bg-center h-80" style={{backgroundImage: "url('https://placehold.co/1920x1080/10B981/FFFFFF?text=Variant+Calling')"}}>
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="relative h-full flex flex-col justify-center items-start max-w-7xl mx-auto px-8 text-white">
                    <h1 className="text-5xl font-bold font-heading">Variant Calling (SNPs, INDELs)</h1>
                    <button onClick={() => setActiveTab?.('contact')} className="mt-6 border border-white px-6 py-2 text-lg hover:bg-white hover:text-black transition-colors duration-300 flex items-center">
                        Inquire Now <ChevronRightIcon className="ml-2" size={20} />
                    </button>
                </div>
            </section>
            
            <Breadcrumb items={breadcrumbItems} />
            
            <section className="py-20 px-8">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <main className="lg:col-span-8">
                        <ServiceSectionTitle title="Introduction to Variant Calling" />
                        <p className="text-gray-700 mb-6 leading-relaxed">
                            Variant calling is the process of identifying differences between a sample's DNA sequence and a reference genome. These variations, including Single Nucleotide Polymorphisms (SNPs) and small Insertions/Deletions (INDELs), are fundamental to understanding genetic diversity, disease susceptibility, and evolution. Our robust pipelines ensure high-confidence variant calls from your NGS data.
                        </p>
                        <img src="https://placehold.co/600x400/F9FAFB/10B981?text=VCF+File" alt="Variant Calling Diagram" className="rounded-lg shadow-xl w-full mb-8" loading="lazy" />
                        
                        <ServiceSectionTitle title="Applications of Variant Calling" />
                        <div className="space-y-6 mt-6">
                            <FeatureCard 
                                icon={<DnaIcon className="text-primary" size={32}/>}
                                title="Disease Research"
                                description="Identifying genetic variants associated with Mendelian diseases and discovering risk alleles for complex traits."
                            />
                             <FeatureCard 
                                icon={<CheckCircleIcon className="text-primary" size={32}/>}
                                title="Cancer Genomics"
                                description="Detecting somatic mutations in tumors to understand cancer development, identify drivers, and guide targeted therapies."
                            />
                             <FeatureCard 
                                icon={<UsersIcon className="text-primary" size={32}/>}
                                title="Population Genetics"
                                description="Studying genetic diversity, population structure, and evolutionary relationships within and between populations."
                            />
                        </div>

                        <ServiceSectionTitle title="Our GATK-Based Workflow" />
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center my-6">
                            {['Data QC', 'Alignment', 'Mark Duplicates', 'BQSR', 'Call Variants'].map(step => (
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
                            <li>Raw and filtered Variant Call Format (VCF) files.</li>
                            <li>Comprehensive variant annotation (e.g., using SnpEff or ANNOVAR).</li>
                            <li>Detailed summary statistics and quality control plots.</li>
                            <li>A full report detailing the methods, software versions, and results.</li>
                        </ul>
                        
                        <ServiceSectionTitle title="References" />
                        <blockquote className="p-4 my-4 border-l-4 border-gray-300 bg-gray-50">
                            <p className="text-gray-600 italic">
                                We follow the GATK Best Practices for our variant discovery workflows to ensure the highest quality results.
                                <br />- Van der Auwera, G. A., et al. (2013). From FastQ data to high-confidence variant calls: the Genome Analysis Toolkit best practices pipeline. Current protocols in bioinformatics.
                                <br />- Cingolani, P., et al. (2012). A program to annotate, and predict the effects of single nucleotide polymorphisms, SnpEff. Fly.
                            </p>
                        </blockquote>
                    </main>

                    <ServiceSidebar 
                        serviceLinks={serviceLinks}
                        currentServiceId="variant-calling"
                        onServiceClick={(id: ServiceId | null) => onServiceClick?.(id)}
                    />
                </div>
            </section>
        </div>
    );
};
export default VariantCallingServicePage;