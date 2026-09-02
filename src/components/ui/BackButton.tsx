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
      className="inline-flex items-center gap-2 text-[#767676] hover:text-[#0051FF] font-semibold text-xs md:text-sm tracking-wider uppercase transition-colors mb-6 group w-fit cursor-pointer"
      type="button"
    >
      <svg
        className="w-4 h-4 transition-transform group-hover:-translate-x-1"
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
