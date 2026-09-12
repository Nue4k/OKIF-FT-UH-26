import { NextRequest } from "next/server";
import { verifySessionCookie } from "@/lib/auth";
import { successResponse, errorResponse } from "@/lib/api-response";
import { v2 as cloudinary } from "cloudinary";

// Konfigurasi Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Batas ukuran file 32 MB
const MAX_FILE_SIZE = 32 * 1024 * 1024; 

export async function POST(request: NextRequest) {
  // 1. Verifikasi Autentikasi Admin
  const session = await verifySessionCookie();
  if (!session) {
    return errorResponse("Unauthorized", "UNAUTHORIZED", 401);
  }

  try {
    const formData = await request.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return errorResponse("No file uploaded", "BAD_REQUEST", 400);
    }

    // 2. Validasi Tipe File Ekstra Ketat (Mencegah Spoofing)
    const allowedMimeTypes = ["image/jpeg", "image/png", "image/webp", "image/gif"];
    if (!allowedMimeTypes.includes(file.type)) {
      return errorResponse("Hanya file gambar (JPG, PNG, WEBP, GIF) yang diizinkan", "BAD_REQUEST", 400);
    }

    const fileName = file.name.toLowerCase();
    if (!fileName.match(/\.(jpg|jpeg|png|webp|gif)$/)) {
      return errorResponse("Ekstensi file tidak valid", "BAD_REQUEST", 400);
    }

    // 3. Validasi Ukuran File (Max 32MB)
    if (file.size > MAX_FILE_SIZE) {
      return errorResponse("File size exceeds 32MB limit", "PAYLOAD_TOO_LARGE", 413);
    }

    // 4. Ubah file menjadi buffer
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // 5. Upload ke Cloudinary dengan Auto-Compress (Future Proofing)
    const publicUrl = await new Promise<string>((resolve, reject) => {
      cloudinary.uploader.upload_stream(
        { 
          folder: "okif26_uploads",
          format: "webp", // Paksa ubah ke format WebP (sangat kecil & cepat)
          transformation: [
            { width: 1280, crop: "limit" }, // Cegah upload gambar raksasa (max width 1280px)
            { quality: "auto" } // Biarkan AI Cloudinary menentukan kompresi terbaik tanpa pecah
          ]
        },
        (error, result) => {
          if (error) reject(error);
          else resolve(result!.secure_url);
        }
      ).end(buffer);
    });

    return successResponse({ url: publicUrl }, "File uploaded successfully", 201);
  } catch (error: any) {
    console.error("Upload error:", error);
    return errorResponse(
      error.message || "Internal Server Error",
      "INTERNAL_SERVER_ERROR",
      500
    );
  }
}
