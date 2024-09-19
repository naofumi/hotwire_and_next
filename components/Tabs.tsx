import React from "react";

const selectedClasses = "border-orange-500 text-orange-600 whitespace-nowrap border-b-2 px-1 py-4 text-sm font-medium hover:cursor-pointer"
const nonSelectedClasses = "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 whitespace-nowrap border-b-2 px-1 py-4 text-sm font-medium hover:cursor-pointer"

export default function Tabs({selectedTab, setSelectedTab}: {
  selectedTab: number,
  setSelectedTab: React.Dispatch<React.SetStateAction<number>>
}) {

  return (
    <div className="border-b border-gray-200">
      <nav aria-label="Tabs" className="-mb-px flex space-x-8">
        <div key={0}
             className={selectedTab === 0 ? selectedClasses : nonSelectedClasses}
             onClick={() => setSelectedTab(0)}
        >
          Users
        </div>
        <div key={1}
             className={selectedTab === 1 ? selectedClasses : nonSelectedClasses}
             onClick={() => setSelectedTab(1)}
        >
          Products
        </div>
      </nav>
    </div>
  )
}
