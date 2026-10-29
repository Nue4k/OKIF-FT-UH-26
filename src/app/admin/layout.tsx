"use client";

import { usePathname, useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase/config";
import {
  LogOut,
  LayoutDashboard,
  FileText,
  Award,
  FileStack,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Periksa preferensi collapse dari localStorage atau ukuran layar
  useEffect(() => {
    const saved = localStorage.getItem("admin_sidebar_collapsed");
    if (saved !== null) {
      setIsCollapsed(saved === "true");
    } else if (typeof window !== "undefined" && window.innerWidth < 1024) {
      // Default perkecil sidebar jika pada layar setengah / tablet
      setIsCollapsed(true);
    }
  }, []);

  // Tutup drawer mobile saat navigasi route berpindah
  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  const toggleSidebar = () => {
    setIsCollapsed((prev) => {
      const next = !prev;
      localStorage.setItem("admin_sidebar_collapsed", String(next));
      return next;
    });
  };

  // Jangan tampilkan sidebar di halaman login
  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  const handleLogout = async () => {
    setIsLoggingOut(true);
    try {
      await fetch("/api/auth/logout", { method: "POST" });
      await signOut(auth);
      router.push("/admin/login");
      router.refresh();
    } catch (error) {
      console.error("Logout failed", error);
      setIsLoggingOut(false);
    }
  };

  const navItems = [
    { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
    { name: "Berita", href: "/admin/berita", icon: FileText },
    { name: "Formatif", href: "/admin/formatif", icon: FileStack },
    { name: "Prestasi", href: "/admin/prestasi", icon: Award },
  ];

  return (
    <div className="min-h-screen flex relative bg-slate-50 overflow-x-hidden">
      {/* Background Decorators (-z-10 agar tidak menimpa elemen dan tidak menciptakan stacking trap) */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-okif-secondary/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob pointer-events-none -z-10"></div>
      <div className="absolute top-[20%] right-[-10%] w-96 h-96 bg-okif-neon/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000 pointer-events-none -z-10"></div>
      <div className="absolute bottom-[-20%] left-[20%] w-96 h-96 bg-indigo-300/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000 pointer-events-none -z-10"></div>

      {/* Backdrop untuk Mobile Drawer */}
      {isMobileOpen && (
        <div
          onClick={() => setIsMobileOpen(false)}
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs z-30 md:hidden transition-opacity"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`bg-white/60 md:bg-white/40 backdrop-blur-xl border-r border-white/60 flex flex-col fixed top-0 left-0 h-full z-30 shadow-[4px_0_24px_-12px_rgba(0,0,0,0.1)] transition-all duration-300 ease-in-out ${
          isCollapsed ? "w-20" : "w-64"
        } ${
          isMobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        {/* Header Sidebar & Toggle Minimize Button */}
        <div className={`relative py-6 flex flex-col items-center justify-center border-b border-white/40 transition-all duration-300 ${isCollapsed ? "px-2" : "px-4"}`}>
          {/* Tombol Minimize / Expand (Desktop & Tablet) */}
          <button
            type="button"
            onClick={toggleSidebar}
            className="hidden md:flex absolute -right-3.5 top-6 w-7 h-7 bg-white/95 hover:bg-white text-slate-600 hover:text-okif-secondary rounded-full shadow-md border border-slate-200/90 items-center justify-center transition-all duration-200 hover:scale-110 z-40 cursor-pointer"
            title={isCollapsed ? "Perbesar Sidebar" : "Perkecil Sidebar"}
            aria-label={isCollapsed ? "Perbesar Sidebar" : "Perkecil Sidebar"}
          >
            {isCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
          </button>

          {/* Tombol Tutup untuk Mobile */}
          <button
            type="button"
            onClick={() => setIsMobileOpen(false)}
            className="md:hidden absolute right-3 top-4 text-slate-500 hover:text-slate-800 p-1.5"
            aria-label="Tutup Menu"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Logo & Judul */}
          <div className="flex flex-col items-center justify-center">
            <img
              src="/hmif1.png"
              alt="Logo OKIF"
              className={`object-contain drop-shadow-sm transition-all duration-300 ${isCollapsed ? "w-10 h-10" : "w-14 h-14"}`}
            />
            {!isCollapsed && (
              <h1 className="text-[11px] mt-2.5 font-bold tracking-widest uppercase text-okif-secondary bg-white/70 px-3 py-1 rounded-full shadow-sm text-center truncate max-w-[200px]">
                Admin Dashboard
              </h1>
            )}
          </div>
        </div>

        {/* Navigation Items */}
        <div className={`flex-1 py-6 space-y-2 overflow-y-auto overflow-x-hidden ${isCollapsed ? "px-2.5" : "px-4"}`}>
          {navItems.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                title={isCollapsed ? item.name : undefined}
                className={`flex items-center rounded-2xl font-medium transition-all duration-200 group relative ${
                  isCollapsed ? "justify-center p-3.5" : "px-4 py-3.5"
                } ${
                  isActive
                    ? "bg-white/90 shadow-sm text-okif-secondary border border-white/80 font-bold"
                    : "text-slate-600 hover:bg-white/50 hover:shadow-sm border border-transparent hover:text-slate-900"
                }`}
              >
                <Icon className={`w-5 h-5 shrink-0 transition-transform group-hover:scale-110 ${!isCollapsed ? "mr-3" : ""}`} />
                {!isCollapsed && <span className="truncate">{item.name}</span>}

                {/* Floating Tooltip saat Sidebar Dikecilkan */}
                {isCollapsed && (
                  <span className="absolute left-full ml-3 px-3 py-1.5 bg-slate-900/90 backdrop-blur-md text-white text-xs font-semibold rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity shadow-lg whitespace-nowrap z-50">
                    {item.name}
                  </span>
                )}
              </Link>
            );
          })}
        </div>

        {/* Footer Logout */}
        <div className={`border-t border-white/40 transition-all duration-300 ${isCollapsed ? "p-3" : "p-4 sm:p-5"}`}>
          <button
            onClick={handleLogout}
            disabled={isLoggingOut}
            title={isCollapsed ? "Keluar" : undefined}
            className={`flex items-center justify-center w-full text-red-600 bg-red-500/10 hover:bg-red-500/20 rounded-2xl font-medium transition-all duration-300 disabled:opacity-50 border border-red-500/10 group relative ${
              isCollapsed ? "p-3" : "px-4 py-3"
            }`}
          >
            <LogOut className={`w-5 h-5 shrink-0 group-hover:scale-110 transition-transform ${!isCollapsed ? "mr-2" : ""}`} />
            {!isCollapsed && <span>{isLoggingOut ? "Keluar..." : "Keluar"}</span>}

            {/* Tooltip Keluar saat Sidebar Dikecilkan */}
            {isCollapsed && (
              <span className="absolute left-full ml-3 px-3 py-1.5 bg-red-900/90 backdrop-blur-md text-white text-xs font-semibold rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity shadow-lg whitespace-nowrap z-50">
                {isLoggingOut ? "Keluar..." : "Keluar"}
              </span>
            )}
          </button>
        </div>
      </aside>

      {/* Main Content Area (Tanpa z-index angka agar tidak mengurung modal) */}
      <div
        className={`flex-1 min-h-screen relative transition-all duration-300 ease-in-out ${
          isCollapsed ? "md:ml-20" : "md:ml-64"
        } ml-0 p-3 sm:p-5 md:p-6 lg:p-8 xl:p-10 w-full`}
      >
        {/* Mobile / Narrow Screen Top Bar */}
        <div className="md:hidden flex items-center justify-between pb-3 mb-4 border-b border-slate-200/60">
          <button
            type="button"
            onClick={() => setIsMobileOpen(true)}
            className="flex items-center gap-2 px-3 py-1.5 bg-white/80 backdrop-blur-md border border-white/80 rounded-xl shadow-xs text-slate-700 hover:text-okif-secondary text-xs font-bold uppercase tracking-wider"
          >
            <Menu className="w-4 h-4" />
            <span>Menu Admin</span>
          </button>
          <img src="/hmif1.png" alt="Logo OKIF" className="w-7 h-7 object-contain" />
        </div>

        {children}
      </div>
    </div>
  );
}
