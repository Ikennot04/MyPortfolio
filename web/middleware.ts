// middleware.ts

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Optional: Log or modify request/response here
  return NextResponse.next(); // allows the request to continue
}
