"use client";

import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase/config";
import { LogOut, LayoutDashboard, Settings, FileText, Award } from "lucide-react";
import { useState } from "react";

export default function AdminDashboard() {
  const router = useRouter();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = async () => {
    setIsLoggingOut(true);
    try {
      // 1. Hapus cookie session dari backend
      await fetch("/api/auth/logout", { method: "POST" });
      
      // 2. Logout dari Firebase Client
      await signOut(auth);
      
      // 3. Arahkan kembali ke login
      router.push("/admin/login");
      router.refresh();
    } catch (error) {
      console.error("Logout failed", error);
      setIsLoggingOut(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar Sederhana */}
      <div className="w-64 bg-white border-r border-slate-200 flex flex-col">
        <div className="h-16 flex items-center px-6 border-b border-slate-200">
          <h1 className="text-xl font-bold text-slate-800">OKIF26 Admin</h1>
        </div>
        <div className="flex-1 py-6 px-4 space-y-2">
          <a href="#" className="flex items-center px-4 py-3 bg-blue-50 text-blue-700 rounded-xl font-medium">
            <LayoutDashboard className="w-5 h-5 mr-3" />
            Dashboard
          </a>
          <a href="#" className="flex items-center px-4 py-3 text-slate-600 hover:bg-slate-100 rounded-xl font-medium transition-colors">
            <FileText className="w-5 h-5 mr-3" />
            Berita & Formatif
          </a>
          <a href="#" className="flex items-center px-4 py-3 text-slate-600 hover:bg-slate-100 rounded-xl font-medium transition-colors">
            <Award className="w-5 h-5 mr-3" />
            Prestasi
          </a>
          <a href="#" className="flex items-center px-4 py-3 text-slate-600 hover:bg-slate-100 rounded-xl font-medium transition-colors">
            <Settings className="w-5 h-5 mr-3" />
            Pengaturan
          </a>
        </div>
        <div className="p-4 border-t border-slate-200">
          <button
            onClick={handleLogout}
            disabled={isLoggingOut}
            className="flex items-center justify-center w-full px-4 py-2 text-red-600 bg-red-50 hover:bg-red-100 rounded-lg font-medium transition-colors disabled:opacity-50"
          >
            <LogOut className="w-5 h-5 mr-2" />
            {isLoggingOut ? "Keluar..." : "Keluar"}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 mb-2">Selamat Datang!</h2>
          <p className="text-slate-500 mb-8">Ini adalah halaman dashboard admin Anda.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800">Total Berita</h3>
              <p className="text-3xl font-bold text-slate-900 mt-2">--</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center mb-4">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800">Total Formatif</h3>
              <p className="text-3xl font-bold text-slate-900 mt-2">--</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-4">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800">Total Prestasi</h3>
              <p className="text-3xl font-bold text-slate-900 mt-2">--</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
