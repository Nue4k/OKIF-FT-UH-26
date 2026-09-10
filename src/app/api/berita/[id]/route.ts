import { NextRequest } from "next/server";
import { verifySessionCookie } from "@/lib/auth";
import { beritaService } from "@/services/berita.service";
import { successResponse, errorResponse } from "@/lib/api-response";
import { Berita } from "../../../../../types/models";

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const session = await verifySessionCookie();
  if (!session) {
    return errorResponse("Unauthorized", "UNAUTHORIZED", 401);
  }

  try {
    const body: Partial<Berita> = await request.json();
    await beritaService.update(params.id, body);
    return successResponse(null, "Berita updated successfully");
  } catch (error) {
    console.error("Error updating berita:", error);
    return errorResponse("Internal Server Error", "INTERNAL_SERVER_ERROR", 500);
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const session = await verifySessionCookie();
  if (!session) {
    return errorResponse("Unauthorized", "UNAUTHORIZED", 401);
  }

  try {
    await beritaService.delete(params.id);
    return successResponse(null, "Berita deleted successfully");
  } catch (error) {
    console.error("Error deleting berita:", error);
    return errorResponse("Internal Server Error", "INTERNAL_SERVER_ERROR", 500);
  }
}
