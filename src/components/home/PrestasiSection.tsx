"use client";

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import BaseSection from '@/components/ui/BaseSection';

import { Prestasi } from '../../../types/models';

interface PrestasiSectionProps {
  prestasiList?: Prestasi[];
}

export default function PrestasiSection({ prestasiList }: PrestasiSectionProps) {
  const safePrestasiList = prestasiList || [];
  const [canLoop, setCanLoop] = useState(safePrestasiList.length >= 6);

  // 3 sets of items only when looping is safely enabled, otherwise just unique items
  const displayItems = canLoop
    ? [...safePrestasiList, ...safePrestasiList, ...safePrestasiList]
    : safePrestasiList;

  const scrollRef = useRef<HTMLDivElement>(null);
  const isHoveredRef = useRef(false);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const startScrollLeftRef = useRef(0);
  const resumeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Quick-resume helper when user finishes interacting (short 400-500ms delay)
  const resumeAutoScrollQuickly = (delay = 400) => {
    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
    }
    resumeTimeoutRef.current = setTimeout(() => {
      isHoveredRef.current = false;
    }, delay);
  };

  // Check if content length warrants auto-scroll loop or should stay clean & static
  useEffect(() => {
    const checkLoopCondition = () => {
      const container = scrollRef.current;
      if (!container || safePrestasiList.length === 0) return;

      const containerWidth = container.clientWidth || window.innerWidth;
      const firstCard = container.querySelector('[data-mapres-card="true"]') as HTMLElement | null;
      const cardWidth = firstCard && firstCard.offsetWidth > 0 ? firstCard.offsetWidth : 280;

      // Determine gap from screen width
      const gap = window.innerWidth >= 1280 ? 48 : window.innerWidth >= 1024 ? 40 : 32;
      const totalUniqueWidth = safePrestasiList.length * (cardWidth + gap);

      // Looping activates if total cards exceed screen width
      const shouldEnableLoop = safePrestasiList.length >= 4 && totalUniqueWidth > containerWidth;
      setCanLoop(shouldEnableLoop);
    };

    checkLoopCondition();
    window.addEventListener('resize', checkLoopCondition);
    return () => window.removeEventListener('resize', checkLoopCondition);
  }, [safePrestasiList.length]);

  // Initialize scroll position in the middle set for seamless wrap if looping
  useEffect(() => {
    const container = scrollRef.current;
    if (!container || !canLoop || safePrestasiList.length === 0) {
      if (container) container.scrollLeft = 0;
      return;
    }

    const oneSetWidth = container.scrollWidth / 3;
    if (container.scrollLeft === 0 && oneSetWidth > 0) {
      container.scrollLeft = oneSetWidth;
    }
  }, [canLoop, safePrestasiList.length]);

  // Smooth continuous auto-scroll loop with sub-pixel accumulator (prevents browser integer truncation)
  useEffect(() => {
    const container = scrollRef.current;
    if (!container || !canLoop || safePrestasiList.length === 0) return;

    let animationFrameId: number;
    let subPixelAccumulator = 0;
    const speed = 1.1; // Smooth natural scroll speed

    const autoScroll = () => {
      if (!isHoveredRef.current && !isDraggingRef.current && container) {
        subPixelAccumulator += speed;
        if (subPixelAccumulator >= 1) {
          const step = Math.floor(subPixelAccumulator);
          container.scrollLeft += step;
          subPixelAccumulator -= step;
        }

        const oneSetWidth = container.scrollWidth / 3;
        if (oneSetWidth > 0) {
          if (container.scrollLeft >= 2 * oneSetWidth) {
            container.scrollLeft -= oneSetWidth;
          } else if (container.scrollLeft <= 0) {
            container.scrollLeft += oneSetWidth;
          }
        }
      }
      animationFrameId = requestAnimationFrame(autoScroll);
    };

    animationFrameId = requestAnimationFrame(autoScroll);

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (resumeTimeoutRef.current) {
        clearTimeout(resumeTimeoutRef.current);
      }
    };
  }, [canLoop, safePrestasiList.length]);

  // Handle native scroll (trackpad, horizontal wheel, mobile momentum)
  const handleScroll = () => {
    const container = scrollRef.current;
    if (!container || !canLoop) return;

    const oneSetWidth = container.scrollWidth / 3;
    if (oneSetWidth > 0) {
      if (container.scrollLeft >= 2 * oneSetWidth) {
        container.scrollLeft -= oneSetWidth;
      } else if (container.scrollLeft <= 0) {
        container.scrollLeft += oneSetWidth;
      }
    }
  };

  // Mouse drag to scroll handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    const container = scrollRef.current;
    if (!container) return;

    isDraggingRef.current = true;
    isHoveredRef.current = true;
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    startXRef.current = e.pageX;
    startScrollLeftRef.current = container.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current || !scrollRef.current) return;
    e.preventDefault();
    const container = scrollRef.current;
    const deltaX = (e.pageX - startXRef.current) * 1.25;
    container.scrollLeft = startScrollLeftRef.current - deltaX;
  };

  const handleMouseUp = () => {
    if (isDraggingRef.current) {
      isDraggingRef.current = false;
      resumeAutoScrollQuickly(400);
    }
  };

  const handleMouseLeaveContainer = () => {
    isDraggingRef.current = false;
    resumeAutoScrollQuickly(300);
  };

  return (
    <BaseSection
      id="prestasi"
      variant="transparent"
      className="py-12 md:py-20 relative flex flex-col justify-center overflow-visible select-none"
      containerClassName="!max-w-full !px-0 w-full relative"
    >
      {/* Title */}
      <div className="text-center mb-6 md:mb-8 flex flex-col items-center gap-3 md:gap-4 px-4">
        <div className="bg-gradient-to-r from-okif-primary to-okif-secondary text-white font-bold text-xs sm:text-sm md:text-base px-5 py-2 rounded-xl inline-block shadow-md tracking-wider uppercase border border-white/20">
          MAHASISWA BERPRESTASI
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight uppercase text-center tracking-tight">
          TEKNIK INFORMATIKA FT-UH
        </h2>
      </div>

      {/* Empty State or Slidable Cards Container */}
      {!prestasiList || prestasiList.length === 0 ? (
        <div className="flex flex-col items-center justify-center min-h-[150px] md:min-h-[200px] text-center relative z-10 w-full">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-300">Belum ada data mahasiswa berprestasi saat ini.</h2>
        </div>
      ) : (
        /* Edge-to-Edge Full Width Slidable Cards Container */
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeaveContainer}
          onTouchStart={() => {
            isHoveredRef.current = true;
            if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
          }}
          onTouchEnd={() => resumeAutoScrollQuickly(400)}
          className={`w-full flex flex-nowrap overflow-x-auto [&::-webkit-scrollbar]:hidden gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 items-center pt-2 pb-4 px-4 md:px-12 cursor-grab active:cursor-grabbing ${
            !canLoop ? 'justify-center mx-auto' : 'justify-start'
          }`}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {displayItems.map((item, index) => (
            <div
              key={index}
              data-mapres-card="true"
              className="shrink-0 flex flex-col items-center relative group w-[185px] sm:w-[240px] md:w-[280px] lg:w-[320px] xl:w-[350px]"
              onMouseEnter={() => {
                if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
                isHoveredRef.current = true;
              }}
              onMouseLeave={() => {
                resumeAutoScrollQuickly(300);
              }}
            >
              {/* Image Card Container (3:4 Aspect Ratio) */}
              <div className="relative z-10 w-[185px] sm:w-[240px] md:w-[280px] lg:w-[320px] xl:w-[350px] aspect-[3/4] flex justify-center hover:scale-105 transition-transform duration-300">
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.nama}
                    fill
                    sizes="(max-width: 640px) 185px, (max-width: 768px) 240px, (max-width: 1024px) 280px, (max-width: 1280px) 320px, 350px"
                    className="object-contain drop-shadow-2xl pointer-events-none select-none"
                    priority={index < 4}
                    draggable={false}
                  />
                ) : (
                  <div className="w-full aspect-[3/4] bg-white/5 rounded-4xl border-2 border-dashed border-white/20 flex flex-col items-center justify-center">
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
      )}
    </BaseSection>
  );
}
