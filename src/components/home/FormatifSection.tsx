import React from 'react';
import BaseSection from '@/components/ui/BaseSection';
import FormatifCard from '@/components/ui/FormatifCard';

export default function FormatifSection() {
  const dummyNews = [
    {
      date: '7 Juni 2026',
      tag: 'Formatif #1',
      title: 'Lorem Ipsum Dolor Sit Amet',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
      image: '/r54.png'
    },
    {
      date: '7 Juni 2026',
      tag: 'Formatif #1',
      title: 'Lorem Ipsum Dolor Sit Amet',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
      image: '/r54.png'
    },
    {
      date: '7 Juni 2026',
      tag: 'Formatif #1',
      title: 'Lorem Ipsum Dolor Sit Amet',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
      image: '/r54.png'
    }
  ];

  return (
    <BaseSection id="formatif" variant="transparent" className="!pt-[32px] !pb-[64px] relative flex flex-col items-center overflow-visible isolate" containerClassName="!max-w-full !px-4 md:!px-8 w-full">
      {/* Unconstrained Background Glow (group114.png) - Shifted down, smooth top mask fade */}
      <div className="absolute top-[78%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] max-w-[1920px] h-[1200px] md:h-[1600px] pointer-events-none -z-20 overflow-visible">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/group114.png"
          alt=""
          className="w-full h-full object-cover opacity-100"
          style={{ WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 100%)', maskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 100%)' }}
        />
      </div>

      <div className="text-center mb-16 relative z-10">
        <h2 className="text-4xl md:text-6xl font-black text-white">HASIL FORMATIF</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-28 gap-x-6 md:gap-x-8 w-full max-w-[1320px] mx-auto mb-36 relative z-10">
        {dummyNews.map((news, idx) => (
          <FormatifCard key={`formatif-${idx}`} {...news} />
        ))}
      </div>

      <button className="px-8 py-3 bg-white text-[#0C35E9] font-bold text-lg rounded-2xl border-2 border-[#0C35E9] hover:bg-[#0C35E9] hover:text-white transition-colors shadow-lg relative z-10">
        LIHAT LAINNYA
      </button>

      {/* Soft Dark Boundary Shadow above the white section (Exact Figma/Design Spec) */}
      <div className="absolute inset-x-0 bottom-0 h-6 bg-gradient-to-t from-black/35 via-black/10 to-transparent pointer-events-none z-10" />
    </BaseSection>
  );
}
