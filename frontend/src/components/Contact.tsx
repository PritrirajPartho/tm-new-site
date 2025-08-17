import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
    alert('Thanks for contacting us! We will get back to you soon.');
  };

  return (
    <section id="contact" className="section-padding bg-white relative">
      <div className="absolute -top-12 sm:-top-16 md:-top-20 lg:-top-24 xl:-top-32 right-1/3 size-responsive bg-secondary-500 opacity-5 rounded-full blur-responsive"></div>
      
      <div className="container-custom">
        <div className="text-center max-w-2xl sm:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto mb-10 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24">
          <h2 className="mb-4 sm:mb-5 md:mb-6 lg:mb-8">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-600 leading-relaxed">
            Have a project in mind or want to learn more about our services? Reach out to us and let's discuss how we can help your business grow.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12">
          <div className="lg:col-span-2 space-y-4 sm:space-y-6">
            <div className="card p-4 sm:p-5 md:p-6 lg:p-8">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-5 md:mb-6 lg:mb-8">Contact Information</h3>
              
              <div className="space-y-4 sm:space-y-5 md:space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary-50 p-2 sm:p-3 md:p-4 rounded-lg mr-3 sm:mr-4 flex-shrink-0">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary-600" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-slate-500 mb-1">Call Us</p>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl font-medium">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-50 p-2 sm:p-3 md:p-4 rounded-lg mr-3 sm:mr-4 flex-shrink-0">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary-600" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-slate-500 mb-1">Email Us</p>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl font-medium">techmonohor.it@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-50 p-2 sm:p-3 md:p-4 rounded-lg mr-3 sm:mr-4 flex-shrink-0">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary-600" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-slate-500 mb-1">Our Location</p>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl font-medium">Dhaka, Bangladesh</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 sm:mt-8 md:mt-10">
                <h4 className="text-base sm:text-lg md:text-xl font-medium mb-3 sm:mb-4">Business Hours</h4>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm sm:text-base">
                    <span className="text-slate-600">Monday - Friday:</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between text-sm sm:text-base">
                    <span className="text-slate-600">Saturday:</span>
                    <span className="font-medium">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between text-sm sm:text-base">
                    <span className="text-slate-600">Sunday:</span>
                    <span className="font-medium">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <div className="card p-4 sm:p-5 md:p-6 lg:p-8">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-5 md:mb-6 lg:mb-8">Send Us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 md:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-slate-700 mb-1 sm:mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 py-2 sm:px-4 sm:py-3 md:px-5 md:py-4 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-300 focus:border-primary-500 outline-none transition-all duration-300 text-sm sm:text-base"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-slate-700 mb-1 sm:mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2 sm:px-4 sm:py-3 md:px-5 md:py-4 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-300 focus:border-primary-500 outline-none transition-all duration-300 text-sm sm:text-base"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-xs sm:text-sm font-medium text-slate-700 mb-1 sm:mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 py-2 sm:px-4 sm:py-3 md:px-5 md:py-4 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-300 focus:border-primary-500 outline-none transition-all duration-300 text-sm sm:text-base"
                      placeholder="Enter your phone"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-xs sm:text-sm font-medium text-slate-700 mb-1 sm:mb-2">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-3 py-2 sm:px-4 sm:py-3 md:px-5 md:py-4 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-300 focus:border-primary-500 outline-none transition-all duration-300 text-sm sm:text-base"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="Web Development">Web Development</option>
                      <option value="Mobile App">Mobile App</option>
                      <option value="Custom Software">Custom Software</option>
                      <option value="Consulting">Consulting</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-slate-700 mb-1 sm:mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 md:px-5 md:py-4 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-300 focus:border-primary-500 outline-none transition-all duration-300 text-sm sm:text-base resize-vertical"
                    placeholder="Tell us about your project..."
                    required
                  ></textarea>
                </div>
                
                <div>
                  <button
                    type="submit"
                    className="btn btn-primary w-full md:w-auto justify-center"
                  >
                    <span className="hidden sm:inline">Send Message</span>
                    <span className="sm:hidden">Send</span>
                    <Send size={14} className="sm:w-4 sm:h-4 md:w-5 md:h-5 ml-2" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;