
import React from 'react';

interface DoctorCardProps {
  image: string;
  name: string;
  specialty: string;
  description: string;
}

const DoctorCard: React.FC<DoctorCardProps> = ({ image, name, specialty, description }) => {
  return (
    <div className="hospital-card group">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={`Dr. ${name}`}
          className="w-full h-64 object-cover object-top group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-hospital-blue to-transparent p-4">
          <h3 className="text-white text-lg font-semibold">Dr. {name}</h3>
          <p className="text-white/90 text-sm">{specialty}</p>
        </div>
      </div>
      <div className="p-4">
        <p className="text-gray-600 text-sm">{description}</p>
        <div className="mt-4 flex space-x-2">
          <button className="bg-hospital-blue/10 hover:bg-hospital-blue/20 text-hospital-blue p-2 rounded-full transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </button>
          <button className="bg-hospital-green/10 hover:bg-hospital-green/20 text-hospital-green p-2 rounded-full transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </button>
          <button className="bg-hospital-blue/10 hover:bg-hospital-blue/20 text-hospital-blue p-2 rounded-full transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
