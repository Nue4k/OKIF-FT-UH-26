"use client";

import React, { useRef, useState, useEffect } from 'react';
import TentangKamiMemberCard, { MemberItem } from './TentangKamiMemberCard';

interface MemberCarouselProps {
  members: MemberItem[];
  showNavigation?: boolean;
  className?: string;
}

export default function MemberCarousel({
  members,
  showNavigation,
  className = '',
}: MemberCarouselProps) {
  const hasNavigation = showNavigation !== undefined ? showNavigation : members.length > 5;
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 5);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5);
    }
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = 0;
    }
    checkScroll();
    const handleResize = () => checkScroll();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [members]);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const cards = container.querySelectorAll<HTMLElement>('.member-carousel-card');
    if (!cards.length) return;

    const cardStep = cards.length > 1 ? cards[1].offsetLeft - cards[0].offsetLeft : container.clientWidth;
    const currentScroll = container.scrollLeft;
    const maxScroll = container.scrollWidth - container.clientWidth;

    // Determine current start index based on scroll position
    const currentIndex = Math.round(currentScroll / cardStep);
    const maxStartIndex = Math.max(0, cards.length - 5);

    let targetIndex: number;

    if (direction === 'right') {
      if (currentScroll >= maxScroll - 15 || currentIndex >= maxStartIndex) {
        // Loop back to start
        targetIndex = 0;
      } else {
        targetIndex = Math.min(currentIndex + 5, maxStartIndex);
      }
    } else {
      if (currentScroll <= 15 || currentIndex <= 0) {
        // Loop to end (showing last 5 cards)
        targetIndex = maxStartIndex;
      } else {
        if (currentIndex === maxStartIndex && cards.length % 5 !== 0) {
          targetIndex = Math.floor((currentIndex - 1) / 5) * 5;
        } else {
          targetIndex = Math.max(0, currentIndex - 5);
        }
      }
    }

    const targetLeft = targetIndex === maxStartIndex
      ? maxScroll
      : Math.min(maxScroll, Math.max(0, targetIndex * cardStep));

    container.scrollTo({
      left: targetLeft,
      behavior: 'smooth',
    });
  };

  return (
    <div
      className={`relative w-full ${
        hasNavigation
          ? 'flex items-start justify-center px-0 lg:px-6'
          : 'flex items-start justify-start px-0'
      } ${className}`}
    >
      {/* Left Navigation Arrow (Only visible on desktop, only if hasNavigation) */}
      {hasNavigation && (
        <button
          onClick={() => scroll('left')}
          aria-label="Previous Members"
          className="hidden lg:flex relative z-30 mt-[135px] w-[48px] h-[48px] rounded-full bg-white items-center justify-center shadow-[0_4px_16px_rgba(0,0,0,0.25)] transition-all duration-200 hover:scale-105 hover:bg-slate-50 active:scale-95 cursor-pointer shrink-0"
        >
          <svg
            className="w-9 h-9"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M27 13.5L16.5 24L27 34.5"
              stroke="#08117A"
              strokeWidth="3.6"
              strokeLinecap="butt"
              strokeLinejoin="miter"
            />
          </svg>
        </button>
      )}

      {/* Cards Scroll Container */}
      <div
        ref={scrollRef}
        onScroll={checkScroll}
        className={`w-full ${
          hasNavigation
            ? 'flex-1 min-w-0 lg:flex-none lg:w-[1244px] xl:w-[1244px] -mx-3 px-[26px] sm:-mx-2 sm:px-8 md:mx-0 md:px-8 lg:mx-0 lg:px-6'
            : 'px-3.5 sm:px-6 md:px-8 lg:px-14'
        } flex items-center gap-3 sm:gap-3.5 md:gap-4 lg:gap-6 overflow-x-auto -my-1 py-3 sm:py-4 md:py-5 lg:py-8 scroll-smooth hide-scrollbar`}
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {members.map((member, index) => (
          <TentangKamiMemberCard
            key={member.id ?? `${member.nama || member.name || 'member'}-${index}`}
            member={member}
          />
        ))}
      </div>

      {/* Right Navigation Arrow (Only visible on desktop, only if hasNavigation) */}
      {hasNavigation && (
        <button
          onClick={() => scroll('right')}
          aria-label="Next Members"
          className="hidden lg:flex relative z-30 mt-[135px] w-[48px] h-[48px] rounded-full bg-white items-center justify-center shadow-[0_4px_16px_rgba(0,0,0,0.25)] transition-all duration-200 hover:scale-105 hover:bg-slate-50 active:scale-95 cursor-pointer shrink-0"
        >
          <svg
            className="w-9 h-9"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 13.5L31.5 24L21 34.5"
              stroke="#08117A"
              strokeWidth="3.6"
              strokeLinecap="butt"
              strokeLinejoin="miter"
            />
          </svg>
        </button>
      )}
    </div>
  );
}
