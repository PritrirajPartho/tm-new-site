import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Code, Smartphone, Globe, Server } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="text-2xl font-bold text-slate-900 flex items-center">
              <span className="text-primary-600 mr-2">
                <Code size={28} />
              </span>
              <span>TechMonohorIT</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a
              href="#home"
              className="text-slate-700 hover:text-primary-600 transition-colors duration-300"
            >
              Home
            </a>
            <div className="relative group">
              <button
                onClick={() => toggleDropdown('services')}
                className="flex items-center text-slate-700 hover:text-primary-600 transition-colors duration-300"
              >
                Services
                <ChevronDown size={16} className="ml-1" />
              </button>
              <div className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 z-10">
                <div className="p-4 grid gap-4">
                  <a href="#web-development" className="flex items-center gap-2 hover:bg-slate-50 p-2 rounded-lg transition-colors duration-200">
                    <Globe size={20} className="text-primary-600" />
                    <div>
                      <div className="font-medium">Web Development</div>
                      <div className="text-sm text-slate-500">Custom websites & web apps</div>
                    </div>
                  </a>
                  <a href="#mobile-apps" className="flex items-center gap-2 hover:bg-slate-50 p-2 rounded-lg transition-colors duration-200">
                    <Smartphone size={20} className="text-primary-600" />
                    <div>
                      <div className="font-medium">Mobile Development</div>
                      <div className="text-sm text-slate-500">iOS & Android apps</div>
                    </div>
                  </a>
                  <a href="#backend-services" className="flex items-center gap-2 hover:bg-slate-50 p-2 rounded-lg transition-colors duration-200">
                    <Server size={20} className="text-primary-600" />
                    <div>
                      <div className="font-medium">Backend Services</div>
                      <div className="text-sm text-slate-500">APIs & cloud solutions</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <a
              href="#portfolio"
              className="text-slate-700 hover:text-primary-600 transition-colors duration-300"
            >
              Portfolio
            </a>
            <a
              href="#team"
              className="text-slate-700 hover:text-primary-600 transition-colors duration-300"
            >
              Team
            </a>
            <a
              href="#blog"
              className="text-slate-700 hover:text-primary-600 transition-colors duration-300"
            >
              Blog
            </a>
            <a
              href="#contact"
              className="text-slate-700 hover:text-primary-600 transition-colors duration-300"
            >
              Contact
            </a>
          </nav>

          <div className="hidden lg:block">
            <a href="#contact" className="btn btn-primary">
              Get a Quote
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-slate-700 hover:text-primary-600 hover:bg-gray-100 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <div className="container-custom py-4 bg-white">
          <nav className="flex flex-col space-y-4">
            <a
              href="#home"
              className="px-4 py-2 text-slate-700 hover:text-primary-600 hover:bg-gray-100 rounded-md"
              onClick={toggleMenu}
            >
              Home
            </a>
            <div>
              <button
                onClick={() => toggleDropdown('mobileServices')}
                className="flex items-center justify-between w-full px-4 py-2 text-slate-700 hover:text-primary-600 hover:bg-gray-100 rounded-md"
              >
                <span>Services</span>
                <ChevronDown size={16} />
              </button>
              <div
                className={`transition-all duration-300 overflow-hidden pl-4 ${
                  activeDropdown === 'mobileServices' ? 'max-h-screen py-2' : 'max-h-0'
                }`}
              >
                <a
                  href="#web-development"
                  className="flex items-center gap-2 px-4 py-2 text-slate-700 hover:text-primary-600 hover:bg-gray-100 rounded-md"
                  onClick={toggleMenu}
                >
                  <Globe size={20} className="text-primary-600" />
                  <span>Web Development</span>
                </a>
                <a
                  href="#mobile-apps"
                  className="flex items-center gap-2 px-4 py-2 text-slate-700 hover:text-primary-600 hover:bg-gray-100 rounded-md"
                  onClick={toggleMenu}
                >
                  <Smartphone size={20} className="text-primary-600" />
                  <span>Mobile Development</span>
                </a>
                <a
                  href="#backend-services"
                  className="flex items-center gap-2 px-4 py-2 text-slate-700 hover:text-primary-600 hover:bg-gray-100 rounded-md"
                  onClick={toggleMenu}
                >
                  <Server size={20} className="text-primary-600" />
                  <span>Backend Services</span>
                </a>
              </div>
            </div>
            <a
              href="#portfolio"
              className="px-4 py-2 text-slate-700 hover:text-primary-600 hover:bg-gray-100 rounded-md"
              onClick={toggleMenu}
            >
              Portfolio
            </a>
            <a
              href="#team"
              className="px-4 py-2 text-slate-700 hover:text-primary-600 hover:bg-gray-100 rounded-md"
              onClick={toggleMenu}
            >
              Team
            </a>
            <a
              href="#blog"
              className="px-4 py-2 text-slate-700 hover:text-primary-600 hover:bg-gray-100 rounded-md"
              onClick={toggleMenu}
            >
              Blog
            </a>
            <a
              href="#contact"
              className="px-4 py-2 text-slate-700 hover:text-primary-600 hover:bg-gray-100 rounded-md"
              onClick={toggleMenu}
            >
              Contact
            </a>
            <div className="pt-2">
              <a href="#contact" className="btn btn-primary w-full" onClick={toggleMenu}>
                Get a Quote
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;