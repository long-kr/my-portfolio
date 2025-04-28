
import { NextRequest, NextResponse } from "next/server";
import { checkRateLimit } from "./app/api/helpers";

export const config = {
  matcher: ["/api/contact"],
};

export async function middleware(req: NextRequest) {
  const forwarded = req.headers.get("x-forwarded-for") ?? "";
  const ip = forwarded.split(/,\s*/)[0] || "unknown";
  
  // Rate limit
  const success = await checkRateLimit(ip);
  
  if (!success) {
    return NextResponse.json(
      { error: "Too many requests, try again later." },
      { status: 429 },
    );
  }
  
  // Continue
  return NextResponse.next();
}
