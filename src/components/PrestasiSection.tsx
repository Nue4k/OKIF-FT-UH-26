import React from 'react';
import BaseSection from './BaseSection';

export default function PrestasiSection() {
  const prestasiData = [
    { nama: 'A. Tyas Nur Atda', prestasi: 'Juara 1 GEMASTIK', image: '/mapres.png' },
    { nama: 'A. Tyas Nur Atda', prestasi: 'Juara 1 GEMASTIK', image: '' },
    { nama: 'A. Tyas Nur Atda', prestasi: 'Juara 1 GEMASTIK', image: '' },
    { nama: 'A. Tyas Nur Atda', prestasi: 'Juara 1 GEMASTIK', image: '' },
  ];

  return (
    <BaseSection id="prestasi" variant="transparent" className="py-32 md:py-48 min-h-screen relative flex flex-col justify-center">
      
      {/* Title */}
      <div className="text-center mb-16 flex flex-col items-center gap-4">
        <div className="bg-gradient-to-b from-[#0C35E9] to-[#1486F6] text-white font-bold text-lg px-6 py-2 rounded-xl inline-block">
          MAHASISWA BERPRESTASI
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-white">
          TEKNIK INFORMATIKA FT-UH
        </h2>
      </div>

      {/* Cards Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 w-full justify-items-center">
        {prestasiData.map((item, index) => (
          <div key={index} className="flex flex-col items-center relative group w-full max-w-[317px]">
            {/* Image Card Container */}
            <div className="relative z-10 w-full aspect-[3/4] flex justify-center hover:scale-105 transition-transform duration-300">
              {item.image ? (
                <img 
                  src={item.image} 
                  alt={item.nama} 
                  className="w-full h-full object-contain drop-shadow-2xl"
                />
              ) : (
                <div 
                  className="w-full aspect-[3/4] bg-white/5 rounded-[32px] border-2 border-dashed border-white/20 flex flex-col items-center justify-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white/30 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-white/30 text-sm font-bold tracking-widest text-center">GAMBAR<br/>KARTU MAPRES</span>
                </div>
              )}
            </div>
            
          </div>
        ))}
      </div>

      {/* Dots Indicator */}
      <div className="flex gap-3 mt-16">
        {[1, 2, 3, 4, 5].map((dot, i) => (
          <div key={i} className={`w-3 h-3 rounded-full ${i === 0 ? 'bg-cyan-400' : 'bg-white/50'}`}></div>
        ))}
      </div>

    </BaseSection>
  );
}
