"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

export default function BackButton({ fallback = '/berita' }: { fallback?: string }) {
  const router = useRouter();

  const handleBack = () => {
    if (typeof window !== 'undefined' && window.history.length > 1) {
      router.back();
    } else {
      router.push(fallback);
    }
  };

  return (
    <button
      onClick={handleBack}
      className="inline-flex items-center gap-1.5 sm:gap-2.5 text-[#555555] hover:text-[#0C35E9] font-bold text-xs sm:text-sm md:text-base lg:text-lg tracking-wider uppercase transition-all duration-200 mb-4 sm:mb-6 group w-fit cursor-pointer"
      type="button"
    >
      <svg
        className="w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 lg:w-6 lg:h-6 transition-transform group-hover:-translate-x-1.5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2.5}
          d="M15 19l-7-7 7-7"
        />
      </svg>
      <span>KEMBALI</span>
    </button>
  );
}
