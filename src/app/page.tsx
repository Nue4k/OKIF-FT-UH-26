import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import PrestasiSection from '@/components/PrestasiSection';
import OrganisasiSection from '@/components/OrganisasiSection';
import ProgramKerjaSection from '@/components/ProgramKerjaSection';
import NewsSection from '@/components/NewsSection';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-okif-dark overflow-x-hidden relative">
      
      {/* Main Content Wrapper */}
      <div className="relative z-10 w-full flex flex-col">
        <Navbar />
        <HeroSection />
        <PrestasiSection />
        <OrganisasiSection />
        <ProgramKerjaSection />
        <NewsSection />
      </div>
    </main>
  );
}

