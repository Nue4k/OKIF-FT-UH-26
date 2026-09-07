import { NextRequest } from "next/server";
import { verifySessionCookie } from "@/lib/auth";
import { beritaService } from "@/services/berita.service";
import { successResponse, errorResponse } from "@/lib/api-response";
import { Berita } from "../../../../../types/models";

export async function GET() {
  try {
    const data = await beritaService.getAll();
    return successResponse(data, "Berita retrieved successfully");
  } catch (error) {
    console.error("Error fetching berita:", error);
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
    const body: Omit<Berita, "id" | "createdAt" | "updatedAt"> = await request.json();

    if (!body.title) {
      return errorResponse("Title is required", "BAD_REQUEST", 400);
    }

    const { id, slug } = await beritaService.create(body);

    return successResponse({ id, slug }, "Berita created successfully", 201);
  } catch (error) {
    console.error("Error creating berita:", error);
    return errorResponse("Internal Server Error", "INTERNAL_SERVER_ERROR", 500);
  }
}
