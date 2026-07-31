import AOSProvider from "@/components/AOSProvider";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DIGILAN | فروشگاه تخصصی دوربین مداربسته و تجهیزات نظارتی",
  description:
    "دیجی‌لن؛ فروشگاه تخصصی دوربین مداربسته، تجهیزات نظارتی، سیستم‌های امنیتی، خدمات نصب، انتقال تصویر و پشتیبانی.",
  keywords: [
    "دیجی لن",
    "DIGILAN",
    "دوربین مداربسته",
    "سیستم امنیتی",
    "DVR",
    "NVR",
    "انتقال تصویر",
    "نصب دوربین",
    "تجهیزات شبکه",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-gray-900">
        <AOSProvider>{children}</AOSProvider>
      </body>
    </html>
  );
}