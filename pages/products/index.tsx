import Link from "next/link";
import {useEffect, useState} from "react";
import {Product} from "@/repositories/product";
import Layout from "@/components/Layout";
import Image from "next/image";
import rocketImage from "@/public/images/rocket.gif"

export default function ProductsIndex() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Fetch start for Products useEffect")
    fetch("/api/products").then(res => res.json())
      .then(data => {
        setProducts(data)
        setLoading(false)
      })
  },[])

  return (
    <Layout>
      {loading
        ? <div className="flex justify-evenly w-full mt-24 h-96 mb-48">
          <Image src={rocketImage} alt="loader" className="w-16 h-16"/>
        </div>
        : <>
          <div className="my-10 px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
              <div className="sm:flex-auto">
                <h1 className="demo-h1">Next.js useEffect画面遷移</h1>
                <h2 className="demo-h2">Products</h2>
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
                          className="px-4 py-3.5 text-left text-sm font-semibold text-gray-900">Catalog Number
                      </th>
                      <th scope="col"
                          className="px-4 py-3.5 text-left text-sm font-semibold text-gray-900">Price
                      </th>
                      <th scope="col"
                          className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pr-0">
                        Availability
                      </th>
                    </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                    {products.map((product, i) => (
                        <tr key={i} className="divide-x divide-gray-200">
                          <td
                            className="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">
                            {product.name}
                          </td>
                          <td className="whitespace-nowrap p-4 text-sm text-gray-500">
                            {product.catalogNumber}
                          </td>
                          <td
                            className="whitespace-nowrap p-4 text-sm text-gray-500">
                            {product.price}
                          </td>
                          <td
                            className="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">
                            {product.availability}
                          </td>
                        </tr>))}
                    </tbody>
                  </table>
                  <div className="my-10 flex items-center justify-center gap-x-6">
                    <Link href="/users"
                          className="btn-primary">
                      Usersへ useEffect</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      }
    </Layout>
  )
}
