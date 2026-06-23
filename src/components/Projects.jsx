import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react'; 

const Projects = () => {
  const projectList = [
    {
      id: 1,
      title: 'Educational Intelligence Organizer (EIO)',
      desc: 'Sistem informasi manajemen edukasi berbasis web yang dilengkapi dengan fitur obrolan interaktif, manajemen dokumen, dan modul latihan soal.',
      tech: ['Python', 'Django', 'Web App'],
      // ini tautan asli ke github milikmu
      link: 'https://github.com/kamal-ilham/educational-intelligence-organizer-eio-' 
    },
    {
      id: 2,
      title: 'AI Healthcare Platform',
      desc: 'Platform layanan kesehatan terintegrasi cerdas yang menggunakan kecerdasan buatan, dilengkapi fitur pencarian fasilitas medis terdekat dan chatbot asisten.',
      tech: ['Next.js', 'Prisma', 'Tailwind CSS'],
      // ini tautan asli ke github milikmu
      link: 'https://github.com/kamal-ilham/ai-healthcare-platform'
    }
  ];

  return (
    <section id="proyek" className="py-24 border-t border-gray-100">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h2 className="text-sm font-bold text-accent tracking-widest uppercase mb-4">
          PORTOFOLIO SAYA
        </h2>
        <h3 className="text-3xl font-extrabold text-gray-900">
          Proyek yang Telah Dibangun
        </h3>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectList.map((proyek, index) => (
          <motion.div 
            key={proyek.id} 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col h-full"
          >
            <div className="flex-grow">
              <h4 className="text-2xl font-bold text-gray-900 mb-3">{proyek.title}</h4>
              <p className="text-gray-600 mb-6 leading-relaxed">{proyek.desc}</p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {proyek.tech.map((t, i) => (
                  <span 
                    key={i} 
                    className="text-xs font-semibold bg-blue-50 text-accent px-3 py-1.5 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <a 
              href={proyek.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold text-accent hover:text-blue-600 transition-colors mt-auto w-max"
            >
              <ExternalLink size={18} /> Lihat Proyek
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;