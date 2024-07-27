import Link from "next/link";
import Layout from "@/components/Layout";
import {allProducts, Product} from "@/repositories/product";

export async function getStaticProps() {
  const products = await allProducts()
  return {props: {products}}
}

export default function ProductsSsgIndex({products}: {products: Product[]}) {
  return (
    <Layout>
      <>
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
                  <Link href="/users_ssg"
                        className="rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">
                    Usersへ SSG</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </Layout>
  )
}
