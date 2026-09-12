"use client";

import { useState, useEffect } from "react";
import { FileText, Plus, Pencil, Trash2, X, UploadCloud } from "lucide-react";
import { Berita } from "../../../../types/models";
import ImageUploadCrop from "@/components/ui/image-upload-crop";

export default function BeritaPage() {
  const [berita, setBerita] = useState<Berita[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  // Form State
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState<"DRAFT" | "PUBLISHED">("PUBLISHED");
  
  // Image State
  const [imageBlob, setImageBlob] = useState<Blob | null>(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState<string>("");
  const [existingImageUrl, setExistingImageUrl] = useState<string>("");

  useEffect(() => {
    fetchBerita();
  }, []);

  const fetchBerita = async () => {
    try {
      const res = await fetch("/api/berita");
      const json = await res.json();
      if (json.success) {
        setBerita(json.data);
      }
    } catch (error) {
      console.error("Gagal mengambil data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setTitle("");
    setAuthor("");
    setDate(new Date().toISOString().split('T')[0]); // YYYY-MM-DD
    setDescription("");
    setStatus("PUBLISHED");
    setImageBlob(null);
    setImagePreviewUrl("");
    setExistingImageUrl("");
    setIsEditing(false);
    setSelectedId(null);
  };

  const handleOpenAddModal = () => {
    resetForm();
    setIsModalOpen(true);
  };

  const handleOpenEditModal = (item: Berita) => {
    resetForm();
    setIsEditing(true);
    setSelectedId(item.id || null);
    setTitle(item.title);
    setAuthor(item.author);
    setDate(item.date);
    setDescription(item.description);
    setStatus(item.status || "PUBLISHED");
    setExistingImageUrl(item.image);
    setIsModalOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Apakah Anda yakin ingin menghapus berita ini?")) return;
    
    try {
      const res = await fetch(`/api/berita/${id}`, { method: "DELETE" });
      if (res.ok) {
        setBerita((prev) => prev.filter((b) => b.id !== id));
      }
    } catch (error) {
      alert("Gagal menghapus berita");
    }
  };

  const uploadImage = async (blob: Blob): Promise<string> => {
    const formData = new FormData();
    formData.append("file", blob, "image.jpg");
    
    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });
    
    const json = await res.json();
    if (!res.ok || !json.success) throw new Error(json.message);
    
    return json.data.url;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);

    try {
      let finalImageUrl = existingImageUrl;

      // 1. Jika ada gambar baru yang dicrop, upload dulu
      if (imageBlob) {
        finalImageUrl = await uploadImage(imageBlob);
      }

      // Pastikan ada gambar (wajib untuk Berita)
      if (!finalImageUrl) {
        alert("Gambar cover berita wajib diisi!");
        setIsSaving(false);
        return;
      }

      // 2. Siapkan payload berita
      const payload: Partial<Berita> = {
        title,
        author,
        date,
        description,
        status,
        image: finalImageUrl,
      };

      // 3. Simpan ke database (POST / PUT)
      const url = isEditing ? `/api/berita/${selectedId}` : "/api/berita";
      const method = isEditing ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Gagal menyimpan data");

      // 4. Sukses
      setIsModalOpen(false);
      fetchBerita();
    } catch (error: any) {
      alert(error.message || "Terjadi kesalahan");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="text-3xl font-bold text-slate-800">Manajemen Berita</h2>
          <p className="text-slate-500 mt-1">Kelola artikel dan publikasi web OKIF26.</p>
        </div>
        <button
          onClick={handleOpenAddModal}
          className="bg-okif-secondary hover:bg-okif-primary text-white px-5 py-2.5 rounded-xl font-medium flex items-center transition-colors shadow-sm"
        >
          <Plus className="w-5 h-5 mr-2" />
          Tambah Berita
        </button>
      </div>

      {/* Tabel */}
      <div className="bg-white/40 backdrop-blur-xl rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/60 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-600">
            <thead className="bg-white/50 text-slate-800 font-bold border-b border-white/60">
              <tr>
                <th className="px-6 py-4">Judul & Penulis</th>
                <th className="px-6 py-4">Tanggal</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {isLoading ? (
                <tr>
                  <td colSpan={4} className="px-6 py-8 text-center text-slate-400">
                    Memuat data...
                  </td>
                </tr>
              ) : berita.length === 0 ? (
                <tr>
                  <td colSpan={4} className="px-6 py-8 text-center text-slate-400">
                    Belum ada berita.
                  </td>
                </tr>
              ) : (
                berita.map((item) => (
                  <tr key={item.id} className="hover:bg-white/60 transition-colors border-b border-white/40 last:border-0">
                    <td className="px-6 py-4">
                      <div className="font-medium text-slate-800 line-clamp-1">{item.title}</div>
                      <div className="text-slate-400 text-xs mt-1">Oleh: {item.author}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">{item.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {item.status === "PUBLISHED" ? (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
                          Published
                        </span>
                      ) : (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                          Draft
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-right whitespace-nowrap">
                      <button
                        onClick={() => handleOpenEditModal(item)}
                        className="text-okif-secondary hover:text-okif-primary p-2 hover:bg-okif-secondary/10 rounded-lg transition-colors mr-1"
                      >
                        <Pencil className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(item.id!)}
                        className="text-red-600 hover:text-red-800 p-2 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-slate-900/40 backdrop-blur-md p-4">
          <div className="bg-white/80 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/60 w-full max-w-4xl max-h-[90vh] flex flex-col">
            <div className="px-6 py-5 border-b border-white/60 flex justify-between items-center bg-white/40 rounded-t-3xl">
              <h3 className="text-lg font-bold text-slate-800">
                {isEditing ? "Edit Berita" : "Tambah Berita"}
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 overflow-y-auto">
              <form id="berita-form" onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Kolom Kiri */}
                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Judul Berita *</label>
                      <input
                        required
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full px-4 py-3 bg-white/60 border border-white/60 rounded-2xl focus:ring-2 focus:ring-okif-secondary focus:border-okif-secondary outline-none transition-all shadow-sm text-slate-800 placeholder-slate-400"
                        placeholder="Masukkan judul..."
                      />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Penulis *</label>
                      <input
                        required
                        type="text"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        className="w-full px-4 py-3 bg-white/60 border border-white/60 rounded-2xl focus:ring-2 focus:ring-okif-secondary outline-none shadow-sm text-slate-800 placeholder-slate-400"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Tanggal *</label>
                      <input
                        required
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full px-4 py-3 bg-white/60 border border-white/60 rounded-2xl focus:ring-2 focus:ring-okif-secondary outline-none shadow-sm text-slate-800"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Status Publikasi</label>
                    <select
                      value={status}
                      onChange={(e) => setStatus(e.target.value as any)}
                      className="w-full px-4 py-3 bg-white/60 border border-white/60 rounded-2xl focus:ring-2 focus:ring-okif-secondary outline-none shadow-sm text-slate-800"
                    >
                      <option value="PUBLISHED">Published (Publik)</option>
                      <option value="DRAFT">Draft (Tersembunyi)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Isi Berita *</label>
                    <textarea
                      required
                      rows={6}
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      className="w-full px-4 py-3 bg-white/60 border border-white/60 rounded-2xl focus:ring-2 focus:ring-okif-secondary outline-none resize-none shadow-sm text-slate-800 placeholder-slate-400"
                      placeholder="Tulis konten berita di sini..."
                    ></textarea>
                  </div>
                </div>

                {/* Kolom Kanan: Gambar */}
                <div>
                  <ImageUploadCrop
                    aspectRatio={16 / 9}
                    label="Cover Berita (16:9) *"
                    defaultImage={existingImageUrl}
                    onCropSuccess={(blob, url) => {
                      setImageBlob(blob);
                      setImagePreviewUrl(url);
                    }}
                  />
                  <p className="text-xs text-slate-500 mt-2">
                    Gambar akan dipotong otomatis menjadi rasio 16:9 agar tampilan website seragam.
                  </p>
                </div>
              </form>
            </div>
            
            <div className="px-6 py-5 border-t border-white/60 bg-white/40 rounded-b-3xl flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="px-5 py-2.5 text-slate-700 bg-white/60 border border-white/60 rounded-2xl hover:bg-white/80 font-bold transition-colors shadow-sm"
              >
                Batal
              </button>
              <button
                form="berita-form"
                type="submit"
                disabled={isSaving}
                className="px-6 py-2 bg-okif-secondary text-white rounded-xl hover:bg-okif-primary font-medium shadow-sm transition-colors flex items-center disabled:opacity-70"
              >
                {isSaving ? (
                  <>
                    <UploadCloud className="w-4 h-4 mr-2 animate-bounce" />
                    Menyimpan...
                  </>
                ) : (
                  "Simpan Berita"
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
