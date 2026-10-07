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
  const isFewItems = safePrestasiList.length < 4;
  // 3 sets of items for seamless bi-directional infinite wrap if enough items
  const displayItems = isFewItems
    ? safePrestasiList
    : [...safePrestasiList, ...safePrestasiList, ...safePrestasiList];

  const scrollRef = useRef<HTMLDivElement>(null);
  const isHoveredRef = useRef(false);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const startScrollLeftRef = useRef(0);
  const resumeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [activeDot, setActiveDot] = useState(0);

  // Helper to temporarily pause auto-scroll when user interacts
  const pauseAutoScrollTemporarily = () => {
    isHoveredRef.current = true;
    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
    }
    resumeTimeoutRef.current = setTimeout(() => {
      isHoveredRef.current = false;
    }, 2500);
  };

  // Initialize scroll position in the middle set for seamless wrap if duplicated
  useEffect(() => {
    const container = scrollRef.current;
    if (!container || isFewItems || safePrestasiList.length === 0) return;

    const oneSetWidth = container.scrollWidth / 3;
    if (container.scrollLeft === 0) {
      container.scrollLeft = oneSetWidth;
    }
  }, [isFewItems, safePrestasiList.length]);

  // Auto-scroll loop
  useEffect(() => {
    const container = scrollRef.current;
    if (!container || isFewItems || safePrestasiList.length === 0) return;

    let animationFrameId: number;
    const speed = 0.75; // Smooth slow scroll

    const autoScroll = () => {
      if (!isHoveredRef.current && !isDraggingRef.current && container) {
        container.scrollLeft += speed;

        const oneSetWidth = container.scrollWidth / 3;
        if (container.scrollLeft >= 2 * oneSetWidth) {
          container.scrollLeft -= oneSetWidth;
        } else if (container.scrollLeft <= 0) {
          container.scrollLeft += oneSetWidth;
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
  }, [isFewItems, safePrestasiList.length]);

  // Sync the active dot with whichever card is closest to the viewport center
  const updateActiveDot = () => {
    const container = scrollRef.current;
    const count = safePrestasiList.length;
    if (!container || count === 0) return;

    const children = Array.from(container.children) as HTMLElement[];
    if (children.length === 0) return;

    let idx = 0;
    if (isFewItems && container.scrollLeft + container.clientWidth >= container.scrollWidth - 2 && container.scrollWidth > container.clientWidth) {
      idx = count - 1; // reached the end, last card can't reach the center
    } else {
      const center = container.scrollLeft + container.clientWidth / 2;
      let best = Infinity;
      children.forEach((child, i) => {
        const dist = Math.abs(child.offsetLeft + child.offsetWidth / 2 - center);
        if (dist < best) {
          best = dist;
          idx = i;
        }
      });
    }
    setActiveDot(idx % count);
  };

  // Handle native scroll (trackpad, horizontal wheel, mobile momentum)
  const handleScroll = () => {
    const container = scrollRef.current;
    if (!container) return;

    if (!isFewItems) {
      const oneSetWidth = container.scrollWidth / 3;
      if (container.scrollLeft >= 2 * oneSetWidth) {
        container.scrollLeft -= oneSetWidth;
      } else if (container.scrollLeft <= 0) {
        container.scrollLeft += oneSetWidth;
      }
    }
    updateActiveDot();
  };

  // Click on a dot -> scroll the carousel to that card
  const scrollToIndex = (i: number) => {
    const container = scrollRef.current;
    if (!container) return;
    const children = Array.from(container.children) as HTMLElement[];
    // With duplicated sets, target the card in the middle set
    const target = children[isFewItems ? i : i + safePrestasiList.length];
    if (!target) return;

    pauseAutoScrollTemporarily();
    const left = target.offsetLeft - (container.clientWidth - target.offsetWidth) / 2;
    container.scrollTo({ left: Math.max(0, left), behavior: 'smooth' });
    setActiveDot(i);
  };

  // Mouse drag to scroll handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    const container = scrollRef.current;
    if (!container) return;

    isDraggingRef.current = true;
    pauseAutoScrollTemporarily();
    startXRef.current = e.pageX;
    startScrollLeftRef.current = container.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current || !scrollRef.current) return;
    e.preventDefault();
    const container = scrollRef.current;
    const deltaX = (e.pageX - startXRef.current) * 1.3;
    container.scrollLeft = startScrollLeftRef.current - deltaX;
    pauseAutoScrollTemporarily();
  };

  const handleMouseUpOrLeave = () => {
    if (isDraggingRef.current) {
      isDraggingRef.current = false;
      pauseAutoScrollTemporarily();
    }
  };

  return (
    <BaseSection
      id="prestasi"
      variant="transparent"
      className="py-12 md:py-20 relative flex flex-col justify-center overflow-visible select-none"
      containerClassName="!max-w-full !px-0 w-full relative"
    >
      {/* Title */}
      <div className="text-center mb-4 md:mb-6 flex flex-col items-center gap-3 md:gap-4 px-4">
        <div className="bg-linear-to-b from-okif-primary to-okif-secondary text-white font-bold text-xs sm:text-sm md:text-lg px-5 py-2 rounded-xl inline-block shadow-md tracking-normal uppercase">
          MAHASISWA BERPRESTASI
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight uppercase text-center">
          TEKNIK INFORMATIKA FT-UH
        </h2>
      </div>

      {/* Empty State or Slidable Cards Container */}
      {!prestasiList || prestasiList.length === 0 ? (
        <div className="flex flex-col items-center justify-center min-h-37.5 md:min-h-50 text-center relative z-10 w-full">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-300">Belum ada data mahasiswa berprestasi saat ini.</h2>
        </div>
      ) : (
        <>
          {/* Slidable Cards Container (Edge-to-Edge with Manual Scroll & Drag Support) */}
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUpOrLeave}
            onMouseLeave={handleMouseUpOrLeave}
            onTouchStart={() => pauseAutoScrollTemporarily()}
            onTouchMove={() => pauseAutoScrollTemporarily()}
            onTouchEnd={() => pauseAutoScrollTemporarily()}
            onMouseEnter={() => { isHoveredRef.current = true; }}
            className={`w-full flex flex-nowrap overflow-x-auto [&::-webkit-scrollbar]:hidden gap-4 sm:gap-6 md:gap-10 items-center pt-2 pb-4 px-4 md:px-12 cursor-grab active:cursor-grabbing justify-start ${
              // Auto margins center the cards when they fit, but never clip the first card when they overflow
              isFewItems ? '[&>:first-child]:ml-auto [&>:last-child]:mr-auto' : ''
            }`}
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {displayItems.map((item, index) => (
              <div key={index} className="shrink-0 flex flex-col items-center relative group w-46.25 sm:w-60 md:w-75">
                {/* Image Card Container (3:4 Aspect Ratio) */}
                <div className="relative z-10 w-46.25 sm:w-60 md:w-75 aspect-3/4 flex justify-center hover:scale-105 transition-transform duration-300">
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.nama}
                      fill
                      sizes="(max-width: 640px) 185px, (max-width: 768px) 240px, 300px"
                      className="object-contain drop-shadow-2xl pointer-events-none select-none"
                      priority={index < 4}
                      draggable={false}
                    />
                  ) : (
                    <div
                      className="w-full aspect-3/4 bg-white/5 rounded-4xl border-2 border-dashed border-white/20 flex flex-col items-center justify-center"
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

        </>
      )}
    </BaseSection>
  );
}
