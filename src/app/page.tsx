/* --------------------------------------------------------------------------
 *  Landing page for Next Corner – Street‑vendor discovery & ordering app.
 *  Author:  (Ralph Lopez / team) – Last updated: 2025‑07‑02
 * --------------------------------------------------------------------------
 *  What this file does
 *  ───────────────────
 *  • Renders a SEO‑optimised “Coming Soon” page using Next.js + React.
 *  • Shows a hydration‑safe live countdown banner.
 *  • Collects emails via a simple form (placeholder alert for now).
 *  • Injects full meta tags + JSON‑LD for rich search results.
 *  • Integrates Vercel Analytics for visitor insights.
 * ------------------------------------------------------------------------ */

'use client'; // ➜ Marks this page as a client‑side component in Next.js (App Router)

// ── React / Next imports ────────────────────────────────────────────────
import { useEffect, useState } from 'react';
import Head from 'next/head';
import { Analytics } from '@vercel/analytics/react'; // 📊 first‑party analytics

// ── Constants ───────────────────────────────────────────────────────────
const LAUNCH_DATE = new Date('2025-08-01T00:00:00Z'); // ISO date in UTC

// ── Type helpers ────────────────────────────────────────────────────────
/** Structure returned by our countdown hook. */
type TimeLeft = { d: number; h: number; m: number; s: number } | null;

/**
 * Calculate remaining time between NOW and a target date.
 * Returns `null` if we’re past launch.
 */
const getTimeLeft = (date: Date): TimeLeft => {
  const diff = date.getTime() - Date.now();
  if (diff <= 0) return null; // Launch passed → hide banner
  return {
    d: Math.floor(diff / 86_400_000),      // days   (24*60*60*1000)
    h: Math.floor((diff / 3_600_000) % 24), // hours  (60*60*1000)
    m: Math.floor((diff / 60_000)   % 60), // minutes(60*1000)
    s: Math.floor((diff / 1_000)    % 60), // seconds(1000)
  };
};

/** Pad single‑digit numbers with a leading zero → 8 ➜ "08" */
const fmt = (v: number) => v.toString().padStart(2, '0');

// ── Custom Hooks ────────────────────────────────────────────────────────
function useCountdown(targetDate: Date): TimeLeft {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => getTimeLeft(targetDate));

  useEffect(() => {
    const tick = () => setTimeLeft(getTimeLeft(targetDate));
    tick();
    const id = setInterval(tick, 1_000);
    return () => clearInterval(id);
  }, [targetDate]);

  return timeLeft;
}

// ── UI Components ───────────────────────────────────────────────────────
function CountdownBanner({ timeLeft }: { timeLeft: TimeLeft }) {
  if (!timeLeft) return null;

  return (
    <div
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 py-1.5
                 bg-[#eaf6ff] border-b border-[#cbe4f5] shadow-sm animate-slideDown"
      role="status"          // Assistive tech: announce updates politely
      aria-live="polite"
    >
      <span className="flex items-center gap-3 text-sm font-medium text-[#005fa9]">
        <span>🚀 Launching in</span>
        <span className="font-mono text-lg tracking-widest">
          {fmt(timeLeft.d)}:{fmt(timeLeft.h)}:{fmt(timeLeft.m)}:{fmt(timeLeft.s)}
        </span>
      </span>
    </div>
  );
}

// ── Page Component ──────────────────────────────────────────────────────
export default function HomePage() {
  const timeLeft = useCountdown(LAUNCH_DATE);
  const [hasMounted, setHasMounted] = useState(false);

  // Ensure countdown only renders client‑side (avoids SSR mismatches)
  useEffect(() => setHasMounted(true), []);

  return (
    <>
      {/* ── SEO Metadata & Structured Data ─────────────────────────── */}
      <Head>
        {/* Basic */}
        <title>Next Corner – Discover & Order from Local Street Vendors</title>
        <meta name="description" content="Order street food and find nearby food trucks with Next Corner. Discover tacos, burgers, desserts, and more from your favorite vendors." />
        <meta name="keywords" content="street food delivery, food trucks, street vendors, taco stands, food truck app, LA food, Los Angeles food, Next Corner" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://www.nextcornerapp.com/" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.nextcornerapp.com" />
        <meta property="og:title" content="Next Corner – Discover & Order from Street Vendors" />
        <meta property="og:description" content="Order your favorite street food and food truck meals in seconds. Launching soon." />
        <meta property="og:image" content="/preview.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@nextcornerapp" />
        <meta name="twitter:title" content="Next Corner – Local Street Food at Your Fingertips" />
        <meta name="twitter:description" content="Discover and support local vendors and food trucks. Next Corner is launching soon!" />
        <meta name="twitter:image" content="/preview.jpg" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Next Corner",
            url: "https://www.nextcornerapp.com",
            logo: "https://www.nextcornerapp.com/logo.png",
            sameAs: [
              "https://instagram.com/nextcornerapp",
              "https://twitter.com/nextcornerapp"
            ]
          })}
        </script>
      </Head>

      {/* Hydration‑safe countdown */}
      {hasMounted && timeLeft && <CountdownBanner timeLeft={timeLeft} />}

      {/* ── Hero Section ─────────────────────────────────────────── */}
      <main className="flex flex-col items-center justify-center min-h-screen bg-white px-6 sm:px-10 pt-24 sm:pt-32 fade-in">
        {/* Branding */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#606060] mb-6 tracking-tight">
          Next Corner
        </h1>

        {/* Tagline */}
        <p className="text-base sm:text-lg md:text-xl text-[#606060]/80 mb-10 text-center max-w-md leading-relaxed">
          Street Vendors at your fingertips.<br className="hidden md:inline" />
          Hungry for something new? We’re nearly ready to serve.
        </p>

        {/* Email capture form */}
        <form
          className="w-full max-w-sm space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            alert('Thanks! You’re on the list.');
          }}
        >
          <label htmlFor="email" className="sr-only">Email address</label>
          <input
            id="email"
            type="email"
            required
            placeholder="Enter your email"
            className="w-full px-4 py-3 rounded-lg border border-[#606060]/30 shadow-sm placeholder-[#606060] text-[#303030] focus:outline-none focus:ring-2 focus:ring-[#00aaed] hover:border-[#606060]/50"
          />
          <button
            type="submit"
            className="w-full px-4 py-3 rounded-lg bg-[#00aaed] text-white font-medium hover:bg-[#0089c0] transition-colors"
          >
            Notify Me
          </button>
        </form>
      </main>

      {/* ── Global CSS Animations ─────────────────────────────────── */}
      <style jsx global>{`
        @keyframes slideDown {
          from { transform: translateY(-100%); opacity: 0; }
          to   { transform: translateY(0);      opacity: 1; }
        }
        .animate-slideDown { animation: slideDown 0.35s ease-out; }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0);     }
        }
        .fade-in { animation: fadeIn 0.4s ease-out; }
      `}</style>

      {/* ── Vercel Analytics (captures page views & events) ───────── */}
      <Analytics />
    </>
  );
}
