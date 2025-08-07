
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Job } from '../../types.ts';
import { allJobs } from '../../data/jobsData.ts';
import { ChevronLeftIcon, CheckCircleIcon, UploadCloudIcon, MapPinIcon, BriefcaseIcon } from '../../components/icons/Icons.tsx';
import LoadingSpinner from '../../components/common/LoadingSpinner.tsx';

interface JobDetailPageProps {}

const JobSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="mb-8">
        <h2 className="text-2xl font-bold font-heading mb-4 text-primary">{title}</h2>
        {children}
    </div>
);

const JobDetailPage: React.FC<JobDetailPageProps> = () => {
    const { jobId } = useParams<{ jobId: string }>();
    const navigate = useNavigate();
    const [job, setJob] = useState<Job | undefined>(undefined);

    useEffect(() => {
        const foundJob = allJobs.find(j => j.id === jobId);
        setJob(foundJob);
    }, [jobId]);

    const handleBack = () => {
        navigate('/careers');
    };
    const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
    const [resumeFile, setResumeFile] = useState<File | null>(null);
    const [, setCoverLetterFile] = useState<File | null>(null);
    const [resumeFileName, setResumeFileName] = useState('');
    const [coverLetterFileName, setCoverLetterFileName] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    const handleResumeFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setResumeFile(e.target.files[0]);
            setResumeFileName(e.target.files[0].name);
        } else {
            setResumeFile(null);
            setResumeFileName('');
        }
    };

    const handleCoverLetterFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setCoverLetterFile(e.target.files[0]);
            setCoverLetterFileName(e.target.files[0].name);
        } else {
            setCoverLetterFile(null);
            setCoverLetterFileName('');
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!resumeFile) {
            alert("Please upload a resume.");
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus(null);
        
        // Mock submission logic
        setTimeout(() => {
            // Simulate a success case
            setSubmitStatus('success');
            setIsSubmitting(false);
        }, 1500);
    };

  if (!job) {
        return <LoadingSpinner />;
    }

  return (
    <div className="font-sans bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button
            onClick={handleBack}
            className="flex items-center text-lg mb-8 text-primary hover:underline font-semibold"
        >
            <ChevronLeftIcon className="mr-2" /> Back to all openings
        </button>

        <div className="lg:grid lg:grid-cols-3 lg:gap-12">
            {/* Main Content */}
            <main className="lg:col-span-2">
                <div className="border-b pb-6 mb-8">
                    <h1 className="text-4xl font-bold font-heading text-dark-text">{job.title}</h1>
                    <div className="flex items-center text-lg text-light-text mt-3 space-x-6">
                        <span className="flex items-center"><MapPinIcon size={20} className="mr-2" /> {job.location}</span>
                        <span className="flex items-center"><BriefcaseIcon size={20} className="mr-2" /> {job.type}</span>
                    </div>
                </div>

                <JobSection title="About The Role">
                    <p className="text-gray-700 leading-relaxed">{job.summary}</p>
                </JobSection>

                <JobSection title="Responsibilities">
                    <ul className="space-y-2">
                        {job.responsibilities.map((item, index) => (
                            <li key={index} className="flex items-start">
                                <CheckCircleIcon className="text-green-500 mr-3 mt-1 flex-shrink-0" size={18} />
                                <span className="text-gray-700">{item}</span>
                            </li>
                        ))}
                    </ul>
                </JobSection>
                
                <JobSection title="Qualifications">
                    <ul className="space-y-2">
                        {job.qualifications.map((item, index) => (
                            <li key={index} className="flex items-start">
                                <CheckCircleIcon className="text-green-500 mr-3 mt-1 flex-shrink-0" size={18} />
                                <span className="text-gray-700">{item}</span>
                            </li>
                        ))}
                    </ul>
                </JobSection>

                {job.preferredQualifications.length > 0 && (
                     <JobSection title="Preferred Qualifications">
                        <ul className="space-y-2">
                            {job.preferredQualifications.map((item, index) => (
                                <li key={index} className="flex items-start">
                                    <CheckCircleIcon className="text-green-500 mr-3 mt-1 flex-shrink-0" size={18} />
                                    <span className="text-gray-700">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </JobSection>
                )}

                <JobSection title="What We Offer">
                     <ul className="space-y-2">
                        {job.whatWeOffer.map((item, index) => (
                            <li key={index} className="flex items-start">
                                <CheckCircleIcon className="text-green-500 mr-3 mt-1 flex-shrink-0" size={18} />
                                <span className="text-gray-700">{item}</span>
                            </li>
                        ))}
                    </ul>
                </JobSection>
            </main>

            {/* Application Form Sidebar */}
            <aside className="lg:col-span-1 mt-12 lg:mt-0">
                <div className="bg-light-gray p-6 rounded-lg shadow-lg sticky top-28">
                    <h3 className="text-2xl font-bold font-heading text-center mb-6 text-primary">Apply for this position</h3>
                    {submitStatus === 'success' ? (
                        <div className="text-center py-10 px-4 bg-green-50 border-2 border-dashed border-green-300 rounded-lg">
                            <CheckCircleIcon size={48} className="text-green-500 mx-auto mb-4" />
                            <h4 className="font-bold text-xl text-green-800">Application Submitted!</h4>
                            <p className="text-green-700 mt-2">Thank you for your interest. Our team will review your application and be in touch if you're a good fit.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 sr-only">Full Name</label>
                                <input type="text" id="name" placeholder="Full Name" required value={formData.name} onChange={handleInputChange} className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-md shadow-sm transition-all duration-300 focus:ring-2 focus:ring-secondary focus:border-primary placeholder:text-gray-400" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 sr-only">Email</label>
                                <input type="email" id="email" placeholder="Email Address" required value={formData.email} onChange={handleInputChange} className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-md shadow-sm transition-all duration-300 focus:ring-2 focus:ring-secondary focus:border-primary placeholder:text-gray-400" />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 sr-only">Phone</label>
                                <input type="tel" id="phone" placeholder="Phone Number" value={formData.phone} onChange={handleInputChange} className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-md shadow-sm transition-all duration-300 focus:ring-2 focus:ring-secondary focus:border-primary placeholder:text-gray-400" />
                            </div>
                            <div>
                                <label
                                    htmlFor="resume-upload"
                                    className="w-full flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-md tracking-wide border border-dashed border-gray-300 cursor-pointer hover:bg-gray-50 hover:border-primary"
                                >
                                    <UploadCloudIcon size={32} className="text-primary" />
                                    <span className="mt-2 text-base leading-normal text-primary font-semibold">{resumeFileName || 'Upload Resume/CV*'}</span>
                                    <span className="text-xs text-light-text">{resumeFileName ? 'Click to change file' : 'PDF, DOC, DOCX (Max. 5MB)'}</span>
                                    <input type="file" id="resume-upload" className="hidden" onChange={handleResumeFileChange} accept=".pdf,.doc,.docx" required />
                                </label>
                            </div>
                             <div>
                                <label
                                    htmlFor="cover-letter-upload"
                                    className="w-full flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-md tracking-wide border border-dashed border-gray-300 cursor-pointer hover:bg-gray-50 hover:border-primary"
                                >
                                    <UploadCloudIcon size={32} className="text-gray-500" />
                                    <span className="mt-2 text-base leading-normal text-gray-700 font-semibold">{coverLetterFileName || 'Upload Cover Letter'}</span>
                                    <span className="text-xs text-light-text">{coverLetterFileName ? 'Click to change file' : 'Optional | PDF, DOC, DOCX (Max. 5MB)'}</span>
                                    <input type="file" id="cover-letter-upload" className="hidden" onChange={handleCoverLetterFileChange} accept=".pdf,.doc,.docx" />
                                </label>
                            </div>
                            
                            {submitStatus === 'error' && (
                                <p className="text-sm text-center text-red-600">Something went wrong. Please try again.</p>
                            )}

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-3 px-4 rounded-lg text-white font-semibold text-lg bg-primary hover:bg-opacity-90 transition-opacity disabled:bg-gray-400 disabled:cursor-not-allowed flex justify-center items-center"
                            >
                                {isSubmitting ? (
                                    <>
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Submitting...
                                    </>
                                ) : (
                                    'Submit Application'
                                )}
                            </button>
                            <p className="text-xs text-gray-500 text-center mt-2">By applying, you agree to our terms and data policy.</p>
                        </form>
                    )}
                </div>
            </aside>
        </div>
      </div>
    </div>
  );
};

export default JobDetailPage;
