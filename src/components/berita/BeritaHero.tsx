import React from 'react';
import BaseSection from '@/components/ui/BaseSection';

interface BeritaHeroProps {
  badge?: string;
  title?: string;
  description?: string;
  image?: string;
}

export default function BeritaHero({
  badge = 'KEGIATAN TERBARU',
  title = 'PENGABDIAN MASYARAKAT',
  description = 'Himpunan Mahasiswa Informatika Fakultas Teknik Universitas Hasanuddin - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  image = '/r54.png',
}: BeritaHeroProps) {
  return (
    <BaseSection
      id="hero-berita"
      variant="transparent"
      className="h-[730px] min-h-[730px] pt-28 md:pt-36 pb-16 md:pb-24 flex flex-col justify-end relative overflow-hidden isolate"
      containerClassName="!max-w-[1360px] !px-4 text-white items-start"
    >
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient Overlay matching Figma spec (#0C35E9 0% at top to #050170 100% at bottom) */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0C35E9]/0 via-[#050170]/60 to-[#050170]" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full flex flex-col items-start gap-3 md:gap-4">
        {/* Badge Pill */}
        <div className="bg-gradient-to-b from-[#0C35E9] to-[#1486F6] text-white font-bold text-[18px] px-5 py-2 rounded-[10px] inline-block shadow-md tracking-wider uppercase">
          {badge}
        </div>

        {/* Title (Figma spec: Lato Black 64.43px, line-height 58px) */}
        <h1 className="text-3xl md:text-5xl lg:text-[64.43px] font-black text-white uppercase leading-tight lg:leading-[58px] drop-shadow-lg max-w-5xl">
          {title}
        </h1>

        {/* Description (Figma spec: Lato Regular 18px, text #FFFFFF) */}
        <p className="text-white text-base md:text-[18px] font-normal max-w-5xl leading-relaxed drop-shadow">
          {description}
        </p>

        {/* BACA Button (Figma spec: Lato Regular 17px, text #FFFFFF) */}
        <div className="pt-2">
          <button className="px-6 py-1.5 rounded-[10px] border-2 border-white text-white font-normal text-[17px] uppercase hover:bg-white hover:text-[#080A8F] transition-all duration-300 shadow-md">
            BACA
          </button>
        </div>
      </div>
    </BaseSection>
  );
}
