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
    <html lang="ja">
    <body>
    <div className="bg-white grid grid-cols-3 p-1 items-start mx-4">
      <Link href="/" className="text-xl rounded text-orange-600 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
             stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"/>
        </svg>
        <span>Top</span>
      </Link>
      <div className="flex flex-col justify-center">
        <Link href="/" className="text-xl p-1 font-bold text-gray-400 hover:text-orange-600">Hotwire for Frontend
          Developers</Link>
        <Link href="/delay_setter" className="mx-auto block btn-outline-primary text-xs !p-1">Set delay</Link>
      </div>
      <div>
        <div className="w-fit ml-auto text-lg p-1 rounded bg-black text-white">Next.js App router</div>
      </div>
    </div>
    <Banner/>
    {children}
    <Footer/>
    </body>
    </html>
  );
}
