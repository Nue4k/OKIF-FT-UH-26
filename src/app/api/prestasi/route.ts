import { NextRequest } from "next/server";
import { verifySessionCookie } from "@/lib/auth";
import { prestasiService } from "@/services/prestasi.service";
import { successResponse, errorResponse } from "@/lib/api-response";
import { Prestasi } from "../../../../../types/models";

export async function GET() {
  try {
    const data = await prestasiService.getAll();
    return successResponse(data, "Prestasi retrieved successfully");
  } catch (error) {
    console.error("Error fetching prestasi:", error);
    return errorResponse("Internal Server Error", "INTERNAL_SERVER_ERROR", 500);
  }
}

export async function POST(request: NextRequest) {
  // Authentication Check
  const session = await verifySessionCookie();
  if (!session) {
    return errorResponse("Unauthorized", "UNAUTHORIZED", 401);
  }

  try {
    const body: Omit<Prestasi, "id" | "createdAt" | "updatedAt"> = await request.json();

    if (!body.nama || !body.prestasi) {
      return errorResponse("Nama and prestasi are required", "BAD_REQUEST", 400);
    }

    const { id } = await prestasiService.create(body);

    return successResponse({ id }, "Prestasi created successfully", 201);
  } catch (error) {
    console.error("Error creating prestasi:", error);
    return errorResponse("Internal Server Error", "INTERNAL_SERVER_ERROR", 500);
  }
}
