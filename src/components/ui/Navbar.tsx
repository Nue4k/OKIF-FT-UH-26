"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [activeLink, setActiveLink] = useState('Beranda');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Beranda', href: '/' },
    { label: 'Tentang Kami', href: '/tentang-kami' },
    { label: 'Formatif', href: '/#formatif' },
    { label: 'Berita', href: '/#berita' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
      {/* Background with OKIF dark color variable, backdrop blur, and bottom border/shadow */}
      <div className="absolute inset-0 bg-[var(--color-okif-dark)]/90 backdrop-blur-md border-b border-white/10 shadow-[0_8px_20px_rgba(0,0,0,0.35)]"></div>
      
      {/* Container matching the 100px height */}
      <div className="w-full max-w-[1440px] mx-auto h-[100px] flex items-center justify-between px-6 md:px-[77px] relative z-10">
        
        {/* Logo Asset */}
        <a href="#beranda" className="flex-shrink-0 flex items-center gap-4 group">
          <Image 
            src="/hmif.png"
            alt="Logo OKIF FT-UH" 
            width={74}
            height={75}
            className="w-[74px] h-[75px] object-contain group-hover:scale-105 transition-transform duration-200"
            priority
          />
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-[60px] absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => {
            const isActive = activeLink === link.label;
            return (
              <Link 
                key={link.label} 
                href={link.href}
                onClick={() => setActiveLink(link.label)}
                className={`text-[22px] transition-all duration-200 ${
                  isActive 
                    ? 'text-white font-black drop-shadow-[0_2px_4px_rgba(255,255,255,0.3)]' 
                    : 'text-[var(--color-okif-white-57)] font-normal hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Recursion 2.0 CTA Button */}
        <button className="hidden md:flex px-[24px] py-[12px] bg-gradient-to-r from-[#5EF9F1] to-[#00A6FD] rounded-[10px] shadow-[0_6px_16px_rgba(0,166,253,0.4),inset_0_-4px_4px_rgba(0,0,0,0.2)] hover:brightness-110 hover:shadow-[0_8px_20px_rgba(94,249,241,0.5)] transition-all active:translate-y-0.5">
          <span className="text-[#080A8F] text-[22px] font-bold leading-none">
            Recursion 2.0
          </span>
        </button>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-white hover:text-[#5EF9F1] transition-colors p-2"
          aria-label="Toggle Menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden relative z-10 bg-[var(--color-okif-dark)]/95 backdrop-blur-lg border-b border-white/10 px-6 py-6 flex flex-col gap-4 shadow-xl">
          {navLinks.map((link) => {
            const isActive = activeLink === link.label;
            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => {
                  setActiveLink(link.label);
                  setMobileMenuOpen(false);
                }}
                className={`text-[20px] py-2 transition-colors ${
                  isActive 
                    ? 'text-white font-black' 
                    : 'text-[var(--color-okif-white-57)] font-normal hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="pt-2">
            <button className="w-full py-[12px] bg-gradient-to-r from-[#5EF9F1] to-[#00A6FD] rounded-[10px] shadow-[0_6px_16px_rgba(0,166,253,0.4)] text-[#080A8F] text-[20px] font-bold">
              Recursion 2.0
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

