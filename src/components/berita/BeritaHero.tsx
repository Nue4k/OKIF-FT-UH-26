import React from 'react';
import Link from 'next/link';
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
      className="w-full min-h-screen h-[100dvh] pt-20 sm:pt-24 md:pt-28 lg:pt-36 pb-10 sm:pb-14 md:pb-16 lg:pb-24 flex flex-col justify-end relative overflow-hidden isolate"
      containerClassName="!max-w-[1360px] !px-4 sm:!px-8 md:!px-8 text-white items-start"
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
      <div className="relative z-10 w-full flex flex-col items-start gap-2.5 sm:gap-3 md:gap-4">
        {/* Badge Pill */}
        <div className="bg-gradient-to-b from-[#0C35E9] to-[#1486F6] text-white font-bold text-[11px] min-[360px]:text-xs sm:text-sm md:text-base lg:text-[18px] px-3.5 py-1.5 sm:px-5 sm:py-2 rounded-xl inline-block shadow-md tracking-normal uppercase">
          {badge}
        </div>

        {/* Title */}
        <h1 className="text-2xl min-[360px]:text-[28px] sm:text-3xl md:text-4xl lg:text-5xl xl:text-[64.43px] font-black text-white uppercase leading-tight md:leading-tight lg:leading-[58px] drop-shadow-lg max-w-5xl">
          {title}
        </h1>

        {/* Description */}
        <p className="text-white text-xs min-[360px]:text-[13px] sm:text-sm md:text-base lg:text-[18px] font-normal max-w-5xl leading-relaxed drop-shadow line-clamp-3 sm:line-clamp-none">
          {description}
        </p>

        {/* BACA Button */}
        <div className="pt-1 sm:pt-2">
          <Link
            href="/baca"
            className="px-5 py-1 sm:px-6 sm:py-1.5 rounded-[10px] sm:rounded-xl border-2 border-white text-white font-bold text-xs sm:text-sm md:text-base lg:text-[17px] uppercase hover:bg-white hover:text-[#080A8F] transition-all duration-300 shadow-md inline-block"
          >
            BACA
          </Link>
        </div>
      </div>
    </BaseSection>
  );
}
