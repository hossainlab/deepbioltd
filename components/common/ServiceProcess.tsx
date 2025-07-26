
import React from 'react';
import SectionTitle from './SectionTitle.tsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshake, faClipboard, faBullseye, faUsersCog, faUsers, faGauge } from '@fortawesome/free-solid-svg-icons';

const processSteps = [
    {
        num: 1,
        title: 'Initial Meeting',
        icon: <FontAwesomeIcon icon={faHandshake} size="3x" className="text-primary" />,        details: [
            'Initiate collaboration with a no-commitment meeting to discuss opportunities and sign NDAs.'
        ],
    },
    {
        num: 2,
        title: 'Draft Proposal',
        icon: <FontAwesomeIcon icon={faClipboard} size="3x" className="text-primary" />,        details: [
            'Understand client needs, then draft and present a tailored collaboration proposal.'
        ],
    },
    {
        num: 3,
        title: 'Choose a Plan',
        icon: <FontAwesomeIcon icon={faBullseye} size="3x" className="text-primary" />,        details: [
            'Choose a service model or billing plan, finalize the service agreement, and sign off.'
        ],
    },
    {
        num: 4,
        title: 'Kick-off Meeting',
        icon: <FontAwesomeIcon icon={faUsersCog} size="3x" className="text-primary" />,        details: [
            'Kick-off by developing a work breakdown structure, defining KPIs, and scheduling efforts.'
        ],
    },
    {
        num: 5,
        title: 'Active Collaboration',
        icon: <FontAwesomeIcon icon={faUsers} size="3x" className="text-primary" />,        details: [
            'Actively collaborate, execute the project, gather feedback, and log all activities and efforts.'
        ],
    },
    {
        num: 6,
        title: 'Reporting Results',
        icon: <FontAwesomeIcon icon={faGauge} size="3x" className="text-primary" />,        details: [
            'Report, review, and meticulously document all project results.'
        ],
    },
];

const ServiceProcess: React.FC = () => {
    return (
        <section className="py-20 px-8 bg-light-gray">
            <SectionTitle title="Service Model: How it works?" />
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                {processSteps.map((step) => (
                    <div key={step.num} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center flex flex-col items-center">
                        <div className="relative w-32 h-32 mb-6 flex items-center justify-center rounded-full bg-primary/10 mx-auto">
                            <div className="relative z-10">
                                {step.icon}
                            </div>
                        </div>
                        <h3 className="text-2xl font-bold font-heading text-dark-text mb-4">
                            <span className="text-primary">{step.num}.</span> {step.title}
                        </h3>
                        <div className="text-light-text text-center max-w-sm">
                            <p className="mb-2 last:mb-0">{step.details}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ServiceProcess;