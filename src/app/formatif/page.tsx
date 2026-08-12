import React from 'react';
import { Metadata } from 'next';
import Navbar from '@/components/ui/Navbar';
import FormatifHero from '@/components/formatif/FormatifHero';
import FormatifSection from '@/components/formatif/FormatifSection';

export const metadata: Metadata = {
  title: 'Formatif - OKIF FT-UH',
  description:
    'Kegiatan Formatif Himpunan Mahasiswa Informatika Fakultas Teknik Universitas Hasanuddin',
};

export default function FormatifPage() {
  return (
    <main className="flex flex-col min-h-screen bg-[#050170] overflow-x-hidden relative">
      {/* Navbar overlay */}
      <Navbar />

      {/* Main Page Layout */}
      <div className="relative z-10 w-full flex flex-col">
        <FormatifHero />
        <FormatifSection />
      </div>
    </main>
  );
}
