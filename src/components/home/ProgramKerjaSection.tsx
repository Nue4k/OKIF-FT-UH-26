import React from 'react';
import BaseSection from '@/components/ui/BaseSection';
import HorizontalScrollContainer from '@/components/ui/HorizontalScrollContainer';

export default function ProgramKerjaSection() {
  const kompartemen = [
    'KOMPARTEMEN PENDIDIKAN',
    'KOMPARTEMEN PSDM',
    'KOMPARTEMEN KAJIAN SASTRA',
    'KOMPARTEMEN KESEKRETARIATAN',
    'KOMPARTEMEN PENDIDIKAN',
  ];

  return (
    <BaseSection id="proker" variant="transparent" className="pt-0 md:pt-2 -mt-8 md:-mt-14 !pb-[32px] relative flex flex-col isolate">

      {/* Left Light Glow - 100% Exact Figma Specs: Group 111 */}
      {/* Ellipse 21 (932px, #0C35E9) | Ellipse 22 (746px, #5DF4EF) | Ellipse 23 (505px, #FFFFFF) */}
      <div className="absolute top-1/2 -left-[500px] md:-left-[750px] -translate-y-1/2 w-[600px] h-[600px] md:w-[932px] md:h-[932px] pointer-events-none -z-20 overflow-visible flex items-center justify-center">
        <div 
          className="w-full h-full rounded-full blur-[60px] md:blur-[90px]"
          style={{
            background: `
              radial-gradient(
                circle at 50% 50%,
                #FFFFFF 0%,
                #FFFFFF 42%,
                #5DF4EF 72%,
                rgba(12, 53, 233, 0.75) 88%,
                rgba(12, 53, 233, 0) 98%,
                transparent 100%
              )
            `
          }}
        />
      </div>

      {/* Right Light Glow - 100% Exact Figma Specs: Group 116 */}
      {/* Ellipse 21 (932px, #0C35E9) | Ellipse 22 (746px, #5DF4EF) | Ellipse 23 (505px, #FFFFFF) */}
      <div className="absolute top-1/2 -right-[500px] md:-right-[750px] -translate-y-1/2 w-[600px] h-[600px] md:w-[932px] md:h-[932px] pointer-events-none -z-20 overflow-visible flex items-center justify-center">
        <div 
          className="w-full h-full rounded-full blur-[60px] md:blur-[90px]"
          style={{
            background: `
              radial-gradient(
                circle at 50% 50%,
                #FFFFFF 0%,
                #FFFFFF 42%,
                #5DF4EF 72%,
                rgba(12, 53, 233, 0.75) 88%,
                rgba(12, 53, 233, 0) 98%,
                transparent 100%
              )
            `
          }}
        />
      </div>

      <div className="w-full flex flex-col items-start text-left mb-10 relative z-10">
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
      <HorizontalScrollContainer className="justify-start gap-4 w-full mb-12 pb-2 relative z-10">
        {kompartemen.map((item, index) => (
          <button
            key={index}
            className={`px-6 py-3 rounded-[16px] font-bold text-sm md:text-base transition-all whitespace-nowrap flex-shrink-0 ${index === 0
              ? 'bg-white text-[#0C35E9] border-2 border-white shadow-md'
              : 'bg-transparent text-white border-2 border-white hover:bg-white/10'
              }`}
          >
            {item}
          </button>
        ))}
      </HorizontalScrollContainer>

      {/* Program Kerja Box */}
      <div className="w-full flex flex-col gap-6 relative z-10">

        {/* Top Box: Program Kerja */}
        <div className="w-full bg-gradient-to-b from-[#0C35E9] via-[#080A8F] to-[#040659] rounded-[32px] border-2 border-white/80 p-6 md:p-8 flex flex-col gap-3 shadow-[0_15px_35px_rgba(0,0,0,0.5)]">
          <h3 className="text-2xl md:text-3xl font-bold text-white">Program Kerja</h3>
          <ul className="text-lg md:text-xl text-white/90 list-disc list-inside space-y-2 leading-relaxed">
            <li>
              <span className="font-bold text-white">Kegiatan Skala Nasional</span> sebagai wadah untuk mengembangkan pengetahuan dan keterampilan peserta.
            </li>
          </ul>
        </div>

        {/* Bottom Box: Deskripsi Kerja */}
        <div className="w-full bg-gradient-to-b from-[#0C35E9] via-[#080A8F] to-[#040659] rounded-[32px] border-2 border-white/80 p-6 md:p-8 flex flex-col gap-3 shadow-[0_15px_35px_rgba(0,0,0,0.5)]">
          <h3 className="text-2xl md:text-3xl font-bold text-white">Deskripsi Kerja</h3>
          <ul className="text-lg md:text-xl text-white/90 list-disc list-inside space-y-2 leading-relaxed">
            <li>Melakukan pengawasan dan pendampingan akademik untuk mahasiswa teknik Informatika</li>
            <li>Pendataan Mahasiswa berprestasi</li>
            <li>Pengenalan dunia kerja dan keprofesian</li>
            <li>Pelatihan keilmuan dan mentoring mata kuliah mahasiswa</li>
            <li>Memberikan informasi terkait beasiswa, lomba, dan konten edukatif</li>
          </ul>
        </div>

      </div>

    </BaseSection>
  );
}
