import Navbar from '@/components/ui/Navbar';
import HeroSection from '@/components/home/HeroSection';
import PrestasiSection from '@/components/home/PrestasiSection';
import AboutSection from '@/components/home/AboutSection';
import OrganisasiSection from '@/components/home/OrganisasiSection';
import ProgramKerjaSection from '@/components/home/ProgramKerjaSection';
import FormatifSection from '@/components/home/FormatifSection';
import PengabdianSection from '@/components/home/PengabdianSection';

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

