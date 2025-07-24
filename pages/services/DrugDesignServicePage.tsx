
import React from 'react';
import { Page, ServiceId } from '../../types.ts';
import { BinocularsIcon, PencilIcon, DocumentStackIcon, BookOpenIcon, ChevronRightIcon } from '../../components/icons/Icons.tsx';
import ServiceSidebar from '../../components/services/ServiceSidebar.tsx';
import Breadcrumb, { BreadcrumbItem } from '../../components/common/Breadcrumb.tsx';
import ServiceSectionTitle from '../../components/common/ServiceSectionTitle.tsx';
import FeatureCard from '../../components/common/FeatureCard.tsx';
import { serviceLinks } from '../../data/serviceSidebarLinks.ts';

interface ServicePageProps {
  onServiceClick: (service: ServiceId | null) => void;
  setActiveTab: (tab: Page) => void;
}

const DrugDesignServicePage: React.FC<ServicePageProps> = ({ onServiceClick, setActiveTab }) => {
    
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
        { name: 'Drug Design', active: true },
    ];

    return (
        <div className="font-sans bg-white animate-fade-in">
            <section className="relative bg-cover bg-center h-80" style={{backgroundImage: "url('https://placehold.co/1920x1080/EF4444/FFFFFF?text=Drug+Design')"}}>
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="relative h-full flex flex-col justify-center items-start max-w-7xl mx-auto px-8 text-white">
                    <h1 className="text-5xl font-bold font-heading">Drug Design Service</h1>
                    <button onClick={() => setActiveTab('contact')} className="mt-6 border border-white px-6 py-2 text-lg hover:bg-white hover:text-black transition-colors duration-300 flex items-center">
                        Inquire Now <ChevronRightIcon className="ml-2" size={20} />
                    </button>
                </div>
            </section>
            
            <Breadcrumb items={breadcrumbItems} />

            <section className="py-20 px-8">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <main className="lg:col-span-8">
                        <ServiceSectionTitle title="Computer-Aided Drug Design (CADD)" />
                        <p className="text-gray-700 mb-6 leading-relaxed">
                            Drug design involves the rational design of molecules that can interact with specific biological targets to achieve a desired therapeutic effect. It encompasses various approaches, including but not limited to structure-based drug design and ligand-based drug design. With the development of science and technology, the role of computer-aided drug design in research and development has become increasingly prominent. It utilizes powerful computing power and advanced algorithms to rapidly analyze and simulate molecular structure data.
                        </p>
                        <img src="https://placehold.co/600x400/F9FAFB/EF4444?text=Drug+Design+Process" alt="Drug Design Diagram" className="rounded-lg shadow-xl w-full mb-8" loading="lazy" />
                        
                        <ServiceSectionTitle title="Advantages of Our Approach" />
                        <div className="space-y-6 mt-6">
                            <FeatureCard 
                                icon={<BinocularsIcon className="text-primary" size={32}/>}
                                title="Enhanced Target Specificity"
                                description="Drug design enables creation of highly target-specific molecules. This minimizes off-target effects, thus enhancing drug safety and efficacy."
                            />
                             <FeatureCard 
                                icon={<PencilIcon className="text-primary" size={32}/>}
                                title="Rational Optimization"
                                description="Drug design offers a rational way to optimize candidates. Computational modeling and structure-activity studies help modify a molecule's chemical structure."
                            />
                             <FeatureCard 
                                icon={<DocumentStackIcon className="text-primary" size={32}/>}
                                title="Accelerated Discovery Process"
                                description="Advanced tech and computational tools in drug design speed up discovery. Molecular modeling also guides efficient synthesis of new molecules."
                            />
                        </div>

                        <ServiceSectionTitle title="Workflow of Drug Design" />
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center my-6">
                            {['Target ID', 'Virtual Screening', 'Hit-to-Lead', 'Lead Optimization', 'Preclinical'].map(step => (
                                <div key={step} className="flex flex-col items-center">
                                    <div className="p-4 bg-primary/10 rounded-md">
                                        <BookOpenIcon size={40} className="text-primary" />
                                    </div>
                                    <p className="mt-2 font-semibold text-sm text-primary bg-primary/10 px-2 py-1 rounded w-full">{step}</p>
                                </div>
                            ))}
                        </div>
                        
                        <ServiceSectionTitle title="Our Capabilities" />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mb-8">
                           <div>
                                <h4 className="font-bold font-heading text-lg text-primary mb-2">By Design Methods</h4>
                                <ul className="list-disc list-inside text-gray-600 space-y-1">
                                    <li>Structure-based Drug Design (SBDD)</li>
                                    <li>Ligand-based Drug Design (LBDD)</li>
                                    <li>De Novo Drug Design Service</li>
                                    <li>Fragment-based Drug Design</li>
                                    <li>AI-based Drug Design</li>
                                </ul>
                           </div>
                           <div>
                               <h4 className="font-bold font-heading text-lg text-primary mb-2">By Modality</h4>
                                <ul className="list-disc list-inside text-gray-600 space-y-1">
                                    <li>Small Molecule Drug Design</li>
                                    <li>Protein & Peptide Drug Design</li>
                                    <li>Nucleic Acid Drug Design</li>
                                    <li>Antibody Drug Design</li>
                                    <li>PROTAC Design</li>
                                </ul>
                           </div>
                        </div>

                        <ServiceSectionTitle title="References" />
                        <blockquote className="p-4 my-4 border-l-4 border-gray-300 bg-gray-50">
                            <p className="text-gray-600 italic">
                                Our CADD workflows are guided by industry best practices and cutting-edge research. A detailed list of software and methods will be included in the project report. Key literature informing our approach includes:
                                <br />- Kitchen, D. B., et al. (2004). Docking and scoring in virtual screening for drug discovery: methods and applications. Nature reviews Drug discovery.
                                <br />- Jorgensen, W. L. (2004). The many roles of computation in drug discovery. science.
                            </p>
                        </blockquote>

                    </main>

                    <ServiceSidebar 
                        serviceLinks={serviceLinks}
                        currentServiceId="drug-design"
                        onServiceClick={(id) => onServiceClick(id)}
                    />
                </div>
            </section>
        </div>
    );
};

export default DrugDesignServicePage;