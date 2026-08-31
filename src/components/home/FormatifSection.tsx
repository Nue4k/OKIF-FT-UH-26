import React from 'react';
import Link from 'next/link';
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
      {/* Pure CSS Radial Glow - 100% Exact Figma Specs: Group 114 (Pure Natural Fade, No Mask) */}
      <div className="absolute top-[85%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] md:w-[1138px] md:h-[1138px] pointer-events-none -z-20 overflow-visible flex items-center justify-center">
        <div 
          className="w-full h-full rounded-full blur-[60px] md:blur-[100px]"
          style={{
            background: `
              radial-gradient(
                circle at 50% 50%,
                #FFFFFF 0%,
                #FFFFFF 35%,
                #5DF4EF 60%,
                rgba(12, 53, 233, 0.6) 75%,
                rgba(12, 53, 233, 0.15) 88%,
                transparent 100%
              )
            `
          }}
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

      <Link href="/formatif" className="relative z-10">
        <button className="px-8 py-3 bg-white text-[#0C35E9] font-bold text-lg rounded-2xl border-2 border-[#0C35E9] hover:bg-[#0C35E9] hover:text-white transition-colors shadow-lg">
          LIHAT LAINNYA
        </button>
      </Link>

      {/* Soft Dark Boundary Shadow above the white section (Exact Figma/Design Spec) */}
      <div className="absolute inset-x-0 bottom-0 h-6 bg-gradient-to-t from-black/35 via-black/10 to-transparent pointer-events-none z-10" />
    </BaseSection>
  );
}
