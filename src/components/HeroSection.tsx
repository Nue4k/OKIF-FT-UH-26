import React from 'react';
import BaseSection from './BaseSection';

export default function HeroSection() {
  return (
    <BaseSection 
      id="beranda" 
      variant="transparent" 
      className="min-h-screen pt-32 pb-20 flex flex-col justify-center relative"
      containerClassName="text-center gap-6"
    >

      <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto mt-20">
        <h1 className="text-6xl md:text-8xl lg:text-[100px] font-black text-white tracking-tight leading-none mb-6 drop-shadow-md">
          OKIF FT-UH
        </h1>
        
        <p className="text-lg md:text-2xl text-white/90 font-normal leading-relaxed max-w-3xl mb-10">
          Organisasi Kemahasiswaan Informatika Fakultas Teknik Universitas Hasanuddin - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        {/* Profil Organisasi Button */}
        <button className="px-8 py-3 bg-[#080A8F] border-[1.5px] border-white rounded-full text-white font-bold text-xl hover:bg-white hover:text-okif-dark transition-all duration-300">
          Profil Organisasi
        </button>
      </div>
    </BaseSection>
  );
}
