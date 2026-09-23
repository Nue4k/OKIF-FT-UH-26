import React from 'react';
import Link from 'next/link';

export interface BeritaItem {
  id?: string | number;
  author?: string;
  date?: string;
  title: string;
  description: string;
  image: string;
  slug?: string;
}

export default function BeritaGridCard({
  id = 1,
  author = 'Hanzalah',
  date = '27 Juni 2026',
  title,
  description,
  image,
  slug,
}: BeritaItem) {
  return (
    <div className="w-full max-w-90 sm:max-w-none mx-auto h-full flex flex-col bg-white rounded-[18px] sm:rounded-3xl shadow-lg overflow-hidden group hover:-translate-y-2 transition-all duration-300">
      {/* Top Image */}
      <div className="h-40 min-[360px]:h-43.75 sm:h-52.5 md:h-37.5 lg:h-57.5 w-full relative overflow-hidden rounded-t-[18px] sm:rounded-t-3xl">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image || '/r54.png'}
          alt={title}
          className="w-full h-full object-cover object-center rounded-t-[18px] sm:rounded-t-3xl group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Card Body */}
      <div className="px-3.5 py-3 sm:px-5 sm:py-4 md:px-3.5 md:py-3.5 lg:px-5 lg:py-4 flex flex-col justify-between flex-1 gap-2 sm:gap-3 md:gap-2.5 lg:gap-3 bg-white rounded-b-[18px] sm:rounded-b-3xl">
        <div className="flex flex-col gap-1 sm:gap-2 md:gap-1.5 lg:gap-2">
          {/* Author & Date Meta */}
          <div className="flex items-center gap-1.5 text-[11px] sm:text-[12px] md:text-[11px] lg:text-[12px] text-[#767676] font-normal">
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

          {/* Title */}
          <h3 className="text-okif-dark text-[15px] sm:text-base md:text-base lg:text-[22px] font-bold leading-snug line-clamp-2">
            {title}
          </h3>

          {/* Description */}
          <p className="text-okif-dark/90 text-xs sm:text-sm md:text-xs lg:text-[15px] font-normal leading-relaxed line-clamp-3">
            {description}
          </p>
        </div>

        {/* BACA Button */}
        <div className="flex justify-end pt-1">
          <Link
            href={slug ? `/berita/${slug}` : '/berita'}
            className="px-4 py-1 sm:px-6 sm:py-1.5 md:px-4 md:py-1 lg:px-6 lg:py-1.5 rounded-[10px] sm:rounded-xl border-2 border-okif-primary text-okif-primary font-bold text-xs sm:text-sm md:text-xs lg:text-sm tracking-wide hover:bg-okif-primary hover:text-white transition-all duration-300"
          >
            BACA
          </Link>
        </div>
      </div>
    </div>
  );
}
