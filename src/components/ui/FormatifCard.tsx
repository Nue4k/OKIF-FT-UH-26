import React from 'react';

interface FormatifCardProps {
  date: string;
  tag: string;
  title: string;
  description: string;
  image: string;
}

export default function FormatifCard({ date, tag, title, description, image }: FormatifCardProps) {
  return (
    <div className="w-full max-w-[433px] relative h-[300px] rounded-[28px] overflow-visible shadow-2xl group hover:-translate-y-2 transition-transform duration-300 flex flex-col justify-end mx-auto">
      {/* Background Image Container */}
      <div className="absolute inset-0 w-full h-full rounded-[28px] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Frosted Glass Overlay Card (Semi-transparent Spec) Shifted Downwards */}
      <div className="relative z-10 w-full max-w-[393px] h-[190px] mx-auto translate-y-[95px] p-4 sm:p-5 bg-gradient-to-b from-white/60 via-white/70 to-[#D9ECFF]/75 backdrop-blur-md rounded-[24px] border border-white/90 shadow-[0_10px_30px_rgba(0,0,0,0.12)] flex flex-col justify-between text-[#05066D]">
        {/* Tag & Date Header */}
        <div className="flex items-center gap-2.5">
          <span className="px-3.5 py-1 bg-white text-[#0C35E9] text-[12px] font-bold rounded-full shadow-sm">
            {tag}
          </span>
          <span className="text-[#080A8F] text-[12px] font-black">•</span>
          <span className="text-[#080A8F] text-[12px] font-bold">
            {date}
          </span>
        </div>

        {/* Title (Figma Spec: Lato Bold 35.94px, Line Height 38px, 347x76px, #080A8F) */}
        <h4 className="w-full max-w-[347px] h-[76px] text-[35.94px] font-bold text-[#080A8F] leading-[38px] tracking-normal line-clamp-2 flex items-center">
          {title}
        </h4>

        {/* Description (Figma Spec: Lato Regular 11px, Line Height Auto, 347x31px, #080A8F) */}
        <p className="w-full max-w-[347px] h-[31px] text-[11px] font-normal text-[#080A8F] leading-normal tracking-normal line-clamp-2">
          {description}
        </p>
      </div>
    </div>
  );
}
