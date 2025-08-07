import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar.tsx';
import Footer from './components/layout/Footer.tsx';
import { ServiceId } from './types.ts';
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
    'molecular-simulations', 
    'biomedical-informatics', 'ai-health-innovation', 'drug-discovery', 
    'vaccine-design', 'bioinformatics-services',
    'statistical-analysis', 'drug-development',
    'ai-gene-expression', 'ai-cell-type-annotation',
    'ai-survival-modeling', 'ai-multi-omics-integration',
    'ai-nlp-literature-mining', 'snp-epistasis-analysis',
    'genetic-linkage-analysis', 'genome-assembly',
    'metabolic-pathway-reconstruction', 'pathway-integration',
    'transcriptome-assembly', 'gene-annotation-profiling', 'functional-characterization',
    'pathway-enrichment-analysis', 'cfrna-analysis', 'mirna-profiling', 'ncrna-function', 'drug-design',
    'sc-dge-analysis',
    'sc-cell-communication',
    'epigenomics-integration',
    'pathogen-detection', 'metagenomics-functional-annotation', 'microbiome-host-interaction',
    'network-construction', 'ppi-analysis', 'regulatory-network-modeling', 'epistasis-mapping'
];

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/tools" element={<ToolsPage />} />
              <Route path="/workflows" element={<WorkflowsPage />} />
              <Route path="/resources" element={<ResourcesPage />} />
              <Route path="/courses" element={<CoursesPage />} />
              <Route path="/research" element={<ResearchPage />} />
              <Route path="/team" element={<TeamPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/careers" element={<CareersPage />} />
              <Route path="/estimator" element={<ProjectEstimatorPage />} />
              <Route path="/jobs/:jobId" element={<JobDetailPage />} /> 
              <Route path="/courses/:courseId" element={<CourseDetailPage />} />
              <Route path="/services/molecular-dynamics" element={<MolecularDynamicsSimulationServicePage />} />
              <Route path="/services/drug-design" element={<DrugDesignServicePage />} />
              <Route path="/services/bulk-rna-seq" element={<BulkRnaSeqServicePage />} />
              <Route path="/services/molecular-docking" element={<MolecularDockingServicePage />} />
              <Route path="/services/protein-modeling" element={<ProteinModelingServicePage />} />
              <Route path="/services/genomic-analysis" element={<GenomicAnalysisServicePage />} />
              <Route path="/services/ngs-data-analysis" element={<NgsDataAnalysisServicePage />} />
              <Route path="/services/bulk-rna-seq" element={<BulkRnaSeqServicePage />} />
              <Route path="/services/single-cell-rna-seq" element={<SingleCellRnaSeqServicePage />} />
              <Route path="/services/variant-calling" element={<VariantCallingServicePage />} />
              <Route path="/services/virtual-screening" element={<VirtualScreeningServicePage />} />
              <Route path="/services/dge-analysis" element={<DgeAnalysisServicePage />} />
              <Route path="/services/sc-clustering-annotation" element={<ScClusteringAnnotationServicePage />} />
              <Route path="/services/chip-seq-analysis" element={<ChipSeqAnalysisServicePage />} />
              <Route path="/services/microbiome-diversity-analysis" element={<MicrobiomeDiversityAnalysisServicePage />} />
              <Route path="/services/ai-biomarker-discovery" element={<AiBiomarkerDiscoveryServicePage />} />
              <Route path="/services/gwas" element={<GwasServicePage />} />
              <Route path="/services/cnv-analysis" element={<CnvAnalysisServicePage />} />
              <Route path="/services/dna-methylation-analysis" element={<DnaMethylationAnalysisServicePage />} />
              <Route path="/services/atac-seq-analysis" element={<AtacSeqAnalysisServicePage />} />
              <Route path="/services/sc-trajectory-analysis" element={<ScTrajectoryAnalysisServicePage />} />
              <Route path="/services/ai-drug-repurposing" element={<AiDrugRepurposingServicePage />} />
              {GENERIC_SERVICES.map(serviceId => (
                <Route key={serviceId} path={`/services/${serviceId}`} element={<GenericServicePage serviceId={serviceId} />} />
              ))}
              <Route path="*" element={<HomePage />} /> {/* Fallback for unknown routes */}
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
