import type {Metadata} from "next";
import "../styles/globals.css";
import Link from "next/link";
import Footer from "@/components/Footer";
import React from "react";
import Banner from "@/components/Banner";

export const metadata: Metadata = {
  title: "Next app | Hotwire for Frontend devs",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  const currentYear = new Date().getFullYear()

  return (
    <html lang="en">
    <body>
    <div className="bg-white flex justify-between p-1 items-start">
      <Link href="/" className="text-xl rounded text-orange-600">Top</Link>
      <span className="text-xl p-1 font-bold text-gray-400">Hotwire for Frontend Developers</span>
      <div className="text-lg p-2 rounded bg-black text-white">Next.js App router</div>
    </div>
    <Banner />
    {children}
    <Footer />
    </body>
    </html>
  );
}
