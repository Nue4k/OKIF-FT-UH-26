"use client";

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/ui/Navbar';
import BaseSection from '@/components/ui/BaseSection';
import MemberCarousel from '@/components/tentang-kami/MemberCarousel';
import { MemberItem } from '@/components/tentang-kami/TentangKamiMemberCard';
import HorizontalScrollContainer from '@/components/ui/HorizontalScrollContainer';

interface KompartemenData {
  id: string;
  name: string;
  proker: {
    title: string;
    desc: string;
  }[];
  deskripsiKerja: string[];
  members: MemberItem[];
}

// Sample members list for DMMIF (5 members, no navigation needed)
const dmmifMembers: MemberItem[] = [
  { id: 'dmmif-1', name: 'Ahmad Naufaldy H.', role: 'Ketua', imageUrl: '/ketua.png' },
  { id: 'dmmif-2', name: 'Sabrun Rifqi A.', role: 'Sekretaris', imageUrl: '/ketua.png' },
  { id: 'dmmif-3', name: 'Muh. Randy Muflih', role: 'Komisi A', imageUrl: '/ketua.png' },
  { id: 'dmmif-4', name: 'Adelia Fachrani', role: 'Komisi B', imageUrl: '/ketua.png' },
  { id: 'dmmif-5', name: 'Intan', role: 'Komisi C', imageUrl: '/ketua.png' },
];

// Sample members list for HMIF Pengurus Inti (7 members)
const hmifIntiMembers: MemberItem[] = [
  { id: 'hmif-1', name: 'M. Yusuf Irawan A.', role: 'Ketua', imageUrl: '/ketua.png' },
  { id: 'hmif-2', name: 'Mutiara', role: 'Sekretaris', imageUrl: '/ketua.png' },
  { id: 'hmif-3', name: 'Imtyas Qanita R.', role: 'Bendahara', imageUrl: '/ketua.png' },
  { id: 'hmif-4', name: 'Muh. An’amullah A.', role: 'Koor. Internal', imageUrl: '/ketua.png' },
  { id: 'hmif-5', name: 'Anisa Sri Rejeki P.', role: 'Sekre. Internal', imageUrl: '/ketua.png' },
  { id: 'hmif-6', name: 'Muh. Zayyan D. Y.', role: 'Koor. Eksternal', imageUrl: '/ketua.png' },
  { id: 'hmif-7', name: 'Nurul Fauziah M.', role: 'Sekre. Eksternal', imageUrl: '/ketua.png' },
];

// Kompartemen definitions synced 100% with homepage (ProgramKerjaSection.tsx)
const kompartemenList: KompartemenData[] = [
  {
    id: 'pendidikan',
    name: 'KOMPARTEMEN PENDIDIKAN',
    proker: [
      {
        title: 'Kegiatan Skala Nasional',
        desc: '',
      },
    ],
    deskripsiKerja: [
      'Melakukan pengawasan dan pendampingan akademik untuk mahasiswa teknik Informatika',
      'Pendataan Mahasiswa berprestasi',
      'Pengenalan dunia kerja dan keprofesian',
      'Pelatihan keilmuan dan mentoring mata kuliah mahasiswa',
      'Memberikan informasi terkait beasiswa, lomba, dan konten edukatif',
    ],
    members: [
      { id: 'pnd-1', name: 'Aysar Afdhillah A.', role: 'Ketua', imageUrl: '/ketua.png' },
      { id: 'pnd-2', name: 'Gracia Aurelya', role: 'Anggota', imageUrl: '/ketua.png' },
      { id: 'pnd-3', name: 'Zalsabila Tun N. N.', role: 'Anggota', imageUrl: '/ketua.png' },
      { id: 'pnd-4', name: 'Priskalyanawati A.', role: 'Anggota', imageUrl: '/ketua.png' },
      { id: 'pnd-5', name: 'Chelsea Elysia C.', role: 'Anggota', imageUrl: '/ketua.png' },
      { id: 'pnd-6', name: 'Efraim Imanuel P.', role: 'Anggota', imageUrl: '/ketua.png' },
      { id: 'pnd-7', name: 'Cristiko Esteranto', role: 'Anggota', imageUrl: '/ketua.png' },
      { id: 'pnd-8', name: 'Muh. Rhiza Arrazi', role: 'Anggota', imageUrl: '/ketua.png' },
      { id: 'pnd-9', name: 'Zahra Salsabila', role: 'Anggota', imageUrl: '/ketua.png' },
      { id: 'pnd-10', name: 'N. Fiqhranie A. A.', role: 'Anggota', imageUrl: '/ketua.png' },
      { id: 'pnd-11', name: 'M. Dafansyah P. S.', role: 'Anggota', imageUrl: '/ketua.png' },
    ],
  },
  {
    id: 'psdm',
    name: 'KOMPARTEMEN PSDM',
    proker: [
      {
        title: 'Follow Up LKMM-TD',
        desc: '',
      },
    ],
    deskripsiKerja: [
      'Mengadakan atau memfasilitasi kegiatan keagamaan',
      'Pemetaan potensi minat dan bakat',
      'Melakukan pendampingan kepada peserta yang ingin mengikuti pengembangan diri ekstra',
      'Mengadakan kegiatan olahraga dalam upaya mempererat silaturahmi',
    ],
    members: [
      { id: 'psdm-1', name: 'Muh Yusuf Ma’ruf', role: 'Ketua', imageUrl: '/ketua.png' },
      { id: 'psdm-2', name: 'A. Raihan Fayad S.', role: 'Anggota', imageUrl: '/ketua.png' },
      { id: 'psdm-3', name: 'Z. Ahmad Ghufran A.', role: 'Anggota', imageUrl: '/ketua.png' },
      { id: 'psdm-4', name: 'Muh. Ihlasul Amal', role: 'Anggota', imageUrl: '/ketua.png' },
      { id: 'psdm-5', name: 'Winny Gracia T.', role: 'Anggota', imageUrl: '/ketua.png' },
      { id: 'psdm-6', name: 'Nabila Azzahra', role: 'Anggota', imageUrl: '/ketua.png' },
      { id: 'psdm-7', name: 'Elok Humairo', role: 'Anggota', imageUrl: '/ketua.png' },
      { id: 'psdm-8', name: 'Andi Farhan Adam', role: 'Anggota', imageUrl: '/ketua.png' },
      { id: 'psdm-9', name: 'M. Aqil Muflih Khair', role: 'Anggota', imageUrl: '/ketua.png' },
      { id: 'psdm-10', name: 'Nurul Azisa', role: 'Anggota', imageUrl: '/ketua.png' },
      { id: 'psdm-11', name: 'Aditya Nofriyanto M.', role: 'Anggota', imageUrl: '/ketua.png' },
    ],
  },
  {
    id: 'kastrat',
    name: 'KOMPARTEMEN KAJIAN DAN AKSI STRATEGIS',
    proker: [
      {
        title: 'FORMATIF (Forum Diskusi Himpunan Mahasiswa Informatika)',
        desc: '',
      },
    ],
    deskripsiKerja: [
      'Melakukan kajian dan riset terhadap isu-isu keinformatikaan sebagai landasan penyusunan rekomendasi dan program kerja HMIF FT-UH',
      'Menghimpun, mengkaji, dan mengawal aspirasi mahasiswa Informatika melalui diskusi, forum kajian, serta rekomendasi kepada pihak terkait',
      'Menghasilkan dan mempublikasikan kajian artikel terkait keinformatikaan secara berkala guna meningkatkan budaya literasi mahasiswa',
      'Mengelola pusat riset dan hasil kajian sebagai basis pengetahuan HMIF',
    ],
    members: [
      { id: 'kst-1', name: 'M. Naufal Aisy A. B.', role: 'Ketua', imageUrl: '/ketua.png' },
      { id: 'kst-2', name: 'Dita Ayodya Al Mira', role: 'Anggota', imageUrl: '/ketua.png' },
      { id: 'kst-3', name: 'Ahmad Ali Khatib', role: 'Anggota', imageUrl: '/ketua.png' },
      { id: 'kst-4', name: 'Gizalda Risqia K. S.', role: 'Anggota', imageUrl: '/ketua.png' },
      { id: 'kst-5', name: 'Annisa Ayu Anggraini', role: 'Anggota', imageUrl: '/ketua.png' },
      { id: 'kst-6', name: 'Amar Rafii Ansariadi', role: 'Anggota', imageUrl: '/ketua.png' },
      { id: 'kst-7', name: 'Aisha Azqifah', role: 'Anggota', imageUrl: '/ketua.png' },
      { id: 'kst-8', name: 'Fanny Pricilia N. F.', role: 'Anggota', imageUrl: '/ketua.png' },
      { id: 'kst-9', name: 'Nabilah Pratiwi. S.', role: 'Anggota', imageUrl: '/ketua.png' },
    ],
  },
  {
    id: 'kesekretariatan',
    name: 'KOMPARTEMEN KESEKRETARIATAN',
    proker: [],
    deskripsiKerja: [
      'Pembuatan Spanduk Time Schedule Program Kerja HMIF FT-UH Periode 2026 dan Bagan Struktur Pengurus DMMIF FT-UH Periode 2026 serta HMIF FT-UH Periode 2026',
      'Pengelolaan Administrasi HMIF FT-UH',
      'Penyediaan Data Anggota dan Alumni',
      'Pengelolaan dan Pengadaan Inventaris Sekretariat OKIF FT-UH',
      'Pemeliharaan Kenyamanan dan Ketertiban Sekretariat',
    ],
    members: [
      { id: 'ksk-1', name: 'Wilcky Variel Suanda', role: 'Ketua', imageUrl: '/ketua.png' },
      { id: 'ksk-2', name: 'Rifaldi', role: 'Anggota', imageUrl: '/ketua.png' },
      { id: 'ksk-3', name: 'Nadiah Alya Khirani', role: 'Anggota', imageUrl: '/ketua.png' },
      { id: 'ksk-4', name: 'Muthiah Annisa M.', role: 'Anggota', imageUrl: '/ketua.png' },
      { id: 'ksk-5', name: 'Nadya Kezia G. S. T.', role: 'Anggota', imageUrl: '/ketua.png' },
      { id: 'ksk-6', name: 'Heniel Putri T. R. P.', role: 'Anggota', imageUrl: '/ketua.png' },
      { id: 'ksk-7', name: 'Andi Muh. Daffa D.', role: 'Anggota', imageUrl: '/ketua.png' },
      { id: 'ksk-8', name: 'Muhammad Zuhdy', role: 'Anggota', imageUrl: '/ketua.png' },
      { id: 'ksk-9', name: 'Fithrianny R.', role: 'Anggota', imageUrl: '/ketua.png' },
      { id: 'ksk-10', name: 'Belia Atalie M.', role: 'Anggota', imageUrl: '/ketua.png' },
      { id: 'ksk-11', name: 'Rifdha Zahrani', role: 'Anggota', imageUrl: '/ketua.png' },
    ],
  },
  {
    id: 'sosmas',
    name: 'KOMPARTEMEN SOSIAL MASYARAKAT',
    proker: [
      {
        title: 'Bakti UMKM',
        desc: '',
      },
    ],
    deskripsiKerja: [
      'INSPIRE (Informatics for Social Progress and Responsible Engagement)',
      'Follow up kegiatan Bakti UMKM',
    ],
    members: [
      { id: 'sos-1', name: 'M. Faiq Fadhlul Aziz', role: 'Ketua', imageUrl: '/ketua.png' },
      { id: 'sos-2', name: 'Ainun Jariah', role: 'Anggota', imageUrl: '/ketua.png' },
      { id: 'sos-3', name: 'Siti Nurauliya', role: 'Anggota', imageUrl: '/ketua.png' },
      { id: 'sos-4', name: 'Nanda Rizky Aulia', role: 'Anggota', imageUrl: '/ketua.png' },
      { id: 'sos-5', name: 'Rafeyfah Najmi A.', role: 'Anggota', imageUrl: '/ketua.png' },
      { id: 'sos-6', name: 'Aulia Dwinatasha L. ', role: 'Anggota', imageUrl: '/ketua.png' },
      { id: 'sos-7', name: 'Ahmad Nur Alim', role: 'Anggota', imageUrl: '/ketua.png' },
      { id: 'sos-8', name: 'Marfin Jonathan', role: 'Anggota', imageUrl: '/ketua.png' },
      { id: 'sos-9', name: 'Dimas K. S.', role: 'Anggota', imageUrl: '/ketua.png' },
      { id: 'sos-10', name: 'Nur Fadiyah Syafiqah', role: 'Anggota', imageUrl: '/ketua.png' },
      { id: 'sos-11', name: 'Andini Nurul M.', role: 'Anggota', imageUrl: '/ketua.png' },
    ],
  },
  {
    id: 'medinfo',
    name: 'KOMPARTEMEN MEDIA DAN INFORMASI',
    proker: [],
    deskripsiKerja: [
      'Mendokumentasikan dan mempublikasikan seluruh kegiatan OKIF FT-UH',
      'Meningkatkan kuantitas dan kualitas publikasi konten kreatif',
      'Mengelola, mengoptimalkan, dan memelihara seluruh kanal media sosial resmi OKIF FT-UH',
      'Koordinasi dengan Komponen Pendukung OKIF FT-UH',
    ],
    members: [
      { id: 'med-1', name: 'A. Tyas Nur Atda', role: 'Ketua', imageUrl: '/ketua.png' },
      { id: 'med-2', name: 'Zilfany Nur A’athifah', role: 'Anggota', imageUrl: '/ketua.png' },
      { id: 'med-3', name: 'Hanzalahnur Solikhin', role: 'Anggota', imageUrl: '/ketua.png' },
      { id: 'med-4', name: 'Faiz Fathan Averill', role: 'Anggota', imageUrl: '/ketua.png' },
      { id: 'med-5', name: 'Akhmad Zaki Hasrul', role: 'Anggota', imageUrl: '/ketua.png' },
      { id: 'med-6', name: 'Muh. Imam Fadhil A.', role: 'Anggota', imageUrl: '/ketua.png' },
      { id: 'med-7', name: 'M. Nadhiftamma A.', role: 'Anggota', imageUrl: '/ketua.png' },
      { id: 'med-8', name: 'Afifah Shafira P. M.', role: 'Anggota', imageUrl: '/ketua.png' },
      { id: 'med-9', name: 'Brigitte Margie G. A.', role: 'Anggota', imageUrl: '/ketua.png' },
      { id: 'med-10', name: 'Dinda Nor’aini', role: 'Anggota', imageUrl: '/ketua.png' },
    ],
  },
];

export default function TentangKamiPage() {
  const [selectedKompartemen, setSelectedKompartemen] = useState<string>(kompartemenList[0].id);

  const activeKompartemen =
    kompartemenList.find((k) => k.id === selectedKompartemen) || kompartemenList[0];

  useEffect(() => {
    const handleScrollToSection = () => {
      const hash = window.location.hash.toLowerCase();
      const params = new URLSearchParams(window.location.search);
      const view = (params.get('view') || '').toLowerCase();

      let targetId: string | null = null;
      if (hash === '#dmmif' || hash === '#dewan' || view === 'dmmif' || view === 'dewan') {
        targetId = 'dmmif';
      } else if (hash === '#hmif' || hash === '#himpunan' || view === 'hmif' || view === 'himpunan') {
        targetId = 'hmif';
      }

      if (targetId) {
        const el = document.getElementById(targetId);
        if (el) {
          const navEl = document.querySelector('nav');
          const navbarHeight = navEl ? navEl.offsetHeight : 100;
          const windowHeight = window.innerHeight;
          const visibleHeight = windowHeight - navbarHeight;
          const elementHeight = el.offsetHeight;
          const extraSpace = Math.max(0, (visibleHeight - elementHeight) / 2);

          const elementRect = el.getBoundingClientRect();
          const targetY = window.pageYOffset + elementRect.top - navbarHeight - extraSpace;

          window.scrollTo({
            top: Math.max(0, targetY),
            behavior: 'instant',
          });
        }
      }
    };

    // Run immediately to avoid any visible scrolling/sliding motion
    handleScrollToSection();
    const rafId = requestAnimationFrame(handleScrollToSection);
    const timer = setTimeout(handleScrollToSection, 100);

    window.addEventListener('hashchange', handleScrollToSection);
    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(timer);
      window.removeEventListener('hashchange', handleScrollToSection);
    };
  }, []);

  return (
    <main className="flex flex-col min-h-screen bg-[#08117A] overflow-x-hidden relative">
      <Navbar />

      {/* 1. Hero Section */}
      <BaseSection
        id="hero-tentang-kami"
        variant="transparent"
        className="w-full min-h-screen h-[100dvh] pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-8 sm:pb-12 md:pb-16 lg:pb-20 flex flex-col justify-center items-center relative overflow-hidden isolate"
        containerClassName="!max-w-[1360px] !px-4 text-white items-center justify-center text-center"
      >
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/r54.png"
            alt="Organisasi Kemahasiswaan Informatika FT-UH"
            className="w-full h-full object-cover object-center"
          />
          {/* Gradient Overlay matching Figma spec (#0C35E9 0% at top to #08117A 100% at bottom) */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0C35E9]/0 via-[#08117A]/60 to-[#08117A]" />
        </div>

        {/* Centered Title */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-[1272px] mx-auto w-full px-3 sm:px-4">
          <h1 className="text-xl min-[360px]:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[64.43px] font-black text-white uppercase leading-[28px] min-[360px]:leading-[34px] sm:leading-[40px] md:leading-[48px] lg:leading-[58px] xl:leading-[62px] tracking-[0%] drop-shadow-lg text-center">
            ORGANISASI KEMAHASISWAAN
            <br />
            INFORMATIKA FT-UH PERIODE 2026
          </h1>
        </div>
      </BaseSection>

      {/* Main Body Content */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-2.5 sm:px-4 md:px-6 mt-4 sm:mt-8 md:mt-10 lg:mt-24 pb-16 sm:pb-20 md:pb-24 lg:pb-32 flex flex-col gap-8 sm:gap-10 md:gap-12 lg:gap-20">

        {/* 2. Section: Dewan Musyawarah Mahasiswa Informatika FT-UH */}
        <section
          id="dmmif"
          className="flex flex-col gap-3.5 sm:gap-5 md:gap-6 scroll-mt-[80px] sm:scroll-mt-[88px] md:scroll-mt-[100px] lg:scroll-mt-[120px]"
        >
          <h2 className="px-3.5 sm:px-6 md:px-8 lg:px-14 text-lg min-[360px]:text-xl sm:text-2xl md:text-[28px] lg:text-[36px] xl:text-[48px] font-black text-white leading-snug tracking-normal">
            Dewan Musyawarah Mahasiswa Informatika FT-UH
          </h2>
          <div className="w-full">
            <MemberCarousel members={dmmifMembers} showNavigation={false} />
          </div>
        </section>

        {/* 3. Section: Himpunan Mahasiswa Informatika FT-UH */}
        <section
          id="hmif"
          className="flex flex-col gap-3.5 sm:gap-5 md:gap-6 scroll-mt-[80px] sm:scroll-mt-[88px] md:scroll-mt-[100px] lg:scroll-mt-[120px]"
        >
          <h2 className="px-3.5 sm:px-6 md:px-8 lg:px-14 text-lg min-[360px]:text-xl sm:text-2xl md:text-[28px] lg:text-[36px] xl:text-[48px] font-black text-white leading-snug tracking-normal">
            Himpunan Mahasiswa Informatika FT-UH
          </h2>
          <div className="w-full">
            <MemberCarousel members={hmifIntiMembers} />
          </div>
        </section>

        {/* 4. Section: Kompartemen Pills & Program / Deskripsi Kerja */}
        <section className="flex flex-col gap-4 sm:gap-5 md:gap-6 pt-1 px-3.5 sm:px-6 md:px-8 lg:px-14">
          {/* Pill Tabs for Kompartemen */}
          <HorizontalScrollContainer
            className="w-full items-center gap-2 sm:gap-2.5 md:gap-3 lg:gap-4 py-1"
          >
            {kompartemenList.map((k) => {
              const isActive = k.id === selectedKompartemen;
              return (
                <button
                  key={k.id}
                  type="button"
                  onClick={(e) => {
                    setSelectedKompartemen(k.id);
                    e.currentTarget.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
                  }}
                  className={`h-[34px] sm:h-[38px] md:h-[40px] lg:h-[42px] px-3 sm:px-4 md:px-5 lg:px-6 rounded-[12px] sm:rounded-[14px] md:rounded-[16px] text-[11px] min-[360px]:text-xs sm:text-xs md:text-sm lg:text-base font-extrabold tracking-wide transition-all duration-200 cursor-pointer shrink-0 whitespace-nowrap flex items-center justify-center ${isActive
                    ? 'bg-[#080A8F] text-white border-[1.63px] border-white shadow-md'
                    : 'bg-white text-[#080A8F] hover:bg-slate-50 border-[1.63px] border-[#080A8F]'
                    }`}
                >
                  {k.name}
                </button>
              );
            })}
          </HorizontalScrollContainer>

          {/* Program Kerja Box */}
          {activeKompartemen.proker && activeKompartemen.proker.length > 0 && (
            <div
              className="w-full rounded-[18px] sm:rounded-[24px] md:rounded-[28px] lg:rounded-[32px] border-[1.5px] sm:border-2 border-white px-4 sm:px-6 md:px-7 lg:px-[36px] py-3.5 sm:py-4 md:py-4 lg:py-[17px] backdrop-blur-md flex flex-col gap-2 sm:gap-2.5 shadow-lg transition-all duration-300"
              style={{
                background: 'linear-gradient(90deg, rgba(12, 53, 233, 0.69) 0%, rgba(8, 10, 143, 0.69) 100%)',
              }}
            >
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white text-left tracking-wide">
                Program Kerja
              </h3>
              <ul className="text-xs sm:text-sm md:text-base lg:text-xl text-white/90 list-disc list-inside space-y-1.5 sm:space-y-2 leading-relaxed">
                {activeKompartemen.proker.map((p, idx) => (
                  <li key={idx}>
                    {p.title}{p.desc ? ` ${p.desc}` : ''}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Deskripsi Kerja Box */}
          <div
            className="w-full rounded-[18px] sm:rounded-[24px] md:rounded-[28px] lg:rounded-[32px] border-[1.5px] sm:border-2 border-white px-4 sm:px-6 md:px-7 lg:px-[36px] py-3.5 sm:py-4 md:py-4 lg:py-[17px] backdrop-blur-md flex flex-col gap-2 sm:gap-2.5 shadow-lg transition-all duration-300"
            style={{
              background: 'linear-gradient(90deg, rgba(12, 53, 233, 0.69) 0%, rgba(8, 10, 143, 0.69) 100%)',
            }}
          >
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white text-left tracking-wide">
              Deskripsi Kerja
            </h3>
            <ul className="text-xs sm:text-sm md:text-base lg:text-xl text-white/90 list-disc list-inside space-y-1.5 sm:space-y-2 leading-relaxed">
              {activeKompartemen.deskripsiKerja.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* 5. Section: Kompartemen Members Carousel */}
        <section className="w-full -mt-2 sm:-mt-4 md:-mt-6">
          <MemberCarousel members={activeKompartemen.members} />
        </section>

      </div>
    </main>
  );
}
