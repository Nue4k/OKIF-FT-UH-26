import React from 'react';

interface NewsCardProps {
  date?: string;
  author?: string;
  tag?: string;
  title: string;
  description: string;
  image: string;
}

export default function NewsCard({
  date = '27 Juni 2026',
  author = 'Hanzalah',
  title,
  description,
  image = '/r54.png',
}: NewsCardProps) {
  return (
    <div className="w-full flex flex-col bg-white rounded-[24px] shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-gray-100/60 group hover:-translate-y-2 transition-all duration-300">
      {/* Top Image (Flat square 0px bottom corners) */}
      <div
        className="h-[220px] md:h-[230px] w-full relative overflow-hidden"
        style={{ borderRadius: '24px 24px 0px 0px' }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image || '/r54.png'}
          alt={title}
          className="w-full h-full object-cover object-[center_top] scale-[1.08] group-hover:scale-115 transition-transform duration-500"
          style={{ borderRadius: '0px' }}
        />
      </div>

      {/* Card Content */}
      <div className="px-5 py-3.5 flex flex-col gap-2 flex-1 justify-between bg-white rounded-b-[24px]">
        <div className="flex flex-col gap-1.5">
          {/* Author & Date Meta */}
          <div className="flex items-center gap-2 text-xs md:text-[13px] text-gray-400 font-medium">
            <svg
              className="w-3.5 h-3.5 text-gray-400 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
            <span>{author}</span>
            <span className="text-gray-300">•</span>
            <span>{date}</span>
          </div>

          {/* Title */}
          <h4 className="text-[#050170] text-xl md:text-[22px] font-bold leading-snug line-clamp-2">
            {title}
          </h4>

          {/* Description */}
          <p className="text-[#050170]/80 text-xs md:text-[13.5px] leading-relaxed line-clamp-3">
            {description}
          </p>
        </div>

        {/* BACA Button */}
        <div className="flex justify-end pt-1.5">
          <button className="px-6 py-1.5 rounded-[12px] border-2 border-[#0C35E9] text-[#0C35E9] font-bold text-sm tracking-wide hover:bg-[#0C35E9] hover:text-white transition-all duration-300">
            BACA
          </button>
        </div>
      </div>
    </div>
  );
}
