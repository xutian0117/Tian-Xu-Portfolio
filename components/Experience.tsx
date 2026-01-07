import React from 'react';
import Section from './Section';
import { EXPERIENCE } from '../constants';

const Experience: React.FC = () => {
  return (
    <Section id="experience" title="Experience" subtitle="My professional journey so far.">
      <div className="space-y-12">
        {EXPERIENCE.map((exp, index) => (
          <div key={index} className="group flex flex-col md:flex-row gap-4 md:gap-12 items-start">
            <div className="md:w-1/4 flex-shrink-0">
               <span className="inline-block py-1 px-3 rounded-md bg-slate-100 text-slate-600 text-sm font-semibold mb-2">
                 {exp.period}
               </span>
               <div className="text-slate-500 text-sm flex items-center gap-1 mt-1">
                 {exp.location}
               </div>
            </div>
            <div className="flex-1 pb-12 border-b border-slate-100 last:border-0 relative">
                <div className="absolute -left-[3.25rem] top-1.5 w-3 h-3 rounded-full bg-slate-300 group-hover:bg-blue-600 transition-colors hidden md:block"></div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-1">{exp.company}</h3>
                <h4 className="text-lg font-medium text-blue-600 mb-6">{exp.role}</h4>
                
                <ul className="space-y-3">
                  {exp.achievements.map((item, i) => (
                    <li key={i} className="text-slate-600 leading-relaxed pl-4 border-l-2 border-slate-100 group-hover:border-blue-200 transition-colors">
                      {item}
                    </li>
                  ))}
                </ul>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;