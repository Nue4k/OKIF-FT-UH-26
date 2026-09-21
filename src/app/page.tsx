import Navbar from '@/components/ui/Navbar';
import HeroSection from '@/components/home/HeroSection';
import PrestasiSection from '@/components/home/PrestasiSection';
import AboutSection from '@/components/home/AboutSection';
import OrganisasiSection from '@/components/home/OrganisasiSection';
import ProgramKerjaSection from '@/components/home/ProgramKerjaSection';
import FormatifSection from '@/components/home/FormatifSection';
import BeritaSection from '@/components/home/BeritaSection';

import { beritaService } from '@/services/berita.service';
import { formatifService } from '@/services/formatif.service';
import { prestasiService } from '@/services/prestasi.service';

export const revalidate = 60; // Revalidate every 60 seconds

export default async function Home() {
  const [allBerita, allFormatif, allPrestasi] = await Promise.all([
    beritaService.getAll(false), // Ambil semua berita published
    formatifService.getAll(false), // Ambil semua formatif published
    prestasiService.getAll(false) // Ambil semua prestasi published
  ]);

  const beritaList = allBerita.slice(0, 3);
  const formatifList = allFormatif.slice(0, 3);
  const prestasiList = allPrestasi.slice(0, 8);

  return (
    <main className="flex flex-col min-h-screen bg-okif-dark overflow-x-hidden relative">
      
      {/* Main Content Wrapper */}
      <div className="relative z-10 w-full flex flex-col">
        <Navbar />
        <HeroSection />
        <PrestasiSection prestasiList={prestasiList} />
        <AboutSection />
        <OrganisasiSection />
        <ProgramKerjaSection />
        <FormatifSection formatifList={formatifList} />
        <BeritaSection beritaList={beritaList} />
      </div>
    </main>
  );
}

