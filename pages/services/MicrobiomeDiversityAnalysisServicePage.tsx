

import React from 'react';
import { Page, ServiceId } from '../../types.ts';
import { UsersIcon, ActivityIcon, CheckCircleIcon, BookOpenIcon, ChevronRightIcon } from '../../components/icons/Icons.tsx';
import ServiceSidebar from '../../components/services/ServiceSidebar.tsx';
import Breadcrumb, { BreadcrumbItem } from '../../components/common/Breadcrumb.tsx';
import ServiceSectionTitle from '../../components/common/ServiceSectionTitle.tsx';
import FeatureCard from '../../components/common/FeatureCard.tsx';
import { serviceLinks } from '../../data/serviceSidebarLinks.ts';

interface ServicePageProps {
  onServiceClick: (service: ServiceId | null) => void;
  setActiveTab: (tab: Page) => void;
}

const MicrobiomeDiversityAnalysisServicePage: React.FC<ServicePageProps> = ({ onServiceClick, setActiveTab }) => {
    
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
        { name: 'Microbiome Analysis', active: true },
    ];
    
    return (
        <div className="font-sans bg-white animate-fade-in">
             <section className="relative bg-cover bg-center h-80" style={{backgroundImage: "url('https://placehold.co/1920x1080/EF4444/FFFFFF?text=Microbiome')"}}>
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="relative h-full flex flex-col justify-center items-start max-w-7xl mx-auto px-8 text-white">
                    <h1 className="text-5xl font-bold font-heading">Microbiome Diversity Analysis</h1>
                    <button onClick={() => setActiveTab('contact')} className="mt-6 border border-white px-6 py-2 text-lg hover:bg-white hover:text-black transition-colors duration-300 flex items-center">
                        Inquire Now <ChevronRightIcon className="ml-2" size={20} />
                    </button>
                </div>
            </section>
            
            <Breadcrumb items={breadcrumbItems} />
            
            <section className="py-20 px-8">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <main className="lg:col-span-8">
                        <ServiceSectionTitle title="Introduction to Microbiome Analysis" />
                        <p className="text-gray-700 mb-6 leading-relaxed">
                            Microbiome analysis investigates the collective genomes of microorganisms residing in a specific environment, such as the human gut. Using techniques like 16S rRNA gene sequencing or shotgun metagenomics, we can characterize the composition ('who is there?') and functional potential ('what are they doing?') of these complex communities and their impact on host health and disease.
                        </p>
                        <img src="https://placehold.co/600x400/F9FAFB/EF4444?text=PCoA+Plot" alt="Microbiome PCoA Plot" className="rounded-lg shadow-xl w-full mb-8" loading="lazy" />
                        
                        <ServiceSectionTitle title="Key Analysis Areas" />
                        <div className="space-y-6 mt-6">
                            <FeatureCard 
                                icon={<UsersIcon className="text-primary" size={32}/>}
                                title="Taxonomic Profiling"
                                description="Accurate identification and quantification of microbial species and strains present in your samples using curated databases."
                            />
                             <FeatureCard 
                                icon={<ActivityIcon className="text-primary" size={32}/>}
                                title="Diversity Analysis (Alpha & Beta)"
                                description="Quantifying within-sample (alpha) and between-sample (beta) diversity to compare community richness, evenness, and structure across groups."
                            />
                             <FeatureCard 
                                icon={<CheckCircleIcon className="text-primary" size={32}/>}
                                title="Differential Abundance Testing"
                                description="Identifying specific taxa that are significantly more or less abundant between different experimental conditions or clinical cohorts."
                            />
                        </div>

                        <ServiceSectionTitle title="Microbiome Analysis Workflow" />
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center my-6">
                            {['Denoising (DADA2)', 'Taxonomy', 'Diversity', 'Statistics'].map(step => (
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
                            <li>Taxonomic abundance tables at various levels (phylum to species).</li>
                            <li>Alpha diversity plots (e.g., Shannon, Simpson) with statistical comparisons.</li>
                            <li>Beta diversity ordination plots (e.g., PCoA, NMDS) with PERMANOVA statistics.</li>
                            <li>Differential abundance analysis results (e.g., from ANCOM-BC).</li>
                            <li>An interactive QIIME 2 artifact for data exploration.</li>
                        </ul>
                        
                        <ServiceSectionTitle title="References" />
                        <blockquote className="p-4 my-4 border-l-4 border-gray-300 bg-gray-50">
                            <p className="text-gray-600 italic">
                                Our microbiome analysis is performed using the QIIME 2 platform, ensuring a reproducible and comprehensive analysis.
                                <br />- Bolyen, E., et al. (2019). Reproducible, interactive, scalable and extensible microbiome data science using QIIME 2. Nature biotechnology.
                                <br />- Callahan, B. J., et al. (2016). DADA2: High-resolution sample inference from Illumina amplicon data. Nature methods.
                            </p>
                        </blockquote>
                    </main>

                    <ServiceSidebar 
                        serviceLinks={serviceLinks}
                        currentServiceId="microbiome-diversity-analysis"
                        onServiceClick={(id) => onServiceClick(id)}
                    />
                </div>
            </section>
        </div>
    );
};
export default MicrobiomeDiversityAnalysisServicePage;