import React, { useEffect, useRef } from 'react';
import { Globe, Smartphone, Server, Database, Cloud, Shield, LineChart, Cpu } from 'lucide-react';

const services = [
  {
    id: 'web',
    title: 'Web Development',
    description: 'Custom websites and web applications using modern technologies like React, Angular, and Vue.js.',
    icon: <Globe className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-primary-600" />,
    technologies: ['React', 'Angular', 'Vue', 'Node.js', 'Django', 'Laravel'],
  },
  {
    id: 'mobile',
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications for iOS and Android using React Native and Flutter.',
    icon: <Smartphone className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-primary-600" />,
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'iOS', 'Android'],
  },
  {
    id: 'backend',
    title: 'Backend Services',
    description: 'Robust and scalable backend solutions using Node.js, Python, and Java to power your applications.',
    icon: <Server className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-primary-600" />,
    technologies: ['Node.js', 'Express', 'Django', 'Spring Boot', 'GraphQL', 'REST API'],
  },
  {
    id: 'database',
    title: 'Database Design',
    description: 'Efficient database architectures using SQL and NoSQL solutions optimized for your specific needs.',
    icon: <Database className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-primary-600" />,
    technologies: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase', 'Redis', 'Elasticsearch'],
  },
  {
    id: 'cloud',
    title: 'Cloud Services',
    description: 'Expert deployment and management of applications on AWS, Google Cloud, and Azure.',
    icon: <Cloud className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-primary-600" />,
    technologies: ['AWS', 'Google Cloud', 'Azure', 'Docker', 'Kubernetes', 'Serverless'],
  },
  {
    id: 'security',
    title: 'Security Solutions',
    description: 'Implementation of robust security measures to protect your applications and data.',
    icon: <Shield className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-primary-600" />,
    technologies: ['OAuth', 'JWT', 'Encryption', 'HTTPS', 'Penetration Testing', 'Compliance'],
  },
  {
    id: 'ai',
    title: 'AI & Machine Learning',
    description: 'Integration of AI and machine learning capabilities to make your applications smarter.',
    icon: <Cpu className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-primary-600" />,
    technologies: ['TensorFlow', 'PyTorch', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
  },
  {
    id: 'analytics',
    title: 'Analytics & Reporting',
    description: 'Implementation of analytics solutions to track performance and user behavior.',
    icon: <LineChart className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-primary-600" />,
    technologies: ['Google Analytics', 'Custom Dashboards', 'Data Visualization', 'Real-time Analytics', 'Business Intelligence'],
  },
];

const Services: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = document.querySelectorAll('.service-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate-fade-in');
              }, index * 100);
            });
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
    <section id="services" ref={sectionRef} className="section-padding bg-white relative">
      <div className="absolute -top-12 sm:-top-16 md:-top-20 lg:-top-24 xl:-top-32 left-1/2 transform -translate-x-1/2 size-responsive bg-primary-500 opacity-5 rounded-full blur-responsive"></div>
      
      <div className="container-custom">
        <div className="text-center max-w-2xl sm:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          <h2 className="mb-4 sm:mb-5 md:mb-6 lg:mb-8">
            <span className="gradient-text">Our Services</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-600 leading-relaxed">
            We offer a wide range of IT services to help businesses grow and succeed in the digital world. Our expert team delivers customized solutions to meet your specific needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="service-card card p-4 sm:p-5 md:p-6 lg:p-8 opacity-0 hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="p-2 sm:p-3 md:p-4 bg-primary-50 rounded-lg inline-block mb-3 sm:mb-4 md:mb-5 lg:mb-6">
                {service.icon}
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-2 sm:mb-3 md:mb-4 text-slate-900">{service.title}</h3>
              <p className="text-sm sm:text-base md:text-lg text-slate-600 mb-3 sm:mb-4 md:mb-5 leading-relaxed">{service.description}</p>
              <div className="mt-auto">
                <div className="flex flex-wrap gap-1 sm:gap-2 mt-3 sm:mt-4">
                  {service.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs sm:text-sm px-2 py-1 sm:px-3 sm:py-2 bg-slate-100 text-slate-700 rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {service.technologies.length > 3 && (
                    <span className="text-xs sm:text-sm px-2 py-1 sm:px-3 sm:py-2 bg-slate-100 text-slate-700 rounded-full font-medium">
                      +{service.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;