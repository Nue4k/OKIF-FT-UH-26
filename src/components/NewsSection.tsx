import React from 'react';
import BaseSection from './BaseSection';

function NewsCard({ date, tag, title, description, image }: { date: string, tag: string, title: string, description: string, image: string }) {
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

export default function NewsSection() {
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
    <>
      {/* Hasil Formatif */}
      <BaseSection id="berita" variant="transparent" className="py-32 md:py-48 min-h-screen relative flex flex-col justify-center">
        {/* Glow Background for Formatif */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[600px] bg-[#5DF4EF]/10 blur-[120px] rounded-full -z-10 pointer-events-none"></div>

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-white">HASIL FORMATIF</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl mb-12">
          {dummyNews.map((news, idx) => (
            <NewsCard key={`formatif-${idx}`} {...news} />
          ))}
        </div>

        <button className="px-8 py-3 bg-white text-[#0C35E9] font-bold text-lg rounded-2xl border-2 border-[#0C35E9] hover:bg-[#0C35E9] hover:text-white transition-colors shadow-lg">
          LIHAT LAINNYA
        </button>
      </BaseSection>

      {/* Pengabdian Masyarakat */}
      <BaseSection id="pengabdian" variant="transparent" className="py-20 bg-white" containerClassName="text-[#080A8F]">
        
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
          {dummyNews.map((news, idx) => (
            <NewsCard key={`pengabdian-${idx}`} {...news} />
          ))}
        </div>

      </BaseSection>
    </>
  );
}
