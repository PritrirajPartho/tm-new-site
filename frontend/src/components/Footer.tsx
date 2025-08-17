import React from 'react';
import { Code, ChevronRight, Mail, Phone, MapPin, Linkedin, Twitter, Github, Facebook, Instagram } from 'lucide-react';
import logo from '/images/logo.png';


const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container-custom pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-6 sm:pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-12 mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <div>
            <div className="flex items-center mb-4 sm:mb-5 md:mb-6">
              <Code size={20} className="sm:w-6 sm:h-6 md:w-7 md:h-7 text-primary-500 mr-2" />
              <span className="text-xl sm:text-2xl md:text-3xl font-bold text-white">TechMonohor</span>
            </div>
            <p className="mb-4 sm:mb-5 md:mb-6 text-sm sm:text-base md:text-lg leading-relaxed">
              We build innovative digital solutions that help businesses transform and grow in the digital era.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              <a
                href="https://www.linkedin.com/in/tech-monohor-it-365b38327/"
                className="bg-slate-800 hover:bg-primary-700 p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110 active:scale-95"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} className="sm:w-4 sm:h-4 md:w-5 md:h-5" />
              </a>
              <a
                href="#"
                className="bg-slate-800 hover:bg-primary-700 p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110 active:scale-95"
                aria-label="Twitter"
              >
                <Twitter size={16} className="sm:w-4 sm:h-4 md:w-5 md:h-5" />
              </a>
              <a
                href="https://github.com/TechMonohorIT"
                className="bg-slate-800 hover:bg-primary-700 p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110 active:scale-95"
                aria-label="GitHub"
              >
                <Github size={16} className="sm:w-4 sm:h-4 md:w-5 md:h-5" />
              </a>
              <a
                href="#"
                className="bg-slate-800 hover:bg-primary-700 p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110 active:scale-95"
                aria-label="Facebook"
              >
                <Facebook size={16} className="sm:w-4 sm:h-4 md:w-5 md:h-5" />
              </a>
              <a
                href="#"
                className="bg-slate-800 hover:bg-primary-700 p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110 active:scale-95"
                aria-label="Instagram"
              >
                <Instagram size={16} className="sm:w-4 sm:h-4 md:w-5 md:h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-white mb-4 sm:mb-5 md:mb-6">Services</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a
                  href="#"
                  className="flex items-center hover:text-primary-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  <ChevronRight size={12} className="sm:w-3 sm:h-3 md:w-4 md:h-4 mr-2" />
                  Web Development
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center hover:text-primary-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  <ChevronRight size={12} className="sm:w-3 sm:h-3 md:w-4 md:h-4 mr-2" />
                  Mobile App Development
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center hover:text-primary-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  <ChevronRight size={12} className="sm:w-3 sm:h-3 md:w-4 md:h-4 mr-2" />
                  Custom Software Development
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center hover:text-primary-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  <ChevronRight size={12} className="sm:w-3 sm:h-3 md:w-4 md:h-4 mr-2" />
                  Backend Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center hover:text-primary-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  <ChevronRight size={12} className="sm:w-3 sm:h-3 md:w-4 md:h-4 mr-2" />
                  Cloud Solutions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center hover:text-primary-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  <ChevronRight size={12} className="sm:w-3 sm:h-3 md:w-4 md:h-4 mr-2" />
                  UI/UX Design
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-white mb-4 sm:mb-5 md:mb-6">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a
                  href="#"
                  className="flex items-center hover:text-primary-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  <ChevronRight size={12} className="sm:w-3 sm:h-3 md:w-4 md:h-4 mr-2" />
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="flex items-center hover:text-primary-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  <ChevronRight size={12} className="sm:w-3 sm:h-3 md:w-4 md:h-4 mr-2" />
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="flex items-center hover:text-primary-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  <ChevronRight size={12} className="sm:w-3 sm:h-3 md:w-4 md:h-4 mr-2" />
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="flex items-center hover:text-primary-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  <ChevronRight size={12} className="sm:w-3 sm:h-3 md:w-4 md:h-4 mr-2" />
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#blog"
                  className="flex items-center hover:text-primary-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  <ChevronRight size={12} className="sm:w-3 sm:h-3 md:w-4 md:h-4 mr-2" />
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="flex items-center hover:text-primary-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  <ChevronRight size={12} className="sm:w-3 sm:h-3 md:w-4 md:h-4 mr-2" />
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-white mb-4 sm:mb-5 md:mb-6">Contact Us</h3>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex">
                <MapPin className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0" />
                <span>Dhaka, Bangladesh</span>
              </li>
              <li className="flex">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary-500 mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base">+1 (555) 123-4567</span>
              </li>
              <li className="flex">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary-500 mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base">techmonohor.it@gmail.com</span>
              </li>
            </ul>
            
            <div className="mt-4 sm:mt-5 md:mt-6">
              <h4 className="text-white font-medium mb-3 sm:mb-4 text-sm sm:text-base">Subscribe to our newsletter</h4>
              <form className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-slate-800 text-white px-3 py-2 sm:px-4 sm:py-3 rounded-lg sm:rounded-l-lg sm:rounded-r-none border border-slate-700 focus:outline-none focus:border-primary-500 text-sm sm:text-base min-w-0 flex-1"
                />
                <button
                  type="submit"
                  className="bg-primary-600 hover:bg-primary-700 text-white px-3 py-2 sm:px-4 sm:py-3 rounded-lg sm:rounded-l-none sm:rounded-r-lg transition-all duration-300 hover:scale-105 active:scale-95 text-sm sm:text-base font-medium whitespace-nowrap flex-shrink-0"
                >
                  <span className="hidden sm:inline">Subscribe</span>
                  <span className="sm:hidden">Sub</span>
                </button>
              </form>
            </div>
          </div>
        </div>
        
        <div className="pt-6 sm:pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm sm:text-base text-center md:text-left">&copy; {currentYear} TechMonohor. All Rights Reserved.</p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm sm:text-base">
            <a href="#" className="hover:text-primary-400 transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary-400 transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="hover:text-primary-400 transition-colors duration-300">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;