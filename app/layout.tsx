import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zenith Fashion | Skinny Jeans Premium Hitam & Putih",
  description:
    "Temukan koleksi eksklusif skinny jeans hitam dan putih dari Zenith Fashion. Perpaduan sempurna antara kenyamanan, gaya modern, dan kesederhanaan elegan.",
  keywords: [
    "Zenith Fashion",
    "skinny jeans",
    "jeans hitam",
    "jeans putih",
    "fashion minimalis",
    "celana jeans premium",
    "pakaian modern",
    "fashion pria wanita",
  ],
  openGraph: {
    title: "Zenith Fashion — Skinny Jeans Premium untuk Gaya Modern",
    description:
      "Redefinisikan gaya Anda dengan koleksi skinny jeans eksklusif dari Zenith Fashion. Tersedia dalam warna hitam dan putih elegan.",
    url: "https://zenithfashion.vercel.app",
    siteName: "Zenith Fashion",
    images: [
      {
        url: "/images/og-banner.jpg", // bisa kamu ubah sesuai banner kamu
        width: 1200,
        height: 630,
        alt: "Zenith Fashion — Koleksi Skinny Jeans Premium",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zenith Fashion | Koleksi Skinny Jeans Premium",
    description:
      "Jelajahi koleksi skinny jeans hitam dan putih berkualitas tinggi dari Zenith Fashion.",
    images: ["/images/og-banner.jpg"],
    creator: "@zenithfashion",
  },
  authors: [{ name: "Zenith Fashion Team" }],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://zenithfashion.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-50`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
