
import React from 'react';
import { ServiceId, Page } from '../../types.ts';
import { ChevronLeftIcon } from '../../components/icons/Icons.tsx';
import ServicePageTemplate, { ServicePageData } from '../../components/services/ServicePageTemplate.tsx';
import { servicePageData } from '../../data/servicePageData.ts';

interface GenericServicePageProps {
  serviceId: ServiceId;
  setSelectedService?: (service: ServiceId | null) => void;
  setActiveTab?: (tab: Page) => void;
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

  const handleNav = (page?: Page) => {
    if (page) {
        setActiveTab?.(page);
        setSelectedService?.(null);
    } else {
        setSelectedService?.(null);
    }
    window.scrollTo(0, 0);
  };

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

  // Check if we have specific data for this service
  const serviceData = servicePageData[serviceId];
  if (serviceData) {
    return (
      <ServicePageTemplate 
        data={serviceData}
        onServiceClick={setSelectedService}
        setActiveTab={setActiveTab}
      />
    );
  }

  // Create generic coming soon data for unknown services
  const genericServiceData: ServicePageData = {
    id: serviceId,
    title: serviceTitle,
    description: `We are currently preparing detailed information for our ${serviceTitle} services. Please check back soon or contact us for immediate inquiries.`,
    isComingSoon: true
  };

  return (
    <ServicePageTemplate 
      data={genericServiceData}
      onServiceClick={setSelectedService}
      setActiveTab={setActiveTab}
    />
  );
};

export default GenericServicePage;