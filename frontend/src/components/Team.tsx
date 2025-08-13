import React, { useEffect, useRef } from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  socialLinks: {
    linkedin?: string;
    github?: string;
    twitter?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Alex Johnson',
    role: 'CEO & Founder',
    bio: 'With over 15 years of experience in software development and business leadership, Alex leads our company vision and strategy.',
    imageUrl: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    socialLinks: {
      linkedin: '#',
      github: '#',
      twitter: '#',
    },
  },
  {
    id: '2',
    name: 'Sarah Chen',
    role: 'CTO',
    bio: 'Sarah oversees our technical strategy and ensures we stay at the forefront of technology innovation.',
    imageUrl: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    socialLinks: {
      linkedin: '#',
      github: '#',
      twitter: '#',
    },
  },
  {
    id: '3',
    name: 'Michael Patel',
    role: 'Lead Developer',
    bio: 'Michael leads our development team and specializes in building scalable backend solutions and cloud architecture.',
    imageUrl: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    socialLinks: {
      linkedin: '#',
      github: '#',
    },
  },
  {
    id: '4',
    name: 'Emma Rodriguez',
    role: 'UX/UI Designer',
    bio: 'Emma brings creativity and user focus to our projects, ensuring exceptional user experiences and visual designs.',
    imageUrl: 'https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    socialLinks: {
      linkedin: '#',
      twitter: '#',
    },
  },
];

const Team: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = document.querySelectorAll('.team-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate-slide-up');
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
    <section id="team" ref={sectionRef} className="section-padding bg-white relative">
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary-500 opacity-5 rounded-full blur-3xl"></div>
      
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-6">
            <span className="gradient-text">Meet Our Team</span>
          </h2>
          <p className="text-lg text-slate-600">
            Our team of experts is passionate about technology and committed to delivering exceptional results for our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className="team-card card overflow-hidden opacity-0"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative group">
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-full h-72 object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 w-full">
                    <div className="flex justify-center space-x-4">
                      {member.socialLinks.linkedin && (
                        <a
                          href={member.socialLinks.linkedin}
                          className="text-white hover:text-primary-400 transition-colors duration-300"
                          aria-label={`${member.name}'s LinkedIn`}
                        >
                          <Linkedin size={20} />
                        </a>
                      )}
                      {member.socialLinks.github && (
                        <a
                          href={member.socialLinks.github}
                          className="text-white hover:text-primary-400 transition-colors duration-300"
                          aria-label={`${member.name}'s GitHub`}
                        >
                          <Github size={20} />
                        </a>
                      )}
                      {member.socialLinks.twitter && (
                        <a
                          href={member.socialLinks.twitter}
                          className="text-white hover:text-primary-400 transition-colors duration-300"
                          aria-label={`${member.name}'s Twitter`}
                        >
                          <Twitter size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-primary-600 font-medium mb-3">{member.role}</p>
                <p className="text-slate-600">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="mb-6 text-lg text-slate-600">
            Want to join our team of talented professionals?
          </p>
          <a href="#careers" className="btn btn-secondary">
            View Open Positions
          </a>
        </div>
      </div>
    </section>
  );
};

export default Team;