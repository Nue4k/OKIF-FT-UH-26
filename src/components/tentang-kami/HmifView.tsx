import React from 'react';
import HmifOrgTree from './HmifOrgTree';
import HmifKompartemen from './HmifKompartemen';
import HmifProgramKerja from './HmifProgramKerja';

export default function HmifView() {
  return (
    <div className="w-full flex flex-col items-center mt-12 pb-24 overflow-hidden">
      
      {/* 1. Struktur Pohon Organisasi Induk HMIF */}
      <HmifOrgTree />

      {/* 2. Bagian Kompartemen (Tab & Tree) */}
      <HmifKompartemen />

      {/* 3. Bagian Kotak Informasi Program Kerja */}
      <HmifProgramKerja />
      
    </div>
  );
}
