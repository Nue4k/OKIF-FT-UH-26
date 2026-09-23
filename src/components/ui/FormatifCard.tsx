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
      className="w-full max-w-90 sm:max-w-100 md:max-w-108.25 relative h-58.75 sm:h-65 md:h-70 lg:h-75 rounded-3xl sm:rounded-[28px] overflow-visible shadow-2xl group hover:-translate-y-2 transition-transform duration-300 flex flex-col justify-end mx-auto cursor-pointer block"
    >
      {/* Background Image Container */}
      <div className="absolute inset-0 w-full h-full rounded-3xl sm:rounded-[28px] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Frosted Glass Overlay Card (Semi-transparent Spec) Shifted Downwards */}
      <div className="relative z-10 w-[92%] max-w-83.75 sm:max-w-90 md:max-w-98.25 h-36.25 sm:h-40 md:h-43.75 lg:h-47.5 mx-auto translate-y-17 sm:translate-y-19 md:translate-y-21 lg:translate-y-23.75 p-3.5 sm:p-4 md:p-4 lg:p-5 bg-linear-to-b from-white/60 via-white/70 to-[#D9ECFF]/75 backdrop-blur-md rounded-[18px] sm:rounded-3xl border border-white/90 shadow-[0_10px_30px_rgba(0,0,0,0.12)] flex flex-col justify-between text-[#05066D]">
        {/* Tag & Date Header */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          <span className="px-3 sm:px-3.5 py-0.5 sm:py-1 bg-white text-okif-primary text-[11px] sm:text-[12px] font-bold rounded-full shadow-sm">
            {tag}
          </span>
          <span className="text-okif-dark text-[11px] sm:text-[12px] font-black">•</span>
          <span className="text-okif-dark text-[11px] sm:text-[12px] font-bold">
            {date}
          </span>
        </div>

        {/* Title */}
        <h4 
          className="w-full max-w-86.75 text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-bold text-okif-dark leading-tight tracking-normal line-clamp-2"
          title={title}
        >
          {title}
        </h4>

        {/* Description */}
        <p className="w-full max-w-86.75 text-[11px] sm:text-[11px] md:text-xs lg:text-[11px] font-normal text-okif-dark leading-3.75 sm:leading-normal tracking-normal line-clamp-2">
          {description}
        </p>
      </div>
    </Link>
  );
}
