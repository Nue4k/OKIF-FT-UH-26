import React from 'react';
import BaseSection from '@/components/ui/BaseSection';

interface FormatifHeroProps {
  title?: string;
  subtitle?: string;
  image?: string;
}

export default function FormatifHero({
  title = 'FORMATIF HMIF FT-UH',
  subtitle = 'PENJELASAN APA ITU FORMATIF',
  image = '/r54.png',
}: FormatifHeroProps) {
  return (
    <BaseSection
      id="hero-formatif"
      variant="transparent"
      className="h-[730px] min-h-[730px] pt-28 md:pt-36 pb-16 md:pb-24 flex flex-col justify-center items-center relative overflow-hidden isolate"
      containerClassName="!max-w-[1360px] !px-4 text-white items-center justify-center text-center"
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

      {/* Content Container (Centered) */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center text-center gap-3 md:gap-4 max-w-4xl mx-auto">
        {/* Title (Figma spec: Lato Black 64.43px, line-height 58px, text #FFFFFF) */}
        <h1 className="text-3xl md:text-5xl lg:text-[64.43px] font-black text-white uppercase leading-tight lg:leading-[58px] drop-shadow-lg max-w-5xl text-center">
          {title}
        </h1>

        {/* Subtitle / Description (Figma spec: Lato Italic 18px, text #FFFFFF) */}
        <p className="text-white text-[18px] font-normal italic uppercase drop-shadow max-w-2xl text-center">
          {subtitle}
        </p>
      </div>
    </BaseSection>
  );
}
