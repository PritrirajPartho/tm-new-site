import React, { useEffect, useRef } from 'react';
import { Globe, Smartphone, Server, Database, Cloud, Shield, LineChart, Cpu } from 'lucide-react';

const services = [
  {
    id: 'web',
    title: 'Web Development',
    description: 'Custom websites and web applications using modern technologies like React, Angular, and Vue.js.',
    icon: <Globe className="w-6 h-6 text-primary-600" />,
    technologies: ['React', 'Angular', 'Vue', 'Node.js', 'Django', 'Laravel'],
  },
  {
    id: 'mobile',
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications for iOS and Android using React Native and Flutter.',
    icon: <Smartphone className="w-6 h-6 text-primary-600" />,
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'iOS', 'Android'],
  },
  {
    id: 'backend',
    title: 'Backend Services',
    description: 'Robust and scalable backend solutions using Node.js, Python, and Java to power your applications.',
    icon: <Server className="w-6 h-6 text-primary-600" />,
    technologies: ['Node.js', 'Express', 'Django', 'Spring Boot', 'GraphQL', 'REST API'],
  },
  {
    id: 'database',
    title: 'Database Design',
    description: 'Efficient database architectures using SQL and NoSQL solutions optimized for your specific needs.',
    icon: <Database className="w-6 h-6 text-primary-600" />,
    technologies: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase', 'Redis', 'Elasticsearch'],
  },
  {
    id: 'cloud',
    title: 'Cloud Services',
    description: 'Expert deployment and management of applications on AWS, Google Cloud, and Azure.',
    icon: <Cloud className="w-6 h-6 text-primary-600" />,
    technologies: ['AWS', 'Google Cloud', 'Azure', 'Docker', 'Kubernetes', 'Serverless'],
  },
  {
    id: 'security',
    title: 'Security Solutions',
    description: 'Implementation of robust security measures to protect your applications and data.',
    icon: <Shield className="w-6 h-6 text-primary-600" />,
    technologies: ['OAuth', 'JWT', 'Encryption', 'HTTPS', 'Penetration Testing', 'Compliance'],
  },
  {
    id: 'ai',
    title: 'AI & Machine Learning',
    description: 'Integration of AI and machine learning capabilities to make your applications smarter.',
    icon: <Cpu className="w-6 h-6 text-primary-600" />,
    technologies: ['TensorFlow', 'PyTorch', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
  },
  {
    id: 'analytics',
    title: 'Analytics & Reporting',
    description: 'Implementation of analytics solutions to track performance and user behavior.',
    icon: <LineChart className="w-6 h-6 text-primary-600" />,
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
      <div className="absolute -top-24 left-1/2 w-96 h-96 bg-primary-500 opacity-5 rounded-full blur-3xl"></div>
      
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-6">
            <span className="gradient-text">Our Services</span>
          </h2>
          <p className="text-lg text-slate-600">
            We offer a wide range of IT services to help businesses grow and succeed in the digital world. Our expert team delivers customized solutions to meet your specific needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="service-card card p-6 opacity-0"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="p-3 bg-primary-50 rounded-lg inline-block mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-slate-600 mb-4">{service.description}</p>
              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mt-4">
                  {service.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 bg-slate-100 text-slate-700 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {service.technologies.length > 3 && (
                    <span className="text-xs px-2 py-1 bg-slate-100 text-slate-700 rounded-full">
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