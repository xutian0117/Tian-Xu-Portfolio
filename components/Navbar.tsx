import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <nav className={`
        pointer-events-auto transition-all duration-500 ease-in-out px-4 py-2 rounded-full border border-white/20
        ${scrolled ? 'bg-white/80 apple-blur shadow-2xl scale-100' : 'bg-transparent scale-105'}
      `}>
        <div className="flex items-center gap-1 md:gap-4">
          <div 
            className="px-4 py-2 text-sm font-bold text-slate-900 cursor-pointer hidden md:block border-r border-slate-200/50 mr-2"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            {PERSONAL_INFO.name}
          </div>
          
          {['About', 'Experience', 'Skills', 'Work'].map((item) => (
            <button 
              key={item}
              onClick={() => scrollTo(item.toLowerCase())}
              className="px-4 py-2 text-xs md:text-sm font-medium text-slate-600 hover:text-blue-600 hover:bg-blue-50/50 rounded-full transition-all"
            >
              {item}
            </button>
          ))}
          
          <a 
            href={`mailto:${PERSONAL_INFO.email}`} 
            className="ml-2 px-5 py-2 bg-slate-900 text-white rounded-full text-xs md:text-sm font-semibold hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/20 transition-all active:scale-95"
          >
            Connect
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;