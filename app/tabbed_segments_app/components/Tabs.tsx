import Link from "next/link";
import React from "react";

const selectedClasses = "border-orange-500 text-orange-600 whitespace-nowrap border-b-2 px-1 py-4 text-sm font-medium hover:cursor-pointer"
const nonSelectedClasses = "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 whitespace-nowrap border-b-2 px-1 py-4 text-sm font-medium hover:cursor-pointer"

export default function Tabs({selectedTab}: { selectedTab: number }) {
  return (
    <div className="border-b border-gray-200">
      <nav aria-label="Tabs" className="-mb-px flex space-x-8">
        <Link key={0}
              href="/tabbed_segments_app/users"
              className={selectedTab === 0 ? selectedClasses : nonSelectedClasses}
        >
          Users
        </Link>
        <Link key={1}
              href="/tabbed_segments_app/products"
              className={selectedTab === 1 ? selectedClasses : nonSelectedClasses}
        >
          Products
        </Link>
      </nav>
    </div>
  )
}
