import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="tentang" className="py-24 border-t border-gray-100">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-10 text-center"
      >
        <h2 className="text-sm font-bold text-accent tracking-widest uppercase mb-4">
          TENTANG SAYA
        </h2>
        <h3 className="text-3xl font-extrabold text-gray-900">
          Mengenal lebih dekat tentang diri saya.
        </h3>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-3xl mx-auto bg-white p-8 md:p-10 rounded-2xl border border-gray-100 shadow-sm relative overflow-hidden"
      >
        {/* garis biru dekoratif di sebelah kiri */}
        <div className="absolute top-0 left-0 w-2 h-full bg-accent"></div>
        
        {/* format teks justify dan ukuran paragraf normal */}
        <p className="text-gray-600 text-base md:text-lg leading-loose text-justify">
          Halo, saya <strong>Muhammad Rama Fahrezy.</strong> Saya seorang mahasiswa di jurusan Teknik Informatika di Universitas Muhammadiyah Kalimantan Timur (UMKT) yang memiliki semangat tinggi dalam bidang rekayasa perangkat lunak. Minat dan fokus saya terletak pada pengembangan website serta pembuatan aplikasi. Saya selalu bersemangat untuk belajar, bekerja sama, dan menciptakan produk digital yang interaktif yang dapat memberikan manfaat positif bagi penggunanya.
        </p>
      </motion.div>
    </section>
  );
};

export default About;