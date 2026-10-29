'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export interface VisiMisiSectionProps {
  id?: string;
  title?: string;
  imageSrc?: string;
  imageAlt?: string;
  visi: string;
  misi: string[];
  className?: string;
}

export default function VisiMisiSection({
  id = 'visi-misi',
  title,
  imageSrc = '/header-mmif.jpg',
  imageAlt = 'Visi & Misi',
  visi,
  misi,
  className = '',
}: VisiMisiSectionProps) {
  const [activeTab, setActiveTab] = useState<'visi' | 'misi'>('visi');

  return (
    <div id={id} className={`relative w-full max-w-[1360px] mx-auto z-10 px-2.5 sm:px-4 md:px-6 lg:px-8 ${className}`}>
      {/* Outer Card Box with White Border, Ambient Glow (Mempertahankan gaya visual sebelumnya) */}
      <div className="w-full p-[2px] rounded-[24px] bg-gradient-to-r from-white/90 via-[#040659] via-50% to-white/90 shadow-[-20px_0_40px_rgba(0,0,0,0.85),20px_0_40px_rgba(20,134,246,0.4),0_0_35px_rgba(255,255,255,0.4)] relative z-10 transition-all duration-300">
        <div className="w-full h-full bg-gradient-to-b from-[#090CBD] via-[#06088B] to-[#040659] rounded-[22px] p-4 sm:p-6 md:p-8 lg:p-12 relative overflow-hidden transition-all duration-300">
          {/* Enhanced Glow effects inside box */}
          <div className="absolute top-0 right-0 w-3/5 h-full bg-[#1486F6]/25 blur-[90px] pointer-events-none"></div>
          <div className="absolute top-0 left-0 w-2/5 h-full bg-[#0C35E9]/25 blur-[90px] pointer-events-none"></div>

          <div className="flex flex-col lg:flex-row gap-5 lg:gap-12 relative z-10 items-start">
            {/* Left: Image */}
            <div className="w-full lg:w-[48%] flex justify-center relative aspect-[16/10] sm:aspect-[3/2] md:aspect-[16/10] lg:aspect-[3/2] rounded-[16px] overflow-hidden shadow-xl border border-white/20 shrink-0">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 48vw"
                className="object-cover"
                priority
              />
            </div>

            {/* Right: Content Visi Misi */}
            <div className="w-full lg:w-[52%] flex flex-col justify-start">
              {/* Tabs Visi & Misi - Centered & Enlarged */}
              <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-5 mb-6 sm:mb-8 w-full">
                <button
                  type="button"
                  onClick={() => setActiveTab('visi')}
                  className={`px-7 sm:px-9 md:px-11 py-2.5 sm:py-3 md:py-3.5 text-sm sm:text-base md:text-lg font-black tracking-wider rounded-xl sm:rounded-2xl transition-all duration-200 cursor-pointer whitespace-nowrap text-center min-w-[120px] sm:min-w-[140px] md:min-w-[160px] ${
                    activeTab === 'visi'
                      ? 'bg-gradient-to-r from-[#0C35E9] to-[#1486F6] text-white shadow-[0_4px_20px_rgba(20,134,246,0.5)] border border-white/40 scale-[1.02]'
                      : 'bg-[#080A8F]/60 text-white/80 border border-white/25 hover:bg-[#080A8F] hover:text-white hover:border-white/40'
                  }`}
                >
                  VISI
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('misi')}
                  className={`px-7 sm:px-9 md:px-11 py-2.5 sm:py-3 md:py-3.5 text-sm sm:text-base md:text-lg font-black tracking-wider rounded-xl sm:rounded-2xl transition-all duration-200 cursor-pointer whitespace-nowrap text-center min-w-[120px] sm:min-w-[140px] md:min-w-[160px] ${
                    activeTab === 'misi'
                      ? 'bg-gradient-to-r from-[#0C35E9] to-[#1486F6] text-white shadow-[0_4px_20px_rgba(20,134,246,0.5)] border border-white/40 scale-[1.02]'
                      : 'bg-[#080A8F]/60 text-white/80 border border-white/25 hover:bg-[#080A8F] hover:text-white hover:border-white/40'
                  }`}
                >
                  MISI
                </button>
              </div>

              {/* Title & Description */}
              {activeTab === 'visi' && (
                <>
                  <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-white mb-2 sm:mb-4 md:mb-5 leading-tight text-center lg:text-left">
                    {title ? `VISI ${title}` : 'VISI'}
                  </h3>
                  <div className="text-xs sm:text-sm md:text-base lg:text-lg text-white/90 space-y-2.5 sm:space-y-4 font-normal text-justify lg:text-left leading-relaxed">
                    <p>{visi}</p>
                  </div>
                </>
              )}

              {activeTab === 'misi' && (
                <>
                  <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-white mb-2 sm:mb-4 md:mb-5 leading-tight text-center lg:text-left">
                    {title ? `MISI ${title}` : 'MISI'}
                  </h3>
                  <ul className="text-xs sm:text-sm md:text-base lg:text-lg text-white/90 space-y-2 sm:space-y-2.5 md:space-y-3 font-normal list-disc list-outside ml-4 text-left leading-relaxed">
                    {misi.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
