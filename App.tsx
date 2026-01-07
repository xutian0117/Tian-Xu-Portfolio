import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BentoAbout from './components/BentoAbout';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

const App: React.FC = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('section, .reveal');
    sections.forEach(section => {
      section.classList.add('reveal');
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#fbfbfd] selection:bg-blue-600 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <div className="space-y-24 pb-24">
          <BentoAbout />
          <Experience />
          <Skills />
          <Projects />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;