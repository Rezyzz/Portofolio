import React from 'react';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: 'Staff Mediktif (Media Kreatif)',
      org: 'Himpunan Mahasiswa Teknik Informatika (Himatika)',
      period: 'Semester Berjalan',
      desc: 'Berpartisipasi aktif dalam kegiatan himpunan, memperluas relasi dengan sesama mahasiswa teknologi, serta mengembangkan keterampilan manajemen acara dan kepemimpinan di tingkat program studi.'
    },
    {
      id: 2,
      role: 'Bendahara Umum',
      org: 'UKM Media Indie Kampus (MIK)',
      period: 'Semester Berjalan',
      desc: 'Terlibat dalam unit kegiatan mahasiswa yang berfokus pada media kreatif dan jurnalistik kampus. Mengembangkan kemampuan komunikasi, kerja sama tim, dan produksi konten informasi.'
    },
  ];

  return (
    <section id="pengalaman" className="py-24 border-t border-gray-100">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h2 className="text-sm font-bold text-accent tracking-widest uppercase mb-4">
          PENGALAMAN
        </h2>
        <h3 className="text-3xl font-extrabold text-gray-900">
          Organisasi & Kolaborasi Tim
        </h3>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col h-full relative overflow-hidden"
          >
            {/* garis biru dekoratif di atas kartu */}
            <div className="absolute top-0 left-0 w-full h-1 bg-accent"></div>
            
            <div className="w-12 h-12 bg-blue-50 text-accent rounded-xl flex items-center justify-center mb-6">
              <Users size={24} />
            </div>
            
            <div className="flex-grow">
              <h4 className="text-xl font-bold text-gray-900 mb-1">{exp.role}</h4>
              <p className="text-accent font-semibold text-sm mb-2">{exp.org}</p>
              <p className="text-gray-500 font-medium text-xs mb-4">{exp.period}</p>
              
              <p className="text-gray-600 text-sm leading-relaxed">
                {exp.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;