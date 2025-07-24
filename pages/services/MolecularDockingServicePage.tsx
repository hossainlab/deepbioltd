
import React from 'react';
import { Page, ServiceId } from '../../types.ts';
import { BinocularsIcon, LightbulbIcon, DnaIcon, BookOpenIcon, ChevronRightIcon } from '../../components/icons/Icons.tsx';
import ServiceSidebar from '../../components/services/ServiceSidebar.tsx';
import Breadcrumb, { BreadcrumbItem } from '../../components/common/Breadcrumb.tsx';
import ServiceSectionTitle from '../../components/common/ServiceSectionTitle.tsx';
import FeatureCard from '../../components/common/FeatureCard.tsx';
import { serviceLinks } from '../../data/serviceSidebarLinks.ts';

interface ServicePageProps {
  onServiceClick: (service: ServiceId | null) => void;
  setActiveTab: (tab: Page) => void;
}

const MolecularDockingServicePage: React.FC<ServicePageProps> = ({ onServiceClick, setActiveTab }) => {
    
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
        { name: 'Molecular Docking', active: true },
    ];
    
    return (
        <div className="font-sans bg-white animate-fade-in">
             <section className="relative bg-cover bg-center h-80" style={{backgroundImage: "url('https://placehold.co/1920x1080/205E92/FFFFFF?text=Docking')"}}>
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="relative h-full flex flex-col justify-center items-start max-w-7xl mx-auto px-8 text-white">
                    <h1 className="text-5xl font-bold font-heading">Molecular Docking Service</h1>
                    <button onClick={() => setActiveTab('contact')} className="mt-6 border border-white px-6 py-2 text-lg hover:bg-white hover:text-black transition-colors duration-300 flex items-center">
                        Inquire Now <ChevronRightIcon className="ml-2" size={20} />
                    </button>
                </div>
            </section>
            
            <Breadcrumb items={breadcrumbItems} />
            
            <section className="py-20 px-8">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <main className="lg:col-span-8">
                        <ServiceSectionTitle title="Introduction to Molecular Docking" />
                        <p className="text-gray-700 mb-6 leading-relaxed">
                             Molecular docking is a key computational tool in structural molecular biology and computer-assisted drug design. The goal of ligand-protein docking is to predict the predominant binding mode(s) of a ligand with a protein of known three-dimensional structure. Successful docking methods explore high-dimensional spaces effectively and use a scoring function that correctly ranks candidate dockings.
                        </p>
                        <img src="https://placehold.co/600x400/F9FAFB/205E92?text=Molecular+Docking" alt="Molecular Docking Diagram" className="rounded-lg shadow-xl w-full mb-8" loading="lazy" />
                        
                        <ServiceSectionTitle title="Applications of Molecular Docking" />
                         <div className="space-y-6 mt-6">
                            <FeatureCard 
                                icon={<BinocularsIcon className="text-primary" size={32}/>}
                                title="Hit Identification & Virtual Screening"
                                description="Screening large compound libraries to identify potential drug candidates (hits) that bind to a target of interest."
                            />
                             <FeatureCard 
                                icon={<LightbulbIcon className="text-primary" size={32}/>}
                                title="Lead Optimization"
                                description="Guiding the modification of hit compounds to improve binding affinity, selectivity, and other drug-like properties."
                            />
                             <FeatureCard 
                                icon={<DnaIcon className="text-primary" size={32}/>}
                                title="Binding Mode Prediction"
                                description="Understanding how a molecule binds to its target, providing critical insights for rational, structure-based drug design."
                            />
                        </div>

                        <ServiceSectionTitle title="Docking Workflow" />
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center my-6">
                            {['Receptor Prep', 'Ligand Prep', 'Docking Run', 'Analysis'].map(step => (
                                <div key={step} className="flex flex-col items-center">
                                    <div className="p-4 bg-primary/10 rounded-md">
                                        <BookOpenIcon size={40} className="text-primary" />
                                    </div>
                                    <p className="mt-2 font-semibold text-sm text-primary bg-primary/10 px-2 py-1 rounded w-full">{step}</p>
                                </div>
                            ))}
                        </div>
                        
                        <ServiceSectionTitle title="Our Docking Services" />
                        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-8">
                            <li><span className="font-semibold">Standard & Covalent Docking:</span> For reversible and irreversible inhibitors.</li>
                            <li><span className="font-semibold">Flexible & Rigid Docking:</span> Allowing flexibility for both ligand and receptor or keeping the receptor rigid.</li>
                            <li><span className="font-semibold">Virtual Screening:</span> High-throughput docking of large chemical libraries.</li>
                            <li><span className="font-semibold">Post-Docking Analysis:</span> Detailed analysis of binding poses, interaction energies, and key residues.</li>
                            <li><span className="font-semibold">Software Used:</span> We utilize state-of-the-art software like AutoDock, Glide, and GOLD.</li>
                        </ul>

                        <ServiceSectionTitle title="References" />
                        <blockquote className="p-4 my-4 border-l-4 border-gray-300 bg-gray-50">
                            <p className="text-gray-600 italic">
                                Our docking protocols are optimized based on leading academic research and industry standards. Key publications informing our methods include:
                                <br />- Friesner, R. A., et al. (2004). Glide: a new approach for rapid, accurate docking and scoring. 1. Method and assessment of docking accuracy. Journal of medicinal chemistry.
                                <br />- Trott, O., & Olson, A. J. (2010). AutoDock Vina: improving the speed and accuracy of docking with a new scoring function, efficient optimization, and multithreading. Journal of computational chemistry.
                            </p>
                        </blockquote>

                    </main>

                    <ServiceSidebar 
                        serviceLinks={serviceLinks}
                        currentServiceId="molecular-docking"
                        onServiceClick={(id) => onServiceClick(id)}
                    />
                </div>
            </section>
        </div>
    );
};

export default MolecularDockingServicePage;