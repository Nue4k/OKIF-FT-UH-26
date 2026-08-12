import React from 'react';
import { Metadata } from 'next';
import Navbar from '@/components/ui/Navbar';
import BeritaHero from '@/components/berita/BeritaHero';
import BeritaSection from '@/components/berita/BeritaSection';

export const metadata: Metadata = {
  title: 'Berita - OKIF FT-UH',
  description: 'Berita dan Kegiatan Terbaru Himpunan Mahasiswa Informatika Fakultas Teknik Universitas Hasanuddin',
};

export default function BeritaPage() {
  return (
    <main className="flex flex-col min-h-screen bg-[#050170] overflow-x-hidden relative">
      {/* Navbar overlay */}
      <Navbar />

      {/* Main Page Layout */}
      <div className="relative z-10 w-full flex flex-col">
        <BeritaHero />
        <BeritaSection />
      </div>
    </main>
  );
}
