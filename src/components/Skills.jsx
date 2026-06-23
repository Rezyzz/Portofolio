import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Backend & Database",
      skills: ["Python", "PHP", "Django", "MySQL", "REST API"]
    },
    {
      title: "Infrastruktur & Keamanan",
      skills: ["Ubuntu Server", "VirtualBox", "HyperCX", "Cybersecurity"]
    },
    {
      title: "Game Development",
      skills: ["Godot Engine", "GDScript", "3D Pixel Art"]
    },
    {
      title: "Frontend & Desain",
      skills: ["React", "Tailwind CSS", "HTML/CSS", "Draw.io", "Canva"]
    }
  ];

  return (
    <section id="keahlian" className="py-20 border-t border-white/10">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-12 text-white text-center"
      >
        Keahlian Teknis
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map((category, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors"
          >
            <h3 className="text-lg font-semibold text-accent mb-4 border-b border-white/10 pb-2">
              {category.title}
            </h3>
            <ul className="flex flex-col gap-2">
              {category.skills.map((skill, i) => (
                <li key={i} className="text-gray-300 text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;