import React from 'react';
import { Page, ServiceId } from '../../types.ts';
import { ChevronRightIcon, BookOpenIcon } from '../icons/Icons.tsx';
import ServiceSidebar from './ServiceSidebar.tsx';
import Breadcrumb, { BreadcrumbItem } from '../common/Breadcrumb.tsx';
import ServiceSectionTitle from '../common/ServiceSectionTitle.tsx';
import FeatureCard from '../common/FeatureCard.tsx';
import { serviceLinks } from '../../data/serviceSidebarLinks.ts';

export interface ServiceFeature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface ServiceWorkflowStep {
  name: string;
  icon?: React.ReactNode;
}

export interface ServiceCapability {
  title: string;
  items: string[];
}

export interface ServicePageData {
  id: ServiceId;
  title: string;
  description: string;
  heroImage?: string;
  heroColor?: string;
  mainImage?: string;
  features?: ServiceFeature[];
  workflowSteps?: ServiceWorkflowStep[];
  capabilities?: ServiceCapability[];
  deliverables?: string[];
  references?: string[];
  isComingSoon?: boolean;
}

interface ServicePageTemplateProps {
  data: ServicePageData;
  onServiceClick?: (service: ServiceId | null) => void;
  setActiveTab?: (tab: Page) => void;
}

const ServicePageTemplate: React.FC<ServicePageTemplateProps> = ({ 
  data, 
  onServiceClick, 
  setActiveTab 
}) => {
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
    { name: data.title, active: true },
  ];

  const heroColor = data.heroColor || '#205E92';
  const heroImageUrl = data.heroImage || `https://placehold.co/1920x1080/${heroColor.replace('#', '')}/${heroColor === '#205E92' ? 'FFFFFF' : '000000'}?text=${encodeURIComponent(data.title)}`;

  if (data.isComingSoon) {
    return (
      <div className="font-sans bg-white animate-fadeIn">
        <section className="relative bg-cover bg-center h-80" style={{backgroundImage: `url('${heroImageUrl}')`}}>
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative h-full flex flex-col justify-center items-start max-w-7xl mx-auto px-8 text-white">
            <h1 className="text-5xl font-bold font-heading">{data.title}</h1>
            <button 
              onClick={() => setActiveTab?.('contact')} 
              className="mt-6 border border-white px-6 py-2 text-lg hover:bg-white hover:text-black transition-colors duration-300 flex items-center"
            >
              Inquire Now <ChevronRightIcon className="ml-2" size={20} />
            </button>
          </div>
        </section>
        
        <Breadcrumb items={breadcrumbItems} />

        <div className="py-20 px-8 text-center min-h-[50vh] flex flex-col justify-center items-center">
          <img 
            src="https://placehold.co/128x128/F9FAFB/205E92?text=WIP" 
            className="rounded-full mb-8 shadow-lg" 
            alt="Service Icon" 
          />
          <h2 className="text-4xl font-bold font-heading text-primary mb-8">Content Coming Soon</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            We are currently preparing detailed information for our {data.title} services. 
            Please check back soon or contact us for immediate inquiries.
          </p>
          <button
            className="mt-8 px-6 py-3 rounded-full text-lg font-semibold text-white bg-secondary hover:bg-primary transition-colors duration-300 flex items-center"
            onClick={() => handleNav('services')}
          >
            Back to All Services
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="font-sans bg-white animate-fadeIn">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-80" style={{backgroundImage: `url('${heroImageUrl}')`}}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative h-full flex flex-col justify-center items-start max-w-7xl mx-auto px-8 text-white">
          <h1 className="text-5xl font-bold font-heading">{data.title}</h1>
          <button 
            onClick={() => setActiveTab?.('contact')} 
            className="mt-6 border border-white px-6 py-2 text-lg hover:bg-white hover:text-black transition-colors duration-300 flex items-center"
          >
            Inquire Now <ChevronRightIcon className="ml-2" size={20} />
          </button>
        </div>
      </section>
      
      <Breadcrumb items={breadcrumbItems} />
      
      {/* Main Content */}
      <section className="py-20 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          <main className="lg:col-span-8">
            {/* Service Description */}
            <ServiceSectionTitle title={data.title} />
            <p className="text-gray-700 mb-6 leading-relaxed">
              {data.description}
            </p>
            
            {/* Main Image */}
            {data.mainImage && (
              <img 
                src={data.mainImage} 
                alt={`${data.title} Workflow`} 
                className="rounded-lg shadow-xl w-full mb-8" 
                loading="lazy" 
              />
            )}
            
            {/* Features */}
            {data.features && data.features.length > 0 && (
              <>
                <ServiceSectionTitle title="Key Analysis Components" />
                <div className="space-y-6 mt-6">
                  {data.features.map((feature, index) => (
                    <FeatureCard 
                      key={index}
                      icon={feature.icon}
                      title={feature.title}
                      description={feature.description}
                    />
                  ))}
                </div>
              </>
            )}

            {/* Workflow */}
            {data.workflowSteps && data.workflowSteps.length > 0 && (
              <>
                <ServiceSectionTitle title="Standard Workflow" />
                <div className={`grid gap-4 text-center my-6 ${
                  data.workflowSteps.length <= 2 ? 'grid-cols-2' :
                  data.workflowSteps.length <= 3 ? 'grid-cols-2 md:grid-cols-3' :
                  data.workflowSteps.length <= 4 ? 'grid-cols-2 md:grid-cols-4' :
                  'grid-cols-2 md:grid-cols-5'
                }`}>
                  {data.workflowSteps.map((step, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <div className="p-4 bg-primary/10 rounded-md">
                        {step.icon || <BookOpenIcon size={40} className="text-primary" />}
                      </div>
                      <p className="mt-2 font-semibold text-sm text-primary bg-primary/10 px-2 py-1 rounded w-full">
                        {step.name}
                      </p>
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* Capabilities */}
            {data.capabilities && data.capabilities.length > 0 && (
              <>
                <ServiceSectionTitle title="Our Capabilities" />
                <div className={`grid gap-x-8 gap-y-4 mb-8 ${
                  data.capabilities.length === 1 ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'
                }`}>
                  {data.capabilities.map((capability, index) => (
                    <div key={index}>
                      <h4 className="font-bold font-heading text-lg text-primary mb-2">
                        {capability.title}
                      </h4>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        {capability.items.map((item, itemIndex) => (
                          <li key={itemIndex}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </>
            )}
            
            {/* Deliverables */}
            {data.deliverables && data.deliverables.length > 0 && (
              <>
                <ServiceSectionTitle title="What You Receive" />
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-8">
                  {data.deliverables.map((deliverable, index) => (
                    <li key={index}>{deliverable}</li>
                  ))}
                </ul>
              </>
            )}

            {/* References */}
            {data.references && data.references.length > 0 && (
              <>
                <ServiceSectionTitle title="References" />
                <blockquote className="p-4 my-4 border-l-4 border-gray-300 bg-gray-50">
                  <p className="text-gray-600 italic">
                    {data.references.map((reference, index) => (
                      <React.Fragment key={index}>
                        {reference}
                        {index < data.references.length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </p>
                </blockquote>
              </>
            )}
          </main>

          {/* Sidebar */}
          <ServiceSidebar 
            serviceLinks={serviceLinks}
            currentServiceId={data.id}
            onServiceClick={(id: ServiceId | null) => onServiceClick?.(id)}
          />
        </div>
      </section>
    </div>
  );
};

export default ServicePageTemplate;