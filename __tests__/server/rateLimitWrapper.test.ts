import rateLimitWrapper from "@/lib/rateLimitWrapper";
import { NextRequest, NextResponse } from "next/server";

const mockHandler = jest.fn(async () => NextResponse.json({ success: true }));

const mockReq = (ip: string = "127.0.0.1") =>
  new NextRequest({
    headers: { "x-forwarded-for": ip },
  });

/**
 * @jest-environment node
 * @jest-environment-options {"url": "https://jestjs.io/"}
 */
describe("rateLimitWrapper", () => {
  let wrappedRateLimit: ReturnType<typeof rateLimitWrapper>;

  beforeEach(() => {
    jest.clearAllMocks();
    wrappedRateLimit = rateLimitWrapper(mockHandler);
  });

  it("should allow a request if the limit is not exceeded", async () => {
    const req = mockReq();
    const res1 = await wrappedRateLimit(req, { params: Promise.resolve({}) });
    expect(res1.status).toBe(200);
    expect(await res1.json()).toEqual({ success: true });

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
