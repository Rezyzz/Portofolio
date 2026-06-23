import React from 'react';
import { motion, useScroll } from 'framer-motion'; 
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Education from './components/Education';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

function App() {
  // memanggil fungsi pemantau scroll
  const { scrollYProgress } = useScroll();

  return (
    <div className="min-h-screen w-full font-sans text-gray-800 bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
      
      {/* ===== PROGRESS BAR SCROLL ===== */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1.5 bg-accent origin-left z-[60]"
        style={{ scaleX: scrollYProgress }}
      />
      {/* =============================== */}

      <Navbar />
      
      <main className="max-w-6xl mx-auto px-6 pt-32">
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Education />
        <Experience />
        <Contact />
      </main>
      
      <BackToTop />
      <Footer />
    </div>
  );
}

export default App;