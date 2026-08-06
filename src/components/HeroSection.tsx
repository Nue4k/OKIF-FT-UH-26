import React from 'react';
import BaseSection from './BaseSection';

export default function HeroSection() {
  return (
    <BaseSection
      id="beranda"
      variant="transparent"
      className="pt-32 pb-32 md:pb-48 flex flex-col justify-center relative overflow-hidden bg-[url('/hero-bg-118.png')] bg-cover bg-[center_-50px] bg-no-repeat"
      containerClassName="text-center gap-6"
    >

      {/* The background image hero-bg-final.png now handles all the custom inwardly-tapering cyan glowing light */}

      <div className="relative z-10 flex flex-col items-center justify-center min-h-[60vh] md:min-h-[75vh] pt-12 md:pt-20 max-w-5xl mx-auto w-full">
        <h1 className="text-[100px] font-black text-white tracking-wide leading-none mb-6 drop-shadow-md">
          OKIF FT-UH
        </h1>

        <p className="text-xl md:text-[26px] text-white/90 font-normal leading-relaxed max-w-5xl mb-12 px-4 text-center">
          Organisasi Kemahasiswaan Informatika Fakultas Teknik Universitas Hasanuddin - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        {/* Profil Organisasi Button with fading neon border */}
        <button className="relative p-[1.5px] rounded-[12px] bg-gradient-to-b from-white via-white/20 to-transparent shadow-[0_-5px_20px_-5px_rgba(255,255,255,0.3)] group hover:-translate-y-1 transition-all duration-300">
          <div className="px-12 py-4 bg-gradient-to-b from-[#080A8F] to-[#040659] rounded-[10.5px] text-white font-semibold text-lg md:text-[20px] shadow-[inset_0_10px_20px_-10px_rgba(93,244,239,0.5)] group-hover:brightness-110 transition-all duration-300">
            Profil Organisasi
          </div>
        </button>
      </div>

      {/* 3 Pengurus Aktif Boxes */}
      <div className="relative z-10 flex flex-col md:flex-row justify-center items-center gap-6 md:gap-[52px] mt-40 md:mt-56 w-full max-w-[1300px] mx-auto px-4">
        {[1, 2, 3].map((item, index) => (
          <div
            key={index}
            className={`w-full max-w-[356px] h-[310px] rounded-[32px] p-[1.5px] bg-gradient-to-b from-white via-white/10 to-transparent shadow-[0_-5px_20px_-5px_rgba(255,255,255,0.2)] transform transition-transform duration-300 ${index === 1 ? 'md:-translate-y-8' : ''
              } hover:-translate-y-2`}
          >
            <div className="w-full h-full rounded-[30.5px] bg-gradient-to-b from-[#080A8F] to-[#040659] flex flex-col items-center justify-center p-2 shadow-[inset_0_15px_40px_-10px_rgba(20,134,246,0.8)]">
              <h2
                className="text-[128px] font-black leading-none text-transparent bg-clip-text bg-gradient-to-b from-[#5DF4EF] to-[#1486F6]"
                style={{ filter: 'drop-shadow(0px 0px 10px rgba(93, 244, 239, 0.6))' }}
              >
                63
              </h2>
              <p className="text-white font-bold text-[42px] text-center leading-tight mt-1">
                Pengurus<br />Aktif
              </p>
            </div>
          </div>
        ))}
      </div>
    </BaseSection>
  );
}
