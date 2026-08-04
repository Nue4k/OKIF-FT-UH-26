import React from 'react';
import BaseSection from './BaseSection';

export default function PrestasiSection() {
  const prestasiData = [
    { nama: 'A. Tyas Nur Atda', prestasi: 'Juara 1 GEMASTIK', image: 'https://placehold.co/318x438/0C35E9/FFF?text=Foto' },
    { nama: 'A. Tyas Nur Atda', prestasi: 'Juara 1 GEMASTIK', image: 'https://placehold.co/318x438/0C35E9/FFF?text=Foto' },
    { nama: 'A. Tyas Nur Atda', prestasi: 'Juara 1 GEMASTIK', image: 'https://placehold.co/318x438/0C35E9/FFF?text=Foto' },
    { nama: 'A. Tyas Nur Atda', prestasi: 'Juara 1 GEMASTIK', image: 'https://placehold.co/318x438/0C35E9/FFF?text=Foto' },
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
            
            {/* Glowing Border Background Box */}
            <div className="absolute top-4 w-[90%] h-[365px] bg-[#080A8F] shadow-[15px_15px_15px_rgba(0,0,0,0.5)] rounded-2xl outline outline-[6px] outline-[#1486F6] blur-sm transition-all duration-300 group-hover:blur-md"></div>
            
            {/* Main Gradient Box */}
            <div className="absolute top-4 w-[90%] h-[365px] bg-gradient-to-b from-[#0C35E9] to-[#050170] rounded-[16px] border-[1.5px] border-white z-0"></div>
            
            {/* Image Placeholder */}
            <div className="relative z-10 w-full h-[437px] overflow-hidden -mt-4 mb-4 flex justify-center">
              {/* Note: In a real app, use next/image here */}
              <img 
                src={item.image} 
                alt={item.nama} 
                className="w-full h-full object-cover rounded-t-3xl mask-image-bottom"
                style={{ WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)', maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)' }}
              />
            </div>
            
            {/* Text Overlay on top of image fade */}
            <div className="absolute bottom-6 z-20 flex flex-col items-center text-center w-full">
              <h3 className="text-2xl font-black text-white text-glow-sm">{item.nama}</h3>
              <p className="text-xl font-bold text-white mt-1">{item.prestasi}</p>
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
