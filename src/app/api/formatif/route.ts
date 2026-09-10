import { NextRequest } from "next/server";
import { verifySessionCookie } from "@/lib/auth";
import { formatifService } from "@/services/formatif.service";
import { successResponse, errorResponse } from "@/lib/api-response";
import { Formatif } from "../../../../types/models";

export async function GET() {
  try {
    const session = await verifySessionCookie();
    const isAdmin = !!session;
    
    const data = await formatifService.getAll(isAdmin);
    return successResponse(data, "Formatif retrieved successfully");
  } catch (error) {
    console.error("Error fetching formatif:", error);
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
    const body: Omit<Formatif, "id" | "createdAt" | "updatedAt"> = await request.json();

    if (!body.title) {
      return errorResponse("Title is required", "BAD_REQUEST", 400);
    }

    const { id, slug } = await formatifService.create(body);

    return successResponse({ id, slug }, "Formatif created successfully", 201);
  } catch (error) {
    console.error("Error creating formatif:", error);
    return errorResponse("Internal Server Error", "INTERNAL_SERVER_ERROR", 500);
  }
}
