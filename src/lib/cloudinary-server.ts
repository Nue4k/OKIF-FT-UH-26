import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

/**
 * Helper untuk mengekstrak public_id dari URL Cloudinary
 * dan menghapus filenya dari server Cloudinary.
 */
export const deleteImageFromCloudinary = async (imageUrl: string) => {
  if (!imageUrl || !imageUrl.includes("cloudinary.com")) return;
  
  try {
    // Format URL Cloudinary: 
    // https://res.cloudinary.com/<cloud_name>/image/upload/v<version>/<folder>/<filename>.<ext>
    // public_id = <folder>/<filename>
    
    const parts = imageUrl.split("/");
    const uploadIndex = parts.findIndex(p => p === "upload");
    
    if (uploadIndex === -1) return;
    
    // Ambil semua bagian setelah versi (uploadIndex + 2)
    const publicIdWithExt = parts.slice(uploadIndex + 2).join("/");
    // Hapus ekstensinya (.jpg, .png, dll)
    const publicId = publicIdWithExt.split(".")[0];
    
    if (publicId) {
      await cloudinary.uploader.destroy(publicId);
      console.log(`Berhasil menghapus gambar dari Cloudinary: ${publicId}`);
    }
  } catch (error) {
    console.error("Gagal menghapus gambar dari Cloudinary:", error);
  }
};
