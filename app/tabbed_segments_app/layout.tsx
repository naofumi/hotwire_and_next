import React, {ReactNode} from "react";
import Link from "next/link";

export default function TabbedSegmentsLayout(
  {tabs}: { tabs: ReactNode }) {
  return (
    <div className="bg-white">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="demo-h1">
            タブメニューUI
          </h1>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a href="/api/hotwire/tabbed_segments_no_js"
               className="btn-outline-primary">
              Javascriptなし</a>
            <a href="/api/hotwire/tabbed_segments_turbodrive"
               className="btn-outline-primary">
              Turbo Drive</a>
            <a href="/api/hotwire/tabbed_segments_turboframes"
               className="btn-outline-primary">
              Turbo Frames</a>
            <Link href="/tabbed_segments"
                  className="btn-outline-primary">
              Next.js useEffect</Link>
            <Link href="/tabbed_segments_app"
                  className="btn-primary">
              Next.js Parallel routes</Link>
          </div>
          <div className="mt-10">
            <div className="mb-2">
              <label htmlFor="search" className="text-sm mr-2">Search</label>
              <input id="search" type="search" className="border rounded p-1" placeholder="ステート維持確認用"/>
            </div>
            {tabs}
          </div>
        </div>
      </div>
    </div>
  )
}
