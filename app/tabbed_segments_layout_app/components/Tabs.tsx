import Link from "next/link";
import React from "react";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Tabs({selectedTab}: { selectedTab: number }) {
  return (
    <div className="border-b border-gray-200">
      <nav aria-label="Tabs" className="-mb-px flex space-x-8">
        <Link key={0}
              href="/tabbed_segments_layout_app/users"
              className={classNames(
                selectedTab === 0
                  ? 'border-orange-500 text-orange-600'
                  : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                'whitespace-nowrap border-b-2 px-1 py-4 text-sm font-medium hover:cursor-pointer',
              )}
        >
          Users
        </Link>
        <Link key={1}
              href="/tabbed_segments_layout_app/products"
              className={classNames(
                selectedTab === 1
                  ? 'border-orange-500 text-orange-600'
                  : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                'whitespace-nowrap border-b-2 px-1 py-4 text-sm font-medium hover:cursor-pointer',
              )}
        >
          Products
        </Link>
      </nav>
    </div>

  )
}
