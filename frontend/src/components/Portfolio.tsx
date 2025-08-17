import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import vision from '../../dist/assets/vision.png';

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
    title: 'Home Builder',
    category: 'Web Development',
    description: 'A comprehensive Home builder solution for modern home/house, mall or resort.',
    technologies: ['HTML5', 'CSS3', 'Javascript', 'JQuery'],
    imageUrl: "/images/vision.png",
    link: 'https://luxury-macaron-30e224.netlify.app/',
  },
  {
    id: '2',
    title: 'Healthcare Database',
    category: 'Web Development',
    description: 'Student aided database for a school can build better mangament system.',
    technologies: ['Javascript', 'Firebase', 'Node.js', 'MongoDB'],
    imageUrl: '/images/school.jpg',
    link: '#',
  },
  {
    id: '3',
    title: 'Content Retail Management',
    category: 'Web Development',
    description: 'web contents management platform with listing management, tenant screening, and financial reporting.',
    technologies: ['Next.js', 'Javascript', 'PostgreSQL'],
    imageUrl: '/images/crm.jpg',
    link: '#',
  },
  {
    id: '4',
    title: 'portfolio Site',
    category: 'Web Development',
    description: 'An interactive portfolio site for selling.',
    technologies: ['Javascript', 'React.js', 'Tailwind.css'],
    imageUrl: '/images/tech.jpg',
    link: '#',
  },
  {
    id: '5',
    title: 'Drawing App',
    category: 'Web & Mobile',
    description: 'A Drawing Related app. any kid can draw here and can do courses here.',
    technologies: ['React', 'React Native', 'Node.js', 'MongoDB'],
    imageUrl: '/images/glossy.png',
    link: '#',
  },
  {
    id: '6',
    title: 'Food web app',
    category: 'Web Development',
    description: 'A food E-commerece website for food buying.',
    technologies: ['React.js', 'Tailwind.css', 'MongoDB'],
    imageUrl: '/images/dish.png',
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
      <div className="absolute -bottom-24 right-1/4 w-96 h-96 bg-secondary-500 opacity-5 rounded-full blur-3xl"></div>
      
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="mb-6">
            <span className="gradient-text">Our Portfolio</span>
          </h2>
          <p className="text-lg text-slate-600">
            Explore our recent projects that showcase our expertise in creating innovative digital solutions for our clients.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12 overflow-x-auto pb-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-primary-600 text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`card group overflow-hidden transition-all duration-500 ${
                animateProjects ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-6 flex flex-col justify-end text-white transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-sm font-medium text-primary-300 mb-2">{project.category}</span>
                  <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                  <a
                    href={project.link}
                    className="inline-flex items-center text-primary-300 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    View Project <ExternalLink size={14} className="ml-1" />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <p className="text-slate-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 bg-slate-100 text-slate-700 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#" className="btn btn-secondary">
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;