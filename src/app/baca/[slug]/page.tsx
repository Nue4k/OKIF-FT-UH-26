import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Navbar from '@/components/ui/Navbar';
import BackButton from '@/components/ui/BackButton';
import { beritaService } from '@/services/berita.service';
import { formatifService } from '@/services/formatif.service';
import { Berita, Formatif } from '../../../../types/models';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  let data: Berita | Formatif | null = await beritaService.getBySlug(slug);
  if (!data) {
    data = await formatifService.getBySlug(slug);
  }

  if (!data) return { title: 'Not Found' };

  return {
    title: `${data.title} - OKIF FT-UH`,
    description: data.title,
    openGraph: {
      images: [data.image],
    }
  };
}

export default async function BacaSlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  let data: any = await beritaService.getBySlug(slug);
  let type = "BERITA";

  if (!data) {
    data = await formatifService.getBySlug(slug);
    type = "FORMATIF";
  }

  if (!data) {
    notFound();
  }

  // Format tanggal dari millisecond ke string yang rapi
  const uploadDate = data.createdAt ? new Date(data.createdAt).toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }) + ' WITA' : '';

  return (
    <main className="flex flex-col min-h-screen bg-white overflow-x-hidden relative">
      <Navbar />

      {/* Hero */}
      <section className="relative w-full h-[380px] md:h-[440px] lg:h-[480px] flex items-end overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={data.image}
          alt={data.title}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/60 pointer-events-none" />
        <div className="absolute inset-0 bg-[#050170]/30 pointer-events-none" />

        <div className="relative z-10 w-full max-w-[1360px] mx-auto px-6 md:px-12 lg:px-16 pb-10 md:pb-12 flex flex-col items-start gap-3">
          <span className="bg-[#0051FF] text-white text-xs md:text-sm font-bold tracking-wider px-3.5 py-1 rounded-[6px] uppercase shadow-sm">
            {type}
          </span>
          <h1 className="text-white text-2xl md:text-4xl lg:text-[44px] font-bold leading-snug lg:leading-[1.2] max-w-4xl drop-shadow-md">
            {data.title}
          </h1>
          <p className="text-white/90 text-sm md:text-base font-normal tracking-wide drop-shadow">
            {data.date}
          </p>
        </div>
      </section>

      {/* Artikel */}
      <section className="w-full bg-white py-10 md:py-14 px-6 md:px-8">
        <div className="w-full max-w-[880px] mx-auto flex flex-col">
          <BackButton fallback={type === "BERITA" ? "/berita" : "/formatif"} />

          <p className="text-[#767676] text-xs md:text-sm font-normal mb-2">
            Diunggah {uploadDate}
          </p>
          <h2 className="text-[#111827] text-2xl md:text-[32px] lg:text-[36px] font-bold leading-snug md:leading-tight mb-6">
            {data.title}
          </h2>

          <div className="flex items-center gap-2 mb-8 text-[#767676] text-sm font-medium">
            Oleh: <span className="text-[#0051FF] font-bold">{data.author || data.speaker}</span>
          </div>

          {/* HTML Render from Tiptap */}
          <div 
            className="prose prose-lg max-w-none prose-p:text-[#2B2B2B] prose-p:text-[17px] prose-p:leading-[1.85] prose-p:text-justify prose-img:rounded-[20px] prose-img:w-full prose-img:my-8 prose-img:shadow-sm prose-headings:text-[#111827] prose-a:text-[#0051FF] prose-strong:text-[#111827]"
            dangerouslySetInnerHTML={{ __html: data.description }}
          />
        </div>
      </section>
    </main>
  );
}
