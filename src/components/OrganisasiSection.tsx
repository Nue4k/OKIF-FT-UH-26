import React from 'react';
import Image from 'next/image';
import BaseSection from './BaseSection';

export default function OrganisasiSection() {
  return (
    <BaseSection
      id="organisasi"
      variant="transparent"
      className="!pt-4 !pb-[25px] relative flex flex-col"
      containerClassName="!max-w-full !px-0 w-full"
    >
      {/* Right-angled Trapezium Background (Right Half Split) */}
      {/* top-0 anchors to the outer <section>. Skew makes the bottom pull left towards Ketua DMMIF. */}
      <div 
        className="absolute top-0 bottom-0 left-[58%] right-[-50vw] -z-[20] bg-[radial-gradient(ellipse_at_left,_rgba(12,53,233,0.25)_0%,_rgba(12,53,233,0.1)_50%,_transparent_100%)] transform skew-x-[-15deg] origin-top-left rounded-tl-[80px] pointer-events-none"
      ></div>

      {/* Struktur Kepengurusan Title */}
      <div className="relative z-10 flex flex-col items-center text-center mb-16">
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
      <div className="relative z-10 flex items-center justify-between w-full max-w-[1600px] mx-auto px-4 md:px-12 lg:px-24">

        {/* Left Arrow */}
        <button className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-b from-[#0C35E9] to-[#1486F6] rounded-xl border-2 border-[#1486F6] flex items-center justify-center shadow-[0_5px_15px_rgba(0,0,0,0.3)] hover:scale-105 transition-transform z-30 flex-shrink-0">
          <span className="text-white text-2xl font-bold">&lt;</span>
        </button>

        {/* Center Container for Leaders */}
        <div className="flex flex-col md:flex-row flex-1 justify-center items-center gap-10 md:gap-0 relative mt-12">

          {/* Leader 1 (Left) */}
          <div className="relative w-full md:w-1/2 flex justify-center md:justify-end md:pr-24 lg:pr-48 xl:pr-64">

            {/* Photo (Aspect 2:3) */}
            <div className="relative z-10 w-56 md:w-[300px] lg:w-[350px] aspect-[2/3] flex flex-col items-center justify-end">
              
              {/* Name Tag (Floating to the right, anchored to center of photo) */}
              <div className="hidden md:block absolute left-[50%] top-[42%] -translate-y-1/2 bg-gradient-to-r from-[#0C35E9] to-transparent pr-12 lg:pr-20 pl-32 lg:pl-40 py-4 lg:py-5 -z-10 w-max text-left">
                <h4 className="text-xl lg:text-2xl font-black text-white text-glow-sm">A. Tyas Nur Atda</h4>
                <p className="text-base lg:text-lg text-white/90">Ketua DMMIF FT-UH</p>
              </div>

              <Image
                src="/ketua.png"
                alt="Ketua DMMIF"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover mask-image-bottom drop-shadow-2xl"
                style={{ WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)', maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)' }}
              />
              {/* Mobile Name Tag (Visible only on small screens) */}
              <div className="md:hidden mt-4 text-center w-full">
                <h4 className="text-lg font-black text-white text-glow-sm">A. Tyas Nur Atda</h4>
                <p className="text-sm text-white/90">Ketua DMMIF FT-UH</p>
              </div>
            </div>
          </div>

          {/* Leader 2 (Right) */}
          <div className="relative w-full md:w-1/2 flex justify-center md:justify-start md:pl-24 lg:pl-48 xl:pl-64 py-8 md:py-0">

            {/* Photo (Aspect 2:3) */}
            <div className="relative z-10 w-56 md:w-[300px] lg:w-[350px] aspect-[2/3] flex flex-col items-center justify-end">
              
              {/* Name Tag (Floating to the left, anchored to center of photo) */}
              <div className="hidden md:block absolute right-[50%] top-[65%] -translate-y-1/2 bg-gradient-to-l from-[#0C35E9] to-transparent pl-24 lg:pl-32 pr-40 lg:pr-56 py-4 lg:py-5 -z-10 w-max text-right">
                <h4 className="text-xl lg:text-2xl font-black text-white text-glow-sm">A. Tyas Nur Atda</h4>
                <p className="text-base lg:text-lg text-white/90">Ketua Umum HMIF FT-UH</p>
              </div>

              <Image
                src="/ketua.png"
                alt="Ketua Umum"
                fill
                className="object-cover mask-image-bottom drop-shadow-2xl -scale-x-100"
                style={{ WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)', maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)' }}
              />
              {/* Mobile Name Tag (Visible only on small screens) */}
              <div className="md:hidden mt-4 text-center w-full">
                <h4 className="text-lg font-black text-white text-glow-sm">A. Tyas Nur Atda</h4>
                <p className="text-sm text-white/90">Ketua Umum HMIF FT-UH</p>
              </div>
            </div>
          </div>

        </div>

        {/* Right Arrow */}
        <button className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-b from-[#0C35E9] to-[#1486F6] rounded-xl border-2 border-[#1486F6] flex items-center justify-center shadow-[0_5px_15px_rgba(0,0,0,0.3)] hover:scale-105 transition-transform z-30 flex-shrink-0">
          <span className="text-white text-2xl font-bold">&gt;</span>
        </button>

      </div>

    </BaseSection>
  );
}
