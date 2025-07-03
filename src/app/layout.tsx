import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "../components/Footer/Footer";  // ← import your Footer component

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next Corner",
  description: "Street Food, Delivered",
  icons: {
    icon: "/NextCorner.png",
    shortcut: "/NextCorner.png",
    apple: "/NextCorner.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        {/* page content will go here */}
        <main className="flex-grow">
          {children}
        </main>

        {/* footer always at the bottom */}
        <Footer />
      </body>
    </html>
  );
}
