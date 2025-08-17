import React from 'react';
import { Code, ChevronRight, Mail, Phone, MapPin, Linkedin, Twitter, Github, Facebook, Instagram } from 'lucide-react';
import logo from '/images/logo.png';


const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container-custom pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-6">
                <img className='h-[50px] bg-white mr-2' src={logo} alt="tm-logo"/>
              <span className="text-2xl font-bold text-white">TechMonohor</span>
            </div>
            <p className="mb-6">
              We build innovative digital solutions that help businesses transform and grow in the digital era.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-slate-800 hover:bg-primary-700 p-2 rounded-full transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="bg-slate-800 hover:bg-primary-700 p-2 rounded-full transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="bg-slate-800 hover:bg-primary-700 p-2 rounded-full transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="#"
                className="bg-slate-800 hover:bg-primary-700 p-2 rounded-full transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="bg-slate-800 hover:bg-primary-700 p-2 rounded-full transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="flex items-center hover:text-primary-400 transition-colors duration-300"
                >
                  <ChevronRight size={16} className="mr-2" />
                  Web Development
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center hover:text-primary-400 transition-colors duration-300"
                >
                  <ChevronRight size={16} className="mr-2" />
                  Mobile App Development
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center hover:text-primary-400 transition-colors duration-300"
                >
                  <ChevronRight size={16} className="mr-2" />
                  Custom Software Development
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center hover:text-primary-400 transition-colors duration-300"
                >
                  <ChevronRight size={16} className="mr-2" />
                  Backend Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center hover:text-primary-400 transition-colors duration-300"
                >
                  <ChevronRight size={16} className="mr-2" />
                  Cloud Solutions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center hover:text-primary-400 transition-colors duration-300"
                >
                  <ChevronRight size={16} className="mr-2" />
                  UI/UX Design
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="flex items-center hover:text-primary-400 transition-colors duration-300"
                >
                  <ChevronRight size={16} className="mr-2" />
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="flex items-center hover:text-primary-400 transition-colors duration-300"
                >
                  <ChevronRight size={16} className="mr-2" />
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="flex items-center hover:text-primary-400 transition-colors duration-300"
                >
                  <ChevronRight size={16} className="mr-2" />
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="flex items-center hover:text-primary-400 transition-colors duration-300"
                >
                  <ChevronRight size={16} className="mr-2" />
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#blog"
                  className="flex items-center hover:text-primary-400 transition-colors duration-300"
                >
                  <ChevronRight size={16} className="mr-2" />
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="flex items-center hover:text-primary-400 transition-colors duration-300"
                >
                  <ChevronRight size={16} className="mr-2" />
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0" />
                <span>Dhaka, Bangladesh</span>
              </li>
              <li className="flex">
                <Phone className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex">
                <Mail className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0" />
                <span>info@TechMonohor.com</span>
              </li>
            </ul>
            
            <div className="mt-6">
              <h4 className="text-white font-medium mb-4">Subscribe to our newsletter</h4>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-slate-800 text-white px-4 py-2 rounded-l-lg border border-slate-700 focus:outline-none focus:border-primary-500 flex-1"
                />
                <button
                  type="submit"
                  className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-r-lg transition-colors duration-300"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {currentYear} TechMonohor. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
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