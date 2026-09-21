import React from 'react';
import Link from 'next/link';
import { BeritaItem } from './BeritaGridCard';

export default function BeritaHorizontalCard({
  id = 1,
  author = 'Hanzalah',
  date = '27 Juni 2026',
  title,
  description,
  image,
  slug,
}: BeritaItem) {
  return (
    <div className="w-full bg-white rounded-[24px] p-0 md:p-5 shadow-lg flex flex-col md:flex-row gap-0 md:gap-5 items-stretch group hover:-translate-y-1 transition-all duration-300 overflow-hidden md:overflow-visible">
      {/* Left / Top Thumbnail Image */}
      <div className="w-full md:w-[260px] lg:w-[280px] h-[210px] md:h-auto md:self-stretch md:min-h-[175px] shrink-0 rounded-t-[24px] md:rounded-[16px] overflow-hidden relative">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image || '/r54.png'}
          alt={title}
          className="w-full h-full object-cover object-center rounded-t-[24px] md:rounded-[16px] group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Right / Bottom Content */}
      <div className="flex-1 flex flex-col justify-between px-5 py-4 md:px-0 md:py-0.5 gap-2.5 sm:gap-3 bg-white rounded-b-[24px] md:rounded-b-none">
        <div className="flex flex-col gap-1.5 sm:gap-2">
          {/* Author & Date Meta (Figma spec: Lato Regular 12px, color #767676) */}
          <div className="flex items-center gap-1.5 text-[12px] text-[#767676] font-normal">
            <svg
              className="w-3.5 h-3.5 text-[#767676] fill-current shrink-0"
              viewBox="0 0 24 24"
            >
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
            <span>{author}</span>
            <span className="text-[#767676]">•</span>
            <span>{date}</span>
          </div>

          {/* Title (Figma spec: Lato Bold, color #080A8F) */}
          <h3 className="text-[#080A8F] text-lg sm:text-xl md:text-xl lg:text-[22px] font-bold leading-snug line-clamp-2 md:line-clamp-none">
            {title}
          </h3>

          {/* Description (Figma spec: Lato Regular 18px, color #080A8F) */}
          <p className="text-[#080A8F]/90 text-xs sm:text-sm md:text-sm lg:text-[16px] font-normal leading-relaxed line-clamp-3 md:line-clamp-3 lg:line-clamp-4">
            {description}
          </p>
        </div>

        {/* BACA Button */}
        <div className="flex justify-end pt-1 md:pt-1.5">
          <Link
            href={slug ? `/berita/${slug}` : '/berita'}
            className="px-5 py-1.5 sm:px-6 sm:py-1.5 rounded-xl border-2 border-[#0C35E9] text-[#0C35E9] font-bold text-xs sm:text-sm tracking-wide hover:bg-[#0C35E9] hover:text-white transition-all duration-300"
          >
            BACA
          </Link>
        </div>
      </div>
    </div>
  );
}
