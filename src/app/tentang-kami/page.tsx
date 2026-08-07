"use client";

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/ui/Navbar';
import BaseSection from '@/components/ui/BaseSection';
import DmmifView from '@/components/tentang-kami/DmmifView';
import HmifView from '@/components/tentang-kami/HmifView';

function TentangKamiContent() {
  const searchParams = useSearchParams();
  const isHmif = searchParams.get('view') === 'hmif';

  return (
    <main className="flex flex-col min-h-screen bg-[#080A8F] overflow-x-hidden relative">
      <div className="relative z-10 w-full flex flex-col">
        <Navbar />

        {/* Hero Section */}
        <BaseSection
          id="hero-tentang-kami"
          variant="transparent"
          className="pt-32 pb-16 md:pb-24 flex flex-col justify-center relative overflow-hidden bg-[url('/hero-bg-118.png')] bg-cover bg-[center_-50px] bg-no-repeat"
          containerClassName="text-center gap-6"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#080A8F]"></div>
          <div className="relative z-10 flex flex-col items-center justify-center pt-12 max-w-5xl mx-auto w-full">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white tracking-wide leading-tight drop-shadow-md">
              ORGANISASI KEMAHASISWAAN INFORMATIKA FT-UH PERIODE 2026
            </h1>
          </div>
        </BaseSection>

        {/* Tab Buttons */}
        <div className="w-full max-w-[1400px] mx-auto px-4 flex flex-col md:flex-row gap-4 justify-center items-stretch md:items-center relative z-20 -mt-12 md:-mt-16">
            <Link href="/tentang-kami?view=dmmif" className="w-full md:w-1/2">
                <button className={`w-full h-full py-2 md:py-3 px-4 md:px-6 rounded-lg font-bold text-sm md:text-base md:whitespace-nowrap border-2 transition-all shadow-lg ${!isHmif ? 'bg-[#0C35E9] text-white border-[#0C35E9]' : 'bg-transparent text-white border-white/50 hover:bg-white/10 backdrop-blur-sm'}`}>
                    DEWAN MUSYAWARAH MAHASISWA INFORMATIKA FT-UH
                </button>
            </Link>
            <Link href="/tentang-kami?view=hmif" className="w-full md:w-1/2">
                <button className={`w-full h-full py-2 md:py-3 px-4 md:px-6 rounded-lg font-bold text-sm md:text-base md:whitespace-nowrap border-2 transition-all shadow-lg ${isHmif ? 'bg-[#0C35E9] text-white border-[#0C35E9]' : 'bg-transparent text-white border-white/50 hover:bg-white/10 backdrop-blur-sm'}`}>
                    HIMPUNAN MAHASISWA INFORMATIKA FT-UH
                </button>
            </Link>
        </div>

        {/* Views */}
        <div className="w-full px-4 min-h-[60vh] bg-gradient-to-b from-[#080A8F] to-[#5DF4EF]/20 pb-32">
            {!isHmif ? <DmmifView /> : <HmifView />}
        </div>
      </div>
    </main>
  );
}

export default function TentangKamiPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#080A8F]"></div>}>
      <TentangKamiContent />
    </Suspense>
  );
}
