'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import BaseSection from '@/components/ui/BaseSection';

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState<'tentang' | 'visi' | 'misi'>('tentang');

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
      {/* Pure CSS Radial Glow - Cone Tapering towards center (Slightly smaller far-left size) */}
      <div className="absolute top-[50%] -translate-y-1/2 left-[-300px] md:left-[-500px] w-[1000px] h-[750px] md:w-[1900px] md:h-[1250px] pointer-events-none z-0 overflow-visible flex items-center justify-center">
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
        <div className="w-full p-[2px] rounded-[24px] bg-gradient-to-r from-white/90 via-[#040659] via-50% to-white/90 shadow-[-20px_0_40px_rgba(0,0,0,0.85),20px_0_40px_rgba(20,134,246,0.4),0_0_35px_rgba(255,255,255,0.4)] relative z-10">
          <div className="w-full h-full bg-gradient-to-b from-[#090CBD] via-[#06088B] to-[#040659] rounded-[22px] p-4 sm:p-6 md:p-8 lg:p-12 relative overflow-hidden">
            {/* Enhanced Glow effects inside box */}
            <div className="absolute top-0 right-0 w-3/5 h-full bg-[#1486F6]/25 blur-[90px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-2/5 h-full bg-[#0C35E9]/25 blur-[90px] pointer-events-none"></div>

            <div className="flex flex-col lg:flex-row gap-5 lg:gap-12 relative z-10 items-start">
              {/* Left: Image */}
              <div className="w-full lg:w-[48%] flex justify-center relative aspect-[16/10] sm:aspect-[3/2] md:aspect-[16/10] lg:aspect-[3/2] rounded-[16px] overflow-hidden shadow-xl border border-white/20 flex-shrink-0">
                <Image
                  src="/r54.png"
                  alt="Foto Kegiatan OKIF FT-UH"
                  fill
                  sizes="(max-width: 1024px) 100vw, 48vw"
                  className="object-cover"
                  priority
                />
              </div>

              {/* Right: Content */}
              <div className="w-full lg:w-[52%] flex flex-col justify-start">
                {/* Tabs */}
                <div className="flex flex-wrap justify-center lg:justify-start items-center gap-1.5 sm:gap-2.5 md:gap-3 lg:gap-3.5 mb-4 sm:mb-5 md:mb-6 w-full">
                  <button
                    type="button"
                    onClick={() => setActiveTab('tentang')}
                    className={`px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 text-white text-[11px] sm:text-xs md:text-sm lg:text-base font-bold rounded-lg transition cursor-pointer whitespace-nowrap text-center ${activeTab === 'tentang'
                      ? 'bg-gradient-to-r from-[#0C35E9] to-[#1486F6] shadow-md border border-white/30'
                      : 'bg-[#080A8F]/60 border border-white/30 hover:bg-white/10'
                      }`}
                  >
                    TENTANG KAMI
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('visi')}
                    className={`px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 text-white text-[11px] sm:text-xs md:text-sm lg:text-base font-bold rounded-lg transition cursor-pointer whitespace-nowrap text-center ${activeTab === 'visi'
                      ? 'bg-gradient-to-r from-[#0C35E9] to-[#1486F6] shadow-md border border-white/30'
                      : 'bg-[#080A8F]/60 border border-white/30 hover:bg-white/10'
                      }`}
                  >
                    VISI
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('misi')}
                    className={`px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 text-white text-[11px] sm:text-xs md:text-sm lg:text-base font-bold rounded-lg transition cursor-pointer whitespace-nowrap text-center ${activeTab === 'misi'
                      ? 'bg-gradient-to-r from-[#0C35E9] to-[#1486F6] shadow-md border border-white/30'
                      : 'bg-[#080A8F]/60 border border-white/30 hover:bg-white/10'
                      }`}
                  >
                    MISI
                  </button>
                </div>

                {/* Title & Description */}
                {activeTab === 'tentang' && (
                  <>
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-black text-white mb-2 sm:mb-4 md:mb-6 leading-tight text-center lg:text-left">
                      OKIF FT-UH
                    </h2>
                    <div className="text-xs sm:text-sm md:text-base lg:text-lg text-white/90 space-y-2.5 sm:space-y-4 md:space-y-5 lg:space-y-6 font-normal text-center lg:text-left leading-relaxed">
                      <p>
                        Himpunan Mahasiswa Informatika Fakultas Teknik Universitas
                        Hasanuddin - Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua.
                      </p>
                      <p>
                        Himpunan Mahasiswa Informatika Fakultas Teknik Universitas
                        Hasanuddin - Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua.
                      </p>
                    </div>
                  </>
                )}

                {activeTab === 'visi' && (
                  <>
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-black text-white mb-2 sm:mb-4 md:mb-6 leading-tight text-center lg:text-left">
                      VISI
                    </h2>
                    <div className="text-xs sm:text-sm md:text-base lg:text-lg text-white/90 space-y-2.5 sm:space-y-4 md:space-y-5 lg:space-y-6 font-normal text-center lg:text-left leading-relaxed">
                      <p>
                        Mewujudkan HMIF FT-UH sebagai organisasi yang berlandaskan nilai ketuhanan, menjunjung tinggi kebersamaan, serta menjadi wadah pengembangan sumber daya manusia kader yang aktif dan berdampak bagi masyarakat.
                      </p>
                    </div>
                  </>
                )}

                {activeTab === 'misi' && (
                  <>
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-black text-white mb-2 sm:mb-4 md:mb-6 leading-tight text-center lg:text-left">
                      MISI
                    </h2>
                    <ul className="text-xs sm:text-sm md:text-base lg:text-lg text-white/90 space-y-2 sm:space-y-2.5 md:space-y-3 font-normal list-disc list-outside ml-4 text-left leading-relaxed">
                      <li>
                        Meningkatkan nilai ketuhanan dan keimanan kader melalui kegiatan yang menumbuhkan kesadaran spiritual dan moral dalam kehidupan berorganisasi.
                      </li>
                      <li>
                        Membangun keharmonisan, kerja sama, dan rasa kekeluargaan antar anggota guna menciptakan lingkungan organisasi yang solid dan saling mendukung.
                      </li>
                      <li>
                        Meningkatkan kualitas sumber daya manusia serta antusiasme kader melalui pengembangan potensi, keterampilan, dan partisipasi aktif dalam kegiatan organisasi.
                      </li>
                      <li>
                        Mendorong peran aktif kader dalam pengabdian kepada masyarakat melalui kegiatan sosial dan kontribusi keilmuan di bidang informatika.
                      </li>
                    </ul>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </BaseSection>
  );
}
