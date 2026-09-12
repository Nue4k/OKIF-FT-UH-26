import { NextRequest } from "next/server";
import { formatifService } from "@/services/formatif.service";
import { successResponse, errorResponse } from "@/lib/api-response";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const data = await formatifService.getBySlug(slug);
    if (!data) {
      return errorResponse("Formatif not found", "NOT_FOUND", 404);
    }
    return successResponse(data, "Formatif retrieved successfully");
  } catch (error) {
    console.error("Error fetching formatif details:", error);
    return errorResponse("Internal Server Error", "INTERNAL_SERVER_ERROR", 500);
  }
}
