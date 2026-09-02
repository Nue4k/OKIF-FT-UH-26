import React from 'react';
import Link from 'next/link';

interface FormatifFeaturedCardProps {
  date?: string;
  title?: string;
  description?: string;
  image?: string;
}

export default function FormatifFeaturedCard({
  date = '27 Juni 2026',
  title = 'Lorem Ipsum Dolor Sit Amet',
  description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
  image = '/r54.png',
}: FormatifFeaturedCardProps) {
  return (
    <div className="w-full bg-white rounded-[24px] p-5 md:p-6 shadow-lg flex flex-col md:flex-row gap-6 items-stretch group hover:-translate-y-1 transition-all duration-300">
      {/* Left Thumbnail Image */}
      <div className="w-full md:w-[400px] lg:w-[450px] h-[240px] md:h-[280px] shrink-0 rounded-[18px] overflow-hidden relative bg-gray-100">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center rounded-[18px] group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Right Content */}
      <div className="flex-1 flex flex-col justify-between py-1 gap-3">
        <div className="flex flex-col gap-2">
          {/* Date Meta */}
          <div className="text-[14px] text-[#767676] font-normal">
            <span>{date}</span>
          </div>

          {/* Title (Figma spec: Lato Bold 38px, line-height 31px, color #080A8F) */}
          <h2 className="text-[#080A8F] text-2xl md:text-3xl lg:text-[38px] font-bold leading-tight lg:leading-[31px]">
            {title}
          </h2>

          {/* Description Paragraph (Figma spec: Lato Regular 18px, color #080A8F) */}
          <p className="text-[#080A8F] text-[18px] font-normal leading-relaxed line-clamp-5">
            {description}
          </p>
        </div>

        {/* BACA Button (Aligned Left under content) */}
        <div className="flex justify-start pt-2">
          <Link
            href="/baca"
            className="px-6 py-1.5 rounded-xl border-2 border-[#0C35E9] text-[#0C35E9] font-bold text-sm tracking-wide hover:bg-[#0C35E9] hover:text-white transition-all duration-300"
          >
            BACA
          </Link>
        </div>
      </div>
    </div>
  );
}
