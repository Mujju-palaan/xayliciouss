import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/HeaderFooter/Navbar";

/* ----------------------------- Fonts Setup ----------------------------- */

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

/* ----------------------------- Metadata (SEO) ---------------------------- */

export const metadata: Metadata = {
  title: "Xayliciouss",
  description:
    "For all the coffee and chocolate lovers out there! This is the treat you've been dreaming of !!",
};

/* ----------------------------- Root Layout ------------------------------ */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}
      >
        <div
          className="min-h-screen bg-gradient-to-b
          from-[#b06476]
          via-[#c97b8f]
          to-[#e6a9b4]
          text-[#f7e7eb]"
        >
          <Navbar />
          <div className="pt-20"></div>
          {children}
        </div>
      </body>
    </html>
  );
}
