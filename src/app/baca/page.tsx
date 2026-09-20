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

      {/* Hero Banner Section (full-screen 100dvh on initial view) */}
      <section className="relative w-full min-h-screen h-[100dvh] pt-20 sm:pt-28 md:pt-36 lg:pt-40 pb-8 sm:pb-14 md:pb-20 lg:pb-24 flex flex-col justify-end overflow-hidden isolate">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/r54.png"
            alt="AI Dan Kemampuan Berpikir Kritis Mahasiswa"
            className="w-full h-full object-cover object-center"
          />
          {/* Gradient Overlay matching Berita & Formatif (#0C35E9 0% at top to #050170 100% at bottom) */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0C35E9]/0 via-[#050170]/60 to-[#050170]" />
        </div>

        {/* Banner Content Container */}
        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-4 sm:px-8 md:px-10 flex flex-col items-start gap-2 sm:gap-3 md:gap-4">
          {/* Tag Pill */}
          <div className="bg-gradient-to-b from-[#0C35E9] to-[#1486F6] text-white font-bold text-[11px] min-[360px]:text-xs sm:text-sm md:text-base lg:text-[18px] px-3 sm:px-5 py-1 sm:py-2 rounded-[8px] sm:rounded-[10px] inline-block shadow-md tracking-wider uppercase">
            FORMATIF
          </div>

          {/* Banner Title */}
          <h1 className="text-xl min-[360px]:text-2xl sm:text-4xl md:text-[42px] lg:text-[64.43px] font-black text-white uppercase leading-tight md:leading-tight lg:leading-[58px] drop-shadow-lg max-w-5xl">
            AI Dan Kemampuan Berpikir Kritis Mahasiswa
          </h1>

          {/* Banner Date */}
          <p className="text-white text-xs min-[360px]:text-[13px] sm:text-sm md:text-base lg:text-[18px] font-normal drop-shadow">
            16 Juni 2026
          </p>
        </div>
      </section>

      {/* Article Content Section */}
      <section className="w-full bg-white text-[#2B2B2B] pt-4 sm:pt-10 md:pt-12 lg:pt-14 pb-10 sm:pb-16 md:pb-20 px-4 sm:px-8 md:px-10">
        <div className="w-full max-w-[1280px] mx-auto flex flex-col">
          {/* Back Button with dynamic browser history */}
          <BackButton fallback="/berita" />

          {/* Upload Meta */}
          <p className="text-[#666666] text-[11px] min-[360px]:text-xs sm:text-sm md:text-sm lg:text-base font-medium mb-1.5 sm:mb-3">
            Diunggah 16 Juni 2026, 16.00 WITA
          </p>

          {/* Article Heading */}
          <h2 className="text-[#111827] text-lg min-[360px]:text-xl sm:text-2xl md:text-[28px] lg:text-[36px] font-bold leading-snug md:leading-tight mb-3 sm:mb-6">
            AI Dan Kemampuan Berpikir Kritis Mahasiswa
          </h2>

          {/* Article Paragraph 1 */}
          <p className="text-black font-normal text-[13.5px] min-[360px]:text-[14.5px] sm:text-base md:text-[16.5px] lg:text-[20px] leading-[22px] min-[360px]:leading-[25px] sm:leading-relaxed md:leading-[30px] lg:leading-[38px] tracking-normal mb-3.5 sm:mb-6 text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>

          {/* Article Paragraph 2 */}
          <p className="text-black font-normal text-[13.5px] min-[360px]:text-[14.5px] sm:text-base md:text-[16.5px] lg:text-[20px] leading-[22px] min-[360px]:leading-[25px] sm:leading-relaxed md:leading-[30px] lg:leading-[38px] tracking-normal mb-4 sm:mb-8 text-left">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
          </p>

          {/* Inline Media Image */}
          <div className="w-full rounded-[10px] sm:rounded-[16px] md:rounded-[20px] overflow-hidden mb-4 sm:mb-8 shadow-sm">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/r54.png"
              alt="AI Dan Kemampuan Berpikir Kritis Mahasiswa"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Article Paragraph 3 */}
          <p className="text-black font-normal text-[13.5px] min-[360px]:text-[14.5px] sm:text-base md:text-[16.5px] lg:text-[20px] leading-[22px] min-[360px]:leading-[25px] sm:leading-relaxed md:leading-[30px] lg:leading-[38px] tracking-normal text-left">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
          </p>
        </div>
      </section>
    </main>
  );
}
