import { NextRequest } from "next/server";
import { verifySessionCookie } from "@/lib/auth";
import { formatifService } from "@/services/formatif.service";
import { successResponse, errorResponse } from "@/lib/api-response";
import { Formatif } from "../../../../../types/models";

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const session = await verifySessionCookie();
  if (!session) {
    return errorResponse("Unauthorized", "UNAUTHORIZED", 401);
  }

  try {
    const body: Partial<Formatif> = await request.json();
    await formatifService.update(id, body);
    return successResponse(null, "Formatif updated successfully");
  } catch (error) {
    console.error("Error updating formatif:", error);
    return errorResponse("Internal Server Error", "INTERNAL_SERVER_ERROR", 500);
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const session = await verifySessionCookie();
  if (!session) {
    return errorResponse("Unauthorized", "UNAUTHORIZED", 401);
  }

  try {
    await formatifService.delete(id);
    return successResponse(null, "Formatif deleted successfully");
  } catch (error) {
    console.error("Error deleting formatif:", error);
    return errorResponse("Internal Server Error", "INTERNAL_SERVER_ERROR", 500);
  }
}
