import React from 'react';
import BaseSection from './BaseSection';

export default function StatsSection() {
  const stats = [
    { label: 'Pengurus Aktif', value: '63' },
    { label: 'Pengurus Aktif', value: '63' },
    { label: 'Pengurus Aktif', value: '63' },
  ];

  return (
    <BaseSection id="stats" variant="transparent" className="py-32 md:py-48 z-20">
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 w-full">
        {stats.map((stat, index) => (
          <div 
            key={index} 
            className="glass-panel w-full max-w-[300px] aspect-square flex flex-col items-center justify-center relative group hover:-translate-y-2 transition-transform duration-300"
          >
            {/* The blurry glow behind the number */}
            <div className="absolute inset-0 flex items-center justify-center opacity-50 blur-xl">
              <span className="text-[100px] md:text-[128px] font-black text-cyan-400">{stat.value}</span>
            </div>
            
            <h3 className="relative text-[100px] md:text-[128px] font-black text-cyan-400 leading-none mb-2 text-glow">
              {stat.value}
            </h3>
            <p className="relative text-2xl md:text-3xl font-bold text-white text-center">
              {stat.label.split(' ').map((word, i) => (
                <React.Fragment key={i}>
                  {word}
                  {i === 0 && <br />}
                </React.Fragment>
              ))}
            </p>
          </div>
        ))}
      </div>
    </BaseSection>
  );
}
