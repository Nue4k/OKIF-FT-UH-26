import React from 'react';

export default function HmifProgramKerja() {
  return (
    <div className="w-full max-w-[1200px] flex flex-col gap-6 mt-20 px-4 mx-auto">
        {/* Top Box: Program Kerja */}
        <div className="w-full bg-gradient-to-b from-[#0C35E9]/40 via-[#1486F6]/40 to-[#050170]/40 rounded-[32px] border-2 border-white/80 p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center gap-6 shadow-[0_15px_25px_rgba(0,0,0,0.3)]">
          <div className="md:w-1/4">
            <h3 className="text-3xl font-bold text-white">Program Kerja</h3>
          </div>
          <div className="md:w-3/4">
            <p className="text-xl md:text-2xl text-white">
              <span className="font-bold">Kegiatan Skala Nasional</span> sebagai wadah untuk mengembangkan pengetahuan dan keterampilan peserta.
            </p>
          </div>
        </div>

        {/* Bottom Box: Deskripsi Kerja */}
        <div className="w-full bg-gradient-to-b from-[#0C35E9]/40 via-[#1486F6]/40 to-[#050170]/40 rounded-[32px] border-2 border-[#1486F6] p-8 md:p-10 flex flex-col md:flex-row gap-6 shadow-[0_15px_25px_rgba(0,0,0,0.3)]">
          <div className="md:w-1/4">
            <h3 className="text-3xl font-bold text-white">Deskripsi Kerja</h3>
          </div>
          <div className="md:w-3/4">
            <ul className="text-xl md:text-2xl text-white/90 list-disc list-inside space-y-3 leading-relaxed">
              <li>Melakukan pengawasan dan pendampingan akademik untuk mahasiswa teknik Informatika</li>
              <li>Pendataan Mahasiswa berprestasi</li>
              <li>Pengenalan dunia kerja dan keprofesian</li>
              <li>Pelatihan keilmuan dan mentoring mata kuliah mahasiswa</li>
              <li>Memberikan informasi terkait beasiswa, lomba, dan konten edukatif</li>
            </ul>
          </div>
        </div>
    </div>
  );
}
