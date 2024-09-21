// https://tailwindui.com/components/marketing/sections/cta-sections#component-25ce2a81d17545994655ccc4062651a4
import Tabs from "@/components/Tabs";
import React, {useState} from "react";
import Layout from "@/components/Layout";
import TabbedSegmentTechNav from "@/components/tabbed_segments/TabbedSegmentTechNav";
import {Product} from "@/repositories/product";
import Link from "next/link";

export async function getServerSideProps() {
  const response = await fetch(process.env.URL + "/api/products")
  const data : Product[] = await response.json()

  return {props: {products: data}}
}

export default function TabbedSegmentsIndexPage({products}: {products: Product[]}) {
  return (
    <Layout>
      <div className="bg-white">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="demo-h1">
              タブメニューUI
            </h1>
            <TabbedSegmentTechNav selected="ssr"/>
            <div className="mt-10">
              <div className="mb-2">
                <label htmlFor="search" className="text-sm mr-2">Search</label>
                <input id="search" type="search" className="border rounded p-1" placeholder="ステート維持確認用"/>
              </div>
              <div className="border-b border-gray-200">
                <nav aria-label="Tabs" className="-mb-px flex space-x-8">
                  <Link href="/tabbed_segments_ssr" key={0} scroll={false}
                        className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 whitespace-nowrap border-b-2 px-1 py-4 text-sm font-medium hover:cursor-pointer"
                  >
                    Users
                  </Link>
                  <Link href="/tabbed_segments_ssr/products" key={1} scroll={false}
                        className="border-orange-500 text-orange-600 whitespace-nowrap border-b-2 px-1 py-4 text-sm font-medium hover:cursor-pointer"
                  >
                    Products
                  </Link>
                </nav>
              </div>
              <div className="my-10 px-4 sm:px-6 lg:px-8">
                <div className="sm:flex sm:items-center">
                  <div className="sm:flex-auto">
                    <h1 className="text-base font-semibold leading-6 text-gray-900">Products</h1>
                  </div>
                </div>
                <div className="mt-8 flow-root">
                  <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                      <table className="min-w-full divide-y divide-gray-300">
                        <thead>
                        <tr className="divide-x divide-gray-200">
                          <th scope="col"
                              className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                            Name
                          </th>
                          <th scope="col"
                              className="px-4 py-3.5 text-left text-sm font-semibold text-gray-900">Catalog #
                          </th>
                          <th scope="col"
                              className="px-4 py-3.5 text-left text-sm font-semibold text-gray-900">Price
                          </th>
                          <th scope="col"
                              className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pr-0">
                            Availibility
                          </th>
                        </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 bg-white">
                        {products.map((product, i) => (
                          <tr key={i} className="divide-x divide-gray-200">
                            <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">
                              {product.name}
                            </td>
                            <td className="whitespace-nowrap p-4 text-sm text-gray-500">{product.catalogNumber}</td>
                            <td className="whitespace-nowrap p-4 text-sm text-gray-500">{product.price} JPY</td>
                            <td
                              className="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">{product.availability}</td>
                          </tr>
                        ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
