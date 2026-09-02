import React from 'react';
import { Metadata } from 'next';
import Navbar from '@/components/ui/Navbar';
import BackButton from '@/components/ui/BackButton';

export const metadata: Metadata = {
  title: 'AI Dan Kemampuan Berpikir Kritis Mahasiswa - OKIF FT-UH',
  description:
    'Artikel berita dan kegiatan AI Dan Kemampuan Berpikir Kritis Mahasiswa oleh Himpunan Mahasiswa Informatika FT-UH.',
};

export default function BacaPage() {
  return (
    <main className="flex flex-col min-h-screen bg-white overflow-x-hidden relative">
      {/* Navbar overlay */}
      <Navbar />

      {/* Hero Banner Section */}
      <section className="relative w-full h-[380px] md:h-[440px] lg:h-[480px] flex items-end overflow-hidden">
        {/* Background Image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/r54.png"
          alt="AI Dan Kemampuan Berpikir Kritis Mahasiswa"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Gradient Overlay for Legibility & Match Design */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/60 pointer-events-none" />
        <div className="absolute inset-0 bg-[#050170]/30 pointer-events-none" />

        {/* Banner Content Container */}
        <div className="relative z-10 w-full max-w-[1360px] mx-auto px-6 md:px-12 lg:px-16 pb-10 md:pb-12 flex flex-col items-start gap-3">
          {/* Tag Pill */}
          <span className="bg-[#0051FF] text-white text-xs md:text-sm font-bold tracking-wider px-3.5 py-1 rounded-[6px] uppercase shadow-sm">
            FORMATIF
          </span>

          {/* Banner Title */}
          <h1 className="text-white text-2xl md:text-4xl lg:text-[44px] font-bold leading-snug lg:leading-[1.2] max-w-4xl drop-shadow-md">
            AI Dan Kemampuan Berpikir Kritis Mahasiswa
          </h1>

          {/* Banner Date */}
          <p className="text-white/90 text-sm md:text-base font-normal tracking-wide drop-shadow">
            16 Juni 2026
          </p>
        </div>
      </section>

      {/* Article Content Section */}
      <section className="w-full bg-white text-[#2B2B2B] py-10 md:py-14 px-6 md:px-8">
        <div className="w-full max-w-[880px] mx-auto flex flex-col">
          {/* Back Button with dynamic browser history */}
          <BackButton fallback="/berita" />

          {/* Upload Meta */}
          <p className="text-[#767676] text-xs md:text-sm font-normal mb-2">
            Diunggah 16 Juni 2026, 16.00 WITA
          </p>

          {/* Article Heading */}
          <h2 className="text-[#111827] text-2xl md:text-[32px] lg:text-[36px] font-bold leading-snug md:leading-tight mb-6">
            AI Dan Kemampuan Berpikir Kritis Mahasiswa
          </h2>

          {/* Article Paragraph 1 */}
          <p className="text-[#2B2B2B] text-base md:text-[17px] leading-[1.85] font-normal mb-6 text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>

          {/* Article Paragraph 2 */}
          <p className="text-[#2B2B2B] text-base md:text-[17px] leading-[1.85] font-normal mb-8 text-justify">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
          </p>

          {/* Inline Media Image */}
          <div className="w-full rounded-[16px] md:rounded-[20px] overflow-hidden mb-8 shadow-sm">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/r54.png"
              alt="AI Dan Kemampuan Berpikir Kritis Mahasiswa"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Article Paragraph 3 */}
          <p className="text-[#2B2B2B] text-base md:text-[17px] leading-[1.85] font-normal text-justify">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
          </p>
        </div>
      </section>
    </main>
  );
}
