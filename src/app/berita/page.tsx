import React from 'react';
import { Metadata } from 'next';
import Navbar from '@/components/ui/Navbar';
import BeritaHero from '@/components/berita/BeritaHero';
import BeritaSection from '@/components/berita/BeritaSection';
import { beritaService } from '@/services/berita.service';
import { formatifService } from '@/services/formatif.service';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Berita - OKIF FT-UH',
  description: 'Berita dan Kegiatan Terbaru Himpunan Mahasiswa Informatika Fakultas Teknik Universitas Hasanuddin',
};

export default async function BeritaPage() {
  const [allBerita, allFormatif] = await Promise.all([
    beritaService.getAll(false),
    formatifService.getAll(false)
  ]);

  return (
    <main className="flex flex-col min-h-screen bg-[#050170] overflow-x-hidden relative">
      {/* Navbar overlay */}
      <Navbar />

      {/* Main Page Layout */}
      <div className="relative z-10 w-full flex flex-col">
        {allBerita && allBerita.length > 0 ? (
          <BeritaHero 
            title={allBerita[0].title}
            description={allBerita[0].description ? (allBerita[0].description.length > 200 ? allBerita[0].description.substring(0, 200) + '...' : allBerita[0].description) : ''}
            image={allBerita[0].image || '/r54.png'}
            slug={allBerita[0].slug}
          />
        ) : (
          <BeritaHero 
            title="BELUM ADA BERITA"
            description="Belum ada berita yang tersedia saat ini."
            image="/r54.png"
          />
        )}
        <BeritaSection beritaList={allBerita} formatifList={allFormatif} />
      </div>
    </main>
  );
}
