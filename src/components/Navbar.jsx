import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // daftar menu yang disesuaikan dengan id di masing-masing komponen
  const navLinks = [
    { name: 'Beranda', href: '#' },
    { name: 'Tentang', href: '#tentang' },
    { name: 'Proyek', href: '#proyek' },
    { name: 'Pendidikan', href: '#pendidikan' },
    { name: 'Pengalaman', href: '#pengalaman' },
    { name: 'Kontak', href: '#kontak' },
  ];

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <a href="#" className="text-2xl font-extrabold text-blue-600 tracking-tight">
            Portofolio<span className="text-gray-900">.</span>
          </a>

          {/* Menu Desktop */}
          <div className="hidden md:flex gap-8">
            {navLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.href}
                className="text-sm font-semibold text-gray-600 hover:text-blue-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Tombol Menu Mobile */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Dropdown Mobile */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 px-6 py-4 absolute w-full shadow-lg">
          <div className="flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.href}
                onClick={() => setIsOpen(false)} // otomatis menutup menu saat diklik
                className="text-sm font-semibold text-gray-600 hover:text-blue-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;