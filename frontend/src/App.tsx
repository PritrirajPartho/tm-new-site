import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Blog from './components/Blog';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Header />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Team />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;