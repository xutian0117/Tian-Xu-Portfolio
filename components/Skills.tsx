import React from 'react';
import Section from './Section';
import { SKILLS } from '../constants';
import { Code, Database, Terminal, Cpu, Layers, BarChart3 } from 'lucide-react';

const SkillCategory: React.FC<{ title: string; skills: string[]; icon: React.ReactNode }> = ({ title, skills, icon }) => (
  <div className="group bg-white rounded-[2.5rem] p-10 shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
    <div className="flex items-center gap-4 mb-10">
        <div className="w-14 h-14 bg-slate-50 text-blue-600 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-sm">
            {icon}
        </div>
        <h3 className="text-2xl font-bold text-slate-900 tracking-tight">{title}</h3>
    </div>
    <div className="flex flex-wrap gap-3">
      {skills.map((skill, idx) => (
        <span 
            key={idx} 
            className="px-5 py-2.5 bg-slate-50 text-slate-600 rounded-2xl text-xs font-bold uppercase tracking-wider border border-slate-100 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 transition-all cursor-default"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const Skills: React.FC = () => {
  return (
    <Section id="skills" title="Intelligence Layer" subtitle="The specialized toolkit driving my data architecture." className="bg-slate-50/50 py-32">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <SkillCategory title="Foundations" skills={SKILLS.programming} icon={<Terminal className="w-7 h-7"/>} />
        <SkillCategory title="Intelligence" skills={SKILLS.methodologies} icon={<Cpu className="w-7 h-7"/>} />
        <SkillCategory title="Operations" skills={SKILLS.tools} icon={<BarChart3 className="w-7 h-7"/>} />
      </div>
    </Section>
  );
};

export default Skills;