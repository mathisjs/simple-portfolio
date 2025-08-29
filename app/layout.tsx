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
  title: "Portfolio — Your Name",
  description:
    "My Portfolio built with Next.js and Tailwind CSS.",
  metadataBase: new URL("https://example.com"),
  icons: {
    icon: "/favicon.ico",
  },
  themeColor: "#eff6ff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans  text-slate-900 selection:bg-indigo-100 selection:text-indigo-900 text-[15px] leading-7`}
      >
        {children}
      </body>
    </html>
  );
}
