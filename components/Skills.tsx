
import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-indigo-400 font-bold tracking-widest uppercase text-sm mb-4">Stack Tecnológico</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold mb-6 text-white">Lo que domino</h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Utilizo las mejores herramientas y frameworks para garantizar que cada proyecto sea mantenible y eficiente.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {SKILLS.map((skill) => (
            <div 
              key={skill.name} 
              className="group glass p-8 rounded-3xl flex flex-col items-center justify-center text-center transition-all duration-300 hover:border-indigo-500/50 hover:bg-indigo-500/5 hover:-translate-y-2"
            >
              <div className="mb-4 text-indigo-400 group-hover:text-indigo-300 transition-colors">
                {skill.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-2">{skill.name}</h4>
              <span className="text-xs uppercase tracking-widest text-gray-500 font-semibold">{skill.category}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
