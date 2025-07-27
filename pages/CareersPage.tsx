
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Job } from '../types.ts';
import { allJobs } from '../data/jobsData.ts';
import PageHero from '../components/common/PageHero.tsx';
import SectionTitle from '../components/common/SectionTitle.tsx';
import { LightbulbIcon, UsersIcon, BriefcaseIcon, MapPinIcon } from '../components/icons/Icons.tsx';

interface CareersPageProps {}

const CareersPage: React.FC<CareersPageProps> = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredJobs = useMemo(() => {
        return allJobs.filter(job =>
            job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            job.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
            job.location.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [searchTerm]);

    const benefits = [
        {
            icon: <LightbulbIcon size={48} className="text-primary" />,
            title: "Innovate with Purpose",
            desc: "Work on challenging problems at the intersection of AI and biology that have a real-world impact on health."
        },
        {
            icon: <UsersIcon size={48} className="text-primary" />,
            title: "Collaborate & Grow",
            desc: "Join a diverse team of experts. We foster a culture of continuous learning, mentorship, and knowledge sharing."
        },
        {
            icon: <BriefcaseIcon size={48} className="text-primary" />,
            title: "Career Development",
            desc: "We invest in our people, offering opportunities for professional growth, conference attendance, and skill enhancement."
        }
    ];

    return (
        <div className="font-sans bg-white">
            <PageHero
                title="Join Our Team"
                subtitle="Explore exciting career opportunities at the forefront of AI and bioinformatics. Help us shape the future of medicine."
            />
            
            <section className="py-20 px-8 bg-light-gray">
                <SectionTitle title="Why Work at DeepBio?" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-lg p-8 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                            <div className="mb-4 flex justify-center">{benefit.icon}</div>
                            <h3 className="text-2xl font-semibold font-heading text-primary mb-2">{benefit.title}</h3>
                            <p className="text-light-text">{benefit.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="py-20 px-8 bg-white">
                <div className="max-w-5xl mx-auto">
                    <SectionTitle title="Current Openings" />

                    <div className="mb-8 max-w-lg mx-auto">
                        <input
                            type="text"
                            placeholder="Search by title, department, or location..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-full shadow-sm transition-all duration-300 focus:ring-2 focus:ring-secondary focus:border-primary placeholder:text-gray-400"
                        />
                    </div>
                    
                    <div className="space-y-6">
                        {filteredJobs.length > 0 ? (
                            filteredJobs.map(job => (
                                <Link key={job.id} to={`/jobs/${job.id}`} className="bg-light-gray p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:border-primary border-l-4 border-transparent block">
                                    <div className="flex flex-col sm:flex-row justify-between sm:items-center">
                                        <div>
                                            <h3 className="text-xl font-bold font-heading text-primary">{job.title}</h3>
                                            <div className="flex items-center text-sm text-light-text mt-1 space-x-4">
                                                <span className="flex items-center"><MapPinIcon size={16} className="mr-1.5" /> {job.location}</span>
                                                <span className="flex items-center"><BriefcaseIcon size={16} className="mr-1.5" /> {job.department}</span>
                                                <span>{job.type}</span>
                                            </div>
                                        </div>
                                        <Link
                                            to={`/jobs/${job.id}`}
                                            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                                        >
                                            View & Apply
                                        </Link>
                                    </div>
                                </Link>
                            ))
                        ) : (
                            <p className="text-center text-light-text py-8">No openings match your search. Please check back later!</p>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CareersPage;