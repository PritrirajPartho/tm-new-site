import React, { useEffect, useState } from 'react';
import { ArrowRight, Code, Cpu, Rocket } from 'lucide-react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="pt-20 sm:pt-24 md:pt-28 lg:pt-32 xl:pt-36 2xl:pt-40 pb-12 sm:pb-16 md:pb-20 lg:pb-24 xl:pb-28 relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute -top-12 sm:-top-16 md:-top-20 lg:-top-24 xl:-top-32 -right-12 sm:-right-16 md:-right-20 lg:-right-24 xl:-right-32 size-responsive bg-primary-500 opacity-5 rounded-full blur-responsive"></div>
      <div className="absolute -bottom-12 sm:-bottom-16 md:-bottom-20 lg:-bottom-24 xl:-bottom-32 -left-12 sm:-left-16 md:-left-20 lg:-left-24 xl:-left-32 size-responsive bg-secondary-400 opacity-5 rounded-full blur-responsive"></div>
      
      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20 items-center">
          <div className={`transition-all duration-700 delay-100 text-center lg:text-left ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 md:px-5 md:py-3 bg-primary-50 rounded-full mb-4 sm:mb-5 md:mb-6 lg:mb-8">
              <Rocket size={14} className="sm:w-4 sm:h-4 md:w-5 md:h-5 text-primary-600 mr-2" />
              <span className="text-primary-700 font-medium text-xs sm:text-sm md:text-base">Leading IT Solutions Provider</span>
            </div>
            <h1 className="mb-4 sm:mb-5 md:mb-6 lg:mb-8 leading-tight">
              <span className="block mb-1 sm:mb-2 text-slate-800">Transforming Ideas into</span>
              <span className="gradient-text">Powerful Digital Solutions</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-600 mb-6 sm:mb-7 md:mb-8 lg:mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              We build beautiful, functional websites and applications that help businesses grow. Our team of experts delivers custom solutions tailored to your unique needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-5 lg:gap-6 justify-center lg:justify-start">
              <a href="#contact" className="btn btn-primary w-full sm:w-auto justify-center">
                <span className="hidden sm:inline">Get Started</span>
                <span className="sm:hidden">Start Now</span>
                <ArrowRight size={16} className="sm:w-4 sm:h-4 md:w-5 md:h-5 ml-2" />
              </a>
              <a href="#portfolio" className="btn btn-secondary w-full sm:w-auto justify-center">
                <span className="hidden sm:inline">View Our Work</span>
                <span className="sm:hidden">Our Work</span>
              </a>
            </div>
          </div>
          
          <div className={`relative transition-all duration-700 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-8'}`}>
            <div className="relative z-10">
              <div className="bg-white shadow-2xl rounded-2xl overflow-hidden border border-slate-100 transform hover:scale-105 transition-transform duration-500">
                <div className="bg-slate-800 p-3 sm:p-4 md:p-5 flex items-center space-x-2">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-400"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-400"></div>
                  <div className="text-slate-400 text-xs sm:text-sm md:text-base ml-2 font-mono">TechMonohor-solutions.tsx</div>
                </div>
                <div className="p-4 sm:p-5 md:p-6 lg:p-8 bg-slate-900 text-slate-300 font-mono text-xs sm:text-sm md:text-base overflow-x-auto">
                  <div className="flex min-w-max">
                    <span className="text-slate-500 mr-3 sm:mr-4">1</span>
                    <span className="text-pink-400">import</span>
                    <span className="text-white mx-2">&#123; Solutions &#125;</span>
                    <span className="text-pink-400">from</span>
                    <span className="text-green-400 ml-2">'@TechMonohor/core'</span>
                    <span className="text-white">;</span>
                  </div>
                  <div className="flex mt-1 sm:mt-2 min-w-max">
                    <span className="text-slate-500 mr-3 sm:mr-4">2</span>
                  </div>
                  <div className="flex mt-1 sm:mt-2 min-w-max">
                    <span className="text-slate-500 mr-3 sm:mr-4">3</span>
                    <span className="text-pink-400">const</span>
                    <span className="text-blue-400 mx-2">TechMonohor</span>
                    <span className="text-white">=</span>
                    <span className="text-yellow-400 ml-2">() =&gt;</span>
                    <span className="text-white mx-2">&#123;</span>
                  </div>
                  <div className="flex mt-1 sm:mt-2 min-w-max">
                    <span className="text-slate-500 mr-3 sm:mr-4">4</span>
                    <span className="text-white ml-3 sm:ml-4">return (</span>
                  </div>
                  <div className="flex mt-1 sm:mt-2 min-w-max">
                    <span className="text-slate-500 mr-3 sm:mr-4">5</span>
                    <span className="text-white ml-6 sm:ml-8">&lt;</span>
                    <span className="text-yellow-400">Solutions.Provider</span>
                    <span className="text-white">&gt;</span>
                  </div>
                  <div className="flex mt-1 sm:mt-2 min-w-max">
                    <span className="text-slate-500 mr-3 sm:mr-4">6</span>
                    <span className="text-white ml-9 sm:ml-12">&lt;</span>
                    <span className="text-yellow-400">Solutions.Web</span>
                    <span className="text-purple-400 ml-2">tech</span>
                    <span className="text-white">=</span>
                    <span className="text-green-400">&#123;['React', 'Angular', 'Vue']&#125;</span>
                    <span className="text-white"> /&gt;</span>
                  </div>
                  <div className="flex mt-1 sm:mt-2 min-w-max">
                    <span className="text-slate-500 mr-3 sm:mr-4">7</span>
                    <span className="text-white ml-9 sm:ml-12">&lt;</span>
                    <span className="text-yellow-400">Solutions.Mobile</span>
                    <span className="text-purple-400 ml-2">platforms</span>
                    <span className="text-white">=</span>
                    <span className="text-green-400">&#123;['iOS', 'Android']&#125;</span>
                    <span className="text-white"> /&gt;</span>
                  </div>
                  <div className="flex mt-1 sm:mt-2 min-w-max">
                    <span className="text-slate-500 mr-3 sm:mr-4">8</span>
                    <span className="text-white ml-9 sm:ml-12">&lt;</span>
                    <span className="text-yellow-400">Solutions.Backend</span>
                    <span className="text-purple-400 ml-2">stack</span>
                    <span className="text-white">=</span>
                    <span className="text-green-400">&#123;['Node', 'Python', 'Java']&#125;</span>
                    <span className="text-white"> /&gt;</span>
                  </div>
                  <div className="flex mt-1 sm:mt-2 min-w-max">
                    <span className="text-slate-500 mr-3 sm:mr-4">9</span>
                    <span className="text-white ml-6 sm:ml-8">&lt;/</span>
                    <span className="text-yellow-400">Solutions.Provider</span>
                    <span className="text-white">&gt;</span>
                  </div>
                  <div className="flex mt-1 sm:mt-2 min-w-max">
                    <span className="text-slate-500 mr-3 sm:mr-4">10</span>
                    <span className="text-white ml-3 sm:ml-4">);</span>
                  </div>
                  <div className="flex mt-1 sm:mt-2 min-w-max">
                    <span className="text-slate-500 mr-3 sm:mr-4">11</span>
                    <span className="text-white">&#125;;</span>
                  </div>
                  <div className="flex mt-1 sm:mt-2 min-w-max">
                    <span className="text-slate-500 mr-3 sm:mr-4">12</span>
                  </div>
                  <div className="flex mt-1 sm:mt-2 min-w-max">
                    <span className="text-slate-500 mr-3 sm:mr-4">13</span>
                    <span className="text-pink-400">export default</span>
                    <span className="text-blue-400 ml-2">TechMonohor</span>
                    <span className="text-white">;</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -bottom-3 sm:-bottom-4 md:-bottom-6 lg:-bottom-8 -left-6 sm:-left-8 md:-left-12 lg:-left-16 p-2 sm:p-3 md:p-4 bg-white rounded-lg shadow-xl border border-slate-100 animate-float">
              <Code size={16} className="sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 xl:w-10 xl:h-10 text-primary-600" />
            </div>
            <div className="absolute -top-2 sm:-top-3 md:-top-4 lg:-top-6 -right-4 sm:-right-6 md:-right-8 lg:-right-12 p-2 sm:p-3 md:p-4 bg-white rounded-lg shadow-xl border border-slate-100 animate-float-delayed">
              <Cpu size={16} className="sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 xl:w-10 xl:h-10 text-secondary-600" />
            </div>
          </div>
        </div>
        
        {/* Trusted by section */}
        {/* <div className={`mt-16 sm:mt-20 md:mt-24 lg:mt-32 xl:mt-40 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-center text-slate-500 uppercase tracking-wider font-medium text-xs sm:text-sm md:text-base mb-4 sm:mb-6 md:mb-8">Trusted by innovative companies</p>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-20">
            <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <div className="h-6 sm:h-8 flex items-center justify-center font-bold text-slate-600 text-sm sm:text-base">COMPANY A</div>
            </div>
            <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <div className="h-6 sm:h-8 flex items-center justify-center font-bold text-slate-600 text-sm sm:text-base">COMPANY B</div>
            </div>
            <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <div className="h-6 sm:h-8 flex items-center justify-center font-bold text-slate-600 text-sm sm:text-base">COMPANY C</div>
            </div>
            <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <div className="h-6 sm:h-8 flex items-center justify-center font-bold text-slate-600 text-sm sm:text-base">COMPANY D</div>
            </div>
            <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <div className="h-6 sm:h-8 flex items-center justify-center font-bold text-slate-600 text-sm sm:text-base">COMPANY E</div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;