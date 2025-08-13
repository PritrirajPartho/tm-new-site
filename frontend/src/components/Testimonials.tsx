import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  imageUrl: string;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'David Wilson',
    role: 'CTO',
    company: 'Acme Industries',
    quote: 'TechMonohorIT transformed our outdated website into a powerful sales platform. Their expertise in web development and e-commerce solutions helped us increase our online sales by 200% within the first six months.',
    rating: 5,
    imageUrl: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: '2',
    name: 'Jennifer Lee',
    role: 'Marketing Director',
    company: 'InnovateTech',
    quote: 'Working with TechMonohorIT on our mobile app was an exceptional experience. They delivered a polished product on time and within budget, and were incredibly responsive throughout the development process.',
    rating: 5,
    imageUrl: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: '3',
    name: 'Robert Owens',
    role: 'CEO',
    company: 'HealthPlus',
    quote: 'TechMonohorIT built a custom healthcare platform that has revolutionized how we manage patient care. Their deep understanding of the healthcare industry and technical expertise made them the perfect partner.',
    rating: 5,
    imageUrl: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: '4',
    name: 'Sophia Martinez',
    role: 'Product Manager',
    company: 'RetailNow',
    quote: 'The e-commerce solution developed by TechMonohorIT has been a game-changer for our retail business. The platform is robust, secure, and provides an exceptional user experience for our customers.',
    rating: 4,
    imageUrl: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const testimonialRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    testimonialRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      testimonialRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const handlePrev = () => {
    if (animating) return;
    setAnimating(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    setTimeout(() => setAnimating(false), 500);
  };

  const handleNext = () => {
    if (animating) return;
    setAnimating(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
    setTimeout(() => setAnimating(false), 500);
  };

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="section-padding bg-gradient-to-br from-primary-900 to-primary-800 text-white relative opacity-0"
    >
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl"></div>
      
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-6 text-white">
            Client <span className="text-primary-300">Testimonials</span>
          </h2>
          <p className="text-lg text-primary-100">
            Don't just take our word for it — here's what our clients have to say about our services and solutions.
          </p>
        </div>

        <div className="relative">
          <div
            className={`flex transition-all duration-500 ease-in-out ${
              animating ? 'opacity-50' : 'opacity-100'
            }`}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                ref={(el) => (testimonialRefs.current[index] = el)}
                className="min-w-full opacity-0"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="bg-primary-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-10 max-w-4xl mx-auto shadow-lg border border-primary-700/50">
                  <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden flex-shrink-0 border-4 border-primary-300">
                      <img
                        src={testimonial.imageUrl}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={20}
                            className={`${
                              i < testimonial.rating
                                ? 'text-yellow-400 fill-yellow-400'
                                : 'text-primary-700'
                            }`}
                          />
                        ))}
                      </div>
                      <blockquote className="text-lg md:text-xl mb-6 text-primary-100 leading-relaxed">
                        "{testimonial.quote}"
                      </blockquote>
                      <div>
                        <p className="text-white font-semibold text-lg">
                          {testimonial.name}
                        </p>
                        <p className="text-primary-300">
                          {testimonial.role}, {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-center mt-8 space-x-2">
            <button
              onClick={handlePrev}
              className="p-2 rounded-full bg-primary-700 hover:bg-primary-600 transition-colors duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <div className="flex items-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (animating) return;
                    setAnimating(true);
                    setCurrentIndex(index);
                    setTimeout(() => setAnimating(false), 500);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-primary-300 w-6'
                      : 'bg-primary-700 hover:bg-primary-600'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={handleNext}
              className="p-2 rounded-full bg-primary-700 hover:bg-primary-600 transition-colors duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;