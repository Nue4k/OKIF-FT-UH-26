import React from 'react';
import BaseSection from '@/components/ui/BaseSection';
import NewsCard from '@/components/ui/NewsCard';

export default function FormatifSection() {
  const dummyNews = [
    {
      date: '7 Juni 2026',
      tag: 'Formatif #1',
      title: 'Lorem Ipsum Dolor Sit Amet',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'https://placehold.co/952x298/CCC/666?text=Foto+Berita'
    },
    {
      date: '7 Juni 2026',
      tag: 'Formatif #1',
      title: 'Lorem Ipsum Dolor Sit Amet',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'https://placehold.co/952x298/CCC/666?text=Foto+Berita'
    },
    {
      date: '7 Juni 2026',
      tag: 'Formatif #1',
      title: 'Lorem Ipsum Dolor Sit Amet',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'https://placehold.co/952x298/CCC/666?text=Foto+Berita'
    }
  ];

  return (
    <BaseSection id="formatif" variant="transparent" className="!pt-[32px] !pb-[64px] relative flex flex-col">
      {/* Glow Background for Formatif */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[600px] bg-[#5DF4EF]/10 blur-[120px] rounded-full -z-10 pointer-events-none"></div>

      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-black text-white">HASIL FORMATIF</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl mb-16">
        {dummyNews.map((news, idx) => (
          <NewsCard key={`formatif-${idx}`} {...news} />
        ))}
      </div>

      <button className="px-8 py-3 bg-white text-[#0C35E9] font-bold text-lg rounded-2xl border-2 border-[#0C35E9] hover:bg-[#0C35E9] hover:text-white transition-colors shadow-lg">
        LIHAT LAINNYA
      </button>
    </BaseSection>
  );
}
