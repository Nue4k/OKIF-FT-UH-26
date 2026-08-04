"use client";

import React, { useRef, useEffect } from 'react';

interface HorizontalScrollContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export default function HorizontalScrollContainer({ 
  children, 
  className = '', 
  ...props 
}: HorizontalScrollContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      // Check if container has horizontal scrollable content
      const isScrollable = container.scrollWidth > container.clientWidth;
      if (!isScrollable || e.deltaY === 0) return;

      // Determine if we are at the very edges
      const atLeft = container.scrollLeft === 0;
      // Use Math.ceil to avoid sub-pixel rounding errors causing lockups
      const atRight = Math.ceil(container.scrollLeft + container.clientWidth) >= container.scrollWidth;

      // Let the browser handle vertical scrolling if we are at the edges 
      // and the user is trying to scroll past them
      if (e.deltaY < 0 && atLeft) return; // scrolling UP at Left edge
      if (e.deltaY > 0 && atRight) return; // scrolling DOWN at Right edge

      // Otherwise, intercept vertical scroll and turn it into horizontal scroll
      e.preventDefault();
      container.scrollLeft += e.deltaY;
    };

    // Attach with passive: false so we can call e.preventDefault()
    container.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      container.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className={`flex flex-nowrap overflow-x-auto [&::-webkit-scrollbar]:hidden ${className}`}
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', ...props.style }}
      {...props}
    >
      {children}
    </div>
  );
}
