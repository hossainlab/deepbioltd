

import React from 'react';
import { Page, ServiceId } from '../../types.ts';
import { BinocularsIcon, LightbulbIcon, TargetIcon, BookOpenIcon, ChevronRightIcon } from '../../components/icons/Icons.tsx';
import ServiceSidebar from '../../components/services/ServiceSidebar.tsx';
import Breadcrumb, { BreadcrumbItem } from '../../components/common/Breadcrumb.tsx';
import ServiceSectionTitle from '../../components/common/ServiceSectionTitle.tsx';
import FeatureCard from '../../components/common/FeatureCard.tsx';
import { serviceLinks } from '../../data/serviceSidebarLinks.ts';

interface ServicePageProps {
  onServiceClick: (service: ServiceId | null) => void;
  setActiveTab: (tab: Page) => void;
}

const VirtualScreeningServicePage: React.FC<ServicePageProps> = ({ onServiceClick, setActiveTab }) => {
    
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
        { name: 'Virtual Screening', active: true },
    ];
    
    return (
        <div className="font-sans bg-white animate-fade-in">
             <section className="relative bg-cover bg-center h-80" style={{backgroundImage: "url('https://placehold.co/1920x1080/4DB8FF/FFFFFF?text=Virtual+Screening')"}}>
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="relative h-full flex flex-col justify-center items-start max-w-7xl mx-auto px-8 text-white">
                    <h1 className="text-5xl font-bold font-heading">Virtual Screening</h1>
                    <button onClick={() => setActiveTab('contact')} className="mt-6 border border-white px-6 py-2 text-lg hover:bg-white hover:text-black transition-colors duration-300 flex items-center">
                        Inquire Now <ChevronRightIcon className="ml-2" size={20} />
                    </button>
                </div>
            </section>
            
            <Breadcrumb items={breadcrumbItems} />
            
            <section className="py-20 px-8">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <main className="lg:col-span-8">
                        <ServiceSectionTitle title="Introduction to Virtual Screening" />
                        <p className="text-gray-700 mb-6 leading-relaxed">
                            Virtual Screening (VS) is a computational technique used in drug discovery to search large libraries of small molecules in order to identify those structures which are most likely to bind to a drug target, typically a protein receptor or enzyme. It is a time- and cost-effective alternative to high-throughput screening (HTS), allowing researchers to narrow down a vast chemical space to a manageable number of promising candidates for experimental testing.
                        </p>
                        <img src="https://placehold.co/600x400/F9FAFB/4DB8FF?text=Screening+Funnel" alt="Virtual Screening Funnel" className="rounded-lg shadow-xl w-full mb-8" loading="lazy" />
                        
                        <ServiceSectionTitle title="Our Virtual Screening Approaches" />
                        <div className="space-y-6 mt-6">
                            <FeatureCard 
                                icon={<TargetIcon className="text-primary" size={32}/>}
                                title="Structure-Based Virtual Screening (SBVS)"
                                description="Utilizes the 3D structure of the target protein. We dock millions of compounds into the binding site and rank them based on predicted binding affinity."
                            />
                             <FeatureCard 
                                icon={<LightbulbIcon className="text-primary" size={32}/>}
                                title="Ligand-Based Virtual Screening (LBVS)"
                                description="Used when the target structure is unknown. We screen for molecules that are similar to known active compounds, using pharmacophore models or 2D/3D similarity."
                            />
                             <FeatureCard 
                                icon={<BinocularsIcon className="text-primary" size={32}/>}
                                title="Hybrid & AI-Powered Approaches"
                                description="Combining multiple methods and leveraging machine learning models to improve prediction accuracy and enrich the hit rate of our screening campaigns."
                            />
                        </div>

                        <ServiceSectionTitle title="Virtual Screening Workflow" />
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center my-6">
                            {['Target Prep', 'Library Prep', 'Docking Run', 'Post-Filtering', 'Hit Selection'].map(step => (
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
                            <li>A ranked list of top hit compounds with their predicted binding scores.</li>
                            <li>2D and 3D representations of predicted binding modes for top hits.</li>
                            <li>Analysis of key molecular interactions (e.g., hydrogen bonds, hydrophobic contacts).</li>
                            <li>A comprehensive report summarizing the methodology, results, and recommendations for experimental follow-up.</li>
                        </ul>
                        
                        <ServiceSectionTitle title="References" />
                        <blockquote className="p-4 my-4 border-l-4 border-gray-300 bg-gray-50">
                            <p className="text-gray-600 italic">
                                Our virtual screening platform integrates multiple state-of-the-art tools and large-scale compound databases like ZINC.
                                <br />- Kitchen, D. B., et al. (2004). Docking and scoring in virtual screening for drug discovery: methods and applications. Nature reviews Drug discovery.
                                <br />- Irwin, J. J., & Shoichet, B. K. (2005). ZINC− a free database of commercially available compounds for virtual screening. Journal of chemical information and modeling.
                            </p>
                        </blockquote>
                    </main>

                    <ServiceSidebar 
                        serviceLinks={serviceLinks}
                        currentServiceId="virtual-screening"
                        onServiceClick={(id) => onServiceClick(id)}
                    />
                </div>
            </section>
        </div>
    );
};
export default VirtualScreeningServicePage;