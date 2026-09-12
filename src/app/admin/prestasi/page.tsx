"use client";

import { useState, useEffect } from "react";
import { Award, Plus, Pencil, Trash2, X, UploadCloud } from "lucide-react";
import { Prestasi } from "../../../../types/models";
import ImageUploadCrop from "@/components/ui/image-upload-crop";

export default function PrestasiPage() {
  const [prestasiList, setPrestasiList] = useState<Prestasi[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  const [nama, setNama] = useState("");
  const [prestasi, setPrestasi] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [status, setStatus] = useState<"DRAFT" | "PUBLISHED">("PUBLISHED");
  
  const [imageBlob, setImageBlob] = useState<Blob | null>(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState<string>("");
  const [existingImageUrl, setExistingImageUrl] = useState<string>("");

  useEffect(() => {
    fetchPrestasi();
  }, []);

  const fetchPrestasi = async () => {
    try {
      const res = await fetch("/api/prestasi");
      const json = await res.json();
      if (json.success) {
        setPrestasiList(json.data);
      }
    } catch (error) {
      console.error("Gagal mengambil data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setNama("");
    setPrestasi("");
    setDeskripsi("");
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

  const handleOpenEditModal = (item: Prestasi) => {
    resetForm();
    setIsEditing(true);
    setSelectedId(item.id || null);
    setNama(item.nama);
    setPrestasi(item.prestasi);
    setDeskripsi(item.deskripsi || "");
    setStatus(item.status || "PUBLISHED");
    setExistingImageUrl(item.image || "");
    setIsModalOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Apakah Anda yakin ingin menghapus prestasi ini?")) return;
    
    try {
      const res = await fetch(`/api/prestasi/${id}`, { method: "DELETE" });
      if (res.ok) {
        setPrestasiList((prev) => prev.filter((b) => b.id !== id));
      }
    } catch (error) {
      alert("Gagal menghapus prestasi");
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

      if (imageBlob) {
        finalImageUrl = await uploadImage(imageBlob);
      }

      // Untuk prestasi, gambar mungkin opsional sesuai keinginan, tapi mari kita jadikan opsional saja
      const payload: Partial<Prestasi> = {
        nama,
        prestasi,
        deskripsi,
        status,
      };

      if (finalImageUrl) {
        payload.image = finalImageUrl;
      }

      const url = isEditing ? `/api/prestasi/${selectedId}` : "/api/prestasi";
      const method = isEditing ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Gagal menyimpan data");

      setIsModalOpen(false);
      fetchPrestasi();
    } catch (error: any) {
      alert(error.message || "Terjadi kesalahan");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold text-slate-800">Manajemen Prestasi</h2>
          <p className="text-slate-500 mt-1">Kelola data prestasi mahasiswa OKIF26.</p>
        </div>
        <button
          onClick={handleOpenAddModal}
          className="bg-okif-secondary hover:bg-okif-primary text-white px-5 py-2.5 rounded-xl font-medium flex items-center transition-colors shadow-sm"
        >
          <Plus className="w-5 h-5 mr-2" />
          Tambah Prestasi
        </button>
      </div>

      <div className="bg-white/40 backdrop-blur-xl rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/60 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-600">
            <thead className="bg-white/50 text-slate-800 font-bold border-b border-white/60">
              <tr>
                <th className="px-6 py-4">Nama Mahasiswa</th>
                <th className="px-6 py-4">Pencapaian</th>
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
              ) : prestasiList.length === 0 ? (
                <tr>
                  <td colSpan={4} className="px-6 py-8 text-center text-slate-400">
                    Belum ada data prestasi.
                  </td>
                </tr>
              ) : (
                prestasiList.map((item) => (
                  <tr key={item.id} className="hover:bg-white/60 transition-colors border-b border-white/40 last:border-0">
                    <td className="px-6 py-4">
                      <div className="font-medium text-slate-800">{item.nama}</div>
                    </td>
                    <td className="px-6 py-4">{item.prestasi}</td>
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

      {isModalOpen && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-slate-900/40 backdrop-blur-md p-4">
          <div className="bg-white/80 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/60 w-full max-w-4xl max-h-[90vh] flex flex-col">
            <div className="px-6 py-5 border-b border-white/60 flex justify-between items-center bg-white/40 rounded-t-3xl">
              <h3 className="text-lg font-bold text-slate-800">
                {isEditing ? "Edit Prestasi" : "Tambah Prestasi"}
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto">
              <form id="prestasi-form" onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Nama Lengkap *</label>
                      <input
                        required
                        type="text"
                        value={nama}
                        onChange={(e) => setNama(e.target.value)}
                        className="w-full px-4 py-3 bg-white/60 border border-white/60 rounded-2xl focus:ring-2 focus:ring-okif-secondary outline-none transition-all shadow-sm text-slate-800 placeholder-slate-400"
                        placeholder="Nama Mahasiswa..."
                      />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Pencapaian / Prestasi *</label>
                      <input
                        required
                        type="text"
                        value={prestasi}
                        onChange={(e) => setPrestasi(e.target.value)}
                        className="w-full px-4 py-3 bg-white/60 border border-white/60 rounded-2xl focus:ring-2 focus:ring-okif-secondary outline-none shadow-sm text-slate-800 placeholder-slate-400"
                        placeholder="Pencapaian..."
                      />
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
                    <label className="block text-sm font-medium text-slate-700 mb-1">Deskripsi Tambahan (Opsional)</label>
                    <textarea
                      rows={4}
                      value={deskripsi}
                      onChange={(e) => setDeskripsi(e.target.value)}
                      className="w-full px-4 py-3 bg-white/60 border border-white/60 rounded-2xl focus:ring-2 focus:ring-okif-secondary outline-none resize-none shadow-sm text-slate-800 placeholder-slate-400"
                      placeholder="Deskripsi singkat..."
                    ></textarea>
                  </div>
                </div>

                <div>
                  <ImageUploadCrop
                    aspectRatio={1 / 1}
                    label="Foto Mahasiswa (1:1 / Persegi) - Opsional"
                    defaultImage={existingImageUrl}
                    onCropSuccess={(blob, url) => {
                      setImageBlob(blob);
                      setImagePreviewUrl(url);
                    }}
                  />
                  <p className="text-xs text-slate-500 mt-2">
                    Gunakan foto wajah yang jelas. Akan dipotong otomatis menjadi rasio 1:1.
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
                form="prestasi-form"
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
                  "Simpan Prestasi"
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
