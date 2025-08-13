import React, { useEffect, useState } from 'react';
import { ArrowRight, Code, Cpu, Rocket } from 'lucide-react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-500 opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary-400 opacity-5 rounded-full blur-3xl"></div>
      
      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-700 delay-100 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center px-4 py-2 bg-primary-50 rounded-full mb-5">
              <Rocket size={16} className="text-primary-600 mr-2" />
              <span className="text-primary-700 font-medium text-sm">Leading IT Solutions Provider</span>
            </div>
            <h1 className="mb-6">
              <span className="block mb-2">Transforming Ideas into</span>
              <span className="gradient-text">Powerful Digital Solutions</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              We build beautiful, functional websites and applications that help businesses grow. Our team of experts delivers custom solutions tailored to your unique needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="btn btn-primary">
                Get Started
                <ArrowRight size={18} className="ml-2" />
              </a>
              <a href="#portfolio" className="btn btn-secondary">
                View Our Work
              </a>
            </div>
          </div>
          
          <div className={`relative transition-all duration-700 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-8'}`}>
            <div className="relative z-10">
              <div className="bg-white shadow-2xl rounded-2xl overflow-hidden border border-slate-100">
                <div className="bg-slate-800 p-4 flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  <div className="text-slate-400 text-sm ml-2">TechMonohor-solutions.tsx</div>
                </div>
                <div className="p-6 bg-slate-900 text-slate-300 font-mono text-sm">
                  <div className="flex">
                    <span className="text-slate-500 mr-4">1</span>
                    <span className="text-pink-400">import</span>
                    <span className="text-white mx-2">&#123; Solutions &#125;</span>
                    <span className="text-pink-400">from</span>
                    <span className="text-green-400 ml-2">'@TechMonohor/core'</span>
                    <span className="text-white">;</span>
                  </div>
                  <div className="flex mt-2">
                    <span className="text-slate-500 mr-4">2</span>
                  </div>
                  <div className="flex mt-2">
                    <span className="text-slate-500 mr-4">3</span>
                    <span className="text-pink-400">const</span>
                    <span className="text-blue-400 mx-2">TechMonohor</span>
                    <span className="text-white">=</span>
                    <span className="text-yellow-400 ml-2">() =&gt;</span>
                    <span className="text-white mx-2">&#123;</span>
                  </div>
                  <div className="flex mt-2">
                    <span className="text-slate-500 mr-4">4</span>
                    <span className="text-white ml-4">return (</span>
                  </div>
                  <div className="flex mt-2">
                    <span className="text-slate-500 mr-4">5</span>
                    <span className="text-white ml-8">&lt;</span>
                    <span className="text-yellow-400">Solutions.Provider</span>
                    <span className="text-white">&gt;</span>
                  </div>
                  <div className="flex mt-2">
                    <span className="text-slate-500 mr-4">6</span>
                    <span className="text-white ml-12">&lt;</span>
                    <span className="text-yellow-400">Solutions.Web</span>
                    <span className="text-purple-400 ml-2">tech</span>
                    <span className="text-white">=</span>
                    <span className="text-green-400">&#123;['React', 'Angular', 'Vue']&#125;</span>
                    <span className="text-white"> /&gt;</span>
                  </div>
                  <div className="flex mt-2">
                    <span className="text-slate-500 mr-4">7</span>
                    <span className="text-white ml-12">&lt;</span>
                    <span className="text-yellow-400">Solutions.Mobile</span>
                    <span className="text-purple-400 ml-2">platforms</span>
                    <span className="text-white">=</span>
                    <span className="text-green-400">&#123;['iOS', 'Android']&#125;</span>
                    <span className="text-white"> /&gt;</span>
                  </div>
                  <div className="flex mt-2">
                    <span className="text-slate-500 mr-4">8</span>
                    <span className="text-white ml-12">&lt;</span>
                    <span className="text-yellow-400">Solutions.Backend</span>
                    <span className="text-purple-400 ml-2">stack</span>
                    <span className="text-white">=</span>
                    <span className="text-green-400">&#123;['Node', 'Python', 'Java']&#125;</span>
                    <span className="text-white"> /&gt;</span>
                  </div>
                  <div className="flex mt-2">
                    <span className="text-slate-500 mr-4">9</span>
                    <span className="text-white ml-8">&lt;/</span>
                    <span className="text-yellow-400">Solutions.Provider</span>
                    <span className="text-white">&gt;</span>
                  </div>
                  <div className="flex mt-2">
                    <span className="text-slate-500 mr-4">10</span>
                    <span className="text-white ml-4">);</span>
                  </div>
                  <div className="flex mt-2">
                    <span className="text-slate-500 mr-4">11</span>
                    <span className="text-white">&#125;;</span>
                  </div>
                  <div className="flex mt-2">
                    <span className="text-slate-500 mr-4">12</span>
                  </div>
                  <div className="flex mt-2">
                    <span className="text-slate-500 mr-4">13</span>
                    <span className="text-pink-400">export default</span>
                    <span className="text-blue-400 ml-2">TechMonohor</span>
                    <span className="text-white">;</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -bottom-6 -left-12 p-4 bg-white rounded-lg shadow-xl border border-slate-100 animate-float">
              <Code size={24} className="text-primary-600" />
            </div>
            <div className="absolute -top-4 -right-8 p-4 bg-white rounded-lg shadow-xl border border-slate-100 animate-float-delayed">
              <Cpu size={24} className="text-secondary-600" />
            </div>
          </div>
        </div>
        
        {/* Trusted by section */}
        {/* <div className={`mt-20 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-center text-slate-500 uppercase tracking-wider font-medium text-sm mb-6">Trusted by innovative companies</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <div className="h-8 flex items-center justify-center font-bold text-slate-600">COMPANY A</div>
            </div>
            <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <div className="h-8 flex items-center justify-center font-bold text-slate-600">COMPANY B</div>
            </div>
            <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <div className="h-8 flex items-center justify-center font-bold text-slate-600">COMPANY C</div>
            </div>
            <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <div className="h-8 flex items-center justify-center font-bold text-slate-600">COMPANY D</div>
            </div>
            <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <div className="h-8 flex items-center justify-center font-bold text-slate-600">COMPANY E</div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;