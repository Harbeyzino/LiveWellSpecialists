import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const AboutUs = () => {
  // Achievements data
  const achievements = [
    { number: '25+', label: 'Years of Excellence' },
    { number: '100K+', label: 'Patients Treated' },
    { number: '150+', label: 'Experienced Doctors' },
    { number: '50+', label: 'Medical Specialties' }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-hospital-blue to-hospital-green py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-white mb-4">About Us</h1>
            <p className="text-white/90 max-w-2xl mx-auto">
              Learn about our mission, history, and commitment to providing exceptional healthcare to our community.
            </p>
          </div>
        </section>
        
        {/* Our Story */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8">
                <h2 className="text-3xl font-bold text-hospital-blue mb-4">Our Story</h2>
                <p className="text-gray-600 mb-4">
                  HealthCare Hospital was established in 1998 with a vision to provide accessible, high-quality healthcare to our community. What began as a small clinic has grown into a comprehensive medical center offering a wide range of specialized services.
                </p>
                <p className="text-gray-600 mb-4">
                  Over the years, we have continuously evolved and expanded our facilities and services to meet the changing healthcare needs of our growing community. We have invested in cutting-edge technology and attracted top medical talent to ensure we provide the best possible care to our patients.
                </p>
                <p className="text-gray-600">
                  Today, HealthCare Hospital stands as a testament to our founding vision and our ongoing commitment to excellence in healthcare. We are proud to be a trusted healthcare provider for thousands of patients each year.
                </p>
              </div>
              <div className="w-full md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3453&q=80" 
                  alt="Hospital Building" 
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Mission, Vision, Values */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-hospital-blue">Our Mission, Vision & Values</h2>
              <div className="w-24 h-1 bg-hospital-green mx-auto my-4"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="hospital-card p-6">
                <div className="bg-hospital-blue/20 p-3 rounded-full inline-block mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-hospital-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-hospital-blue">Our Mission</h3>
                <p className="text-gray-600">
                  To provide exceptional healthcare services with compassion and excellence, improving the health and well-being of the communities we serve.
                </p>
              </div>
              
              <div className="hospital-card p-6">
                <div className="bg-hospital-green/20 p-3 rounded-full inline-block mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-hospital-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-hospital-green">Our Vision</h3>
                <p className="text-gray-600">
                  To be the healthcare provider of choice, recognized for our clinical excellence, exceptional patient experience, and innovative approach to medicine.
                </p>
              </div>
              
              <div className="hospital-card p-6">
                <div className="bg-hospital-blue/20 p-3 rounded-full inline-block mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-hospital-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-hospital-blue">Our Values</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Compassion and empathy in all interactions</li>
                  <li>• Excellence in clinical care and service</li>
                  <li>• Integrity and ethical conduct</li>
                  <li>• Collaboration and teamwork</li>
                  <li>• Innovation and continuous improvement</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Achievements */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center">
                  <div className="inline-block mb-4">
                    <div className="relative">
                      <div className="w-32 h-32 rounded-full bg-gradient-to-br from-hospital-blue to-hospital-green flex items-center justify-center">
                        <span className="text-white text-3xl font-bold">{achievement.number}</span>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">{achievement.label}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Our Leadership */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-hospital-blue">Our Leadership</h2>
              <div className="w-24 h-1 bg-hospital-green mx-auto my-4"></div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our hospital is led by a team of experienced healthcare professionals and administrators dedicated to maintaining the highest standards of medical care and patient satisfaction.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="hospital-card overflow-hidden">
                <div className="aspect-w-4 aspect-h-3">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3494&q=80" 
                    alt="CEO" 
                    className="object-cover w-full h-48"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-hospital-blue">Dr. Richard Williams</h3>
                  <p className="text-hospital-green mb-2">Chief Executive Officer</p>
                  <p className="text-gray-600 text-sm">
                    Dr. Williams brings over 25 years of healthcare management experience and is committed to advancing our hospital's mission of excellence.
                  </p>
                </div>
              </div>
              
              <div className="hospital-card overflow-hidden">
                <div className="aspect-w-4 aspect-h-3">
                  <img 
                    src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3500&q=80" 
                    alt="CMO" 
                    className="object-cover w-full h-48"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-hospital-blue">Dr. Patricia Johnson</h3>
                  <p className="text-hospital-green mb-2">Chief Medical Officer</p>
                  <p className="text-gray-600 text-sm">
                    Dr. Johnson oversees all medical operations and ensures the highest standard of care across all departments and specialties.
                  </p>
                </div>
              </div>
              
              <div className="hospital-card overflow-hidden">
                <div className="aspect-w-4 aspect-h-3">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3388&q=80" 
                    alt="CNO" 
                    className="object-cover w-full h-48"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-hospital-blue">Sarah Thompson</h3>
                  <p className="text-hospital-green mb-2">Chief Nursing Officer</p>
                  <p className="text-gray-600 text-sm">
                    Sarah leads our nursing staff and is dedicated to maintaining the highest standards of patient care and nursing excellence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-16 bg-hospital-blue/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-hospital-blue mb-4">Talk to our health expert</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Whether you're seeking care, looking to join our team, or interested in partnering with us, we welcome you to be part of our healthcare community.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="/contact-us" className="hospital-btn-primary">
                Contact Us
              </a>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="hospital-btn-secondary flex items-center gap-2 text-white-600 hover:text-green-700"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Book Appointment
              </a>

            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutUs;
