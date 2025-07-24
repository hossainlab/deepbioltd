
import React, { useState, useCallback, Suspense, lazy } from 'react';
import Navbar from './components/layout/Navbar.tsx';
import Footer from './components/layout/Footer.tsx';
import HeroSlider from './components/HeroSlider.tsx';
import { Page, ServiceId, Course, Job } from './types.ts';
import LoadingSpinner from './components/common/LoadingSpinner.tsx';

const HomePage = lazy(() => import('./pages/HomePage.tsx'));
const AboutPage = lazy(() => import('./pages/AboutPage.tsx'));
const ServicesPage = lazy(() => import('./pages/ServicesPage.tsx'));
const ToolsPage = lazy(() => import('./pages/ToolsPage.tsx'));
const WorkflowsPage = lazy(() => import('./pages/WorkflowsPage.tsx'));
const ResourcesPage = lazy(() => import('./pages/ResourcesPage.tsx'));
const CoursesPage = lazy(() => import('./pages/CoursesPage.tsx'));
const ResearchPage = lazy(() => import('./pages/PublicationsPage.tsx'));
const TeamPage = lazy(() => import('./pages/TeamPage.tsx'));
const ContactPage = lazy(() => import('./pages/ContactPage.tsx'));
const CareersPage = lazy(() => import('./pages/CareersPage.tsx'));
const JobDetailPage = lazy(() => import('./pages/jobs/JobDetailPage.tsx'));
const CourseDetailPage = lazy(() => import('./pages/courses/CourseDetailPage.tsx'));
const ProjectEstimatorPage = lazy(() => import('./pages/ProjectEstimatorPage.tsx'));

const MolecularDynamicsSimulationServicePage = lazy(() => import('./pages/services/MolecularDynamicsSimulationServicePage.tsx'));
const DrugDesignServicePage = lazy(() => import('./pages/services/DrugDesignServicePage.tsx'));
const GenericServicePage = lazy(() => import('./pages/services/GenericServicePage.tsx'));
const MolecularDockingServicePage = lazy(() => import('./pages/services/MolecularDockingServicePage.tsx'));
const ProteinModelingServicePage = lazy(() => import('./pages/services/ProteinModelingServicePage.tsx'));
const GenomicAnalysisServicePage = lazy(() => import('./pages/services/GenomicAnalysisServicePage.tsx'));
const NgsDataAnalysisServicePage = lazy(() => import('./pages/services/NgsDataAnalysisServicePage.tsx'));
const BulkRnaSeqServicePage = lazy(() => import('./pages/services/BulkRnaSeqServicePage.tsx'));
const SingleCellRnaSeqServicePage = lazy(() => import('./pages/services/SingleCellRnaSeqServicePage.tsx'));
const VariantCallingServicePage = lazy(() => import('./pages/services/VariantCallingServicePage.tsx'));
const VirtualScreeningServicePage = lazy(() => import('./pages/services/VirtualScreeningServicePage.tsx'));
const DgeAnalysisServicePage = lazy(() => import('./pages/services/DgeAnalysisServicePage.tsx'));
const ScClusteringAnnotationServicePage = lazy(() => import('./pages/services/ScClusteringAnnotationServicePage.tsx'));
const ChipSeqAnalysisServicePage = lazy(() => import('./pages/services/ChipSeqAnalysisServicePage.tsx'));
const MicrobiomeDiversityAnalysisServicePage = lazy(() => import('./pages/services/MicrobiomeDiversityAnalysisServicePage.tsx'));
const AiBiomarkerDiscoveryServicePage = lazy(() => import('./pages/services/AiBiomarkerDiscoveryServicePage.tsx'));
const GwasServicePage = lazy(() => import('./pages/services/GwasServicePage.tsx'));
const CnvAnalysisServicePage = lazy(() => import('./pages/services/CnvAnalysisServicePage.tsx'));
const DnaMethylationAnalysisServicePage = lazy(() => import('./pages/services/DnaMethylationAnalysisServicePage.tsx'));
const AtacSeqAnalysisServicePage = lazy(() => import('./pages/services/AtacSeqAnalysisServicePage.tsx'));
const ScTrajectoryAnalysisServicePage = lazy(() => import('./pages/services/ScTrajectoryAnalysisServicePage.tsx'));
const AiDrugRepurposingServicePage = lazy(() => import('./pages/services/AiDrugRepurposingServicePage.tsx'));


const GENERIC_SERVICES: ServiceId[] = [
    'genomics', 'transcriptomics', 'cheminformatics', 'multi-omics', 
    'insilico-drug-design', 'molecular-simulations', 
    'biomedical-informatics', 'ai-health-innovation', 'drug-discovery', 
    'vaccine-design', 'bioinformatics-services',
    'statistical-analysis', 'drug-development',
    'ai-gene-expression', 'ai-cell-type-annotation',
    'ai-survival-modeling', 'ai-multi-omics-integration',
    'ai-nlp-literature-mining', 'snp-epistasis-analysis',
    'genetic-linkage-analysis', 'genome-assembly',
    'metabolic-pathway-reconstruction', 'pathway-integration',
    'transcriptome-assembly', 'gene-annotation-profiling', 'functional-characterization',
    'pathway-enrichment-analysis', 'cfrna-analysis', 'mirna-profiling', 'ncrna-function',
    'sc-dge-analysis',
    'sc-cell-communication',
    'epigenomics-integration',
    'pathogen-detection', 'metagenomics-functional-annotation', 'microbiome-host-interaction',
    'network-construction', 'ppi-analysis', 'regulatory-network-modeling', 'epistasis-mapping'
];

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Page>('home');
  const [selectedService, setSelectedService] = useState<ServiceId | null>(null);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [estimatorActive, setEstimatorActive] = useState(false);

  const handleSetEstimatorActive = useCallback((isActive: boolean) => {
    setEstimatorActive(isActive);
    if (isActive) {
      setActiveTab('estimator');
      setSelectedService(null);
      setSelectedCourse(null);
      setSelectedJob(null);
    } else if (activeTab === 'estimator') {
      setActiveTab('home');
    }
    window.scrollTo(0, 0);
  }, [activeTab]);

  const handleSetSelectedService = useCallback((service: ServiceId | null) => {
    setSelectedService(service);
    setSelectedCourse(null);
    setSelectedJob(null);
    setEstimatorActive(false);
    if (service) {
      setActiveTab('services');
    }
    window.scrollTo(0, 0);
  }, []);

  const handleSetSelectedCourse = useCallback((course: Course | null) => {
    setSelectedCourse(course);
    setSelectedService(null);
    setSelectedJob(null);
    setEstimatorActive(false);
    if (course) {
        setActiveTab('courses');
    }
    window.scrollTo(0, 0);
  }, []);
  
  const handleSetSelectedJob = useCallback((job: Job | null) => {
    setSelectedJob(job);
    setSelectedService(null);
    setSelectedCourse(null);
    setEstimatorActive(false);
    if (job) {
        setActiveTab('careers');
    }
    window.scrollTo(0, 0);
  }, []);

  const renderPageContent = () => {
    if (estimatorActive) {
      return <ProjectEstimatorPage onBack={() => handleSetEstimatorActive(false)} setActiveTab={setActiveTab} />;
    }

    if (selectedCourse) {
      return <CourseDetailPage course={selectedCourse} onBack={() => handleSetSelectedCourse(null)} />;
    }
    
    if (selectedJob) {
      return <JobDetailPage job={selectedJob} onBack={() => handleSetSelectedJob(null)} />;
    }

    if (selectedService) {
      switch(selectedService) {
        case 'molecular-dynamics':
          return <MolecularDynamicsSimulationServicePage onServiceClick={handleSetSelectedService} setActiveTab={setActiveTab} />;
        case 'drug-design':
          return <DrugDesignServicePage onServiceClick={handleSetSelectedService} setActiveTab={setActiveTab} />;
        case 'molecular-docking':
          return <MolecularDockingServicePage onServiceClick={handleSetSelectedService} setActiveTab={setActiveTab} />;
        case 'protein-modeling':
          return <ProteinModelingServicePage onServiceClick={handleSetSelectedService} setActiveTab={setActiveTab} />;
        case 'genomic-analysis':
          return <GenomicAnalysisServicePage onServiceClick={handleSetSelectedService} setActiveTab={setActiveTab} />;
        case 'ngs-data-analysis':
          return <NgsDataAnalysisServicePage onServiceClick={handleSetSelectedService} setActiveTab={setActiveTab} />;
        case 'bulk-rna-seq':
          return <BulkRnaSeqServicePage onServiceClick={handleSetSelectedService} setActiveTab={setActiveTab} />;
        case 'single-cell-rna-seq':
          return <SingleCellRnaSeqServicePage onServiceClick={handleSetSelectedService} setActiveTab={setActiveTab} />;
        case 'variant-calling':
          return <VariantCallingServicePage onServiceClick={handleSetSelectedService} setActiveTab={setActiveTab} />;
        case 'virtual-screening':
          return <VirtualScreeningServicePage onServiceClick={handleSetSelectedService} setActiveTab={setActiveTab} />;
        case 'dge-analysis':
          return <DgeAnalysisServicePage onServiceClick={handleSetSelectedService} setActiveTab={setActiveTab} />;
        case 'sc-clustering-annotation':
            return <ScClusteringAnnotationServicePage onServiceClick={handleSetSelectedService} setActiveTab={setActiveTab} />;
        case 'chip-seq-analysis':
            return <ChipSeqAnalysisServicePage onServiceClick={handleSetSelectedService} setActiveTab={setActiveTab} />;
        case 'microbiome-diversity-analysis':
            return <MicrobiomeDiversityAnalysisServicePage onServiceClick={handleSetSelectedService} setActiveTab={setActiveTab} />;
        case 'ai-biomarker-discovery':
            return <AiBiomarkerDiscoveryServicePage onServiceClick={handleSetSelectedService} setActiveTab={setActiveTab} />;
        case 'gwas':
            return <GwasServicePage onServiceClick={handleSetSelectedService} setActiveTab={setActiveTab} />;
        case 'cnv-analysis':
            return <CnvAnalysisServicePage onServiceClick={handleSetSelectedService} setActiveTab={setActiveTab} />;
        case 'dna-methylation-analysis':
            return <DnaMethylationAnalysisServicePage onServiceClick={handleSetSelectedService} setActiveTab={setActiveTab} />;
        case 'atac-seq-analysis':
            return <AtacSeqAnalysisServicePage onServiceClick={handleSetSelectedService} setActiveTab={setActiveTab} />;
        case 'sc-trajectory-analysis':
            return <ScTrajectoryAnalysisServicePage onServiceClick={handleSetSelectedService} setActiveTab={setActiveTab} />;
        case 'ai-drug-repurposing':
            return <AiDrugRepurposingServicePage onServiceClick={handleSetSelectedService} setActiveTab={setActiveTab} />;
        default:
          if (GENERIC_SERVICES.includes(selectedService)) {
            return <GenericServicePage serviceId={selectedService} setSelectedService={handleSetSelectedService} setActiveTab={setActiveTab} />;
          }
          return <GenericServicePage serviceId="not-found" setSelectedService={handleSetSelectedService} setActiveTab={setActiveTab} />;
      }
    }

    switch (activeTab) {
      case 'home':
        return <HomePage setSelectedService={handleSetSelectedService} setActiveTab={setActiveTab} setEstimatorActive={handleSetEstimatorActive} />;
      case 'about':
        return <AboutPage />;
      case 'services':
        return <ServicesPage onServiceClick={handleSetSelectedService} />;
      case 'tools':
        return <ToolsPage />;
      case 'workflows':
        return <WorkflowsPage />;
      case 'resources':
        return <ResourcesPage />;
      case 'courses':
        return <CoursesPage setSelectedCourse={setSelectedCourse} />;
      case 'research':
        return <ResearchPage />;
      case 'team':
        return <TeamPage />;
      case 'contact':
        return <ContactPage />;
      case 'careers':
        return <CareersPage setSelectedJob={handleSetSelectedJob} />;
      default:
        return <HomePage setSelectedService={handleSetSelectedService} setActiveTab={setActiveTab} setEstimatorActive={handleSetEstimatorActive} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-dark-text">
      <Navbar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        setSelectedService={setSelectedService} 
        setSelectedCourse={setSelectedCourse} 
        setSelectedJob={setSelectedJob} 
        setEstimatorActive={handleSetEstimatorActive} 
      />
      {activeTab === 'home' && !selectedService && !selectedCourse && !selectedJob && <HeroSlider />}
      <main>
        <Suspense fallback={<LoadingSpinner />}>
            {renderPageContent()}
        </Suspense>
      </main>
      <Footer setActiveTab={setActiveTab} setSelectedCourse={setSelectedCourse} />
    </div>
  );
};

export default App;
