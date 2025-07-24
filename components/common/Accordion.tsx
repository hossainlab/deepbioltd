
import React, { useState } from 'react';
import { ChevronDownIcon } from '../icons/Icons.tsx';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-4 px-2 text-left font-semibold text-dark-text hover:bg-gray-100 focus:outline-none"
        aria-expanded={isOpen}
      >
        <span className="text-lg font-poppins">{title}</span>
        <ChevronDownIcon
          size={24}
          className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-4 bg-gray-50">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Accordion;