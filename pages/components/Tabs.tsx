/*
  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import React from "react";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Tabs({selectedTab, setSelectedTab}: {
  selectedTab: number,
  setSelectedTab: React.Dispatch<React.SetStateAction<number>>
}) {

  return (
    <div className="border-b border-gray-200">
      <nav aria-label="Tabs" className="-mb-px flex space-x-8">
        <div key={0}
             className={classNames(
               selectedTab === 0
                 ? 'border-indigo-500 text-indigo-600'
                 : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
               'whitespace-nowrap border-b-2 px-1 py-4 text-sm font-medium hover:cursor-pointer',
             )}
             onClick={() => setSelectedTab(0)}
        >
          Users
        </div>
        <div key={1}
             className={classNames(
               selectedTab === 1
                 ? 'border-indigo-500 text-indigo-600'
                 : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
               'whitespace-nowrap border-b-2 px-1 py-4 text-sm font-medium hover:cursor-pointer',
             )}
             onClick={() => setSelectedTab(1)}
        >
          Products
        </div>
      </nav>
    </div>
  )
}
