"use client";

import React, { useState } from 'react';
import BaseSection from '@/components/ui/BaseSection';
import HorizontalScrollContainer from '@/components/ui/HorizontalScrollContainer';

interface KompartemenItem {
  name: string;
  proker: { title: string; desc: string }[];
  deskripsi: string[];
}

const kompartemenList: KompartemenItem[] = [
  {
    name: 'KOMPARTEMEN PENDIDIKAN',
    proker: [
      {
        title: 'Kegiatan Skala Nasional',
        desc: '',
      },
    ],
    deskripsi: [
      'Melakukan pengawasan dan pendampingan akademik untuk mahasiswa teknik Informatika',
      'Pendataan Mahasiswa berprestasi',
      'Pengenalan dunia kerja dan keprofesian',
      'Pelatihan keilmuan dan mentoring mata kuliah mahasiswa',
      'Memberikan informasi terkait beasiswa, lomba, dan konten edukatif',
    ],
  },
  {
    name: 'KOMPARTEMEN PSDM',
    proker: [
      {
        title: 'Follow Up LKMM-TD',
        desc: '',
      },
    ],
    deskripsi: [
      'Mengadakan atau memfasilitasi kegiatan keagamaan',
      'Pemetaan potensi minat dan bakat',
      'Melakukan pendampingan kepada peserta yang ingin mengikuti pengembangan diri ekstra',
      'Mengadakan kegiatan olahraga dalam upaya mempererat silaturahmi',
    ],
  },
  {
    name: 'KOMPARTEMEN KAJIAN DAN AKSI STRATEGIS',
    proker: [
      {
        title: 'FORMATIF (Forum Diskusi Himpunan Mahasiswa Informatika)',
        desc: '',
      },
    ],
    deskripsi: [
      'Melakukan kajian dan riset terhadap isu-isu keinformatikaan sebagai landasan penyusunan rekomendasi dan program kerja HMIF FT-UH',
      'Menghimpun, mengkaji, dan mengawal aspirasi mahasiswa Informatika melalui diskusi, forum kajian, serta rekomendasi kepada pihak terkait',
      'Menghasilkan dan mempublikasikan kajian artikel terkait keinformatikaan secara berkala guna meningkatkan budaya literasi mahasiswa',
      'Mengelola pusat riset dan hasil kajian sebagai basis pengetahuan HMIF',
    ],
  },
  {
    name: 'KOMPARTEMEN KESEKRETARIATAN',
    proker: [],
    deskripsi: [
      'Pembuatan Spanduk Time Schedule Program Kerja HMIF FT-UH Periode 2026 dan Bagan Struktur Pengurus DMMIF FT-UH Periode 2026 serta HMIF FT-UH Periode 2026',
      'Pengelolaan Administrasi HMIF FT-UH',
      'Penyediaan Data Anggota dan Alumni',
      'Pengelolaan dan Pengadaan Inventaris Sekretariat OKIF FT-UH',
      'Pemeliharaan Kenyamanan dan Ketertiban Sekretariat',
    ],
  },
  {
    name: 'KOMPARTEMEN SOSIAL MASYARAKAT',
    proker: [
      {
        title: 'Bakti UMKM',
        desc: '',
      },
    ],
    deskripsi: [
      'INSPIRE (Informatics for Social Progress and Responsible Engagement)',
      'Follow up kegiatan Bakti UMKM',
    ],
  },
  {
    name: 'KOMPARTEMEN MEDIA DAN INFORMASI',
    proker: [],
    deskripsi: [
      'Mendokumentasikan dan mempublikasikan seluruh kegiatan OKIF FT-UH',
      'Meningkatkan kuantitas dan kualitas publikasi konten kreatif',
      'Mengelola, mengoptimalkan, dan memelihara seluruh kanal media sosial resmi OKIF FT-UH',
      'Koordinasi dengan Komponen Pendukung OKIF FT-UH',
    ],
  },
];

export default function ProgramKerjaSection() {
  const [activeIdx, setActiveIdx] = useState(0);

  const currentKompartemen = kompartemenList[activeIdx] || kompartemenList[0];

  return (
    <BaseSection id="proker" variant="transparent" className="pt-0 md:pt-2 -mt-8 md:-mt-14 !pb-[32px] relative flex flex-col isolate" containerClassName="!max-w-full !px-0 w-full">

      {/* Left Light Glow - 100% Exact Figma Specs: Group 111 */}
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

      {/* Main Container Wrapper - Identical to AboutSection */}
      <div className="relative w-full max-w-[1360px] mx-auto z-10 px-4 sm:px-6 md:px-8 flex flex-col">
        <div className="w-full flex flex-col items-center md:items-start text-center md:text-left mb-6 md:mb-8 lg:mb-10">
          <div className="bg-gradient-to-b from-[#0C35E9] to-[#1486F6] text-white font-bold text-xs sm:text-sm md:text-base lg:text-lg px-4 sm:px-5 py-1.5 sm:py-2 rounded-xl inline-block mb-3 md:mb-4 lg:mb-6 shadow-md text-center tracking-normal uppercase">
            PROGRAM KERJA DAN DESKRIPSI KERJA
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-5xl font-black text-white leading-tight mb-1.5 sm:mb-2 uppercase">
            HIMPUNAN MAHASISWA INFORMATIKA
          </h2>
          <h3 className="text-base sm:text-xl md:text-xl lg:text-3xl font-black text-cyan-400 leading-snug uppercase">
            FAKULTAS TEKNIK UNIVERSITAS HASANUDDIN
          </h3>
        </div>

        {/* Kompartemen Tabs */}
        <HorizontalScrollContainer className="justify-start gap-2.5 sm:gap-3 md:gap-3.5 lg:gap-4 w-full mb-6 md:mb-8 lg:mb-10 pb-1 md:pb-2">
          {kompartemenList.map((item, index) => {
            const isActive = index === activeIdx;
            return (
              <button
                key={index}
                onClick={() => setActiveIdx(index)}
                className={`h-[38px] sm:h-[40px] md:h-[42px] px-3.5 sm:px-4 md:px-5 lg:px-6 rounded-[14px] sm:rounded-[16.26px] font-extrabold text-xs sm:text-xs md:text-sm lg:text-base transition-all whitespace-nowrap flex-shrink-0 cursor-pointer flex items-center justify-center ${
                  isActive
                    ? 'bg-white text-[#080A8F] border-[1.63px] border-white shadow-md'
                    : 'bg-transparent text-white hover:bg-white/10 border-[1.63px] border-white'
                }`}
                type="button"
              >
                {item.name}
              </button>
            );
          })}
        </HorizontalScrollContainer>

        {/* Program Kerja Box */}
        <div className="w-full flex flex-col gap-4 sm:gap-6">

          {/* Top Box: Program Kerja */}
          {currentKompartemen.proker && currentKompartemen.proker.length > 0 && (
            <div
              className="w-full rounded-[24px] sm:rounded-[32px] border-2 border-white px-4 sm:px-6 md:px-7 lg:px-[36px] py-3.5 sm:py-4 md:py-4 lg:py-[17px] backdrop-blur-md flex flex-col gap-2 sm:gap-2.5 shadow-lg transition-all duration-300"
              style={{
                background: 'linear-gradient(90deg, rgba(12, 53, 233, 0.69) 0%, rgba(8, 10, 143, 0.69) 100%)',
              }}
            >
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white text-left">Program Kerja</h3>
              <ul className="text-xs sm:text-sm md:text-base lg:text-xl text-white/90 list-disc list-inside space-y-1.5 sm:space-y-2 leading-relaxed">
                {currentKompartemen.proker.map((p, idx) => (
                  <li key={idx}>
                    {p.title}{p.desc ? ` ${p.desc}` : ''}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Bottom Box: Deskripsi Kerja */}
          <div
            className="w-full rounded-[24px] sm:rounded-[32px] border-2 border-white px-4 sm:px-6 md:px-7 lg:px-[36px] py-3.5 sm:py-4 md:py-4 lg:py-[17px] backdrop-blur-md flex flex-col gap-2 sm:gap-2.5 shadow-lg transition-all duration-300"
            style={{
              background: 'linear-gradient(90deg, rgba(12, 53, 233, 0.69) 0%, rgba(8, 10, 143, 0.69) 100%)',
            }}
          >
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white text-left">Deskripsi Kerja</h3>
            <ul className="text-xs sm:text-sm md:text-base lg:text-xl text-white/90 list-disc list-inside space-y-1.5 sm:space-y-2 leading-relaxed">
              {currentKompartemen.deskripsi.map((d, idx) => (
                <li key={idx}>{d}</li>
              ))}
            </ul>
          </div>

        </div>
      </div>

    </BaseSection>
  );
}
