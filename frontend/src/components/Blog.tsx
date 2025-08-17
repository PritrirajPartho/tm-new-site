import React, { useEffect, useRef } from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  imageUrl: string;
  link: string;
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of Web Development: Trends to Watch in 2025',
    excerpt: 'Explore the latest trends shaping the future of web development and how they will impact businesses.',
    date: 'May 15, 2025',
    readTime: '6 min read',
    category: 'Web Development',
    imageUrl: 'https://images.pexels.com/photos/1181373/pexels-photo-1181373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    link: '#',
  },
  {
    id: '2',
    title: 'Building Scalable Mobile Applications with React Native',
    excerpt: 'Learn how to build scalable mobile applications using React Native and best practices for performance.',
    date: 'April 28, 2025',
    readTime: '8 min read',
    category: 'Mobile Development',
    imageUrl: 'https://images.pexels.com/photos/13861/IMG_3496bfree.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    link: '#',
  },
  {
    id: '3',
    title: 'How AI is Transforming Software Development',
    excerpt: 'Discover how artificial intelligence is changing the way we build software and enhancing developer productivity.',
    date: 'April 10, 2025',
    readTime: '5 min read',
    category: 'AI & Technology',
    imageUrl: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    link: '#',
  },
];

const Blog: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = document.querySelectorAll('.blog-card');
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
    <section id="blog" ref={sectionRef} className="section-padding bg-slate-50 relative">
      <div className="absolute -bottom-12 sm:-bottom-16 md:-bottom-20 lg:-bottom-24 xl:-bottom-32 -left-12 sm:-left-16 md:-left-20 lg:-left-24 xl:-left-32 size-responsive bg-secondary-500 opacity-5 rounded-full blur-responsive"></div>
      
      <div className="container-custom">
        <div className="text-center max-w-2xl sm:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto mb-10 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24">
          <h2 className="mb-4 sm:mb-5 md:mb-6 lg:mb-8">
            <span className="gradient-text">Latest Insights</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-600 leading-relaxed">
            Stay updated with our latest articles, industry insights, and technology trends to keep your knowledge sharp.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12">
          {blogPosts.map((post, index) => (
            <div
              key={post.id}
              className="blog-card card group overflow-hidden opacity-0 hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="h-40 sm:h-48 md:h-56 lg:h-64 overflow-hidden">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-4 sm:p-5 md:p-6 lg:p-8">
                <div className="flex items-center justify-between mb-3 sm:mb-4 md:mb-5">
                  <span className="text-xs sm:text-sm font-medium px-2 py-1 sm:px-3 sm:py-2 bg-primary-100 text-primary-700 rounded-full">
                    {post.category}
                  </span>
                  <div className="flex items-center text-slate-500 text-xs sm:text-sm">
                    <Clock size={12} className="sm:w-3 sm:h-3 md:w-4 md:h-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mb-2 sm:mb-3 md:mb-4 group-hover:text-primary-700 transition-colors duration-300 leading-tight">
                  {post.title}
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-slate-600 mb-3 sm:mb-4 md:mb-5 leading-relaxed">{post.excerpt}</p>
                <div className="flex items-center justify-between mt-auto pt-3 sm:pt-4 border-t border-slate-100">
                  <div className="flex items-center text-slate-500 text-xs sm:text-sm">
                    <Calendar size={12} className="sm:w-3 sm:h-3 md:w-4 md:h-4 mr-1" />
                    {post.date}
                  </div>
                  <a
                    href={post.link}
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors duration-300 text-xs sm:text-sm md:text-base"
                  >
                    <span className="hidden sm:inline">Read More</span>
                    <span className="sm:hidden">Read</span>
                    <ArrowRight size={12} className="sm:w-3 sm:h-3 md:w-4 md:h-4 ml-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-24">
          <a href="#" className="btn btn-secondary">
            <span className="hidden sm:inline">View All Articles</span>
            <span className="sm:hidden">All Articles</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;