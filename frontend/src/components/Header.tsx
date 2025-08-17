import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Code, Smartphone, Globe, Server } from 'lucide-react';
import logo from '/images/logo.png';

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
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-2 sm:py-3'
          : 'bg-transparent py-3 sm:py-4 md:py-5'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center">
              <span className="text-primary-600 mr-2">
<<<<<<< HEAD
                <img className='h-8 sm:h-10 md:h-[50px] w-auto' src={logo} alt="tm-logo"/>
=======
                <img className='h-[50px]' src={logo} alt="tm-logo"/>
>>>>>>> cde7aaf23428babcea0fabc0b71a37cb4e1e6312
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6 2xl:space-x-8">
            <a
              href="#home"
              className="text-sm xl:text-base text-slate-700 hover:text-primary-600 transition-colors duration-300 px-2 py-1 rounded-md hover:bg-slate-50"
            >
              Home
            </a>
            <div className="relative group">
              <button
                onClick={() => toggleDropdown('services')}
                className="flex items-center text-sm xl:text-base text-slate-700 hover:text-primary-600 transition-colors duration-300 px-2 py-1 rounded-md hover:bg-slate-50"
              >
                Services
                <ChevronDown size={16} className="ml-1" />
              </button>
              <div className="absolute left-0 mt-2 w-56 xl:w-64 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 z-10">
                <div className="p-3 sm:p-4 grid gap-2 sm:gap-4">
                  <a href="#web-development" className="flex items-center gap-2 hover:bg-slate-50 p-2 rounded-lg transition-colors duration-200">
                    <Globe size={18} className="text-primary-600 flex-shrink-0" />
                    <div className="min-w-0">
                      <div className="font-medium text-sm sm:text-base">Web Development</div>
                      <div className="text-xs sm:text-sm text-slate-500 truncate">Custom websites & web apps</div>
                    </div>
                  </a>
                  <a href="#mobile-apps" className="flex items-center gap-2 hover:bg-slate-50 p-2 rounded-lg transition-colors duration-200">
                    <Smartphone size={18} className="text-primary-600 flex-shrink-0" />
                    <div className="min-w-0">
                      <div className="font-medium text-sm sm:text-base">Mobile Development</div>
                      <div className="text-xs sm:text-sm text-slate-500 truncate">iOS & Android apps</div>
                    </div>
                  </a>
                  <a href="#backend-services" className="flex items-center gap-2 hover:bg-slate-50 p-2 rounded-lg transition-colors duration-200">
                    <Server size={18} className="text-primary-600 flex-shrink-0" />
                    <div className="min-w-0">
                      <div className="font-medium text-sm sm:text-base">Backend Services</div>
                      <div className="text-xs sm:text-sm text-slate-500 truncate">APIs & cloud solutions</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <a
              href="#portfolio"
              className="text-sm xl:text-base text-slate-700 hover:text-primary-600 transition-colors duration-300 px-2 py-1 rounded-md hover:bg-slate-50"
            >
              Portfolio
            </a>
            <a
              href="#team"
              className="text-sm xl:text-base text-slate-700 hover:text-primary-600 transition-colors duration-300 px-2 py-1 rounded-md hover:bg-slate-50"
            >
              Team
            </a>
            <a
              href="#blog"
              className="text-sm xl:text-base text-slate-700 hover:text-primary-600 transition-colors duration-300 px-2 py-1 rounded-md hover:bg-slate-50"
            >
              Blog
            </a>
            <a
              href="#contact"
              className="text-sm xl:text-base text-slate-700 hover:text-primary-600 transition-colors duration-300 px-2 py-1 rounded-md hover:bg-slate-50"
            >
              Contact
            </a>
          </nav>

          <div className="hidden lg:block">
            <a href="#contact" className="btn btn-primary btn-sm lg:btn">
              Get a Quote
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-slate-700 hover:text-primary-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              aria-label="Toggle mobile menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden bg-white/95 backdrop-blur-md ${
          isOpen ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <div className="container-custom py-4">
          <nav className="flex flex-col space-y-2">
            <a
              href="#home"
              className="px-4 py-3 text-slate-700 hover:text-primary-600 hover:bg-gray-100 rounded-md transition-all duration-200 text-base"
              onClick={toggleMenu}
            >
              Home
            </a>
            <div>
              <button
                onClick={() => toggleDropdown('mobileServices')}
                className="flex items-center justify-between w-full px-4 py-3 text-slate-700 hover:text-primary-600 hover:bg-gray-100 rounded-md transition-all duration-200 text-base"
              >
                <span>Services</span>
                <ChevronDown size={16} className={`transition-transform duration-200 ${activeDropdown === 'mobileServices' ? 'rotate-180' : ''}`} />
              </button>
              <div
                className={`transition-all duration-300 overflow-hidden pl-4 ${
                  activeDropdown === 'mobileServices' ? 'max-h-screen py-2' : 'max-h-0'
                }`}
              >
                <a
                  href="#web-development"
                  className="flex items-center gap-3 px-4 py-3 text-slate-700 hover:text-primary-600 hover:bg-gray-100 rounded-md transition-all duration-200"
                  onClick={toggleMenu}
                >
                  <Globe size={18} className="text-primary-600 flex-shrink-0" />
                  <span className="text-sm">Web Development</span>
                </a>
                <a
                  href="#mobile-apps"
                  className="flex items-center gap-3 px-4 py-3 text-slate-700 hover:text-primary-600 hover:bg-gray-100 rounded-md transition-all duration-200"
                  onClick={toggleMenu}
                >
                  <Smartphone size={18} className="text-primary-600 flex-shrink-0" />
                  <span className="text-sm">Mobile Development</span>
                </a>
                <a
                  href="#backend-services"
                  className="flex items-center gap-3 px-4 py-3 text-slate-700 hover:text-primary-600 hover:bg-gray-100 rounded-md transition-all duration-200"
                  onClick={toggleMenu}
                >
                  <Server size={18} className="text-primary-600 flex-shrink-0" />
                  <span className="text-sm">Backend Services</span>
                </a>
              </div>
            </div>
            <a
              href="#portfolio"
              className="px-4 py-3 text-slate-700 hover:text-primary-600 hover:bg-gray-100 rounded-md transition-all duration-200 text-base"
              onClick={toggleMenu}
            >
              Portfolio
            </a>
            <a
              href="#team"
              className="px-4 py-3 text-slate-700 hover:text-primary-600 hover:bg-gray-100 rounded-md transition-all duration-200 text-base"
              onClick={toggleMenu}
            >
              Team
            </a>
            <a
              href="#blog"
              className="px-4 py-3 text-slate-700 hover:text-primary-600 hover:bg-gray-100 rounded-md transition-all duration-200 text-base"
              onClick={toggleMenu}
            >
              Blog
            </a>
            <a
              href="#contact"
              className="px-4 py-3 text-slate-700 hover:text-primary-600 hover:bg-gray-100 rounded-md transition-all duration-200 text-base"
              onClick={toggleMenu}
            >
              Contact
            </a>
            <div className="pt-3 border-t border-gray-200">
              <a href="#contact" className="btn btn-primary w-full justify-center" onClick={toggleMenu}>
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