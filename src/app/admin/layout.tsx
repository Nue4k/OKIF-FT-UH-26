"use client";

import { usePathname, useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase/config";
import { LogOut, LayoutDashboard, Settings, FileText, Award, FileStack } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

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
    <div className="min-h-screen flex relative bg-slate-50 overflow-hidden">
      {/* Background Decorators */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-okif-secondary/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute top-[20%] right-[-10%] w-96 h-96 bg-okif-neon/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-[-20%] left-[20%] w-96 h-96 bg-indigo-300/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>

      {/* Sidebar */}
      <div className="w-64 bg-white/40 backdrop-blur-xl border-r border-white/60 flex flex-col fixed h-full z-20 shadow-[4px_0_24px_-12px_rgba(0,0,0,0.1)]">
        <div className="py-8 flex flex-col items-center justify-center border-b border-white/40">
          <img src="/hmif.png" alt="Logo OKIF" className="w-16 h-16 object-contain drop-shadow-sm" />
          <h1 className="text-sm mt-3 font-bold tracking-widest uppercase text-okif-secondary bg-white/60 px-3 py-1 rounded-full shadow-sm">Admin Dashboard</h1>
        </div>
        
        <div className="flex-1 py-8 px-5 space-y-3 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
            const Icon = item.icon;
            
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center px-4 py-3.5 rounded-2xl font-medium transition-all duration-300 ${
                  isActive 
                    ? "bg-white/80 shadow-sm text-okif-secondary border border-white/60" 
                    : "text-slate-600 hover:bg-white/40 hover:shadow-sm border border-transparent"
                }`}
              >
                <Icon className="w-5 h-5 mr-3" />
                {item.name}
              </Link>
            );
          })}
        </div>

        <div className="p-6 border-t border-white/40">
          <button
            onClick={handleLogout}
            disabled={isLoggingOut}
            className="flex items-center justify-center w-full px-4 py-3 text-red-600 bg-red-500/10 hover:bg-red-500/20 rounded-2xl font-medium transition-all duration-300 disabled:opacity-50 border border-red-500/10"
          >
            <LogOut className="w-5 h-5 mr-2" />
            {isLoggingOut ? "Keluar..." : "Keluar"}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-64 p-10 relative z-10 min-h-screen">
        {children}
      </div>
    </div>
  );
}
