
import React from 'react';
import { ServiceId, Page } from '../../types.ts';
import { ChevronLeftIcon, ChevronRightIcon } from '../../components/icons/Icons.tsx';
import Breadcrumb, { BreadcrumbItem } from '../../components/common/Breadcrumb.tsx';

interface GenericServicePageProps {
  serviceId: ServiceId;
  setSelectedService: (service: ServiceId | null) => void;
  setActiveTab: (tab: Page) => void;
}

const serviceNameMapping: Record<string, string> = {
    'genomics': 'Genomics',
    'transcriptomics': 'Transcriptomics',
    'cheminformatics': 'Cheminformatics',
    'multi-omics': 'Multi-omics Data Integration',
    'insilico-drug-design': 'Insilico Drug Design',
    'molecular-simulations': 'Molecular Simulations',
    'molecular-docking': 'Molecular Docking',
    'biomedical-informatics': 'Biomedical Informatics',
    'ai-health-innovation': 'AI for Health Innovation',
    'drug-discovery': 'Drug Discovery',
    'protein-modeling': 'Protein Modeling',
    'vaccine-design': 'Vaccine Design',
    'genomic-analysis': 'Genomic Analysis',
    'bioinformatics-services': 'Bioinformatics Services',
    'virtual-screening': 'Virtual Screening',
    'statistical-analysis': 'Statistical Analysis',
    'drug-development': 'Drug Development',
    'ai-gene-expression': 'AI for Gene Expression Classification & Clustering',
    'ai-cell-type-annotation': 'Deep Learning for Cell Type Annotation',
    'ai-biomarker-discovery': 'AI-Driven Biomarker Discovery',
    'ai-survival-modeling': 'Survival Modeling & Risk Stratification',
    'ai-multi-omics-integration': 'AI for Multi-Omics Integration',
    'ai-drug-repurposing': 'AI for Drug Repurposing & Target Prediction',
    'ai-nlp-literature-mining': 'NLP for Literature Mining'
};

const GenericServicePage: React.FC<GenericServicePageProps> = ({ serviceId, setSelectedService, setActiveTab }) => {
  const serviceTitle = serviceNameMapping[serviceId] || 'Service Not Found';

  const handleNav = (page?: Page, serviceId?: ServiceId | null) => {
    if (page) {
        setActiveTab(page);
        setSelectedService(null);
    } else if (serviceId) {
        setSelectedService(serviceId);
    } else {
        setSelectedService(null);
    }
    window.scrollTo(0, 0);
  };
  
  const breadcrumbItems: BreadcrumbItem[] = [
        { name: 'Home', page: 'home', onClick: () => handleNav('home') },
        { name: 'Services', page: 'services', onClick: () => handleNav('services') },
        { name: serviceTitle, active: true },
    ];


  if (serviceId === 'not-found') {
      return (
          <div className="py-20 px-8 text-center font-sans bg-white min-h-[50vh] flex flex-col justify-center items-center">
              <h2 className="text-6xl font-bold font-heading text-red-500 mb-4">404</h2>
              <h3 className="text-4xl font-bold font-heading text-primary mb-8">Service Not Found</h3>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">The service you are looking for does not exist or has been moved.</p>
              <button
                  className="mt-8 px-6 py-3 rounded-full text-lg font-semibold text-white bg-secondary hover:bg-primary transition-colors duration-300 flex items-center"
                  onClick={() => handleNav('services')}
              >
                  <ChevronLeftIcon className="mr-2" />
                  Back to Services
              </button>
          </div>
      );
  }

  return (
    <div className="font-sans bg-white animate-fade-in">
        <section className="relative bg-cover bg-center h-80" style={{backgroundImage: "url('https://placehold.co/1920x1080/6B7280/FFFFFF?text=Service')"}}>
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative h-full flex flex-col justify-center items-start max-w-7xl mx-auto px-8 text-white">
                <h1 className="text-5xl font-bold font-heading">{serviceTitle}</h1>
                <button onClick={() => setActiveTab('contact')} className="mt-6 border border-white px-6 py-2 text-lg hover:bg-white hover:text-black transition-colors duration-300 flex items-center">
                    Inquire Now <ChevronRightIcon className="ml-2" size={20} />
                </button>
            </div>
        </section>
        
        <Breadcrumb items={breadcrumbItems} />

        <div className="py-20 px-8 text-center min-h-[50vh] flex flex-col justify-center items-center">
            <img src={`https://placehold.co/128x128/F9FAFB/205E92?text=WIP`} className="rounded-full mb-8 shadow-lg" alt="Service Icon" />
            <h2 className="text-4xl font-bold font-heading text-primary mb-8">Content Coming Soon</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                We are currently preparing detailed information for our {serviceTitle} services. 
                Please check back soon or contact us for immediate inquiries.
            </p>
            <button
                className="mt-8 px-6 py-3 rounded-full text-lg font-semibold text-white bg-secondary hover:bg-primary transition-colors duration-300 flex items-center"
                onClick={() => handleNav('services')}
            >
                <ChevronLeftIcon className="mr-2" />
                Back to All Services
            </button>
        </div>
    </div>
  );
};

export default GenericServicePage;