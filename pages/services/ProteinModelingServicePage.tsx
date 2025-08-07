
import React from 'react';
import { Page, ServiceId } from '../../types.ts';
import { LightbulbIcon, DnaIcon, CheckCircleIcon, BookOpenIcon, ChevronRightIcon } from '../../components/icons/Icons.tsx';
import ServiceSidebar from '../../components/services/ServiceSidebar.tsx';
import Breadcrumb, { BreadcrumbItem } from '../../components/common/Breadcrumb.tsx';
import ServiceSectionTitle from '../../components/common/ServiceSectionTitle.tsx';
import FeatureCard from '../../components/common/FeatureCard.tsx';
import { serviceLinks } from '../../data/serviceSidebarLinks.ts';

interface ServicePageProps {
  onServiceClick?: (service: ServiceId | null) => void;
  setActiveTab?: (tab: Page) => void;
}

const ProteinModelingServicePage: React.FC<ServicePageProps> = ({ onServiceClick, setActiveTab }) => {
    
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
        { name: 'Protein Modeling', active: true },
    ];
    
    return (
        <div className="font-sans bg-white animate-fade-in">
             <section className="relative bg-cover bg-center h-80" style={{backgroundImage: "url('https://placehold.co/1920x1080/6366F1/FFFFFF?text=Protein+Modeling')"}}>
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="relative h-full flex flex-col justify-center items-start max-w-7xl mx-auto px-8 text-white">
                    <h1 className="text-5xl font-bold font-heading">Protein Modeling Service</h1>
                    <button onClick={() => setActiveTab?.('contact')} className="mt-6 border border-white px-6 py-2 text-lg hover:bg-white hover:text-black transition-colors duration-300 flex items-center">
                        Inquire Now <ChevronRightIcon className="ml-2" size={20} />
                    </button>
                </div>
            </section>
            
            <Breadcrumb items={breadcrumbItems} />
            
            <section className="py-20 px-8">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <main className="lg:col-span-8">
                        <ServiceSectionTitle title="Protein Structure Prediction" />
                        <p className="text-gray-700 mb-6 leading-relaxed">
                            Knowing the three-dimensional structure of a protein is crucial for understanding its biological function and for applications like drug design. When experimental structures (from X-ray crystallography or NMR) are unavailable, computational protein modeling can provide valuable insights. We offer a range of protein modeling services to predict and refine protein structures.
                        </p>
                        <img src="https://placehold.co/600x400/F9FAFB/6366F1?text=Protein+3D+Structure" alt="Protein Modeling Diagram" className="rounded-lg shadow-xl w-full mb-8" loading="lazy" />
                        
                        <ServiceSectionTitle title="Our Modeling Approaches" />
                        <div className="space-y-6 mt-6">
                            <FeatureCard 
                                icon={<DnaIcon className="text-primary" size={32}/>}
                                title="Homology Modeling"
                                description="The most reliable method when a good template structure (from a homologous protein) is available. We use tools like MODELLER and SWISS-MODEL."
                            />
                             <FeatureCard 
                                icon={<LightbulbIcon className="text-primary" size={32}/>}
                                title="Ab Initio (De Novo) Modeling"
                                description="Predicts structure from sequence alone, based on the principles of physics and energy minimization. Ideal for novel proteins using tools like AlphaFold."
                            />
                             <FeatureCard 
                                icon={<CheckCircleIcon className="text-primary" size={32}/>}
                                title="Protein Threading"
                                description="Used when sequence similarity to known structures is low. This method fits the target sequence to a library of known protein folds to find the best match."
                            />
                        </div>

                        <ServiceSectionTitle title="Modeling Workflow" />
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center my-6">
                            {['Template Search', 'Model Building', 'Refinement', 'Validation'].map(step => (
                                <div key={step} className="flex flex-col items-center">
                                    <div className="p-4 bg-primary/10 rounded-md">
                                        <BookOpenIcon size={40} className="text-primary" />
                                    </div>
                                    <p className="mt-2 font-semibold text-sm text-primary bg-primary/10 px-2 py-1 rounded w-full">{step}</p>
                                </div>
                            ))}
                        </div>
                        
                        <ServiceSectionTitle title="Quality Assessment" />
                        <p className="text-gray-700 mb-8">
                           We perform rigorous validation of every final model using a suite of tools, including PROCHECK for stereochemical quality, Ramachandran plots for phi/psi angle analysis, and various energy-based scoring functions to ensure the physical realism of the structure.
                        </p>

                        <ServiceSectionTitle title="References" />
                        <blockquote className="p-4 my-4 border-l-4 border-gray-300 bg-gray-50">
                            <p className="text-gray-600 italic">
                                We utilize state-of-the-art software for protein modeling, including the revolutionary AlphaFold system.
                                <br />- Jumper, J., et al. (2021). Highly accurate protein structure prediction with AlphaFold. Nature.
                                <br />- Waterhouse, A., et al. (2018). SWISS-MODEL: homology modelling of protein structures and complexes. Nucleic acids research.
                            </p>
                        </blockquote>
                    </main>

                    <ServiceSidebar 
                        serviceLinks={serviceLinks}
                        currentServiceId="protein-modeling"
                        onServiceClick={(id: ServiceId | null) => onServiceClick?.(id)}
                    />
                </div>
            </section>
        </div>
    );
};

export default ProteinModelingServicePage;
