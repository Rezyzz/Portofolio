import React, { useState, useEffect } from 'react';
// tambahkan AnimatePresence di sini
import { motion, AnimatePresence } from 'framer-motion'; 
import SocialLinks from './SocialLinks';

const Hero = () => {
  // ===== LOGIKA PERGANTIAN TEKS =====
  const [index, setIndex] = useState(0);
  const titles = ["Muhammad Rama Fahrezy", "Web Developer"];

  useEffect(() => {
    // mengatur interval pergantian teks setiap 3 detik (3000 milidetik)
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 3000);
    
    // membersihkan interval agar memori tidak bocor
    return () => clearInterval(interval);
  }, [titles.length]);
  // ===================================

  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-center text-center relative overflow-hidden">
      
      {/* EFEK CAHAYA (GLOWING BLOB) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-400 rounded-full blur-[100px] opacity-15 pointer-events-none"></div>

      <div className="relative z-10 flex flex-col items-center">
        {/* LENCANA STATUS */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold tracking-wide uppercase mb-8 shadow-sm"
        >
          Samarinda, Kalimantan Timur
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-accent font-bold mb-4 tracking-wide"
        >
          Halo!
        </motion.h2>

        {/* ===== ANIMASI FADE IN & FADE OUT ===== */}
        <div className="h-20 md:h-24 mb-4 flex items-center justify-center">
          {/* AnimatePresence mode="wait" memastikan teks lama menghilang penuh sebelum teks baru muncul */}
          <AnimatePresence mode="wait">
            <motion.h1 
              key={index} // key sangat penting agar react tahu ini elemen yang berbeda
              initial={{ opacity: 0, y: 15 }} // muncul dari bawah sedikit
              animate={{ opacity: 1, y: 0 }}  // posisi normal
              exit={{ opacity: 0, y: -15 }}   // menghilang ke atas sedikit
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="text-4xl md:text-6xl font-extrabold text-gray-900"
            >
              {titles[index]}.
            </motion.h1>
          </AnimatePresence>
        </div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-gray-500 max-w-xl text-lg leading-relaxed mb-8"
        >
          Portofolio ini menampilkan proyek dan kontribusi saya sebagai pengembang di bidang teknologi.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col items-center gap-6"
        >
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-3 bg-accent text-white rounded-full font-semibold hover:bg-blue-600 transition-colors shadow-lg shadow-blue-200">
              Hubungi Saya
            </button>
            
            <a 
              href="/cv-saya.pdf" 
              download 
              className="px-8 py-3 bg-white text-accent border border-blue-200 rounded-full font-semibold hover:bg-blue-50 transition-colors shadow-sm flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
              Download CV
            </a>
          </div>
          
          <SocialLinks />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;