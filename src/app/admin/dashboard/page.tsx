"use client";

import { FileText, FileStack, Award } from "lucide-react";

export default function AdminDashboard() {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl font-black text-slate-800 mb-2 tracking-tight">Selamat Datang!</h2>
      <p className="text-slate-600 mb-10 text-lg">Ini adalah halaman dashboard admin Anda.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white/40 backdrop-blur-xl p-8 rounded-3xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 group">
          <div className="w-14 h-14 bg-white/60 shadow-sm text-okif-secondary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <FileText className="w-7 h-7" />
          </div>
          <h3 className="text-lg font-bold text-slate-700">Total Berita</h3>
          <p className="text-4xl font-black text-slate-900 mt-2">--</p>
        </div>
        
        <div className="bg-white/40 backdrop-blur-xl p-8 rounded-3xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 group">
          <div className="w-14 h-14 bg-white/60 shadow-sm text-okif-secondary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <FileStack className="w-7 h-7" />
          </div>
          <h3 className="text-lg font-bold text-slate-700">Total Formatif</h3>
          <p className="text-4xl font-black text-slate-900 mt-2">--</p>
        </div>

        <div className="bg-white/40 backdrop-blur-xl p-8 rounded-3xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 group">
          <div className="w-14 h-14 bg-emerald-500/10 shadow-sm text-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <Award className="w-7 h-7" />
          </div>
          <h3 className="text-lg font-bold text-slate-700">Total Prestasi</h3>
          <p className="text-4xl font-black text-slate-900 mt-2">--</p>
        </div>
      </div>
    </div>
  );
}
