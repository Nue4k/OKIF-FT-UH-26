import React from 'react';
import OrgProfileCard from '@/components/ui/OrgProfileCard';
import HorizontalScrollContainer from '@/components/ui/HorizontalScrollContainer';

export default function HmifKompartemen() {
  const kompartemenTabs = [
    'KOMPARTEMEN PSDM',
    'KOMPARTEMEN PENDIDIKAN',
    'KOMPARTEMEN KAJIAN SASTRA',
    'KOMPARTEMEN KESEKRETARIATAN',
    'KOMPARTEMEN HUBUNGAN LUAR',
  ];

  return (
    <div className="w-full flex flex-col items-center mt-32">
        <h2 className="text-4xl md:text-5xl font-black text-[#080A8F] mb-8 bg-white px-8 py-2 rounded-2xl shadow-lg">KOMPARTEMEN</h2>
        
        {/* Tabs */}
        <div className="w-full max-w-6xl mx-auto mb-16 px-4">
            <HorizontalScrollContainer className="justify-start gap-4 w-full pb-4">
              {kompartemenTabs.map((tab, idx) => (
                <button 
                  key={idx}
                  className={`px-6 py-2 rounded-full font-bold text-sm whitespace-nowrap border-2 border-[#0C35E9] shadow-md transition-colors flex-shrink-0 ${
                    idx === 0 
                      ? 'bg-[#080A8F] text-white' 
                      : 'bg-white text-[#080A8F] hover:bg-[#0C35E9] hover:text-white'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </HorizontalScrollContainer>
        </div>

        {/* Kompartemen Tree */}
        <div className="flex flex-col items-center relative w-full">
            <OrgProfileCard name="A. Tyas Nur Atda" role="Ketua KOMPARTEMEN" />
            
            <div className="w-0.5 h-12 bg-white relative"></div>

            {/* 7 Nodes Row */}
            <div className="w-full grid grid-cols-7 relative">
                {/* Horizontal line center col 1 to col 7 (1/14 = 7.14%) */}
                <div className="absolute top-0 left-[7.14%] right-[7.14%] h-0.5 bg-white"></div>

                {[1,2,3,4,5,6,7].map(i => (
                   <div key={i} className="flex justify-center pt-8 relative">
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-8 bg-white"></div>
                      <OrgProfileCard name="A. Tyas Nur Atda" role="Anggota KOMPARTEMEN" className="scale-90" />
                   </div>
                ))}
            </div>
        </div>
    </div>
  );
}
