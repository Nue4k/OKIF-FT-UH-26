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
      <div className="flex flex-col md:flex-row justify-center items-end gap-8 md:gap-32 w-full mb-32 relative">
        {/* Leader 1 */}
        <div className="flex flex-col items-center relative z-10 group">
          <div className="w-64 md:w-80 h-[400px] relative">
            <div className="absolute bottom-0 left-0 w-full h-[80%] bg-gradient-to-r from-[#0C35E9]/40 to-[#050170]/40 rounded-t-[40px] -z-10 border border-white/20"></div>
            <img src="https://placehold.co/442x609/000/FFF?text=Foto+Ketua+DMMIF" alt="Ketua DMMIF" className="w-full h-full object-cover rounded-t-[40px] drop-shadow-2xl mask-image-bottom" />
          </div>
          <div className="mt-6 text-center">
            <h4 className="text-2xl md:text-3xl font-black text-white text-glow-sm">A. Tyas Nur Atda</h4>
            <p className="text-xl font-normal text-white">Ketua DMMIF FT-UH</p>
          </div>
        </div>

        {/* Arrow / Separator (can be an icon, we leave space for now) */}
        <div className="hidden md:flex gap-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            {/* Arrows pointing left and right */}
            <div className="w-12 h-12 bg-gradient-to-b from-[#0C35E9]/60 to-[#1486F6]/60 rounded-xl border border-white flex items-center justify-center shadow-[0_7px_7px_rgba(0,0,0,0.4)]">
                <span className="text-white text-2xl font-bold">&lt;</span>
            </div>
            <div className="w-12 h-12 bg-gradient-to-b from-[#0C35E9]/60 to-[#1486F6]/60 rounded-xl border border-white flex items-center justify-center shadow-[0_7px_7px_rgba(0,0,0,0.4)]">
                <span className="text-white text-2xl font-bold">&gt;</span>
            </div>
        </div>

        {/* Leader 2 */}
        <div className="flex flex-col items-center relative z-10 group">
          <div className="w-64 md:w-80 h-[400px] relative">
            <div className="absolute bottom-0 left-0 w-full h-[80%] bg-gradient-to-r from-[#0C35E9]/40 to-[#050170]/40 rounded-t-[40px] -z-10 border border-white/20"></div>
            <img src="https://placehold.co/442x609/000/FFF?text=Foto+Ketua+Umum" alt="Ketua Umum" className="w-full h-full object-cover rounded-t-[40px] drop-shadow-2xl mask-image-bottom" />
          </div>
          <div className="mt-6 text-center">
            <h4 className="text-2xl md:text-3xl font-black text-white text-glow-sm">A. Tyas Nur Atda</h4>
            <p className="text-xl font-normal text-white">Ketua Umum HMIF FT-UH</p>
          </div>
        </div>
      </div>

      {/* About Box */}
      <div className="w-full bg-gradient-to-b from-[#0C35E9] to-[#050170] rounded-[32px] border-[3px] border-[#1486F6] p-8 md:p-12 shadow-[16px_16px_16px_rgba(0,0,0,0.2)] relative overflow-hidden">
        
        {/* Glow effect inside box */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#1486F6]/20 blur-[80px] pointer-events-none"></div>

        <div className="flex flex-col lg:flex-row gap-12 relative z-10">
          
          {/* Left: Image */}
          <div className="w-full lg:w-[45%]">
            <img src="https://placehold.co/547x353/000/FFF?text=Foto+Kegiatan" alt="Kegiatan" className="w-full h-auto rounded-3xl object-cover shadow-lg border border-white/10" />
          </div>

          {/* Right: Content */}
          <div className="w-full lg:w-[55%] flex flex-col justify-center">
            
            {/* Tabs */}
            <div className="flex gap-4 mb-8">
              <button className="px-6 py-2 bg-gradient-to-b from-[#0C35E9] to-[#1486F6] text-white font-bold rounded-xl shadow-md">
                TENTANG KAMI
              </button>
              <button className="px-6 py-2 bg-[#080A8F] text-white font-bold rounded-xl border border-white/30 hover:bg-white/10 transition">
                VISI
              </button>
              <button className="px-6 py-2 bg-[#080A8F] text-white font-bold rounded-xl border border-white/30 hover:bg-white/10 transition">
                MISI
              </button>
            </div>

            {/* Title & Description */}
            <h2 className="text-5xl md:text-[65px] font-black text-white mb-6 leading-none">OKIF FT-UH</h2>
            <div className="text-lg md:text-xl text-white/90 space-y-6 font-normal">
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
