import { NextResponse } from "next/server";


export type ApiSuccess<T> = { success: true; data: T };
export type ApiError = { success: false; error: string; code?: string; details?: Record<string, string> };
export type ApiResponse<T> = ApiSuccess<T> | ApiError;


export function SuccessResponse<T>(data: T, status = 200) {
  return NextResponse.json<{ success: true; data: T }>(
    { success: true, data },
    { status },
  );
}

export function ErrorResponse(
  error: string,
  status = 500,
  code?: string,
  details?: Record<string, string>,
) {
  return NextResponse.json<{
    success: false;
    error: string;
    code?: string;
    details?: Record<string, string>;
  }>(
    { success: false, error, code, details },
    { status },
  );
}
