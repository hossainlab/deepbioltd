
import React from 'react';
import SectionTitle from '../components/common/SectionTitle.tsx';
import PageHero from '../components/common/PageHero.tsx';
import { UsersIcon, LightbulbIcon, CheckCircleIcon, DocumentStackIcon } from '../components/icons/Icons.tsx';

const AboutPage: React.FC = () => (
    <div className="font-sans bg-white">
        <PageHero 
            title="About DeepBio Limited" 
            subtitle="Driving innovation in health and life sciences through data, AI, and bioinformatics." 
        />
        
        <section className="py-20 px-8">
    <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Who We Are Card */}
            <div className="bg-light-gray p-8 rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-2xl flex flex-col items-center">
                <h3 className="text-3xl font-bold font-heading mb-4 text-center text-primary">Who We Are</h3>
                <p className="text-lg text-light-text text-center">
                    DeepBio Limited is a Bangladesh-based research startup turning life science data into real-world health, AI, and bioinformatics solutions.
                </p>
            </div>
            {/* Our Vision Card */}
            <div className="bg-light-gray p-8 rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-2xl flex flex-col items-center">
                <h3 className="text-3xl font-bold font-heading mb-4 text-center text-primary">Our Vision</h3>
                <p className="text-lg text-light-text text-center">
                    To revolutionize healthcare and life science research in resource-limited settings through data-driven innovation in bioinformatics, artificial intelligence, and digital health.
                </p>
            </div>
            {/* Our Mission Card */}
            <div className="bg-light-gray p-8 rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-2xl flex flex-col items-center">
                <h3 className="text-3xl font-bold font-heading mb-4 text-center text-primary">Our Mission</h3>
                <p className="text-lg text-light-text text-center">
                    To drive innovation in health and life sciences through data, AI, and bioinformatics in resource-limited settings.
                </p>
            </div>
        </div>
    </div>
</section>

        <section className="py-20 px-8 bg-light-gray">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="p-6 bg-white rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl flex flex-col items-center">
                    <p className="text-5xl font-bold text-secondary">{'7/24'}</p>
                    <p className="text-lg text-dark-text mt-2">Online Service</p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl flex flex-col items-center">
                    <p className="text-5xl font-bold text-secondary">100+</p>
                    <p className="text-lg text-dark-text mt-2">Quality Services</p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl flex flex-col items-center">
                    <p className="text-5xl font-bold text-secondary">99.6%</p>
                    <p className="text-lg text-dark-text mt-2">Satisfaction Rate</p>
                </div>
            </div>
        </section>

        <section className="py-20 px-8 bg-white">
            <SectionTitle title="Advanced Bioinformatics/AI Services" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                 <div className="bg-light-gray rounded-lg shadow-lg p-8 text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl flex flex-col items-center">
                    <div className="mb-4 flex justify-center"><UsersIcon size={48} className="text-primary" /></div>
                    <h3 className="text-2xl font-semibold font-heading text-primary mb-2">Professional Team</h3>
                    <p className="text-light-text">Comprising a wide range of highly qualified and experienced biology and bioinformatics experts.</p>
                </div>
                <div className="bg-light-gray rounded-lg shadow-lg p-8 text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl flex flex-col items-center">
                    <div className="mb-4 flex justify-center"><LightbulbIcon size={48} className="text-primary" /></div>
                    <h3 className="text-2xl font-semibold font-heading text-primary mb-2">Innovative Technology</h3>
                    <p className="text-light-text">Leveraging the latest technology trends in the industry, and providing our clients with cutting-edge solutions.</p>
                </div>
                <div className="bg-light-gray rounded-lg shadow-lg p-8 text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl flex flex-col items-center">
                    <div className="mb-4 flex justify-center"><CheckCircleIcon size={48} className="text-primary" /></div>
                    <h3 className="text-2xl font-semibold font-heading text-primary mb-2">Client First</h3>
                    <p className="text-light-text">We focus on working closely with our clients to ensure that our projects meet or exceed their expectations.</p>
                </div>
            </div>
        </section>

        <section className="py-20 px-8 bg-white">
            <SectionTitle 
                title="Our Legal Credentials" 
                subtitle="We are a fully registered and compliant entity, committed to transparency and professional integrity."
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <div className="bg-light-gray rounded-lg shadow-lg p-8 text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl flex flex-col items-center">
                    <div className="mb-4 flex justify-center">
                        <DocumentStackIcon size={48} className="text-primary" />
                    </div>
                    <h3 className="text-2xl font-semibold font-heading text-primary mb-2">RJSC Registration</h3>
                    <p className="text-light-text">Registration No: C-202963/2025</p>
                </div>
                <div className="bg-light-gray rounded-lg shadow-lg p-8 text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl flex flex-col items-center">
                    <div className="mb-4 flex justify-center">
                        <DocumentStackIcon size={48} className="text-primary" />
                    </div>
                    <h3 className="text-2xl font-semibold font-heading text-primary mb-2">TIN Certificate</h3>
                    <p className="text-light-text">TIN: 715297978622</p>
                </div>
                <div className="bg-light-gray rounded-lg shadow-lg p-8 text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl flex flex-col items-center">
                    <div className="mb-4 flex justify-center">
                        <DocumentStackIcon size={48} className="text-primary" />
                    </div>
                    <h3 className="text-2xl font-semibold font-heading text-primary mb-2">Trade License</h3>
                    <p className="text-light-text">License No: TRAD/DNCC/2299/2025</p>
                </div>
            </div>
        </section>

    </div>
);

export default AboutPage;