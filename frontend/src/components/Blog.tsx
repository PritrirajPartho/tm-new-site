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
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary-500 opacity-5 rounded-full blur-3xl"></div>
      
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-6">
            <span className="gradient-text">Latest Insights</span>
          </h2>
          <p className="text-lg text-slate-600">
            Stay updated with our latest articles, industry insights, and technology trends to keep your knowledge sharp.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={post.id}
              className="blog-card card group overflow-hidden opacity-0"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-medium px-3 py-1 bg-primary-100 text-primary-700 rounded-full">
                    {post.category}
                  </span>
                  <div className="flex items-center text-slate-500 text-sm">
                    <Clock size={14} className="mr-1" />
                    {post.readTime}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary-700 transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-slate-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
                  <div className="flex items-center text-slate-500 text-sm">
                    <Calendar size={14} className="mr-1" />
                    {post.date}
                  </div>
                  <a
                    href={post.link}
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors duration-300"
                  >
                    Read More <ArrowRight size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#" className="btn btn-secondary">
            View All Articles
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;