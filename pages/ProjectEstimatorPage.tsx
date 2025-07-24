
import React, { useState, useEffect } from 'react';
import { EstimateResult, Page } from '../types.ts';
import { getProjectEstimate } from '../lib/gemini.ts';
import { ChevronLeftIcon, SparklesIcon, CheckCircleIcon, ClockIcon } from '../components/icons/Icons.tsx';

interface ProjectEstimatorPageProps {
  onBack: () => void;
  setActiveTab: (tab: Page) => void;
}

const serviceOptions = {
  'bulk-rna-seq': { name: 'Bulk RNA-Seq Analysis', questions: ['sampleCount', 'organism'] },
  'single-cell-rna-seq': { name: 'Single-Cell RNA-Seq Analysis', questions: ['sampleCount', 'organism'] },
  'genomic-analysis': { name: 'Genomic Analysis (WGS/WES)', questions: ['sampleCount', 'organism'] },
  'molecular-docking': { name: 'Molecular Docking / Simulations', questions: [] },
  'other': { name: 'Other / Not Sure', questions: [] },
};

const loadingMessages = [
  "Initializing AI co-pilot...",
  "Analyzing project requirements...",
  "Consulting bioinformatics knowledge base...",
  "Calculating computational resource costs...",
  "Estimating project timeline...",
  "Generating your preliminary quote..."
];

const ProjectEstimatorPage: React.FC<ProjectEstimatorPageProps> = ({ onBack, setActiveTab }) => {
  const [formData, setFormData] = useState({
    service: '',
    sampleCount: '',
    organism: '',
    description: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<EstimateResult | null>(null);
  const [loadingText, setLoadingText] = useState(loadingMessages[0]);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isLoading) {
      let i = 0;
      interval = setInterval(() => {
        i = (i + 1) % loadingMessages.length;
        setLoadingText(loadingMessages[i]);
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [isLoading]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setResult(null);

    try {
      const estimate = await getProjectEstimate(formData);
      setResult(estimate);
    } catch (err: any) {
      setError(err.message || 'An unknown error occurred.');
    } finally {
      setIsLoading(false);
    }
  };

  const selectedServiceInfo = serviceOptions[formData.service as keyof typeof serviceOptions];

  const renderForm = () => (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
          What service are you interested in? <span className="text-red-500">*</span>
        </label>
        <select
          id="service"
          value={formData.service}
          onChange={handleInputChange}
          required
          className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-md shadow-sm transition-all duration-300 focus:ring-2 focus:ring-secondary focus:border-primary"
        >
          <option value="" disabled>Select a service</option>
          {Object.entries(serviceOptions).map(([key, { name }]) => (
            <option key={key} value={key}>{name}</option>
          ))}
        </select>
      </div>

      {selectedServiceInfo && selectedServiceInfo.questions.includes('sampleCount') && (
        <div>
          <label htmlFor="sampleCount" className="block text-sm font-medium text-gray-700 mb-1">
            How many samples do you have? <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            id="sampleCount"
            value={formData.sampleCount}
            onChange={handleInputChange}
            placeholder="e.g., 24"
            required
            className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-md shadow-sm transition-all duration-300 focus:ring-2 focus:ring-secondary focus:border-primary"
          />
        </div>
      )}

      {selectedServiceInfo && selectedServiceInfo.questions.includes('organism') && (
        <div>
          <label htmlFor="organism" className="block text-sm font-medium text-gray-700 mb-1">
            What is the organism?
          </label>
          <input
            type="text"
            id="organism"
            value={formData.organism}
            onChange={handleInputChange}
            placeholder="e.g., Human, Mouse, etc."
            className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-md shadow-sm transition-all duration-300 focus:ring-2 focus:ring-secondary focus:border-primary"
          />
        </div>
      )}

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
          Briefly describe your project or research question: <span className="text-red-500">*</span>
        </label>
        <textarea
          id="description"
          rows={5}
          value={formData.description}
          onChange={handleInputChange}
          placeholder="e.g., 'We want to compare gene expression between treated and untreated cancer cell lines to find potential drug targets.'"
          required
          className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-md shadow-sm transition-all duration-300 focus:ring-2 focus:ring-secondary focus:border-primary"
        />
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full flex justify-center py-3 px-4 rounded-lg text-white font-semibold text-lg bg-primary hover:bg-opacity-90 transition-opacity disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        Get My Estimate
      </button>
    </form>
  );

  const renderLoading = () => (
    <div className="text-center py-10">
      <SparklesIcon size={48} className="text-primary mx-auto mb-4 animate-pulse" />
      <h3 className="text-2xl font-semibold font-heading text-primary">Generating Estimate...</h3>
      <p className="text-light-text mt-2 transition-opacity duration-500">{loadingText}</p>
    </div>
  );
  
  const renderResult = () => (
    <div className="animate-fade-in">
        <h2 className="text-3xl font-bold font-heading text-primary text-center">Your Preliminary Estimate is Ready!</h2>
        <div className="mt-8 space-y-6">
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                <h3 className="font-bold text-xl text-green-800 font-heading">Estimated Cost</h3>
                <p className="text-3xl font-bold text-green-700 mt-1">{result?.estimatedCostRange}</p>
            </div>
            <div className="bg-blue-50 border-l-4 border-secondary p-6 rounded-r-lg">
                <h3 className="font-bold text-xl text-primary font-heading">Estimated Timeline</h3>
                <p className="text-3xl font-bold text-primary mt-1">{result?.estimatedTimeline}</p>
            </div>
             <div className="bg-light-gray p-6 rounded-lg">
                <h3 className="font-bold text-xl text-primary font-heading mb-3">Recommended Services</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {result?.recommendedServices.map(service => (
                        <li key={service} className="flex items-center">
                            <CheckCircleIcon size={18} className="text-green mr-2" />
                            <span className="text-gray-700">{service}</span>
                        </li>
                    ))}
                </ul>
            </div>
             <div className="bg-yellow-50 border-l-4 border-accent p-4 rounded-r-lg text-sm text-yellow-800">
                <p><span className="font-bold">Assumptions:</span> {result?.assumptions}</p>
                <p><span className="font-bold">Potential Roadblocks:</span> {result?.potentialRoadblocks}</p>
            </div>
        </div>
        <div className="mt-8 text-center bg-white p-6 border-2 border-dashed rounded-lg">
            <p className="text-gray-600 mb-4">This is a preliminary estimate generated by AI. For a formal quote and to discuss your project in detail, please contact our team.</p>
            <button 
                onClick={() => setActiveTab('contact')}
                className="px-8 py-3 rounded-full text-lg font-semibold text-white bg-secondary hover:bg-primary transition-colors duration-300 shadow-lg">
                Schedule a Consultation
            </button>
        </div>
    </div>
  );

  return (
    <div className="font-sans bg-white min-h-[80vh] py-12 animate-fade-in">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
            onClick={onBack}
            className="flex items-center text-lg mb-8 text-primary hover:underline font-semibold"
        >
            <ChevronLeftIcon className="mr-2" /> Back to Home
        </button>
        
        <div className="bg-light-gray p-8 rounded-lg shadow-xl">
            {!result && (
              <div className="text-center mb-6">
                  <h1 className="text-4xl font-bold font-heading text-dark-text">AI Project Estimator</h1>
                  <p className="text-lg text-light-text mt-2">Fill out the form below to get an instant, AI-powered estimate.</p>
              </div>
            )}

            {error && <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6" role="alert"><p>{error}</p></div>}

            {isLoading ? renderLoading() : result ? renderResult() : renderForm()}
        </div>
      </div>
    </div>
  );
};

export default ProjectEstimatorPage;
