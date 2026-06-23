import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  return (
    <section id="pendidikan" className="py-24 border-t border-gray-100">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h2 className="text-sm font-bold text-accent tracking-widest uppercase mb-4">
          PENDIDIKAN
        </h2>
        <h3 className="text-3xl font-extrabold text-gray-900">
          Riwayat Akademis
        </h3>
      </motion.div>

      <div className="max-w-4xl">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all relative overflow-hidden"
        >
          {/* garis biru dekoratif di sebelah kiri kartu (mengambil dari warna accent) */}
          <div className="absolute top-0 left-0 w-2 h-full bg-accent"></div>
          
          <div className="flex flex-col md:flex-row gap-6 items-start">
            {/* ini sudah diubah menjadi bg-blue-50 */}
            <div className="p-4 bg-blue-50 rounded-xl text-accent shrink-0">
              <GraduationCap size={32} />
            </div>
            
            <div>
              <h4 className="text-2xl font-bold text-gray-900">Universitas Muhammadiyah Kalimantan Timur (UMKT)</h4>
              <p className="text-accent font-semibold text-lg mt-1">S1 Teknik Informatika</p>
              <p className="text-gray-500 font-medium text-sm mt-2">Semester 4 — Sekarang</p>
              
              <p className="text-gray-600 mt-5 leading-relaxed">
                Fokus pada pengembangan perangkat lunak, pemrograman antarmuka dan backend, serta perancangan logika sistem.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;