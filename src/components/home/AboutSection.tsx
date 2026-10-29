'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import BaseSection from '@/components/ui/BaseSection';

export default function AboutSection() {
  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      (window.location.hash === '#tentang-kami' ||
        window.location.hash === '#tentang')
    ) {
      setTimeout(() => {
        const el = document.getElementById('tentang-kami');
        if (el) {
          const navbarHeight = 100;
          const elementRect = el.getBoundingClientRect();
          const absoluteElementTop = elementRect.top + window.scrollY;
          const visibleHeight = window.innerHeight - navbarHeight;
          const targetY =
            absoluteElementTop - navbarHeight - (visibleHeight - elementRect.height) / 2;

          window.scrollTo({
            top: Math.max(0, targetY),
            behavior: 'smooth',
          });
        }
      }, 150);
    }
  }, []);

  return (
    <BaseSection
      id="tentang-kami"
      variant="transparent"
      className="pt-12 pb-16 md:pt-20 md:pb-24 relative flex flex-col justify-center"
      containerClassName="!max-w-full !px-0 w-full"
    >
      {/* Pure CSS Radial Glow - Cone Tapering towards center */}
      <div className="absolute top-[280px] sm:top-[320px] md:top-[330px] lg:top-[340px] -translate-y-1/2 left-[-300px] md:left-[-500px] w-[1000px] h-[750px] md:w-[1900px] md:h-[1250px] pointer-events-none z-0 overflow-visible flex items-center justify-center">
        <div
          className="w-full h-full rounded-full blur-[60px] md:blur-[100px]"
          style={{
            background: `
              radial-gradient(
                ellipse 100% 62% at 22% 50%,
                #FFFFFF 0%,
                #E0FBFF 16%,
                #5DF4EF 36%,
                rgba(20, 134, 246, 0.6) 54%,
                rgba(12, 53, 233, 0.18) 72%,
                rgba(12, 53, 233, 0) 85%,
                transparent 100%
              )
            `
          }}
        />
      </div>

      {/* About Box (Tentang Kami OKIF FT-UH) Wrapper */}
      <div className="relative w-full max-w-[1360px] mx-auto z-10 px-4 sm:px-6 md:px-8">
        {/* Outer Card Box with White Border, Ambient Glow */}
        <div className="w-full p-[2px] rounded-[24px] bg-gradient-to-r from-white/90 via-[#040659] via-50% to-white/90 shadow-[-20px_0_40px_rgba(0,0,0,0.85),20px_0_40px_rgba(20,134,246,0.4),0_0_35px_rgba(255,255,255,0.4)] relative z-10 transition-all duration-300">
          <div className="w-full h-full bg-gradient-to-b from-[#090CBD] via-[#06088B] to-[#040659] rounded-[22px] p-5 sm:p-7 md:p-9 lg:p-12 relative overflow-hidden transition-all duration-300">
            {/* Enhanced Glow effects inside box */}
            <div className="absolute top-0 right-0 w-3/5 h-full bg-[#1486F6]/25 blur-[90px] pointer-events-none"></div>
            <div className="absolute top-0 left-0 w-2/5 h-full bg-[#0C35E9]/25 blur-[90px] pointer-events-none"></div>

            <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 relative z-10 items-center">
              {/* Left: Image */}
              <div className="w-full lg:w-[48%] flex justify-center relative aspect-[16/10] sm:aspect-[3/2] md:aspect-[16/10] lg:aspect-[3/2] rounded-[16px] overflow-hidden shadow-xl border border-white/20 shrink-0">
                <Image
                  src="/header-mmif.jpg"
                  alt="Foto Kegiatan OKIF FT-UH"
                  fill
                  sizes="(max-width: 1024px) 100vw, 48vw"
                  className="object-cover"
                  priority
                />
              </div>

              {/* Right: Content Standalone OKIF FT-UH */}
              <div className="w-full lg:w-[52%] flex flex-col justify-center">
                {/* Non-interactive Badge (Standalone) */}
                <div className="mb-3 sm:mb-4 flex justify-center lg:justify-start">
                  <span className="px-3.5 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-[#0C35E9] to-[#1486F6] text-white text-[11px] sm:text-xs md:text-sm font-bold rounded-lg shadow-md border border-white/30 tracking-wider uppercase inline-block">
                    TENTANG KAMI
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-black text-white mb-3 sm:mb-4 md:mb-5 leading-tight text-center lg:text-left tracking-tight">
                  OKIF FT-UH
                </h2>

                {/* Description Standalone - Proporsional & Elegan */}
                <div className="text-sm sm:text-base md:text-lg lg:text-[18px] text-white/90 font-normal text-justify lg:text-left leading-relaxed sm:leading-loose">
                  <p>
                    OKIF FT-UH adalah organisasi kemahasiswaan di Departemen Teknik Informatika Fakultas Teknik Universitas Hasanuddin yang bertujuan sebagai sarana peningkatan kualitas ketakwaan kepada Tuhan Yang Maha Esa, yang berasaskan nilai-nilai luhur Pancasila demi terwujudnya cita-cita bangsa dengan mengembangkan wawasan, integritas dan potensi diri, kemampuan keprofesian serta pengabdian kepada masyarakat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BaseSection>
  );
}
