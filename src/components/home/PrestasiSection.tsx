"use client";

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import BaseSection from '@/components/ui/BaseSection';

export default function PrestasiSection() {
  const prestasiData = [
    { nama: 'A. Tyas Nur Atda', prestasi: 'Juara 1 GEMASTIK', image: '/Mapres.png' },
    { nama: 'A. Tyas Nur Atda', prestasi: 'Juara 1 GEMASTIK', image: '/Mapres.png' },
    { nama: 'A. Tyas Nur Atda', prestasi: 'Juara 1 GEMASTIK', image: '/Mapres.png' },
    { nama: 'A. Tyas Nur Atda', prestasi: 'Juara 1 GEMASTIK', image: '/Mapres.png' },
    { nama: 'A. Tyas Nur Atda', prestasi: 'Juara 1 GEMASTIK', image: '/Mapres.png' },
    { nama: 'A. Tyas Nur Atda', prestasi: 'Juara 1 GEMASTIK', image: '/Mapres.png' },
    { nama: 'A. Tyas Nur Atda', prestasi: 'Juara 1 GEMASTIK', image: '/Mapres.png' },
    { nama: 'A. Tyas Nur Atda', prestasi: 'Juara 1 GEMASTIK', image: '/Mapres.png' },
  ];

  // Duplicate items for infinite seamless auto-scrolling
  const displayItems = [...prestasiData, ...prestasiData];

  const scrollRef = useRef<HTMLDivElement>(null);
  const isHoveredRef = useRef(false);
  const [activeDot, setActiveDot] = useState(0);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animationFrameId: number;
    const speed = 0.75; // Kecepatan scroll perlahan yang halus

    const autoScroll = () => {
      if (!isHoveredRef.current && container) {
        container.scrollLeft += speed;

        const halfWidth = container.scrollWidth / 2;
        if (container.scrollLeft >= halfWidth) {
          container.scrollLeft -= halfWidth;
        }

        // Update active dot indicator
        const itemWidth = halfWidth / prestasiData.length;
        const currentIdx = Math.floor((container.scrollLeft % halfWidth) / itemWidth) % prestasiData.length;
        setActiveDot(currentIdx);
      }
      animationFrameId = requestAnimationFrame(autoScroll);
    };

    animationFrameId = requestAnimationFrame(autoScroll);

    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY !== 0) {
        container.scrollLeft += e.deltaY;
        const halfWidth = container.scrollWidth / 2;
        if (container.scrollLeft >= halfWidth) {
          container.scrollLeft -= halfWidth;
        } else if (container.scrollLeft < 0) {
          container.scrollLeft += halfWidth;
        }
      }
    };

    container.addEventListener('wheel', handleWheel, { passive: true });

    return () => {
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener('wheel', handleWheel);
    };
  }, [prestasiData.length]);

  return (
    <BaseSection
      id="prestasi"
      variant="transparent"
      className="pt-0 pb-16 md:pb-24 relative flex flex-col justify-center overflow-visible select-none"
      containerClassName="!max-w-full !px-0 w-full"
    >

      {/* Title */}
      <div className="text-center mb-4 md:mb-6 flex flex-col items-center gap-3 md:gap-4 px-4">
        <div className="bg-gradient-to-b from-[#0C35E9] to-[#1486F6] text-white font-bold text-xs sm:text-sm md:text-lg px-5 py-2 rounded-xl inline-block shadow-md tracking-normal uppercase">
          MAHASISWA BERPRESTASI
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight uppercase text-center">
          TEKNIK INFORMATIKA FT-UH
        </h2>
      </div>

      {/* Slidable Cards Container (Edge-to-Edge with Smooth Auto-Scroll) */}
      <div
        ref={scrollRef}
        onMouseEnter={() => { isHoveredRef.current = true; }}
        onMouseLeave={() => { isHoveredRef.current = false; }}
        onTouchStart={() => { isHoveredRef.current = true; }}
        onTouchEnd={() => { isHoveredRef.current = false; }}
        className="w-full flex flex-nowrap overflow-x-auto [&::-webkit-scrollbar]:hidden gap-4 sm:gap-6 md:gap-10 justify-start items-center pt-2 pb-4 px-4 md:px-12 cursor-grab active:cursor-grabbing"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {displayItems.map((item, index) => (
          <div key={index} className="flex-shrink-0 flex flex-col items-center relative group w-[185px] sm:w-[240px] md:w-[300px]">
            {/* Image Card Container */}
            <div className="relative z-10 w-[185px] sm:w-[240px] md:w-[300px] h-[270px] sm:h-[350px] md:h-[440px] flex justify-center hover:scale-105 transition-transform duration-300">
              {item.image ? (
                <Image
                  src={item.image}
                  alt={item.nama}
                  fill
                  sizes="(max-width: 640px) 185px, (max-width: 768px) 240px, 300px"
                  className="object-contain drop-shadow-2xl pointer-events-none"
                  priority={index < 4}
                />
              ) : (
                <div
                  className="w-full aspect-[3/4] bg-white/5 rounded-[32px] border-2 border-dashed border-white/20 flex flex-col items-center justify-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white/30 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-white/30 text-sm font-bold tracking-widest text-center">GAMBAR<br />KARTU MAPRES</span>
                </div>
              )}
            </div>

          </div>
        ))}
      </div>

      {/* Dots Indicator */}
      <div className="relative z-20 flex justify-center items-center gap-2.5 mt-4">
        {prestasiData.map((_, i) => (
          <div
            key={i}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === activeDot
              ? 'bg-cyan-400 shadow-[0_0_10px_#22d3ee] scale-125'
              : 'bg-white/50 hover:bg-white/80'
              }`}
          />
        ))}
      </div>

    </BaseSection>
  );
}
