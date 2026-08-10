import React from 'react';
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
    <BaseSection id="pengabdian" variant="transparent" className="!pt-[64px] md:!pt-[80px] !pb-[64px] bg-white relative z-30 isolate flex flex-col" containerClassName="!max-w-[1460px] !px-4 text-[#080A8F]">

      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16 w-full max-w-[1360px] mx-auto mb-16 px-4 overflow-visible">
        <div className="w-full lg:w-[540px] shrink-0 lg:-translate-x-1 flex flex-col items-start gap-6">
          {/* Badge Pill: BERITA TERBARU (Figma spec: Lato Bold 18px, rounded 10px, gradient top to bottom #0C35E9 to #1486F6) */}
          <div className="bg-gradient-to-b from-[#0C35E9] to-[#1486F6] text-white font-bold text-[18px] px-5 py-2 rounded-[10px] inline-block shadow-md">
            BERITA TERBARU
          </div>

          {/* Title: PENGABDIAN MASYARAKAT (Figma spec: Lato Black 64.43px, line-height 58px, gradient #1486F6 to #0C35E9) */}
          <h2 className="text-4xl md:text-[64.43px] font-black leading-tight md:leading-[58px] tracking-normal bg-gradient-to-r from-[#1486F6] to-[#0C35E9] bg-clip-text text-transparent uppercase">
            PENGABDIAN<br />MASYARAKAT
          </h2>

          {/* Description (Figma spec: Lato Regular 18px, color #080A8F, line 3 starts with 'sed') */}
          <div className="w-full max-w-[540px] flex flex-col gap-4 text-[18px] font-normal text-[#080A8F] leading-relaxed tracking-normal">
            <p>
              Himpunan Mahasiswa Informatika Fakultas Teknik Universitas<br className="hidden sm:inline" /> Hasanuddin - Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br className="hidden sm:inline" /> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p>
              Himpunan Mahasiswa Informatika Fakultas Teknik Universitas<br className="hidden sm:inline" /> Hasanuddin - Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br className="hidden sm:inline" /> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-[50%] shrink-0 lg:translate-x-5">
          <div className="w-full h-[300px] md:h-[400px] rounded-[20px] overflow-hidden shadow-2xl relative group">
            {/* Image: /r54.png */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/r54.png" alt="Foto Pengabdian" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />

            {/* Top Gradient Overlay (Figma spec: #0C35E9 100% to 0%) */}
            <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-[#0C35E9] to-transparent pointer-events-none" />

            {/* Bottom Gradient Overlay (Figma spec: #050170 100% to #0C35E9 0%) */}
            <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#050170] via-[#050170]/65 to-transparent pointer-events-none" />

            {/* Text Overlay: JUDUL & 23 Juni 2025 */}
            <div className="absolute bottom-6 left-8 z-10 flex flex-col gap-1 text-white">
              <h3 className="text-2xl md:text-3xl font-black tracking-tight">JUDUL</h3>
              <p className="text-base md:text-lg font-medium opacity-90">23 Juni 2025</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-[1280px] mx-auto mb-8 px-4 overflow-visible">
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

      <button className="px-8 py-3 bg-white text-[#0C35E9] font-bold text-lg rounded-2xl border-2 border-[#0C35E9] hover:bg-[#0C35E9] hover:text-white transition-colors shadow-lg">
        LIHAT LAINNYA
      </button>

    </BaseSection>
  );
}
