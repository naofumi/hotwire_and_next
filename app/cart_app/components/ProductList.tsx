import AddedBadge from "@/components/cart/AddedBadge";
import ProductAddButton from "./ProductAddButton";
import {Cart} from "@/repositories/cart";
import {Product} from "@/repositories/product";
import {getCookie} from "cookies-next"
import {cookies} from "next/headers"

export const dynamic = 'force-dynamic'
export const revalidate = 0

async function getProducts(): Promise<Product[]> {
  const response = await fetch(process.env.URL + "/api/products");
  const products = await response.json();

  return products
}

async function getCart(): Promise<Cart> {
  const cartString = getCookie("cart", {cookies})
  const cart = cartString ? JSON.parse(cartString) : {}

  return cart
}

export default async function ProductList() {
  const products = await getProducts()
  const cart = await getCart()

  return (
    <div className="mt-8 flow-root">
      <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <table className="min-w-full divide-y divide-gray-300">
            <thead>
            <tr className="divide-x divide-gray-200">
              <th scope="col" className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                Name
              </th>
              <th scope="col" className="px-4 py-3.5 text-left text-sm font-semibold text-gray-900">Catalog
                Number
              </th>
              <th scope="col" className="px-4 py-3.5 text-left text-sm font-semibold text-gray-900">Price</th>
              <th scope="col" className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pr-0">
                Availability
              </th>
              <th scope="col"
                  className="w-36 py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pr-0">
                Cart
              </th>
            </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
            {
              products.map((product, i) => {
                return (<tr key={i} className="divide-x divide-gray-200">
                  <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">
                    {product.name}
                  </td>
                  <td className="whitespace-nowrap p-4 text-sm text-gray-500">
                    {product.catalogNumber}
                  </td>
                  <td className="whitespace-nowrap p-4 text-sm text-gray-500">
                    {product.price}
                  </td>
                  <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">
                    {product.availability}
                  </td>
                  <td className="text-center whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">
                    {cart[product.id.toString()]
                        ? <AddedBadge/>
                        : <ProductAddButton product={product}/>}
                  </td>
                </tr>)
              })
            }
            </tbody>
          </table>
        </div>
      </div>
    </div>

  )
}
