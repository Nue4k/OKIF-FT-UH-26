import { NextRequest } from "next/server";
import { formatifService } from "@/services/formatif.service";
import { successResponse, errorResponse } from "@/lib/api-response";

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const data = await formatifService.getBySlug(params.slug);
    if (!data) {
      return errorResponse("Formatif not found", "NOT_FOUND", 404);
    }
    return successResponse(data, "Formatif retrieved successfully");
  } catch (error) {
    console.error("Error fetching formatif details:", error);
    return errorResponse("Internal Server Error", "INTERNAL_SERVER_ERROR", 500);
  }
}
