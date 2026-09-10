import { NextRequest } from "next/server";
import { verifySessionCookie } from "@/lib/auth";
import { adminStorage } from "@/lib/firebase-admin";
import { successResponse, errorResponse } from "@/lib/api-response";

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

    // 2. Validasi Tipe File (Hanya gambar)
    if (!file.type.startsWith("image/")) {
      return errorResponse("File must be an image", "BAD_REQUEST", 400);
    }

    // 3. Validasi Ukuran File (Max 32MB)
    if (file.size > MAX_FILE_SIZE) {
      return errorResponse("File size exceeds 32MB limit", "PAYLOAD_TOO_LARGE", 413);
    }

    // 4. Ubah file menjadi buffer
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // 5. Buat nama file unik
    const timestamp = Date.now();
    const cleanFileName = file.name.replace(/[^a-zA-Z0-9.\-_]/g, ""); // Hapus karakter aneh
    const uniqueFileName = `uploads/${timestamp}-${cleanFileName}`;

    // 6. Dapatkan referensi bucket Firebase Storage
    const bucket = adminStorage.bucket();
    const fileRef = bucket.file(uniqueFileName);

    // 7. Simpan file ke Firebase Storage
    await fileRef.save(buffer, {
      metadata: {
        contentType: file.type,
      },
      public: true, // Jadikan file dapat diakses publik
    });

    // 8. Dapatkan public URL
    const publicUrl = `https://storage.googleapis.com/${bucket.name}/${uniqueFileName}`;

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
