import React from 'react';
import Image from 'next/image';
import BaseSection from '@/components/ui/BaseSection';
import HorizontalScrollContainer from '@/components/ui/HorizontalScrollContainer';

export default function PrestasiSection() {
  const prestasiData = [
    { nama: 'A. Tyas Nur Atda', prestasi: 'Juara 1 GEMASTIK', image: '/Mapres.png' },
    { nama: 'A. Tyas Nur Atda', prestasi: 'Juara 1 GEMASTIK', image: '/Mapres.png' },
    { nama: 'A. Tyas Nur Atda', prestasi: 'Juara 1 GEMASTIK', image: '/Mapres.png' },
    { nama: 'A. Tyas Nur Atda', prestasi: 'Juara 1 GEMASTIK', image: '/Mapres.png' },
  ];

  return (
    <BaseSection
      id="prestasi"
      variant="transparent"
      className="pt-8 pb-32 md:pt-12 md:pb-48 relative flex flex-col justify-center overflow-hidden"
      containerClassName="!max-w-full !px-0 w-full"
    >

      {/* Title */}
      <div className="text-center mb-6 flex flex-col items-center gap-4 px-4">
        <div className="bg-gradient-to-b from-[#0C35E9] to-[#1486F6] text-white font-bold text-[18px] px-6 py-2 rounded-xl inline-block">
          MAHASISWA BERPRESTASI
        </div>
        <h2 className="text-[48px] font-black text-white">
          TEKNIK INFORMATIKA FT-UH
        </h2>
      </div>

      {/* Slidable Cards Container (Edge-to-Edge) */}
      <HorizontalScrollContainer className="w-full gap-10 md:gap-[70px] justify-start items-center py-4 px-8 md:px-16">
        {prestasiData.map((item, index) => (
          <div key={index} className="flex-shrink-0 flex flex-col items-center relative group w-[380px]">
            {/* Image Card Container */}
            <div className="relative z-10 w-[380px] h-[550px] flex justify-center hover:scale-105 transition-transform duration-300">
              {item.image ? (
                <Image
                  src={item.image}
                  alt={item.nama}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-contain drop-shadow-2xl"
                />
              ) : (
                <div
                  className="w-full aspect-[3/4] bg-white/5 rounded-[32px] border-2 border-dashed border-white/20 flex flex-col items-center justify-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white/30 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-white/30 text-sm font-bold tracking-widest text-center">GAMBAR<br />KARTU MAPRES</span>
                </div>
              )}
            </div>

          </div>
        ))}
      </HorizontalScrollContainer>

      {/* Dots Indicator */}
      <div className="relative z-20 flex justify-center items-center gap-3 mt-12">
        {[1, 2, 3, 4, 5].map((dot, i) => (
          <div 
            key={i} 
            className={`w-3.5 h-3.5 rounded-full transition-all duration-300 ${
              i === 0 ? 'bg-cyan-400 shadow-[0_0_12px_#22d3ee] scale-110' : 'bg-white/70 hover:bg-white'
            }`}
          />
        ))}
      </div>

    </BaseSection>
  );
}
