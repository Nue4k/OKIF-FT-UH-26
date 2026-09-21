"use client";

import React, { useRef, useEffect, useState, forwardRef, useImperativeHandle } from 'react';

interface HorizontalScrollContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  enableDrag?: boolean;
}

const HorizontalScrollContainer = forwardRef<HTMLDivElement, HorizontalScrollContainerProps>(
  function HorizontalScrollContainer(
    { children, className = '', enableDrag = true, onScroll, ...props },
    ref
  ) {
    const internalRef = useRef<HTMLDivElement>(null);
    useImperativeHandle(ref, () => internalRef.current as HTMLDivElement);

    const isDraggingRef = useRef(false);
    const startXRef = useRef(0);
    const scrollLeftRef = useRef(0);
    const hasMovedRef = useRef(false);
    const [isGrabbing, setIsGrabbing] = useState(false);

    useEffect(() => {
      const container = internalRef.current;
      if (!container) return;

      const handleWheel = (e: WheelEvent) => {
        const isScrollable = container.scrollWidth > container.clientWidth;
        if (!isScrollable || e.deltaY === 0) return;

        const atLeft = container.scrollLeft <= 0;
        const atRight = Math.ceil(container.scrollLeft + container.clientWidth) >= container.scrollWidth;

        if (e.deltaY < 0 && atLeft) return;
        if (e.deltaY > 0 && atRight) return;

        e.preventDefault();
        container.scrollLeft += e.deltaY;
      };

      container.addEventListener('wheel', handleWheel, { passive: false });
      return () => {
        container.removeEventListener('wheel', handleWheel);
      };
    }, []);

    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!enableDrag) return;
      const container = internalRef.current;
      if (!container) return;

      isDraggingRef.current = true;
      hasMovedRef.current = false;
      startXRef.current = e.pageX - container.offsetLeft;
      scrollLeftRef.current = container.scrollLeft;
      setIsGrabbing(true);
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!isDraggingRef.current || !internalRef.current) return;
      e.preventDefault();
      const x = e.pageX - internalRef.current.offsetLeft;
      const walk = x - startXRef.current;
      if (Math.abs(walk) > 5) {
        hasMovedRef.current = true;
      }
      internalRef.current.scrollLeft = scrollLeftRef.current - walk;
    };

    const handleMouseUpOrLeave = () => {
      isDraggingRef.current = false;
      setIsGrabbing(false);
    };

    const handleClickCapture = (e: React.MouseEvent<HTMLDivElement>) => {
      if (hasMovedRef.current) {
        e.stopPropagation();
        e.preventDefault();
        hasMovedRef.current = false;
      }
    };

    return (
      <div
        ref={internalRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
        onClickCapture={handleClickCapture}
        onScroll={onScroll}
        className={`flex flex-nowrap overflow-x-auto select-none [&::-webkit-scrollbar]:hidden ${
          isGrabbing ? 'cursor-grabbing' : 'cursor-grab'
        } ${className}`}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', ...props.style }}
        {...props}
      >
        {children}
      </div>
    );
  }
);

export default HorizontalScrollContainer;

