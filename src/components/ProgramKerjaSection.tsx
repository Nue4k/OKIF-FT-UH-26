import React from 'react';
import BaseSection from './BaseSection';

export default function ProgramKerjaSection() {
  const kompartemen = [
    'KOMPARTEMEN PENDIDIKAN',
    'KOMPARTEMEN PSDM',
    'KOMPARTEMEN KAJIAN SASTRA',
    'KOMPARTEMEN KESEKRETARIATAN',
    'KOMPARTEMEN PENDIDIKAN',
  ];

  return (
    <BaseSection id="proker" variant="transparent" className="py-32 md:py-48 min-h-screen relative flex flex-col justify-center">
      
      <div className="flex flex-col items-center text-center mb-16">
        <div className="bg-gradient-to-b from-[#0C35E9] to-[#1486F6] text-white font-bold text-sm md:text-lg px-6 py-2 rounded-xl inline-block mb-6 shadow-lg">
          PROGRAM KERJA DAN DESKRIPSI KERJA
        </div>
        <h2 className="text-3xl md:text-5xl font-black text-white leading-tight mb-2">
          HIMPUNAN MAHASISWA INFORMATIKA
        </h2>
        <h3 className="text-xl md:text-3xl font-black text-cyan-400">
          FAKULTAS TEKNIK UNIVERSITAS HASANUDDIN
        </h3>
      </div>

      {/* Kompartemen Tabs */}
      <div className="flex flex-wrap justify-center gap-4 w-full max-w-5xl mb-12">
        {kompartemen.map((item, index) => (
          <button 
            key={index} 
            className={`px-6 py-3 rounded-2xl font-bold text-sm md:text-base border transition-all ${
              index === 0 
              ? 'bg-white text-[#0C35E9] border-white shadow-[0_0_15px_rgba(255,255,255,0.5)]' 
              : 'bg-[#080A8F] text-white border-white/30 hover:bg-white/10'
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Program Kerja Box */}
      <div className="w-full flex flex-col gap-6">
        
        {/* Top Box: Program Kerja */}
        <div className="w-full bg-gradient-to-b from-[#0C35E9]/40 via-[#1486F6]/40 to-[#050170]/40 rounded-[32px] border-2 border-white/80 p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center gap-6 shadow-[0_15px_25px_rgba(0,0,0,0.3)]">
          <div className="md:w-1/4">
            <h3 className="text-3xl font-bold text-white">Program Kerja</h3>
          </div>
          <div className="md:w-3/4">
            <p className="text-xl md:text-2xl text-white">
              <span className="font-bold">Kegiatan Skala Nasional</span> sebagai wadah untuk mengembangkan pengetahuan dan keterampilan peserta.
            </p>
          </div>
        </div>

        {/* Bottom Box: Deskripsi Kerja */}
        <div className="w-full bg-gradient-to-b from-[#0C35E9]/40 via-[#1486F6]/40 to-[#050170]/40 rounded-[32px] border-2 border-[#1486F6] p-8 md:p-10 flex flex-col md:flex-row gap-6 shadow-[0_15px_25px_rgba(0,0,0,0.3)]">
          <div className="md:w-1/4">
            <h3 className="text-3xl font-bold text-white">Deskripsi Kerja</h3>
          </div>
          <div className="md:w-3/4">
            <ul className="text-xl md:text-2xl text-white/90 list-disc list-inside space-y-3 leading-relaxed">
              <li>Melakukan pengawasan dan pendampingan akademik untuk mahasiswa teknik Informatika</li>
              <li>Pendataan Mahasiswa berprestasi</li>
              <li>Pengenalan dunia kerja dan keprofesian</li>
              <li>Pelatihan keilmuan dan mentoring mata kuliah mahasiswa</li>
              <li>Memberikan informasi terkait beasiswa, lomba, dan konten edukatif</li>
            </ul>
          </div>
        </div>

      </div>

    </BaseSection>
  );
}
