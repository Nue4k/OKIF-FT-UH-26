import React from 'react';
import OrgProfileCard from '@/components/ui/OrgProfileCard';

export default function DmmifView() {
  return (
    <div className="w-full flex flex-col items-center mt-12 pb-24 overflow-x-auto hide-scrollbar">
      <div className="min-w-[900px] flex flex-col items-center pt-8">
        
        {/* Level 1: Ketua */}
        <OrgProfileCard name="A. Tyas Nur Atda" role="Ketua DMMIF FT-UH" />
        
        {/* Main Vertical Line dropping from Ketua */}
        <div className="w-0.5 h-24 bg-white relative -mt-4 -z-10">
            {/* Side branch (e.g. Secretary) */}
            <div className="absolute top-1/2 left-0 w-[140px] h-0.5 bg-white"></div>
            <div className="absolute top-1/2 left-[140px] -translate-y-1/2 ml-2">
                 <OrgProfileCard name="A. Tyas Nur Atda" role="Ketua DMMIF FT-UH" />
            </div>
        </div>

        {/* Level 2 & 3: 3 Columns Grid */}
        <div className="grid grid-cols-3 gap-12 relative pt-8 w-full max-w-[1000px]">
            {/* Horizontal Line connecting the centers of the 3 columns */}
            {/* 16.66% is exactly the center of the first and last column in a 3-col grid */}
            <div className="absolute top-0 left-[16.66%] right-[16.66%] h-0.5 bg-white -z-10"></div>
            
            {/* 3 Columns */}
            {[1, 2, 3].map((col) => (
               <div key={col} className="flex flex-col items-center relative">
                  {/* Vertical drop from horizontal line to the card */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-10 bg-white -z-10"></div>
                  
                  <OrgProfileCard name="A. Tyas Nur Atda" role="Ketua DMMIF FT-UH" />
                  
                  {/* Vertical line between the two cards in the column */}
                  <div className="w-0.5 h-12 bg-white"></div>
                  
                  <OrgProfileCard name="A. Tyas Nur Atda" role="Ketua DMMIF FT-UH" />
               </div>
            ))}
        </div>

      </div>
    </div>
  );
}
