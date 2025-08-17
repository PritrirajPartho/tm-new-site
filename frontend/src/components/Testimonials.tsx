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
    quote: 'TechMonohor transformed our outdated website into a powerful sales platform. Their expertise in web development and e-commerce solutions helped us increase our online sales by 200% within the first six months.',
    rating: 5,
    imageUrl: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: '2',
    name: 'Jennifer Lee',
    role: 'Marketing Director',
    company: 'InnovateTech',
    quote: 'Working with TechMonohor on our mobile app was an exceptional experience. They delivered a polished product on time and within budget, and were incredibly responsive throughout the development process.',
    rating: 5,
    imageUrl: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: '3',
    name: 'Robert Owens',
    role: 'CEO',
    company: 'HealthPlus',
    quote: 'TechMonohor built a custom healthcare platform that has revolutionized how we manage patient care. Their deep understanding of the healthcare industry and technical expertise made them the perfect partner.',
    rating: 5,
    imageUrl: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: '4',
    name: 'Sophia Martinez',
    role: 'Product Manager',
    company: 'RetailNow',
    quote: 'The e-commerce solution developed by TechMonohor has been a game-changer for our retail business. The platform is robust, secure, and provides an exceptional user experience for our customers.',
    rating: 4,
    imageUrl: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handlePrev = () => {
    if (animating) return;
    setAnimating(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    setTimeout(() => setAnimating(false), 300);
  };

  const handleNext = () => {
    if (animating) return;
    setAnimating(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
    setTimeout(() => setAnimating(false), 300);
  };

  const goToTestimonial = (index: number) => {
    if (animating || index === currentIndex) return;
    setAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setAnimating(false), 300);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="section-padding bg-gradient-to-br from-primary-900 to-primary-800 text-white relative opacity-0 overflow-hidden"
    >
      <div className="absolute -top-12 sm:-top-16 md:-top-20 lg:-top-24 xl:-top-32 -right-12 sm:-right-16 md:-right-20 lg:-right-24 xl:-right-32 size-responsive bg-white opacity-5 rounded-full blur-responsive"></div>
      
      <div className="container-custom">
        <div className="text-center max-w-2xl sm:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto mb-10 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24">
          <h2 className="mb-4 sm:mb-5 md:mb-6 lg:mb-8 text-white">
            Client <span className="text-primary-300">Testimonials</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-primary-100 leading-relaxed">
            Don't just take our word for it — here's what our clients have to say about our services and solutions.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Single Testimonial Card */}
          <div className="relative">
            <div
              key={currentTestimonial.id}
              className={`transition-all duration-300 ease-in-out ${
                animating ? 'opacity-50 scale-95' : 'opacity-100 scale-100'
              }`}
            >
              <div className="bg-primary-800/50 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 shadow-lg border border-primary-700/50">
                <div className="flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8 items-center md:items-start">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 rounded-full overflow-hidden flex-shrink-0 border-2 sm:border-3 md:border-4 border-primary-300">
                    <img
                      src={currentTestimonial.imageUrl}
                      alt={currentTestimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start mb-2 sm:mb-3 md:mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={`sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 ${
                            i < currentTestimonial.rating
                              ? 'text-yellow-400 fill-yellow-400'
                              : 'text-primary-700'
                          }`}
                        />
                      ))}
                    </div>
                    <blockquote className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-4 sm:mb-5 md:mb-6 lg:mb-8 text-primary-100 leading-relaxed">
                      "{currentTestimonial.quote}"
                    </blockquote>
                    <div>
                      <p className="text-white font-semibold text-base sm:text-lg md:text-xl lg:text-2xl">
                        {currentTestimonial.name}
                      </p>
                      <p className="text-primary-300 text-sm sm:text-base md:text-lg">
                        {currentTestimonial.role}, {currentTestimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation buttons */}
            <div className="flex justify-center mt-6 sm:mt-8 md:mt-10 lg:mt-12 space-x-2 sm:space-x-3">
              <button
                onClick={handlePrev}
                disabled={animating}
                className="p-2 sm:p-3 rounded-full bg-primary-700 hover:bg-primary-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300 hover:scale-110 active:scale-95"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </button>
              
              <div className="flex items-center space-x-1 sm:space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToTestimonial(index)}
                    disabled={animating}
                    className={`h-2 sm:h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'bg-primary-300 w-4 sm:w-6'
                        : 'bg-primary-700 hover:bg-primary-600 w-2 sm:w-3'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <button
                onClick={handleNext}
                disabled={animating}
                className="p-2 sm:p-3 rounded-full bg-primary-700 hover:bg-primary-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300 hover:scale-110 active:scale-95"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;