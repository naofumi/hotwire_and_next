import React, {ReactNode} from "react";
import Link from "next/link";
import TabbedSegmentTechNav from "@/components/tabbed_segments/TabbedSegmentTechNav";

export default function TabbedSegmentsLayout(
  {tabs}: { tabs: ReactNode }) {
  return (
    <div className="bg-white">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="demo-h1">
            タブメニューUI
          </h1>
          <TabbedSegmentTechNav selected="parallel"/>
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
