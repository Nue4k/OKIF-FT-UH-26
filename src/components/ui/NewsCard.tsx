import React from 'react';

interface NewsCardProps {
  date: string;
  tag: string;
  title: string;
  description: string;
  image: string;
}

export default function NewsCard({ date, tag, title, description, image }: NewsCardProps) {
  return (
    <div className="w-full flex flex-col bg-white rounded-[20px] overflow-hidden shadow-xl group hover:-translate-y-2 transition-transform duration-300">
      <div className="h-[200px] w-full relative">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-6 flex flex-col gap-3">
        <div className="flex justify-between items-center">
          <span className="text-[#080A8F] text-xs font-semibold">{date}</span>
          <span className="bg-[#0C35E9]/10 text-[#0C35E9] text-xs font-bold px-3 py-1 rounded-lg">
            {tag}
          </span>
        </div>
        <h4 className="text-[#080A8F] text-2xl font-bold leading-tight line-clamp-2">
          {title}
        </h4>
        <p className="text-[#080A8F]/70 text-sm leading-relaxed line-clamp-3">
          {description}
        </p>
      </div>
    </div>
  );
}
