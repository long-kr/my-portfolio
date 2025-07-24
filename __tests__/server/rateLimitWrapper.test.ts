/**
 * @jest-environment node
 */

import rateLimitWrapper from "@/lib/rateLimitWrapper";
import { NextRequest, NextResponse } from "next/server";

const mockRes = jest.fn(async () => NextResponse.json({ success: true }));

const mockReq = (ip: string = "127.0.0.1", url = "/api/test", method = "GET") =>
  new NextRequest(`http://localhost${url}`, {
    method,
    headers: new Headers({
      "Content-Type": "application/json",
      "x-forwarded-for": ip,
    }),
  });

describe("rateLimitWrapper", () => {
  const wrappedRateLimit: ReturnType<typeof rateLimitWrapper> =
    rateLimitWrapper(mockRes);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should allow a request if the limit is not exceeded", async () => {
    const req = mockReq();
    const res1 = await wrappedRateLimit(req, { params: Promise.resolve({}) });
    expect(res1.status).toBe(200);
    expect(await res1.json()).toEqual({ success: true });
  });

  it("should allow a second request if the limit is not exceeded", async () => {
    const req = mockReq();
    const res2 = await wrappedRateLimit(req, { params: Promise.resolve({}) });
    expect(res2.status).toBe(200);
    expect(await res2.json()).toEqual({ success: true });
  });

  it("should block a request if the limit is exceeded", async () => {
    const req = mockReq();
    await wrappedRateLimit(req, { params: Promise.resolve({}) });
    await wrappedRateLimit(req, { params: Promise.resolve({}) });
    const res = await wrappedRateLimit(req, { params: Promise.resolve({}) });
    expect(res.status).toBe(429);
    expect(await res.json()).toEqual({
      error: "Too many requests, please try again later.",
    });
  });
});
