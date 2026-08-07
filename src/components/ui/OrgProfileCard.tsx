import React from 'react';
import Image from 'next/image';

interface OrgProfileCardProps {
  name: string;
  role: string;
  imageUrl?: string;
  className?: string;
}

export default function OrgProfileCard({
  name,
  role,
  imageUrl = '/ketua.png',
  className = '',
}: OrgProfileCardProps) {
  return (
    <div className={`relative flex flex-col items-center group z-10 ${className}`}>
      {/* Outer Border with Glow */}
      <div className="w-[120px] md:w-[150px] lg:w-[180px] aspect-[4/5] border-[3px] border-[#0C35E9] bg-gradient-to-b from-[#0C35E9]/20 to-[#040659]/80 rounded-sm overflow-hidden relative shadow-[0_0_15px_rgba(12,53,233,0.5)]">
        
        {/* Profile Image */}
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 120px, (max-width: 1024px) 150px, 180px"
        />

        {/* Text Overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-[#0C35E9] py-1.5 px-2 text-center border-t border-white/20">
          <h4 className="text-[10px] md:text-xs font-black text-white leading-tight truncate">{name}</h4>
          <p className="text-[8px] md:text-[10px] text-white/90 leading-tight mt-0.5 truncate">{role}</p>
        </div>
      </div>
    </div>
  );
}
