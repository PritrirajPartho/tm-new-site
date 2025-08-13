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
      <div className="absolute -top-24 right-1/3 w-96 h-96 bg-secondary-500 opacity-5 rounded-full blur-3xl"></div>
      
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-6">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-lg text-slate-600">
            Have a project in mind or want to learn more about our services? Reach out to us and let's discuss how we can help your business grow.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary-50 p-3 rounded-lg mr-4">
                    <Phone className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 mb-1">Call Us</p>
                    <p className="text-lg font-medium">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-50 p-3 rounded-lg mr-4">
                    <Mail className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 mb-1">Email Us</p>
                    <p className="text-lg font-medium">info@TechMonohorIT.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-50 p-3 rounded-lg mr-4">
                    <MapPin className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 mb-1">Our Location</p>
                    <p className="text-lg font-medium">Sylhet, Bangladesh</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-medium mb-4">Business Hours</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Monday - Friday:</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Saturday:</span>
                    <span className="font-medium">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Sunday:</span>
                    <span className="font-medium">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-6">Send Us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-300 focus:border-primary-500 outline-none transition-all duration-300"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-300 focus:border-primary-500 outline-none transition-all duration-300"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-300 focus:border-primary-500 outline-none transition-all duration-300"
                      placeholder="Enter your phone"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-300 focus:border-primary-500 outline-none transition-all duration-300"
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
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-300 focus:border-primary-500 outline-none transition-all duration-300"
                    placeholder="Tell us about your project..."
                    required
                  ></textarea>
                </div>
                
                <div>
                  <button
                    type="submit"
                    className="btn btn-primary w-full md:w-auto"
                  >
                    Send Message
                    <Send size={16} className="ml-2" />
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