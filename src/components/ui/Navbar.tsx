"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isBlurNavbar =
    pathname?.startsWith('/berita') ||
    pathname?.startsWith('/formatif') ||
    pathname?.startsWith('/baca');

  const navLinks = [
    { label: 'Beranda', href: '/' },
    { label: 'Tentang Kami', href: '/tentang-kami' },
    { label: 'Formatif', href: '/formatif' },
    { label: 'Berita', href: '/berita' },
  ];

  const getIsActive = (link: { label: string; href: string }) => {
    if (link.href === '/formatif') return pathname?.startsWith('/formatif');
    if (link.href === '/berita') return pathname?.startsWith('/berita') || pathname?.startsWith('/baca');
    if (link.href === '/tentang-kami') return pathname?.startsWith('/tentang-kami');
    if (link.href === '/') return pathname === '/';
    return false;
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
      {/* Background with OKIF dark color variable or frosted glass blur on /berita and /formatif */}
      <div className={`absolute inset-0 transition-all duration-300 ${
        isBlurNavbar 
          ? 'bg-[#0C35E9]/20 backdrop-blur-xl border-b border-white/20 shadow-lg' 
          : 'bg-[var(--color-okif-dark)]/90 backdrop-blur-md border-b border-white/10 shadow-[0_8px_20px_rgba(0,0,0,0.35)]'
      }`}></div>
      
      {/* Container matching the 100px height */}
      <div className="w-full max-w-[1440px] mx-auto h-[100px] flex items-center justify-between px-6 md:px-[77px] relative z-10">
        
        {/* Logo Asset */}
        <Link href="/" className="flex-shrink-0 flex items-center gap-4 group">
          <Image 
            src="/hmif.png"
            alt="Logo OKIF FT-UH" 
            width={74}
            height={75}
            className="w-[74px] h-[75px] object-contain group-hover:scale-105 transition-transform duration-200"
            priority
          />
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-[60px] absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => {
            const isActive = getIsActive(link);
            return (
              <Link 
                key={link.label} 
                href={link.href}
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
        <a
          href="https://www.recursion.id/"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center justify-center px-[24px] py-[12px] bg-gradient-to-r from-[#5EF9F1] to-[#00A6FD] rounded-[10px] shadow-[0_6px_16px_rgba(0,166,253,0.4),inset_0_-4px_4px_rgba(0,0,0,0.2)] hover:brightness-110 hover:shadow-[0_8px_20px_rgba(94,249,241,0.5)] transition-all active:translate-y-0.5"
        >
          <span className="text-[#080A8F] text-[22px] font-bold leading-none">
            Recursion 2.0
          </span>
        </a>

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
            const isActive = getIsActive(link);
            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => {
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
            <a
              href="https://www.recursion.id/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-[12px] bg-gradient-to-r from-[#5EF9F1] to-[#00A6FD] rounded-[10px] shadow-[0_6px_16px_rgba(0,166,253,0.4)] text-[#080A8F] text-[20px] font-bold flex items-center justify-center text-center"
            >
              Recursion 2.0
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

