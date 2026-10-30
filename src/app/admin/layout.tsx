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
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Load sidebar collapse preference from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("admin_sidebar_collapsed");
    if (saved !== null) {
      setIsCollapsed(saved === "true");
    }
  }, []);

  const toggleCollapse = () => {
    setIsCollapsed((prev) => {
      const next = !prev;
      localStorage.setItem("admin_sidebar_collapsed", String(next));
      return next;
    });
  };

  // Close mobile drawer on route change
  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

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
    <div className="min-h-screen flex flex-col lg:flex-row relative bg-slate-50 overflow-x-hidden">
      {/* Background Decorators */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-okif-secondary/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob pointer-events-none"></div>
      <div className="absolute top-[20%] right-[-10%] w-96 h-96 bg-okif-neon/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000 pointer-events-none"></div>
      <div className="absolute bottom-[-20%] left-[20%] w-96 h-96 bg-indigo-300/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000 pointer-events-none"></div>

      {/* Mobile Top Navigation Bar */}
      <header className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-white/80 backdrop-blur-xl border-b border-white/60 z-30 px-4 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setIsMobileOpen(true)}
            className="p-2 -ml-1 text-slate-700 hover:text-okif-primary hover:bg-slate-100 rounded-xl transition"
            aria-label="Buka Menu"
          >
            <Menu className="w-6 h-6" />
          </button>
          <div className="flex items-center gap-2">
            <img src="/hmif1.png" alt="Logo OKIF" className="w-8 h-8 object-contain" />
            <span className="font-extrabold text-sm tracking-wide text-okif-secondary uppercase">
              OKIF Admin
            </span>
          </div>
        </div>

        <button
          onClick={handleLogout}
          disabled={isLoggingOut}
          className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-red-50 text-red-600 border border-red-200"
        >
          {isLoggingOut ? "..." : "Keluar"}
        </button>
      </header>

      {/* Mobile Backdrop Overlay */}
      {isMobileOpen && (
        <div
          onClick={() => setIsMobileOpen(false)}
          className="lg:hidden fixed inset-0 bg-slate-900/40 backdrop-blur-xs z-40 transition-opacity"
        />
      )}

      {/* Sidebar (Desktop Collapsible & Mobile Drawer) */}
      <aside
        className={`fixed top-0 bottom-0 left-0 h-full z-50 bg-white/85 lg:bg-white/40 backdrop-blur-xl border-r border-white/60 flex flex-col shadow-[4px_0_24px_-12px_rgba(0,0,0,0.1)] transition-all duration-300 ${
          isMobileOpen ? "translate-x-0 w-72" : "-translate-x-full lg:translate-x-0"
        } ${isCollapsed ? "lg:w-20" : "lg:w-64"}`}
      >
        {/* Sidebar Header */}
        <div className="relative py-6 px-4 flex flex-col items-center justify-center border-b border-white/40 shrink-0">
          {/* Close button on Mobile */}
          <button
            type="button"
            onClick={() => setIsMobileOpen(false)}
            className="lg:hidden absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-xl"
            aria-label="Tutup Menu"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Desktop Collapse Toggle Button */}
          <button
            type="button"
            onClick={toggleCollapse}
            title={isCollapsed ? "Perluas Sidebar" : "Perkecil Sidebar"}
            className="hidden lg:flex absolute -right-3 top-7 w-6 h-6 rounded-full bg-white border border-slate-200 shadow-md items-center justify-center text-slate-600 hover:text-okif-primary hover:bg-slate-50 transition cursor-pointer z-10"
          >
            {isCollapsed ? <ChevronRight className="w-3.5 h-3.5" /> : <ChevronLeft className="w-3.5 h-3.5" />}
          </button>

          <img
            src="/hmif1.png"
            alt="Logo OKIF"
            className={`object-contain drop-shadow-sm transition-all duration-300 ${
              isCollapsed ? "w-10 h-10" : "w-14 h-14"
            }`}
          />
          {!isCollapsed && (
            <h1 className="text-xs mt-2.5 font-bold tracking-widest uppercase text-okif-secondary bg-white/70 px-3 py-1 rounded-full shadow-sm text-center">
              Admin Dashboard
            </h1>
          )}
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 py-6 px-3.5 space-y-2 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
            const Icon = item.icon;

            return (
              <div key={item.href} className="relative group">
                <Link
                  href={item.href}
                  className={`flex items-center py-3 rounded-2xl font-medium transition-all duration-300 ${
                    isCollapsed ? "justify-center px-0" : "px-4"
                  } ${
                    isActive
                      ? "bg-white/90 shadow-sm text-okif-secondary border border-white/80 font-bold"
                      : "text-slate-600 hover:bg-white/50 hover:shadow-xs border border-transparent"
                  }`}
                >
                  <Icon className={`w-5 h-5 shrink-0 ${isCollapsed ? "" : "mr-3"}`} />
                  {!isCollapsed && <span className="truncate">{item.name}</span>}
                </Link>

                {/* Floating Tooltip when Collapsed */}
                {isCollapsed && (
                  <div className="hidden lg:group-hover:flex absolute left-full top-1/2 -translate-y-1/2 ml-3 px-3 py-1.5 bg-slate-900 text-white text-xs font-semibold rounded-lg shadow-lg whitespace-nowrap z-50 pointer-events-none">
                    {item.name}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Logout Button */}
        <div className={`p-4 border-t border-white/40 shrink-0 ${isCollapsed ? "flex justify-center" : ""}`}>
          <div className="relative group w-full">
            <button
              onClick={handleLogout}
              disabled={isLoggingOut}
              className={`flex items-center justify-center py-3 text-red-600 bg-red-500/10 hover:bg-red-500/20 rounded-2xl font-medium transition-all duration-300 disabled:opacity-50 border border-red-500/15 cursor-pointer w-full ${
                isCollapsed ? "px-0" : "px-4"
              }`}
            >
              <LogOut className={`w-5 h-5 shrink-0 ${isCollapsed ? "" : "mr-2"}`} />
              {!isCollapsed && <span>{isLoggingOut ? "Keluar..." : "Keluar"}</span>}
            </button>

            {/* Logout Tooltip when Collapsed */}
            {isCollapsed && (
              <div className="hidden lg:group-hover:flex absolute left-full top-1/2 -translate-y-1/2 ml-3 px-3 py-1.5 bg-red-600 text-white text-xs font-semibold rounded-lg shadow-lg whitespace-nowrap z-50 pointer-events-none">
                Keluar
              </div>
            )}
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main
        className={`flex-1 min-h-screen relative z-10 transition-all duration-300 pt-20 px-4 pb-12 sm:px-6 md:px-8 lg:pt-10 ${
          isCollapsed ? "lg:ml-20" : "lg:ml-64"
        }`}
      >
        {children}
      </main>
    </div>
  );
}
