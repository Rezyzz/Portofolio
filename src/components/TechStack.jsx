import React from 'react';
import { motion } from 'framer-motion';

const TechStack = () => {
  const techCategories = [
    {
      title: 'Bahasa Pemrograman',
      skills: ['Python', 'JavaScript', 'TypeScript', 'PHP', 'HTML/CSS']
    },
    {
      title: 'Framework & Library',
      skills: ['Django', 'Next.js', 'React', 'Tailwind CSS']
    },
    {
      title: 'Database & Tools',
      skills: ['Prisma ORM', 'MySQL', 'Git', 'VS Code']
    }
  ];

  return (
    <section className="py-16 border-t border-gray-100">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-10 text-center"
      >
        <h3 className="text-2xl font-extrabold text-gray-900">
          Keahlian & Teknologi
        </h3>
        <p className="text-gray-500 mt-2">
          Alat dan teknologi yang sering saya gunakan dalam pengembangan perangkat lunak.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {techCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm"
          >
            <h4 className="text-lg font-bold text-gray-800 mb-4 text-center">
              {category.title}
            </h4>
            <div className="flex flex-wrap justify-center gap-2">
              {category.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-blue-50 text-blue-600 rounded-lg text-sm font-semibold hover:bg-blue-600 hover:text-white transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;