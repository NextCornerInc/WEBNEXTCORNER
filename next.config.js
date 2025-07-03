// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  // ✅ React strict mode helps catch common issues in development
  reactStrictMode: true,

  // ✅ Image configuration to allow remote images from your own domain
  images: {
    domains: ['www.nextcornerapp.com'], // Allow images from your hosted domain
  },

  // ✅ Optional: Add security headers here (fallback if not using middleware)
  async headers() {
    return [
      {
        source: '/(.*)', // Apply headers to all routes
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN', // Prevent clickjacking
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff', // Prevent MIME type sniffing
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin', // Secure referrer info
          },
          {
            key: 'Permissions-Policy',
            value: 'geolocation=(), microphone=(), camera=()', // Disable sensitive browser APIs
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self';", // Basic CSP
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
