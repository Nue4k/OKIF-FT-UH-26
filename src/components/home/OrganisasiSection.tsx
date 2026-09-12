import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import BaseSection from '@/components/ui/BaseSection';

export default function OrganisasiSection() {
  return (
    <BaseSection
      id="organisasi"
      variant="transparent"
      className="pt-12 md:pt-20 !pb-[80px] md:!pb-[120px] relative flex flex-col isolate"
      containerClassName="!max-w-full !px-0 w-full"
    >
      {/* Background Trapezium */}
      <div
        className="absolute top-0 bottom-[70px] md:bottom-[100px] left-[32%] right-[-50vw] -z-20 bg-gradient-to-r from-[#0021B0]/25 via-[#1486F6]/15 to-transparent transform skew-x-[-28deg] origin-bottom-left rounded-tl-[80px] pointer-events-none"
      ></div>
      <div className="relative z-10 flex flex-col items-center text-center mb-6 md:mb-8">
        <div className="bg-gradient-to-b from-[#0C35E9] to-[#1486F6] text-white font-bold text-sm md:text-lg px-6 py-2 rounded-xl inline-block mb-6 shadow-lg">
          STRUKTUR KEPENGURUSAN
        </div>
        <h2 className="text-3xl md:text-5xl font-black text-white leading-tight mb-2">
          ORGANISASI KEMAHASISWAAN INFORMATIKA
        </h2>
        <h3 className="text-xl md:text-3xl font-black text-cyan-400">
          FAKULTAS TEKNIK UNIVERSITAS HASANUDDIN
        </h3>
      </div>

      {/* Leaders */}
      <div className="relative z-20 flex items-center justify-between w-full max-w-[1860px] mx-auto px-4 md:px-8 lg:px-12">

        {/* Left Arrow */}
        <Link href="/tentang-kami?view=dmmif" className="z-30 flex-shrink-0 transform translate-x-4 md:translate-x-10 lg:translate-x-20">
          <button className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-b from-[#0C35E9]/60 to-[#1486F6]/60 backdrop-blur-md rounded-[14px] md:rounded-[18px] border border-white flex items-center justify-center shadow-[0_4px_15px_rgba(0,0,0,0.35)] hover:scale-105 transition-transform">
            <svg className="w-6 h-6 md:w-7 md:h-7 text-white stroke-[3.5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        </Link>

        {/* Center Container */}
        <div className="flex flex-col md:flex-row flex-1 justify-center items-center relative z-20 mt-0 px-2 md:px-6 gap-20 md:gap-40 lg:gap-80 max-w-[1820px] mx-auto">

          {/* Leader 1 */}
          <div className="relative z-20 w-full md:w-1/2 flex justify-center md:justify-end">

            {/* Photo */}
            <div className="relative z-10 w-64 md:w-[350px] lg:w-[410px] h-[350px] md:h-[490px] lg:h-[575px] flex flex-col items-center justify-end">

              {/* Name Tag */}
              <div className="hidden md:flex absolute left-[39.5%] top-[40%] -translate-y-1/2 w-[380px] lg:w-[500px] h-[75px] lg:h-[95px] bg-gradient-to-r from-[#0C35E9] via-[#0C35E9]/90 to-transparent pl-34 lg:pl-[200px] pr-4 flex-col justify-center text-left rounded-[20px] -z-10 pointer-events-none">
                <h4 className="text-lg md:text-[26px] lg:text-[31px] font-black text-white leading-tight [text-shadow:0_0_15px_rgba(255,255,255,0.9),0_0_30px_rgba(20,134,246,0.8)]">A. Tyas Nur Atda</h4>
                <p className="text-sm md:text-[18px] lg:text-[23px] font-normal text-white leading-snug">Ketua DMMIF FT-UH</p>
              </div>

              {/* Photo Wrapper */}
              <div className="relative z-10 w-full h-full">
                <Image
                  src="/ketua.png"
                  alt="Ketua DMMIF"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover mask-image-bottom drop-shadow-2xl"
                  style={{ WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)', maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)' }}
                />
              </div>

              {/* Mobile Tag */}
              <div className="md:hidden mt-4 text-center w-full">
                <h4 className="text-2xl font-black text-white [text-shadow:0_0_15px_rgba(255,255,255,0.9),0_0_30px_rgba(20,134,246,0.8)]">A. Tyas Nur Atda</h4>
                <p className="text-lg font-normal text-white">Ketua DMMIF FT-UH</p>
              </div>
            </div>
          </div>

          {/* Leader 2 */}
          <div className="relative z-20 w-full md:w-1/2 flex justify-center md:justify-start py-8 md:py-0">

            {/* Photo */}
            <div className="relative z-10 w-64 md:w-[350px] lg:w-[410px] h-[350px] md:h-[490px] lg:h-[575px] flex flex-col items-center justify-end">

              {/* Name Tag */}
              <div className="hidden md:block absolute right-[65%] top-[66%] -translate-y-1/2 bg-gradient-to-l from-[#0C35E9] via-[#0C35E9]/90 to-transparent pl-8 lg:pl-12 pr-32 lg:pr-[150px] py-3.5 lg:py-4.5 -z-10 w-max text-left rounded-l-2xl pointer-events-none">
                <h4 className="text-lg md:text-[26px] lg:text-[30px] font-black text-white leading-tight [text-shadow:0_0_15px_rgba(255,255,255,0.9),0_0_30px_rgba(20,134,246,0.8)]">A. Tyas Nur Atda</h4>
                <p className="text-sm md:text-[18px] lg:text-[22px] font-normal text-white leading-snug">Ketua Umum HMIF FT-UH</p>
              </div>

              {/* Photo Wrapper */}
              <div className="relative z-10 w-full h-full">
                <Image
                  src="/ketua.png"
                  alt="Ketua Umum"
                  fill
                  className="object-cover mask-image-bottom drop-shadow-2xl -scale-x-100"
                  style={{ WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)', maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)' }}
                />
              </div>
              {/* Mobile Tag */}
              <div className="md:hidden mt-4 text-center w-full">
                <h4 className="text-2xl font-black text-white [text-shadow:0_0_15px_rgba(255,255,255,0.9),0_0_30px_rgba(20,134,246,0.8)]">A. Tyas Nur Atda</h4>
                <p className="text-lg font-normal text-white">Ketua Umum HMIF FT-UH</p>
              </div>
            </div>
          </div>

        </div>

        {/* Right Arrow */}
        <Link href="/tentang-kami?view=hmif" className="z-30 flex-shrink-0 transform -translate-x-4 md:-translate-x-10 lg:-translate-x-20">
          <button className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-b from-[#0C35E9]/60 to-[#1486F6]/60 backdrop-blur-md rounded-[14px] md:rounded-[18px] border border-white flex items-center justify-center shadow-[0_4px_15px_rgba(0,0,0,0.35)] hover:scale-105 transition-transform">
            <svg className="w-6 h-6 md:w-7 md:h-7 text-white stroke-[3.5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </Link>

      </div>

    </BaseSection>
  );
}
