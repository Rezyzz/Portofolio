import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="kontak" className="py-24 border-t border-gray-100">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <h2 className="text-sm font-bold text-accent tracking-widest uppercase mb-4">
          KONTAK
        </h2>
        <h3 className="text-3xl font-extrabold text-gray-900">
          Mari Berkolaborasi
        </h3>
        <p className="text-gray-500 max-w-xl mx-auto mt-4">
          Apakah kamu memiliki ide proyek, tawaran pekerjaan, atau sekadar ingin berdiskusi? Jangan ragu untuk mengirimkan pesan.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-2xl mx-auto bg-white border border-gray-100 p-8 rounded-2xl shadow-sm text-center relative overflow-hidden"
      >
        {/* garis biru dekoratif di atas kartu */}
        <div className="absolute top-0 left-0 w-full h-2 bg-accent"></div>
        
        <div className="w-16 h-16 bg-blue-50 text-accent rounded-full flex items-center justify-center mx-auto mb-6 mt-2">
          <Mail size={32} />
        </div>
        
        <h4 className="text-2xl font-bold text-gray-900 mb-2">Kirim Pesan Langsung</h4>
        <p className="text-gray-600 mb-8 font-medium">
          mramafahrezy26@gmail.com
        </p>
        
        {/* bagian mailto untuk mengarahkan ke emailmu */}
        <a 
          href="mailto:mramafahrezy26@gmail.com?subject=Pesan%20dari%20Web%20Portofolio"
          className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-white rounded-full font-semibold hover:bg-blue-600 transition-colors shadow-lg shadow-blue-200"
        >
          <Mail size={20} />
          Tulis Email Sekarang
        </a>
      </motion.div>
    </section>
  );
};

export default Contact;