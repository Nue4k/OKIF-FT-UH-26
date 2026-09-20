import React from 'react';
import Link from 'next/link';

interface FormatifFeaturedCardProps {
  author?: string;
  date?: string;
  title?: string;
  description?: string;
  image?: string;
}

export default function FormatifFeaturedCard({
  author = 'Hanzalah',
  date = '27 Juni 2026',
  title = 'Lorem Ipsum Dolor Sit Amet',
  description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
  image = '/r54.png',
}: FormatifFeaturedCardProps) {
  return (
    <div className="w-full max-w-[360px] md:max-w-none mx-auto bg-white rounded-[18px] sm:rounded-[24px] p-0 md:p-6 shadow-lg flex flex-col md:flex-row gap-0 md:gap-6 items-stretch group hover:-translate-y-1 transition-all duration-300 overflow-hidden md:overflow-visible">
      {/* Left / Top Thumbnail Image */}
      <div className="w-full md:w-[300px] lg:w-[450px] h-[165px] min-[360px]:h-[180px] sm:h-[210px] md:h-auto md:self-stretch md:min-h-[210px] shrink-0 rounded-t-[18px] md:rounded-[18px] overflow-hidden relative bg-gray-100">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center rounded-t-[18px] md:rounded-[18px] group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="px-3.5 py-3 sm:px-5 sm:py-4 md:px-0 md:py-1 flex-1 flex flex-col justify-between gap-2 sm:gap-3 bg-white rounded-b-[18px] md:rounded-b-none">
        <div className="flex flex-col gap-1 sm:gap-2">
          {/* Author & Date Meta */}
          <div className="flex items-center gap-1.5 text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] text-[#767676] font-normal">
            <svg
              className="w-3.5 h-3.5 text-[#767676] fill-current shrink-0 md:hidden"
              viewBox="0 0 24 24"
            >
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
            <span className="md:hidden">{author}</span>
            <span className="text-[#767676] md:hidden">•</span>
            <span>{date}</span>
          </div>

          {/* Title */}
          <h2 className="text-[#080A8F] text-base min-[360px]:text-[17px] sm:text-2xl md:text-2xl lg:text-[38px] font-bold leading-snug md:leading-tight lg:leading-[31px] line-clamp-2 md:line-clamp-none">
            {title}
          </h2>

          {/* Description Paragraph */}
          <p className="text-[#080A8F]/90 text-xs sm:text-base md:text-sm lg:text-[16px] font-normal leading-relaxed line-clamp-3 md:line-clamp-5">
            {description}
          </p>
        </div>

        {/* BACA Button */}
        <div className="flex justify-end md:justify-start pt-1 sm:pt-2">
          <Link
            href="/baca"
            className="px-4 py-1 sm:px-6 sm:py-1.5 rounded-[10px] sm:rounded-xl border-2 border-[#0C35E9] text-[#0C35E9] font-bold text-xs sm:text-sm tracking-wide hover:bg-[#0C35E9] hover:text-white transition-all duration-300"
          >
            BACA
          </Link>
        </div>
      </div>
    </div>
  );
}
