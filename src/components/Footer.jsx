import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 text-center border-t border-gray-100">
      <p className="text-gray-500 text-sm font-medium">
        &copy; {new Date().getFullYear()} Portofolio Saya. Dibangun dengan React & Tailwind CSS.
      </p>
    </footer>
  );
};

export default Footer;