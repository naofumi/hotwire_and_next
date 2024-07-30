// https://tailwindui.com/components/marketing/sections/cta-sections#component-25ce2a81d17545994655ccc4062651a4
import Link from "next/link";
import Tabs from "@/components/Tabs";
import {useState} from "react";
import Users from "@/components/tabbed_segments/Users";
import Products from "@/components/tabbed_segments/Products";
import Layout from "@/components/Layout";

export default function TabbedSegmentsIndexPage() {
  const [selectedTab, setSelectedTab] = useState<number>(0)

  return (
    <Layout>
      <div className="bg-white">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              タブで区切ったUI
            </h2>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a href="/api/hotwire/tabbed_segments_no_js"
                 className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-orange-600 shadow-sm hover:bg-orange-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">
                Javascriptなし</a>
              <a href="/api/hotwire/tabbed_segments_turbodrive"
                 className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-orange-600 shadow-sm hover:bg-orange-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">
                Turbo Drive</a>
              <a href="/api/hotwire/tabbed_segments_turboframes"
                 className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-orange-600 shadow-sm hover:bg-orange-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">
                Turbo Frames</a>
              <Link href="/tabbed_segments"
                    className="rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">
                Next.js useEffect</Link>
              <Link href="/tabbed_segments_app"
                    className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-orange-600 shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">
                Next.js Parallel routes</Link>
            </div>
            <div className="mt-10">
              <div className="mb-2">
                <label htmlFor="search" className="text-sm mr-2">Search</label>
                <input id="search" type="text" className="border rounded p-1"/>
              </div>
              <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab}></Tabs>
              {selectedTab === 0
                ? <Users/>
                : selectedTab === 1
                  ? <Products/>
                  : null}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
