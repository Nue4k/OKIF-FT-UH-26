import React from 'react';
import Link from 'next/link';

interface NewsCardProps {
  date?: string;
  author?: string;
  tag?: string;
  title: string;
  description: string;
  image: string;
  slug?: string;
}

export default function NewsCard({
  date = '27 Juni 2026',
  author = 'Hanzalah',
  title,
  description,
  image = '/r54.png',
  slug,
}: NewsCardProps) {
  return (
    <div className="w-full max-w-90 sm:max-w-none mx-auto flex flex-col bg-white rounded-[20px] sm:rounded-3xl shadow-lg overflow-hidden group hover:-translate-y-2 transition-all duration-300">
      {/* Top Image */}
      <div className="h-46.25 sm:h-50 md:h-52.5 lg:h-57.5 w-full relative overflow-hidden rounded-t-[20px] sm:rounded-t-3xl">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center rounded-t-[20px] sm:rounded-t-3xl group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Card Body */}
      <div className="px-4 py-3.5 sm:px-4 sm:py-3.5 md:px-5 md:py-4 flex flex-col justify-between flex-1 gap-2.5 sm:gap-3 bg-white rounded-b-[20px] sm:rounded-b-3xl">
        <div className="flex flex-col gap-1.5 sm:gap-2">
          {/* Author & Date Meta */}
          <div className="flex items-center gap-1.5 text-[11px] sm:text-[12px] text-[#767676] font-normal">
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
          <h4 className="text-okif-dark text-base sm:text-base md:text-[18px] lg:text-[22px] font-bold leading-snug line-clamp-2">
            {title}
          </h4>

          {/* Description */}
          <p className="text-okif-dark/90 text-xs sm:text-xs md:text-sm lg:text-[15px] font-normal leading-relaxed line-clamp-3">
            {description}
          </p>
        </div>

        {/* BACA Button */}
        <div className="flex justify-end pt-1">
          <Link
            href={slug ? `/berita/${slug}` : '/berita'}
            className="px-4 sm:px-5 md:px-5 lg:px-6 py-1 sm:py-1.5 rounded-[10px] sm:rounded-xl border-2 border-okif-primary text-okif-primary font-bold text-xs sm:text-xs md:text-sm tracking-wide hover:bg-okif-primary hover:text-white transition-all duration-300"
          >
            BACA
          </Link>
        </div>
      </div>
    </div>
  );
}
