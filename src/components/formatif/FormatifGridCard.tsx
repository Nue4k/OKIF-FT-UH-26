import React from 'react';

export interface FormatifItem {
  id?: string | number;
  author?: string;
  date?: string;
  title: string;
  description: string;
  image: string;
}

export default function FormatifGridCard({
  author = 'Hanzalah',
  date = '27 Juni 2026',
  title,
  description,
  image,
}: FormatifItem) {
  return (
    <div className="w-full flex flex-col bg-white rounded-[24px] shadow-lg overflow-hidden group hover:-translate-y-2 transition-all duration-300">
      {/* Top Image */}
      <div className="h-[210px] md:h-[230px] w-full relative overflow-hidden rounded-t-[24px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image || '/r54.png'}
          alt={title}
          className="w-full h-full object-cover object-center rounded-t-[24px] group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Card Body */}
      <div className="px-5 py-4 flex flex-col justify-between flex-1 gap-3 bg-white rounded-b-[24px]">
        <div className="flex flex-col gap-2">
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
          <h3 className="text-[#080A8F] text-xl md:text-[22px] font-bold leading-snug line-clamp-2">
            {title}
          </h3>

          {/* Description (Figma spec: Lato Regular 18px, color #080A8F) */}
          <p className="text-[#080A8F] text-[18px] font-normal leading-relaxed line-clamp-3">
            {description}
          </p>
        </div>

        {/* BACA Button */}
        <div className="flex justify-end pt-2">
          <button className="px-6 py-1.5 rounded-xl border-2 border-[#0C35E9] text-[#0C35E9] font-bold text-sm tracking-wide hover:bg-[#0C35E9] hover:text-white transition-all duration-300">
            BACA
          </button>
        </div>
      </div>
    </div>
  );
}
