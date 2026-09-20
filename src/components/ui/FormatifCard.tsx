import React from 'react';
import Link from 'next/link';

interface FormatifCardProps {
  date: string;
  tag: string;
  title: string;
  description: string;
  image: string;
  href?: string;
}

export default function FormatifCard({ 
  date, 
  tag, 
  title, 
  description, 
  image,
  href = '/baca'
}: FormatifCardProps) {
  return (
    <Link 
      href={href}
      className="w-full max-w-[360px] sm:max-w-[400px] md:max-w-[433px] relative h-[235px] sm:h-[260px] md:h-[280px] lg:h-[300px] rounded-[24px] sm:rounded-[28px] overflow-visible shadow-2xl group hover:-translate-y-2 transition-transform duration-300 flex flex-col justify-end mx-auto cursor-pointer block"
    >
      {/* Background Image Container */}
      <div className="absolute inset-0 w-full h-full rounded-[24px] sm:rounded-[28px] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Frosted Glass Overlay Card (Semi-transparent Spec) Shifted Downwards */}
      <div className="relative z-10 w-[92%] max-w-[335px] sm:max-w-[360px] md:max-w-[393px] h-[145px] sm:h-[160px] md:h-[175px] lg:h-[190px] mx-auto translate-y-[68px] sm:translate-y-[76px] md:translate-y-[84px] lg:translate-y-[95px] p-3.5 sm:p-4 md:p-4 lg:p-5 bg-gradient-to-b from-white/60 via-white/70 to-[#D9ECFF]/75 backdrop-blur-md rounded-[18px] sm:rounded-[24px] border border-white/90 shadow-[0_10px_30px_rgba(0,0,0,0.12)] flex flex-col justify-between text-[#05066D]">
        {/* Tag & Date Header */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          <span className="px-3 sm:px-3.5 py-0.5 sm:py-1 bg-white text-[#0C35E9] text-[11px] sm:text-[12px] font-bold rounded-full shadow-sm">
            {tag}
          </span>
          <span className="text-[#080A8F] text-[11px] sm:text-[12px] font-black">•</span>
          <span className="text-[#080A8F] text-[11px] sm:text-[12px] font-bold">
            {date}
          </span>
        </div>

        {/* Title (Figma Spec: Lato Bold 35.94px on desktop, tailored for tablet and mobile) */}
        <h4 className="w-full max-w-[347px] text-[18px] sm:text-[20px] md:text-[22px] lg:text-[35.94px] font-bold text-[#080A8F] leading-[22px] sm:leading-[25px] md:leading-[28px] lg:leading-[38px] tracking-normal line-clamp-2 flex items-center">
          {title}
        </h4>

        {/* Description (Figma Spec: Lato Regular 11px, Line Height Auto, 347x31px, #080A8F) */}
        <p className="w-full max-w-[347px] text-[11px] sm:text-[11px] md:text-xs lg:text-[11px] font-normal text-[#080A8F] leading-[15px] sm:leading-normal tracking-normal line-clamp-2">
          {description}
        </p>
      </div>
    </Link>
  );
}
