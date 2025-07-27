
import React, { memo } from 'react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  image: string;
  title: string;
  description?: string;
  to?: string;
  showButton?: boolean;
  buttonText?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  image,
  title,
  description,
  to,
  showButton = false,
  buttonText = "View More"
}) => {
  return (
    <Link 
      to={to || "#"}
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer group h-full flex flex-col"
    >
      <div className="overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300" 
          loading="lazy"
        />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="font-semibold font-heading text-lg text-primary mb-2">
          {title}
        </h3>
        {description && (
            <p className="text-light-text text-base flex-grow mb-4">
                {description}
            </p>
        )}
        {showButton && (
          <button className="mt-auto px-4 py-2 rounded-full text-sm font-semibold text-white bg-secondary hover:bg-primary transition-colors duration-300 self-start">
            {buttonText}
          </button>
        )}
    </div>
    </Link>
  );
};

export default memo(ServiceCard);
