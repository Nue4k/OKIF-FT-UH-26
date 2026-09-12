"use client";

import React, { useState, useCallback } from "react";
import Cropper from "react-easy-crop";
import getCroppedImg from "@/lib/utils/cropImage";
import { Upload, X } from "lucide-react";

interface ImageUploadCropProps {
  aspectRatio?: number; // Contoh: 16/9, 1/1
  onCropSuccess: (blob: Blob, previewUrl: string) => void;
  label?: string;
  defaultImage?: string;
}

export default function ImageUploadCrop({
  aspectRatio = 16 / 9,
  onCropSuccess,
  label = "Pilih Gambar",
  defaultImage,
}: ImageUploadCropProps) {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<any>(null);
  
  // Tampilan pratinjau hasil akhirnya (bisa dari parent atau dari hasil crop)
  const [finalPreview, setFinalPreview] = useState<string | null>(defaultImage || null);

  const onFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImageSrc(reader.result?.toString() || null);
      });
      reader.readAsDataURL(file);
    }
  };

  const onCropComplete = useCallback((croppedArea: any, croppedAreaPixels: any) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const handleCropSave = async () => {
    try {
      if (!imageSrc || !croppedAreaPixels) return;
      const croppedImageBlob = await getCroppedImg(imageSrc, croppedAreaPixels);
      if (croppedImageBlob) {
        const previewUrl = URL.createObjectURL(croppedImageBlob);
        setFinalPreview(previewUrl);
        onCropSuccess(croppedImageBlob, previewUrl);
        setImageSrc(null); // Tutup modal crop
      }
    } catch (e) {
      console.error(e);
      alert("Gagal memotong gambar.");
    }
  };

  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-slate-700 mb-2">{label}</label>

      {/* Tampilan jika gambar sudah dipilih/dicrop */}
      {finalPreview && !imageSrc ? (
        <div className="relative w-full overflow-hidden rounded-xl border-2 border-slate-200 aspect-video mb-4">
          <img src={finalPreview} alt="Preview" className="w-full h-full object-cover" />
          <button
            type="button"
            onClick={() => setFinalPreview(null)}
            className="absolute top-2 right-2 bg-red-500 text-white p-1.5 rounded-lg hover:bg-red-600 transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ) : (
        <div className="w-full">
          <input
            type="file"
            accept="image/*"
            onChange={onFileChange}
            className="hidden"
            id="image-upload"
          />
          {!imageSrc && (
            <label
              htmlFor="image-upload"
              className="flex flex-col items-center justify-center w-full h-40 border-2 border-slate-300 border-dashed rounded-xl cursor-pointer bg-slate-50 hover:bg-slate-100 transition"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <Upload className="w-8 h-8 mb-3 text-slate-400" />
                <p className="mb-2 text-sm text-slate-500">
                  <span className="font-semibold">Klik untuk upload</span> atau drag and drop
                </p>
                <p className="text-xs text-slate-400">JPG, PNG, WEBP</p>
              </div>
            </label>
          )}
        </div>
      )}

      {/* Modal Cropper */}
      {imageSrc && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-8">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl overflow-hidden flex flex-col">
            <div className="p-4 border-b flex justify-between items-center bg-slate-50">
              <h3 className="font-semibold text-slate-800">Sesuaikan Gambar</h3>
              <button onClick={() => setImageSrc(null)} className="text-slate-500 hover:text-slate-700">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="relative w-full h-[60vh] bg-slate-900">
              <Cropper
                image={imageSrc}
                crop={crop}
                zoom={zoom}
                aspect={aspectRatio}
                onCropChange={setCrop}
                onCropComplete={onCropComplete}
                onZoomChange={setZoom}
              />
            </div>
            
            <div className="p-4 bg-slate-50 border-t flex flex-col sm:flex-row gap-4 items-center justify-between">
              <div className="w-full sm:w-1/2 flex items-center gap-2">
                <span className="text-sm text-slate-500">Zoom</span>
                <input
                  type="range"
                  value={zoom}
                  min={1}
                  max={3}
                  step={0.1}
                  aria-labelledby="Zoom"
                  onChange={(e) => setZoom(Number(e.target.value))}
                  className="w-full accent-okif-secondary"
                />
              </div>
              <div className="flex w-full sm:w-auto gap-2">
                <button
                  type="button"
                  onClick={() => setImageSrc(null)}
                  className="flex-1 px-4 py-2 text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 font-medium"
                >
                  Batal
                </button>
                <button
                  type="button"
                  onClick={handleCropSave}
                  className="flex-1 px-6 py-2 bg-okif-secondary text-white rounded-lg hover:bg-okif-primary font-medium shadow-sm"
                >
                  Selesai
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
