import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/livewell/b48d92d5-8f58-45ef-b6e9-3e823bd11936.png" 
              alt="HealthCare Hospital Logo" 
              className="h-12 w-auto" 
            />
            <div className="md:block">
              <h1 className="text-lg md:text-xl font-bold text-hospital-blue">LiveWell</h1>
              <p className="text-[10px] md:text-xs font-bold font-serif text-hospital-green -mt-1">Multi-Specialists</p>
              <p className="text-[20px] xs:text-[24px] sm:text-[20px] md:text-lg font-bold font-serif text-hospital-green -mt-1">Hospital</p>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors ${
                isActive('/') 
                  ? 'text-hospital-green border-b-2 border-hospital-green' 
                  : 'text-gray-600 hover:text-hospital-blue'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className={`text-sm font-medium transition-colors ${
                isActive('/services') 
                  ? 'text-hospital-green border-b-2 border-hospital-green' 
                  : 'text-gray-600 hover:text-hospital-blue'
              }`}
            >
              Services
            </Link>
            {/* <Link 
              to="/doctors" 
              className={`text-sm font-medium transition-colors ${
                isActive('/doctors') 
                  ? 'text-hospital-green border-b-2 border-hospital-green' 
                  : 'text-gray-600 hover:text-hospital-blue'
              }`}
            >
              Our Doctors
            </Link> */}
            <Link 
              to="/about-us" 
              className={`text-sm font-medium transition-colors ${
                isActive('/about-us') 
                  ? 'text-hospital-green border-b-2 border-hospital-green' 
                  : 'text-gray-600 hover:text-hospital-blue'
              }`}
            >
              About Us
            </Link>
            <Link 
              to="/contact-us" 
              className={`text-sm font-medium transition-colors ${
                isActive('/contact-us') 
                  ? 'text-hospital-green border-b-2 border-hospital-green' 
                  : 'text-gray-600 hover:text-hospital-blue'
              }`}
            >
              Contact Us
            </Link>
            <Link 
              to="" 
              className={`text-sm font-medium transition-colors ${
                isActive('/about-us') 
                  ? 'text-hospital-green border-b-2 border-hospital-green' 
                  : 'text-gray-600 hover:text-hospital-blue'
              }`}
            >
              Blog
            </Link>
          </div>
          
          {/* Emergency Contact */}
          <div className="hidden md:flex items-center">
            <button
              onClick={() => window.open('tel:+2349036334502')}
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded focus:outline-none transition-colors"
              aria-label="Call Emergency Number"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h2.28a2 2 0 011.94 1.515l.518 2.073a2 2 0 01-.45 1.947l-1.1 1.1a16.001 16.001 0 006.586 6.586l1.1-1.1a2 2 0 011.947-.45l2.073.518A2 2 0 0121 18.72V21a2 2 0 01-2 2h-1C9.163 23 1 14.837 1 5V4a2 2 0 012-2z" />
              </svg>
              <span className="font-bold">Call Emergency</span>
            </button>
          </div>
          
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-600 focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white pb-4">
            <div className="flex flex-col space-y-4 px-4">
              <Link 
                to="/" 
                className={`text-sm font-medium py-2 ${
                  isActive('/') 
                    ? 'text-hospital-green border-l-4 border-hospital-green pl-2' 
                    : 'text-gray-600 hover:text-hospital-blue'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/services" 
                className={`text-sm font-medium py-2 ${
                  isActive('/services') 
                    ? 'text-hospital-green border-l-4 border-hospital-green pl-2' 
                    : 'text-gray-600 hover:text-hospital-blue'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              {/* <Link 
                to="/doctors" 
                className={`text-sm font-medium py-2 ${
                  isActive('/doctors') 
                    ? 'text-hospital-green border-l-4 border-hospital-green pl-2' 
                    : 'text-gray-600 hover:text-hospital-blue'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Our Doctors
              </Link> */}
  
              <Link 
                to="/about-us" 
                className={`text-sm font-medium py-2 ${
                  isActive('/about-us') 
                    ? 'text-hospital-green border-l-4 border-hospital-green pl-2' 
                    : 'text-gray-600 hover:text-hospital-blue'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link 
                to="/contact-us" 
                className={`text-sm font-medium py-2 ${
                  isActive('/contact-us') 
                    ? 'text-hospital-green border-l-4 border-hospital-green pl-2' 
                    : 'text-gray-600 hover:text-hospital-blue'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
              <Link 
                to="/about-us" 
                className={`text-sm font-medium py-2 ${
                  isActive('/') 
                    ? 'text-hospital-green border-l-4 border-hospital-green pl-2' 
                    : 'text-gray-600 hover:text-hospital-blue'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <button
                onClick={() => window.open('tel:+2349036334502')}
                className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded focus:outline-none transition-colors"
                aria-label="Call Emergency Number"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h2.28a2 2 0 011.94 1.515l.518 2.073a2 2 0 01-.45 1.947l-1.1 1.1a16.001 16.001 0 006.586 6.586l1.1-1.1a2 2 0 011.947-.45l2.073.518A2 2 0 0121 18.72V21a2 2 0 01-2 2h-1C9.163 23 1 14.837 1 5V4a2 2 0 012-2z" />
                </svg>
                <span className="font-bold">Call Emergency</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
