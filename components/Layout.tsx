import Link from "next/link";
import Head from "next/head";
import LoadingIndicator from "@/components/LoadingIndicator";
import React from "react";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import DelaySetter from "@/components/DelaySetter";

export default function Layout({
                                 children,
                                 hideTechLabel,
                                 hideTopButton,
                                 hideTitle,
                                 showDelaySetter,
                                 hideLoadingIndicator
                               }: {
  children: React.ReactNode,
  hideTechLabel?: boolean,
  hideTopButton?: boolean,
  hideTitle?: boolean,
  showDelaySetter?: boolean,
  hideLoadingIndicator?: boolean,
}) {
  return (
    <LoadingIndicator hideLoadingIndicator={hideLoadingIndicator}>
      <Head>
        <title>Hotwire for Frontend devs</title>
      </Head>
      <div className="bg-white grid grid-cols-3 p-1 items-start mx-4">
        {hideTopButton
          ? <span></span>
          : <Link href="/" className="text-xl p-1 text-orange-600 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                 stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"/>
            </svg>
            <span>Top</span>
          </Link>}

        {hideTitle
          ? <span></span>
          : <div className="flex flex-col">
            <Link href="/" className="text-xl p-1 font-bold text-gray-400 hover:text-orange-600">Hotwire for Frontend
              Developers</Link>
            <Link href="/delay_setter" className="mx-auto block btn-outline-primary text-xs !p-1">Set delay</Link>
          </div>}

        {hideTechLabel
          ? <span></span>
          : <div>
            <div className="w-fit ml-auto text-lg p-1 rounded bg-black text-white">
              Next.js Pages router
            </div>
          </div>}
      </div>
      {showDelaySetter && <div className="mx-4 p-1 bg-white">
        <DelaySetter/>
      </div>}
      <Banner/>
      {children}
      <Footer/>
    </LoadingIndicator>
  )
}
