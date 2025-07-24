
import React from 'react';
import SectionTitle from './SectionTitle.tsx';
import { HandshakeIcon, ClipboardEditIcon, TargetIcon, UsersCogIcon, UsersRoundIcon, GaugeIcon } from '../icons/Icons.tsx';

const processSteps = [
    {
        num: 1,
        title: 'Initial Meeting',
        icon: <HandshakeIcon size={48} className="text-primary" />,
        details: [
            'Meet and greet online via video conf, chat or email with no commitment',
            'Discuss collaboration opportunities',
            'Sign NDA/CDA and get ready for more details',
        ],
    },
    {
        num: 2,
        title: 'Draft Proposal',
        icon: <ClipboardEditIcon size={48} className="text-primary" />,
        details: [
            'Learn more about client need',
            'Draft a collaboration proposal',
            'Present collaboration proposal',
        ],
    },
    {
        num: 3,
        title: 'Choose a Plan',
        icon: <TargetIcon size={48} className="text-primary" />,
        details: [
            'Select a service model or choose a billing plan',
            'Draft out service agreement and SOW',
            'Agreement signoff',
        ],
    },
    {
        num: 4,
        title: 'Kick-off Meeting',
        icon: <UsersCogIcon size={48} className="text-primary" />,
        details: [
            'Develop a work breakdown structure',
            'Define Key Performance Indicators',
            'Scheduling out the effort',
        ],
    },
    {
        num: 5,
        title: 'Active Collaboration',
        icon: <UsersRoundIcon size={48} className="text-primary" />,
        details: [
            'Project execution and steering',
            'Regular interaction with client and gathering feedback',
            'Activity and effort/hourly logging',
        ],
    },
    {
        num: 6,
        title: 'Reporting Results',
        icon: <GaugeIcon size={48} className="text-primary" />,
        details: [
            'Reporting results',
            'Reviewing results',
            'Documenting results',
        ],
    },
];

const ServiceProcess: React.FC = () => {
    return (
        <section className="py-20 px-8 bg-light-gray">
            <SectionTitle title="Service Model: How it works?" />
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                {processSteps.map((step) => (
                    <div key={step.num} className="text-center flex flex-col items-center">
                        <div className="relative w-32 h-36 mb-6 flex items-center justify-center">
                            <div className="absolute inset-0 bg-primary/10" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}></div>
                            <div className="relative">
                                {step.icon}
                            </div>
                        </div>
                        <h3 className="text-2xl font-bold font-heading text-dark-text mb-4">
                            <span className="text-primary">{step.num}.</span> {step.title}
                        </h3>
                        <ul className="text-light-text space-y-1 text-left max-w-xs">
                            {step.details.map((detail, index) => (
                                <li key={index} className="flex items-start">
                                   <span className="text-primary mr-2">&#8226;</span>
                                   <span>{detail}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ServiceProcess;