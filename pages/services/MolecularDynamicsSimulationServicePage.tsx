
import React from 'react';
import { Page, ServiceId } from '../../types.ts';
import { ActivityIcon, BrainIcon, DnaIcon, BookOpenIcon, ChevronRightIcon } from '../../components/icons/Icons.tsx';
import ServiceSidebar from '../../components/services/ServiceSidebar.tsx';
import Breadcrumb, { BreadcrumbItem } from '../../components/common/Breadcrumb.tsx';
import ServiceSectionTitle from '../../components/common/ServiceSectionTitle.tsx';
import FeatureCard from '../../components/common/FeatureCard.tsx';
import { serviceLinks } from '../../data/serviceSidebarLinks.ts';

interface ServicePageProps {
  onServiceClick: (service: ServiceId | null) => void;
  setActiveTab: (tab: Page) => void;
}

const MolecularDynamicsSimulationServicePage: React.FC<ServicePageProps> = ({ onServiceClick, setActiveTab }) => {
    
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
        { name: 'Molecular Dynamics', active: true },
    ];
    
    return (
        <div className="font-sans bg-white animate-fade-in">
             <section className="relative bg-cover bg-center h-80" style={{backgroundImage: "url('https://placehold.co/1920x1080/4DB8FF/FFFFFF?text=MD+Simulation')"}}>
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="relative h-full flex flex-col justify-center items-start max-w-7xl mx-auto px-8 text-white">
                    <h1 className="text-5xl font-bold font-heading">Molecular Dynamics Simulation</h1>
                    <button onClick={() => setActiveTab('contact')} className="mt-6 border border-white px-6 py-2 text-lg hover:bg-white hover:text-black transition-colors duration-300 flex items-center">
                        Inquire Now <ChevronRightIcon className="ml-2" size={20} />
                    </button>
                </div>
            </section>
            
            <Breadcrumb items={breadcrumbItems} />
            
            <section className="py-20 px-8">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <main className="lg:col-span-8">
                        <ServiceSectionTitle title="Introduction to MD Simulation" />
                        <p className="text-gray-700 mb-6 leading-relaxed">
                            Molecular Dynamics (MD) simulation is a powerful computational technique used to study the physical movements of atoms and molecules. This method is widely used in various fields, including chemistry, physics, and biology, to simulate the behavior of complex systems at the atomic level, providing a view of the dynamic evolution of the system.
                        </p>
                        <img src="img/services/molecular-dynamics-simulation-service.jpg" alt="MD Simulation Diagram" className="rounded-lg shadow-xl w-full mb-8" loading="lazy" />
                        
                        <ServiceSectionTitle title="Applications of MD Simulation" />
                        <div className="space-y-6 mt-6">
                            <FeatureCard 
                                icon={<BrainIcon className="text-primary" size={32}/>}
                                title="Molecular Recognition"
                                description="Study protein-ligand binding, protein-protein interactions, and nucleic acid interactions to understand binding affinity and conformational changes."
                            />
                             <FeatureCard 
                                icon={<DnaIcon className="text-primary" size={32}/>}
                                title="Protein Structure & Function"
                                description="Predict protein structures, refine experimental models, and study conformational changes that are critical for biological function."
                            />
                             <FeatureCard 
                                icon={<ActivityIcon className="text-primary" size={32}/>}
                                title="Membrane & Material Science"
                                description="Essential for studying the dynamics and interactions of membrane proteins within lipid bilayers, as well as polymer behavior and crystal growth."
                            />
                        </div>

                        <ServiceSectionTitle title="Simulation Workflow" />
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center my-6">
                            {['System Setup', 'Minimization', 'Equilibration', 'Production Run'].map(step => (
                                <div key={step} className="flex flex-col items-center">
                                    <div className="p-4 bg-primary/10 rounded-md">
                                        <BookOpenIcon size={40} className="text-primary" />
                                    </div>
                                    <p className="mt-2 font-semibold text-sm text-primary bg-primary/10 px-2 py-1 rounded w-full">{step}</p>
                                </div>
                            ))}
                        </div>
                        
                        <ServiceSectionTitle title="Our Analysis Services" />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mb-8">
                           <div>
                                <h4 className="font-bold font-heading text-lg text-primary mb-2">By Molecular Types</h4>
                                <ul className="list-disc list-inside text-gray-600 space-y-1">
                                    <li>Protein MD simulation</li>
                                    <li>Nucleic acid MD simulation</li>
                                    <li>Lipid bilayer MD simulation</li>
                                    <li>Protein-ligand complex MD simulation</li>
                                </ul>
                           </div>
                           <div>
                                <h4 className="font-bold font-heading text-lg text-primary mb-2">By Analysis Types</h4>
                                <ul className="list-disc list-inside text-gray-600 space-y-1">
                                    <li>RMSD/RMSF analysis</li>
                                    <li>Hydrogen bond analysis</li>
                                    <li>Principal Component Analysis (PCA)</li>
                                    <li>Free Energy Perturbation (FEP)</li>
                                </ul>
                           </div>
                        </div>
                        
                        <ServiceSectionTitle title="References" />
                        <blockquote className="p-4 my-4 border-l-4 border-gray-300 bg-gray-50">
                            <p className="text-gray-600 italic">
                                Our workflows are based on established best practices in the field. A detailed list of software, versions, and parameters will be included in your final report. Key literature includes:
                                <br />- Zhou C, Li J, Wang S, et al. Development of molecular dynamics and research progress in the study of slag[J]. Materials, 2023, 16(15): 5373.
                            </p>
                        </blockquote>

                    </main>

                    <ServiceSidebar 
                        serviceLinks={serviceLinks}
                        currentServiceId="molecular-dynamics"
                        onServiceClick={(id) => onServiceClick(id)}
                    />
                </div>
            </section>
        </div>
    );
};

export default MolecularDynamicsSimulationServicePage;