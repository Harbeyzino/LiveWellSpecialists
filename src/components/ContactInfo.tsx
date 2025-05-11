
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
            <p className="text-gray-600 mb-1">Emergency: +1 (800) 123-4567</p>
            <p className="text-gray-600">Reception: +1 (800) 765-4321</p>
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
            <p className="text-gray-600 mb-1">info@healthcarehospital.com</p>
            <p className="text-gray-600">support@healthcarehospital.com</p>
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
            <p className="text-gray-600">123 LiveWell Avenue,</p>
            <p className="text-gray-600">Medical District, CA 90210</p>
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
            <p className="text-gray-600 mb-1">Monday - Friday: 8:00 AM - 8:00 PM</p>
            <p className="text-gray-600 mb-1">Saturday: 9:00 AM - 5:00 PM</p>
            <p className="text-gray-600">Sunday: Emergency Only</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
