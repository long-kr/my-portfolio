import { NextResponse } from "next/server";

export const config = {
  matcher: ["/api/contact"],
};

export async function middleware() {
  return NextResponse.next();
}
