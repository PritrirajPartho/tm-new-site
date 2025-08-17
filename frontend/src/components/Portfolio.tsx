import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  link: string;
}

const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    category: 'Web Development',
    description: 'A comprehensive e-commerce solution with product management, payment processing, and customer analytics.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    imageUrl: 'https://images.pexels.com/photos/5077047/pexels-photo-5077047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    link: '#',
  },
  {
    id: '2',
    title: 'Healthcare Mobile App',
    category: 'Mobile Development',
    description: 'A patient-focused mobile application for appointment scheduling, medical records, and telemedicine.',
    technologies: ['React Native', 'Firebase', 'Node.js'],
    imageUrl: 'https://images.pexels.com/photos/6393341/pexels-photo-6393341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    link: '#',
  },
  {
    id: '3',
    title: 'Real Estate Management System',
    category: 'Web Development',
    description: 'A property management platform with listing management, tenant screening, and financial reporting.',
    technologies: ['Angular', 'Django', 'PostgreSQL'],
    imageUrl: 'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    link: '#',
  },
  {
    id: '4',
    title: 'Financial Analytics Dashboard',
    category: 'Web Development',
    description: 'An interactive dashboard for financial data visualization and market trend analysis.',
    technologies: ['Vue.js', 'D3.js', 'Express', 'MySQL'],
    imageUrl: 'https://images.pexels.com/photos/7567558/pexels-photo-7567558.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    link: '#',
  },
  {
    id: '5',
    title: 'Logistics Tracking System',
    category: 'Web & Mobile',
    description: 'A comprehensive solution for tracking shipments, managing inventory, and optimizing delivery routes.',
    technologies: ['React', 'React Native', 'Node.js', 'MongoDB'],
    imageUrl: 'https://images.pexels.com/photos/4393668/pexels-photo-4393668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    link: '#',
  },
  {
    id: '6',
    title: 'AI-Powered Customer Service',
    category: 'AI & Backend',
    description: 'A customer service platform with AI-powered chatbots and automated ticket management.',
    technologies: ['Python', 'TensorFlow', 'React', 'AWS'],
    imageUrl: 'https://images.pexels.com/photos/8294606/pexels-photo-8294606.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    link: '#',
  },
];

const Portfolio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);
  const [animateProjects, setAnimateProjects] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const categories = ['All', ...Array.from(new Set(projects.map((project) => project.category)))];

  useEffect(() => {
    const filtered =
      selectedCategory === 'All'
        ? projects
        : projects.filter((project) => project.category === selectedCategory);
    
    setAnimateProjects(false);
    setTimeout(() => {
      setFilteredProjects(filtered);
      setAnimateProjects(true);
    }, 300);
  }, [selectedCategory]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimateProjects(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="portfolio" ref={sectionRef} className="section-padding bg-slate-50 relative">
      <div className="absolute -bottom-12 sm:-bottom-16 md:-bottom-20 lg:-bottom-24 xl:-bottom-32 right-1/4 size-responsive bg-secondary-500 opacity-5 rounded-full blur-responsive"></div>
      
      <div className="container-custom">
        <div className="text-center max-w-2xl sm:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto mb-10 sm:mb-12 md:mb-16 lg:mb-20">
          <h2 className="mb-4 sm:mb-5 md:mb-6 lg:mb-8">
            <span className="gradient-text">Our Portfolio</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-600 leading-relaxed">
            Explore our recent projects that showcase our expertise in creating innovative digital solutions for our clients.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-10 md:mb-12 lg:mb-16 overflow-x-auto pb-2 sm:pb-4 scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 py-2 sm:px-4 sm:py-2 md:px-5 md:py-3 lg:px-6 lg:py-3 rounded-full transition-all duration-300 text-sm sm:text-base md:text-lg font-medium whitespace-nowrap ${
                selectedCategory === category
                  ? 'bg-primary-600 text-white shadow-md hover:shadow-lg'
                  : 'bg-white text-slate-700 hover:bg-slate-100 hover:shadow-md'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`card group overflow-hidden transition-all duration-500 hover:scale-105 ${
                animateProjects ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 sm:h-56 md:h-60 lg:h-64 xl:h-72 overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-4 sm:p-5 md:p-6 flex flex-col justify-end text-white transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-xs sm:text-sm font-medium text-primary-300 mb-1 sm:mb-2">{project.category}</span>
                  <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mb-1 sm:mb-2 leading-tight">{project.title}</h3>
                  <a
                    href={project.link}
                    className="inline-flex items-center text-primary-300 text-xs sm:text-sm mt-1 sm:mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:text-primary-200"
                  >
                    View Project <ExternalLink size={12} className="sm:w-3 sm:h-3 md:w-4 md:h-4 ml-1" />
                  </a>
                </div>
              </div>
              <div className="p-4 sm:p-5 md:p-6 lg:p-8">
                <p className="text-sm sm:text-base md:text-lg text-slate-600 mb-3 sm:mb-4 md:mb-5 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs sm:text-sm px-2 py-1 sm:px-3 sm:py-2 bg-slate-100 text-slate-700 rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-24">
          <a href="#" className="btn btn-secondary">
            <span className="hidden sm:inline">View All Projects</span>
            <span className="sm:hidden">View All</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;