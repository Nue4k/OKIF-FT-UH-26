import React from 'react';
import BaseSection from './BaseSection';
import NewsCard from './NewsCard';

export default function PengabdianSection() {
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
    <BaseSection id="pengabdian" variant="transparent" className="!pt-[32px] !pb-[64px] bg-white relative flex flex-col" containerClassName="text-[#080A8F]">
      
      <div className="flex flex-col lg:flex-row items-center gap-12 w-full mb-16">
        <div className="w-full lg:w-1/2 flex flex-col items-start gap-6">
          <div className="bg-[#1486F6] text-white font-bold text-sm px-4 py-1 rounded-full">
            KUMPULAN
          </div>
          <h2 className="text-4xl md:text-[60px] font-black text-[#1486F6] leading-[1.1]">
            PENGABDIAN<br/>MASYARAKAT
          </h2>
          <p className="text-lg text-[#080A8F]/80 max-w-xl">
            Himpunan Mahasiswa Informatika Fakultas Teknik Universitas Hasanuddin - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="w-full lg:w-1/2">
           <div className="w-full h-[300px] md:h-[400px] rounded-3xl overflow-hidden shadow-2xl relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://placehold.co/633x360/0C35E9/FFF?text=Foto+Pengabdian" alt="Pengabdian" className="w-full h-full object-cover" />
              <div className="absolute bottom-6 left-6 text-white font-bold text-xl">
                23 Juni 2025
              </div>
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl mb-16">
        {dummyNews.map((news, idx) => (
          <NewsCard key={`pengabdian-${idx}`} {...news} />
        ))}
      </div>

      <button className="px-8 py-3 bg-white text-[#0C35E9] font-bold text-lg rounded-2xl border-2 border-[#0C35E9] hover:bg-[#0C35E9] hover:text-white transition-colors shadow-lg">
        LIHAT LAINNYA
      </button>

    </BaseSection>
  );
}
