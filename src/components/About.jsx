import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="tentang" className="py-24 border-t border-gray-100">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <h2 className="text-sm font-bold text-accent tracking-widest uppercase mb-4">
            TENTANG SAYA
          </h2>
          
          {/* ===== TULIS TENTANG SAYA DI BAWAH SINI ===== */}
          <div className="text-gray-800 text-xl md:text-2xl font-semibold leading-relaxed max-w-3xl space-y-4">
            <p>
              [silakan hapus teks ini dan isi dengan paragraf perkenalanmu. ceritakan latar belakang, fokus utamamu di pemrograman, atau apapun yang ingin kamu tonjolkan...]
            </p>
          </div>
          {/* =========================================== */}
          
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-sm font-bold text-accent tracking-widest uppercase mb-6">
            Spesialisasi & Tech Stack Inti
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Frontend */}
            <div className="bg-gray-50 p-6 rounded-2xl">
              <h3 className="text-gray-900 font-bold mb-4">Frontend</h3>
              <ul className="flex flex-col gap-3">
                {['React', 'Tailwind CSS', 'HTML/CSS'].map((skill, i) => (
                  <li key={i} className="text-gray-600 text-sm flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            {/* Backend */}
            <div className="bg-gray-50 p-6 rounded-2xl">
              <h3 className="text-gray-900 font-bold mb-4">Backend</h3>
              <ul className="flex flex-col gap-3">
                {['Python', 'PHP', 'Django', 'REST API'].map((skill, i) => (
                  <li key={i} className="text-gray-600 text-sm flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            {/* Database & Tools */}
            <div className="bg-gray-50 p-6 rounded-2xl">
              <h3 className="text-gray-900 font-bold mb-4">Database & Tools</h3>
              <ul className="flex flex-col gap-3">
                {['MySQL', 'Figma', 'Android Studio', 'Vite', 'Git/Github'].map((skill, i) => (
                  <li key={i} className="text-gray-600 text-sm flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;