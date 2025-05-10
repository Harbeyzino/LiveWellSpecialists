
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactInfo from '@/components/ContactInfo';
import { toast } from '@/hooks/use-toast';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent",
        description: "Thank you for contacting us. We'll get back to you soon!",
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-hospital-blue to-hospital-green py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
            <p className="text-white/90 max-w-2xl mx-auto">
              We're here to help. Reach out with any questions, concerns, or to schedule an appointment.
            </p>
          </div>
        </section>
        
        {/* Contact Information */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <ContactInfo />
          </div>
        </section>
        
        {/* Contact Form and Map */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Contact Form */}
              <div className="w-full lg:w-1/2">
                <h2 className="text-2xl font-bold text-hospital-blue mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hospital-blue"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hospital-blue"
                        placeholder="john.doe@example.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hospital-blue"
                        placeholder="(123) 456-7890"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hospital-blue"
                    >
                      <option value="">Select a subject</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Appointment Request">Appointment Request</option>
                      <option value="Billing Question">Billing Question</option>
                      <option value="Medical Records">Medical Records</option>
                      <option value="Job Inquiry">Job Inquiry</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hospital-blue"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`hospital-btn-primary w-full flex items-center justify-center ${
                        isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        'Send Message'
                      )}
                    </button>
                  </div>
                </form>
              </div>
              
              {/* Map */}
              <div className="w-full lg:w-1/2">
                <h2 className="text-2xl font-bold text-hospital-blue mb-6">Our Location</h2>
                <div className="rounded-lg overflow-hidden shadow-lg h-[400px] bg-gray-200">
                  <iframe
                    title="Hospital Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.1952405236277!2d-122.4194!3d37.7749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ2JzI5LjYiTiAxMjLCsDI1JzA5LjgiVw!5e0!3m2!1sen!2sus!4v1623756945484!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
                <div className="mt-6 bg-white p-4 rounded-lg shadow-md">
                  <h3 className="font-semibold text-hospital-blue mb-2">Finding Us</h3>
                  <p className="text-gray-600 text-sm">
                    Our hospital is located in the heart of the Medical District, easily accessible by car and public transportation. We offer complimentary parking for all patients and visitors in the parking structure adjacent to the main building.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-hospital-blue">Frequently Asked Questions</h2>
              <div className="w-24 h-1 bg-hospital-green mx-auto my-4"></div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Find quick answers to common questions about our services, policies, and procedures.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="hospital-card p-6">
                <h3 className="text-lg font-semibold text-hospital-blue mb-2">What are your visiting hours?</h3>
                <p className="text-gray-600">
                  General visiting hours are from 9:00 AM to 8:00 PM daily. Specific departments may have different hours, please check with the respective unit or call our front desk for more information.
                </p>
              </div>
              
              <div className="hospital-card p-6">
                <h3 className="text-lg font-semibold text-hospital-blue mb-2">How do I request my medical records?</h3>
                <p className="text-gray-600">
                  You can request your medical records by filling out the Medical Records Request Form available at our front desk or on our website. You may submit it in person, by mail, or through our patient portal.
                </p>
              </div>
              
              <div className="hospital-card p-6">
                <h3 className="text-lg font-semibold text-hospital-blue mb-2">What insurance plans do you accept?</h3>
                <p className="text-gray-600">
                  We accept most major insurance plans. Please contact our billing department or your insurance provider to verify coverage before your appointment. We also offer payment plans for those without insurance.
                </p>
              </div>
              
              <div className="hospital-card p-6">
                <h3 className="text-lg font-semibold text-hospital-blue mb-2">How do I schedule an appointment?</h3>
                <p className="text-gray-600">
                  You can schedule an appointment by calling our appointment line at (800) 123-4567, through our patient portal, or by filling out the appointment request form on this website.
                </p>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <p className="text-gray-600">
                Have more questions? Feel free to{" "}
                <a href="tel:+18001234567" className="text-hospital-blue hover:underline">
                  call us
                </a>
                {" "}or{" "}
                <a href="#contact-form" className="text-hospital-blue hover:underline">
                  send us a message
                </a>.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ContactUs;
