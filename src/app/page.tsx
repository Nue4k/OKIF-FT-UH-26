import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import PrestasiSection from '@/components/PrestasiSection';
import AboutSection from '@/components/AboutSection';
import OrganisasiSection from '@/components/OrganisasiSection';
import ProgramKerjaSection from '@/components/ProgramKerjaSection';
import FormatifSection from '@/components/FormatifSection';
import PengabdianSection from '@/components/PengabdianSection';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-okif-dark overflow-x-hidden relative">
      
      {/* Main Content Wrapper */}
      <div className="relative z-10 w-full flex flex-col">
        <Navbar />
        <HeroSection />
        <PrestasiSection />
        <AboutSection />
        <OrganisasiSection />
        <ProgramKerjaSection />
        <FormatifSection />
        <PengabdianSection />
      </div>
    </main>
  );
}

