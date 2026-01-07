import React, { useEffect, useRef } from 'react';
import Section from './Section';
import { PERSONAL_INFO } from '../constants';
import { MapPin, Cat, GraduationCap, Scissors, Plane, Heart, Camera } from 'lucide-react';

const BentoAbout: React.FC = () => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const cards = gridRef.current?.getElementsByClassName('spotlight-card');
      if (!cards) return;

      for (const card of cards as any) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <Section id="about" title="The Personal Slice" subtitle="Where quantitative meets creative.">
      <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[minmax(200px,auto)]">
        
        {/* Main Bio Card */}
        <div className="md:col-span-2 md:row-span-2 spotlight-card bg-white rounded-[2.5rem] p-10 shadow-sm border border-slate-100 flex flex-col justify-between group transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
          <div className="relative z-10">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8 border border-blue-100 group-hover:scale-110 transition-transform">
              <Heart className="w-6 h-6 fill-current" />
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-6 tracking-tight">INFJ mind, <br/>Data heart.</h3>
            <p className="text-lg text-slate-500 leading-relaxed font-light mb-8">
              {PERSONAL_INFO.bio}
            </p>
          </div>
          <div className="relative z-10 flex flex-wrap gap-2">
            {PERSONAL_INFO.traits.map((trait, idx) => (
              <span key={idx} className="px-4 py-2 bg-slate-50 border border-slate-100 rounded-full text-slate-600 text-xs font-bold uppercase tracking-wider hover:bg-white hover:shadow-sm transition-all cursor-default">
                {trait.label}
              </span>
            ))}
          </div>
        </div>

        {/* Travels Card */}
        <div className="md:col-span-1 spotlight-card bg-slate-900 rounded-[2.5rem] p-8 text-white flex flex-col justify-between group transition-all duration-500 hover:shadow-xl">
          <div className="relative z-10">
            <div className="flex justify-between items-start mb-6">
              <Plane className="w-6 h-6 text-blue-400 group-hover:rotate-12 transition-transform" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Wanderlust</span>
            </div>
            <h4 className="text-xl font-bold mb-2">Traveling</h4>
            <p className="text-slate-400 text-sm leading-relaxed">Exploring new cultures and landscapes across the globe.</p>
          </div>
          <div className="relative z-10 mt-6 h-24 bg-slate-800 rounded-2xl border border-slate-700 flex flex-col items-center justify-center text-slate-500 overflow-hidden">
             <Camera className="w-5 h-5 mb-1 opacity-40" />
             <span className="text-[9px] uppercase tracking-tighter">Travel Gallery Placeholder</span>
             {/* <img src="..." className="absolute inset-0 object-cover opacity-60" /> */}
          </div>
        </div>

        {/* Cats Card */}
        <div className="md:col-span-1 spotlight-card bg-orange-50 rounded-[2.5rem] p-8 border border-orange-100 flex flex-col justify-between group transition-all duration-500 hover:shadow-xl">
           <div className="relative z-10">
            <div className="flex justify-between items-start mb-6">
              <Cat className="w-6 h-6 text-orange-600 group-hover:scale-125 transition-transform" />
              <div className="flex -space-x-2">
                <div className="w-6 h-6 rounded-full border-2 border-orange-50 bg-orange-200"></div>
                <div className="w-6 h-6 rounded-full border-2 border-orange-50 bg-orange-300"></div>
              </div>
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-2">My Two Cats</h4>
            <p className="text-orange-900/60 text-sm leading-relaxed">The real bosses of my NYC apartment.</p>
          </div>
          <div className="relative z-10 grid grid-cols-2 gap-2 mt-6">
            <div className="aspect-square bg-white/50 rounded-xl border border-orange-200/50 flex items-center justify-center text-[10px] text-orange-400">CAT 1</div>
            <div className="aspect-square bg-white/50 rounded-xl border border-orange-200/50 flex items-center justify-center text-[10px] text-orange-400">CAT 2</div>
          </div>
        </div>

        {/* Hand Crafting Card */}
        <div className="md:col-span-1 spotlight-card bg-pink-50 rounded-[2.5rem] p-8 border border-pink-100 group transition-all duration-500 hover:shadow-xl">
           <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <Scissors className="w-6 h-6 text-pink-500 mb-6 group-hover:rotate-45 transition-transform" />
                <h4 className="text-xl font-bold text-slate-900 mb-2">Hand Crafting</h4>
                <p className="text-pink-900/60 text-sm leading-relaxed">Finding tranquility in physical creation.</p>
              </div>
              <div className="mt-4 h-16 bg-white/50 rounded-xl border border-pink-200/50 flex items-center justify-center text-[10px] text-pink-400 font-bold tracking-widest uppercase">
                Craft Photo
              </div>
           </div>
        </div>

        {/* Location Card */}
        <div className="md:col-span-1 spotlight-card bg-white rounded-[2.5rem] p-8 border border-slate-100 transition-all duration-500 hover:shadow-xl group">
          <div className="relative z-10 flex flex-col h-full justify-between">
            <MapPin className="w-6 h-6 text-red-500 mb-6 group-hover:animate-bounce" />
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Current Base</span>
              <h4 className="text-2xl font-bold text-slate-900">{PERSONAL_INFO.location}</h4>
            </div>
          </div>
        </div>

        {/* Education Highlight */}
        <div className="md:col-span-2 spotlight-card bg-slate-900 rounded-[2.5rem] p-8 text-white relative overflow-hidden group transition-all duration-500 hover:shadow-2xl">
          <div className="absolute right-[-20px] top-[-20px] w-48 h-48 bg-blue-600/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
          <div className="relative z-10 flex items-center gap-8 h-full">
            <div className="w-20 h-20 bg-white/10 apple-blur rounded-[1.5rem] flex items-center justify-center border border-white/10 shrink-0">
              <GraduationCap className="w-10 h-10 text-blue-400" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400 mb-2 block">Top Academic Rank</span>
              <h4 className="text-2xl font-bold mb-1">Columbia University</h4>
              <p className="text-slate-400 text-sm">MA Quantitative Methods • GPA 4.0</p>
            </div>
          </div>
        </div>

      </div>
    </Section>
  );
};

export default BentoAbout;