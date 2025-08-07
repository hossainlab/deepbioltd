
import React from 'react';
import SectionTitle from '../components/common/SectionTitle.tsx';
import ServiceCard from '../components/common/ServiceCard.tsx';
import PageHero from '../components/common/PageHero.tsx';
import { LightbulbIcon, UsersIcon, ClockIcon } from '../components/icons/Icons.tsx';
import { ServiceId } from '../types.ts';
import { serviceCategories } from '../data/servicesData.ts';

interface ServicesPageProps {
  onServiceClick?: (service: ServiceId) => void;
}

const ServicesPage: React.FC<ServicesPageProps> = () => {

  return (
    <div className="font-sans">
      <PageHero 
        title="Our Services" 
        subtitle="Explore our comprehensive suite of computational biology and bioinformatics services." 
      />

      <section className="py-20 px-8 bg-white space-y-20">
        {serviceCategories.map((category) => (
          <div key={category.id}>
            <div className="text-center mb-12">

              <h2 className="text-3xl sm:text-4xl font-bold font-heading text-primary mb-4">
                {category.title}
              </h2>
              <p className="text-lg text-light-text max-w-3xl mx-auto">{category.description}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {category.services.map((service) => (
                <ServiceCard
                  key={service.id}
                  image={service.image}
                  title={service.title}
                  description={service.description}
                  to={`/services/${service.id}`}
                  showButton={true}
                />
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="py-20 px-8 bg-light-gray">
        <SectionTitle title="Why Choose Us?" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl flex flex-col items-center">
            <div className="mb-4 flex justify-center"><UsersIcon size={48} className="text-primary" /></div>
            <h3 className="text-2xl font-semibold font-heading text-primary mb-2">Experienced Team</h3>
            <p className="text-light-text">Our team comprises highly skilled professionals with extensive experience in bioinformatics.</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8 text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl flex flex-col items-center">
            <div className="mb-4 flex justify-center"><LightbulbIcon size={48} className="text-primary" /></div>
            <h3 className="text-2xl font-semibold font-heading text-primary mb-2">Cutting-Edge Technology</h3>
            <p className="text-light-text">We utilize the latest computational tools and platforms for superior results.</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8 text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl flex flex-col items-center">
            <div className="mb-4 flex justify-center"><ClockIcon size={48} className="text-primary" /></div>
            <h3 className="text-2xl font-semibold font-heading text-primary mb-2">Timely Delivery</h3>
            <p className="text-light-text">Committed to delivering projects on time and within budget, without compromising quality.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;