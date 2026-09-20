'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import BaseSection from '@/components/ui/BaseSection';

export default function OrganisasiSection() {
  return (
    <BaseSection
      id="organisasi"
      variant="transparent"
      className="pt-12 pb-16 md:pt-20 md:pb-24 relative flex flex-col isolate"
      containerClassName="!max-w-full !px-0 w-full"
    >
      {/* Title & Header Area */}
      <div className="relative z-10 flex flex-col items-center text-center mb-8 sm:mb-10 md:mb-12 lg:mb-14 px-4">
        <div
          className="bg-gradient-to-b from-[#0C35E9] to-[#1486F6] text-white font-bold text-sm sm:text-base md:text-base lg:text-[18px] px-5 sm:px-6 py-2 sm:py-2.5 rounded-[12px] inline-block mb-3 sm:mb-4 shadow-md tracking-normal uppercase"
          style={{ fontFamily: 'var(--font-lato), Lato, sans-serif' }}
        >
          STRUKTUR KEPENGURUSAN
        </div>
        <h2
          className="text-2xl sm:text-3xl md:text-3xl lg:text-[48px] font-black text-white leading-tight mb-2 uppercase tracking-wide"
          style={{ fontFamily: 'var(--font-lato), Lato, sans-serif' }}
        >
          ORGANISASI KEMAHASISWAAN INFORMATIKA
        </h2>
        <h3
          className="text-base sm:text-lg md:text-xl lg:text-[28px] font-black text-white leading-snug uppercase tracking-wide"
          style={{ fontFamily: 'var(--font-lato), Lato, sans-serif' }}
        >
          FAKULTAS TEKNIK UNIVERSITAS HASANUDDIN
        </h3>
      </div>

      {/* 2 Big Cards Container (Identik Sempurna Kiri dan Kanan) */}
      <div className="relative z-20 w-full max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-[48px]">

        {/* Left Card: DMMIF FT-UH */}
        <div className="relative w-full max-w-[593px] h-[460px] sm:h-[500px] md:h-[540px] lg:h-[631px] rounded-[20px] overflow-hidden border-[2px] border-white shadow-[0_0_25px_rgba(255,255,255,0.75),0_0_50px_rgba(255,255,255,0.3)] hover:shadow-[0_0_35px_rgba(255,255,255,0.95),0_0_70px_rgba(255,255,255,0.45)] transition-all duration-300 flex flex-col justify-end p-5 sm:p-6 md:p-6 lg:p-[26px] group">
          {/* Background Image */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <Image
              src="/r54.png"
              alt="Foto Bersama DMMIF FT-UH"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
            {/* Dark Gradient Overlay */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(to bottom, rgba(8, 10, 143, 0) 16%, rgba(12, 53, 233, 0.35) 36%, #080A8F 73%, #000000 100%)',
              }}
            />
          </div>

          {/* Card Content */}
          <div className="relative z-10 flex flex-col items-start w-full">
            <h4
              className="text-xl sm:text-2xl md:text-3xl lg:text-[39px] font-black text-white mb-2 sm:mb-3 leading-tight tracking-normal"
              style={{ fontFamily: 'var(--font-lato), Lato, sans-serif' }}
            >
              DMMIF FT-UH
            </h4>
            <p
              className="text-xs sm:text-sm md:text-base lg:text-[18px] text-white leading-relaxed font-normal mb-4 sm:mb-5 md:mb-5 lg:mb-[26px] text-justify line-clamp-4 sm:line-clamp-none"
              style={{ fontFamily: 'var(--font-lato), Lato, sans-serif' }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <Link
              href="/tentang-kami#dmmif"
              className="w-full"
            >
              <button
                className="w-full h-[46px] sm:h-[48px] md:h-[52px] lg:h-[58px] bg-white hover:bg-white/90 active:scale-[0.98] text-[#080A8F] font-bold text-xs sm:text-sm md:text-base lg:text-[17px] px-4 md:px-6 lg:px-[36.48px] rounded-[9.2px] text-center uppercase tracking-normal transition-all duration-300 shadow-lg cursor-pointer flex items-center justify-center"
                style={{ fontFamily: 'var(--font-lato), Lato, sans-serif' }}
              >
                LIHAT STRUKTUR DMMIF FT-UH
              </button>
            </Link>
          </div>
        </div>

        {/* Right Card: HMIF FT-UH (100% Identik dengan Kartu Kiri) */}
        <div className="relative w-full max-w-[593px] h-[460px] sm:h-[500px] md:h-[540px] lg:h-[631px] rounded-[20px] overflow-hidden border-[2px] border-white shadow-[0_0_25px_rgba(255,255,255,0.75),0_0_50px_rgba(255,255,255,0.3)] hover:shadow-[0_0_35px_rgba(255,255,255,0.95),0_0_70px_rgba(255,255,255,0.45)] transition-all duration-300 flex flex-col justify-end p-5 sm:p-6 md:p-6 lg:p-[26px] group">
          {/* Background Image */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <Image
              src="/r54.png"
              alt="Foto Bersama HMIF FT-UH"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
            {/* Dark Gradient Overlay */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(to bottom, rgba(8, 10, 143, 0) 16%, rgba(12, 53, 233, 0.35) 36%, #080A8F 73%, #000000 100%)',
              }}
            />
          </div>

          {/* Card Content */}
          <div className="relative z-10 flex flex-col items-start w-full">
            <h4
              className="text-xl sm:text-2xl md:text-3xl lg:text-[39px] font-black text-white mb-2 sm:mb-3 leading-tight tracking-normal"
              style={{ fontFamily: 'var(--font-lato), Lato, sans-serif' }}
            >
              HMIF FT-UH
            </h4>
            <p
              className="text-xs sm:text-sm md:text-base lg:text-[18px] text-white leading-relaxed font-normal mb-4 sm:mb-5 md:mb-5 lg:mb-[26px] text-justify line-clamp-4 sm:line-clamp-none"
              style={{ fontFamily: 'var(--font-lato), Lato, sans-serif' }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <Link
              href="/tentang-kami#hmif"
              className="w-full"
            >
              <button
                className="w-full h-[46px] sm:h-[48px] md:h-[52px] lg:h-[58px] bg-white hover:bg-white/90 active:scale-[0.98] text-[#080A8F] font-bold text-xs sm:text-sm md:text-base lg:text-[17px] px-4 md:px-6 lg:px-[36.48px] rounded-[9.2px] text-center uppercase tracking-normal transition-all duration-300 shadow-lg cursor-pointer flex items-center justify-center"
                style={{ fontFamily: 'var(--font-lato), Lato, sans-serif' }}
              >
                LIHAT STRUKTUR HMIF FT-UH
              </button>
            </Link>
          </div>
        </div>

      </div>
    </BaseSection>
  );
}
