import React from 'react';
import Image from 'next/image';

export interface MemberItem {
  id?: string | number;
  name?: string;
  role?: string;
  imageUrl?: string;
  foto?: string;
  nama?: string;
  jabatan?: string;
}

interface TentangKamiMemberCardProps {
  member: MemberItem;
  className?: string;
}

export default function TentangKamiMemberCard({
  member,
  className = '',
}: TentangKamiMemberCardProps) {
  const photoSrc = member.foto || member.imageUrl || '/ketua.png';
  const personName = member.nama || member.name || 'A. Tyas Nur Atda';
  const personRole = member.jabatan || member.role || 'Sekretaris';
  return (
    <div
      className={`group relative flex flex-col items-center w-[155px] sm:w-[185px] md:w-[200px] lg:w-[220px] xl:w-[227.55px] member-carousel-card shrink-0 select-none transition-all duration-300 hover:-translate-y-1.5 hover:z-10 ${className}`}
    >
      {/* Photo Container: 227.55px x 295px on desktop, proportional on mobile & tablet */}
      <div
        className="relative w-full h-[200px] sm:h-[240px] md:h-[260px] lg:h-[295px] rounded-[14px] sm:rounded-[16px] overflow-hidden bg-white border-2 border-white/40 shadow-md transition-all duration-300 ease-out group-hover:border-[#1486F6] group-hover:shadow-[0_0_12px_2px_#1486F6,0_0_22px_3px_rgba(20,134,246,0.75)]"
      >
        <Image
          src={photoSrc}
          alt={personName}
          fill
          className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 155px, (max-width: 768px) 185px, (max-width: 1024px) 200px, 228px"
        />
      </div>

      {/* Name: Proportional on mobile, tablet and desktop */}
      <div className="w-full max-w-[155px] sm:max-w-[180px] md:max-w-[195px] lg:max-w-[220px] h-[22px] sm:h-[24px] md:h-[26px] mt-1.5 sm:mt-2 flex items-center justify-center px-1">
        <h4 className="text-white font-bold text-[14px] sm:text-[15px] md:text-[17px] lg:text-[22px] leading-tight text-center truncate w-full">
          {personName}
        </h4>
      </div>

      {/* Role Badge: Proportional on mobile, tablet and desktop */}
      <div className="w-full max-w-[135px] sm:max-w-[155px] md:max-w-[165px] lg:max-w-[175px] h-[20px] sm:h-[22px] lg:h-[28px] mt-1 bg-[#0C35E9] flex items-center justify-center px-2 rounded-[4px]">
        <span className="text-white font-normal text-[11px] sm:text-[12px] md:text-[13px] lg:text-[18px] leading-normal text-center truncate">
          {personRole}
        </span>
      </div>
    </div>
  );
}
