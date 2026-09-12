import { NextRequest } from "next/server";
import { verifySessionCookie } from "@/lib/auth";
import { prestasiService } from "@/services/prestasi.service";
import { successResponse, errorResponse } from "@/lib/api-response";
import { Prestasi } from "../../../../../types/models";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const data = await prestasiService.getById(id);
    if (!data) {
      return errorResponse("Prestasi not found", "NOT_FOUND", 404);
    }
    return successResponse(data, "Prestasi retrieved successfully");
  } catch (error) {
    console.error("Error fetching prestasi details:", error);
    return errorResponse("Internal Server Error", "INTERNAL_SERVER_ERROR", 500);
  }
}

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
    const body: Partial<Prestasi> = await request.json();
    await prestasiService.update(id, body);
    return successResponse(null, "Prestasi updated successfully");
  } catch (error) {
    console.error("Error updating prestasi:", error);
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
    await prestasiService.delete(id);
    return successResponse(null, "Prestasi deleted successfully");
  } catch (error) {
    console.error("Error deleting prestasi:", error);
    return errorResponse("Internal Server Error", "INTERNAL_SERVER_ERROR", 500);
  }
}
