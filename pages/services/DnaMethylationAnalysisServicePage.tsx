

import React from 'react';
import { Page, ServiceId } from '../../types.ts';
import { DnaIcon, FlaskConicalIcon, RefreshCwIcon, BookOpenIcon, ChevronRightIcon } from '../../components/icons/Icons.tsx';
import ServiceSidebar from '../../components/services/ServiceSidebar.tsx';
import Breadcrumb, { BreadcrumbItem } from '../../components/common/Breadcrumb.tsx';
import ServiceSectionTitle from '../../components/common/ServiceSectionTitle.tsx';
import FeatureCard from '../../components/common/FeatureCard.tsx';
import { serviceLinks } from '../../data/serviceSidebarLinks.ts';

interface ServicePageProps {
  onServiceClick?: (service: ServiceId | null) => void;
  setActiveTab?: (tab: Page) => void;
}

const DnaMethylationAnalysisServicePage: React.FC<ServicePageProps> = ({ onServiceClick, setActiveTab }) => {
    
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
        { name: 'DNA Methylation', active: true },
    ];
    
    return (
        <div className="font-sans bg-white animate-fade-in">
             <section className="relative bg-cover bg-center h-80" style={{backgroundImage: "url('https://placehold.co/1920x1080/F59E0B/FFFFFF?text=Methylation')"}}>
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="relative h-full flex flex-col justify-center items-start max-w-7xl mx-auto px-8 text-white">
                    <h1 className="text-5xl font-bold font-heading">DNA Methylation Analysis</h1>
                    <button onClick={() => setActiveTab?.('contact')} className="mt-6 border border-white px-6 py-2 text-lg hover:bg-white hover:text-black transition-colors duration-300 flex items-center">
                        Inquire Now <ChevronRightIcon className="ml-2" size={20} />
                    </button>
                </div>
            </section>
            
            <Breadcrumb items={breadcrumbItems} />
            
            <section className="py-20 px-8">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <main className="lg:col-span-8">
                        <ServiceSectionTitle title="Introduction to DNA Methylation" />
                        <p className="text-gray-700 mb-6 leading-relaxed">
                            DNA methylation is a key epigenetic modification that plays a crucial role in regulating gene expression, cellular identity, and genome stability. By analyzing data from Whole-Genome Bisulfite Sequencing (WGBS) or Reduced Representation Bisulfite Sequencing (RRBS), we can identify genome-wide methylation patterns and pinpoint Differentially Methylated Regions (DMRs) associated with various biological conditions.
                        </p>
                        <img src="https://placehold.co/600x400/F9FAFB/F59E0B?text=Methylation+Profile" alt="DNA Methylation Plot" className="rounded-lg shadow-xl w-full mb-8" />
                        
                        <ServiceSectionTitle title="Applications" />
                        <div className="space-y-6 mt-6">
                            <FeatureCard 
                                icon={<FlaskConicalIcon className="text-primary" size={32}/>}
                                title="Cancer Epigenetics"
                                description="Identifying aberrant methylation patterns in tumors, such as promoter hypermethylation of tumor suppressor genes, for diagnostic and prognostic purposes."
                            />
                             <FeatureCard 
                                icon={<RefreshCwIcon className="text-primary" size={32}/>}
                                title="Developmental Biology & Aging"
                                description="Studying the dynamic changes in DNA methylation during development and aging to understand how cellular identity is established and maintained."
                            />
                             <FeatureCard 
                                icon={<DnaIcon className="text-primary" size={32}/>}
                                title="Environmental Epigenetics"
                                description="Investigating how environmental exposures can alter methylation patterns and contribute to disease risk."
                            />
                        </div>

                        <ServiceSectionTitle title="Our Analysis Workflow" />
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center my-6">
                            {['QC & Alignment', 'Methylation Calling', 'DMR Identification', 'Functional Analysis'].map(step => (
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
                            <li>Quality control reports for raw and aligned data.</li>
                            <li>Genome-wide methylation level reports for each sample.</li>
                            <li>List of significant Differentially Methylated Regions (DMRs) and their annotated genes.</li>
                            <li>Visualization of methylation patterns at specific loci of interest.</li>
                            <li>A comprehensive report detailing all methods, results, and their biological interpretation.</li>
                        </ul>
                        
                        <ServiceSectionTitle title="References" />
                        <blockquote className="p-4 my-4 border-l-4 border-gray-300 bg-gray-50">
                            <p className="text-gray-600 italic">
                                Our pipeline utilizes state-of-the-art tools for bisulfite sequencing analysis to ensure accurate and reliable results.
                                <br />- Krueger, F., & Andrews, S. R. (2011). Bismark: a flexible aligner and methylation caller for Bisulfite-Seq applications. Bioinformatics.
                                <br />- Akalin, A., et al. (2012). methylKit: a comprehensive R package for the analysis of genome-wide DNA methylation profiles. Genome biology.
                            </p>
                        </blockquote>
                    </main>

                    <ServiceSidebar 
                        serviceLinks={serviceLinks}
                        currentServiceId="dna-methylation-analysis"
                        onServiceClick={(id: ServiceId | null) => onServiceClick?.(id)}
                    />
                </div>
            </section>
        </div>
    );
};
export default DnaMethylationAnalysisServicePage;