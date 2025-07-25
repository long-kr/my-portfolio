import { PostgresStore } from "@acpr/rate-limit-postgresql";
import rateLimit from "express-rate-limit";
import { NextRequest, NextResponse } from "next/server";

const store = new PostgresStore(
  {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
  },
  "aggregated_store",
);

// Server configuration for the rate limiter

const limiter = rateLimit({
  windowMs: 60 * 1000,
  limit: 2,
  standardHeaders: "draft-7",
  legacyHeaders: false,
  store,
  keyGenerator: (req) => req.headers["x-forwarded-for"] ?? "0.0.0.0",
  handler: (req) => {
    if (req.rateLimit.remaining === 0) {
      throw new Error("Rate limit exceeded");
    }
  },
});

/**
 * Wraps a Next.js API route handler with rate limiting using PostgreSQL.
 * Based on: https://github.com/express-rate-limit/rate-limit-postgresql/issues/36
 *
 * @example
 * // Basic usage
 * export const GET = rateLimitWrapper(
 *   async (req: NextRequest, { params }) => {
 *     return NextResponse.json({ message: "Success" });
 *   }
 * );
 *
 * @returns NextResponse - Returns the handler's response or a 429 error
 * @throws {Error} 429 - When rate limit is exceeded (2 requests/minute/IP)
 */
export default function rateLimitWrapper<T = Record<string, string>>(
  handler: (
    request: NextRequest,
    params?: { params: Promise<T> },
  ) => Promise<NextResponse>,
) {
  return async (
    req: NextRequest,
    params: { params: Promise<T> },
  ): Promise<NextResponse> => {
    try {
      const mockRes = {
        setHeader: () => {},
        status: () => ({ send: () => {} }),
      };

      await new Promise<void>((resolve, reject) => {
        limiter(req, mockRes, (error: Error | undefined) => {
          if (error) reject(error);
          resolve();
        });
      });

      return await handler(req, params);
    } catch {
      return NextResponse.json(
        { error: "Too many requests, please try again later." },
        { status: 429 },
      );
    }
  };
}
