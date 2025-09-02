
import React from 'react';
import { Page, ServiceId } from '../../types.ts';
import { ChevronRightIcon } from '../icons/Icons.tsx';

export interface BreadcrumbItem {
    name: string;
    page?: Page;
    serviceId?: ServiceId;
    active?: boolean;
    onClick?: () => void;
}

interface BreadcrumbProps {
    items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
    return (
        <nav className="bg-gray-50 border-b border-gray-200" aria-label="Breadcrumb">
            <div className="max-w-7xl mx-auto px-8 py-3">
                <ol className="flex items-center space-x-2 text-sm">
                    {items.map((item, index) => (
                        <li key={index} className="flex items-center">
                            {index > 0 && (
                                <ChevronRightIcon size={16} className="text-gray-400 mx-2" />
                            )}
                            {item.active ? (
                                <span className="text-primary font-semibold font-heading" aria-current="page">
                                    {item.name}
                                </span>
                            ) : (
                                <button
                                    onClick={item.onClick}
                                    className="text-gray-600 hover:text-primary transition-colors duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-primary-200 rounded px-1"
                                    style={{ outline: 'none', boxShadow: 'none' }}
                                >
                                    {item.name}
                                </button>
                            )}
                        </li>
                    ))}
                </ol>
            </div>
        </nav>
    );
};

export default Breadcrumb;