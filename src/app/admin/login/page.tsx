"use client";

import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase/config";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      // 1. Authenticate with Firebase Client SDK
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      
      // 2. Get the ID Token
      const idToken = await userCredential.user.getIdToken();

      // 3. Send token to our server to create a secure session cookie
      const res = await fetch("/api/auth/session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ idToken }),
      });

      if (!res.ok) {
        throw new Error("Gagal membuat sesi aman di server.");
      }

      // 4. Redirect to Dashboard with a hard reload to ensure middleware catches the new cookie
      window.location.href = "/admin/dashboard";
    } catch (err: any) {
      console.error(err);
      setError("Login gagal. Periksa kembali email dan password Anda.");
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="w-full max-w-sm bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-slate-900 mb-1">Admin Login</h1>
          <p className="text-slate-500 text-sm">Masuk untuk mengelola konten OKIF26</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          {error && (
            <div className="bg-red-50 text-red-600 border border-red-200 p-3 rounded-lg text-sm text-center">
              {error}
            </div>
          )}

          <div className="space-y-1">
            <label className="text-sm font-medium text-slate-700">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-white border border-slate-300 text-slate-900 rounded-lg px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              placeholder="admin@okif26.com"
            />
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium text-slate-700">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-white border border-slate-300 text-slate-900 rounded-lg px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-[#050170] text-white rounded-lg py-2.5 font-medium hover:bg-[#0C35E9] transition-colors disabled:opacity-70 flex justify-center mt-2"
          >
            {isLoading ? "Memproses..." : "Masuk"}
          </button>
        </form>
      </div>
    </div>
  );
}
