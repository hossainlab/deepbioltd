
import React from 'react';
import { Page, ServiceId } from '../../types.ts';

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
        <nav className="bg-light-gray">
            <div className="max-w-7xl mx-auto px-8 py-2 text-sm text-gray-500 flex items-center flex-wrap">
                {items.map((item, index) => (
                    <React.Fragment key={index}>
                        {index > 0 && <span className="mx-2">&gt;</span>}
                        <a 
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                if (item.onClick) {
                                    item.onClick();
                                }
                            }}
                            className={item.active ? 'text-primary font-semibold' : 'hover:text-primary'}
                            aria-current={item.active ? 'page' : undefined}
                        >
                            {item.name}
                        </a>
                    </React.Fragment>
                ))}
            </div>
        </nav>
    );
};

export default Breadcrumb;