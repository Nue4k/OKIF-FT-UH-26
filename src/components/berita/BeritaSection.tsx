import React from 'react';
import BaseSection from '@/components/ui/BaseSection';
import BeritaGridCard, { BeritaItem } from './BeritaGridCard';
import BeritaHorizontalCard from './BeritaHorizontalCard';
import FormatifFeaturedCard from './FormatifFeaturedCard';
import FormatifGridCard, { FormatifItem } from './FormatifGridCard';

const gridNewsData: BeritaItem[] = [
  {
    id: 1,
    author: 'Hanzalah',
    date: '27 Juni 2026',
    title: 'Lorem Ipsum Dolor Sit Amet',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    image: '/r54.png',
  },
  {
    id: 2,
    author: 'Hanzalah',
    date: '27 Juni 2026',
    title: 'Lorem Ipsum Dolor Sit Amet',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    image: '/r54.png',
  },
  {
    id: 3,
    author: 'Hanzalah',
    date: '27 Juni 2026',
    title: 'Lorem Ipsum Dolor Sit Amet',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    image: '/r54.png',
  },
];

const listNewsData: BeritaItem[] = [
  {
    id: 4,
    author: 'Hanzalah',
    date: '27 Juni 2026',
    title: 'Lorem Ipsum Dolor Sit Amet',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    image: '/r54.png',
  },
  {
    id: 5,
    author: 'Hanzalah',
    date: '27 Juni 2026',
    title: 'Lorem Ipsum Dolor Sit Amet',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    image: '/r54.png',
  },
  {
    id: 6,
    author: 'Hanzalah',
    date: '27 Juni 2026',
    title: 'Lorem Ipsum Dolor Sit Amet',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    image: '/r54.png',
  },
  {
    id: 7,
    author: 'Hanzalah',
    date: '27 Juni 2026',
    title: 'Lorem Ipsum Dolor Sit Amet',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    image: '/r54.png',
  },
];

const gridFormatifData: FormatifItem[] = [
  {
    id: 1,
    author: 'Hanzalah',
    date: '27 Juni 2026',
    title: 'Lorem Ipsum Dolor Sit Amet',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    image: '/r54.png',
  },
  {
    id: 2,
    author: 'Hanzalah',
    date: '27 Juni 2026',
    title: 'Lorem Ipsum Dolor Sit Amet',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    image: '/r54.png',
  },
  {
    id: 3,
    author: 'Hanzalah',
    date: '27 Juni 2026',
    title: 'Lorem Ipsum Dolor Sit Amet',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    image: '/r54.png',
  },
];

export default function BeritaSection() {
  return (
    <div className="w-full relative">
      {/* Light source originating strictly from center top (50% 0%) radiating to left, right, and down */}
      <div
        className="w-full h-[550px] md:h-[650px] absolute top-0 left-0 pointer-events-none z-0"
        style={{
          background: 'radial-gradient(ellipse 90% 75% at 50% 0%, #00A6FD 0%, #0C35E9 40%, rgba(12, 53, 233, 0.3) 65%, transparent 100%)'
        }}
      />
      <div
        className="w-full h-[400px] md:h-[500px] absolute top-0 left-0 pointer-events-none z-0"
        style={{
          background: 'radial-gradient(ellipse 55% 55% at 50% 0%, rgba(93, 244, 239, 0.75) 0%, rgba(20, 134, 246, 0.5) 45%, transparent 100%)'
        }}
      />

      <BaseSection
        id="kegiatan-hmif"
        variant="transparent"
        className="pt-6 sm:pt-8 md:pt-12 lg:pt-16 pb-12 md:pb-20 relative z-10"
        containerClassName="!max-w-[1360px] !px-4 sm:!px-8 md:!px-8 flex flex-col items-start gap-8 sm:gap-10 md:gap-12 lg:gap-16"
      >
        {/* 1. KEGIATAN HMIF FT-UH SECTION */}
        <div className="w-full flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-8">
          {/* Section Header Badge */}
          <div className="flex items-center justify-start w-full">
            <div className="bg-gradient-to-b from-[#0C35E9] to-[#1486F6] text-white font-bold text-[11px] min-[360px]:text-xs sm:text-sm md:text-base lg:text-lg px-3.5 py-1.5 sm:px-5 sm:py-2 rounded-xl inline-block shadow-md tracking-normal uppercase">
              KEGIATAN HMIF FT-UH
            </div>
          </div>

          {/* MOBILE MODE: Only 1 Single Row with horizontal scroll */}
          <div
            className="w-full max-w-full flex md:hidden flex-nowrap overflow-x-auto gap-3.5 sm:gap-4 pt-1 pb-4 sm:pb-6 px-0.5 [&::-webkit-scrollbar]:hidden touch-pan-x"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {[...gridNewsData, ...listNewsData].map((item) => (
              <div key={item.id} className="w-[82vw] max-w-[310px] min-w-[250px] shrink-0 flex">
                <BeritaGridCard {...item} />
              </div>
            ))}
          </div>

          {/* PC / DESKTOP / TABLET MODE: Top 3 Grid Cards + Bottom 4 Vertical List */}
          <div className="hidden md:flex md:flex-col gap-6 md:gap-6 lg:gap-8 w-full">
            {/* Top 3 Grid Cards */}
            <div className="grid grid-cols-3 gap-4 md:gap-4 lg:gap-8 w-full">
              {gridNewsData.map((item) => (
                <BeritaGridCard key={item.id} {...item} />
              ))}
            </div>

            {/* Vertical List of 4 Horizontal Cards */}
            <div className="flex flex-col gap-5 md:gap-6 lg:gap-8 mt-1 sm:mt-2 w-full">
              {listNewsData.map((item) => (
                <BeritaHorizontalCard key={item.id} {...item} />
              ))}
            </div>
          </div>
        </div>

        {/* 2. HASIL FORMATIF HMIF FT-UH SECTION */}
        <div id="formatif" className="w-full flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-8 pt-6 sm:pt-8 md:pt-10 scroll-mt-28 border-t border-white/15">
          {/* Section Header Badge */}
          <div className="flex items-center justify-start w-full">
            <div className="bg-gradient-to-b from-[#0C35E9] to-[#1486F6] text-white font-bold text-[11px] min-[360px]:text-xs sm:text-sm md:text-base lg:text-lg px-3.5 py-1.5 sm:px-5 sm:py-2 rounded-xl inline-block shadow-md tracking-normal uppercase">
              HASIL FORMATIF HMIF FT-UH
            </div>
          </div>

          {/* Top Featured Card */}
          <FormatifFeaturedCard />

          {/* Bottom 3 Grid Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 md:gap-4 lg:gap-8 w-full mt-1 sm:mt-2">
            {gridFormatifData.map((item) => (
              <FormatifGridCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </BaseSection>
    </div>
  );
}
