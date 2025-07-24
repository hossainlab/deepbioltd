
import React from 'react';

interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
    <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
            {icon}
        </div>
        <div>
            <h4 className="font-bold text-lg font-heading text-primary">{title}</h4>
            <p className="text-gray-600">{description}</p>
        </div>
    </div>
);

export default FeatureCard;
