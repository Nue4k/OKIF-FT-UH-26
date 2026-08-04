import React from 'react';

export default function Navbar() {
  const navLinks = [
    { label: 'Beranda', href: '#beranda' },
    { label: 'Profil', href: '#profil' },
    { label: 'Program Kerja', href: '#program-kerja' },
    { label: 'Berita', href: '#berita' },
    { label: 'Kontak', href: '#kontak' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
      {/* Background with specific Figma styles */}
      <div className="absolute inset-0 bg-[#0C35E9]/20 shadow-[0_8px_12px_rgba(0,0,0,0.25)] backdrop-blur-md"></div>
      
      {/* Container matching the 100px height */}
      <div className="w-full max-w-[1440px] mx-auto h-[100px] flex items-center justify-between px-6 md:px-[77px] relative z-10">
        
        {/* Logo */}
        <a href="#" className="flex-shrink-0 flex items-center gap-4 group">
          {/* Using placeholder matching the 74x75 dimensions and 12.7px border radius from Figma */}
          <img 
            src="https://placehold.co/74x75/1486F6/FFF?text=IF"
            alt="Logo" 
            className="w-[74px] h-[75px] rounded-[12.7px] object-cover group-hover:scale-105 transition-transform"
          />
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-[60px] ml-auto mr-[120px]">
          {navLinks.map((link, index) => (
            <a 
              key={index} 
              href={link.href}
              className="text-white text-[22px] font-bold font-lato hover:text-cyan-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Recursion 2.0 Button */}
        <button className="hidden md:flex px-[24px] py-[12px] bg-gradient-to-r from-[#5EF9F1] to-[#00A6FD] rounded-[10px] shadow-[inset_0_-4px_4px_rgba(0,0,0,0.25)] hover:brightness-110 transition-all active:translate-y-1">
          <span className="text-[#080A8F] text-[22px] font-bold font-lato leading-none">
            Recursion 2.0
          </span>
        </button>

        {/* Mobile Menu Button */}
        <button className="lg:hidden text-white hover:text-cyan-400 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
}
