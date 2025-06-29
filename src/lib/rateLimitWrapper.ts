import { PostgresStore } from "@acpr/rate-limit-postgresql";
import rateLimit from "express-rate-limit";
import { NextRequest, NextResponse } from "next/server";

const SERVER_CONFIG = {
  ENV: {
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_HOST: process.env.DB_HOST,
    DB_NAME: process.env.DB_NAME,
    DB_PORT: process.env.DB_PORT,
  },
};

export default function rateLimitWrapper(
  handler: (
    req: NextRequest,
    params: { params: Promise<Record<string, string>> },
  ) => Promise<NextResponse>,
) {
  return async (
    req: NextRequest,
    params: { params: Promise<Record<string, string>> },
  ): Promise<NextResponse> => {
    const limiter = rateLimit({
      windowMs: 60 * 1000,
      limit: 5,
      standardHeaders: "draft-7",
      legacyHeaders: false,
      store: new PostgresStore(
        {
          user: SERVER_CONFIG.ENV.DB_USER,
          password: SERVER_CONFIG.ENV.DB_PASSWORD,
          host: SERVER_CONFIG.ENV.DB_HOST,
          database: SERVER_CONFIG.ENV.DB_NAME,
          port: SERVER_CONFIG.ENV.DB_PORT,
        },
        "aggregated_store",
      ),
      keyGenerator: (req) => {
        return req.headers["x-forwarded-for"] ?? "0.0.0.0";
      },
      handler: (req) => {
        if (req.rateLimit.remaining === 0) {
          throw new Error();
        }
      },
    });

    console.log("dirname", __dirname);
    console.log("cwd", process.cwd());

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
      return NextResponse.json({ error: "Too many requests" }, { status: 429 });
    }
  };
}
