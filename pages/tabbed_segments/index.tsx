// https://tailwindui.com/components/marketing/sections/cta-sections#component-25ce2a81d17545994655ccc4062651a4
import Link from "next/link";
import Tabs from "@/components/Tabs";
import {useState} from "react";
import Users from "@/components/tabbed_segments/Users";
import Products from "@/components/tabbed_segments/Products";
import Layout from "@/components/Layout";
import TabbedSegmentTechNav from "@/components/tabbed_segments/TabbedSegmentTechNav";

export default function TabbedSegmentsIndexPage() {
  const [selectedTab, setSelectedTab] = useState<number>(0)

  return (
    <Layout>
      <div className="bg-white">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="demo-h1">
              タブメニューUI
            </h1>
            <TabbedSegmentTechNav selected="use_effect"/>
            <div className="mt-10">
              <div className="mb-2">
                <label htmlFor="search" className="text-sm mr-2">Search</label>
                <input id="search" type="search" className="border rounded p-1" placeholder="ステート維持確認用"/>
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
