// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // ── Security Headers ─────────────────────────────────────────────
  response.headers.set('X-Frame-Options', 'SAMEORIGIN'); // Prevent clickjacking
  response.headers.set('X-Content-Type-Options', 'nosniff'); // Prevent MIME-type sniffing
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin'); // Safer referrer behavior
  response.headers.set('Permissions-Policy', 'geolocation=(), microphone=(), camera=()'); // Disable powerful APIs

  // ── CSP: Safe for Next.js client-side hydration ─────────────────
  response.headers.set(
    'Content-Security-Policy',
    [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'", // Allow Next.js runtime and hydration
      "style-src 'self' 'unsafe-inline'",                // Allow Tailwind inline styles
      "img-src 'self' data:",                            // Local and inline images
      "font-src 'self'",                                 // Fonts from same origin
      "connect-src 'self'",                              // For API/fetch/websocket if needed
    ].join('; ')
  );

  return response;
}
