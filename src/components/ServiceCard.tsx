
import React from 'react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, link }) => {
  return (
    <div className="hospital-card p-6 group">
      <div className="bg-gradient-to-br from-hospital-blue to-hospital-green p-3 rounded-lg inline-block mb-4 group-hover:scale-110 transition-transform duration-300">
        <div className="text-white">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-2 text-hospital-blue">{title}</h3>
      <p className="text-gray-600 mb-4 text-sm">{description}</p>
      <Link to={link} className="text-hospital-green hover:text-hospital-dark-green font-medium text-sm inline-flex items-center transition-all">
        Learn More
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  );
};

export default ServiceCard;
