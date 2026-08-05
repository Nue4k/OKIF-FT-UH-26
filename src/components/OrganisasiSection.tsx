import React from 'react';
import BaseSection from './BaseSection';

export default function OrganisasiSection() {
  return (
    <BaseSection id="organisasi" variant="transparent" className="py-32 md:py-48 min-h-screen relative flex flex-col justify-center">
      
      {/* Glow background behind leaders */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-[#1486F6]/20 blur-[100px] rounded-full -z-10 pointer-events-none"></div>

      <div className="flex flex-col items-center text-center mb-16">
        <div className="bg-gradient-to-b from-[#0C35E9] to-[#1486F6] text-white font-bold text-sm md:text-lg px-6 py-2 rounded-xl inline-block mb-6 shadow-lg">
          STRUKTUR KEPENGURUSAN
        </div>
        <h2 className="text-3xl md:text-5xl font-black text-white leading-tight mb-2">
          ORGANISASI KEMAHASISWAAN INFORMATIKA
        </h2>
        <h3 className="text-xl md:text-3xl font-black text-cyan-400">
          FAKULTAS TEKNIK UNIVERSITAS HASANUDDIN
        </h3>
      </div>

      {/* Leaders */}
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto mb-32 relative px-4 md:px-12">
        
        {/* Left Arrow */}
        <button className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-b from-[#0C35E9] to-[#1486F6] rounded-xl border-2 border-[#1486F6] flex items-center justify-center shadow-[0_5px_15px_rgba(0,0,0,0.3)] hover:scale-105 transition-transform z-30 flex-shrink-0">
          <span className="text-white text-2xl font-bold">&lt;</span>
        </button>

        {/* Center Container for Leaders */}
        <div className="flex flex-col md:flex-row flex-1 justify-center items-center gap-10 md:gap-0 relative mt-12">
          
          {/* Leader 1 (Left) */}
          <div className="relative w-full md:w-1/2 flex justify-center md:justify-end md:pr-20 lg:pr-32">
            {/* Name Tag (Floating to the right, starting behind photo) */}
            <div className="hidden md:block absolute left-[30%] lg:left-[40%] top-[42%] -translate-y-1/2 bg-gradient-to-r from-[#0C35E9] to-transparent pr-8 lg:pr-12 pl-40 lg:pl-48 py-2 lg:py-3 z-0 w-max text-left">
              <h4 className="text-base lg:text-lg font-black text-white text-glow-sm">A. Tyas Nur Atda</h4>
              <p className="text-xs lg:text-sm text-white/90">Ketua DMMIF FT-UH</p>
            </div>
            
            {/* Photo (Aspect 2:3) */}
            <div className="relative z-10 w-48 md:w-64 lg:w-72 aspect-[2/3] flex flex-col items-center justify-end">
              <img 
                src="/ketua.png" 
                alt="Ketua DMMIF" 
                className="w-full h-full object-cover mask-image-bottom drop-shadow-2xl"
                style={{ WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)', maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)' }}
              />
              {/* Mobile Name Tag (Visible only on small screens) */}
              <div className="md:hidden mt-4 text-center w-full">
                <h4 className="text-lg font-black text-white text-glow-sm">A. Tyas Nur Atda</h4>
                <p className="text-sm text-white/90">Ketua DMMIF FT-UH</p>
              </div>
            </div>
          </div>

          {/* Leader 2 (Right) */}
          <div className="relative w-full md:w-1/2 flex justify-center md:justify-start md:pl-20 lg:pl-32">
            {/* Name Tag (Floating to the left, starting behind photo) */}
            <div className="hidden md:block absolute right-[30%] lg:right-[40%] top-[65%] -translate-y-1/2 bg-gradient-to-l from-[#0C35E9] to-transparent pl-8 lg:pl-12 pr-40 lg:pr-48 py-2 lg:py-3 z-0 w-max text-right">
              <h4 className="text-base lg:text-lg font-black text-white text-glow-sm">A. Tyas Nur Atda</h4>
              <p className="text-xs lg:text-sm text-white/90">Ketua Umum HMIF FT-UH</p>
            </div>
            
            {/* Photo (Aspect 2:3) */}
            <div className="relative z-10 w-48 md:w-64 lg:w-72 aspect-[2/3] flex flex-col items-center justify-end">
              <img 
                src="/ketua.png" 
                alt="Ketua Umum" 
                className="w-full h-full object-cover mask-image-bottom drop-shadow-2xl -scale-x-100"
                style={{ WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)', maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)' }}
              />
              {/* Mobile Name Tag (Visible only on small screens) */}
              <div className="md:hidden mt-4 text-center w-full">
                <h4 className="text-lg font-black text-white text-glow-sm">A. Tyas Nur Atda</h4>
                <p className="text-sm text-white/90">Ketua Umum HMIF FT-UH</p>
              </div>
            </div>
          </div>

        </div>

        {/* Right Arrow */}
        <button className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-b from-[#0C35E9] to-[#1486F6] rounded-xl border-2 border-[#1486F6] flex items-center justify-center shadow-[0_5px_15px_rgba(0,0,0,0.3)] hover:scale-105 transition-transform z-30 flex-shrink-0">
          <span className="text-white text-2xl font-bold">&gt;</span>
        </button>

      </div>

      {/* About Box */}
      <div className="w-full bg-gradient-to-b from-[#0C35E9] to-[#050170] rounded-[32px] border-[3px] border-[#1486F6] p-8 md:p-12 shadow-[16px_16px_16px_rgba(0,0,0,0.2)] relative overflow-hidden">
        
        {/* Glow effect inside box */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#1486F6]/20 blur-[80px] pointer-events-none"></div>

        <div className="flex flex-col lg:flex-row gap-12 relative z-10 items-center">
          
          {/* Left: Image */}
          <div className="w-full lg:w-[45%] flex justify-center">
            <img src="https://placehold.co/547x365/000/FFF?text=Foto+Kegiatan" alt="Kegiatan" className="w-full aspect-[3/2] rounded-3xl object-cover shadow-lg border border-white/10" />
          </div>

          {/* Right: Content */}
          <div className="w-full lg:w-[55%] flex flex-col justify-center">
            
            {/* Tabs */}
            <div className="flex flex-wrap gap-3 mb-6">
              <button className="px-5 py-1.5 bg-gradient-to-b from-[#0C35E9] to-[#1486F6] text-white text-sm md:text-base font-bold rounded-xl shadow-md">
                TENTANG KAMI
              </button>
              <button className="px-5 py-1.5 bg-[#080A8F] text-white text-sm md:text-base font-bold rounded-xl border border-white/30 hover:bg-white/10 transition">
                VISI
              </button>
              <button className="px-5 py-1.5 bg-[#080A8F] text-white text-sm md:text-base font-bold rounded-xl border border-white/30 hover:bg-white/10 transition">
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

    </BaseSection>
  );
}
