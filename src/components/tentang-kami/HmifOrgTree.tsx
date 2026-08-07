import React from 'react';
import OrgProfileCard from '@/components/ui/OrgProfileCard';

export default function HmifOrgTree() {
  return (
    <div className="w-full flex flex-col items-center pb-12 overflow-x-auto hide-scrollbar">
      <div className="min-w-[1200px] flex flex-col items-center pt-8">
        {/* Top Level: Ketua Umum */}
        <OrgProfileCard name="A. Tyas Nur Atda" role="Ketua Umum HMIF FT-UH" />

        {/* Tree Container with Central Spine */}
        <div className="relative flex flex-col items-center w-full mt-8">
            
            {/* The Central Spine */}
            {/* Height is calculated roughly to reach the last horizontal line */}
            <div className="absolute top-[-36px] h-[calc(100%-80px)] left-1/2 -translate-x-1/2 w-0.5 bg-white -z-10"></div>

            {/* Row 2: 2 Nodes (e.g. Sekum & Bendum) */}
            <div className="w-full max-w-[600px] grid grid-cols-2 relative mt-8">
                {/* Horizontal line */}
                <div className="absolute top-0 left-[25%] right-[25%] h-0.5 bg-white -z-10"></div>
                
                <div className="flex justify-center pt-8 relative">
                   <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-10 bg-white -z-10"></div>
                   <OrgProfileCard name="A. Tyas Nur Atda" role="Ketua HMIF FT-UH" />
                </div>
                <div className="flex justify-center pt-8 relative">
                   <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-10 bg-white -z-10"></div>
                   <OrgProfileCard name="A. Tyas Nur Atda" role="Ketua HMIF FT-UH" />
                </div>
            </div>

            {/* Row 3: 2 Nodes (e.g. Wakil) */}
            <div className="w-full max-w-[800px] grid grid-cols-2 relative mt-16">
                {/* Horizontal line */}
                <div className="absolute top-0 left-[25%] right-[25%] h-0.5 bg-white -z-10"></div>
                
                <div className="flex justify-center pt-8 relative">
                   <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-10 bg-white -z-10"></div>
                   <OrgProfileCard name="A. Tyas Nur Atda" role="Ketua HMIF FT-UH" />
                </div>
                <div className="flex justify-center pt-8 relative">
                   <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-10 bg-white -z-10"></div>
                   <OrgProfileCard name="A. Tyas Nur Atda" role="Ketua HMIF FT-UH" />
                </div>
            </div>

            {/* Row 4: 6 Nodes (Departemen) */}
            <div className="w-full grid grid-cols-6 relative mt-16">
                {/* Horizontal line (center of col 1 to center of col 6: 1/12 = 8.333%) */}
                <div className="absolute top-0 left-[8.333%] right-[8.333%] h-0.5 bg-white -z-10"></div>
                
                {[1,2,3,4,5,6].map(i => (
                   <div key={i} className="flex justify-center pt-8 relative">
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-10 bg-white -z-10"></div>
                      <OrgProfileCard name="A. Tyas Nur Atda" role="Ketua HMIF FT-UH" />
                   </div>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
}
