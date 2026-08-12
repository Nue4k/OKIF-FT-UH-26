import React from 'react';
import BaseSection from '@/components/ui/BaseSection';
import FormatifFeaturedCard from './FormatifFeaturedCard';
import FormatifGridCard, { FormatifItem } from './FormatifGridCard';

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

export default function FormatifSection() {
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
        id="kegiatan-formatif"
        variant="transparent"
        className="py-10 md:py-16 relative z-10"
        containerClassName="!max-w-[1360px] !px-4 flex flex-col items-start gap-8"
      >
        {/* Top Featured Card */}
        <FormatifFeaturedCard />

        {/* Bottom 3 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full mt-2">
          {gridFormatifData.map((item) => (
            <FormatifGridCard key={item.id} {...item} />
          ))}
        </div>
      </BaseSection>
    </div>
  );
}
