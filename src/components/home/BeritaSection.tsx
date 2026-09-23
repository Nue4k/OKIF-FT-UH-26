import React from 'react';
import Link from 'next/link';
import BaseSection from '@/components/ui/BaseSection';
import NewsCard from '@/components/ui/NewsCard';
import { Berita } from '../../../types/models';

interface BeritaSectionProps {
  beritaList?: Berita[];
}

export default function BeritaSection({ beritaList }: BeritaSectionProps) {
  return (
    <BaseSection id="pengabdian" variant="transparent" className="pt-14! sm:pt-16! md:pt-18! lg:pt-20! pb-12! sm:pb-15! md:pb-17! lg:pb-19! bg-white relative z-30 isolate flex flex-col" containerClassName="!max-w-[1460px] !px-4 text-okif-dark">

      {/* --- CONDITION: HAS DATA --- */}
      {beritaList && beritaList.length > 0 ? (
        <>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-10 w-full max-w-340 mx-auto mb-12 sm:mb-14 md:mb-16 px-4 overflow-visible">
            {/* LEFT SIDE: FEATURED ARTICLE DETAILS */}
            <div className="w-full lg:w-1/2 flex flex-col items-start gap-3.5 sm:gap-4 md:gap-5 lg:gap-6">
              {/* Badge Pill */}
              <div className="bg-linear-to-b from-okif-primary to-okif-secondary text-white font-bold text-xs sm:text-sm md:text-base lg:text-lg px-4 sm:px-5 py-1.5 sm:py-2 rounded-xl inline-block shadow-md tracking-normal uppercase">
                BERITA TERBARU
              </div>

              {/* Title: Dynamic Featured Title */}
              <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-5xl font-black leading-tight tracking-normal bg-linear-to-r from-okif-secondary to-okif-primary bg-clip-text text-transparent uppercase line-clamp-3">
                {beritaList[0].title}
              </h2>

              {/* Description: Dynamic Featured Description */}
              <div className="w-full flex flex-col gap-2.5 sm:gap-3 md:gap-3.5 lg:gap-4 text-xs sm:text-sm md:text-base lg:text-[18px] font-normal text-okif-dark leading-relaxed tracking-normal mt-2 lg:mt-4">
                <p className="line-clamp-4">
                  {beritaList[0].description || ''}
                </p>
              </div>
              
              <Link href={`/berita/${beritaList[0].slug}`}>
                <button className="mt-2 text-okif-primary font-bold hover:underline">Baca Selengkapnya &rarr;</button>
              </Link>
            </div>

            {/* RIGHT SIDE: FEATURED IMAGE */}
            <div className="w-full lg:w-1/2 flex justify-end">
              <Link href={`/berita/${beritaList[0].slug}`} className="w-full lg:max-w-137.5 h-60 sm:h-70 md:h-85 lg:h-100 rounded-2xl sm:rounded-[20px] overflow-hidden shadow-2xl relative group cursor-pointer block">
                {/* Image */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={beritaList[0].image || "/r54.png"} alt={beritaList[0].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />

                {/* Bottom Gradient Overlay for Date */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-[#050170]/90 to-transparent pointer-events-none" />

                {/* Date Overlay */}
                <div className="absolute bottom-4 right-5 sm:bottom-5 sm:right-6 md:bottom-6 md:right-8 z-10 flex flex-col items-end gap-1 text-white">
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg font-bold drop-shadow-md">{beritaList[0].date || 'Tidak ada tanggal'}</p>
                </div>
              </Link>
            </div>
          </div>

          <div className="w-full max-w-340 mx-auto mb-10 sm:mb-12 md:mb-14 lg:mb-16 px-4 sm:px-6 md:px-8 overflow-visible">
            <div className="flex flex-wrap justify-center gap-6 md:gap-6 lg:gap-8 w-full items-stretch">
              {beritaList.slice(1, 4).map((news, idx) => (
                <div
                  key={`pengabdian-${news.id || idx}`}
                  className={`flex w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1.33rem)] max-w-100 ${
                    idx === 0
                      ? 'lg:-translate-x-5'
                      : idx === 1
                        ? 'lg:translate-x-1'
                        : idx === 2
                          ? 'lg:translate-x-7'
                          : ''
                  }`}
                >
                  <NewsCard 
                    date={news.date || 'Tidak ada tanggal'}
                    author={news.author || 'Admin'}
                    title={news.title}
                    description={news.description ? (news.description.length > 100 ? news.description.substring(0, 100) + '...' : news.description) : ''}
                    image={news.image || '/r54.png'}
                    slug={news.slug}
                  />
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        /* --- CONDITION: NO DATA --- */
        <div className="w-full max-w-340 mx-auto mb-10 sm:mb-12 md:mb-14 lg:mb-16 px-4 sm:px-6 md:px-8 overflow-visible flex flex-col items-center">
          {/* Badge Pill Centered */}
          <div className="bg-linear-to-b from-okif-primary to-okif-secondary text-white font-bold text-xs sm:text-sm md:text-base lg:text-lg px-4 sm:px-5 py-1.5 sm:py-2 rounded-xl inline-block shadow-md tracking-normal uppercase mb-8">
            BERITA TERBARU
          </div>
          
          <div className="flex flex-col items-center justify-center min-h-37.5 md:min-h-50 text-center w-full">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-400/80">BELUM ADA BERITA YANG TERSEDIA SAAT INI.</h2>
          </div>
        </div>
      )}


      <div className="relative z-20 flex justify-center w-full">
        <Link href="/berita">
          <button className="px-5 py-2 md:px-7 md:py-2.5 lg:px-8 lg:py-3 bg-white text-okif-primary font-bold text-xs sm:text-sm md:text-base lg:text-lg rounded-xl md:rounded-2xl border-2 border-okif-primary hover:bg-okif-primary hover:text-white transition-colors shadow-lg cursor-pointer">
            LIHAT LAINNYA
          </button>
        </Link>
      </div>

    </BaseSection>
  );
}
