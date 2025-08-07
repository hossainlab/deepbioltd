

import React from 'react';
import { Page, ServiceId } from '../../types.ts';
import { LightbulbIcon, CheckCircleIcon, SparklesIcon, BookOpenIcon, ChevronRightIcon } from '../../components/icons/Icons.tsx';
import ServiceSidebar from '../../components/services/ServiceSidebar.tsx';
import Breadcrumb, { BreadcrumbItem } from '../../components/common/Breadcrumb.tsx';
import ServiceSectionTitle from '../../components/common/ServiceSectionTitle.tsx';
import FeatureCard from '../../components/common/FeatureCard.tsx';
import { serviceLinks } from '../../data/serviceSidebarLinks.ts';

interface ServicePageProps {
  onServiceClick?: (service: ServiceId | null) => void;
  setActiveTab?: (tab: Page) => void;
}

const AiBiomarkerDiscoveryServicePage: React.FC<ServicePageProps> = ({ onServiceClick, setActiveTab }) => {
    
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
        { name: 'AI Biomarker Discovery', active: true },
    ];
    
    return (
        <div className="font-sans bg-white animate-fade-in">
             <section className="relative bg-cover bg-center h-80" style={{backgroundImage: "url('https://placehold.co/1920x1080/8B5CF6/FFFFFF?text=AI+Biomarkers')"}}>
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="relative h-full flex flex-col justify-center items-start max-w-7xl mx-auto px-8 text-white">
                    <h1 className="text-5xl font-bold font-heading">AI-Driven Biomarker Discovery</h1>
                    <button onClick={() => setActiveTab?.('contact')} className="mt-6 border border-white px-6 py-2 text-lg hover:bg-white hover:text-black transition-colors duration-300 flex items-center">
                        Inquire Now <ChevronRightIcon className="ml-2" size={20} />
                    </button>
                </div>
            </section>
            
            <Breadcrumb items={breadcrumbItems} />
            
            <section className="py-20 px-8">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <main className="lg:col-span-8">
                        <ServiceSectionTitle title="Introduction to AI in Biomarker Discovery" />
                        <p className="text-gray-700 mb-6 leading-relaxed">
                            Traditional biomarker discovery can be slow and often identifies markers with limited predictive power. By leveraging advanced machine learning and AI, we can analyze high-dimensional omics data (genomics, transcriptomics, proteomics) to identify robust, multi-feature biomarker signatures for diagnostics, prognostics, and prediction of treatment response.
                        </p>
                        <img src="https://placehold.co/600x400/F9FAFB/8B5CF6?text=SHAP+Plot" alt="AI Feature Importance Plot" className="rounded-lg shadow-xl w-full mb-8" loading="lazy" />
                        
                        <ServiceSectionTitle title="Our AI-Powered Approach" />
                        <div className="space-y-6 mt-6">
                            <FeatureCard 
                                icon={<SparklesIcon className="text-primary" size={32}/>}
                                title="Advanced Feature Selection"
                                description="Using algorithms like Boruta, recursive feature elimination, and LASSO to move beyond simple statistical tests and find truly informative features."
                            />
                             <FeatureCard 
                                icon={<LightbulbIcon className="text-primary" size={32}/>}
                                title="Explainable AI (XAI)"
                                description="Employing techniques like SHAP (SHapley Additive exPlanations) to understand not just what our models predict, but why, providing biological interpretability."
                            />
                             <FeatureCard 
                                icon={<CheckCircleIcon className="text-primary" size={32}/>}
                                title="Robust Model Validation"
                                description="Rigorously validating models using cross-validation and independent test sets to ensure generalizability and avoid overfitting."
                            />
                        </div>

                        <ServiceSectionTitle title="Biomarker Discovery Workflow" />
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center my-6">
                            {['Data Integration', 'Feature Selection', 'Model Training', 'Validation', 'Signature'].map(step => (
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
                            <li>A ranked list of the most predictive biomarker features.</li>
                            <li>Performance metrics for the final predictive model (e.g., AUROC, AUPRC, accuracy).</li>
                            <li>Interpretability plots (e.g., SHAP summary and dependence plots).</li>
                            <li>The trained model object and code for making new predictions.</li>
                            <li>A full report detailing the model architecture, training process, and results.</li>
                        </ul>
                        
                        <ServiceSectionTitle title="References" />
                        <blockquote className="p-4 my-4 border-l-4 border-gray-300 bg-gray-50">
                            <p className="text-gray-600 italic">
                                Our methodologies are built on the latest research in machine learning and bioinformatics to deliver state-of-the-art results.
                                <br />- Lundberg, S. M., & Lee, S. I. (2017). A unified approach to interpreting model predictions. Advances in neural information processing systems.
                                <br />- Pedregosa, F., et al. (2011). Scikit-learn: Machine learning in Python. Journal of machine learning research.
                            </p>
                        </blockquote>
                    </main>

                    <ServiceSidebar 
                        serviceLinks={serviceLinks}
                        currentServiceId="ai-biomarker-discovery"
                        onServiceClick={(id: ServiceId | null) => onServiceClick?.(id)}
                    />
                </div>
            </section>
        </div>
    );
};
export default AiBiomarkerDiscoveryServicePage;