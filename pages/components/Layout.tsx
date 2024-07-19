import Link from "next/link";
import Head from "next/head";
import LoadingIndicator from "@/pages/components/LoadingIndicator";
import React from "react";
import Footer from "@/pages/components/Footer";

export default function Layout({children, hideTechLabel, hideTopButton}: {
  children: React.ReactNode,
  hideTechLabel?: boolean,
  hideTopButton?: boolean,
}) {
  const hideTitle  = hideTopButton ? true : false;
  return (
    <LoadingIndicator>
      <Head>
        <title>Next pages | Hotwire for Frontend devs</title>
      </Head>
      <div className="bg-white flex justify-between p-1">
        {hideTopButton
          ? <span></span>
          : <Link href="/" className="text-xl p-1 text-orange-600">Top</Link>}

        {hideTitle
          ? <span></span>
          : <span className="text-xl p-1 font-bold text-gray-400">Hotwire for Frontend Developers</span>}

        {hideTechLabel
          ? <span></span>
          : <div className="text-lg p-1 rounded bg-black text-white">
            React
          </div>}
      </div>
      {children}
      <Footer/>
    </LoadingIndicator>
  )
}
