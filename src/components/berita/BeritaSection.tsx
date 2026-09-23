import React from 'react';
import BaseSection from '@/components/ui/BaseSection';
import BeritaGridCard from './BeritaGridCard';
import BeritaHorizontalCard from './BeritaHorizontalCard';
import FormatifFeaturedCard from './FormatifFeaturedCard';
import FormatifGridCard from './FormatifGridCard';
import { Berita, Formatif } from '../../../types/models';

interface BeritaSectionProps {
  beritaList?: Berita[];
  formatifList?: Formatif[];
}

export default function BeritaSection({ beritaList = [], formatifList = [] }: BeritaSectionProps) {
  // Split Berita: First 3 for Grid, Rest for List (max 4)
  const gridBerita = beritaList.slice(0, 3);
  const listBerita = beritaList.slice(3, 7);

  // Split Formatif: First 1 for Featured, Next 3 for Grid
  const featuredFormatif = formatifList.length > 0 ? formatifList[0] : null;
  const gridFormatif = formatifList.slice(1, 4);

  return (
    <div className="w-full relative bg-[#050170] overflow-hidden">
      {/* Background radial effects */}
      <div 
        className="absolute top-[-5%] left-[-10%] w-[80%] h-[80%] pointer-events-none z-0 blur-[120px]"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(12, 53, 233, 0.4) 0%, rgba(5, 1, 112, 0) 70%)'
        }}
      />
      <div 
        className="absolute top-[20%] right-[-20%] w-[70%] h-[70%] pointer-events-none z-0 blur-[130px] opacity-70"
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
            <div className="bg-linear-to-b from-okif-primary to-okif-secondary text-white font-bold text-[11px] min-[360px]:text-xs sm:text-sm md:text-base lg:text-lg px-3.5 py-1.5 sm:px-5 sm:py-2 rounded-xl inline-block shadow-md tracking-normal uppercase">
              KEGIATAN HMIF FT-UH
            </div>
          </div>

          {/* MOBILE MODE: Only 1 Single Row with horizontal scroll */}
          <div
            className={`w-full max-w-full flex md:hidden flex-nowrap overflow-x-auto gap-3.5 sm:gap-4 pt-1 pb-4 sm:pb-6 px-0.5 [&::-webkit-scrollbar]:hidden touch-pan-x snap-x snap-mandatory ${[...gridBerita, ...listBerita].length <= 1 ? 'justify-center' : ''}`}
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {[...gridBerita, ...listBerita].map((item, idx) => (
              <div key={`mobile-news-${item.id || idx}`} className="w-[82vw] max-w-77.5 min-w-62.5 shrink-0 flex snap-center">
                <BeritaGridCard 
                  author={item.author || 'Admin'}
                  date={item.date || 'Tidak ada tanggal'}
                  title={item.title}
                  description={item.description ? (item.description.length > 100 ? item.description.substring(0, 100) + '...' : item.description) : ''}
                  image={item.image || '/r54.png'}
                  slug={item.slug}
                />
              </div>
            ))}
            {beritaList.length === 0 && (
              <p className="text-white/60 text-sm">Belum ada berita.</p>
            )}
          </div>

          {/* PC / DESKTOP / TABLET MODE: Top 3 Grid Cards + Bottom 4 Vertical List */}
          <div className="hidden md:flex md:flex-col gap-6 md:gap-6 lg:gap-8 w-full">
            {/* Top Grid Cards (Converted to Flex to allow centering when few items) */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-4 lg:gap-8 w-full items-stretch">
              {gridBerita.map((item, idx) => (
                <div key={`grid-news-${item.id || idx}`} className="w-full md:w-[calc(33.333%-1rem)] lg:w-[calc(33.333%-1.33rem)] max-w-100 flex">
                  <BeritaGridCard 
                    author={item.author || 'Admin'}
                    date={item.date || 'Tidak ada tanggal'}
                    title={item.title}
                    description={item.description ? (item.description.length > 100 ? item.description.substring(0, 100) + '...' : item.description) : ''}
                    image={item.image || '/r54.png'}
                    slug={item.slug}
                  />
                </div>
              ))}
            </div>

            {/* Vertical List of 4 Horizontal Cards */}
            <div className="flex flex-col gap-5 md:gap-6 lg:gap-8 mt-1 sm:mt-2 w-full">
              {listBerita.map((item, idx) => (
                <BeritaHorizontalCard 
                  key={`list-news-${item.id || idx}`}
                  author={item.author || 'Admin'}
                  date={item.date || 'Tidak ada tanggal'}
                  title={item.title}
                  description={item.description || ''}
                  image={item.image || '/r54.png'}
                  slug={item.slug}
                />
              ))}
            </div>
          </div>
        </div>

        {/* 2. HASIL FORMATIF HMIF FT-UH SECTION */}
        <div id="formatif" className="w-full flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-8 pt-6 sm:pt-8 md:pt-10 scroll-mt-28 border-t border-white/15">
          {/* Section Header Badge */}
          <div className="flex items-center justify-start w-full">
            <div className="bg-linear-to-b from-okif-primary to-okif-secondary text-white font-bold text-[11px] min-[360px]:text-xs sm:text-sm md:text-base lg:text-lg px-3.5 py-1.5 sm:px-5 sm:py-2 rounded-xl inline-block shadow-md tracking-normal uppercase">
              HASIL FORMATIF HMIF FT-UH
            </div>
          </div>

          {/* Top Featured Card */}
          {featuredFormatif ? (
            <FormatifFeaturedCard 
              author="Admin"
              date={featuredFormatif.date || 'Tidak ada tanggal'}
              title={featuredFormatif.title}
              description={featuredFormatif.description || ''}
              image={featuredFormatif.image || '/r54.png'}
              slug={featuredFormatif.slug}
            />
          ) : (
            <p className="text-white/60 text-sm">Belum ada hasil formatif.</p>
          )}

          {/* Bottom Grid Cards (Converted to Flex for centering) */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-5 md:gap-4 lg:gap-8 w-full mt-1 sm:mt-2 items-stretch">
            {gridFormatif.map((item, idx) => (
              <div key={`grid-formatif-${item.id || idx}`} className="w-full md:w-[calc(33.333%-1rem)] lg:w-[calc(33.333%-1.33rem)] max-w-100 flex">
                <FormatifGridCard 
                  author="Admin"
                  date={item.date || 'Tidak ada tanggal'}
                  title={item.title}
                  description={item.description ? (item.description.length > 100 ? item.description.substring(0, 100) + '...' : item.description) : ''}
                  image={item.image || '/r54.png'}
                  slug={item.slug}
                />
              </div>
            ))}
          </div>
        </div>
      </BaseSection>
    </div>
  );
}
