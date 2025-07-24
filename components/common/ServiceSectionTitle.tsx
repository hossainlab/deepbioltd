
import React from 'react';

const ServiceSectionTitle: React.FC<{ title: string }> = ({ title }) => (
    <div className="mb-6">
        <h2 className="text-3xl font-bold font-heading text-primary">{title}</h2>
        <div className="w-20 h-1 bg-secondary mt-2"></div>
    </div>
);

export default ServiceSectionTitle;
