import React, { useEffect, useState } from 'react';
import { ArrowRight, Code, Cpu, Rocket } from 'lucide-react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="pt-16 sm:pt-20 md:pt-24 lg:pt-28 xl:pt-32 2xl:pt-36 pb-8 sm:pb-12 md:pb-16 lg:pb-20 xl:pb-24 relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute -top-8 sm:-top-12 md:-top-16 lg:-top-20 xl:-top-24 -right-8 sm:-right-12 md:-right-16 lg:-right-20 xl:-right-24 size-responsive bg-primary-500 opacity-5 rounded-full blur-responsive"></div>
      <div className="absolute -bottom-8 sm:-bottom-12 md:-bottom-16 lg:-bottom-20 xl:-bottom-24 -left-8 sm:-left-12 md:-left-16 lg:-left-20 xl:-left-24 size-responsive bg-secondary-400 opacity-5 rounded-full blur-responsive"></div>
      
      <div className="container-custom relative px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 items-center">
          <div className={`transition-all duration-700 delay-100 text-center lg:text-left ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center px-2 py-1.5 sm:px-3 sm:py-2 md:px-4 md:py-2.5 lg:px-5 lg:py-3 bg-primary-50 rounded-full mb-3 sm:mb-4 md:mb-5 lg:mb-6">
              <Rocket size={12} className="sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5 text-primary-600 mr-1.5 sm:mr-2" />
              <span className="text-primary-700 font-medium text-xs sm:text-sm md:text-base">Leading IT Solutions Provider</span>
            </div>
            <h1 className="mb-3 sm:mb-4 md:mb-5 lg:mb-6 leading-tight">
              <span className="block mb-1 sm:mb-2 text-slate-800 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold">Transforming Ideas into</span>
              <span className="gradient-text text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold">Powerful Digital Solutions</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-slate-600 mb-4 sm:mb-5 md:mb-6 lg:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              We build beautiful, functional websites and applications that help businesses grow. Our team of experts delivers custom solutions tailored to your unique needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 md:gap-4 lg:gap-5 justify-center lg:justify-start">
              <a href="#contact" className="btn btn-primary w-full sm:w-auto justify-center text-sm sm:text-base">
                <span className="hidden sm:inline">Get Started</span>
                <span className="sm:hidden">Start Now</span>
                <ArrowRight size={14} className="sm:w-4 sm:h-4 md:w-5 md:h-5 ml-1.5 sm:ml-2" />
              </a>
              <a href="#portfolio" className="btn btn-secondary w-full sm:w-auto justify-center text-sm sm:text-base">
                <span className="hidden sm:inline">View Our Work</span>
                <span className="sm:hidden">Our Work</span>
              </a>
            </div>
          </div>
          
          <div className={`relative transition-all duration-700 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-8'}`}>
            <div className="relative z-10">
              <div className="bg-white shadow-xl sm:shadow-2xl rounded-xl sm:rounded-2xl overflow-hidden border border-slate-100 transform hover:scale-105 transition-transform duration-500">
                <div className="bg-slate-800 p-2.5 sm:p-3 md:p-4 lg:p-5 flex items-center space-x-1.5 sm:space-x-2">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 lg:w-3 lg:h-3 rounded-full bg-red-400"></div>
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 lg:w-3 lg:h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 lg:w-3 lg:h-3 rounded-full bg-green-400"></div>
                  <div className="text-slate-400 text-xs sm:text-sm md:text-base ml-1.5 sm:ml-2 font-mono truncate">TechMonohor-solutions.tsx</div>
                </div>
                <div className="p-2.5 sm:p-3 md:p-4 lg:p-5 xl:p-6 bg-slate-900 text-slate-300 font-mono text-xs sm:text-sm md:text-base overflow-x-auto">
                  <div className="whitespace-nowrap">
                    <span className="text-slate-500 mr-1.5 sm:mr-2 md:mr-3">1</span>
                    <span className="text-pink-400">import</span>
                    <span className="text-white mx-1 sm:mx-1.5 md:mx-2">&#123; Solutions &#125;</span>
                    <span className="text-pink-400">from</span>
                    <span className="text-green-400 ml-1 sm:ml-1.5 md:ml-2">'@TechMonohor/core'</span>
                    <span className="text-white">;</span>
                  </div>
                  <div className="whitespace-nowrap mt-0.5 sm:mt-1 md:mt-1.5">
                    <span className="text-slate-500 mr-1.5 sm:mr-2 md:mr-3">2</span>
                  </div>
                  <div className="whitespace-nowrap mt-0.5 sm:mt-1 md:mt-1.5">
                    <span className="text-slate-500 mr-1.5 sm:mr-2 md:mr-3">3</span>
                    <span className="text-pink-400">const</span>
                    <span className="text-blue-400 mx-1 sm:mx-1.5 md:mx-2">TechMonohor</span>
                    <span className="text-white">=</span>
                    <span className="text-yellow-400 ml-1 sm:ml-1.5 md:ml-2">() =&gt;</span>
                    <span className="text-white mx-1 sm:mx-1.5 md:mx-2">&#123;</span>
                  </div>
                  <div className="whitespace-nowrap mt-0.5 sm:mt-1 md:mt-1.5">
                    <span className="text-slate-500 mr-1.5 sm:mr-2 md:mr-3">4</span>
                    <span className="text-white ml-1.5 sm:ml-2 md:ml-3 lg:ml-4">return (</span>
                  </div>
                  <div className="whitespace-nowrap mt-0.5 sm:mt-1 md:mt-1.5">
                    <span className="text-slate-500 mr-1.5 sm:mr-2 md:mr-3">5</span>
                    <span className="text-white ml-3 sm:ml-4 md:ml-6 lg:ml-8">&lt;</span>
                    <span className="text-yellow-400">Solutions.Provider</span>
                    <span className="text-white">&gt;</span>
                  </div>
                  <div className="whitespace-nowrap mt-0.5 sm:mt-1 md:mt-1.5">
                    <span className="text-slate-500 mr-1.5 sm:mr-2 md:mr-3">6</span>
                    <span className="text-white ml-4.5 sm:ml-6 md:ml-8 lg:ml-12">&lt;</span>
                    <span className="text-yellow-400">Solutions.Web</span>
                    <span className="text-purple-400 ml-1 sm:ml-1.5 md:ml-2">tech</span>
                    <span className="text-white">=</span>
                    <span className="text-green-400">&#123;['React', 'Angular', 'Vue']&#125;</span>
                    <span className="text-white"> /&gt;</span>
                  </div>
                  <div className="whitespace-nowrap mt-0.5 sm:mt-1 md:mt-1.5">
                    <span className="text-slate-500 mr-1.5 sm:mr-2 md:mr-3">7</span>
                    <span className="text-white ml-4.5 sm:ml-6 md:ml-8 lg:ml-12">&lt;</span>
                    <span className="text-yellow-400">Solutions.Mobile</span>
                    <span className="text-purple-400 ml-1 sm:ml-1.5 md:ml-2">platforms</span>
                    <span className="text-white">=</span>
                    <span className="text-green-400">&#123;['iOS', 'Android']&#125;</span>
                    <span className="text-white"> /&gt;</span>
                  </div>
                  <div className="whitespace-nowrap mt-0.5 sm:mt-1 md:mt-1.5">
                    <span className="text-slate-500 mr-1.5 sm:mr-2 md:mr-3">8</span>
                    <span className="text-white ml-4.5 sm:ml-6 md:ml-8 lg:ml-12">&lt;</span>
                    <span className="text-yellow-400">Solutions.Backend</span>
                    <span className="text-purple-400 ml-1 sm:ml-1.5 md:ml-2">stack</span>
                    <span className="text-white">=</span>
                    <span className="text-green-400">&#123;['Node', 'Python', 'Java']&#125;</span>
                    <span className="text-white"> /&gt;</span>
                  </div>
                  <div className="whitespace-nowrap mt-0.5 sm:mt-1 md:mt-1.5">
                    <span className="text-slate-500 mr-1.5 sm:mr-2 md:mr-3">9</span>
                    <span className="text-white ml-3 sm:ml-4 md:ml-6 lg:ml-8">&lt;/</span>
                    <span className="text-yellow-400">Solutions.Provider</span>
                    <span className="text-white">&gt;</span>
                  </div>
                  <div className="whitespace-nowrap mt-0.5 sm:mt-1 md:mt-1.5">
                    <span className="text-slate-500 mr-1.5 sm:mr-2 md:mr-3">10</span>
                    <span className="text-white ml-1.5 sm:ml-2 md:ml-3 lg:ml-4">);</span>
                  </div>
                  <div className="whitespace-nowrap mt-0.5 sm:mt-1 md:mt-1.5">
                    <span className="text-slate-500 mr-1.5 sm:mr-2 md:mr-3">11</span>
                    <span className="text-white">&#125;;</span>
                  </div>
                  <div className="whitespace-nowrap mt-0.5 sm:mt-1 md:mt-1.5">
                    <span className="text-slate-500 mr-1.5 sm:mr-2 md:mr-3">12</span>
                  </div>
                  <div className="whitespace-nowrap mt-0.5 sm:mt-1 md:mt-1.5">
                    <span className="text-slate-500 mr-1.5 sm:mr-2 md:mr-3">13</span>
                    <span className="text-pink-400">export default</span>
                    <span className="text-blue-400 ml-1 sm:ml-1.5 md:ml-2">TechMonohor</span>
                    <span className="text-white">;</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements - only visible on larger screens to prevent overlap */}
            <div className="hidden sm:block absolute -bottom-2 sm:-bottom-3 md:-bottom-4 lg:-bottom-6 xl:-bottom-8 -left-2 sm:-left-4 md:-left-6 lg:-left-8 xl:-left-12 p-1.5 sm:p-2 md:p-3 lg:p-4 bg-white rounded-lg shadow-lg sm:shadow-xl border border-slate-100 animate-float">
              <Code size={14} className="sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-8 xl:h-8 text-primary-600" />
            </div>
            <div className="hidden sm:block absolute -top-1 sm:-top-2 md:-top-3 lg:-top-4 xl:-top-6 -right-1 sm:-right-2 md:-right-4 lg:-right-6 xl:-right-8 p-1.5 sm:p-2 md:p-3 lg:p-4 bg-white rounded-lg shadow-lg sm:shadow-xl border border-slate-100 animate-float-delayed">
              <Cpu size={14} className="sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-8 xl:h-8 text-secondary-600" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;