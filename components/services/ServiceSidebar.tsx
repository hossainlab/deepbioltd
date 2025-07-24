
import React, { useState, useEffect } from 'react';
import { ServiceId, ServiceLink } from '../../types.ts';
import { ChevronDownIcon, ChevronRightIcon } from '../icons/Icons.tsx';

interface ServiceSidebarProps {
    serviceLinks: ServiceLink[];
    currentServiceId: ServiceId;
    onServiceClick: (serviceId: ServiceId) => void;
}

const InquiryForm: React.FC<{ serviceName?: string }> = ({ serviceName }) => (
    <div>
        <h3 className="text-xl font-bold font-heading text-primary mb-2">Inquiry</h3>
        <div className="w-12 h-0.5 bg-secondary"></div>
        <form className="space-y-4 mt-4">
             <div>
                <label htmlFor="inquiry-name" className="block text-sm font-medium text-gray-700 sr-only">Name</label>
                <input type="text" id="inquiry-name" placeholder="Name" required className="mt-1 block w-full rounded-md bg-gray-100 border-gray-300 shadow-sm px-4 py-2 transition-all duration-300 focus:ring-2 focus:ring-secondary focus:border-primary placeholder:text-gray-500" />
            </div>
            <div>
                <label htmlFor="inquiry-phone" className="block text-sm font-medium text-gray-700 sr-only">Phone</label>
                <input type="tel" id="inquiry-phone" placeholder="Phone" required className="mt-1 block w-full rounded-md bg-gray-100 border-gray-300 shadow-sm px-4 py-2 transition-all duration-300 focus:ring-2 focus:ring-secondary focus:border-primary placeholder:text-gray-500" />
            </div>
            <div>
                <label htmlFor="inquiry-email" className="block text-sm font-medium text-gray-700 sr-only">Email</label>
                <input type="email" id="inquiry-email" placeholder="Email" required className="mt-1 block w-full rounded-md bg-gray-100 border-gray-300 shadow-sm px-4 py-2 transition-all duration-300 focus:ring-2 focus:ring-secondary focus:border-primary placeholder:text-gray-500" />
            </div>
             <div>
                <label htmlFor="inquiry-service" className="block text-sm font-medium text-gray-700 sr-only">Services of Interest</label>
                <input type="text" id="inquiry-service" defaultValue={serviceName} placeholder="Service of Interest" className="mt-1 block w-full rounded-md bg-gray-100 border-gray-300 shadow-sm px-4 py-2 transition-all duration-300 focus:ring-2 focus:ring-secondary focus:border-primary placeholder:text-gray-500" />
            </div>
            <div>
                <label htmlFor="inquiry-desc" className="block text-sm font-medium text-gray-700 sr-only">Project Description</label>
                <textarea id="inquiry-desc" rows={4} placeholder="Project Description" className="mt-1 block w-full rounded-md bg-gray-100 border-gray-300 shadow-sm px-4 py-2 transition-all duration-300 focus:ring-2 focus:ring-secondary focus:border-primary placeholder:text-gray-500"></textarea>
            </div>
            <button type="submit" className="w-full py-2.5 px-4 border border-transparent rounded-md shadow-sm text-white font-semibold bg-primary hover:bg-opacity-90 transition-opacity">SUBMIT</button>
        </form>
    </div>
);


const ServiceSidebar: React.FC<ServiceSidebarProps> = ({ serviceLinks, currentServiceId, onServiceClick }) => {
    const findParentService = (childId: ServiceId): ServiceId | null => {
        for (const link of serviceLinks) {
            if (link.subLinks?.some(sub => sub.id === childId)) {
                return link.id;
            }
        }
        return null;
    };

    const parentId = findParentService(currentServiceId);
    const [openSubmenuId, setOpenSubmenuId] = useState<ServiceId | null>(parentId || (serviceLinks.find(s => s.id === currentServiceId)?.subLinks ? currentServiceId : null));

    useEffect(() => {
        const parentId = findParentService(currentServiceId);
        setOpenSubmenuId(parentId || (serviceLinks.find(s => s.id === currentServiceId)?.subLinks ? currentServiceId : null));
    }, [currentServiceId, serviceLinks]);

    const handleServiceLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, serviceId: ServiceId) => {
        e.preventDefault();
        onServiceClick(serviceId);
        window.scrollTo(0, 0);
    };

    const toggleSubmenu = (serviceId: ServiceId) => {
        setOpenSubmenuId(prev => prev === serviceId ? null : serviceId);
    };
    
    const allServices = serviceLinks.flatMap(s => [s, ...(s.subLinks || [])]);
    const currentService = allServices.find(s => s.id === currentServiceId);

    return (
        <aside className="lg:col-span-4">
             <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-md sticky top-28 space-y-8">
                <div>
                    <h3 className="text-xl font-bold font-heading text-primary mb-2">Our Services</h3>
                    <div className="w-12 h-0.5 bg-secondary"></div>
                    <ul className="mt-4 space-y-1 text-gray-700">
                        {serviceLinks.map(link => (
                            <li key={link.id}>
                                {link.subLinks ? (
                                    <>
                                        <button 
                                            onClick={() => toggleSubmenu(link.id)}
                                            className={`w-full text-left p-3 rounded-md flex justify-between items-center font-semibold transition-colors duration-200 ${
                                                openSubmenuId === link.id ? 'bg-primary/10 text-primary' : 'hover:bg-light-gray'
                                            }`}
                                        >
                                            <span>{link.name}</span>
                                            <ChevronDownIcon size={20} className={`transition-transform ${openSubmenuId === link.id ? 'rotate-180' : ''}`} />
                                        </button>
                                        {openSubmenuId === link.id && (
                                            <ul className="pl-4 mt-1 space-y-1 border-l-2 border-secondary/50">
                                                {link.subLinks.map(sub => (
                                                    <li key={sub.id}>
                                                        <a 
                                                            href="#" 
                                                            onClick={(e) => handleServiceLinkClick(e, sub.id)}
                                                            className={`block p-2 text-sm rounded-md flex justify-between items-center group transition-colors duration-200 ${
                                                                sub.id === currentServiceId ? 'text-primary font-bold bg-secondary/10' : 'hover:bg-light-gray'
                                                            }`}
                                                        >
                                                            <span>{sub.name}</span>
                                                            <ChevronRightIcon size={16} className="text-gray-400 opacity-0 group-hover:opacity-100"/>
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </>
                                ) : (
                                    <a 
                                        href="#" 
                                        onClick={(e) => handleServiceLinkClick(e, link.id)} 
                                        className={`block p-3 rounded-md font-medium flex justify-between items-center group transition-colors duration-200 ${
                                            link.id === currentServiceId ? 'bg-primary text-white shadow' : 'hover:bg-secondary hover:text-white'
                                        }`}
                                    >
                                        <span>{link.name}</span>
                                        <ChevronRightIcon size={16} className="text-gray-400 opacity-0 group-hover:opacity-100 group-hover:text-white"/>
                                    </a>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
                
                <InquiryForm serviceName={currentService?.name} />
            </div>
        </aside>
    );
};

export default ServiceSidebar;