import React from 'react';
import { Phone, MapPin, Mail, Clock } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="hospital-card p-6">
        <div className="flex items-start">
          <div className="bg-hospital-blue/20 p-3 rounded-full mr-4">
            <Phone className="h-6 w-6 text-hospital-blue" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-hospital-blue">Phone</h3>
            <p className="text-gray-600 mb-1">Emergency: +234 (903) 633 4502</p>
            {/* <p className="text-gray-600">Reception: +234 (800) 765-4321</p> */}
          </div>
        </div>
      </div>
      
      <div className="hospital-card p-6">
        <div className="flex items-start">
          <div className="bg-hospital-green/20 p-3 rounded-full mr-4">
            <Mail className="h-6 w-6 text-hospital-green" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-hospital-green">Email</h3>
            <p className="text-gray-600 mb-1">livewellmsh1@gmail.com</p>
            {/* <p className="text-gray-600">support@healthcarehospital.com</p> */}
          </div>
        </div>
      </div>
      
      <div className="hospital-card p-6">
        <div className="flex items-start">
          <div className="bg-hospital-blue/20 p-3 rounded-full mr-4">
            <MapPin className="h-6 w-6 text-hospital-blue" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-hospital-blue">Address</h3>
            <p className="text-gray-600 text-sm">
              Plot 6 & 8, Christ Chapel Street, Christ Chapel Bus Stop, Opp EXDOUS Filling Station, ADABOL Junction Ashi Road, Bodija, Ibadan., Ibadan, Nigeria.
            </p>
          </div>
        </div>
      </div>
      
      <div className="hospital-card p-6">
        <div className="flex items-start">
          <div className="bg-hospital-green/20 p-3 rounded-full mr-4">
            <Clock className="h-6 w-6 text-hospital-green" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-hospital-green">Working Hours</h3>
            <p className="text-gray-600 mb-1">Monday - Sunday: Always Open</p>
            {/* <p className="text-gray-600 mb-1">Saturday: Always Open</p>
            <p className="text-gray-600">Sunday: Always Open</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
