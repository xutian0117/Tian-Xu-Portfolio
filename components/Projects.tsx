import React from 'react';
import Section from './Section';
import { PUBLICATIONS, PROJECTS } from '../constants';
import { BookOpen, ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <Section id="work" title="Research & Projects" subtitle="Academic contributions and independent work.">
      
      {/* Projects Grid */}
      <h3 className="text-2xl font-bold text-slate-900 mb-8 mt-4">Selected Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        {PROJECTS.map((proj, i) => (
          <div key={i} className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-lg transition-all duration-300 flex flex-col h-full">
            <div className="text-xs font-bold tracking-wider text-blue-600 uppercase mb-2">{proj.period}</div>
            <h4 className="text-xl font-bold text-slate-900 mb-2">{proj.title}</h4>
            <p className="text-sm font-medium text-slate-500 mb-4">{proj.role}</p>
            <p className="text-slate-600 text-sm leading-relaxed flex-grow">
              {proj.description}
            </p>
          </div>
        ))}
      </div>

      {/* Publications List */}
      <h3 className="text-2xl font-bold text-slate-900 mb-8">Publications</h3>
      <div className="space-y-4">
        {PUBLICATIONS.map((pub, i) => (
          <div key={i} className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100 flex flex-col md:flex-row gap-6 items-start hover:bg-slate-50 transition-colors">
            <div className="flex-shrink-0 mt-1">
                <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-600">
                    <BookOpen className="w-5 h-5" />
                </div>
            </div>
            <div className="flex-grow">
                <h4 className="text-lg font-bold text-slate-900 leading-snug mb-2">{pub.title}</h4>
                <p className="text-slate-600 text-sm mb-3">{pub.description}</p>
                {pub.doi && (
                    <div className="inline-flex items-center text-xs font-mono text-slate-400 bg-slate-50 px-2 py-1 rounded">
                        DOI: {pub.doi}
                    </div>
                )}
            </div>
          </div>
        ))}
      </div>

    </Section>
  );
};

export default Projects;