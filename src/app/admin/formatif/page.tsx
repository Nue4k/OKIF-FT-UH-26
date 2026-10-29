"use client";

import { useState, useEffect } from "react";
import { FileStack, Plus, Pencil, Trash2, X, UploadCloud } from "lucide-react";
import { Formatif } from "../../../../types/models";
import ImageUploadCrop from "@/components/ui/image-upload-crop";

export default function FormatifPage() {
  const [formatifList, setFormatifList] = useState<Formatif[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  const [title, setTitle] = useState("");
  const [speaker, setSpeaker] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState<"DRAFT" | "PUBLISHED">("PUBLISHED");
  
  const [imageBlob, setImageBlob] = useState<Blob | null>(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState<string>("");
  const [existingImageUrl, setExistingImageUrl] = useState<string>("");

  const [contentImageBlob, setContentImageBlob] = useState<Blob | null>(null);
  const [existingContentImageUrl, setExistingContentImageUrl] = useState<string>("");

  const fetchFormatif = async () => {
    try {
      const res = await fetch("/api/formatif");
      const json = await res.json();
      if (json.success) {
        setFormatifList(json.data);
      }
    } catch (error) {
      console.error("Gagal mengambil data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchFormatif();
  }, []);

  const resetForm = () => {
    setTitle("");
    setSpeaker("");
    setDate(new Date().toISOString().split('T')[0]); // YYYY-MM-DD
    setDescription("");
    setStatus("PUBLISHED");
    setImageBlob(null);
    setImagePreviewUrl("");
    setExistingImageUrl("");
    setContentImageBlob(null);
    setExistingContentImageUrl("");
    setIsEditing(false);
    setSelectedId(null);
  };

  const handleOpenAddModal = () => {
    resetForm();
    setIsModalOpen(true);
  };

  const handleOpenEditModal = (item: Formatif) => {
    resetForm();
    setIsEditing(true);
    setSelectedId(item.id || null);
    setTitle(item.title);
    setSpeaker(item.speaker || "");
    setDate(item.date || "");
    setDescription(item.description);
    setStatus(item.status || "PUBLISHED");
    setExistingImageUrl(item.image || "");
    setExistingContentImageUrl(item.contentImage || "");
    setIsModalOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Apakah Anda yakin ingin menghapus formatif ini?")) return;
    
    try {
      const res = await fetch(`/api/formatif/${id}`, { method: "DELETE" });
      if (res.ok) {
        setFormatifList((prev) => prev.filter((b) => b.id !== id));
      }
    } catch (error) {
      alert("Gagal menghapus formatif");
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

      // Validasi kewajiban isi hanya berlaku jika status PUBLISHED
      if (status === "PUBLISHED") {
        if (!finalImageUrl) {
          alert("Gambar cover & header wajib diisi jika status Published!");
          setIsSaving(false);
          return;
        }
        if (!speaker.trim()) {
          alert("Speaker wajib diisi jika status Published!");
          setIsSaving(false);
          return;
        }
        if (!date.trim()) {
          alert("Tanggal wajib diisi jika status Published!");
          setIsSaving(false);
          return;
        }
        if (!description.trim()) {
          alert("Isi formatif wajib diisi jika status Published!");
          setIsSaving(false);
          return;
        }
      }

      let finalContentImageUrl = existingContentImageUrl;
      if (contentImageBlob) {
        finalContentImageUrl = await uploadImage(contentImageBlob);
      }

      const payload: Partial<Formatif> = {
        title,
        speaker: speaker.trim() || "-",
        date: date.trim() || new Date().toISOString().split("T")[0],
        description: description.trim() || "",
        status,
        image: finalImageUrl || "",
        ...(finalContentImageUrl ? { contentImage: finalContentImageUrl } : {}),
      };

      const url = isEditing ? `/api/formatif/${selectedId}` : "/api/formatif";
      const method = isEditing ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Gagal menyimpan data");

      setIsModalOpen(false);
      fetchFormatif();
    } catch (error: unknown) {
      alert((error as Error).message || "Terjadi kesalahan");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold text-slate-800">Manajemen Formatif</h2>
          <p className="text-slate-500 mt-1">Kelola data formatif OKIF26.</p>
        </div>
        <button
          onClick={handleOpenAddModal}
          className="bg-okif-secondary hover:bg-okif-primary text-white px-5 py-2.5 rounded-xl font-medium flex items-center transition-colors shadow-sm"
        >
          <Plus className="w-5 h-5 mr-2" />
          Tambah Formatif
        </button>
      </div>

      <div className="bg-white/40 backdrop-blur-xl rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/60 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-600">
            <thead className="bg-white/50 text-slate-800 font-bold border-b border-white/60">
              <tr>
                <th className="px-6 py-4">Judul & Speaker</th>
                <th className="px-6 py-4">Tanggal</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {isLoading ? (
                <tr>
                  <td colSpan={3} className="px-6 py-8 text-center text-slate-400">
                    Memuat data...
                  </td>
                </tr>
              ) : formatifList.length === 0 ? (
                <tr>
                  <td colSpan={3} className="px-6 py-8 text-center text-slate-400">
                    Belum ada formatif.
                  </td>
                </tr>
              ) : (
                formatifList.map((item) => (
                  <tr key={item.id} className="hover:bg-white/60 transition-colors border-b border-white/40 last:border-0">
                    <td className="px-6 py-4">
                      <div className="font-medium text-slate-800 line-clamp-1">{item.title}</div>
                      <div className="text-slate-400 text-xs mt-1">Speaker: {item.speaker || "-"}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">{item.date || "-"}</td>
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
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-md p-3 sm:p-5 md:p-6 overflow-y-auto">
          <div className="bg-white/95 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/80 w-full max-w-4xl max-h-[92vh] flex flex-col my-auto overflow-hidden">
            <div className="px-5 sm:px-6 py-4 sm:py-5 border-b border-slate-100 flex justify-between items-center bg-white/70 rounded-t-3xl shrink-0">
              <h3 className="text-base sm:text-lg font-bold text-slate-800">
                {isEditing ? "Edit Formatif" : "Tambah Formatif"}
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 transition-colors p-1.5 rounded-xl hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-4 sm:p-6 overflow-y-auto">
              <form id="formatif-form" onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                <div className="space-y-4 sm:space-y-5 col-span-1 md:col-span-2">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Judul Formatif *</label>
                      <input
                        required
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full px-4 py-3 bg-white/60 border border-white/60 rounded-2xl focus:ring-2 focus:ring-okif-secondary outline-none transition-all shadow-sm text-slate-800 placeholder-slate-400"
                        placeholder="Masukkan judul formatif..."
                      />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        Speaker {status === "PUBLISHED" ? <span className="text-red-500">*</span> : <span className="text-xs text-slate-400 font-normal">(Opsional)</span>}
                      </label>
                      <input
                        required={status === "PUBLISHED"}
                        type="text"
                        value={speaker}
                        onChange={(e) => setSpeaker(e.target.value)}
                        className="w-full px-4 py-3 bg-white/60 border border-white/60 rounded-2xl focus:ring-2 focus:ring-okif-secondary outline-none transition-all shadow-sm text-slate-800 placeholder-slate-400"
                        placeholder="Masukkan nama speaker..."
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        Tanggal {status === "PUBLISHED" ? <span className="text-red-500">*</span> : <span className="text-xs text-slate-400 font-normal">(Opsional)</span>}
                      </label>
                      <input
                        required={status === "PUBLISHED"}
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full px-4 py-3 bg-white/60 border border-white/60 rounded-2xl focus:ring-2 focus:ring-okif-secondary outline-none transition-all shadow-sm text-slate-800"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Status Publikasi</label>
                    <select
                      value={status}
                      onChange={(e) => setStatus(e.target.value as "PUBLISHED" | "DRAFT")}
                      className="w-full px-4 py-3 bg-white/60 border border-white/60 rounded-2xl focus:ring-2 focus:ring-okif-secondary outline-none shadow-sm text-slate-800"
                    >
                      <option value="PUBLISHED">Published (Publik)</option>
                      <option value="DRAFT">Draft (Tersembunyi)</option>
                    </select>
                  </div>

                  <div className="col-span-1 md:col-span-2">
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Isi Formatif {status === "PUBLISHED" ? <span className="text-red-500">*</span> : <span className="text-xs text-slate-400 font-normal">(Opsional untuk Draft)</span>}
                    </label>
                    <textarea
                      required={status === "PUBLISHED"}
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      className="w-full px-5 py-4 min-h-75 bg-white/60 border border-white/70 rounded-3xl focus:ring-2 focus:ring-okif-secondary focus:bg-white/80 outline-none shadow-[0_8px_30px_rgba(8,10,143,0.06)] text-slate-900 placeholder-slate-400 transition-all resize-y leading-relaxed"
                      placeholder="Ketik isi formatif di sini. Pisahkan antar paragraf dengan tombol Enter..."
                    />
                  </div>
                </div>

                <div className="col-span-1">
                  <ImageUploadCrop
                    aspectRatio={16 / 9}
                    label={`Cover & Header (16:9) ${status === "PUBLISHED" ? "*" : "(Opsional untuk Draft)"}`}
                    defaultImage={existingImageUrl}
                    onCropSuccess={(blob, url) => {
                      setImageBlob(blob);
                      setImagePreviewUrl(url);
                    }}
                  />
                </div>

                <div className="col-span-1">
                  <ImageUploadCrop
                    aspectRatio={16 / 9}
                    label="Gambar Isi (16:9) - opsional"
                    defaultImage={existingContentImageUrl}
                    onCropSuccess={(blob) => {
                      setContentImageBlob(blob);
                    }}
                  />
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
                form="formatif-form"
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
                  "Simpan Formatif"
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
