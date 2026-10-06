'use client';

import React from 'react';
import Image from 'next/image';
import BaseSection from '@/components/ui/BaseSection';

export default function HeroSection() {
  const handleScrollToTentangKami = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('tentang-kami');
    if (el) {
      const navbarHeight = 80;
      const elementRect = el.getBoundingClientRect();
      const absoluteElementTop = elementRect.top + window.scrollY;
      const visibleHeight = window.innerHeight - navbarHeight;
      const targetY =
        absoluteElementTop - navbarHeight - (visibleHeight - elementRect.height) / 2;

      window.scrollTo({
        top: Math.max(0, targetY),
        behavior: 'smooth',
      });
    } else {
      window.location.href = '/#tentang-kami';
    }
  };

  return (
    <>
      {/* Hero Section: Layout & ukuran foto asli 100% utuh */}
      <BaseSection
        id="beranda"
        variant="transparent"
        className="!py-0 flex flex-col justify-center relative overflow-hidden isolate w-full min-h-screen h-[100dvh]"
        containerClassName="text-center !px-4 md:!px-8 max-w-full h-full flex flex-col justify-center items-center"
      >
        {/* Background Image */}
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <Image
            src="/bg1.png"
            alt="Gedung Informatika FT-UH"
            fill
            priority
            quality={100}
            className="object-cover object-center"
          />

          {/* Blue Tone Overlay for Photo */}
          <div 
            className="absolute inset-0 bg-gradient-to-b from-[#030628]/80 via-[#08186E]/65 to-[#0C32A8]/50 mix-blend-multiply"
          />
          <div 
            className="absolute inset-0 bg-[#0C35E9]/20 mix-blend-color"
          />

          {/* Top Navbar Vignette */}
          <div 
            className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#020418]/85 via-[#040828]/40 to-transparent pointer-events-none"
          />

          {/* Figma Concentric Elliptical Glows (#0C35E9 -> #5DF4EF -> #FFFFFF) */}
          <div className="absolute inset-x-0 bottom-[-14%] sm:bottom-[-18%] md:bottom-[-22%] flex items-center justify-center pointer-events-none">
            {/* Layer 1: Outer Electric Blue Ellipse (Figma: W 3461, H 932, #0C35E9) */}
            <div
              className="absolute rounded-[100%] bg-[#0C35E9] mix-blend-screen pointer-events-none"
              style={{
                width: 'min(3600px, 240vw)',
                height: 'min(950px, 85vh)',
                filter: 'blur(130px)',
                opacity: 0.95,
                transform: 'translate3d(0, 0, 0)',
              }}
            />

            {/* Layer 2: Middle Cyan Ellipse (Figma: W 2770.29, H 746, #5DF4EF) */}
            <div
              className="absolute rounded-[100%] bg-[#5DF4EF] mix-blend-screen pointer-events-none"
              style={{
                width: 'min(2900px, 190vw)',
                height: 'min(780px, 72vh)',
                filter: 'blur(100px)',
                opacity: 0.9,
                transform: 'translate3d(0, 0, 0)',
              }}
            />

            {/* Layer 3: Inner White Core Ellipse (Figma: W 1875.33, H 505, #FFFFFF) */}
            <div
              className="absolute rounded-[100%] bg-white mix-blend-screen pointer-events-none"
              style={{
                width: 'min(1900px, 130vw)',
                height: 'min(520px, 48vh)',
                filter: 'blur(80px)',
                opacity: 0.85,
                transform: 'translate3d(0, 0, 0)',
              }}
            />
          </div>

          {/* Wide Ambient Cyan Bottom Glow (so bottom corners have the soft cyan wash like in Figma) */}
          <div 
            className="absolute inset-x-0 bottom-0 h-72 bg-[radial-gradient(ellipse_120%_90%_at_50%_100%,rgba(93,244,239,0.3)_0%,rgba(12,53,233,0.15)_60%,transparent_100%)] mix-blend-screen pointer-events-none"
          />
        </div>

        {/* Hero Content Area */}
        <div className="relative z-10 flex flex-col items-center justify-center max-w-[1100px] mx-auto w-full pt-20 sm:pt-24 md:pt-[150px] pb-12 sm:pb-16 md:pb-28">
          {/* Title: Lato Black 100px */}
          <h1 className="text-[38px] sm:text-[64px] md:text-[80px] lg:text-[100px] font-black text-white tracking-normal leading-none mb-4 sm:mb-8 drop-shadow-[0_4px_16px_rgba(0,0,0,0.4)]">
            OKIF FT-UH
          </h1>

          {/* Description: Lato Regular 28px, max-w-[1049px] */}
          <p className="text-xs sm:text-base md:text-xl lg:text-[28px] text-white font-normal leading-relaxed md:leading-normal max-w-[1049px] mb-6 sm:mb-12 text-center drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)] px-2 sm:px-4">
            Wadah kolaborasi, pergerakan, dan pengembangan diri bagi seluruh elemen
            mahasiswa Teknik Informatika Fakultas Teknik Universitas Hasanuddin. Bersama
            membangun karakter, mengabdi untuk negeri.
          </p>

          {/* Button: Truly 100% Transparent Interior with Gradient Border (White to #080A8F) */}
          <button
            onClick={handleScrollToTentangKami}
            className="relative inline-flex items-center justify-center px-6 sm:px-10 md:px-12 py-3 sm:py-4 rounded-[15.2px] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer group bg-transparent shadow-[0_4px_20px_rgba(0,0,0,0.25)]"
          >
            {/* Gradient Border Stroke (2px, Linear #FFFFFF to #080A8F, Center Hollowed Out via Mask) */}
            <span
              className="absolute inset-0 rounded-[15.2px] pointer-events-none"
              style={{
                padding: '2px',
                background: 'linear-gradient(to bottom, #FFFFFF 0%, #080A8F 100%)',
                WebkitMask:
                  'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
                maskComposite: 'exclude',
              }}
            />

            {/* Button Text */}
            <span className="relative z-10 text-white font-bold text-sm sm:text-lg md:text-[20px] lg:text-[22px] leading-none drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)]">
              Kenali Kami Lebih Dekat
            </span>
          </button>
        </div>
      </BaseSection>

      {/* 3 Kotak Statistik (Jarak lebih proporsional dari foto di atasnya dan ke Mahasiswa Berprestasi) */}
      <div className="relative z-10 flex flex-row flex-nowrap justify-center items-center gap-2 sm:gap-4 md:gap-6 lg:gap-[52px] pt-10 sm:pt-16 md:pt-24 lg:pt-[210px] pb-12 sm:pb-16 md:pb-20 lg:pb-[128px] w-full max-w-[1300px] mx-auto px-2.5 sm:px-4">
        {/* Card 1: Pengurus Aktif */}
        <div
          className="flex-1 w-full max-w-[120px] sm:max-w-[200px] md:max-w-[280px] lg:max-w-[356px] rounded-[14px] sm:rounded-[20px] md:rounded-[26px] lg:rounded-[32.01px] border-[1.5px] sm:border-[2px] md:border-[2.56px] border-white/80 bg-gradient-to-b from-[#090CBD]/30 via-[#06088B]/40 to-[#040659]/50 backdrop-blur-sm shadow-[0_0_12px_rgba(20,134,246,0.35)] md:shadow-[0_0_25px_rgba(20,134,246,0.35)] flex flex-col items-center justify-center p-1.5 sm:p-2.5 md:p-3.5 lg:p-4 hover:-translate-y-2 sm:hover:-translate-y-3 md:hover:-translate-y-5 lg:hover:-translate-y-8 transition-all duration-300 cursor-pointer"
          style={{ aspectRatio: '356 / 308.62' }}
        >
          <span
            className="text-[30px] min-[370px]:text-[36px] sm:text-[48px] md:text-[68px] lg:text-[96px] xl:text-[128.06px] font-black leading-none text-transparent bg-clip-text bg-gradient-to-b from-[#5DF4EF] to-[#1486F6]"
            style={{
              filter: 'drop-shadow(0px 0px 8px rgba(93, 244, 239, 0.6))',
              fontFamily: 'var(--font-lato), Lato, sans-serif',
            }}
          >
            70
          </span>
          <p
            className="text-white font-bold text-[9px] min-[370px]:text-[10.5px] sm:text-[13px] md:text-[16px] lg:text-[24px] xl:text-[36px] leading-[11px] min-[370px]:leading-[13px] sm:leading-[16px] md:leading-[20px] lg:leading-[30px] xl:leading-[43.5px] text-center mt-0.5 sm:mt-1"
            style={{ fontFamily: 'var(--font-lato), Lato, sans-serif' }}
          >
            Pengurus<br />Aktif
          </p>
        </div>

        {/* Card 2: Program Kerja (Agak naik ke atas / elevated) */}
        <div
          className="flex-1 w-full max-w-[120px] sm:max-w-[200px] md:max-w-[280px] lg:max-w-[356px] rounded-[14px] sm:rounded-[20px] md:rounded-[26px] lg:rounded-[32.01px] border-[1.5px] sm:border-[2px] md:border-[2.56px] border-white/80 bg-gradient-to-b from-[#090CBD]/30 via-[#06088B]/40 to-[#040659]/50 backdrop-blur-sm shadow-[0_0_12px_rgba(20,134,246,0.35)] md:shadow-[0_0_25px_rgba(20,134,246,0.35)] flex flex-col items-center justify-center p-1.5 sm:p-2.5 md:p-3.5 lg:p-4 transform -translate-y-2 sm:-translate-y-3 md:-translate-y-5 lg:-translate-y-8 hover:-translate-y-3 sm:hover:-translate-y-4 md:hover:-translate-y-7 lg:hover:-translate-y-10 transition-all duration-300 cursor-pointer"
          style={{ aspectRatio: '356 / 308.62' }}
        >
          <span
            className="text-[30px] min-[370px]:text-[36px] sm:text-[48px] md:text-[68px] lg:text-[96px] xl:text-[128.06px] font-black leading-none text-transparent bg-clip-text bg-gradient-to-b from-[#5DF4EF] to-[#1486F6]"
            style={{
              filter: 'drop-shadow(0px 0px 8px rgba(93, 244, 239, 0.6))',
              fontFamily: 'var(--font-lato), Lato, sans-serif',
            }}
          >
            4
          </span>
          <p
            className="text-white font-bold text-[9px] min-[370px]:text-[10.5px] sm:text-[13px] md:text-[16px] lg:text-[24px] xl:text-[36px] leading-[11px] min-[370px]:leading-[13px] sm:leading-[16px] md:leading-[20px] lg:leading-[30px] xl:leading-[43.5px] text-center mt-0.5 sm:mt-1"
            style={{ fontFamily: 'var(--font-lato), Lato, sans-serif' }}
          >
            Program<br />Kerja
          </p>
        </div>

        {/* Card 3: Prestasi Mahasiswa */}
        <div
          className="flex-1 w-full max-w-[120px] sm:max-w-[200px] md:max-w-[280px] lg:max-w-[356px] rounded-[14px] sm:rounded-[20px] md:rounded-[26px] lg:rounded-[32.01px] border-[1.5px] sm:border-[2px] md:border-[2.56px] border-white/80 bg-gradient-to-b from-[#090CBD]/30 via-[#06088B]/40 to-[#040659]/50 backdrop-blur-sm shadow-[0_0_12px_rgba(20,134,246,0.35)] md:shadow-[0_0_25px_rgba(20,134,246,0.35)] flex flex-col items-center justify-center p-1.5 sm:p-2.5 md:p-3.5 lg:p-4 hover:-translate-y-2 sm:hover:-translate-y-3 md:hover:-translate-y-5 lg:hover:-translate-y-8 transition-all duration-300 cursor-pointer"
          style={{ aspectRatio: '356 / 308.62' }}
        >
          <span
            className="text-[30px] min-[370px]:text-[36px] sm:text-[48px] md:text-[68px] lg:text-[96px] xl:text-[128.06px] font-black leading-none text-transparent bg-clip-text bg-gradient-to-b from-[#5DF4EF] to-[#1486F6]"
            style={{
              filter: 'drop-shadow(0px 0px 8px rgba(93, 244, 239, 0.6))',
              fontFamily: 'var(--font-lato), Lato, sans-serif',
            }}
          >
            6
          </span>
          <p
            className="text-white font-bold text-[9px] min-[370px]:text-[10.5px] sm:text-[13px] md:text-[16px] lg:text-[24px] xl:text-[36px] leading-[11px] min-[370px]:leading-[13px] sm:leading-[16px] md:leading-[20px] lg:leading-[30px] xl:leading-[43.5px] text-center mt-0.5 sm:mt-1"
            style={{ fontFamily: 'var(--font-lato), Lato, sans-serif' }}
          >
            Prestasi<br />Mahasiswa
          </p>
        </div>
      </div>
    </>
  );
}
