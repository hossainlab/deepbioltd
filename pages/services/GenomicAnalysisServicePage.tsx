
import React from 'react';
import { Page, ServiceId } from '../../types.ts';
import { DnaIcon, LightbulbIcon, UsersIcon, BookOpenIcon, ChevronRightIcon } from '../../components/icons/Icons.tsx';
import ServiceSidebar from '../../components/services/ServiceSidebar.tsx';
import Breadcrumb, { BreadcrumbItem } from '../../components/common/Breadcrumb.tsx';
import ServiceSectionTitle from '../../components/common/ServiceSectionTitle.tsx';
import FeatureCard from '../../components/common/FeatureCard.tsx';
import { serviceLinks } from '../../data/serviceSidebarLinks.ts';

interface ServicePageProps {
  onServiceClick?: (service: ServiceId | null) => void;
  setActiveTab?: (tab: Page) => void;
}

const GenomicAnalysisServicePage: React.FC<ServicePageProps> = ({ onServiceClick, setActiveTab }) => {
    
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
        { name: 'Genomic Analysis', active: true },
    ];
    
    return (
        <div className="font-sans bg-white animate-fade-in">
             <section className="relative bg-cover bg-center h-80" style={{backgroundImage: "url('https://placehold.co/1920x1080/10B981/FFFFFF?text=Genomics')"}}>
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="relative h-full flex flex-col justify-center items-start max-w-7xl mx-auto px-8 text-white">
                    <h1 className="text-5xl font-bold font-heading">Genomic Analysis Service</h1>
                    <button onClick={() => setActiveTab?.('contact')} className="mt-6 border border-white px-6 py-2 text-lg hover:bg-white hover:text-black transition-colors duration-300 flex items-center">
                        Inquire Now <ChevronRightIcon className="ml-2" size={20} />
                    </button>
                </div>
            </section>
            
            <Breadcrumb items={breadcrumbItems} />
            
            <section className="py-20 px-8">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <main className="lg:col-span-8">
                        <ServiceSectionTitle title="Comprehensive Genomic Analysis" />
                        <p className="text-gray-700 mb-6 leading-relaxed">
                            Genomic analysis involves the study of the complete set of DNA (the genome) of an organism. With the advent of high-throughput sequencing technologies, we can now analyze genomes at an unprecedented scale and resolution. Our services help researchers and clinicians make sense of complex genomic data to answer fundamental biological questions and drive medical advancements.
                        </p>
                        <img src="https://placehold.co/600x400/F9FAFB/10B981?text=Genomic+Data" alt="Genomic Analysis Diagram" className="rounded-lg shadow-xl w-full mb-8" loading="lazy" />
                        
                        <ServiceSectionTitle title="Key Areas of Genomic Analysis" />
                        <div className="space-y-6 mt-6">
                            <FeatureCard 
                                icon={<DnaIcon className="text-primary" size={32}/>}
                                title="Variant Calling & Annotation"
                                description="Identification of SNPs, indels, and structural variants from sequencing data and annotation of their potential functional impact."
                            />
                             <FeatureCard 
                                icon={<UsersIcon className="text-primary" size={32}/>}
                                title="Genome-Wide Association Studies (GWAS)"
                                description="Analyzing genetic variants across many individuals to identify variants associated with a specific trait or disease."
                            />
                             <FeatureCard 
                                icon={<LightbulbIcon className="text-primary" size={32}/>}
                                title="Comparative & Cancer Genomics"
                                description="Comparing genomic features of different organisms to study evolution, and characterizing tumor alterations to understand cancer."
                            />
                        </div>

                        <ServiceSectionTitle title="Our Analysis Pipeline" />
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center my-6">
                            {['Data QC', 'Alignment', 'Variant Calling', 'Annotation'].map(step => (
                                <div key={step} className="flex flex-col items-center">
                                    <div className="p-4 bg-primary/10 rounded-md">
                                        <BookOpenIcon size={40} className="text-primary" />
                                    </div>
                                    <p className="mt-2 font-semibold text-sm text-primary bg-primary/10 px-2 py-1 rounded w-full">{step}</p>
                                </div>
                            ))}
                        </div>
                        
                        <p className="text-gray-700 mb-8">
                            Our standard pipeline includes data quality control, read alignment to a reference genome, variant calling using best-practice tools like GATK, variant filtration, and comprehensive annotation. We provide publication-ready figures and detailed reports to support your research.
                        </p>

                        <ServiceSectionTitle title="References" />
                        <blockquote className="p-4 my-4 border-l-4 border-gray-300 bg-gray-50">
                            <p className="text-gray-600 italic">
                                Our genomic analysis pipelines are built upon industry-standard tools and best practices to ensure accuracy and reproducibility.
                                <br />- Li, H., & Durbin, R. (2009). Fast and accurate short read alignment with Burrows-Wheeler transform. Bioinformatics.
                                <br />- Van der Auwera, G. A., et al. (2013). From FastQ data to high-confidence variant calls: the Genome Analysis Toolkit best practices pipeline. Current protocols in bioinformatics.
                            </p>
                        </blockquote>
                    </main>

                    <ServiceSidebar 
                        serviceLinks={serviceLinks}
                        currentServiceId="genomic-analysis"
                        onServiceClick={(id: ServiceId | null) => onServiceClick?.(id)}
                    />
                </div>
            </section>
        </div>
    );
};

export default GenomicAnalysisServicePage;
