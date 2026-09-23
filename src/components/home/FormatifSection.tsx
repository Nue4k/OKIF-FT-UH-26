import React from 'react';
import Link from 'next/link';
import BaseSection from '@/components/ui/BaseSection';
import FormatifCard from '@/components/ui/FormatifCard';
import { Formatif } from '../../../types/models';

interface FormatifSectionProps {
  formatifList?: Formatif[];
}

export default function FormatifSection({ formatifList }: FormatifSectionProps) {
  return (
    <BaseSection id="formatif" variant="transparent" className="pt-8! pb-24! md:pb-32.5! relative flex flex-col items-center overflow-visible isolate" containerClassName="!max-w-full !px-4 md:!px-8 w-full">
      {/* Pure CSS Radial Glow - 100% Exact Figma Specs: Group 114 (Pure Natural Fade, No Mask) */}
      <div className="absolute top-[85%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-175 h-175 md:w-284.5 md:h-284.5 pointer-events-none -z-20 overflow-visible flex items-center justify-center">
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

      <div className="text-center mb-10 md:mb-14 lg:mb-16 relative z-10 px-4">
        <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-5xl font-black text-white uppercase">HASIL FORMATIF</h2>
      </div>

      <div className="w-full max-w-340 mx-auto mb-24 sm:mb-28 md:mb-32 lg:mb-40 px-4 sm:px-6 md:px-8 relative z-10">
        {!formatifList || formatifList.length === 0 ? (
          <div className="flex flex-col items-center justify-center min-h-37.5 md:min-h-50 text-center w-full">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-300">Belum ada hasil formatif yang tersedia saat ini.</h2>
          </div>
        ) : (
          <div className="flex flex-wrap justify-center gap-y-24 md:gap-y-28 gap-x-6 md:gap-x-8 w-full items-stretch">
            {formatifList.slice(0, 3).map((item, idx) => (
              <div key={`formatif-${item.id || idx}`} className="w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-2rem)] max-w-108.25 flex">
                <FormatifCard 
                  date={item.date || 'Tidak ada tanggal'}
                  tag={`Formatif #${idx + 1}`}
                  title={item.title}
                  description={item.description ? (item.description.length > 100 ? item.description.substring(0, 100) + '...' : item.description) : ''}
                  image={item.image || '/r54.png'}
                  href={`/formatif/${item.slug}`}
                />
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="relative z-20 flex justify-center w-full mt-4">
        <Link href="/berita#formatif">
          <button className="px-5 py-2 md:px-7 md:py-2.5 lg:px-8 lg:py-3 bg-white text-okif-primary font-bold text-xs sm:text-sm md:text-base lg:text-lg rounded-xl md:rounded-2xl border-2 border-okif-primary hover:bg-okif-primary hover:text-white transition-colors shadow-lg cursor-pointer">
            LIHAT LAINNYA
          </button>
        </Link>
      </div>

      {/* Soft Dark Boundary Shadow above the white section (Exact Figma/Design Spec) */}
      <div className="absolute inset-x-0 bottom-0 h-6 bg-linear-to-t from-black/35 via-black/10 to-transparent pointer-events-none z-10" />
    </BaseSection>
  );
}
