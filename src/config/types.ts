// API envelope types for standardized API responses
export type ApiSuccess<T> = { success: true; data: T };
export type ApiError = { success: false; error: string; code?: string; details?: Record<string, string> };
export type ApiResponse<T> = ApiSuccess<T> | ApiError;
