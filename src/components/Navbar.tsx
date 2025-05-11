
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
            <div className="hidden md:block">
              <h1 className="text-xl font-bold text-hospital-blue">LiveWell</h1>
              <p className="text-sm text-hospital-green -mt-1">SPECIALISTS HOSPITAL</p>
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
          </div>
          
          {/* Emergency Contact */}
          <div className="hidden md:flex items-center">
            <div className="bg-hospital-blue text-white px-4 py-2 rounded-md flex items-center">
              <span className="font-bold mr-2">Emergency:</span>
              <span>1-800-HEALTH</span>
            </div>
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
              <Link 
                to="/doctors" 
                className={`text-sm font-medium py-2 ${
                  isActive('/doctors') 
                    ? 'text-hospital-green border-l-4 border-hospital-green pl-2' 
                    : 'text-gray-600 hover:text-hospital-blue'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Our Doctors
              </Link>
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
              <div className="bg-hospital-blue text-white px-4 py-2 rounded-md inline-block mt-2">
                <span className="font-bold mr-2">Emergency:</span>
                <span>1-800-HEALTH</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
