"use client";

import React from 'react';
import Navbar from '@/components/ui/Navbar';
import BaseSection from '@/components/ui/BaseSection';
import MemberCarousel from '@/components/tentang-kami/MemberCarousel';
import { MemberItem } from '@/components/tentang-kami/TentangKamiMemberCard';

// Sample members list for DMMIF (5 members, no navigation needed)
const dmmifMembers: MemberItem[] = [
  { id: 'dmmif-1', name: 'Ahmad Naufaldy H.', role: 'Ketua', imageUrl: '/silhouette.svg' },
  { id: 'dmmif-2', name: 'Sabrun Rifqi A.', role: 'Sekretaris', imageUrl: '/silhouette.svg' },
  { id: 'dmmif-3', name: 'Muh. Randy Muflih', role: 'Komisi A', imageUrl: '/silhouette.svg' },
  { id: 'dmmif-4', name: 'Adelia Fachrani', role: 'Komisi B', imageUrl: '/silhouette.svg' },
  { id: 'dmmif-5', name: 'Intan', role: 'Komisi C', imageUrl: '/silhouette.svg' },
];

export default function DmmifPage() {
  return (
    <main className="flex flex-col min-h-screen bg-okif-darker overflow-x-hidden relative">
      <Navbar />

      {/* 1. Hero Section */}
      <BaseSection
        id="hero-dmmif"
        variant="transparent"
        className="w-full min-h-screen h-dvh pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-8 sm:pb-12 md:pb-16 lg:pb-20 flex flex-col justify-center items-center relative overflow-hidden isolate"
        containerClassName="!max-w-[1360px] !px-4 text-white items-center justify-center text-center"
      >
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/r54.png"
            alt="Dewan Musyawarah Mahasiswa Informatika FT-UH"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-linear-to-b from-okif-primary/0 via-okif-darker/60 to-okif-darker" />
        </div>

        {/* Centered Title */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-318 mx-auto w-full px-3 sm:px-4">
          <h1 className="text-xl min-[360px]:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[64.43px] font-black text-white uppercase leading-7 min-[360px]:leading-8.5 sm:leading-10 md:leading-12 lg:leading-14.5 xl:leading-15.5 tracking-[0%] drop-shadow-lg text-center">
            DEWAN MUSYAWARAH MAHASISWA
            <br />
            INFORMATIKA FT-UH PERIODE 2026
          </h1>
        </div>
      </BaseSection>

      {/* Main Body Content */}
      <div className="relative z-10 w-full max-w-360 mx-auto px-2.5 sm:px-4 md:px-6 mt-4 sm:mt-8 md:mt-10 lg:mt-24 pb-16 sm:pb-20 md:pb-24 lg:pb-32 flex flex-col gap-8 sm:gap-10 md:gap-12 lg:gap-20">
        <section
          id="dmmif"
          className="flex flex-col gap-3.5 sm:gap-5 md:gap-6 scroll-mt-20 sm:scroll-mt-22 md:scroll-mt-25 lg:scroll-mt-30"
        >
          <h2 className="px-3.5 sm:px-6 md:px-8 lg:px-14 text-lg min-[360px]:text-xl sm:text-2xl md:text-[28px] lg:text-[36px] xl:text-[48px] font-black text-white leading-snug tracking-normal">
            Dewan Musyawarah Mahasiswa Informatika FT-UH
          </h2>
          <div className="w-full">
            <MemberCarousel members={dmmifMembers} showNavigation={false} />
          </div>
        </section>
      </div>
    </main>
  );
}
