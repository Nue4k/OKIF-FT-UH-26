import React from 'react';
import Image from 'next/image';
import BaseSection from './BaseSection';

export default function AboutSection() {
  return (
    <BaseSection
      id="tentang"
      variant="transparent"
      className="py-16 md:py-24 relative flex flex-col justify-center"
      containerClassName="!max-w-full !px-0 w-full"
    >
      {/* Unconstrained background glow from group-113.png aligned with About Card */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-[1400px] md:h-[1650px] pointer-events-none z-0 overflow-visible">
        <img
          src="/group-113.png"
          alt=""
          className="w-full h-full object-cover object-left opacity-100"
        />
      </div>

      {/* About Box (Tentang Kami OKIF FT-UH) Wrapper */}
      <div className="relative w-full max-w-[1360px] mx-auto z-10 px-4 md:px-6">

        {/* Outer Card Box with White Border, Black Glow on Left & White Glow on Right, Top & Bottom */}
        <div className="w-full p-[2px] rounded-[20px] bg-gradient-to-r from-white via-[#040659] via-50% to-white shadow-[-25px_0_45px_rgba(0,0,0,0.95),20px_0_40px_rgba(255,255,255,0.5),0_-15px_30px_rgba(255,255,255,0.35),0_15px_30px_rgba(255,255,255,0.35)] relative z-10">
          <div className="w-full h-full bg-gradient-to-b from-[#090CBD] via-[#06088B] to-[#040659] rounded-[18px] p-8 md:p-12 relative overflow-hidden">

            {/* Glow effect inside box */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-[#1486F6]/15 blur-[80px] pointer-events-none"></div>

            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 relative z-10 items-center">

              {/* Left: Image */}
              <div className="w-full lg:w-[48%] flex justify-center relative aspect-[3/2] rounded-[16px] overflow-hidden shadow-xl border border-white/20">
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
              <div className="w-full lg:w-[52%] flex flex-col justify-center">

                {/* Tabs */}
                <div className="flex flex-wrap gap-3 mb-6">
                  <button className="px-5 py-2 bg-gradient-to-r from-[#0C35E9] to-[#1486F6] text-white text-sm md:text-base font-bold rounded-lg shadow-md border border-white/30">
                    TENTANG KAMI
                  </button>
                  <button className="px-5 py-2 bg-[#080A8F]/60 text-white text-sm md:text-base font-bold rounded-lg border border-white/30 hover:bg-white/10 transition">
                    VISI
                  </button>
                  <button className="px-5 py-2 bg-[#080A8F]/60 text-white text-sm md:text-base font-bold rounded-lg border border-white/30 hover:bg-white/10 transition">
                    MISI
                  </button>
                </div>

                {/* Title & Description */}
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-none">OKIF FT-UH</h2>
                <div className="text-base md:text-lg text-white/90 space-y-6 font-normal">
                  <p>
                    Himpunan Mahasiswa Informatika Fakultas Teknik Universitas Hasanuddin - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                  <p>
                    Himpunan Mahasiswa Informatika Fakultas Teknik Universitas Hasanuddin - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
