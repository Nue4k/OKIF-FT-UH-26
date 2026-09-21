import React from 'react';
import Link from 'next/link';
import BaseSection from '@/components/ui/BaseSection';
import NewsCard from '@/components/ui/NewsCard';

export default function PengabdianSection() {
  const dummyNews = [
    {
      date: '27 Juni 2026',
      author: 'Hanzalah',
      title: 'Lorem Ipsum Dolor Sit Amet',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
      image: '/r54.png'
    },
    {
      date: '27 Juni 2026',
      author: 'Hanzalah',
      title: 'Lorem Ipsum Dolor Sit Amet',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
      image: '/r54.png'
    },
    {
      date: '27 Juni 2026',
      author: 'Hanzalah',
      title: 'Lorem Ipsum Dolor Sit Amet',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
      image: '/r54.png'
    }
  ];

  return (
    <BaseSection id="pengabdian" variant="transparent" className="!pt-[56px] sm:!pt-[64px] md:!pt-[72px] lg:!pt-[80px] !pb-[48px] sm:!pb-[60px] md:!pb-[68px] lg:!pb-[76px] bg-white relative z-30 isolate flex flex-col" containerClassName="!max-w-[1460px] !px-4 text-[#080A8F]">

      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 sm:gap-10 lg:gap-16 w-full max-w-[1360px] mx-auto mb-12 sm:mb-14 md:mb-16 px-4 overflow-visible">
        <div className="w-full lg:w-[540px] shrink-0 lg:-translate-x-1 flex flex-col items-start gap-3.5 sm:gap-4 md:gap-5 lg:gap-6">
          {/* Badge Pill: BERITA TERBARU */}
          <div className="bg-gradient-to-b from-[#0C35E9] to-[#1486F6] text-white font-bold text-xs sm:text-sm md:text-base lg:text-lg px-4 sm:px-5 py-1.5 sm:py-2 rounded-xl inline-block shadow-md tracking-normal uppercase">
            BERITA TERBARU
          </div>

          {/* Title: PENGABDIAN MASYARAKAT */}
          <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-5xl font-black leading-tight tracking-normal bg-gradient-to-r from-[#1486F6] to-[#0C35E9] bg-clip-text text-transparent uppercase">
            PENGABDIAN <br className="hidden lg:inline" />MASYARAKAT
          </h2>

          {/* Description */}
          <div className="w-full max-w-full lg:max-w-[540px] flex flex-col gap-2.5 sm:gap-3 md:gap-3.5 lg:gap-4 text-xs sm:text-sm md:text-base lg:text-[18px] font-normal text-[#080A8F] leading-relaxed tracking-normal">
            <p>
              Himpunan Mahasiswa Informatika Fakultas Teknik Universitas Hasanuddin - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p>
              Himpunan Mahasiswa Informatika Fakultas Teknik Universitas Hasanuddin - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-[50%] shrink-0 lg:translate-x-5">
          <div className="w-full h-[240px] sm:h-[280px] md:h-[340px] lg:h-[400px] rounded-[16px] sm:rounded-[20px] overflow-hidden shadow-2xl relative group">
            {/* Image: /r54.png */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/r54.png" alt="Foto Pengabdian" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />

            {/* Top Gradient Overlay (Figma spec: #0C35E9 100% to 0%) */}
            <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-[#0C35E9] to-transparent pointer-events-none" />

            {/* Bottom Gradient Overlay (Figma spec: #050170 100% to #0C35E9 0%) */}
            <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#050170] via-[#050170]/65 to-transparent pointer-events-none" />

            {/* Text Overlay: JUDUL & 23 Juni 2025 */}
            <div className="absolute bottom-4 left-5 sm:bottom-5 sm:left-6 md:bottom-6 md:left-8 z-10 flex flex-col gap-1 text-white">
              <h3 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-black tracking-tight">JUDUL</h3>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg font-medium opacity-90">23 Juni 2025</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-6 lg:gap-8 w-full max-w-[1360px] mx-auto mb-10 sm:mb-12 md:mb-14 lg:mb-16 px-4 sm:px-6 md:px-8 overflow-visible">
        {dummyNews.map((news, idx) => (
          <div
            key={`pengabdian-${idx}`}
            className={
              idx === 0
                ? 'lg:-translate-x-5'
                : idx === 1
                  ? 'lg:translate-x-1'
                  : idx === 2
                    ? 'lg:translate-x-7'
                    : ''
            }
          >
            <NewsCard {...news} />
          </div>
        ))}
      </div>

      <div className="relative z-20 flex justify-center w-full">
        <Link href="/berita">
          <button className="px-5 py-2 md:px-7 md:py-2.5 lg:px-8 lg:py-3 bg-white text-[#0C35E9] font-bold text-xs sm:text-sm md:text-base lg:text-lg rounded-xl md:rounded-2xl border-2 border-[#0C35E9] hover:bg-[#0C35E9] hover:text-white transition-colors shadow-lg cursor-pointer">
            LIHAT LAINNYA
          </button>
        </Link>
      </div>

    </BaseSection>
  );
}
