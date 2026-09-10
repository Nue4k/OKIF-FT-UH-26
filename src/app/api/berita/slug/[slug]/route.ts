import { NextRequest } from "next/server";
import { beritaService } from "@/services/berita.service";
import { successResponse, errorResponse } from "@/lib/api-response";

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const data = await beritaService.getBySlug(params.slug);
    if (!data) {
      return errorResponse("Berita not found", "NOT_FOUND", 404);
    }
    return successResponse(data, "Berita retrieved successfully");
  } catch (error) {
    console.error("Error fetching berita details:", error);
    return errorResponse("Internal Server Error", "INTERNAL_SERVER_ERROR", 500);
  }
}
