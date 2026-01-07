import React, { useEffect, useRef } from 'react';
import { PERSONAL_INFO } from '../constants';
import { ChevronDown, Linkedin, Mail, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 20;
      const y = (clientY / window.innerHeight - 0.5) * 20;
      containerRef.current.style.setProperty('--move-x', `${x}px`);
      containerRef.current.style.setProperty('--move-y', `${y}px`);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="min-h-[100vh] flex flex-col justify-center relative overflow-hidden bg-[#fbfbfd]">
      {/* Dynamic Background elements */}
      <div className="absolute top-[-10%] left-[-5%] w-[50%] h-[50%] bg-blue-100/40 rounded-full mix-blend-multiply filter blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-indigo-100/40 rounded-full mix-blend-multiply filter blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full z-10 pt-20">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="flex-1 text-center lg:text-left translate-y-[-20px] opacity-0 animate-[reveal_1s_ease-out_forwards]">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 font-bold text-xs uppercase tracking-widest mb-8 border border-blue-100 shadow-sm">
              <Sparkles className="w-3 h-3" />
              New York Based Data Analyst
            </div>
            
            <h1 className="text-6xl md:text-[5.5rem] font-bold tracking-tight text-slate-900 mb-8 leading-[1]">
              Crafting stories from <br/>
              <span className="gradient-text">complex data.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-500 font-light leading-relaxed max-w-2xl mb-12">
              Tian Xu. Quantitative researcher and AI enthusiast turning numbers into high-impact human experiences.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a 
                href={`mailto:${PERSONAL_INFO.email}`}
                className="group relative px-10 py-5 bg-slate-900 text-white rounded-full font-bold transition-all hover:bg-slate-800 hover:scale-105 active:scale-95 shadow-2xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="relative z-10 flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  Say Hello
                </span>
              </a>
              <a 
                href={`https://${PERSONAL_INFO.linkedin}`}
                target="_blank"
                rel="noreferrer"
                className="group px-10 py-5 bg-white border border-slate-200 rounded-full font-bold text-slate-900 transition-all hover:bg-slate-50 hover:border-slate-300 hover:scale-105 active:scale-95 shadow-sm"
              >
                <span className="flex items-center gap-2">
                  <Linkedin className="w-5 h-5 group-hover:text-blue-600 transition-colors" />
                  LinkedIn
                </span>
              </a>
            </div>
          </div>

          <div className="relative group w-full max-w-[500px] lg:max-w-none lg:w-[40%] aspect-square animate-float">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-[3rem] blur-2xl group-hover:opacity-60 transition-opacity"></div>
            <div className="relative w-full h-full bg-white rounded-[3rem] border border-white/50 shadow-2xl overflow-hidden flex flex-col items-center justify-center">
              {/* Photo Placeholder */}
              <div className="w-48 h-48 bg-slate-100 rounded-full flex items-center justify-center text-6xl shadow-inner border-4 border-white mb-6">
                🧑🏻‍💻
              </div>
              <div className="text-center px-10">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Tian Xu</h3>
                <p className="text-slate-400 text-sm font-medium uppercase tracking-widest">Profile Image Placeholder</p>
                <div className="mt-6 flex justify-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <div className="w-2 h-2 rounded-full bg-slate-200"></div>
                  <div className="w-2 h-2 rounded-full bg-slate-200"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-slate-300">
        <span className="text-[10px] font-bold uppercase tracking-widest">Scroll</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </div>
    </div>
  );
};

export default Hero;