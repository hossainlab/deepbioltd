
import React from 'react';
import { Page, ServiceId } from '../../types.ts';
import ServicePageTemplate from '../../components/services/ServicePageTemplate.tsx';
import { servicePageData } from '../../data/servicePageData.ts';

interface ServicePageProps {
  onServiceClick?: (service: ServiceId | null) => void;
  setActiveTab?: (tab: Page) => void;
}

const DrugDesignServicePage: React.FC<ServicePageProps> = ({ onServiceClick, setActiveTab }) => {
    return (
        <ServicePageTemplate 
            data={servicePageData['drug-design']}
            onServiceClick={onServiceClick}
            setActiveTab={setActiveTab}
        />
    );
};

export default DrugDesignServicePage;