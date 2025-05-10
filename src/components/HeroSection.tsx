
import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="relative bg-gray-100 pt-20">
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2128&q=80")',
            filter: 'blur(2px)',
            opacity: '0.25'
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-hospital-blue mb-4">
              Your Health Is <span className="text-hospital-green">Our Priority</span>
            </h1>
            <p className="text-gray-600 text-lg mb-8">
              We provide exceptional healthcare services with compassion and excellence. Our team of experienced medical professionals is dedicated to your well-being.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/services" className="hospital-btn-primary text-center">
                Our Services
              </Link>
              <Link to="/contact-us" className="hospital-btn-secondary text-center">
                Contact Us
              </Link>
            </div>
            
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-6">
              <div className="flex flex-col items-center">
                <div className="bg-hospital-blue/20 p-3 rounded-full mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-hospital-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="font-semibold text-sm">24/7 Service</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="bg-hospital-green/20 p-3 rounded-full mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-hospital-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <p className="font-semibold text-sm">Quality Care</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="bg-hospital-blue/20 p-3 rounded-full mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-hospital-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <p className="font-semibold text-sm">Expert Doctors</p>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-20 h-20 bg-hospital-green/20 rounded-full z-0"></div>
              <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-hospital-blue/20 rounded-full z-0"></div>
              <img 
                src="/lovable-uploads/b48d92d5-8f58-45ef-b6e9-3e823bd11936.png" 
                alt="HealthCare Hospital" 
                className="w-64 h-auto relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-gradient-to-r from-hospital-blue to-hospital-green py-4">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="text-white">
              <h3 className="text-2xl font-bold">24/7</h3>
              <p className="text-white/80">Emergency Care</p>
            </div>
            <div className="text-white">
              <h3 className="text-2xl font-bold">100+</h3>
              <p className="text-white/80">Specialized Doctors</p>
            </div>
            <div className="text-white">
              <h3 className="text-2xl font-bold">50+</h3>
              <p className="text-white/80">Medical Departments</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
