import { NextResponse } from "next/server";

export type ApiResponse<T = any> = {
  status: "success" | "error";
  success: boolean;
  message?: string;
  data?: T;
  error?: string;
  code?: string;
  meta?: any;
};

/**
 * Helper untuk mengembalikan response sukses
 * @param data Data utama yang ingin dikembalikan
 * @param message Pesan opsional (default: "Success")
 * @param statusCode HTTP Status Code (default: 200)
 * @param meta Data tambahan (misal: pagination)
 */
export function successResponse<T>(
  data?: T,
  message: string = "Success",
  statusCode: number = 200,
  meta?: any
) {
  const payload: ApiResponse<T> = {
    status: "success",
    success: true,
    message,
  };

  if (data !== undefined) payload.data = data;
  if (meta !== undefined) payload.meta = meta;

  return NextResponse.json(payload, { status: statusCode });
}

/**
 * Helper untuk mengembalikan response error
 * @param message Pesan error
 * @param errorCode Kode error spesifik aplikasi (opsional)
 * @param statusCode HTTP Status Code (default: 400)
 */
export function errorResponse(
  message: string,
  errorCode?: string,
  statusCode: number = 400
) {
  const payload: ApiResponse = {
    status: "error",
    success: false,
    message,
  };

  if (errorCode) payload.code = errorCode;

  return NextResponse.json(payload, { status: statusCode });
}
